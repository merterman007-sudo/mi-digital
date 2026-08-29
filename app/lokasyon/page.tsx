import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { localSeoPages } from "@/data/local-seo-pages";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Lokasyon Bazlı Dijital Ajans Hizmetleri",
  description:
    "İstanbul odaklı dijital pazarlama, SEO ve Google Ads yönetim hizmetlerini lokasyon bazlı sayfalardan inceleyin.",
  path: "/lokasyon",
  keywords: [
    "istanbul dijital pazarlama ajansi",
    "istanbul seo ajansi",
    "istanbul google ads yonetimi",
  ],
});

const schema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Lokasyon Bazlı Hizmet Sayfaları",
  url: absoluteUrl("/lokasyon"),
};

export default function LocationHubPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <JsonLd data={schema} />
        <Breadcrumbs
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Lokasyon", href: "/lokasyon" },
          ]}
        />

        <section className="glass-panel rounded-3xl p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
            Lokasyon
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Şehre Özel Dijital Büyüme Sayfaları
          </h1>
          <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300">
            Bulunduğunuz lokasyona ve hedeflerinize uygun hizmet planlarını
            bu sayfalardan inceleyebilir, size özel teklif alabilirsiniz.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {localSeoPages.map((page) => (
            <article key={page.slug} className="glass-panel rounded-2xl p-6">
              <h2 className="font-display text-2xl font-semibold">
                <Link
                  href={`/lokasyon/${page.slug}`}
                  className="transition hover:text-cyan-700 dark:hover:text-cyan-300"
                >
                  {page.seoTitle}
                </Link>
              </h2>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">
                {page.description}
              </p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
