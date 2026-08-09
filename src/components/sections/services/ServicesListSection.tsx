import Card from "@/components/ui/Card";

const services = [
  {
    title: "Desarrollo web y de producto",
    description: "Sitios, tiendas en línea y plataformas a la medida — rápidas, accesibles y construidas para que puedas mantenerlas sin depender de nosotros para siempre.",
    color: "bg-light-ice-blue",
    icon: "monitor.png",
    bullets: [
      {
        title: "Sitios corporativos y landing pages",
        description: "Presencia digital que comunica claro quién eres y qué ofreces, optimizada para convertir visitas en clientes."
      },
      {
        title: "Tiendas en línea y plataformas de producto",
        description: "Desde catálogos simples hasta sistemas con lógica de negocio propia, pensados para crecer contigo."
      },
      {
        title: "Mantenimiento y evolución continua",
        description: "No entregamos y desaparecemos — seguimos disponibles para ajustar, mejorar y acompañar el crecimiento del producto."
      }
    ],
  },
  {
    title: "Automatización de operaciones",
    description: "Identificamos las tareas manuales y repetitivas que le roban tiempo a tu equipo, y las conectamos para que sucedan solas.",
    color: "bg-light-pink",
    icon: "energy.png",
    bullets: [
      {
        title: "Mapeo de procesos actuales",
        description: "Entendemos cómo trabajas hoy — hojas de cálculo, correos, WhatsApp, sistemas sueltos — antes de proponer nada."
      },
      {
        title: "Conexión de herramientas",
        description: "Integramos las plataformas que ya usas para que la información fluya sin que alguien la copie a mano."
      },
      {
        title: "Flujos automáticos a la medida",
        description: "Notificaciones, reportes, actualizaciones de inventario o seguimiento de clientes — lo que hoy es manual, automatizado."
      }
    ],
  },
  {
    title: "Rendimiento y velocidad",
    description: "Un sitio lento pierde clientes antes de que lean la primera línea. Auditamos y optimizamos hasta que eso deje de ser un problema.",
    color: "bg-light-peach",
    icon: "search.png",
    bullets: [
      {
        title: "Auditoría técnica completa",
        description: "Medimos tiempos de carga, experiencia móvil y errores técnicos con las mismas herramientas que usa Google para rankear tu sitio."
      },
      {
        title: "Optimización de velocidad",
        description: "Imágenes, código y servidor ajustados para que tu sitio cargue rápido en cualquier dispositivo o conexión."
      },
      {
        title: "Monitoreo continuo",
        description: "Seguimos midiendo después de la entrega, para detectar problemas antes de que los note tu cliente."
      }
    ],
  },
  {
    title: "Consultoría digital",
    description: "A veces lo que más ayuda no es construir algo nuevo, sino tener claridad de qué construir primero.",
    color: "bg-light-indigo",
    icon: "file.png",
    bullets: [
      {
        title: "Diagnóstico honesto",
        description: "Te decimos qué está funcionando, qué no, y qué de verdad vale la pena resolver primero — aunque no seamos nosotros quienes lo hagan."
      },
      {
        title: "Hoja de ruta priorizada",
        description: "Un plan claro, ordenado por impacto y presupuesto, para que sepas exactamente en qué invertir y cuándo."
      },
      {
        title: "Acompañamiento en la ejecución",
        description: "Si decides avanzar, seguimos contigo — como asesores o como el equipo que lo construye."
      }
    ],
  },
];

export default function ServicesListSection() {
  return (
    <section className="py-16">
      <div className="w-full px-6 sm:px-60 lg:px-38">
        <div className="space-y-8">
          {services.map((service) => (
            <Card key={service.title} className="grid gap-6 md:grid-cols-2 items-start border-0 !shadow-none bg-transparent">
              <div className="flex flex-col ">
                <div className={`mb-4 flex h-13 w-13 items-center justify-center rounded-xl ${service.color}`}>
                  <img src={`/images/icons/${service.icon}`} alt={service.title} className="w-6" />
                </div>
                <h3 className="mb-2 text-2xl font-semibold text-navy dark:text-white">
                  {service.title}
                </h3>
                <p className="text-base text-gray-500 dark:text-body-color-dark">
                  {service.description}
                </p>
              </div>
              <div className="grid gap-4">
                {service.bullets.map((bullet, index) => (
                  <div key={index} className="bg-brand-light rounded-lg p-4 text-sm text-body-color dark:text-body-color-dark">
                    <div className="flex items-start gap-4 w-full">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-primary text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <span className="block text-base text-navy">
                          <strong>{bullet.title}</strong>
                        </span>
                        <span className="block text-sm text-gray-500 dark:text-navy mt-1">
                          {bullet.description}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}