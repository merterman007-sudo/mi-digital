const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();

function normalizeSiteUrl(url?: string) {
  if (!url) return "https://midigital.com.tr";
  try {
    const parsed = new URL(url);
    return parsed.toString().replace(/\/$/, "");
  } catch {
    return "https://midigital.com.tr";
  }
}

export const siteConfig = {
  name: "MI DIGITAL",
  legalName: "MI DIGITAL Ajans Hizmetleri",
  description:
    "MI DIGITAL, performans pazarlama, yazılım geliştirme ve büyüme stratejisi alanlarında uçtan uca dijital ajans hizmeti sunar.",
  url: normalizeSiteUrl(rawSiteUrl),
  locale: "tr_TR",
  country: "TR",
  city: "Istanbul",
  phone: "+90 543 712 83 66",
  email: "merterman035@gmail.com",
  sameAs: [
    "https://www.instagram.com/",
    "https://www.linkedin.com/",
  ],
} as const;

export function absoluteUrl(path = "/") {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${cleanPath}`;
}

