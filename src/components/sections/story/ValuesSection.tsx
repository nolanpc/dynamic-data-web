import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const values = [
  { title: "Innovación", description: "Buscamos siempre la forma más simple de resolver un problema real." },
  { title: "Cercanía", description: "Hablamos claro y estamos disponibles cuando nos necesitas." },
  { title: "Transparencia", description: "Sin letra chica, ni en precios ni en tiempos." },
  { title: "Calidad", description: "Preferimos hacer menos, pero hacerlo bien." },
  { title: "Sostenibilidad", description: "Construimos soluciones pensadas para durar." },
  { title: "Trabajo en equipo", description: "Tu equipo y el nuestro, trabajando como uno solo." },
];

export default function ValuesSection() {
  return (
    <section className="container py-16 lg:px-35">
      <SectionHeading title="Nuestros valores" />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((value, index) => (
          <FeatureCard key={value.title} {...value} index={index} />
        ))}
      </div>
    </section>
  );
}
