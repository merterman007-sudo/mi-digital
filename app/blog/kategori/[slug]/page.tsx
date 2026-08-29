import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ConversionCta } from "@/components/blog/conversion-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts, getBlogCategories } from "@/data/blog-posts";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site-config";

type BlogCategoryPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogCategories().map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: BlogCategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getBlogCategories().find((item) => item.slug === slug);

  if (!category) {
    return createPageMetadata({
      title: "Kategori Bulunamadı",
      description: "Aradığınız blog kategorisi bulunamadı.",
      path: "/blog",
    });
  }

  return createPageMetadata({
    title: `${category.name} Yazıları`,
    description: `${category.name} kategorisindeki tüm MI DIGITAL blog içerikleri.`,
    path: `/blog/kategori/${category.slug}`,
    keywords: [category.name, "blog kategorisi"],
  });
}

export default async function BlogCategoryPage({ params }: BlogCategoryPageProps) {
  const { slug } = await params;
  const category = getBlogCategories().find((item) => item.slug === slug);

  if (!category) {
    notFound();
  }

  const posts = blogPosts.filter((post) => post.category.slug === category.slug);

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${category.name} Blog Yazıları`,
    url: absoluteUrl(`/blog/kategori/${category.slug}`),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col gap-8 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <JsonLd data={schema} />
        <Breadcrumbs
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: category.name, href: `/blog/kategori/${category.slug}` },
          ]}
        />

        <section className="glass-panel rounded-3xl p-8">
          <h1 className="font-display text-4xl font-semibold">{category.name}</h1>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            Bu kategorideki içerikler, {category.name.toLowerCase()} alanında uygulama odaklı içgörüler sunar.
          </p>
        </section>

        <ConversionCta
          title="Bu konuda markanıza özel yol haritası çıkaralım"
          description="İçerikleri tek tek okumak yerine, sizin hedefinize uygun net aksiyon planı ile ilerleyelim."
          primary={{ href: "/iletisim", label: "Ücretsiz Strateji Görüşmesi" }}
          secondary={{ href: "/hizmetler", label: "Hizmetleri İncele" }}
        />

        <section className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="glass-panel rounded-2xl p-6">
              <h2 className="font-display text-2xl font-semibold">
                <Link href={`/blog/${post.slug}`} className="transition hover:text-cyan-700 dark:hover:text-cyan-300">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">{post.excerpt}</p>
            </article>
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
