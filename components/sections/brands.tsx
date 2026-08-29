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
    <SectionReveal id="brands" className="mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8 lg:px-10">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45 }}
        className="mb-10 space-y-4 text-center"
      >
        <p className="eyebrow">Referans Ekosistemi</p>
        <h2 className="font-display text-4xl font-light text-[#f4efd4] sm:text-5xl">Birlikte <em className="text-[#84acfb]">büyüdüğümüz</em> markalar.</h2>
        <p className="text-[#aaa696]">
          Gerçek iş ortaklıklarıyla ölçeklenen, sonuç odaklı büyüme hikâyeleri.
        </p>
      </motion.div>

      <BrandMarquee brands={brands} />
    </SectionReveal>
  );
}
