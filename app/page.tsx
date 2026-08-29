import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { HeroSection } from "@/components/sections/hero";
import { ContactSection } from "@/components/sections/contact";
import { ServicesSection } from "@/components/sections/services";
import { BrandsSection } from "@/components/sections/brands";
import { AboutSection } from "@/components/sections/about";
import { GrowthSystemSection } from "@/components/sections/growth-system";
import { Footer } from "@/components/layout/footer";
import { JsonLd } from "@/components/seo/json-ld";
import { brands } from "@/data/brands";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Dijital Ajans ve Büyüme Ortağı",
  description:
    "MI DIGITAL ile performans reklamları, SEO, kreatif üretim ve web geliştirmeyi tek ekipte yöneterek markanızı ölçeklenebilir şekilde büyütün.",
  path: "/",
  keywords: [
    "dijital ajans",
    "performans pazarlama ajansı",
    "seo ajansı",
    "web geliştirme",
  ],
});

const homeSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "MI DIGITAL Ana Sayfa",
  url: absoluteUrl("/"),
  description:
    "MI DIGITAL dijital pazarlama, SEO ve yazılım geliştirme alanında uçtan uca hizmet sunar.",
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pb-10">
        <JsonLd data={homeSchema} />
        <HeroSection />
        <GrowthSystemSection />
        <ServicesSection />
        <AboutSection />
        <BrandsSection brands={brands} />
        <section className="relative mx-auto w-full max-w-6xl px-4 pb-10 sm:px-6 lg:px-8">
          <div className="rounded-[28px] border border-cyan-200/70 bg-gradient-to-br from-white via-cyan-50/70 to-slate-100/90 p-2 shadow-[0_20px_80px_-42px_rgba(14,116,144,0.45)] backdrop-blur dark:border-cyan-900/40 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
            <ContactSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
