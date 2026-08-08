import Button from "@/components/ui/Button";
import StatsBar from "@/components/shared/StatsBar";
import DecorativeShapes from "@/components/shared/DecorativeShapes";
import Image from "next/image";

const stats = [
  { value: "1:1", label: "Acompañamiento" },
  { value: "100%", label: "A medida" },
  { value: "24h", label: "Tiempo de respuesta" },
];

export default function HeroSection() {
  return (
    <section className=" flex relative overflow-hidden bg-brand-light py-8 dark:bg-bg-color-dark">
      <DecorativeShapes />
      <div className="container relative max-w-2xl">
        <span className="text-primary-medium text-xs font-semibold">SOLUCIONES DIGITALES</span>
        <h1 className="mb-4 text-3xl font-bold text-navy dark:text-white sm:text-4xl lg:text-6xl">
          Moderniza tu operación, sin frenar tu{" "}
          <span className="text-primary-medium">crecimiento.</span>
        </h1>
        <p className="mb-8 text-base text-body-color dark:text-body-color-dark">
          Acompañamos a tu negocio en cada paso de su transformación digital,
          con soluciones a medida y sin sorpresas.
        </p>
        <div className="mb-10 flex flex-wrap gap-4">
          <Button href="/contacto" variant="navy">Agenda una consultoría</Button>
          <Button href="/servicios" variant="secondary">
            Ver servicios
          </Button>
        </div>
        <StatsBar stats={stats} />
      </div>
    </section>
  );
}
