export default function StoryIntroSection() {
  return (
    <section className="container py-16 lg:px-35">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-navy p-8 text-white">
          <span className="mb-2 block text-xs uppercase text-primary-light font-semibold">MISIÓN</span>
          <p className="text-sm leading-relaxed">
            Impulsar la transformación digital de empresas
            mediante el desarrollo de soluciones tecnológicas
            innovadoras, personalizadas y de alta calidad que
            optimicen procesos, mejoren la productividad y
            contribuyan al crecimiento sostenible de nuestros
            clientes.          </p>
        </div>
        <div className="rounded-xl bg-primary-light/15 p-8 dark:bg-bg-color-dark">
          <span className="mb-2 block text-xs uppercase text-primary font-semibold">VISIÓN</span>
          <p className="text-sm leading-relaxed text-navy dark:text-body-color-dark">
            Ser una empresa referente en transformación digital a
            nivel nacional e internacional, reconocida por la
            innovación, la calidad de sus soluciones y el impacto
            positivo que genera en el crecimiento de las
            organizaciones.
          </p>
        </div>
      </div>
    </section>
  );
}
