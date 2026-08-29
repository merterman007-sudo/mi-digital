import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-5xl flex-1 items-center px-4 py-16 sm:px-6 lg:px-8">
        <section className="glass-panel w-full rounded-3xl p-8 text-center md:p-12">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
            404
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Aradığınız sayfayı bulamadık.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-slate-700 dark:text-slate-300">
            Link değişmiş olabilir veya sayfa kaldırılmış olabilir. Ana sayfaya
            dönebilir ya da hizmetlerimizi inceleyebilirsiniz.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/"
              className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
            >
              Ana Sayfaya Dön
            </Link>
            <Link
              href="/hizmetler"
              className="rounded-full border border-slate-300 bg-white/80 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-900"
            >
              Hizmetleri İncele
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
