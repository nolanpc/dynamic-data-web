import Badge from "./Badge";

type StepItemProps = {
  number: number;
  numberBgColor?: string;
  numberColor?: string;
  title: string;
  description: string;
  tags?: string[];
  variant?: "compact" | "detailed";
  theme?: "light" | "dark";
  isLast?: boolean;
};

export default function StepItem({
  number,
  numberBgColor,
  numberColor,
  title,
  description,
  tags,
  variant = "detailed",
  theme = "light",
  isLast = false,
}: StepItemProps) {
  const isDark = theme === "dark";

  return (
    <div className="flex gap-6">
      <div className="relative flex flex-col items-center">
        <div className={`flex h-18 w-18 shrink-0 items-center justify-center rounded-3xl text-2xl font-bold ${numberBgColor || "bg-navy"} ${numberColor || "text-white"} z-10`}>
          {number}
        </div>
        
        {!isLast && (
          <div className="absolute top-12 bottom-[-48px] w-[2px] bg-gray-200" />
        )}
      </div>

      <div className="pb-12">
        <h4 className={`mb-1 text-xl font-bold ${isDark ? "text-white" : "text-black dark:text-white"}`}>
          {title}
        </h4>
        <p className={`text-base ${isDark ? "text-white/70" : "text-body-color dark:text-body-color-dark"}`}>
          {description}
        </p>
        {variant === "detailed" && tags && tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}