"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/blog", label: "İçgörüler" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#071011]/90 backdrop-blur-xl">
      <div className="site-container flex h-[70px] items-center justify-between md:h-20">
        <Link href="/" className="brand-mark" aria-label="MI Digital ana sayfa">
          <span className="brand-logo-frame">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/brand/mi-digital-logo.jpg" alt="MI Digital" />
          </span>
        </Link>
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className={cn("nav-link", pathname === item.href && "active")}>{item.label}</Link>
          ))}
          <Link href="/iletisim" className="nav-cta">Teklif al ↗</Link>
        </nav>
        <button className="menu-button md:hidden" onClick={() => setOpen((value) => !value)} aria-expanded={open} aria-label="Menüyü aç">
          <span className={open ? "translate-y-[5px] rotate-45" : ""} />
          <span className={open ? "opacity-0" : ""} />
          <span className={open ? "-translate-y-[5px] -rotate-45" : ""} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="mobile-nav md:hidden">
            <div className="site-container flex flex-col py-4">
              {navItems.map((item) => <Link key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}<span>↗</span></Link>)}
              <Link href="/iletisim" onClick={() => setOpen(false)} className="!text-[#5eead4]">Projenizi konuşalım <span>↗</span></Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
