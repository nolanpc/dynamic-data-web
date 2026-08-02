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
        title="Cuatro formas de mover tu negocio hacia adelante"
        description="Elige por dónde empezar, nosotros nos encargamos del resto."
      />
      <ServicesListSection />
      <CtaBanner
        title="¿No sabes cuál de estos servicios necesitas?"
        buttonLabel="Agenda una asesoría"
      />
    </>
  );
}
