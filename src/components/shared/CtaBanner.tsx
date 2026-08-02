import Button from "@/components/ui/Button";
import DecorativeShapes from "./DecorativeShapes";

type CtaBannerProps = {
  title: string;
  buttonLabel: string;
  buttonHref?: string;
};

export default function CtaBanner({
  title,
  buttonLabel,
  buttonHref = "/contacto",
}: CtaBannerProps) {
  return (
    <section className="container py-12">
      <div className="relative overflow-hidden rounded-2xl bg-navy px-8 py-12 text-center">
        <DecorativeShapes />
        <h3 className="relative mb-6 text-2xl font-bold text-white sm:text-3xl">
          {title}
        </h3>
        <Button href={buttonHref} className="relative">
          {buttonLabel}
        </Button>
      </div>
    </section>
  );
}
