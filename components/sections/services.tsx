"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/section-reveal";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <SectionReveal id="services" className="mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8 lg:px-10">
      <div className="mb-12 grid gap-5 lg:grid-cols-2 lg:items-end">
       <div>
        <p className="eyebrow">Uzmanlık Alanları</p>
        <h2 className="mt-4 font-display text-4xl font-light leading-tight text-[#f4efd4] sm:text-5xl">Fikri, <em className="text-[#84acfb]">etkiye</em> dönüştüren disiplinler.</h2>
       </div>
        <p className="max-w-xl text-[#aaa696] lg:justify-self-end">
          Pazarlamadan yazılıma kadar tüm dijital büyüme ihtiyaçlarını tek ekip ile
          yönetebilmeniz için uçtan uca çözümler üretiyoruz.
        </p>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.08 } },
        }}
        className="grid gap-4 md:grid-cols-2"
      >
        {services.map((service) => (
          <motion.article
            key={service.slug}
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            className="card-hover group relative overflow-hidden rounded-[12px] border border-[#f4efd4]/30 bg-[#111] p-8"
          >
            <div className="mb-10 text-xs tracking-[0.2em] text-[#84acfb]">0{services.findIndex((item) => item.slug === service.slug) + 1}</div>
            <h3 className="mb-4 font-display text-2xl font-light text-[#f4efd4]">{service.title}</h3>
            <p className="text-sm leading-6 text-[#aaa696]">
              {service.shortDescription}
            </p>
            <Link
              href={`/hizmetler/${service.slug}`}
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[#84acfb] transition group-hover:gap-3"
            >
              Detayı Gör <span aria-hidden="true">→</span>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </SectionReveal>
  );
}
