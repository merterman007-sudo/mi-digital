"use client";

import Link from "next/link";
import { trackEvent } from "@/lib/gtag";

type CtaAction = {
  href: string;
  label: string;
};

type ConversionCtaProps = {
  badge?: string;
  title: string;
  description: string;
  primary: CtaAction;
  secondary?: CtaAction;
};

export function ConversionCta({
  badge = "Ücretsiz Danışmanlık",
  title,
  description,
  primary,
  secondary,
}: ConversionCtaProps) {
  function handleClick(targetHref: string) {
    const isService = targetHref.startsWith("/hizmetler");
    trackEvent(isService ? "cta_click_service" : "cta_click_blog", {
      cta_target: targetHref,
      cta_title: title,
    });
  }

  return (
    <section className="rounded-3xl border border-cyan-200/70 bg-gradient-to-br from-cyan-50/80 via-white to-indigo-50/70 p-6 shadow-[0_18px_60px_-40px_rgba(14,116,144,0.45)] dark:border-cyan-900/50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 md:p-8">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
        {badge}
      </p>
      <h2 className="mt-3 font-display text-2xl font-semibold text-slate-900 dark:text-slate-100 md:text-3xl">
        {title}
      </h2>
      <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-700 dark:text-slate-300 md:text-base">
        {description}
      </p>
      <div className="mt-6 flex flex-wrap gap-3">
        <Link
          href={primary.href}
          onClick={() => handleClick(primary.href)}
          className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          {primary.label}
        </Link>
        {secondary ? (
          <Link
            href={secondary.href}
            onClick={() => handleClick(secondary.href)}
            className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-900"
          >
            {secondary.label}
          </Link>
        ) : null}
      </div>
    </section>
  );
}
