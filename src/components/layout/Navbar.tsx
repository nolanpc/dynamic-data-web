"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";
import ThemeToggler from "./ThemeToggler";

const links = [
  { href: "/servicios", label: "Servicios" },
  { href: "/como-trabajamos", label: "Cómo trabajamos" },
  { href: "/nuestra-historia", label: "Nuestra historia" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stroke-stroke bg-white/90 backdrop-blur dark:border-stroke-dark dark:bg-black/90">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo/logo.png"
            alt="DynamicData"
            width={3971}
            height={841}
            priority
            className="h-8 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-nav-text hover:text-primary dark:text-body-color-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggler />
          <Button href="/contacto" variant="navy">Hablemos</Button>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggler />
          <button onClick={() => setOpen(!open)} aria-label="Abrir menú">
            ☰
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-4 border-t border-stroke-stroke px-4 py-4 md:hidden">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-nav-text hover:text-primary dark:text-body-color-dark"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
