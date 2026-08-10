import Card from "./Card";

type FeatureCardProps = {
  icon?: React.ReactNode;
  color?: string;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, color, title, description }: FeatureCardProps) {
  return (
    <Card>
      {icon && (
        <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-md text-primary ${color}`}>
          <img src={`/images/icons/${icon}`} alt={title} className="w-6" />
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
