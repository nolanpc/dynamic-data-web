import { Resend } from "resend";

// --- IMPLEMENTACIÓN ANTERIOR (nodemailer + SendGrid) ---
// import nodemailer from "nodemailer";
// const SENDGRID_URL = "https://api.sendgrid.com/v3/mail/send";

export type ContactPayload = {
  name: string;
  email: string;
  message: string;
};

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

export async function sendContactEmail(payload: ContactPayload) {
  const toEmail =
    process.env.RESEND_TO_EMAIL ||
    process.env.SENDGRID_TO_EMAIL ||
    process.env.EMAIL_TO ||
    process.env.TO_EMAIL;
  const fromEmail =
    process.env.RESEND_FROM_EMAIL ||
    process.env.SENDGRID_FROM_EMAIL ||
    process.env.EMAIL_FROM ||
    process.env.FROM_EMAIL ||
    process.env.USER_EMAIL;

  if (!toEmail) {
    throw new Error(
      "No se ha configurado el correo de destino. Define RESEND_TO_EMAIL o EMAIL_TO.",
    );
  }

  if (!fromEmail) {
    throw new Error(
      "No se ha configurado el correo de origen. Define RESEND_FROM_EMAIL o EMAIL_FROM.",
    );
  }

  const subject = "Nuevo mensaje desde el formulario de contacto de tu sitio web";
  const text = `Nombre: ${payload.name}\nCorreo: ${payload.email}\n\nMensaje:\n${payload.message}`;

  // --- IMPLEMENTACIÓN CON RESEND ---
  const resendApiKey = process.env.RESEND_API_KEY;

  if (resendApiKey) {
    const resend = new Resend(resendApiKey);

    console.log("[email] Using Resend", {
      to: toEmail,
      from: fromEmail,
      senderName: payload.name,
      senderEmail: payload.email,
      subject,
    });

    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject,
      text,
      replyTo: `${payload.name} <${payload.email}>`,
    });

    if (error) {
      console.log("[email] Resend error:", error);
      throw new Error(`No se pudo enviar el correo por Resend. ${error.message}`);
    }

    console.log("[email] Resend email sent successfully.", { id: data?.id });
    return true;
  }

  // --- IMPLEMENTACIÓN ANTERIOR CON SENDGRID ---
  // const sendGridApiKey = process.env.SENDGRID_API_KEY;
  // if (sendGridApiKey) {
  //   console.log("[email] Using SendGrid", { to: toEmail, from: fromEmail, subject });
  //   const response = await fetch(SENDGRID_URL, {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${sendGridApiKey}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       personalizations: [{ to: [{ email: toEmail }], subject }],
  //       from: { email: fromEmail, name: "Contacto Web" },
  //       reply_to: { email: payload.email, name: payload.name },
  //       content: [{ type: "text/plain", value: text }],
  //     }),
  //   });
  //   console.log("[email] SendGrid response status:", response.status);
  //   if (!response.ok) {
  //     const details = await response.text();
  //     console.log("[email] SendGrid error details:", details);
  //     throw new Error(
  //       `No se pudo enviar el correo por SendGrid. Response status ${response.status}. ${details}`
  //     );
  //   }
  //   console.log("[email] SendGrid email sent successfully.");
  //   return true;
  // }

  // --- IMPLEMENTACIÓN ANTERIOR CON NODEMAILER (SMTP) ---
  // const smtpHost = process.env.HOST_EMAIL;
  // const smtpUser = process.env.USER_EMAIL;
  // const smtpPass = process.env.PASS_EMAIL;
  // if (smtpHost && smtpUser && smtpPass) {
  //   const secure = String(process.env.SECURE_EMAIL).toLowerCase() === "true";
  //   const requireTLS = String(process.env.REQUIRE_TLS_EMAIL).toLowerCase() === "true";
  //   const rejectUnauthorized =
  //     String(process.env.EMAIL_REJECT_UNAUTHORIZED).toLowerCase() === "true";
  //   const port = Number(process.env.PORT_EMAIL) || (secure ? 465 : 587);
  //   const transporter = nodemailer.createTransport({
  //     host: smtpHost,
  //     port,
  //     secure,
  //     auth: { user: smtpUser, pass: smtpPass },
  //     requireTLS,
  //     tls: { rejectUnauthorized },
  //   });
  //   const mailOptions = {
  //     from: fromEmail,
  //     to: toEmail,
  //     subject,
  //     text,
  //     replyTo: `${payload.name} <${payload.email}>`,
  //   };
  //   console.log("[email] Using SMTP", { host: smtpHost, port, secure, to: toEmail });
  //   try {
  //     const info = await transporter.sendMail(mailOptions);
  //     console.log("[email] SMTP email sent successfully", {
  //       messageId: info.messageId,
  //       envelope: info.envelope,
  //     });
  //     return true;
  //   } catch (error) {
  //     console.log("[email] SMTP send error:", error);
  //     throw new Error(
  //       `No se pudo enviar el correo por SMTP. ${
  //         error instanceof Error ? error.message : String(error)
  //       }`
  //     );
  //   }
  // }

  throw new Error(
    "No se encontró un método de envío de correo configurado. Define RESEND_API_KEY.",
  );
}
