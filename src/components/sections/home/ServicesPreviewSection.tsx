import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const services = [
  {
    title: "Desarrollo web y de producto",
    description: "Sitios y productos digitales pensados para escalar con tu negocio.",
  },
  {
    title: "Automatización de operaciones",
    description: "Eliminamos tareas repetitivas para que tu equipo se enfoque en crecer.",
  },
  {
    title: "Rendimiento y velocidad",
    description: "Optimizamos lo que ya tienes para que responda más rápido.",
  },
  {
    title: "Consultoría digital",
    description: "Te ayudamos a decidir qué tecnología usar y en qué orden.",
  },
];

export default function ServicesPreviewSection() {
  return (
    <section className="container py-16">
      <SectionHeading
        eyebrow={undefined}
        title="Cuatro formas de mover tu negocio hacia adelante"
        description="Elige por dónde empezar, nosotros nos encargamos del resto."
      />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <FeatureCard key={service.title} {...service} />
        ))}
      </div>
    </section>
  );
}
