import TextWithGraphic from "@/components/shared/TextWithGraphic";

export default function StoryPreviewSection() {
  return (
    <>
      <div className="lg:px-30">
        <TextWithGraphic
          eyebrow={undefined}
          subheading="NUESTRA HISTORIA"
          title="Estamos empezando — y lo decimos con orgullo"
          description="Dynamic Data es un equipo nuevo con ganas de
          demostrar lo que sabe hacer. Eso quiere decir precios
          más accesibles mientras construimos nuestro portafolio,
          comunicación directa con quien de verdad hace el
          trabajo, y un compromiso real con que tu proyecto salga
          bien — porque también es el nuestro."
        />
      </div>
    </>
  );
}
