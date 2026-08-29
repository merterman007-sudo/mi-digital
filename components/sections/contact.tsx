import { ContactForm } from "@/components/forms/contact-form";
import { SectionReveal } from "@/components/ui/section-reveal";

export function ContactSection() {
  return (
    <SectionReveal
      id="contact"
      className="mx-auto w-full max-w-6xl px-0 py-3 sm:px-0 lg:px-0"
    >
      <div className="grid gap-10 rounded-[12px] border border-[#f4efd4]/30 bg-[#111] p-6 md:grid-cols-[1.05fr_1fr] md:p-10">
        <div className="space-y-4">
          <p className="eyebrow">
            İletişim
          </p>
          <h2 className="font-display text-4xl font-light text-[#f4efd4] sm:text-5xl">
            Teklif Alın, 24 Saat İçinde Geri Dönüş Yapalım.
          </h2>
          <p className="text-[#aaa696]">
            Formu doldurun, aynı gün içinde ihtiyaç analizi ve net aksiyon
            planı ile dönüş yapalım. İlk keşif görüşmesi tamamen ücretsizdir.
          </p>
          <p className="inline-flex rounded-full border border-[#84acfb]/50 px-3 py-1 text-xs font-medium text-[#84acfb]">
            Ortalama ilk yanıt süresi: 24 saatten kısa
          </p>
        </div>
        <ContactForm />
      </div>
    </SectionReveal>
  );
}
