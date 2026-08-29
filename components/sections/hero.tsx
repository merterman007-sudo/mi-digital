"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { trackEvent } from "@/lib/gtag";

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.06 } } };
const item = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } };
const heroStats = [
  { value: "50+", label: "Marka deneyimi" },
  { value: "35M+", label: "TL bütçe yönetimi" },
  { value: "120+", label: "Aylık kreatif test" },
];
const signals = [
  { label: "Meta Ads", value: "4.8x", trend: "+18.4%" },
  { label: "Google Ads", value: "3.9x", trend: "+12.7%" },
  { label: "Dönüşüm", value: "1,284", trend: "+24.1%" },
];

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="relative mx-auto w-full max-w-6xl px-4 pb-20 pt-8 sm:px-6 lg:px-8 lg:pt-12">
      <div className="pointer-events-none absolute -left-24 top-0 -z-10 h-80 w-80 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-12 -z-10 h-80 w-80 rounded-full bg-amber-300/10 blur-3xl" />
      <div className="grid min-h-[660px] items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div variants={container} initial="hidden" animate="show" className="relative z-10">
          <motion.div variants={item} className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-teal-500" />
            <span className="eyebrow">Independent Growth Studio · İstanbul</span>
          </motion.div>
          <motion.h1 variants={item} className="max-w-4xl font-display text-[clamp(3rem,7vw,5.8rem)] font-semibold leading-[0.96] tracking-[-0.055em] text-slate-950 dark:text-[#f4f0e8]">
            Büyümeyi tesadüfe değil, <span className="gradient-text">sisteme</span> bırakın.
          </motion.h1>
          <motion.p variants={item} className="mt-8 max-w-2xl text-lg leading-8 text-slate-600 dark:text-slate-300">
            Strateji, performans reklamları, yaratıcı üretim ve dijital deneyimi tek bir büyüme sistemi içinde birleştiriyoruz. Daha net kararlar, daha güçlü marka algısı ve ölçülebilir sonuçlar.
          </motion.p>
          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <Link href="/iletisim" onClick={() => trackEvent("cta_click_service", { cta_target: "/iletisim", cta_placement: "home_hero" })} className="group inline-flex items-center gap-3 rounded-full bg-teal-300 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-[0_18px_55px_-25px_rgba(45,212,191,0.8)] transition hover:-translate-y-0.5 hover:bg-teal-200">
              Projenizi Konuşalım <span className="transition group-hover:translate-x-1">↗</span>
            </Link>
            <Link href="#brands" className="rounded-full border border-slate-300/80 px-7 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-slate-500 dark:border-white/15 dark:text-slate-200 dark:hover:border-white/35">Referansları İncele</Link>
          </motion.div>
          <motion.div variants={item} className="mt-12 grid max-w-2xl grid-cols-3 border-y border-slate-300/60 py-5 dark:border-white/10">
            {heroStats.map((stat, index) => (
              <div key={stat.label} className={index > 0 ? "border-l border-slate-300/60 pl-5 dark:border-white/10" : ""}>
                <p className="font-display text-2xl font-semibold tracking-tight text-slate-950 dark:text-white sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-[11px] uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 28, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ duration: 0.75, ease: "easeOut", delay: 0.15 }} className="relative mx-auto w-full max-w-[470px]">
          <div className="absolute -inset-5 -z-10 rounded-[40px] bg-gradient-to-br from-teal-400/15 via-transparent to-amber-300/15 blur-xl" />
          <div className="premium-panel relative overflow-hidden rounded-[32px] p-6 text-white sm:p-7">
            <div className="absolute right-0 top-0 h-44 w-44 rounded-full bg-teal-300/10 blur-3xl" />
            <div className="mb-8 flex items-center justify-between">
              <div><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-teal-300">Growth Intelligence</p><h2 className="mt-2 font-display text-xl font-semibold">Performance pulse</h2></div>
              <div className="flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1.5 text-[10px] font-semibold text-emerald-200"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-300" /> Canlı</div>
            </div>
            <div className="mb-7 flex h-32 items-end gap-2 rounded-2xl border border-white/8 bg-white/[0.03] px-4 pb-4 pt-7">
              {[36, 49, 44, 64, 56, 78, 69, 88, 82, 100, 92, 112].map((height, index) => (
                <motion.span key={index} initial={{ height: 0 }} animate={{ height }} transition={{ duration: 0.7, delay: 0.45 + index * 0.035 }} className="flex-1 rounded-t-sm bg-gradient-to-t from-teal-500/40 to-teal-200" />
              ))}
            </div>
            <div className="space-y-3">
              {signals.map((signal) => (
                <div key={signal.label} className="grid grid-cols-[1fr_auto_auto] items-center gap-4 rounded-2xl border border-white/8 bg-white/[0.035] px-4 py-3.5">
                  <p className="text-sm text-slate-300">{signal.label}</p><p className="font-display text-lg font-semibold">{signal.value}</p><p className="rounded-full bg-emerald-300/10 px-2 py-1 text-[10px] font-semibold text-emerald-300">{signal.trend}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-5 text-xs text-slate-400"><span>Son güncelleme: bugün, 09:42</span><span className="text-teal-300">MI / OS™</span></div>
          </div>
          <motion.div animate={reduceMotion ? undefined : { y: [0, -7, 0], rotate: [-1, 0, -1] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="absolute -bottom-7 -left-5 rounded-2xl border border-white/10 bg-[#171b18]/95 px-5 py-4 shadow-2xl backdrop-blur-xl">
            <p className="text-[10px] uppercase tracking-[0.18em] text-slate-400">Haftalık ivme</p><p className="mt-1 font-display text-2xl font-semibold text-white">+24.1%</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
