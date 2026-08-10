import SectionHeading from "@/components/shared/SectionHeading";
import Card from "@/components/ui/Card";

const categories = [
  { title: "Desarrollo", tools: ["React", "Next.js", "HTML/CSS moderno"] },
  { title: "Diseño", tools: ["Figma"] },
  { title: "Gestión de proyecto", tools: ["Notion", "Trello"] },
  { title: "Comunicación", tools: ["WhatsApp", "correo", "videollamada"] },
  { title: "Hosting y publicación", tools: ["Vercel", "Netlify"] },
  { title: "Automatización", tools: ["Zapier", "Make"] },
  { title: "Analítica", tools: ["Google Analytics", "Search Console"] },
  { title: "Control de versiones", tools: ["GitHub"] },
];

export default function ToolsSection() {
  return (
    <section className="pt-16">
      <div className="w-full px-6 sm:px-60 lg:px-44">
        <div className="space-y-8">
          <SectionHeading 
            title="Herramientas y tecnología" 
            description="Elegimos herramientas probadas y modernas para cada tipo de proyecto — no la más nueva por moda, sino la correcta para lo que necesitas."
          />
          <div className="mt-10 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-4">
            {categories.map((category) => (
              <Card key={category.title} className="flex flex-col p-6">
                <h3 className="mb-2 text-sm font-semibold text-navy dark:text-white">
                  {category.title}
                </h3>
                <p className="text-xs text-gray-500 dark:text-body-color-dark">
                  {category.tools.join(", ")}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>    
  );
}
