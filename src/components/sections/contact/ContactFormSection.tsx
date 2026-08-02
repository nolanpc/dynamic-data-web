"use client";

import { useState } from "react";
import Button from "@/components/ui/Button";

export default function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = new FormData(event.currentTarget);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          message: form.get("message"),
        }),
      });
      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="rounded-xl bg-navy p-8">
      <h3 className="mb-6 text-lg font-semibold text-white">Envíanos un mensaje</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Nombre"
          required
          className="w-full rounded-md border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50"
        />
        <input
          name="email"
          type="email"
          placeholder="Correo"
          required
          className="w-full rounded-md border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50"
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          required
          rows={4}
          className="w-full rounded-md border border-white/20 bg-transparent px-4 py-3 text-sm text-white placeholder:text-white/50"
        />
        <Button type="submit" disabled={status === "sending"}>
          {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        </Button>
        {status === "sent" && (
          <p className="text-sm text-green-400">Mensaje enviado con éxito.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-400">Ocurrió un error, intenta de nuevo.</p>
        )}
      </form>
    </div>
  );
}
