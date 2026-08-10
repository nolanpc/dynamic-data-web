import Button from "@/components/ui/Button";
import DecorativeShapes from "./DecorativeShapes";

type CtaBannerProps = {
  title: string;
  description?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonHoverColor?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export default function CtaBanner({
  title,
  description,
  buttonLabel,
  buttonHref = "/contacto",
  buttonColor = "!bg-peach",
  buttonHoverColor = "bg-primary/90",
  buttonTextColor = "!text-brand-dark",
}: CtaBannerProps) {
  return (
    <section className="w-full px-6 sm:px-12 lg:px-45 md:py-12 lg:py-12">
      <div className="relative overflow-hidden rounded-2xl bg-navy px-8 py-12 md:py-12">
        <DecorativeShapes />
        <div className="grid grid-rows-[60%_1fr] md:grid-cols-[60%_1fr] md:flex-row items-center justify-between gap-4 md:gap-8">
          <div className="flex-1 pr-0 lg:pr-5">
            <h3 className="relative mb-4 text-lg font-bold text-white sm:text-3xl">
              {title}
            </h3>
            <p className="relative text-sm text-gray-400">
              {description}
            </p>
          </div>
          <div className="text-center pt-10">
            <Button href={buttonHref} className={`relative ${buttonColor} ${buttonTextColor} hover:${buttonHoverColor}`}>
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
