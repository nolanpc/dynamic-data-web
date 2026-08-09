import Button from "@/components/ui/Button";
import DecorativeShapes from "./DecorativeShapes";

type CtaBannerProps = {
  title: string;
  description?: string;
  buttonColor?: string;
  buttonTextColor?: string;
  buttonHoverColor?: string;
<<<<<<< HEAD
  buttonLabel: string;
=======
  buttonLabel?: string;
>>>>>>> 72f9ed51ff607d9eb2155d29b75e36504d14078c
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
    <section className="w-full px-6 sm:px-12 lg:px-75 md:py-12 lg:py-12">
      <div className="relative overflow-hidden rounded-2xl bg-navy px-8 py-12 md:py-12">
        <DecorativeShapes />
<<<<<<< HEAD
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] items-center gap-6 md:gap-8">
          <div className="pr-0 md:pr-12">
            <h3 className="relative mb-4 text-2xl font-bold text-white sm:text-3xl pe-0 md:pe-20">
=======
        <div className="grid grid-rows-[70%_1fr] md:grid-cols-[60%_1fr] md:flex-row items-center justify-between gap-4 md:gap-8">
          <div className="flex-1 pr-0 lg:pr-5">
            <h3 className="relative mb-4 text-lg font-bold text-white sm:text-3xl">
>>>>>>> 72f9ed51ff607d9eb2155d29b75e36504d14078c
              {title}
            </h3>
            <p className="relative text-sm text-gray-400">
              {description}
            </p>
          </div>
<<<<<<< HEAD
          <div className="text-center md:text-center">
=======
          <div className="text-center pt-10">
>>>>>>> 72f9ed51ff607d9eb2155d29b75e36504d14078c
            <Button href={buttonHref} className={`relative ${buttonColor} ${buttonTextColor} hover:${buttonHoverColor}`}>
              {buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
