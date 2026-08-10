import { Metadata } from "next";
import PageHeader from "@/components/shared/PageHeader";
import StoryIntroSection from "@/components/sections/story/StoryIntroSection";
import TeamSection from "@/components/sections/story/TeamSection";
import ValuesSection from "@/components/sections/story/ValuesSection";
import CtaBanner from "@/components/shared/CtaBanner";

export const metadata: Metadata = {
  title: "Nuestra Historia | Dynamic Data",
  description: "Estamos empezando — y lo decimos con orgullo.",
};

export default function NuestraHistoriaPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nuestra historia"
        subheading="QUIÉNES SOMOS"
        title="Estamos empezando — y lo decimos con orgullo"
        description="Un equipo nuevo, con toda la atención puesta en cada proyecto."
      />
      <StoryIntroSection />
      <TeamSection />
      <ValuesSection />
      <CtaBanner
        title="¿Listos para el primer paso?"
        description="El diagnóstico inicial no tiene costo ni compromiso — solo una conversación honesta sobre tu negocio."
        buttonLabel="Agenda tu diagnóstico"
      />
    </>
  );
}
