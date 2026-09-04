"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import { useMemo, useRef, useState } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

type BrandItem = {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl: string;
};

type BrandMarqueeProps = {
  brands: BrandItem[];
};

export function BrandMarquee({ brands }: BrandMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(containerRef, { amount: 0.2 });
  const trackItems = useMemo(() => [...brands, ...brands], [brands]);

  function getLogoSizeClass(brandId: string) {
    if (brandId === "american-time") return "max-h-[52px] max-w-[204px]";
    if (brandId === "referans-go") return "max-h-[52px] max-w-[196px]";
    if (brandId === "valer-wear") return "max-h-[50px] max-w-[190px]";
    if (brandId === "end-luxury-wear") return "max-h-[50px] max-w-[202px]";
    if (brandId === "pati-dostum") return "max-h-[54px] max-w-[200px]";
    if (brandId === "pratik-servisim") return "max-h-[52px] max-w-[198px]";
    if (brandId === "galiara") return "max-h-8 max-w-[132px]";
    if (brandId === "mono-shoes") return "max-h-10 max-w-[172px]";
    if (brandId === "sigmapoint") return "max-h-11 max-w-[168px]";
    if (brandId === "maison-du-visa") return "max-h-[46px] max-w-[210px]";
    if (brandId === "gusso-brands") return "max-h-[54px] max-w-[176px]";
    if (brandId === "dadi-kapida") return "max-h-[58px] max-w-[220px]";
    if (brandId === "prinwork") return "max-h-[42px] max-w-[184px]";
    if (brandId === "hadi-yap") return "max-h-[54px] max-w-[220px]";
    if (brandId === "cep-kapinda") return "max-h-[54px] max-w-[220px]";
    if (brandId === "olina") return "max-h-8 max-w-[164px]";
    if (brandId === "shoeluks") return "max-h-9 max-w-[190px]";
    if (brandId === "ciello-hotel-bodrum") return "max-h-[48px] max-w-[72px]";
    if (brandId === "goldes") return "max-h-[54px] max-w-[128px]";
    if (brandId === "ipsala-platin-dental") return "max-h-[58px] max-w-[76px]";
    return "max-h-10 max-w-[160px]";
  }

  function getLogoScaleClass(brandId: string) {
    if (brandId === "american-time") return "scale-[1.02]";
    if (brandId === "referans-go") return "scale-[1.05]";
    if (brandId === "pati-dostum") return "scale-[1.08]";
    if (brandId === "galiara") return "scale-[2.2]";
    if (brandId === "maison-du-visa") return "scale-[1.85]";
    if (brandId === "gusso-brands") return "scale-[1.02]";
    if (brandId === "dadi-kapida") return "scale-[1.22]";
    if (brandId === "sigmapoint") return "scale-[1.05]";
    if (brandId === "prinwork") return "scale-[1.04]";
    if (brandId === "hadi-yap") return "scale-[0.92]";
    if (brandId === "cep-kapinda") return "scale-[0.96]";
    if (brandId === "goldes") return "scale-[1.18]";
    if (brandId === "ipsala-platin-dental") return "scale-[1.08]";
    return "scale-100";
  }

  function getLogoWrapClass(brandId: string) {
    if (
      [
        "american-time",
        "referans-go",
        "valer-wear",
        "end-luxury-wear",
        "pati-dostum",
        "pratik-servisim",
        "prinwork",
        "hadi-yap",
        "olina",
        "shoeluks",
        "goldes",
        "ipsala-platin-dental",
      ].includes(brandId)
    ) {
      return "bg-white dark:bg-white";
    }
    if (brandId === "cep-kapinda") {
      return "bg-[#07111f] dark:bg-[#07111f]";
    }
    if (brandId === "ciello-hotel-bodrum") {
      return "bg-[#08111c] dark:bg-[#08111c]";
    }
    if (brandId === "maison-du-visa") {
      return "bg-slate-950 dark:bg-slate-950";
    }
    if (brandId === "gusso-brands") {
      return "bg-slate-950 dark:bg-slate-950";
    }
    return "bg-gradient-to-r from-slate-50 to-white dark:from-slate-900 dark:to-slate-950";
  }

  if (brands.length === 0) {
    return (
      <div className="glass-panel rounded-2xl px-5 py-6 text-sm text-slate-500 dark:text-slate-300">
        Henüz marka eklenmedi. Admin panelinden marka ekleyerek bu alanı anında güncelleyebilirsiniz.
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="glass-panel brand-mask group overflow-hidden rounded-2xl border-cyan-300/30 bg-gradient-to-r from-white/70 via-cyan-50/35 to-indigo-50/40 py-5 shadow-[0_22px_70px_-46px_rgba(2,132,199,0.45)] dark:border-cyan-800/35 dark:from-slate-950/80 dark:via-slate-900/65 dark:to-slate-950/80"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`brand-track flex w-max items-center gap-4 px-4 ${isPaused || !isInView ? "paused" : ""}`}
        style={{ "--duration": "42s" } as CSSProperties}
      >
        {trackItems.map((brand, idx) => (
          <a
            key={`${brand.id}-${idx}`}
            href={brand.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-24 min-w-[228px] items-center justify-center rounded-xl border border-slate-200/90 bg-white/90 px-4 py-3 transition duration-300 hover:-translate-y-1 hover:border-cyan-400 hover:bg-white hover:shadow-lg hover:shadow-cyan-600/15 dark:border-slate-700/90 dark:bg-slate-950/75 dark:hover:border-cyan-700/80 dark:hover:bg-slate-900/90"
            aria-label={`${brand.name} web sitesine git`}
          >
            <div
              className={cn(
                "flex h-14 w-full items-center justify-center overflow-hidden rounded-md px-3",
                getLogoWrapClass(brand.id),
              )}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={brand.logoUrl}
                alt={`${brand.name} logosu`}
                className={cn(
                  "h-auto w-auto object-contain opacity-95 transition duration-300 group-hover:opacity-100",
                  getLogoSizeClass(brand.id),
                  getLogoScaleClass(brand.id),
                )}
                loading="lazy"
                decoding="async"
                width={180}
                height={40}
              />
            </div>
          </a>
        ))}
      </motion.div>
    </div>
  );
}
