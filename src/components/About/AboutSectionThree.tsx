
const developmentSteps = [
  {
    title: "Definición",
    description: "Arquitectura de datos y selección de stack.",
    position: "bottom",
  },
  {
    title: "MVP",
    description: "Desarrollo ágil de núcleos funcionales.",
    position: "top",
  },
  {
    title: "Escala",
    description: "Optimización de carga y seguridad.",
    position: "bottom",
  },
  {
    title: "Global",
    description: "Localización y despliegue internacional.",
    position: "top",
  },
];

const AboutSectionThree = () => {
  return (
    // mt-20 o mt-24 le da el respiro necesario respecto a la sección de arriba
    // py-16 mantiene la consistencia de espaciado vertical de tu landing
    <section className="bg-transparent mt-20 md:mt-24 py-16 text-white relative z-10">
      <div className="container mx-auto px-4">
        
        {/* Título alineado perfectamente con el borde del contenedor general */}
        <div className="mb-16 md:mb-20">
          <h2 className="flex items-center gap-3 text-2xl font-bold uppercase tracking-wider text-white sm:text-3xl">
            <span className="w-1.5 h-7 bg-blue-600 inline-block rounded-sm shadow-[0_0_12px_#2563eb]"></span>
            Ciclo de Desarrollo
          </h2>
        </div>

        {/* Contenedor del Timeline que ahora aprovecha el 100% del ancho del container */}
        <div className="relative w-full py-8">
          
          {/* Línea Horizontal Central */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1.5px] bg-gradient-to-r from-blue-500/10 via-blue-500/40 to-blue-500/10 transform -translate-y-1/2 z-0" />

          {/* Línea Vertical Izquierda (Móvil) */}
          <div className="absolute lg:hidden top-0 left-4 w-[1.5px] h-full bg-gradient-to-b from-blue-500/40 to-transparent z-0" />

          {/* Contenedor de Hitos perfectamente distribuidos */}
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center relative z-10 gap-12 lg:gap-6">
            {developmentSteps.map((step, index) => (
              <div
                key={index}
                className="w-full lg:w-1/4 flex flex-row lg:flex-col items-center relative pl-12 lg:pl-0"
              >
                {/* Nodo / Punto Brillante */}
                <div className="absolute left-2.5 lg:left-auto lg:relative transform -translate-x-1/2 lg:translate-x-0 z-20 mb-0 lg:mb-2">
                  <div className="w-4 h-4 rounded-full bg-blue-400 border-2 border-slate-950 shadow-[0_0_10px_#60a5fa,0_0_20px_#2563eb]" />
                </div>

                {/* Contenedor de Texto con tipografía limpia y buen espaciado */}
                <div
                  className={`flex flex-col w-full text-left lg:text-center lg:absolute
                    ${
                      step.position === "top"
                        ? "lg:bottom-7 lg:mb-1"
                        : "lg:top-7 lg:mt-1"
                    }`}
                >
                  <h3 className="text-lg font-bold text-white mb-1.5 tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-sm font-medium text-slate-400 leading-relaxed max-w-[240px] lg:mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSectionThree;