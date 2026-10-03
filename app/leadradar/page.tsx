import type { Metadata } from "next";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { createPageMetadata } from "@/lib/seo";

const leadRadarUrl = process.env.NEXT_PUBLIC_LEADRADAR_URL || "https://leadradar.midigital.com.tr";

export const metadata: Metadata = {
  ...createPageMetadata({
    title: "LeadRadar | Özel müşteri araştırma alanı",
    description: "MI Digital için parola korumalı yerel işletme araştırma ve fırsat yönetim alanı.",
    path: "/leadradar",
  }),
  robots: { index: false, follow: false },
};

export default function LeadRadarGatewayPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-1 items-center bg-slate-50 py-20 dark:bg-slate-950">
        <section className="site-container w-full">
          <div className="mx-auto max-w-2xl overflow-hidden rounded-[30px] border border-cyan-200/70 bg-white shadow-[0_25px_100px_-42px_rgba(14,116,144,0.45)] dark:border-cyan-900/45 dark:bg-slate-900">
            <div className="bg-gradient-to-br from-[#10244e] via-[#173d68] to-cyan-700 p-8 text-white sm:p-11">
              <p className="text-xs font-bold tracking-[0.18em] text-cyan-200">MI DIGITAL · ÖZEL ÇALIŞMA ALANI</p>
              <h1 className="mt-3 font-[family-name:var(--font-space)] text-4xl font-bold tracking-[-0.06em] sm:text-5xl">LeadRadar</h1>
              <p className="mt-4 max-w-xl text-sm leading-7 text-cyan-50/85 sm:text-base">Yerel işletmeleri iki ayrı kuyrukta araştırmak, fırsatları puanlamak ve insan onaylı ilk temas taslakları hazırlamak için parola korumalı araç.</p>
            </div>
            <div className="p-8 sm:p-11">
              <h2 className="text-xl font-bold tracking-tight text-slate-950 dark:text-white">Güvenli erişim</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">LeadRadar; Google Places anahtarını, favori Place ID kayıtlarını ve erişim parolasını MI Digital ana sitesinden ayrı, güvenli uygulama sunucusunda tutar. Devam etmek için erişim parolanız gerekir.</p>
              <a href={leadRadarUrl} className="mt-7 inline-flex items-center rounded-xl bg-cyan-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-cyan-500" rel="noreferrer">LeadRadar&apos;ı aç <span className="ml-2" aria-hidden="true">↗</span></a>
              <p className="mt-5 text-xs leading-5 text-slate-500 dark:text-slate-400">Bu araç otomatik WhatsApp veya e-posta gönderimi yapmaz; yalnızca araştırma, önceliklendirme ve taslak üretimi içindir.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
