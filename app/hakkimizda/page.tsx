import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Hakkımızda",
  description: "MI DIGITAL ekibini, çalışma modelini ve büyüme yaklaşımını keşfedin.",
  path: "/hakkimizda",
  keywords: ["dijital ajans ekibi", "ajans vizyonu", "mi digital"],
});

const stats = [
  { label: "Tamamlanan Proje", value: "120+" },
  { label: "Aktif İş Ortağı", value: "34" },
  { label: "Sektör Deneyimi", value: "8 Yıl" },
  { label: "Ortalama ROAS", value: "4.2x" },
];

const aboutSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "MI DIGITAL Hakkımızda",
  url: absoluteUrl("/hakkimizda"),
};

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-10 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <JsonLd data={aboutSchema} />
        <Breadcrumbs
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Hakkımızda", href: "/hakkimizda" },
          ]}
        />

        <PageHero
          badge="Hakkımızda"
          title="MI DIGITAL: Veriye güvenen, yaratıcılıkla büyüten ekip."
          description="MI DIGITAL, İstanbul merkezli bağımsız bir dijital ajanstır. Ekip olarak performans pazarlama, marka iletişimi ve web geliştirme disiplinlerini tek bir stratejiye bağlayarak çalışırız."
          ctaPrimaryLabel="Ekibimizle Tanış"
          ctaPrimaryHref="/iletisim"
          ctaSecondaryLabel="Hizmetleri İncele"
          ctaSecondaryHref="/hizmetler"
          variant="violet"
        />

        <section className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat) => (
            <article key={stat.label} className="glass-panel rounded-2xl p-5 card-hover">
              <p className="text-xs uppercase tracking-[0.14em] text-slate-500 dark:text-slate-400">
                {stat.label}
              </p>
              <p className="mt-2 font-display text-3xl font-semibold">{stat.value}</p>
            </article>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <article className="glass-panel rounded-2xl p-6">
            <h2 className="font-display text-2xl font-semibold">Vizyonumuz</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Türkiye’de dijital ajans yaklaşımını daha şeffaf, daha ölçülebilir ve daha yaratıcı
              bir standarda taşımak.
            </p>
          </article>
          <article className="glass-panel rounded-2xl p-6">
            <h2 className="font-display text-2xl font-semibold">Misyonumuz</h2>
            <p className="mt-3 text-slate-700 dark:text-slate-300">
              Markaların satış ve bilinirlik hedeflerini, doğru teknoloji ve strateji kombinasyonuyla
              sürdürülebilir şekilde büyütmek.
            </p>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
