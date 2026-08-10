import { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import ServicesPreviewSection from "@/components/sections/home/ServicesPreviewSection";
import WorkflowPreviewSection from "@/components/sections/home/WorkflowPreviewSection";
import StoryPreviewSection from "@/components/sections/home/StoryPreviewSection";
import CtaBanner from "@/components/shared/CtaBanner";
import StatsBarPreviewSection from "@/components/sections/home/StatsBarPreviewSection";

export const metadata: Metadata = {
  title: "Dynamic Data",
  description: "Moderniza tu operación, sin frenar tu crecimiento.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesPreviewSection />
      <WorkflowPreviewSection />
      <StatsBarPreviewSection />
      <StoryPreviewSection />
      <CtaBanner
        title="¿Listos para modernizar tu operación?"
        description="Cuéntanos en qué punto está tu negocio hoy y en 24 horas te contactamos con una propuesta clara, sin compromiso."
        buttonLabel="Hablemos de tu proyecto"
      />
    </>
  );
}
