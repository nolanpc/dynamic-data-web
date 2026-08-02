import SectionHeading from "./SectionHeading";

type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: string;
};

export default function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="bg-primary-light/15 py-16 dark:bg-bg-color-dark">
      <div className="container">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </div>
    </section>
  );
}
