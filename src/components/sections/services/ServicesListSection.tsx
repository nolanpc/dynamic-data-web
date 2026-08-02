import Card from "@/components/ui/Card";

const services = [
  {
    title: "Desarrollo web y de producto",
    description: "Sitios y productos digitales pensados para escalar con tu negocio.",
    bullets: ["Sitios y landing pages", "Aplicaciones a medida", "Integraciones con tus sistemas"],
  },
  {
    title: "Automatización de operaciones",
    description: "Eliminamos tareas repetitivas para que tu equipo se enfoque en crecer.",
    bullets: ["Flujos automatizados", "Reportes periódicos", "Menos trabajo manual"],
  },
  {
    title: "Rendimiento y velocidad",
    description: "Optimizamos lo que ya tienes para que responda más rápido.",
    bullets: ["Auditoría de performance", "Optimización de carga", "Monitoreo continuo"],
  },
  {
    title: "Consultoría digital",
    description: "Te ayudamos a decidir qué tecnología usar y en qué orden.",
    bullets: ["Diagnóstico tecnológico", "Roadmap priorizado", "Acompañamiento continuo"],
  },
];

export default function ServicesListSection() {
  return (
    <section className="container py-16">
      <div className="space-y-8">
        {services.map((service) => (
          <Card key={service.title} className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm text-body-color dark:text-body-color-dark">
                {service.description}
              </p>
            </div>
            <ul className="list-disc space-y-1 pl-5 text-sm text-body-color dark:text-body-color-dark">
              {service.bullets.map((bullet) => (
                <li key={bullet}>{bullet}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </section>
  );
}
