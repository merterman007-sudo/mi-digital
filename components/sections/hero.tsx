"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/gtag";

export function HeroSection() {
  return (
    <section className="hero-shell">
      <div className="hero-glow" />
      <div className="site-container relative py-20 md:py-32">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
          <p className="eyebrow"><span /> MI Digital · Bağımsız dijital büyüme ajansı</p>
          <h1 className="hero-title !max-w-[1080px]">Markaları<br /><em>sonuca</em> taşıyoruz.</h1>
          <div className="mt-10 flex flex-col justify-between gap-8 border-t border-white/15 pt-8 md:flex-row md:items-end">
            <p className="hero-copy !mt-0">Medya, yaratıcılık ve veriyi aynı masada buluşturuyoruz. Google Ads, Meta Ads, TikTok, programatik ve diğer kanallarda markanıza özel büyüme planı kuruyoruz.</p>
            <div className="flex shrink-0 flex-wrap gap-3"><Link href="/iletisim" onClick={() => trackEvent("cta_click_service", { cta_target: "/iletisim", cta_placement: "home_hero" })} className="button-primary">Birlikte çalışalım <span>↗</span></Link><Link href="#services" className="button-secondary">Hizmetleri keşfet</Link></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
