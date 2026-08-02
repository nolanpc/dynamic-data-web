import Link from "next/link";
import Image from "next/image";

const columns = [
  {
    title: "Empresa",
    links: [
      { href: "/nuestra-historia", label: "Nuestra historia" },
      { href: "/servicios", label: "Servicios" },
    ],
  },
  {
    title: "Recursos",
    links: [{ href: "/como-trabajamos", label: "Cómo trabajamos" }],
  },
  {
    title: "Contacto",
    links: [{ href: "/contacto", label: "Escríbenos" }],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-stroke-stroke bg-white dark:border-stroke-dark dark:bg-black">
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
            Moderniza tu operación, sin frenar tu crecimiento.
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <h4 className="mb-3 text-sm font-semibold text-black dark:text-white">
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
        © {new Date().getFullYear()} DynamicData. Todos los derechos reservados.
      </div>
    </footer>
  );
}
