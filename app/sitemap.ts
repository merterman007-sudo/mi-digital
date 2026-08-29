import type { MetadataRoute } from "next";
import { blogPosts, getBlogCategories, getBlogTags } from "@/data/blog-posts";
import { localSeoPages } from "@/data/local-seo-pages";
import { services } from "@/data/services";
import { absoluteUrl } from "@/lib/site-config";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseRoutes = [
    "/",
    "/hakkimizda",
    "/hizmetler",
    "/iletisim",
    "/blog",
    "/lokasyon",
  ];

  const serviceRoutes = services.map((service) => `/hizmetler/${service.slug}`);
  const postRoutes = blogPosts.map((post) => `/blog/${post.slug}`);
  const categoryRoutes = getBlogCategories().map(
    (category) => `/blog/kategori/${category.slug}`,
  );
  const tagRoutes = getBlogTags().map((tag) => `/blog/etiket/${tag.slug}`);
  const localRoutes = localSeoPages.map((item) => `/lokasyon/${item.slug}`);

  const allRoutes = [
    ...baseRoutes,
    ...serviceRoutes,
    ...postRoutes,
    ...categoryRoutes,
    ...tagRoutes,
    ...localRoutes,
  ];

  return allRoutes.map((route, index) => ({
    url: absoluteUrl(route),
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority:
      index === 0
        ? 1
        : route.startsWith("/hizmetler/") || route.startsWith("/lokasyon/")
          ? 0.9
          : 0.8,
  }));
}
