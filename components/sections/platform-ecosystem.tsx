import Link from "next/link";

const platforms = [
  { name: "Google Ads", label: "Arama ve performans", logo: "/platforms/ecosystem/google-ads.svg", href: "/hizmetler/google-ads-danismanligi" },
  { name: "Meta Ads", label: "Instagram ve Facebook", logo: "/platforms/ecosystem/meta.svg", href: "/hizmetler/meta-ads-yonetimi" },
  { name: "TikTok Ads", label: "Video ve yeni talep", logo: "/platforms/ecosystem/tiktok.svg", href: "/hizmetler/tiktok-ads-yonetimi" },
  { name: "YouTube Ads", label: "Video reklamcılığı", logo: "/platforms/ecosystem/youtube.svg", href: "/hizmetler/youtube-ads-reklamlari" },
  { name: "Yandex Direct", label: "Arama ve hedef pazar", logo: "/platforms/ecosystem/yandex.svg", href: "/hizmetler/yandex-direct-reklamlari" },
  { name: "Criteo", label: "Commerce media", logo: "/platforms/criteo.svg", href: "/hizmetler/criteo-reklam-yonetimi", wide: true },
  { name: "Google Analytics", label: "Ölçüm ve analiz", logo: "/platforms/ecosystem/google-analytics.svg", href: "/hizmetler/crm-otomasyon" },
  { name: "Programatik", label: "Kitle ve medya satın alma", href: "/hizmetler/programatik-reklamcilik", monogram: "MI" },
];

export function PlatformEcosystemSection() {
  return (
    <section className="platform-ecosystem section-space" aria-labelledby="platform-ecosystem-title">
      <div className="site-container">
        <div className="platform-ecosystem-heading">
          <div>
            <p className="eyebrow"><span /> Platform ekosistemi</p>
            <h2 id="platform-ecosystem-title">Kanal bilgisi değil,<br /><em>kanallar arası sistem.</em></h2>
          </div>
          <p>Reklam, içerik ve ölçüm platformlarını tek hedef etrafında bağlarız. Her mecrayı kendi rolü ve gerçek iş sonucu üzerinden değerlendiririz.</p>
        </div>

        <div className="platform-ecosystem-grid">
          {platforms.map((platform, index) => (
            <Link className="platform-ecosystem-card" href={platform.href} key={platform.name}>
              <span className="platform-card-index">{String(index + 1).padStart(2, "0")}</span>
              <span className={`platform-logo-shell${platform.wide ? " platform-logo-shell--wide" : ""}`}>
                {platform.logo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={platform.logo} alt="" aria-hidden="true" />
                ) : (
                  <b>{platform.monogram}</b>
                )}
              </span>
              <span className="platform-card-copy">
                <strong>{platform.name}</strong>
                <small>{platform.label}</small>
              </span>
              <span className="platform-card-arrow" aria-hidden="true">↗</span>
            </Link>
          ))}
        </div>

        <p className="platform-trademark-note">Gösterilen marka ve logolar ilgili şirketlerin ticari markalarıdır. Bu alan, MI Digital&apos;ın hizmet verdiği teknoloji ekosistemini gösterir; aksi açıkça belirtilmedikçe resmî partnerlik veya sertifika iddiası taşımaz.</p>
      </div>
    </section>
  );
}
