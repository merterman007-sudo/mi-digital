import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Teklif Talebiniz Alındı",
  description:
    "Talebiniz MI DIGITAL ekibine ulaştı. En kısa sürede sizinle iletişime geçeceğiz.",
  path: "/teklif-alindi",
});

export default function QuoteReceivedPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-4xl flex-1 items-center px-4 py-16 sm:px-6 lg:px-8">
        <section className="glass-panel w-full rounded-3xl p-8 text-center md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-emerald-700 dark:text-emerald-300">
            Talep Alındı
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Teşekkürler, teklif talebiniz bize ulaştı.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
            Ortalama 24 saatten kısa sürede size dönüş yapıyoruz. Acil durumlar
            için WhatsApp hattımızdan bize hemen ulaşabilirsiniz.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="https://wa.me/905437128366"
              className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white transition hover:brightness-95"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp&apos;tan Yaz
            </Link>
            <Link
              href="/"
              className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              Ana Sayfaya Dön
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
