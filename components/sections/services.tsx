"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/data/services";

const platformNames: Record<string, string> = {
  "google-ads-danismanligi": "Google Ads",
  "meta-ads-yonetimi": "Meta",
  "tiktok-ads-yonetimi": "TikTok",
  "yandex-direct-reklamlari": "Yandex Direct",
  "yango-ads-reklamlari": "Yango Ads",
  "linkedin-ads-yonetimi": "LinkedIn",
  "youtube-ads-reklamlari": "YouTube",
};

function ServiceMark({ slug, title, index }: { slug: string; title: string; index: number }) {
  if (slug === "criteo-reklam-yonetimi") {
    // eslint-disable-next-line @next/next/no-img-element
    return <span className="service-card-mark service-card-mark--logo"><img src="/platforms/criteo.svg" alt="Criteo" /></span>;
  }
  if (slug === "programatik-reklamcilik") {
    return <span className="service-card-mark service-card-mark--network" aria-label="Programatik medya"><i /><i /><i /><b>MI</b></span>;
  }
  const platform = platformNames[slug];
  if (platform) return <span className={`service-card-mark platform-${slug.split("-")[0]}`}>{platform}</span>;
  return <span className="service-card-mark service-card-mark--mi"><b>{String(index + 1).padStart(2, "0")}</b><i>{title.split(" ")[0]}</i></span>;
}

export function ServicesSection() {
  const reduceMotion = useReducedMotion();
  return (
    <section id="services" className="section-space services-editorial">
      <div className="site-container">
      <div className="section-heading">
        <div><p className="eyebrow"><span /> Hizmetler</p><h2>Her mecra için<br /><span className="gradient-text">ayrı strateji.</span></h2></div>
        <p>Aramadan sosyal medyaya, programatikten e-ticaret medyasına: hedef kitlenizin olduğu yerde, doğru mesaj ve sağlam ölçümlemeyle çalışıyoruz.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <motion.article className="service-card" key={service.slug} initial={reduceMotion ? false : { opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-45px" }} transition={{ duration: .55, delay: (index % 3) * .07 }}>
            <div><div className="service-card-top"><span className="service-card-index">{String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</span><ServiceMark slug={service.slug} title={service.title} index={index} /></div><h3 className="mt-8">{service.title}</h3><p>{service.shortDescription}</p></div>
            <Link className="service-card-link" href={`/hizmetler/${service.slug}`}>Hizmeti incele <span aria-hidden="true">↗</span></Link>
          </motion.article>
        ))}
      </div>
      </div>
    </section>
  );
}
