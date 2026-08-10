import SectionHeading from "@/components/shared/SectionHeading";
import StatsBar from "@/components/shared/StatsBar";
import StepHomeItem from "@/components/ui/StepHomeItem";

const steps = [
  { 
    number: 1,
    numberBgColor: "bg-primary",
    numberColor: "text-white",
    title: "Diagnóstico", description: "Revisamos tu operación y tu presencia digital actual para encontrar dónde está el mayor impacto." },
  { 
    number: 2, 
    numberBgColor: "bg-primary",
    numberColor: "text-white",
    title: "Coordinación", description: "Diseñamos y desarrollamos la solución en ciclos cortos, con avances que puedes revisar cada semana." },
  { number: 3, 
    numberBgColor: "bg-peach",
    numberColor: "text-navy",
    title: "Lanzamiento rápido", description: "Publicamos, medimos resultados reales y seguimos optimizando contigo después del lanzamiento." },
];

// const stats = [
//   { value: "0", label: "Sorpresas" },
//   { value: "100%", label: "Transparencia" },
//   { value: "24h", label: "Respuesta" },
//   { value: "1", label: "Punto de contacto" },
// ];

export default function WorkflowPreviewSection() {
  return (
    <section className="bg-navy py-16 lg:px-38">
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
          {steps.map((step, index) => (
            <StepHomeItem key={step.number} variant="compact" theme="dark" {...step} isLast={index === steps.length - 1} />
          ))}
        </div>
        {/* <div className="mt-10">
          <StatsBar stats={stats} />
        </div> */}
      </div>
    </section>
  );
}
