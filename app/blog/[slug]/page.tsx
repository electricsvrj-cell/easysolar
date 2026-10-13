import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { QuoteModalWrapper } from '@/components/quote-modal-wrapper';
import { BrandsSection } from '@/components/brands-section';
import { BlogRichText } from '@/components/blog-rich-text';
import { ChevronRight, CalendarDays, Clock, ArrowRight } from 'lucide-react';
import {
  blogPosts,
  getBlogPost,
  sortedBlogPosts,
  formatBlogDate,
  readingTime,
} from '@/lib/blog-posts';

const SITE_URL = 'https://easysolarsolution.com.au';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: 'Article Not Found | Easy Solar Solution' };
  }

  return {
    title: post.seoTitle,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.relatedKeywords].join(', '),
    alternates: {
      canonical: `/blog/${post.slug}/`,
    },
    openGraph: {
      type: 'article',
      title: post.seoTitle,
      description: post.metaDescription,
      url: `${SITE_URL}/blog/${post.slug}`,
      publishedTime: post.date,
      siteName: 'Easy Solar Solution',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.seoTitle,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const related = sortedBlogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    keywords: [post.primaryKeyword, ...post.relatedKeywords].join(', '),
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${post.slug}`,
    },
    author: { '@type': 'Organization', name: 'Easy Solar Solution' },
    publisher: {
      '@type': 'Organization',
      name: 'Easy Solar Solution',
      url: SITE_URL,
    },
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: post.faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return (
    <div className="min-h-screen bg-background font-[family-name:var(--font-inter)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Header />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <nav className="flex flex-wrap items-center justify-center gap-2 text-sm text-primary-foreground/70 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-6 font-[family-name:var(--font-space-grotesk)] leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm opacity-90">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {readingTime(post)}
            </span>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

          <p className="text-xl leading-relaxed text-muted-foreground border-l-4 border-primary pl-6 mb-12">
            {post.excerpt}
          </p>

          <div className="space-y-6 text-lg leading-relaxed text-foreground">
            {post.blocks.map((block, index) => {
              if (block.type === 'h2') {
                return (
                  <h2
                    key={index}
                    className="text-3xl font-bold text-[#3e70b5] mt-12 mb-6 font-[family-name:var(--font-space-grotesk)]"
                  >
                    {block.text}
                  </h2>
                );
              }

              if (block.type === 'ul') {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2">
                    {block.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <BlogRichText text={item} />
                      </li>
                    ))}
                  </ul>
                );
              }

              return (
                <p key={index}>
                  <BlogRichText text={block.text} />
                </p>
              );
            })}
          </div>

          <h2 className="text-3xl font-bold text-[#3e70b5] mt-16 mb-6 font-[family-name:var(--font-space-grotesk)]">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {post.faqs.map((faq) => (
              <div key={faq.q} className="rounded-xl border border-border bg-muted/20 p-6">
                <h3 className="text-xl font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-muted/30 p-8 rounded-2xl border border-border">
            <h2 className="text-2xl font-bold text-[#3e70b5] mb-4">
              Get a property-specific solar assessment
            </h2>
            <p className="mb-8">
              Easy Solar Solution can review your roof, your electricity usage and your future energy plans, then
              recommend a system size that matches them. Request a quote to discuss your options.
            </p>
            <QuoteModalWrapper />
          </div>

          {related.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold text-[#3e70b5] mb-8 font-[family-name:var(--font-space-grotesk)]">
                More solar guides
              </h2>
              <div className="grid gap-6 md:grid-cols-3">
                {related.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/blog/${item.slug}`}
                    className="group flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/40 hover:shadow-lg"
                  >
                    <time dateTime={item.date} className="text-sm text-muted-foreground">
                      {formatBlogDate(item.date)}
                    </time>
                    <h3 className="mt-3 flex-1 font-bold text-foreground group-hover:text-primary transition-colors leading-snug">
                      {item.title}
                    </h3>
                    <span className="mt-4 flex items-center gap-2 text-sm font-semibold text-primary">
                      Read
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>
      </section>

      <BrandsSection />
      <Footer />
    </div>
  );
}
