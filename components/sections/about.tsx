import { SectionReveal } from "@/components/ui/section-reveal";

export function AboutSection() {
  return (
    <SectionReveal id="about" className="mx-auto w-full max-w-[1200px] px-5 py-24 sm:px-8 lg:px-10">
      <div className="grid gap-10 border-y border-[#f4efd4]/30 py-14 lg:grid-cols-[.7fr_1.3fr]">
        <p className="eyebrow">
          Hakkımızda
        </p>
        <div><h2 className="max-w-3xl font-display text-4xl font-light leading-tight text-[#f4efd4] sm:text-5xl">
          Veriyle düşünen, yaratıcılıkla üreten ve teknolojiyle <em className="text-[#84acfb]">hızlanan</em> bir ekip.
        </h2>
        <p className="mt-7 max-w-3xl text-base leading-7 text-[#aaa696]">
          MI DIGITAL olarak markaların büyümesini yalnızca kampanya çıktılarıyla değil;
          ürün deneyimi, dönüşüm optimizasyonu ve sürdürülebilir strateji perspektifiyle
          ele alıyoruz. Hedefimiz, her iş ortağımız için uzun vadeli bir büyüme motoru
          inşa etmek.
        </p></div>
      </div>
    </SectionReveal>
  );
}
