import { ContactForm } from "@/components/forms/contact-form";
import { SectionReveal } from "@/components/ui/section-reveal";

export function ContactSection() {
  return (
    <SectionReveal
      id="contact"
      className="mx-auto w-full max-w-6xl px-0 py-3 sm:px-0 lg:px-0"
    >
      <div className="grid gap-8 rounded-3xl border-2 border-cyan-300/80 bg-gradient-to-br from-white via-cyan-50/80 to-slate-100/90 p-6 shadow-[0_24px_80px_-36px_rgba(14,116,144,0.6)] dark:border-cyan-800/70 dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 md:grid-cols-[1.05fr_1fr] md:p-10">
        <div className="space-y-4">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
            İletişim
          </p>
          <h2 className="font-display text-3xl font-semibold text-slate-900 sm:text-4xl dark:text-slate-100">
            Teklif Alın, 24 Saat İçinde Geri Dönüş Yapalım.
          </h2>
          <p className="text-slate-700 dark:text-slate-300">
            Formu doldurun, aynı gün içinde ihtiyaç analizi ve net aksiyon
            planı ile dönüş yapalım. İlk keşif görüşmesi tamamen ücretsizdir.
          </p>
          <p className="inline-flex rounded-full border border-emerald-300 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:border-emerald-800 dark:bg-emerald-900/20 dark:text-emerald-300">
            Ortalama ilk yanıt süresi: 24 saatten kısa
          </p>
        </div>
        <ContactForm />
      </div>
    </SectionReveal>
  );
}
