type ServiceVisualProps = { slug: string; title: string };

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

  return (
    <aside className="service-visual service-visual--default" aria-label={`${title} özeti`}>
      <span>MI DIGITAL</span><strong>{title}</strong><i>Strateji · Uygulama · Ölçüm</i>
    </aside>
  );
}
