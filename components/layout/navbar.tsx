"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
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
      className="sticky top-0 z-50 w-full border-b border-[#f4efd4]/20 bg-black/95 px-5 py-4 sm:px-8 lg:px-10"
    >
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid grid-cols-[1fr_auto_1fr] items-center">
          <button type="button" onClick={() => setIsMobileOpen((prev) => !prev)} aria-label="Menüyü aç" aria-expanded={isMobileOpen} className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#f4efd4]/35 text-[#f4efd4] transition hover:border-[#84acfb] hover:text-[#84acfb]">
            <span className="text-lg leading-none">{isMobileOpen ? "×" : "≡"}</span>
          </button>
          <Link
            href="/"
            onClick={() => setIsMobileOpen(false)}
            className="font-display text-lg font-medium tracking-[0.13em] text-[#f4efd4]"
          >
            MI DIGITAL
          </Link>

          <div className="flex justify-end">
            <Link
              href="/iletisim"
              onClick={handleQuoteClick}
              className="rounded-full bg-[#84acfb] px-5 py-2.5 text-xs font-medium text-black transition hover:bg-[#a9c5ff]"
            >
              Teklif Al
            </Link>
          </div>
        </div>

        <AnimatePresence initial={false}>
          {isMobileOpen ? (
            <motion.div
              initial={{ opacity: 0, y: -8, height: 0 }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -6, height: 0 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="overflow-hidden"
            >
              <div className="mt-4 rounded-[12px] border border-[#f4efd4]/30 bg-[#111] p-3">
                <nav className="grid gap-1 sm:grid-cols-5">
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
                            "block rounded-lg px-4 py-3 text-sm font-normal transition",
                            active
                              ? "bg-[#84acfb] text-black"
                              : "text-[#f4efd4] hover:bg-[#1a1a1a] hover:text-[#84acfb]",
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
