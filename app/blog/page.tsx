import { Metadata } from 'next';
import Link from 'next/link';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { BrandsSection } from '@/components/brands-section';
import { ChevronRight, CalendarDays, Clock, ArrowRight } from 'lucide-react';
import { sortedBlogPosts, formatBlogDate, readingTime } from '@/lib/blog-posts';

export const metadata: Metadata = {
  title: 'Solar Blog | Easy Solar Solution',
  description:
    'Practical guides on solar system sizing, generation and quotes for Victorian homeowners. Compare 6.6 kW, 10 kW and 13 kW solar systems before you buy.',
  keywords:
    'solar blog, solar system sizing, 6.6 kW solar, 10 kW solar, 13 kW solar, solar generation Victoria',
  alternates: {
    canonical: '/blog/',
  },
};

export default function BlogIndexPage() {
  const [featured, ...rest] = sortedBlogPosts;

  return (
    <div className="min-h-screen bg-background font-[family-name:var(--font-inter)]">
      <Header />

      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-10"></div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-primary-foreground">
          <nav className="flex items-center justify-center gap-2 text-sm text-primary-foreground/70 mb-6">
            <Link href="/" className="hover:text-secondary transition-colors">Home</Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white">Blog</span>
          </nav>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6 font-[family-name:var(--font-space-grotesk)]">
            Solar Insights &amp; Guides
          </h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Straightforward guidance on system sizing, generation and comparing quotes, written for Victorian homeowners.
          </p>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">

          {featured && (
            <Link
              href={`/blog/${featured.slug}`}
              className="group block mb-12 rounded-2xl border border-border bg-muted/30 p-8 lg:p-12 transition-all hover:border-primary/40 hover:shadow-xl"
            >
              <span className="inline-block rounded-full bg-primary px-4 py-1 text-xs font-bold uppercase tracking-wide text-primary-foreground">
                Latest
              </span>
              <h2 className="mt-5 text-3xl lg:text-4xl font-bold text-[#3e70b5] group-hover:text-primary transition-colors font-[family-name:var(--font-space-grotesk)]">
                {featured.title}
              </h2>
              <p className="mt-4 text-lg text-muted-foreground max-w-3xl">{featured.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <span className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  <time dateTime={featured.date}>{formatBlogDate(featured.date)}</time>
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {readingTime(featured)}
                </span>
                <span className="flex items-center gap-2 font-semibold text-primary">
                  Read article
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          )}

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CalendarDays className="h-4 w-4" />
                  <time dateTime={post.date}>{formatBlogDate(post.date)}</time>
                </div>
                <h3 className="mt-4 text-xl font-bold text-[#3e70b5] group-hover:text-primary transition-colors leading-snug">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-muted-foreground">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between text-sm">
                  <span className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {readingTime(post)}
                  </span>
                  <span className="flex items-center gap-2 font-semibold text-primary">
                    Read
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-16 rounded-2xl border border-border bg-muted/30 p-8 text-center">
            <h2 className="text-2xl font-bold text-[#3e70b5] mb-3">Not sure which system size suits your home?</h2>
            <p className="mb-6 text-muted-foreground max-w-2xl mx-auto">
              Every property is different. Talk to Easy Solar Solution for a property-specific assessment based on your
              roof, your electricity usage and your future plans.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:scale-105"
            >
              Contact Us
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>

        </div>
      </section>

      <BrandsSection />
      <Footer />
    </div>
  );
}
