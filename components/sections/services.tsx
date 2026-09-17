"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { services } from "@/data/services";

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
            <div><span className="service-card-index">{String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</span><h3 className="mt-8">{service.title}</h3><p>{service.shortDescription}</p></div>
            <Link className="service-card-link" href={`/hizmetler/${service.slug}`}>Hizmeti incele <span aria-hidden="true">↗</span></Link>
          </motion.article>
        ))}
      </div>
      </div>
    </section>
  );
}
