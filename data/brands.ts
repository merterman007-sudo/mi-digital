export type BrandItem = { id: string; name: string; logoUrl: string; websiteUrl: string };

// Only clients confirmed as current by the agency; logos are from their own sites.
export const brands: BrandItem[] = [
  { id: "galiara", name: "Galiara", logoUrl: "/brands/galiara-official.webp", websiteUrl: "https://galiara.com.tr/" },
  { id: "end-luxury-wear", name: "End Luxury Wear", logoUrl: "/brands/end-luxury-wear-official.webp", websiteUrl: "https://endluxurywear.com/" },
  { id: "valer-wear", name: "Valer Wear", logoUrl: "/brands/valer-wear-official.png", websiteUrl: "https://www.shopier.com/valerwear" },
  { id: "pratik-servisim", name: "Pratik Servisim", logoUrl: "/brands/pratik-servisim-official.png", websiteUrl: "https://pratikservisim.com.tr/" },
  { id: "prinwork", name: "Prinwork", logoUrl: "/brands/prinwork-official.svg", websiteUrl: "https://prinwork.com/" },
  { id: "cep-kapinda", name: "Cep Kapında", logoUrl: "/brands/cep-kapinda-official.svg", websiteUrl: "https://cepkapinda.com/" },
];
