import SectionHeading from "@/components/shared/SectionHeading";
import FeatureCard from "@/components/ui/FeatureCard";

const items = [
  {
    icon: "/images/icons/phone.png",
    bgColor: "bg-light-ice-blue",
    title: "Un canal directo, sin intermediarios",
    description: "WhatsApp o correo directo con quien construye tu proyecto — no un ticket que pasa por tres personas antes de llegar a alguien que sabe la respuesta."
  },
  {
    icon: "/images/icons/calendar.png",
    bgColor: "bg-light-pink",
    title: "Avances semanales, siempre el mismo día",
    description: "Un mensaje o llamada corta cada semana con lo que se avanzó, lo que sigue, y cualquier decisión que necesitemos que tomes."
  },
  {
    icon: "/images/icons/dashboard.png",
    bgColor: "bg-light-peach",
    title: "Acceso a los avances en vivo",
    description: "Enlaces de prueba y demos reales para que veas y pruebes el trabajo según se va construyendo, no solo al final."
  },
  {
    icon: "/images/icons/clock.png",
    bgColor: "bg-light-indigo",
    title: "Respuesta en menos de 24 horas",
    description: "Cualquier duda o cambio que surja durante el proyecto, te respondemos el mismo día hábil — normalmente mucho antes."
  },
];

export default function CommunicationSection() {
  return (
    <section className="pt-6">
      <div className="w-full px-6 sm:px-60 lg:px-80">
        <div className="space-y-8">
          <span className="block text-sm font-semibold tracking-wide text-primary-medium">
            MIENTRAS TRABAJAMOS JUNTOS
          </span>
          <SectionHeading paddingX="px-0" title="Cómo nos comunicamos contigo" />
          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {items.map((item) => (
              <FeatureCard key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
