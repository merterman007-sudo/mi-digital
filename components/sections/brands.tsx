import type { BrandItem } from "@/data/brands";

export function BrandsSection({ brands }: { brands: BrandItem[] }) {
  const loop = [...brands, ...brands];
  return (
    <section id="brands" className="section-space brands-light border-y border-[#d9e6f7]">
      <div className="site-container">
        <div className="section-heading">
          <div><p className="eyebrow"><span /> Birlikte çalıştığımız markalar</p><h2>Güçlü iş birlikleri,<br />ölçülebilir büyüme.</h2></div>
          <p>Her markanın hedefi farklı. Stratejiyi, mecrayı ve ölçümlemeyi buna göre şekillendiriyoruz.</p>
        </div>
      </div>
      <div className="brand-marquee" aria-label="Güncel müşterilerimiz">
        <div className="brand-marquee-track">
          {loop.map((brand, index) => (
            <a className="brand-tile" href={brand.websiteUrl} target="_blank" rel="noopener noreferrer" key={`${brand.id}-${index}`} aria-label={`${brand.name} web sitesi`} aria-hidden={index >= brands.length ? true : undefined} tabIndex={index >= brands.length ? -1 : undefined}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={brand.logoUrl} alt={index < brands.length ? `${brand.name} logosu` : ""} loading="lazy" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
