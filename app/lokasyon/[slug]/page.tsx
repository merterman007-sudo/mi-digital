import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ConversionCta } from "@/components/blog/conversion-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import {
  getLocalSeoPageBySlug,
  localSeoPages,
} from "@/data/local-seo-pages";
import { getServiceBySlug } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

type LocalPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return localSeoPages.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: LocalPageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getLocalSeoPageBySlug(slug);

  if (!page) {
    return createPageMetadata({
      title: "Lokasyon Sayfası Bulunamadı",
      description: "Aradığınız lokasyon sayfası bulunamadı.",
      path: "/lokasyon",
    });
  }

  return createPageMetadata({
    title: page.seoTitle,
    description: page.description,
    path: `/lokasyon/${page.slug}`,
    keywords: [page.seoTitle, page.serviceTitle, `${page.city} ajans`],
  });
}

export default async function LocalSeoDetailPage({ params }: LocalPageProps) {
  const { slug } = await params;
  const page = getLocalSeoPageBySlug(slug);

  if (!page) {
    notFound();
  }

  const relatedService = getServiceBySlug(page.relatedServiceSlug);

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: page.serviceTitle,
    areaServed: page.city,
    name: page.seoTitle,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    url: absoluteUrl(`/lokasyon/${page.slug}`),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: page.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <JsonLd data={[serviceSchema, faqSchema]} />
        <Breadcrumbs
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Lokasyon", href: "/lokasyon" },
            { label: page.seoTitle, href: `/lokasyon/${page.slug}` },
          ]}
        />

        <section className="glass-panel rounded-3xl p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
            {page.city}
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            {page.seoTitle}
          </h1>
          <p className="mt-4 max-w-4xl text-slate-700 dark:text-slate-300">
            {page.intro}
          </p>
        </section>

        <section className="glass-panel rounded-2xl p-6">
          <h2 className="font-display text-2xl font-semibold">
            Bu Sayfada Neler Sunuyoruz?
          </h2>
          <ul className="mt-4 space-y-3 text-sm text-slate-700 dark:text-slate-300">
            {page.bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="glass-panel rounded-2xl p-6">
          <h2 className="font-display text-2xl font-semibold">
            Sık Sorulan Sorular
          </h2>
          <div className="mt-4 space-y-4">
            {page.faq.map((item) => (
              <article
                key={item.question}
                className="rounded-xl border border-slate-200/70 bg-white/70 p-4 dark:border-slate-700 dark:bg-slate-900/50"
              >
                <h3 className="font-semibold text-slate-900 dark:text-slate-100">
                  {item.question}
                </h3>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </section>

        <ConversionCta
          title={`${page.city} için özel büyüme planı oluşturalım`}
          description="Mevcut reklam, SEO ve dönüşüm performansınızı birlikte analiz edip ilk 30 günlük aksiyon listesi çıkaralım."
          primary={{ href: "/iletisim", label: "Ücretsiz Ön Görüşme Al" }}
          secondary={
            relatedService
              ? {
                  href: `/hizmetler/${relatedService.slug}`,
                  label: `${relatedService.title} Hizmeti`,
                }
              : { href: "/hizmetler", label: "Tüm Hizmetler" }
          }
        />

        <section className="glass-panel rounded-2xl p-6">
          <h2 className="font-display text-2xl font-semibold">
            Sonraki Adım
          </h2>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
            Bütçeyi nereden başlatmanız gerektiğini bilmiyorsanız önce mini bir
            analiz toplantısı yapalım. Ardından size uygun kanal ve teklif
            planını netleştirelim.
          </p>
          <div className="mt-5">
            <Link
              href="/iletisim"
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Hemen İletişime Geç
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
