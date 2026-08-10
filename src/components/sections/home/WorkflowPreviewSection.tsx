import SectionHeading from "@/components/shared/SectionHeading";
import StepItem from "@/components/ui/StepItem";
import StatsBar from "@/components/shared/StatsBar";

const steps = [
  { number: 1, title: "Diagnóstico", description: "Entendemos tu operación y dónde está el cuello de botella." },
  { number: 2, title: "Coordinación", description: "Definimos alcance, tiempos y responsables sin letra chica." },
  { number: 3, title: "Lanzamiento rápido", description: "Entregamos en ciclos cortos para ver resultados antes." },
];

const stats = [
  { value: "0", label: "Sorpresas" },
  { value: "100%", label: "Transparencia" },
  { value: "24h", label: "Respuesta" },
  { value: "1", label: "Punto de contacto" },
];

export default function WorkflowPreviewSection() {
  return (
    <section className="bg-navy py-16 px-38">
      <div className="container">
        <SectionHeading
          eyebrow={undefined}
          subheading="CÓMO TRABAJAMOS"
          subheadingColor="text-primary-light"
          title="Tres pasos, sin sorpresas"
          description="Un proceso simple para que sepas siempre en qué etapa está tu proyecto."
          theme="dark"
        />
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <StepItem key={step.number} variant="compact" theme="dark" {...step} />
          ))}
        </div>
        <div className="mt-10">
          <StatsBar stats={stats} />
        </div>
      </div>
    </section>
  );
}
