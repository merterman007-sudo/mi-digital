import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ConversionCta } from "@/components/blog/conversion-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { getAllBlogPosts, getBlogCategories, getBlogTags } from "@/data/blog-posts";
import { getServiceBySlug } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site-config";

export const metadata: Metadata = createPageMetadata({
  title: "Blog",
  description:
    "Dijital pazarlama, SEO, reklam optimizasyonu ve dönüşüm artışı konularında uygulanabilir içerikler.",
  path: "/blog",
  keywords: [
    "dijital pazarlama blog",
    "reklam optimizasyonu",
    "daha az bütçeyle daha fazla dönüşüm",
    "Google Ads rehberi",
  ],
});

const posts = getAllBlogPosts();
const categories = getBlogCategories();
const tags = getBlogTags();

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  name: "MI DIGITAL Blog",
  url: absoluteUrl("/blog"),
  blogPost: posts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    url: absoluteUrl(`/blog/${post.slug}`),
    datePublished: post.publishedAt,
  })),
};

export default function BlogPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <JsonLd data={blogSchema} />
        <Breadcrumbs
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Blog", href: "/blog" },
          ]}
        />

        <section className="glass-panel rounded-3xl p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">
            Blog
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold sm:text-5xl">
            Organik büyüme ve reklam performansı rehberleri
          </h1>
          <p className="mt-4 max-w-3xl text-slate-700 dark:text-slate-300">
            Buradaki içerikler, daha düşük maliyetle daha fazla dönüşüm almanız için sahada uyguladığımız yöntemleri adım adım anlatır.
          </p>
        </section>

        <ConversionCta
          title="Reklam bütçeniz var ama sonuçlar zayıfsa birlikte iyileştirelim"
          description="Hesabınızı ücretsiz analiz ediyor, markanıza özel ilk 30 günlük optimizasyon planını çıkarıyoruz."
          primary={{ href: "/iletisim", label: "Ücretsiz Analiz Al" }}
          secondary={{ href: "/hizmetler/performans-pazarlama", label: "Performans Hizmeti" }}
        />

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-semibold">Kategoriler</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/kategori/${category.slug}`}
                className="rounded-full border border-cyan-200/70 bg-cyan-50/70 px-4 py-2 text-sm font-medium text-cyan-900 transition hover:bg-cyan-100 dark:border-cyan-900/60 dark:bg-cyan-900/20 dark:text-cyan-200 dark:hover:bg-cyan-900/35"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="font-display text-2xl font-semibold">Etiketler</h2>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link
                key={tag.slug}
                href={`/blog/etiket/${tag.slug}`}
                className="rounded-full border border-slate-300 bg-white/80 px-3 py-1.5 text-xs font-medium text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-900/60 dark:text-slate-200 dark:hover:bg-slate-900"
              >
                #{tag.name}
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => {
            const primaryService = post.relatedServiceSlugs
              .map((slug) => getServiceBySlug(slug))
              .find(Boolean);

            return (
              <article key={post.slug} className="glass-panel card-hover rounded-2xl p-6">
                <p className="text-xs uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-300">
                  {post.category.name}
                </p>
                <h2 className="mt-2 font-display text-2xl font-semibold">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="transition hover:text-cyan-700 dark:hover:text-cyan-300"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  {post.excerpt}
                </p>
                <p className="mt-4 text-xs text-slate-500 dark:text-slate-400">
                  {post.readingMinutes} dk okuma • {post.publishedAt}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white transition hover:bg-slate-700"
                  >
                    Yazıyı Oku
                  </Link>
                  {primaryService ? (
                    <Link
                      href={`/hizmetler/${primaryService.slug}`}
                      className="rounded-full border border-cyan-200/70 bg-cyan-50/70 px-4 py-2 text-xs font-semibold text-cyan-900 transition hover:bg-cyan-100 dark:border-cyan-900/60 dark:bg-cyan-900/20 dark:text-cyan-200"
                    >
                      {primaryService.title}
                    </Link>
                  ) : null}
                </div>
              </article>
            );
          })}
        </section>
      </main>
      <Footer />
    </div>
  );
}
