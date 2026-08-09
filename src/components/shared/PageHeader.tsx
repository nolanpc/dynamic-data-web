import SectionHeading from "./SectionHeading";

type PageHeaderProps = {
  eyebrow?: string;
  subheading?: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, subheading, title, description }: PageHeaderProps) {
  return (
    <section className="flex relative overflow-hidden bg-brand-light py-8 dark:bg-bg-color-dark select-none">
      <div className="container relative max-w-5xl">
          <SectionHeading eyebrow={eyebrow} subheading={subheading} title={title} description={description} />
      </div>
    </section>
  );
}
