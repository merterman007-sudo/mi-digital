"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { SectionReveal } from "@/components/ui/section-reveal";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <SectionReveal id="services" className="mx-auto w-full max-w-6xl px-4 py-18 sm:px-6 lg:px-8">
      <div className="mb-8 space-y-3">
        <p className="eyebrow">Uzmanlık Alanları</p>
        <h2 className="font-display text-3xl font-semibold sm:text-4xl">Hizmetlerimiz</h2>
        <p className="max-w-3xl text-slate-600 dark:text-slate-300">
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
        className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
      >
        {services.map((service) => (
          <motion.article
            key={service.slug}
            variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}
            className="card-hover glass-panel group relative overflow-hidden rounded-[24px] p-7 shadow-sm"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-teal-400/80 to-transparent opacity-0 transition group-hover:opacity-100" />
            <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-full border border-teal-500/20 bg-teal-500/10 text-xs font-bold text-teal-700 dark:text-teal-300">0{services.findIndex((item) => item.slug === service.slug) + 1}</div>
            <h3 className="mb-3 font-display text-xl font-medium">{service.title}</h3>
            <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
              {service.shortDescription}
            </p>
            <Link
              href={`/hizmetler/${service.slug}`}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-teal-700 transition group-hover:gap-3 dark:text-teal-300"
            >
              Detayı Gör <span aria-hidden="true">→</span>
            </Link>
          </motion.article>
        ))}
      </motion.div>
    </SectionReveal>
  );
}
