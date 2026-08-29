import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts } from "@/data/blog-posts";
import { getServiceBySlug, services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

type ServiceDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServiceDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return createPageMetadata({
      title: "Hizmet Bulunamadı",
      description: "Aradığınız hizmet sayfası bulunamadı.",
      path: "/hizmetler",
    });
  }

  return createPageMetadata({
    title: service.title,
    description: service.shortDescription,
    path: `/hizmetler/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedPosts = blogPosts.filter((post) =>
    post.relatedServiceSlugs.includes(service.slug),
  );

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.longDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    areaServed: "Türkiye",
    url: absoluteUrl(`/hizmetler/${service.slug}`),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Ana Sayfa",
        item: absoluteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Hizmetler",
        item: absoluteUrl("/hizmetler"),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: service.title,
        item: absoluteUrl(`/hizmetler/${service.slug}`),
      },
    ],
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <JsonLd data={[serviceSchema, faqSchema, breadcrumbSchema]} />
        <Breadcrumbs
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Hizmetler", href: "/hizmetler" },
            { label: service.title, href: `/hizmetler/${service.slug}` },
          ]}
        />

        <PageHero
          badge="Hizmet Detayı"
          title={service.title}
          description={service.longDescription}
          ctaPrimaryLabel="Teklif Al"
          ctaPrimaryHref="/iletisim"
          ctaSecondaryLabel="Tüm Hizmetler"
          ctaSecondaryHref="/hizmetler"
          variant="cyan"
        />

        <section className="grid gap-6 md:grid-cols-2">
          <article className="glass-panel rounded-2xl p-6">
            <h2 className="font-display text-2xl font-semibold">Süreç Adımları</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              {service.process.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="glass-panel rounded-2xl p-6">
            <h2 className="font-display text-2xl font-semibold">Teslimatlar</h2>
            <ul className="mt-4 space-y-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-indigo-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </section>

        <section className="glass-panel rounded-2xl p-6">
          <h2 className="font-display text-2xl font-semibold">Sık Sorulan Sorular</h2>
          <div className="mt-4 space-y-4">
            {service.faq.map((item) => (
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

        {relatedPosts.length > 0 ? (
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold">İlgili Blog İçerikleri</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedPosts.map((post) => (
                <article key={post.slug} className="glass-panel rounded-2xl p-5">
                  <p className="text-xs uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-300">
                    {post.category.name}
                  </p>
                  <h3 className="mt-2 font-display text-xl font-semibold">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="transition hover:text-cyan-700 dark:hover:text-cyan-300"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
                    {post.excerpt}
                  </p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}

