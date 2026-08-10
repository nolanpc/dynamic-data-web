import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const services = [
  {
    color: "bg-light-ice-blue",
    icon: "monitor.png",
    title: "Desarrollo web y de producto",
    description: "Sitios y productos digitales pensados para escalar con tu negocio.",
  },
  {
    color: "bg-light-pink",
    icon: "energy.png",
    title: "Automatización de operaciones",
    description: "Eliminamos tareas repetitivas para que tu equipo se enfoque en crecer.",
  },
  {
    color: "bg-light-peach",
    icon: "search.png",
    title: "Rendimiento y velocidad",
    description: "Optimizamos lo que ya tienes para que responda más rápido.",
  },
  {
    color: "bg-light-indigo",
    icon: "file.png",
    title: "Consultoría digital",
    description: "Te ayudamos a decidir qué tecnología usar y en qué orden.",
  },
];

export default function ServicesPreviewSection() {
  return (
    <section className="container py-16 px-35">
      <SectionHeading
        eyebrow={undefined}
        subheading="QUÉ HACEMOS"
        title="Cuatro formas de mover tu negocio hacia adelante"
        description="Cada proyecto empieza por entender cómo operas hoy, para diseñar la solución digital que de verdad necesitas."
      />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {services.map((service) => (
          <FeatureCard key={service.title} {...service} icon={service.icon} color={service.color} />
        ))}
      </div>
    </section>
  );
}
