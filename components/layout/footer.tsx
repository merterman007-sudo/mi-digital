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
    <footer className="border-t border-slate-200/80 py-10 dark:border-slate-800">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-3 lg:px-8">
        <div>
          <p className="font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
            MI DIGITAL
          </p>
          <p className="mt-2 max-w-sm text-sm text-slate-600 dark:text-slate-300">
            Performans pazarlama, SEO ve yazılım geliştirme disiplinlerini tek bir büyüme sisteminde birleştiriyoruz.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Hizmet Sayfaları</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {serviceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-cyan-700 dark:hover:text-cyan-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">Kaynaklar</p>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {resourceLinks.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="transition hover:text-cyan-700 dark:hover:text-cyan-300">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-8 w-full max-w-6xl border-t border-slate-200/80 px-4 pt-6 text-sm text-slate-500 dark:border-slate-800 dark:text-slate-400 sm:px-6 lg:px-8">
        <p>© {new Date().getFullYear()} MI DIGITAL. Tüm hakları saklıdır.</p>
      </div>
    </footer>
  );
}
