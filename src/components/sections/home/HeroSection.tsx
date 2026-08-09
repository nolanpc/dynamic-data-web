import Button from "@/components/ui/Button";
import StatsBar from "@/components/shared/StatsBar";
import DecorativeShapes from "@/components/shared/DecorativeShapes";
import Image from "next/image";

const stats = [
  { value: "1 a 1", label: "trato directo con los fundadores" },
  { value: "100%", label: "foco en tu proyecto" },
  { value: "24h", label: "tiempo de respuesta" },
];

export default function HeroSection() {
  return (
    <section className=" flex relative overflow-hidden bg-brand-light py-8 dark:bg-bg-color-dark select-none">
      <DecorativeShapes />
      <div className="container relative max-w-5xl">
        <div className="lg:pl-[2em]">
          <span className="text-primary-medium text-xs font-semibold tracking-[1px]">SOLUCIONES DIGITALES</span>
          <h1 className="mb-4 text-3xl font-bold mt-4 text-navy dark:text-white sm:text-4xl lg:text-5xl lg:pr-[7em]">
            Moderniza tu operación, sin frenar tu{" "}
            <span className="text-primary-medium">crecimiento.</span>
          </h1>
          <p className="mb-8 text-base text-brand-gray dark:text-body-color-dark lg:pr-[23em] text-justify">
            Ayudamos a negocios, organizaciones y emprendimientos a digitalizar sus operaciones y llevar su rendimiento web al siguiente nivel — con procesos claros y resultados medibles.
          </p>

          <div className="mb-10 flex flex-wrap gap-4">
            <Button href="/contacto" variant="navy">Agenda una consultoría</Button>
            <Button href="/servicios" variant="secondary" className="text-navy dark:text-white !border-brand-gray dark:border-white">
              Ver servicios
            </Button>
          </div>
        </div>
        <div className="lg:pl-[2em]">
          <StatsBar stats={stats} />
        </div>
      </div>
    </section>
  );
}
