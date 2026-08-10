"use client";

import { useState, useEffect } from "react";
import Button from "@/components/ui/Button";

const hcwhyOptions = [
  "Desarrollo web y de productos digitales",
  "Automatización de operaciones",
  "Consultoría técnica o arquitectura de software",
  "Optimización de velocidad y rendimiento",
  "No estoy seguro — quiero orientación"
];

type FieldErrors = {
  [key: string]: string;
};

export default function ContactFormSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});
  const [generalError, setGeneralError] = useState("");
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFieldErrors({});
    setGeneralError("");

    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    try {
      const response = await fetch("http://localhost:3001/mailing/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullname: form.get("name"),
          email: form.get("email"),
          company: form.get("company"),
          service: form.get("service"),
          message: form.get("message"),
        }),
      });

      const data = await response.json();

      if ((response.ok || data.success) && !data.errors) {
        setStatus("sent");
        setShowToast(true);
        formElement.reset();
      } else {
        setStatus("error");
        if (data.errors && Array.isArray(data.errors)) {
          const errorsMap: FieldErrors = {};
          data.errors.forEach((err: { field: string; msg: string }) => {
            const fieldKey = err.field === "fullname" ? "name" : err.field;
            errorsMap[fieldKey] = err.msg;
          });
          setFieldErrors(errorsMap);
        } else {
          setGeneralError(data.message || "Ocurrió un error, intenta de nuevo.");
        }
      }
    } catch (err) {
      console.error("Error de conexión:", err);
      setStatus("error");
      setGeneralError("No se pudo conectar con el servidor.");
    }
  }

  return (
    <div className="relative rounded-2xl bg-white p-4 shadow-none items-center">
      
      {status === "sending" && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-xs animate-in fade-in">
          <div className="flex flex-col items-center gap-3 rounded-2xl bg-white px-8 py-6 shadow-2xl">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-navy border-t-transparent" />
            <p className="text-sm font-semibold text-navy">Enviando mensaje...</p>
            <p className="text-xs text-gray-400">Por favor, espera un momento.</p>
          </div>
        </div>
      )}

      {showToast && (
        <div className="fixed top-10 right-6 z-50 flex items-start gap-3 rounded-2xl border border-green-200 bg-white p-4 shadow-xl transition-all duration-300 animate-in fade-in slide-in-from-top-5 max-w-sm">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500 text-white font-bold text-sm">
            ✓
          </div>
          <div className="flex-1 pr-2">
            <h5 className="font-semibold text-sm text-gray-900">¡Mensaje enviado con éxito!</h5>
            <p className="text-xs text-gray-600 mt-0.5">Nos pondremos en contacto contigo muy pronto.</p>
          </div>
          <button 
            onClick={() => setShowToast(false)}
            className="text-gray-400 hover:text-gray-600 text-sm font-bold p-1 cursor-pointer"
            aria-label="Cerrar notificación"
          >
            ✕
          </button>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-1">
            <label className="block text-sm font-semibold text-navy">
              Nombre completo
            </label>
            <input
              name="name"
              placeholder="¿Cómo te llamas?"
              className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none ${
                fieldErrors.name ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-navy"
              }`}
            />
            {fieldErrors.name && (
              <p className="text-xs text-red-500 mt-1">{fieldErrors.name}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-navy">
              Correo electrónico
            </label>
            <input
              name="email"
              type="email"
              placeholder="tu@correo.com"
              className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none ${
                fieldErrors.email ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-navy"
              }`}
            />
            {fieldErrors.email && (
              <p className="text-xs text-red-500 mt-1">{fieldErrors.email}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-navy">
              Empresa (opcional)
            </label>
            <input
              name="company"
              placeholder="Nombre de tu negocio"
              className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none ${
                fieldErrors.company ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-navy"
              }`}
            />
            {fieldErrors.company && (
              <p className="text-xs text-red-500 mt-1">{fieldErrors.company}</p>
            )}
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-semibold text-navy">
              ¿En qué te ayudamos?
            </label>
            <select
              name="service"
              className={`w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-gray-800 focus:outline-none ${
                fieldErrors.service ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-navy"
              }`}
            >
              {hcwhyOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            {fieldErrors.service && (
              <p className="text-xs text-red-500 mt-1">{fieldErrors.service}</p>
            )}
          </div>
        </div>

        <div className="space-y-1">
          <label className="block text-sm font-semibold text-navy">
            Cuéntanos sobre tu proyecto
          </label>
          <textarea
            name="message"
            placeholder="¿Qué te gustaría lograr?"
            rows={3}
            className={`resize-none w-full rounded-xl border bg-white px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none ${
              fieldErrors.message ? "border-red-500 focus:border-red-500" : "border-gray-200 focus:border-navy"
            }`}
          />
          {fieldErrors.message && (
            <p className="text-xs text-red-500 mt-1">{fieldErrors.message}</p>
          )}
        </div>

        <Button 
          type="submit" 
          disabled={status === "sending"}
          className="cursor-pointer w-full rounded-full !bg-navy py-4 text-center font-semibold text-white transition-colors hover:!bg-navy/90"
        >
          {status === "sending" ? "Enviando..." : "Enviar mensaje"}
        </Button>
        
        {status === "error" && generalError && (
          <p className="text-sm text-red-600 text-center">{generalError}</p>
        )}

        <p className="text-xs text-gray-400 text-center">
          Al enviar, se abrirá tu cliente de correo con el mensaje ya redactado para que lo confirmes y envíes — así llega directo a nuestra bandeja.
        </p>
      </form>
    </div>
  );
}