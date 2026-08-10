import Link from "next/link";

type SectionHeadingProps = {
  eyebrow?: string;
  subheading?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  theme?: "light" | "dark";
};

export default function SectionHeading({
  eyebrow,
  subheading,
  title,
  description,
  align = "left",
  theme = "light",
}: SectionHeadingProps) {
  const isDark = theme === "dark";

  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}>

      {eyebrow && (
        <nav aria-label="Breadcrumb" className="mb-2 block text-sm font-semibold tracking-wide">
          <ol className="flex items-center space-x-2">
            <li>
              <Link href="/" className="text-gray-500 hover:underline">
                Inicio
              </Link>
            </li>
            <span className="text-gray-400" aria-hidden="true">/</span>
            <li>
              <span className={isDark ? "text-gray-400" : "text-gray-400"}>
                {eyebrow}
              </span>
            </li>
          </ol>
        </nav>
      )}

      <h2
        className={`mt-5 mb-3 text-sm font-semibold sm:text-sm ${
          isDark ? "text-primary-medium" : "text-primary-medium dark:text-white"
        }`}
      >
        {subheading}
      </h2>

      <h2
        className={`mb-3 text-2xl font-bold sm:text-5xl ${
          isDark ? "text-white" : "text-navy dark:text-white"
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
