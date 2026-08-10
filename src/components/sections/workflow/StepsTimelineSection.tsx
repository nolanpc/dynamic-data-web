import StepItem from "@/components/ui/StepItem";

const steps = [
  {
    number: 1,
    numberBgColor: "bg-navy",
    numberColor: "text-white",
    title: "Diagnóstico",
    description: "Antes de proponer nada, entendemos tu operación tal como es hoy: qué herramientas usas, dónde se traba tu equipo, y qué le está costando dinero o tiempo a tu negocio. Esta etapa es sin costo y sin compromiso.",
    tags: ["Reunión inicial", "Revisión de tu situación actual", "Propuesta clara con alcance y precio"],
  },
  {
    number: 2,
    numberBgColor: "bg-navy",
    numberColor: "text-white",
    title: "Construcción",
    description: "Diseñamos y desarrollamos la solución en ciclos cortos — no desaparecemos por semanas para reaparecer con un 'producto terminado' que no era lo que esperabas. Ves avances reales, seguido, y puedes ajustar el rumbo a tiempo.",
    tags: ["Avances semanales", "Comunicación directa con quien construye", "Espacio para ajustar sobre la marcha"],
  },
  {
    number: 3,
    numberBgColor: "bg-peach",
    numberColor: "text-navy",
    title: "Lanzamiento y soporte",
    description: "Publicamos, y ahí no se acaba: medimos si la solución realmente está funcionando (velocidad, uso, resultados) y seguimos disponibles para ajustar. Un proyecto no está 'terminado' hasta que te está funcionando de verdad.",
    tags: ["Lanzamiento acompañado", "Medición de resultados reales", "Soporte post-lanzamiento"],
  },
];

export default function StepsTimelineSection() {
  return (
    <section className="pt-16">
      <div className="w-full px-6 sm:px-60 lg:px-44">
        <div className="space-y-8">
          {steps.map((step, index) => (
            <StepItem key={step.number} numberBgColor={step.numberBgColor} numberColor={step.numberColor} variant="detailed" {...step} isLast={index === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}
