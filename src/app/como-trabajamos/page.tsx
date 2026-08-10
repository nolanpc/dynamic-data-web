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
        description="Sabemos que &ldquo;confiar en una empresa nueva&rdquo; da un poco de nervio. Por eso somos extra claros en cómo trabajamos — para que sepas exactamente qué esperar en cada etapa."
        px="lg:px-40"
      />
      <StepsTimelineSection />
      <CommunicationSection />
      <ToolsSection />
      <CtaBanner
        title="¿Listos para el primer paso?"
        description="El diagnóstico inicial no tiene costo ni compromiso — solo una conversación honesta sobre tu negocio."
        buttonLabel="Agenda tu diagnóstico"
      />
    </>
  );
}
