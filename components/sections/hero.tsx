"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { trackEvent } from "@/lib/gtag";
const disciplines = ["Performance", "Creative", "Web", "SEO"];
export function HeroSection() {
  return <section className="hero-shell"><div className="hero-glow" /><div className="site-container relative grid items-end gap-12 pb-16 pt-14 md:pb-24 md:pt-24 lg:grid-cols-[1.25fr_.75fr] lg:gap-20">
    <motion.div initial={{opacity:0,y:24}} animate={{opacity:1,y:0}} transition={{duration:.65}}><p className="eyebrow"><span /> Bağımsız dijital büyüme ajansı · İstanbul</p><h1 className="hero-title">Markanızı görünür değil, <em>vazgeçilmez</em> yapalım.</h1><p className="hero-copy">Strateji, reklam, kreatif ve teknolojiyi aynı masada buluşturuyor; markalar için ölçülebilir ve sürdürülebilir büyüme sistemleri kuruyoruz.</p><div className="mt-8 flex flex-col gap-3 min-[420px]:flex-row"><Link href="/iletisim" onClick={()=>trackEvent("cta_click_service",{cta_target:"/iletisim",cta_placement:"home_hero"})} className="button-primary">Birlikte büyüyelim <span>↗</span></Link><Link href="#brands" className="button-secondary">İşlerimizi incele</Link></div></motion.div>
    <motion.aside initial={{opacity:0,y:28}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.12}} className="hero-card"><div className="flex items-center justify-between border-b border-white/10 pb-5"><p className="text-xs uppercase tracking-[.2em] text-white/50">MI / Growth system</p><span className="status-dot">Aktif</span></div><p className="mt-7 font-display text-3xl leading-tight">Fikirden sonuca<br/>tek ekip, tek sistem.</p><div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">{disciplines.map((x,i)=><div key={x} className="bg-[#0b1718] p-4 text-sm text-white/80"><span className="mb-5 block text-[10px] text-[#5eead4]">0{i+1}</span>{x}</div>)}</div></motion.aside>
  </div></section>;
}
