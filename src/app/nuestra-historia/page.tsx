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
        description="Dynamic Data es un equipo nuevo con ganas de demostrar lo que
        sabe hacer. Eso significa precios más accesibles mientras
        construimos nuestro portafolio, comunicación directa con quien de
        verdad hace el trabajo, y un compromiso real con que tu proyecto
        salga bien — porque también es el nuestro."
        px="lg:px-40"
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
