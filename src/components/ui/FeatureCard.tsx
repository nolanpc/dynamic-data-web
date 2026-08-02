import Card from "./Card";

type FeatureCardProps = {
  icon?: React.ReactNode;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card>
      {icon && (
        <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
          {icon}
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
        {description}
      </p>
    </Card>
  );
}
