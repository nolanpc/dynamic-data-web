import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import ServicesListSection from "@/components/sections/services/ServicesListSection";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Servicios | Dynamic Data",
  description: "Cuatro formas de mover tu negocio hacia adelante.",
};

export default function ServiciosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Servicios"
        subheading="QUÉ HACEMOS"
        title="Cuatro formas de mover tu negocio hacia adelante"
        description="No creemos en soluciones genéricas. Cada servicio empieza con una conversación sobre cómo operas hoy, para que lo que construyamos resuelva algo real — no para venderte más de lo que necesitas."
        px="lg:px-40"
      />
      <ServicesListSection />
      <CtaBanner
        title="¿No sabes cuál de estos servicios necesitas?"
        description="Cuéntanos qué te trae por aquí y te ayudamos a descubrirlo, sin compromiso."
        buttonLabel="Hablemos de tu proyecto"
      />
    </>
  );
}
