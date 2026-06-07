"use client";

import Link from "next/link";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted ? resolvedTheme === "dark" : true;
  const backgroundImage = isDark
    ? "linear-gradient(rgba(10, 14, 24, 0.64), rgba(10, 14, 24, 0.72)), url('/images/hero/banner1.jpg')"
    : "linear-gradient(rgba(255, 255, 255, 0.48), rgba(255, 255, 255, 0.62)), url('/images/hero/banner1.jpg')";

  return (
    <>
      <section
        id="home"
        className="relative z-10 overflow-hidden bg-cover bg-center bg-no-repeat pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
        style={{
          backgroundImage,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="mx-auto max-w-[760px] text-center">
                <h1 className="mb-5 text-3xl font-bold leading-tight text-slate-950 dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                  Impulsamos la evolución tecnológica de tu empresa.
                </h1>
                <p className="mb-12 mx-auto max-w-[680px] text-lg leading-relaxed text-slate-700 dark:text-slate-200 sm:text-xl">
                  Desarrollamos software que transforma procesos, acelera decisiones y hace que tus equipos trabajen con más claridad y menos fricción.
                </p>
                <div className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                  <Link
                    href="/contact"
                    className="rounded-xs bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/20 transition-transform duration-300 ease-in-out hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-blue-500/30"
                  >
                    Inicia una consulta
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-block rounded-xs border border-blue-200/70 bg-white/90 px-8 py-4 text-base font-semibold text-blue-700 transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:bg-blue-50 dark:border-blue-400/30 dark:bg-white/10 dark:text-blue-200 dark:hover:bg-white/15"
                  >
                    Descubre nuestro proceso
                  </Link>
                </div>

                <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
                  {[
                    { value: "7x", label: "Proyectos entregados con enfoque product-led", accent: "from-cyan-600/20 to-cyan-500/10", badge: "Innovador" },
                    { value: "98%", label: "clientes con roadmap ágil validado", accent: "from-violet-600/20 to-violet-500/10", badge: "Confiable" },
                    { value: "12 semanas", label: "entrega de software mínimo viable", accent: "from-emerald-600/15 to-emerald-500/10", badge: "Rápido" },
                  ].map((stat, index) => (
                    <div
                      key={stat.label}
                      className={`rounded-2xl border border-slate-200/70 bg-gradient-to-br p-4 shadow-lg backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-slate-700 ${stat.accent}`}
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <p className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</p>
                          <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{stat.label}</p>
                        </div>
                        <span className="rounded-full bg-slate-900/5 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-900 dark:bg-white/10 dark:text-white">
                          {stat.badge}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
