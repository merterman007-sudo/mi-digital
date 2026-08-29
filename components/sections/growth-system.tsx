import Link from "next/link";
import { SectionReveal } from "@/components/ui/section-reveal";

const proofMetrics = [
  {
    value: "50+",
    label: "Marka tecrübesi",
    description: "E-ticaret, hizmet ve kurumsal yapılarda düzenli performans takibi.",
  },
  {
    value: "35M+",
    label: "TL bütçe yönetimi",
    description: "Google, Meta, TikTok ve landing page dönüşüm akışlarıyla birlikte.",
  },
  {
    value: "120+",
    label: "Kreatif test",
    description: "Aylık kreatif varyasyon, reklam metni ve teklif denemesi kültürü.",
  },
  {
    value: "7/24",
    label: "Sinyal takibi",
    description: "Kampanya, form, WhatsApp ve SEO metriklerini düzenli izleme.",
  },
];

const capabilities = [
  {
    title: "Performans Reklamları",
    description: "Meta, Google ve TikTok kampanyalarında bütçe dağılımı, teklif stratejisi ve ROAS takibi.",
    accent: "from-cyan-400 to-sky-500",
  },
  {
    title: "Kreatif & İçerik",
    description: "Reklam görselleri, ürün anlatımı, sosyal medya akışı ve satışa dönük metin üretimi.",
    accent: "from-fuchsia-400 to-rose-500",
  },
  {
    title: "Web & Landing Page",
    description: "Hızlı, mobil uyumlu, SEO temelli ve teklif formuna yönlendiren web deneyimleri.",
    accent: "from-emerald-400 to-teal-500",
  },
  {
    title: "SEO & Analitik",
    description: "Arama niyeti, teknik sağlık, GA4 olayları ve aylık büyüme raporlarını tek düzende toplama.",
    accent: "from-amber-300 to-orange-500",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Hedefi netleştiririz",
    description: "Marka, pazar, mevcut trafik, bütçe ve satış hedefini birlikte okuruz.",
  },
  {
    step: "02",
    title: "Büyüme planını kurarız",
    description: "Kanal önceliği, kreatif test planı, ölçümleme ve ilk 30 gün aksiyonlarını çıkarırız.",
  },
  {
    step: "03",
    title: "Yayına alıp optimize ederiz",
    description: "Kampanyaları, landing page sinyallerini ve dönüşüm maliyetlerini haftalık iyileştiririz.",
  },
  {
    step: "04",
    title: "Raporlar ve ölçekleriz",
    description: "Bütçeyi kazanan kanallara taşır, yeni kreatif ve SEO fırsatlarıyla büyümeyi sürdürürüz.",
  },
];

export function GrowthSystemSection() {
  return (
    <SectionReveal id="growth-system" className="mx-auto w-full max-w-6xl px-4 py-18 sm:px-6 lg:px-8">
      <div className="mb-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-teal-600 dark:text-teal-300">
            Dijital Etki Sistemi
          </p>
          <h2 className="font-display text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl dark:text-white">
            Reklamdan web deneyimine kadar büyüme masanız tek yerde.
          </h2>
        </div>
        <p className="text-base leading-7 text-slate-600 dark:text-slate-300">
          Marka takibi, bütçe yönetimi, kreatif test ve raporlama akışını ayrı ayrı
          değil, birbirini besleyen tek bir operasyon olarak yönetiyoruz.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {proofMetrics.map((metric) => (
          <article
            key={metric.label}
            className="card-hover min-h-44 rounded-2xl border border-slate-200 bg-white/75 p-5 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60"
          >
            <p className="font-display text-4xl font-semibold text-slate-950 dark:text-white">
              {metric.value}
            </p>
            <h3 className="mt-3 text-sm font-semibold text-slate-900 dark:text-slate-100">
              {metric.label}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {metric.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {capabilities.map((capability) => (
          <article
            key={capability.title}
            className="rounded-2xl border border-slate-200 bg-white/75 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-950/60"
          >
            <div className={`mb-5 h-1.5 w-14 rounded-full bg-gradient-to-r ${capability.accent}`} />
            <h3 className="font-display text-xl font-semibold text-slate-950 dark:text-white">
              {capability.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
              {capability.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-6 rounded-[28px] border border-slate-200 bg-white/80 p-6 backdrop-blur dark:border-slate-800 dark:bg-slate-950/70 lg:grid-cols-[0.78fr_1.22fr] lg:p-8">
        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
              Hemen Başlayalım
            </p>
            <h2 className="mt-3 font-display text-3xl font-semibold leading-tight text-slate-950 dark:text-white">
              4 adımda strateji, kurulum ve ölçülebilir büyüme.
            </h2>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex w-fit rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
          >
            Başlangıç Görüşmesi Planla
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {processSteps.map((process) => (
            <article
              key={process.step}
              className="rounded-2xl border border-slate-200 bg-slate-50/90 p-5 dark:border-slate-800 dark:bg-slate-900/70"
            >
              <p className="font-display text-sm font-semibold text-cyan-700 dark:text-cyan-300">
                {process.step}
              </p>
              <h3 className="mt-3 font-display text-lg font-semibold text-slate-950 dark:text-white">
                {process.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                {process.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
