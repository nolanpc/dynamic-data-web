import SectionHeading from "./SectionHeading";
import DecorativeShapes from "./DecorativeShapes";

type TextWithGraphicProps = {
  eyebrow?: string;
  subheading?: string;
  title: string;
  description?: string;
  reverse?: boolean;
};

export default function TextWithGraphic({
  eyebrow,
  subheading,
  title,
  description,
  reverse = false,
}: TextWithGraphicProps) {
  return (
    <section className="container py-16 lg:px-30">
      <div
        className={`flex flex-col items-center gap-10 md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        <div className="flex-1">
          <SectionHeading eyebrow={eyebrow} title={title} subheading={subheading} description={description} />
        </div>
        <div className="relative flex-1">
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-brand-light dark:bg-bg-color-dark">
            <DecorativeShapes />
          </div>
        </div>
      </div>
    </section>
  );
}
