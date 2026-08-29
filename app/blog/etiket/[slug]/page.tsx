import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ConversionCta } from "@/components/blog/conversion-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts, getBlogTags } from "@/data/blog-posts";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl } from "@/lib/site-config";

type BlogTagPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getBlogTags().map((tag) => ({ slug: tag.slug }));
}

export async function generateMetadata({ params }: BlogTagPageProps): Promise<Metadata> {
  const { slug } = await params;
  const tag = getBlogTags().find((item) => item.slug === slug);

  if (!tag) {
    return createPageMetadata({
      title: "Etiket Bulunamadı",
      description: "Aradığınız etiket bulunamadı.",
      path: "/blog",
    });
  }

  return createPageMetadata({
    title: `${tag.name} Etiketli Yazılar`,
    description: `${tag.name} etiketiyle ilişkili tüm MI DIGITAL içerikleri.`,
    path: `/blog/etiket/${tag.slug}`,
    keywords: [tag.name, "blog etiketi"],
  });
}

export default async function BlogTagPage({ params }: BlogTagPageProps) {
  const { slug } = await params;
  const tag = getBlogTags().find((item) => item.slug === slug);

  if (!tag) {
    notFound();
  }

  const posts = blogPosts.filter((post) =>
    post.tags.some((postTag) => postTag.slug === tag.slug),
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${tag.name} Etiketli Yazılar`,
    url: absoluteUrl(`/blog/etiket/${tag.slug}`),
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
            { label: `#${tag.name}`, href: `/blog/etiket/${tag.slug}` },
          ]}
        />

        <section className="glass-panel rounded-3xl p-8">
          <h1 className="font-display text-4xl font-semibold">#{tag.name}</h1>
          <p className="mt-3 text-slate-700 dark:text-slate-300">
            Bu etiketteki içerikleri birlikte okuyarak konuya hızlıca hakim olabilirsiniz.
          </p>
        </section>

        <ConversionCta
          title="Bu konuda uygulama desteği ister misiniz?"
          description="Hedefinize göre kanal, bütçe ve dönüşüm planını birlikte netleştirelim."
          primary={{ href: "/iletisim", label: "Teklif Talebi Oluştur" }}
          secondary={{ href: "/hizmetler/performans-pazarlama", label: "Performans Hizmeti" }}
        />

        <section className="grid gap-4 md:grid-cols-2">
          {posts.map((post) => (
            <article key={post.slug} className="glass-panel rounded-2xl p-6">
              <p className="text-xs uppercase tracking-[0.14em] text-cyan-700 dark:text-cyan-300">
                {post.category.name}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold">
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
