import Card from "./Card";

type FeatureCardProps = {
  icon?: React.ReactNode;
  bgColor?: string;
  title: string;
  description: string;
};

export default function FeatureCard({ icon, bgColor, title, description }: FeatureCardProps) {
  return (
    <Card>
      {icon && (
        <div className={`mb-4 flex h-10 w-10 items-center justify-center rounded-md ${bgColor} bg-primary/10 text-primary`}>
          <img src={`${icon}`} alt={title} className="w-6" />
        </div>
      )}
      <h3 className="mb-2 text-base font-semibold text-black dark:text-white">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-body-color dark:text-body-color-dark">
        {description}
      </p>
    </Card>
  );
}
