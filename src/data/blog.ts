/**
 * Blog article data.
 *
 * Each entry represents a real, published article.
 * Content is written for genuine usefulness — not keyword stuffing.
 * Dates reflect when articles were actually written/published.
 */

export type BlogPost = {
  /** URL-safe slug, used as the route segment. */
  slug: string;
  title: string;
  /** Short description used in meta tags and article cards (≤ 160 chars). */
  description: string;
  /** ISO 8601 date string — date the article was first published. */
  publishedAt: string;
  /** ISO 8601 date string — set only when the article is meaningfully updated. */
  updatedAt?: string;
  /** Topic tag displayed on the card and index. */
  tag: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "business-website-cost-surat",
    title: "How Much Does a Business Website Cost in Surat?",
    description:
      "An honest breakdown of what a business website costs in Surat — what affects the price, what to expect at different budget levels, and how to get a fair quote.",
    publishedAt: "2026-10-17",
    tag: "Website Development",
  },
  {
    slug: "photography-studio-website",
    title: "Do Photography Studios Need a Website?",
    description:
      "Instagram has millions of photographers. A website gives you something Instagram can't: a space you own, where clients can enquire, see your packages, and find you on Google.",
    publishedAt: "2026-10-17",
    tag: "Website Development",
  },
  {
    slug: "react-vs-wordpress-small-business",
    title: "React vs WordPress for a Small Business Website",
    description:
      "A practical comparison to help small business owners choose between React and WordPress — based on what you actually need, not what sounds most impressive.",
    publishedAt: "2026-10-17",
    tag: "Website Development",
  },
  {
    slug: "get-more-website-enquiries",
    title: "How Can a Small Business Get More Website Enquiries?",
    description:
      "Practical changes to your website that help more visitors turn into actual enquiries — without spending more on ads.",
    publishedAt: "2026-10-17",
    tag: "Digital Marketing",
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Format an ISO date string into a readable date like "17 October 2026". */
export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
