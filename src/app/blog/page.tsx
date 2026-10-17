import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { pageMetadata } from "@/lib/metadata";
import { blogPosts, formatDate } from "@/data/blog";
import { PageHeader } from "@/components/ui/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactCTA } from "@/components/home/ContactCTA";

const title = "Blog — Web Development & Digital Marketing Guides";
const description =
  "Practical guides for small business owners in Surat and across India — on website costs, digital marketing, and getting more enquiries from your website. Written by Utsav Kalathiya, freelance web developer.";

export const metadata: Metadata = pageMetadata({
  title,
  description,
  path: "/blog",
  keywords: [
    "freelance web developer blog Surat",
    "website cost Surat",
    "small business website guide India",
    "digital marketing tips small business",
    "photography studio website",
    "React vs WordPress small business",
  ],
});

export default function BlogIndexPage() {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Guides for small businesses."
        description="Practical answers to questions business owners ask me most often — on websites, costs, and getting more enquiries."
      />

      <section aria-label="Articles" className="py-14 sm:py-20">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {blogPosts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-7 transition-shadow duration-200 hover:shadow-[0_12px_32px_-16px_rgba(23,23,23,0.2)] sm:p-8"
                >
                  <span className="mb-4 inline-block rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">
                    {post.tag}
                  </span>
                  <h2 className="font-display text-xl font-bold leading-snug tracking-[-0.02em] text-ink text-balance group-hover:underline group-hover:decoration-lime group-hover:decoration-[3px] group-hover:underline-offset-4 sm:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">
                    {post.description}
                  </p>
                  <span className="mt-6 flex items-center gap-2 text-sm font-semibold text-ink">
                    Read article
                    <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-1" />
                  </span>
                  <time
                    dateTime={post.publishedAt}
                    className="mt-4 block border-t border-line pt-4 text-xs text-muted"
                  >
                    {formatDate(post.publishedAt)}
                  </time>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <ContactCTA
        heading="Have a question not answered here?"
        text="Send me a message describing your business and what you're trying to figure out. I'll reply with an honest answer."
      />
    </>
  );
}
