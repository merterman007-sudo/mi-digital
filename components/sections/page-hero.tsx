"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { trackEvent } from "@/lib/gtag";

type Variant = "cyan" | "violet" | "emerald";

type PageHeroProps = {
  badge: string;
  title: string;
  description: string;
  ctaPrimaryLabel: string;
  ctaPrimaryHref: string;
  ctaSecondaryLabel: string;
  ctaSecondaryHref: string;
  variant?: Variant;
};

const variantMap: Record<Variant, { blobA: string; blobB: string; cta: string }> = {
  cyan: {
    blobA: "bg-cyan-400/20 dark:bg-cyan-500/20",
    blobB: "bg-blue-400/18 dark:bg-blue-500/18",
    cta: "from-cyan-600 to-sky-600 hover:from-cyan-700 hover:to-sky-700",
  },
  violet: {
    blobA: "bg-violet-400/20 dark:bg-violet-500/20",
    blobB: "bg-fuchsia-400/18 dark:bg-fuchsia-500/18",
    cta: "from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700",
  },
  emerald: {
    blobA: "bg-emerald-400/22 dark:bg-emerald-500/20",
    blobB: "bg-teal-400/18 dark:bg-teal-500/18",
    cta: "from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700",
  },
};

export function PageHero({
  badge,
  title,
  description,
  ctaPrimaryLabel,
  ctaPrimaryHref,
  ctaSecondaryLabel,
  ctaSecondaryHref,
  variant = "cyan",
}: PageHeroProps) {
  const reduceMotion = useReducedMotion();
  const palette = variantMap[variant];
  const primaryExternal = ctaPrimaryHref.startsWith("http");
  const secondaryExternal = ctaSecondaryHref.startsWith("http");

  function handleClick(target: string, type: "primary" | "secondary") {
    trackEvent(target.startsWith("/hizmetler") || target === "/iletisim" ? "cta_click_service" : "cta_click_blog", {
      cta_target: target,
      cta_type: type,
      cta_section: badge,
    });
  }

  return (
    <section className="relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/85 p-8 shadow-sm dark:border-slate-800 dark:bg-slate-950/65 md:p-12">
      <motion.div
        className={`absolute -left-10 -top-8 -z-10 h-52 w-52 rounded-full blur-3xl ${palette.blobA}`}
        animate={reduceMotion ? undefined : { y: -8, x: 4 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
      />
      <motion.div
        className={`absolute right-0 top-0 -z-10 h-56 w-56 rounded-full blur-3xl ${palette.blobB}`}
        animate={reduceMotion ? undefined : { y: 10, x: -6 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
          {badge}
        </p>
        <h1 className="mt-3 max-w-5xl font-display text-4xl font-semibold leading-tight sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-4xl text-base leading-7 text-slate-700 dark:text-slate-300">
          {description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          {primaryExternal ? (
            <a
              href={ctaPrimaryHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(ctaPrimaryHref, "primary")}
              className={`rounded-full bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white transition ${palette.cta}`}
            >
              {ctaPrimaryLabel}
            </a>
          ) : (
            <Link
              href={ctaPrimaryHref}
              onClick={() => handleClick(ctaPrimaryHref, "primary")}
              className={`rounded-full bg-gradient-to-r px-6 py-3 text-sm font-semibold text-white transition ${palette.cta}`}
            >
              {ctaPrimaryLabel}
            </Link>
          )}
          {secondaryExternal ? (
            <a
              href={ctaSecondaryHref}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => handleClick(ctaSecondaryHref, "secondary")}
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              {ctaSecondaryLabel}
            </a>
          ) : (
            <Link
              href={ctaSecondaryHref}
              onClick={() => handleClick(ctaSecondaryHref, "secondary")}
              className="rounded-full border border-slate-300 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              {ctaSecondaryLabel}
            </Link>
          )}
        </div>
      </motion.div>
    </section>
  );
}
