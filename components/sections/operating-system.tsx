import Link from "next/link";

const processSteps = [
  { number: "01", title: "Hedefi ve veriyi doğrula", text: "İş hedefini, kârlılığı, dönüşüm tanımını ve mevcut ölçüm kurulumunu netleştiririz." },
  { number: "02", title: "Öncelikli testi kur", text: "Kanal, kitle, teklif, kreatif ve landing page için ölçülebilir bir test planı hazırlarız." },
  { number: "03", title: "Sinyali okuyup optimize et", text: "Sorgu, kreatif, maliyet ve nitelikli dönüşüm verisine göre bütçeyi kontrollü değiştiririz." },
  { number: "04", title: "Öğreneni ölçekle", text: "İşe yarayan mesajı ve kanalı büyütür; sonuç zayıfsa nedeni ve sonraki deneyi açıkça yazarız." },
];

const reportingItems = [
  { label: "Medya sonucu", value: "Harcama · CPC · CTR" },
  { label: "Dönüşüm sonucu", value: "Form · Satış · CPA" },
  { label: "İş kalitesi", value: "Nitelikli lead · Yeni müşteri" },
  { label: "Sonraki karar", value: "Durdur · Koru · Test et · Ölçekle" },
];

const principles = [
  "Reklam hesaplarının sahipliği markada kalır",
  "Medya bütçesi doğrudan platforma ödenir",
  "Platform verisi analitik ve satış sonucu ile karşılaştırılır",
  "Garantili satış söylemi yerine ölçülebilir test planı sunulur",
];

export function OperatingSystemSection() {
  return (
    <section className="operating-system section-space" aria-labelledby="operating-system-title">
      <div className="site-container">
        <div className="operating-system-heading">
          <div>
            <p className="eyebrow"><span /> Çalışma sistemi</p>
            <h2 id="operating-system-title">Rapor teslim etmiyoruz.<br /><em>Karar sistemi kuruyoruz.</em></h2>
          </div>
          <div>
            <p>Her ay yalnızca ne olduğunu değil, neden olduğunu ve sıradaki aksiyonu gösteririz. Reklam hesabını gerçek iş sonucuyla birlikte yönetiriz.</p>
            <Link href="/iletisim">Mevcut hesabınızı birlikte inceleyelim <span aria-hidden="true">↗</span></Link>
          </div>
        </div>

        <div className="operating-system-layout">
          <div className="operating-process" aria-label="Nasıl çalışıyoruz">
            <p className="operating-panel-label">Nasıl çalışıyoruz?</p>
            <ol>
              {processSteps.map((step) => (
                <li key={step.number}>
                  <span>{step.number}</span>
                  <div><strong>{step.title}</strong><p>{step.text}</p></div>
                </li>
              ))}
            </ol>
          </div>

          <div className="operating-report" aria-label="Neyi raporluyoruz">
            <p className="operating-panel-label">Neyi raporluyoruz?</p>
            <div className="operating-report-grid">
              {reportingItems.map((item, index) => (
                <article key={item.label}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{item.label}</strong>
                  <p>{item.value}</p>
                </article>
              ))}
            </div>
            <div className="operating-report-note">
              <span>MI</span>
              <p><strong>Aylık çıktı:</strong> performans özeti, teşhis, alınan kararlar ve gelecek test planı.</p>
            </div>
          </div>
        </div>

        <div className="operating-principles" aria-label="Neden MI Digital">
          <div><p className="operating-panel-label">Neden MI Digital?</p><strong>Şeffaf hesap.<br />Net sorumluluk.</strong></div>
          <ul>{principles.map((principle) => <li key={principle}><span>✓</span>{principle}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
