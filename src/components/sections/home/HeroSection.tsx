import Button from "@/components/ui/Button";
import StatsBar from "@/components/shared/StatsBar";
import DecorativeShapes from "@/components/shared/DecorativeShapes";

const stats = [
  { value: "1:1", label: "Acompañamiento" },
  { value: "100%", label: "A medida" },
  { value: "24h", label: "Tiempo de respuesta" },
];

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-primary-light/15 py-20 dark:bg-bg-color-dark">
      <DecorativeShapes />
      <div className="container relative max-w-2xl">
        <h1 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl lg:text-5xl">
          Moderniza tu operación, sin frenar tu{" "}
          <span className="text-primary">crecimiento.</span>
        </h1>
        <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
          Acompañamos a tu negocio en cada paso de su transformación digital,
          con soluciones a medida y sin sorpresas.
        </p>
        <div className="mb-10 flex flex-wrap gap-4">
          <Button href="/contacto">Agenda una asesoría</Button>
          <Button href="/servicios" variant="secondary">
            Ver servicios
          </Button>
        </div>
        <StatsBar stats={stats} />
      </div>
    </section>
  );
}
