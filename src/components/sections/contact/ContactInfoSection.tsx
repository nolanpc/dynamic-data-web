const info = [
  { label: "Correo", value: "hola@dynamicdata.com" },
  { label: "Teléfono", value: "+56 9 0000 0000" },
  { label: "Redes sociales", value: "@dynamicdata" },
];

export default function ContactInfoSection() {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-black dark:text-white">
        Información de contacto
      </h3>
      <ul className="space-y-4">
        {info.map((item) => (
          <li key={item.label}>
            <span className="block text-xs uppercase text-body-color dark:text-body-color-dark">
              {item.label}
            </span>
            <span className="text-sm font-medium text-black dark:text-white">
              {item.value}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
