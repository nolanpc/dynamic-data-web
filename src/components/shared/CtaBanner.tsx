import Button from "@/components/ui/Button";
import DecorativeShapes from "./DecorativeShapes";

type CtaBannerProps = {
  title: string;
  description?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonHoverColor?: string;
  buttonLabel: string;
  buttonHref?: string;
};

export default function CtaBanner({
  title,
  description,
  buttonLabel,
  buttonHref = "/contacto",
  buttonColor = "bg-primary",
  buttonHoverColor = "bg-primary/90",
  buttonTextColor = "text-white",
}: CtaBannerProps) {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-75 md:py-12 lg:py-12">
      <div className="relative overflow-hidden rounded-2xl bg-navy px-8 py-12 md:py-12">
        <DecorativeShapes />
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-6 md:gap-8">
          <div className="pr-0 md:pr-12">
            <h3 className="relative mb-4 text-2xl font-bold text-white sm:text-3xl pe-0 md:pe-20">
              {title}
            </h3>
            <p className="relative text-lg text-gray-300">
              {description}
            </p>
          </div>
          <div className="text-center md:text-center">
            <Button href={buttonHref} className={`relative ${buttonColor} ${buttonTextColor} hover:${buttonHoverColor}`}>
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
