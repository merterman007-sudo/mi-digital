type ServiceVisualProps = { slug: string; title: string };

const visualContent: Record<string, { eyebrow: string; statement: string; signals: string[] }> = {
  "performans-pazarlama": { eyebrow: "Büyüme sistemi", statement: "Kanal değil, ölçülebilir iş sonucu odaklı yönetim.", signals: ["Strateji", "Kreatif", "Dönüşüm"] },
  "seo-icerik-stratejisi": { eyebrow: "Organik büyüme", statement: "Arama niyetini güçlü içerik ve teknik sağlıkla buluşturun.", signals: ["Teknik SEO", "İçerik", "Otorite"] },
  "web-tasarim-gelistirme": { eyebrow: "Dijital deneyim", statement: "Hızlı, anlaşılır ve dönüşüme hazır web deneyimleri.", signals: ["UX", "Performans", "CRO"] },
  "crm-otomasyon": { eyebrow: "Gelir operasyonu", statement: "Her talebi kaynağından satış sonucuna kadar izleyin.", signals: ["Lead", "Otomasyon", "CRM"] },
  "google-ads-danismanligi": { eyebrow: "Google Ads", statement: "Arama niyetini nitelikli talep ve satışa dönüştürün.", signals: ["Search", "PMax", "YouTube"] },
  "meta-ads-yonetimi": { eyebrow: "Meta Ads", statement: "Kreatif, teklif ve ölçümlemeyi aynı sistemde test edin.", signals: ["Instagram", "Facebook", "Katalog"] },
  "tiktok-ads-yonetimi": { eyebrow: "TikTok Ads", statement: "Platforma doğal kreatiflerle yeni talep üretin.", signals: ["Video", "Pixel", "UGC"] },
  "yandex-direct-reklamlari": { eyebrow: "Yandex Direct", statement: "Pazarın diliyle, arama niyetine uygun kampanyalar.", signals: ["Arama", "Pazar", "Yerelleştirme"] },
  "yango-ads-reklamlari": { eyebrow: "Yango Ads", statement: "Uygun pazarda doğru envanter ve kontrollü erişim.", signals: ["Erişim", "Format", "Ölçüm"] },
  "linkedin-ads-yonetimi": { eyebrow: "LinkedIn Ads", statement: "Doğru şirket ve karar vericiye nitelikli B2B teklif.", signals: ["B2B", "Lead", "ABM"] },
  "youtube-ads-reklamlari": { eyebrow: "YouTube Ads", statement: "İzlenmenin ötesinde ölçülebilir video kampanyaları.", signals: ["Video", "Erişim", "Aksiyon"] },
};

export function ServiceVisual({ slug, title }: ServiceVisualProps) {
  if (slug === "criteo-reklam-yonetimi") {
    return (
      <aside className="service-visual service-visual--criteo" aria-label="Criteo reklam yönetimi">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/platforms/criteo.svg" alt="Criteo logosu" />
        <div>
          <span>Commerce media</span>
          <span>Ürün kataloğu</span>
          <span>Yeniden hedefleme</span>
        </div>
        <p>Criteo, ilgili şirketin ticari markasıdır. MI Digital bağımsız kampanya yönetimi hizmeti sunar.</p>
      </aside>
    );
  }

  if (slug === "programatik-reklamcilik") {
    return (
      <aside className="service-visual service-visual--programmatic" aria-label="Programatik medya akışı">
        <div className="programmatic-map" aria-hidden="true">
          <span className="programmatic-core">MI</span>
          <span className="programmatic-node node-a">Kitle</span>
          <span className="programmatic-node node-b">Video</span>
          <span className="programmatic-node node-c">Display</span>
          <span className="programmatic-node node-d">Veri</span>
          <i className="line-a" /><i className="line-b" /><i className="line-c" /><i className="line-d" />
        </div>
        <div className="service-visual-copy">
          <span>Programatik medya</span>
          <strong>Doğru kitle. Kontrollü frekans. Şeffaf ölçüm.</strong>
        </div>
      </aside>
    );
  }

  const visual = visualContent[slug] ?? {
    eyebrow: "MI Digital",
    statement: title,
    signals: ["Strateji", "Uygulama", "Ölçüm"],
  };

  return (
    <aside className="service-visual service-visual--default" aria-label={`${title} özeti`}>
      <div className="service-signal-orbit" aria-hidden="true">
        <span className="service-signal-core">MI</span>
        {visual.signals.map((signal) => <i key={signal}>{signal}</i>)}
      </div>
      <div className="service-visual-copy">
        <span>{visual.eyebrow}</span>
        <strong>{visual.statement}</strong>
        <p>{visual.signals.join(" · ")}</p>
      </div>
    </aside>
  );
}
