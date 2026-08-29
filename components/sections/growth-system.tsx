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
  },
  {
    title: "Kreatif & İçerik",
    description: "Reklam görselleri, ürün anlatımı, sosyal medya akışı ve satışa dönük metin üretimi.",
  },
  {
    title: "Web & Landing Page",
    description: "Hızlı, mobil uyumlu, SEO temelli ve teklif formuna yönlendiren web deneyimleri.",
  },
  {
    title: "SEO & Analitik",
    description: "Arama niyeti, teknik sağlık, GA4 olayları ve aylık büyüme raporlarını tek düzende toplama.",
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
    <SectionReveal id="growth-system" className="mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8 lg:px-10">
      <div className="mb-8 grid gap-5 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <p className="eyebrow mb-4">
            Dijital Etki Sistemi
          </p>
          <h2 className="font-display text-4xl font-light leading-tight text-[#f4efd4] sm:text-5xl">
            Reklamdan web deneyimine kadar büyüme masanız tek yerde.
          </h2>
        </div>
        <p className="text-base leading-7 text-[#aaa696]">
          Marka takibi, bütçe yönetimi, kreatif test ve raporlama akışını ayrı ayrı
          değil, birbirini besleyen tek bir operasyon olarak yönetiyoruz.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {proofMetrics.map((metric) => (
          <article
            key={metric.label}
            className="card-hover min-h-44 rounded-[10px] border border-[#f4efd4]/30 bg-[#111] p-5"
          >
            <p className="font-display text-4xl font-light text-[#84acfb]">
              {metric.value}
            </p>
            <h3 className="mt-3 text-sm font-medium text-[#f4efd4]">
              {metric.label}
            </h3>
            <p className="mt-2 text-sm leading-6 text-[#aaa696]">
              {metric.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-10 grid gap-4 lg:grid-cols-4">
        {capabilities.map((capability) => (
          <article
            key={capability.title}
            className="rounded-[10px] border border-[#f4efd4]/30 bg-black p-6"
          >
            <div className="mb-6 h-px w-14 bg-[#84acfb]" />
            <h3 className="font-display text-xl font-normal text-[#f4efd4]">
              {capability.title}
            </h3>
            <p className="mt-3 text-sm leading-6 text-[#aaa696]">
              {capability.description}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-12 grid gap-10 rounded-[14px] border border-[#f4efd4]/35 bg-[#111] p-7 lg:grid-cols-[0.78fr_1.22fr] lg:p-10">
        <div className="flex flex-col justify-between gap-6">
          <div>
            <p className="eyebrow">
              Hemen Başlayalım
            </p>
            <h2 className="mt-4 font-display text-3xl font-light leading-tight text-[#f4efd4]">
              4 adımda strateji, kurulum ve ölçülebilir büyüme.
            </h2>
          </div>
          <Link
            href="/iletisim"
            className="inline-flex w-fit rounded-full bg-[#84acfb] px-6 py-3 text-sm font-medium text-black transition hover:bg-[#a9c5ff]"
          >
            Başlangıç Görüşmesi Planla
          </Link>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {processSteps.map((process) => (
            <article
              key={process.step}
              className="rounded-[10px] border border-[#f4efd4]/25 bg-[#1a1a1a] p-5"
            >
              <p className="text-xs tracking-[0.18em] text-[#84acfb]">
                {process.step}
              </p>
              <h3 className="mt-3 font-display text-lg font-normal text-[#f4efd4]">
                {process.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#aaa696]">
                {process.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </SectionReveal>
  );
}
