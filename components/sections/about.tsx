import Link from "next/link";
import { SectionReveal } from "@/components/ui/section-reveal";

export function AboutSection() {
  return (
    <SectionReveal id="about" className="section-space about-editorial">
      <div className="site-container about-editorial-grid">
        <div><p className="eyebrow"><span /> Biz kimiz?</p><p className="about-editorial-kicker">Tek ekip.<br />Birlikte çalışan<br />çok disiplin.</p></div>
        <div className="about-editorial-copy">
          <h2>Markayı anlamadan<br /><em>medyaya çıkmıyoruz.</em></h2>
          <p>MI Digital’de strateji, kreatif, medya ve ölçümleme birbirinden kopuk işler değil. Hedefinizi netleştiriyor, doğru kanalları seçiyor, sonuçları okuyup bir sonraki adımı beraber belirliyoruz.</p>
          <Link href="/hakkimizda">Yaklaşımımızı keşfet <span aria-hidden="true">↗</span></Link>
          <div className="about-editorial-steps" aria-label="Çalışma yaklaşımımız"><span>01 / Anla</span><span>02 / Üret</span><span>03 / Büyüt</span></div>
        </div>
      </div>
    </SectionReveal>
  );
}
