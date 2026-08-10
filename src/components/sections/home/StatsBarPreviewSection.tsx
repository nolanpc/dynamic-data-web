import StatsBar from "@/components/shared/StatsBar";

const stats = [
  { value: "0", label: "intermediarios entre tú y quien construye" },
  { value: "100%", label: "de nuestro tiempo, dedicado a proyectos activos" },
  { value: "24h", label: "tiempo de respuesta a mensajes" },
  { value: "1", label: "propuesta a la medida por cliente" },
];

export default function StatsBarPreviewSection() {
  return (
    <section className="bg-primary-light/15 py-16 lg:px-60">
      <div className="container">
        <div className="">
          <StatsBar stats={stats} />
        </div>
      </div>
    </section>
  );
}
