import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path opacity="0.4" d="M3 13h4v8H3zM9 9h4v12H9z" />
        <path d="M15 4h4v17h-4zM2 21h20v2H2z" />
      </svg>
    ),
    title: "Tecnología con Propósito Comercial",
    paragraph:
      "No implementamos tecnología por moda. Cada decisión técnica está alineada con tus objetivos de negocio, ya sea reducir costes, aumentar ventas o mejorar la eficiencia operativa.",
  },
  {
    id: 2,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path opacity="0.4" d="M12 2L2 7l10 5 10-5-10-5z" />
        <path opacity="0.7" d="M2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "Arquitectura de Software Escalable",
    paragraph:
      "Diseñamos sistemas que crecen contigo. Utilizamos patrones de diseño modernos y principios SOLID para asegurar que tu software sea mantenible, seguro y fácil de ampliar en el futuro.",
  },
  {
    id: 3,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <circle cx="12" cy="5" r="3" />
        <circle cx="5" cy="18" r="3" opacity="0.4" />
        <circle cx="19" cy="18" r="3" opacity="0.4" />
        <path d="M6.5 15.5l3.5-7.5M14 8l3.5 7.5M8 18h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
    title: "Stack Moderno",
    paragraph:
      "Dominamos las tecnologías más eficientes para el desarrollo web moderno, como [ej: Next.js y Node.js], permitiéndonos entregar soluciones de alto rendimiento sin reinventar la rueda.",
  },
  {
    id: 4,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path opacity="0.4" d="M4 2h16a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V4a2 2 0 012-2z" />
        <path d="M2 14v4a2 2 0 002 2h16a2 2 0 002-2v-4H2zm5 3h2v1H7v-1zm4 0h6v1h-6v-1z" />
      </svg>
    ),
    title: "UI/UX que Convierte",
    paragraph:
      "Creamos interfaces atractivas pero, sobre todo, funcionales. Nos basamos en datos de usuario para diseñar flujos que minimicen la fricción y maximicen la satisfacción del cliente.",
  },
  {
    id: 5,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path opacity="0.4" d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm1 14H11V11h2zm0-7H11V7h2z" />
        <path d="M12 4V2M12 22v-2M4 12H2M22 12h-2" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
    title: "Metodología Ágil y Adaptable",
    paragraph:
      "Nos integramos en tu flujo de trabajo de forma orgánica. Nuestro enfoque iterativo te permite ver progresos reales cada pocas semanas y pivotar rápidamente si las prioridades del mercado cambian.",
  },
  {
    id: 6,
    icon: (
      <svg width="40" height="40" viewBox="0 0 24 24" className="fill-current">
        <path opacity="0.4" d="M8 5l-5 5 5 5M16 5l5 5-5 5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M14 4l-4 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Código y Procesos Transparentes",
    paragraph:
      "Creemos en la total transparencia. Tendrás acceso total a nuestro código y paneles de progreso. Te entregamos documentación clara y completa para que el control siempre sea tuyo.",
  },
];

export default featuresData;