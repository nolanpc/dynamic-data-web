type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>
      {eyebrow && (
        <span
          className={`mb-2 block text-sm font-semibold uppercase tracking-wide ${
            isDark ? "text-primary-light" : "text-primary"
          }`}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={`mb-3 text-2xl font-bold sm:text-3xl ${
          isDark ? "text-white" : "text-black dark:text-white"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`text-base ${
            isDark ? "text-white/70" : "text-body-color dark:text-body-color-dark"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
