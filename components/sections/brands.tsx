"use client";

import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/section-reveal";
import { BrandMarquee } from "@/components/sections/brand-marquee";
import type { BrandItem } from "@/data/brands";

type BrandsSectionProps = {
  brands: BrandItem[];
};

export function BrandsSection({ brands }: BrandsSectionProps) {
  return (
    <SectionReveal id="brands" className="mx-auto w-full max-w-6xl px-4 py-18 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-6 space-y-3"
      >
        <p className="inline-flex rounded-full border border-cyan-300/50 bg-cyan-50/70 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-cyan-800 dark:border-cyan-800/60 dark:bg-cyan-950/30 dark:text-cyan-300">
          Referans Ekosistemi
        </p>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Çalıştığımız Markalar</h2>
        <p className="text-slate-600 dark:text-slate-300">
          Gerçek iş ortaklıklarıyla ölçeklenen, sonuç odaklı büyüme hikâyeleri.
        </p>
      </motion.div>

      <BrandMarquee brands={brands} />
    </SectionReveal>
  );
}
