import nodemailer from "nodemailer";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

const SENDGRID_URL = "https://api.sendgrid.com/v3/mail/send";

export function validateContactPayload(data: any): ContactPayload {
  if (!data || typeof data !== "object") {
    throw new Error("Los datos enviados no son válidos.");
  }

  const name = String(data.name || "").trim();
  const email = String(data.email || "").trim();
  const message = String(data.message || "").trim();

  if (!name || !email || !message) {
    throw new Error("Todos los campos son obligatorios.");
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    throw new Error("El correo electrónico no es válido.");
  }

  if (message.length < 10) {
    throw new Error("El mensaje debe tener al menos 10 caracteres.");
  }

  return { name, email, message };
}

function parseSender(raw: string | undefined, fallbackEmail?: string) {
  const defaultEmail = fallbackEmail || "no-reply@example.com";
  if (!raw) {
    return { email: defaultEmail };
  }

  const match = raw.match(/^(.*)<([^>]+)>$/);
  if (match) {
    const name = match[1].trim().replace(/^"|"$/g, "");
    const email = match[2].trim();
    return { email, name: name || undefined };
  }

  if (raw.includes("@")) {
    return { email: raw.trim() };
  }

  if (fallbackEmail) {
    return { email: fallbackEmail, name: raw.trim() };
  }

  return { email: defaultEmail, name: raw.trim() };
}

export async function sendContactEmail(payload: ContactPayload) {
  const toEmail =
    process.env.SENDGRID_TO_EMAIL || process.env.EMAIL_TO || process.env.TO_EMAIL;
  const fromRaw =
    process.env.SENDGRID_FROM_EMAIL || process.env.EMAIL_FROM || process.env.FROM_EMAIL;
  const from = parseSender(fromRaw, process.env.USER_EMAIL);

  if (!toEmail) {
    throw new Error(
      "No se ha configurado el correo de destino. Define SENDGRID_TO_EMAIL o EMAIL_TO."
    );
  }

  if (!from.email) {
    throw new Error(
      "No se ha configurado el correo de origen. Define SENDGRID_FROM_EMAIL, EMAIL_FROM o USER_EMAIL."
    );
  }

  const subject = "Nuevo mensaje desde el formulario de contacto de tu sitio web";
  const text = `Nombre: ${payload.name}\nCorreo: ${payload.email}\n\nMensaje:\n${payload.message}`;

  const sendGridApiKey = process.env.SENDGRID_API_KEY;
  const smtpHost = process.env.HOST_EMAIL;
  const smtpUser = process.env.USER_EMAIL;
  const smtpPass = process.env.PASS_EMAIL;

  if (sendGridApiKey) {
    console.log("[email] Using SendGrid", {
      to: toEmail,
      from: from.email,
      senderName: payload.name,
      senderEmail: payload.email,
      subject,
    });

    const response = await fetch(SENDGRID_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${sendGridApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: toEmail }],
            subject,
          },
        ],
        from: {
          email: from.email,
          name: from.name || "Contacto Web",
        },
        reply_to: {
          email: payload.email,
          name: payload.name,
        },
        content: [
          {
            type: "text/plain",
            value: text,
          },
        ],
      }),
    });

    console.log("[email] SendGrid response status:", response.status);

    if (!response.ok) {
      const details = await response.text();
      console.log("[email] SendGrid error details:", details);
      throw new Error(
        `No se pudo enviar el correo por SendGrid. Response status ${response.status}. ${details}`
      );
    }

    console.log("[email] SendGrid email sent successfully.");
    return true;
  }

  if (smtpHost && smtpUser && smtpPass) {
    const secure = String(process.env.SECURE_EMAIL).toLowerCase() === "true";
    const requireTLS = String(process.env.REQUIRE_TLS_EMAIL).toLowerCase() === "true";
    const rejectUnauthorized =
      String(process.env.EMAIL_REJECT_UNAUTHORIZED).toLowerCase() === "true";
    const port = Number(process.env.PORT_EMAIL) || (secure ? 465 : 587);

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port,
      secure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      requireTLS,
      tls: {
        rejectUnauthorized,
      },
    });

    const mailOptions = {
      from: from.name ? `${from.name} <${from.email}>` : from.email,
      to: toEmail,
      subject,
      text,
      replyTo: `${payload.name} <${payload.email}>`,
    };

    console.log("[email] Using SMTP", {
      host: smtpHost,
      port,
      secure,
      to: toEmail,
      from: mailOptions.from,
      senderName: payload.name,
      senderEmail: payload.email,
    });

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log("[email] SMTP email sent successfully", {
        messageId: info.messageId,
        envelope: info.envelope,
      });
      return true;
    } catch (error) {
      console.log("[email] SMTP send error:", error);
      throw new Error(
        `No se pudo enviar el correo por SMTP. ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    }
  }

  throw new Error(
    "No se encontró un método de envío de correo configurado. Define SENDGRID_API_KEY o las variables SMTP de correo."
  );
}
