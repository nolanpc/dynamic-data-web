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

export default function StepHomeItem({
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
    <div className="flex gap-6 md:flex-col md:gap-0">
      {/* Contenedor del Número y Líneas */}
      <div className="relative flex flex-col items-center md:items-start md:mb-6">
        <div className={`flex h-16 w-16 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-3xl md:rounded-full text-2xl md:text-lg font-bold shadow-one ${numberBgColor || "bg-navy"} ${numberColor || "text-white"} z-10`}>
          {number}
        </div>

        {/* 1. Línea VERTICAL para mobile (Se mantiene oculta en el último paso con !isLast) */}
        {!isLast && (
          <div className="absolute top-16 bottom-[-48px] w-[2px] bg-stroke-stroke dark:bg-stroke-dark md:hidden" />
        )}

        {/* 2. Línea HORIZONTAL para desktop (Aparece en todos los pasos, incluido el número 3) */}
        <div className="absolute left-6 top-6 hidden h-[2px] w-[calc(100%+2rem)] -translate-y-1/2 bg-white/20 md:block z-0" />
      </div>

      {/* Contenido de texto */}
      <div className="pb-12 md:pb-0">
        <h4 className={`mb-2 md:mb-3 text-xl font-bold ${isDark ? "text-white" : "text-navy dark:text-white"}`}>
          {title}
        </h4>
        <p className={`text-base leading-relaxed ${isDark ? "text-white/70" : "text-body-color dark:text-body-color-dark"}`}>
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