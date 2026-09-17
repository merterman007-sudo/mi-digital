import Link from "next/link";
import { services } from "@/data/services";

export function ServicesSection() {
  return (
    <section id="services" className="section-space site-container">
      <div className="section-heading">
        <div><p className="eyebrow"><span /> Hizmetler</p><h2>Her mecra için<br /><span className="gradient-text">ayrı strateji.</span></h2></div>
        <p>Aramadan sosyal medyaya, programatikten e-ticaret medyasına: hedef kitlenizin olduğu yerde, doğru mesaj ve sağlam ölçümlemeyle çalışıyoruz.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <article className="service-card" key={service.slug}>
            <div><span className="service-card-index">{String(index + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}</span><h3 className="mt-8">{service.title}</h3><p>{service.shortDescription}</p></div>
            <Link className="service-card-link" href={`/hizmetler/${service.slug}`}>Hizmeti incele <span aria-hidden="true">↗</span></Link>
          </article>
        ))}
      </div>
    </section>
  );
}
