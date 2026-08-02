export default function StoryIntroSection() {
  return (
    <section className="container py-16">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div className="rounded-xl bg-navy p-8 text-white">
          <span className="mb-2 block text-xs uppercase text-white/60">Hoy</span>
          <p className="text-sm leading-relaxed">
            Somos un equipo nuevo, construyendo cada proyecto con la misma
            atención que le pondríamos al nuestro.
          </p>
        </div>
        <div className="rounded-xl bg-gray-light p-8 dark:bg-bg-color-dark">
          <span className="mb-2 block text-xs uppercase text-body-color">Ya</span>
          <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
            Sabemos hacia dónde vamos, y lo construimos un proyecto a la vez,
            junto a quienes confían en nosotros.
          </p>
        </div>
      </div>
    </section>
  );
}
