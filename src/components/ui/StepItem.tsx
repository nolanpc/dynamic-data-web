import Badge from "./Badge";

type StepItemProps = {
  number: number;
  title: string;
  description: string;
  tags?: string[];
  variant?: "compact" | "detailed";
  theme?: "light" | "dark";
};

export default function StepItem({
  number,
  title,
  description,
  tags,
  variant = "detailed",
  theme = "light",
}: StepItemProps) {
  const isDark = theme === "dark";

  return (
    <div className="flex gap-4">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-light text-sm font-bold text-navy">
        {number}
      </div>
      <div>
        <h4 className={`mb-1 font-semibold ${isDark ? "text-white" : "text-black dark:text-white"}`}>
          {title}
        </h4>
        <p className={`text-sm ${isDark ? "text-white/70" : "text-body-color dark:text-body-color-dark"}`}>
          {description}
        </p>
        {variant === "detailed" && tags && tags.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
