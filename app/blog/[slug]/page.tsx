import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ConversionCta } from "@/components/blog/conversion-cta";
import { Breadcrumbs } from "@/components/seo/breadcrumbs";
import { JsonLd } from "@/components/seo/json-ld";
import { blogPosts, getAllBlogPosts, getBlogPostBySlug } from "@/data/blog-posts";
import { services } from "@/data/services";
import { createPageMetadata } from "@/lib/seo";
import { absoluteUrl, siteConfig } from "@/lib/site-config";

type BlogDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: BlogDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return createPageMetadata({
      title: "Yazı Bulunamadı",
      description: "Aradığınız yazı bulunamadı.",
      path: "/blog",
    });
  }

  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.tags.map((tag) => tag.name),
  });
}

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedServices = services.filter((service) => post.relatedServiceSlugs.includes(service.slug));
  const mainService = relatedServices[0];
  const relatedPosts = getAllBlogPosts().filter((item) => item.slug !== post.slug).slice(0, 2);

  const faqEntries = [
    {
      question: "Bu stratejiyi uygulamaya nereden başlamalıyım?",
      answer:
        post.sections[0]?.paragraphs[0] ??
        "İlk adım mevcut durum analizi yapmaktır. Veri ve hedef net değilse optimizasyon kalıcı olmaz.",
    },
    {
      question: "Daha az bütçeyle daha iyi sonuç almak mümkün mü?",
      answer:
        post.sections[1]?.paragraphs[0] ??
        "Evet. Doğru hedefleme, net teklif ve güçlü sayfa deneyimi ile maliyeti düşürüp dönüşümü artırabilirsiniz.",
    },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.url,
    },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqEntries.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="mx-auto flex w-full max-w-4xl flex-1 flex-col gap-8 px-4 pb-16 pt-8 sm:px-6 lg:px-8">
        <JsonLd data={[articleSchema, faqSchema]} />
        <Breadcrumbs
          items={[
            { label: "Ana Sayfa", href: "/" },
            { label: "Blog", href: "/blog" },
            { label: post.title, href: `/blog/${post.slug}` },
          ]}
        />

        <article className="glass-panel rounded-3xl p-8 md:p-10">
          <p className="text-xs uppercase tracking-[0.16em] text-cyan-700 dark:text-cyan-300">{post.category.name}</p>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl">{post.title}</h1>
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">{post.publishedAt} • {post.readingMinutes} dk okuma</p>
          <p className="mt-6 text-base leading-7 text-slate-700 dark:text-slate-300">{post.excerpt}</p>
        </article>

        <ConversionCta
          badge="Hızlı Destek"
          title="Bu konuda markanıza özel bir plan hazırlayalım"
          description="Kısa bir görüşmede mevcut reklam ve içerik performansınızı değerlendirip net aksiyon listesi çıkaralım."
          primary={{ href: "/iletisim", label: "Ücretsiz Ön Görüşme" }}
          secondary={
            mainService
              ? { href: `/hizmetler/${mainService.slug}`, label: `${mainService.title} Hizmeti` }
              : { href: "/hizmetler", label: "Hizmetleri İncele" }
          }
        />

        <section className="space-y-6">
          {post.sections.map((section) => (
            <article key={section.heading} className="glass-panel rounded-2xl p-6">
              <h2 className="font-display text-2xl font-semibold">{section.heading}</h2>
              <div className="mt-3 space-y-3 text-slate-700 dark:text-slate-300">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              {section.bullets ? (
                <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
                  {section.bullets.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-cyan-500" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </section>

        {relatedServices.length > 0 ? (
          <section className="glass-panel rounded-2xl p-6">
            <h2 className="font-display text-2xl font-semibold">İlgili Hizmetler</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/hizmetler/${service.slug}`}
                  className="rounded-full border border-cyan-200/70 bg-cyan-50/70 px-4 py-2 text-sm font-medium text-cyan-900 transition hover:bg-cyan-100 dark:border-cyan-900/60 dark:bg-cyan-900/25 dark:text-cyan-200"
                >
                  {service.title}
                </Link>
              ))}
            </div>
          </section>
        ) : null}

        {relatedPosts.length > 0 ? (
          <section className="space-y-4">
            <h2 className="font-display text-2xl font-semibold">Diğer Yazılar</h2>
            <div className="grid gap-4 md:grid-cols-2">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="glass-panel rounded-2xl p-5">
                  <h3 className="font-display text-xl font-semibold">
                    <Link href={`/blog/${relatedPost.slug}`} className="transition hover:text-cyan-700 dark:hover:text-cyan-300">
                      {relatedPost.title}
                    </Link>
                  </h3>
                  <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{relatedPost.excerpt}</p>
                </article>
              ))}
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </div>
  );
}
