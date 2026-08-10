import { NextRequest, NextResponse } from "next/server";
import { sendContactEmail, validateContactPayload } from "@/lib/email";

export async function POST(request: NextRequest) {
  try {
    const payload = await request.json();
    console.log("[contact] Request received:", {
      email: payload?.email,
      message: payload?.message,
      fullname: payload?.fullname,
      company: payload?.company,
      service: payload?.service,
    });

    const contactData = validateContactPayload(payload);

    const result = await sendContactEmail(contactData);
    console.log("[contact] Email send result:", result);

    return NextResponse.json(
      { message: "Tu mensaje fue enviado con éxito. Te contactaremos pronto." },
      { status: 200 }
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error interno del servidor.";
    console.log("[contact] Error sending contact email:", message, error);
    const status = [
      "obligatorios",
      "válido",
      "no son válidos",
      "no es válido",
    ].some((text) => message.toLowerCase().includes(text))
      ? 400
      : 500;

    return NextResponse.json({ error: message }, { status });
  }
}
