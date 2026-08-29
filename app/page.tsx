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
      <main className="flex-1">
        <JsonLd data={homeSchema} />
        <HeroSection />
        <GrowthSystemSection />
        <ServicesSection />
        <AboutSection />
        <BrandsSection brands={brands} />
        <section className="relative mx-auto w-full max-w-[1200px] px-5 pb-24 sm:px-8 lg:px-10">
          <div className="rounded-[14px] border border-[#f4efd4]/35 bg-[#111] p-2">
            <ContactSection />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
