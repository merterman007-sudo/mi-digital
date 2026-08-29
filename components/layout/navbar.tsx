"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { trackEvent } from "@/lib/gtag";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/blog", label: "Blog" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  function handleQuoteClick() {
    trackEvent("cta_click_service", {
      cta_target: "/iletisim",
      cta_placement: "navbar",
    });
  }

  function handleMobileLinkClick(href: string) {
    setIsMobileOpen(false);
    if (href === "/iletisim" || href === "/hizmetler") {
      trackEvent("cta_click_service", {
        cta_target: href,
        cta_placement: "mobile_menu",
      });
    }
  }

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 w-full px-4 py-4 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl rounded-full border border-slate-200/80 bg-white/80 px-3 py-2 shadow-[0_12px_50px_-30px_rgba(15,23,42,0.5)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#0b0e0c]/80">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            onClick={() => setIsMobileOpen(false)}
            className="flex items-center gap-3 pl-2 font-display text-base font-bold tracking-[0.08em] text-slate-900 dark:text-slate-100"
          >
            <span className="grid h-8 w-8 place-items-center rounded-full bg-slate-950 text-[10px] tracking-normal text-white dark:bg-teal-300 dark:text-slate-950">MI</span>
            <span>DIGITAL</span>
          </Link>

          <nav className="hidden items-center gap-1 text-sm md:flex">
            {navItems.map((item) => {
              const active =
                item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-full px-4 py-2 font-medium transition",
                    active
                      ? "bg-slate-950 text-white dark:bg-white/10 dark:text-white"
                      : "text-slate-600 hover:text-slate-950 dark:text-slate-300 dark:hover:text-white",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/iletisim"
              onClick={handleQuoteClick}
              className="rounded-full bg-teal-500 px-5 py-2 font-semibold text-slate-950 transition hover:bg-teal-300 dark:bg-teal-300 dark:hover:bg-teal-200"
            >
              Teklif Al
            </Link>
            <ThemeToggle />
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Link
              href="/iletisim"
              onClick={handleQuoteClick}
              className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
            >
              Teklif Al
            </Link>
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMobileOpen((prev) => !prev)}
              aria-label="Menüyü aç"
              aria-expanded={isMobileOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white/90 text-slate-700 transition dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200"
            >
              <span className="sr-only">Menü</span>
              <div className="relative h-4 w-5">
                <span
                  className={cn(
                    "absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-300",
                    isMobileOpen ? "translate-y-[7px] rotate-45" : "translate-y-0 rotate-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition duration-300",
                    isMobileOpen ? "opacity-0" : "opacity-100",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 top-[14px] h-0.5 w-5 rounded-full bg-current transition duration-300",
                    isMobileOpen ? "-translate-y-[7px] -rotate-45" : "translate-y-0 rotate-0",
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMobileOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -6, height: 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="overflow-hidden md:hidden"
            >
              <div className="mt-3 rounded-xl border border-slate-200 bg-white/95 p-3 dark:border-slate-800 dark:bg-slate-950/90">
                <nav className="flex flex-col gap-1">
                  {navItems.map((item, index) => {
                    const active =
                      item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -4 }}
                        transition={{ duration: 0.18, delay: index * 0.04 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => handleMobileLinkClick(item.href)}
                          className={cn(
                            "block rounded-lg px-3 py-2 text-sm font-medium transition",
                            active
                              ? "bg-cyan-600 text-white"
                              : "text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-900",
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
