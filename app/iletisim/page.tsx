import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ContactSection } from "@/components/sections/contact";
import { PageHero } from "@/components/sections/page-hero";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "İletişim",
  description:
    "MI DIGITAL ile iletişime geçin. WhatsApp veya teklif formu üzerinden aynı gün içinde dönüş alın.",
  path: "/iletisim",
  keywords: ["dijital ajans iletişim", "teklif formu", "whatsapp teklif"],
});

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "MI DIGITAL İletişim",
  url: absoluteUrl("/iletisim"),
};

export default function ContactPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <JsonLd data={contactSchema} />
        <Breadcrumbs
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "İletişim", href: "/iletisim" },
          ]}
        />

        <PageHero
          badge="İletişim"
          title="24 saat içinde geri dönüş alırsınız."
          description="Formu doldurarak teklif talebi bırakabilir veya doğrudan WhatsApp üzerinden bize yazabilirsiniz. Ekibimiz ilk değerlendirmeyi aynı gün içinde paylaşır."
          ctaPrimaryLabel="WhatsApp'tan Yaz"
          ctaPrimaryHref="https://wa.me/905437128366"
          ctaSecondaryLabel="Servisleri Gör"
          ctaSecondaryHref="/hizmetler"
          variant="emerald"
        />

        <section className="glass-panel rounded-2xl p-6 text-sm text-slate-700 dark:text-slate-300">
          <div className="grid gap-3 sm:grid-cols-2">
            <p><span className="font-semibold">Telefon:</span> 0543 712 83 66</p>
            <p><span className="font-semibold">E-posta:</span> merterman035@gmail.com</p>
            <p><span className="font-semibold">Adres:</span> Maslak, İstanbul</p>
            <p><span className="font-semibold">Çalışma:</span> Hafta içi 09:00 - 19:00</p>
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
