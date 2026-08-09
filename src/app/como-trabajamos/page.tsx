import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import StepsTimelineSection from "@/components/sections/workflow/StepsTimelineSection";
import CommunicationSection from "@/components/sections/workflow/CommunicationSection";
import ToolsSection from "@/components/sections/workflow/ToolsSection";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Cómo trabajamos | Dynamic Data",
  description: "Tres pasos, sin sorpresas ni letra chica.",
};

export default function ComoTrabajamosPage() {
  return (
    <>
      <PageHeader
        eyebrow="Cómo trabajamos"
        subheading="NUESTRO PROCESO"
        title="Tres pasos, sin sorpresas ni letra chica"
        description="Sabes exactamente qué esperar en cada etapa de tu proyecto."
      />
      <StepsTimelineSection />
      <CommunicationSection />
      <ToolsSection />
      <CtaBanner
        title="¿Listos para el primer paso?"
        buttonLabel="Agenda una asesoría"
      />
    </>
  );
}
