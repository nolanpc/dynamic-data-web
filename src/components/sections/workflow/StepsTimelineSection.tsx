import StepItem from "@/components/ui/StepItem";

const steps = [
  {
    number: 1,
    title: "Diagnóstico",
    description: "Entendemos tu operación y dónde está el cuello de botella.",
    tags: ["Levantamiento web y de producto", "Análisis de procesos"],
  },
  {
    number: 2,
    title: "Coordinación",
    description: "Definimos alcance, tiempos y responsables sin letra chica.",
    tags: ["Plan de trabajo", "Presupuesto cerrado"],
  },
  {
    number: 3,
    title: "Lanzamiento rápido",
    description: "Entregamos en ciclos cortos para ver resultados antes.",
    tags: ["Entregas incrementales", "Acompañamiento post-lanzamiento"],
  },
];

export default function StepsTimelineSection() {
  return (
    <section className="container space-y-10 py-16">
      {steps.map((step) => (
        <StepItem key={step.number} variant="detailed" {...step} />
      ))}
    </section>
  );
}
