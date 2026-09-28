import Link from "next/link";

export function SeoEditorialSection() {
  return (
    <section className="seo-editorial section-space">
      <div className="site-container seo-editorial-grid">
        <div>
          <p className="eyebrow"><span /> Dijital pazarlama ajansı</p>
          <h2>Reklamı, içeriği ve ölçümü <em>tek büyüme sisteminde</em> birleştiriyoruz.</h2>
        </div>
        <div className="seo-editorial-copy">
          <p>MI Digital; Google Ads, Meta Ads, TikTok Ads, SEO, programatik medya, web deneyimi ve CRM süreçlerini markanın gerçek iş hedeflerine bağlar. Kanal sayısını artırmak yerine doğru kanalı, doğru teklif ve güvenilir ölçümle birlikte yönetiriz.</p>
          <div className="seo-editorial-links">
            <Link href="/blog/dijital-pazarlama-ajansi-nedir-nasil-secilir">Dijital pazarlama ajansı seçim rehberi <span>↗</span></Link>
            <Link href="/blog/performans-pazarlama-ajansi-nedir">Performans pazarlama ajansı nedir? <span>↗</span></Link>
            <Link href="/hizmetler/performans-pazarlama">Performans pazarlama hizmetimiz <span>↗</span></Link>
          </div>
        </div>
      </div>
    </section>
  );
}
