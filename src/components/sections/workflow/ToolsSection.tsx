import SectionHeading from "@/components/shared/SectionHeading";

const categories = [
  { title: "Frontend", tools: ["Next.js", "React", "Tailwind CSS"] },
  { title: "Backend", tools: ["Node.js", "PostgreSQL"] },
  { title: "Hosting / Deploy", tools: ["Vercel", "Docker"] },
  { title: "Testing / QA", tools: ["Playwright", "Vitest"] },
  { title: "Automatización", tools: ["n8n", "Zapier"] },
  { title: "Comunicación directa", tools: ["Slack", "Email"] },
];

export default function ToolsSection() {
  return (
    <section className="container py-16">
      <SectionHeading title="Herramientas y tecnología" />
      <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3">
        {categories.map((category) => (
          <div key={category.title}>
            <h4 className="mb-2 text-sm font-semibold text-black dark:text-white">
              {category.title}
            </h4>
            <ul className="space-y-1 text-sm text-body-color dark:text-body-color-dark">
              {category.tools.map((tool) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
