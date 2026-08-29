import Link from "next/link";

const serviceLinks = [
  { href: "/hizmetler/performans-pazarlama", label: "Performans Pazarlama" },
  { href: "/hizmetler/seo-icerik-stratejisi", label: "SEO ve İçerik" },
  { href: "/hizmetler/web-tasarim-gelistirme", label: "Web Tasarım" },
  { href: "/hizmetler/crm-otomasyon", label: "CRM ve Otomasyon" },
];

const resourceLinks = [
  { href: "/blog", label: "Blog" },
  { href: "/lokasyon", label: "Lokasyon Sayfaları" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

export function Footer() {
  return (
    <footer className="border-t border-[#f4efd4]/25 bg-black py-12">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-lg font-medium tracking-[0.1em] text-[#f4efd4]">
            MI DIGITAL
          </p>
          <p className="mt-3 max-w-sm text-sm leading-6 text-[#aaa696]">
            Performans pazarlama, SEO ve yazılım geliştirme disiplinlerini tek bir büyüme sisteminde birleştiriyoruz.
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-[#f4efd4]">Hizmet Sayfaları</p>
          <ul className="mt-3 space-y-2 text-sm text-[#aaa696]">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[#84acfb]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-medium text-[#f4efd4]">Kaynaklar</p>
          <ul className="mt-3 space-y-2 text-sm text-[#aaa696]">
            {resourceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-[#84acfb]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-10 w-full max-w-6xl border-t border-[#f4efd4]/20 px-4 pt-6 text-sm text-[#626055] sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} MI DIGITAL. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
