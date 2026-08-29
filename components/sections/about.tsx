import { SectionReveal } from "@/components/ui/section-reveal";

export function AboutSection() {
  return (
    <SectionReveal id="about" className="mx-auto w-full max-w-6xl px-4 py-18 sm:px-6 lg:px-8">
      <div className="glass-panel rounded-3xl p-8 md:p-12">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-600 dark:text-emerald-400">
          Hakkımızda
        </p>
        <h2 className="max-w-3xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
          Veriyle düşünen, yaratıcılıkla üreten ve yazılımla hızlanan bir ekip.
        </h2>
        <p className="mt-6 max-w-4xl text-base leading-7 text-slate-600 dark:text-slate-300">
          MI DIGITAL olarak markaların büyümesini yalnızca kampanya çıktılarıyla değil;
          ürün deneyimi, dönüşüm optimizasyonu ve sürdürülebilir strateji perspektifiyle
          ele alıyoruz. Hedefimiz, her iş ortağımız için uzun vadeli bir büyüme motoru
          inşa etmek.
        </p>
      </div>
    </SectionReveal>
  );
}
