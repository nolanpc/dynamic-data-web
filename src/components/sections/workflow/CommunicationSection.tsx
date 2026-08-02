import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const items = [
  { title: "Acompañamiento sin intermediarios", description: "Hablas directo con quien construye tu proyecto." },
  { title: "Reportes periódicos", description: "Siempre sabes en qué punto va tu proyecto." },
  { title: "Escaneo de infraestructura", description: "Detectamos riesgos antes de que se conviertan en problemas." },
  { title: "Respuesta en menos de 24 horas", description: "Nunca esperas más de un día por una respuesta." },
];

export default function CommunicationSection() {
  return (
    <section className="container py-16">
      <SectionHeading title="Cómo nos comunicamos contigo" />
      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {items.map((item) => (
          <FeatureCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
