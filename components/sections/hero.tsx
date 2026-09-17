"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { trackEvent } from "@/lib/gtag";

const nodes = [
  [5, 66], [13, 48], [20, 58], [25, 29], [32, 45], [38, 17], [44, 70], [51, 31],
  [57, 62], [63, 20], [69, 43], [76, 73], [82, 34], [88, 58], [94, 26], [98, 72],
] as const;
const edges = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [4, 6], [6, 7], [7, 8], [7, 9], [9, 10], [10, 11], [10, 12], [12, 13], [13, 14], [14, 15]] as const;

export function HeroSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="blue-hero" aria-label="MI Digital giriş">
      <div className="blue-hero-glow" aria-hidden="true" />
      <svg className="blue-hero-network" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
        {edges.map(([a, b]) => <line key={`${a}-${b}`} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />)}
        {nodes.map(([x, y], index) => <circle key={`${x}-${y}`} cx={x} cy={y} r={index % 4 === 0 ? .37 : .23} className={index % 3 === 0 ? "network-blue" : ""} />)}
      </svg>
      <div className="site-container blue-hero-inner">
        <motion.p className="blue-hero-eyebrow" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>MI DIGITAL / Bağımsız dijital ajans</motion.p>
        <motion.h1 className="blue-hero-title" initial={reduceMotion ? false : { opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .08 }}>Fikirleri <span>etkiye</span><br />dönüştürüyoruz.</motion.h1>
        <motion.p className="blue-hero-description" initial={reduceMotion ? false : { opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65, delay: .18 }}>Strateji, yaratıcılık ve veriyi bir araya getirerek markaları doğru insanlarla buluşturuyoruz. Her mecrada net hedefler, ölçülebilir sonuçlar.</motion.p>
        <motion.div className="blue-hero-actions" initial={reduceMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6, delay: .28 }}>
          <Link href="/iletisim" onClick={() => trackEvent("cta_click_service", { cta_target: "/iletisim", cta_placement: "home_hero" })} className="blue-primary-button">Birlikte çalışalım <span aria-hidden="true">↗</span></Link>
          <Link href="#services" className="blue-secondary-button">Neler yapıyoruz <span aria-hidden="true">↓</span></Link>
        </motion.div>
      </div>
      <svg className="blue-hero-wave" viewBox="0 0 1440 110" preserveAspectRatio="none" aria-hidden="true"><path d="M0 82 C180 30 340 65 520 78 C700 96 850 30 1050 55 C1230 77 1350 40 1440 58 L1440 110 L0 110 Z" /></svg>
    </section>
  );
}
