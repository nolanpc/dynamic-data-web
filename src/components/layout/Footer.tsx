import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "Servicios",
    links: [
      { href: "/servicios", label: "Desarrollo web" },
      { href: "#", label: "Automatización" },
      { href: "/", label: "Rendimiento" },
      { href: "/contacto", label: "Consultoría" }
    ]
  },
  {
    title: "Empresa",
    links: [
      { href: "/como-trabajamos", label: "Cómo trabajamos" },
      { href: "/nuestra-historia", label: "Nuestra historia" },
      { href: "/contacto", label: "Contacto" }
    ],
  },
  {
    title: "Contacto",
    links: [
      { href: "/contacto", label: "contact@dynamicdata.tech" },
      { href: "/contacto/", label: "Enviar un mensaje" }
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-stroke-stroke bg-white dark:border-stroke-dark dark:bg-black lg:px-30">
      <div className="container grid grid-cols-2 gap-8 py-12 md:grid-cols-4">
        <div>
          <Image
            src="/images/logo/logo.png"
            alt="DynamicData"
            width={3971}
            height={841}
            className="h-8 w-auto"
          />
          <p className="mt-2 text-sm text-body-color dark:text-body-color-dark">
            Soluciones digitales para negocios, organizaciones y emprendimientos que quieren crecer sin fricción.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="mb-3 text-sm font-semibold text-navy dark:text-white">
              {column.title}
            </h4>
            <ul className="space-y-2">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-body-color hover:text-primary dark:text-body-color-dark"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-stroke-stroke py-4 text-center text-xs text-body-color dark:border-stroke-dark dark:text-body-color-dark">
        <div className="container lg:justify-between gap-4 flex">
          <span>
            © {new Date().getFullYear()} Dynamic Data. Todos los derechos reservados.
          </span>
          <span className="">Hecho con foco en velocidad y claridad.</span>
        </div>
      </div>
    </footer>
  );
}
