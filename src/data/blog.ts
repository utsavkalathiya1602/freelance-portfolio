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
  {
    slug: "google-business-profile-guide-india",
    title: "How to Set Up Google Business Profile for Your Business in India",
    description:
      "A step-by-step guide to creating and optimising your Google Business Profile so your business appears in Google Maps and local search results across India.",
    publishedAt: "2026-10-17",
    tag: "SEO",
  },
  {
    slug: "whatsapp-business-for-small-business",
    title: "How to Use WhatsApp Business to Get More Customer Enquiries",
    description:
      "WhatsApp Business is free and already used by millions of small businesses in India. Here is how to set it up properly and use it to turn visitors into paying customers.",
    publishedAt: "2026-10-17",
    tag: "Digital Marketing",
  },
  {
    slug: "website-speed-small-business-india",
    title: "Why Your Business Website Is Slow and How to Fix It",
    description:
      "A slow website loses customers before they even read a word. This practical guide explains the most common causes of slow loading in India and how to fix each one without being technical.",
    publishedAt: "2026-10-17",
    tag: "Website Development",
  },
  {
    slug: "local-seo-guide-surat-india",
    title: "Local SEO Guide for Small Businesses in Surat and India",
    description:
      "How to make your business show up when local customers search for your service on Google — without paying for ads. A practical Local SEO guide for small business owners.",
    publishedAt: "2026-10-17",
    tag: "SEO",
  },
  {
    slug: "should-small-business-sell-online-india",
    title: "Should Your Small Business Start Selling Online in India?",
    description:
      "An honest guide to whether your business is ready to sell online, what platforms make sense, and the real costs and effort involved — before you commit to building an online store.",
    publishedAt: "2026-10-17",
    tag: "E-Commerce",
  },
  {
    slug: "how-to-hire-freelance-web-developer-india",
    title: "How to Hire a Freelance Web Developer in India: What to Check",
    description:
      "Before you pay anyone to build your website, read this. A practical checklist of questions, red flags, and what a professional proposal should look like — so you do not waste money.",
    publishedAt: "2026-10-17",
    tag: "Website Development",
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
