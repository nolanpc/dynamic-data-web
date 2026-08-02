import { Metadata } from "next";
import HeroSection from "@/components/sections/home/HeroSection";
import ServicesPreviewSection from "@/components/sections/home/ServicesPreviewSection";
import WorkflowPreviewSection from "@/components/sections/home/WorkflowPreviewSection";
import StoryPreviewSection from "@/components/sections/home/StoryPreviewSection";
import CtaBanner from "@/components/shared/CtaBanner";

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
      <StoryPreviewSection />
      <CtaBanner
        title="¿Listos para modernizar tu operación?"
        buttonLabel="Agenda una asesoría"
      />
    </>
  );
}
