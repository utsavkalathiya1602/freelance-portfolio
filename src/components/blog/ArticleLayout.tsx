import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight, ChevronRight, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { formatDate, getRelatedPosts, type BlogPost } from "@/data/blog";
import { ArticleSchema } from "@/components/schema/ArticleSchema";
import { ArticleBody } from "@/components/blog/ArticleBody";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/home/ContactCTA";

type ArticleLayoutProps = {
  post: BlogPost;
  children: ReactNode;
  cta: { heading: string; text: string; whatsappMessage?: string };
};

/** Shared layout for every blog article: header, body, related articles and contact CTA. */
export function ArticleLayout({ post, children, cta }: ArticleLayoutProps) {
  const url = `${siteConfig.url}/blog/${post.slug}`;
  const related = getRelatedPosts(post.slug, 3);

  return (
    <>
      <ArticleSchema post={post} url={url} />

      <article aria-labelledby="article-heading">
        <header className="border-b border-line bg-ivory py-14 sm:py-20">
          <Container size="narrow">
            <nav aria-label="Breadcrumb" className="mb-8">
              <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted">
                <li>
                  <Link href="/" className="hover:text-ink">
                    Home
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li>
                  <Link href="/blog" className="hover:text-ink">
                    Blog
                  </Link>
                </li>
                <li aria-hidden="true">
                  <ChevronRight className="h-3.5 w-3.5" />
                </li>
                <li aria-current="page" className="line-clamp-1 font-medium text-ink">
                  {post.title}
                </li>
              </ol>
            </nav>
            <p className="mb-5 inline-block rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">{post.tag}</p>
            <h1
              id="article-heading"
              className="font-display text-[2.2rem] font-bold leading-[1.05] tracking-[-0.04em] text-ink text-balance sm:text-5xl"
            >
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-muted">{post.description}</p>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted">
              <span>
                By{" "}
                <Link href="/about" className="font-semibold text-ink underline underline-offset-4">
                  {siteConfig.name}
                </Link>
              </span>
              <span aria-hidden="true">·</span>
              <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
              <span aria-hidden="true">·</span>
              <span className="inline-flex items-center gap-1.5">
                <Clock aria-hidden="true" className="h-3.5 w-3.5" />
                {post.readingMinutes} min read
              </span>
            </div>
          </Container>
        </header>

        <div className="py-14 sm:py-20">
          <Container size="narrow">
            <ArticleBody>{children}</ArticleBody>
          </Container>
        </div>
      </article>

      {related.length > 0 ? (
        <section aria-labelledby="related-heading" className="border-t border-line bg-stone py-14 sm:py-20">
          <Container>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <h2 id="related-heading" className="font-display text-3xl font-bold tracking-[-0.03em] text-ink">
                Related articles
              </h2>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-sm font-semibold text-ink underline decoration-lime decoration-[3px] underline-offset-[6px] hover:decoration-ink"
              >
                All articles
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </div>
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}`}
                    className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-6 transition-shadow duration-200 hover:shadow-[0_12px_32px_-16px_rgba(23,23,23,0.2)]"
                  >
                    <span className="self-start rounded-full bg-ivory px-3 py-1 text-xs font-semibold text-ink">
                      {item.tag}
                    </span>
                    <h3 className="mt-4 font-display text-lg font-bold leading-snug tracking-[-0.02em] text-ink group-hover:underline group-hover:decoration-lime group-hover:decoration-[3px] group-hover:underline-offset-4">
                      {item.title}
                    </h3>
                    <span className="mt-auto pt-4 text-xs text-muted">{item.readingMinutes} min read</span>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      ) : null}

      <ContactCTA heading={cta.heading} text={cta.text} whatsappMessage={cta.whatsappMessage} />
    </>
  );
}
