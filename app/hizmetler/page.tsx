import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Dijital Ajans Hizmetleri",
  description:
    "MI DIGITAL performans pazarlama, SEO, web geliştirme ve CRM otomasyon hizmetlerini uçtan uca sunar.",
  path: "/hizmetler",
  keywords: [
    "dijital ajans hizmetleri",
    "performans pazarlama",
    "seo hizmeti",
    "web tasarım",
    "crm otomasyon",
  ],
});

const serviceCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "MI DIGITAL Hizmetler",
  url: absoluteUrl("/hizmetler"),
  description:
    "MI DIGITAL tarafından sunulan dijital pazarlama, SEO, web geliştirme ve CRM otomasyon hizmetleri.",
  hasPart: services.map((service) => ({
    "@type": "Service",
    name: service.title,
    url: absoluteUrl(`/hizmetler/${service.slug}`),
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
  })),
};

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <JsonLd data={serviceCollectionSchema} />
        <Breadcrumbs items={[{ label: "Ana Sayfa", href: "/" }, { label: "Hizmetler", href: "/hizmetler" }]} />

        <PageHero
          badge="Hizmetler"
          title="Markanızın büyüme yolculuğuna özel uçtan uca dijital hizmetler."
          description="Tüm hizmetlerimiz proje ihtiyaçlarına göre modüler şekilde planlanır. Tek hizmet alabileceğiniz gibi, tam servis ajans modelinde tüm süreci de bize emanet edebilirsiniz."
          ctaPrimaryLabel="Teklif Talebi Oluştur"
          ctaPrimaryHref="/iletisim"
          ctaSecondaryLabel="Hakkımızda"
          ctaSecondaryHref="/hakkimizda"
          variant="cyan"
        />

        <section className="grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <article key={service.slug} className="glass-panel card-hover rounded-2xl p-6">
              <div className="mb-4 h-1.5 w-12 rounded-full bg-gradient-to-r from-cyan-500 to-indigo-500" />
              <h2 className="font-display text-xl font-semibold">{service.title}</h2>
              <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                {service.longDescription}
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {service.keywords.slice(0, 3).map((keyword) => (
                  <span
                    key={keyword}
                    className="rounded-full border border-cyan-200/70 bg-cyan-50/60 px-3 py-1 text-xs text-cyan-900 dark:border-cyan-900/60 dark:bg-cyan-900/20 dark:text-cyan-200"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              <Link
                href={`/hizmetler/${service.slug}`}
                className="mt-6 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700"
              >
                Hizmet Detayını Gör
              </Link>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
