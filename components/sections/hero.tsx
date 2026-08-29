"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { trackEvent } from "@/lib/gtag";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };
export function HeroSection() {
  return (
    <section className="mx-auto flex min-h-[78vh] w-full max-w-[1200px] items-center px-5 pb-20 pt-14 text-center sm:px-8 lg:px-10">
      <motion.div variants={container} initial="hidden" animate="show" className="mx-auto max-w-[980px]">
          <motion.p variants={item} className="eyebrow mb-8">Bağımsız Dijital Büyüme Ajansı · İstanbul</motion.p>
          <motion.h1 variants={item} className="font-display text-[clamp(3rem,8vw,6.9rem)] font-light leading-[0.92] tracking-[-0.045em] text-[#f4efd4]">
            Markaları dijitalde görünür değil, <span className="gradient-text">vazgeçilmez</span> kılıyoruz.
          </motion.h1>
          <motion.p variants={item} className="mx-auto mt-9 max-w-2xl text-base leading-7 text-[#aaa696] sm:text-lg">
            Strateji, performans, yaratıcı üretim ve teknolojiyi tek masada buluşturuyoruz. Daha güçlü bir marka algısı ve ölçülebilir büyüme için.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link href="/iletisim" onClick={() => trackEvent("cta_click_service", { cta_target: "/iletisim", cta_placement: "home_hero" })} className="group inline-flex items-center gap-3 rounded-full bg-[#84acfb] px-7 py-3.5 text-sm font-medium text-black transition hover:bg-[#a9c5ff]">
              Projenizi Konuşalım <span className="transition group-hover:translate-x-1">↗</span>
            </Link>
            <Link href="#brands" className="rounded-full border border-[#f4efd4]/40 px-7 py-3.5 text-sm font-medium text-[#f4efd4] transition hover:border-[#84acfb] hover:text-[#84acfb]">Referansları İncele</Link>
          </motion.div>
          <motion.div variants={item} className="mx-auto mt-16 flex max-w-xl items-center justify-center gap-4 text-[10px] uppercase tracking-[0.22em] text-[#626055]"><span className="h-px flex-1 bg-[#f4efd4]/20" /> Strateji · Yaratıcılık · Teknoloji <span className="h-px flex-1 bg-[#f4efd4]/20" /></motion.div>
      </motion.div>
    </section>
  );
}
