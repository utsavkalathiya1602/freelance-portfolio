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
  /** Estimated reading time, from the article's word count (≈200 words per minute). */
  readingMinutes: number;
};

export const blogPosts: BlogPost[] = [
  {
    slug: "business-website-cost-surat",
    title: "How Much Does a Business Website Cost in Surat?",
    description:
      "An honest breakdown of what a business website costs in Surat — what affects the price, what to expect at different budget levels, and how to get a fair quote.",
    publishedAt: "2026-10-17",
    tag: "Website Development",
    readingMinutes: 3,
  },
  {
    slug: "photography-studio-website",
    title: "Do Photography Studios Need a Website?",
    description:
      "Instagram has millions of photographers. A website gives you something Instagram can't: a space you own, where clients can enquire, see your packages, and find you on Google.",
    publishedAt: "2026-10-17",
    tag: "Website Development",
    readingMinutes: 3,
  },
  {
    slug: "react-vs-wordpress-small-business",
    title: "React vs WordPress for a Small Business Website",
    description:
      "A practical comparison to help small business owners choose between React and WordPress — based on what you actually need, not what sounds most impressive.",
    publishedAt: "2026-10-17",
    tag: "Website Development",
    readingMinutes: 3,
  },
  {
    slug: "get-more-website-enquiries",
    title: "How Can a Small Business Get More Website Enquiries?",
    description:
      "Practical changes to your website that help more visitors turn into actual enquiries — without spending more on ads.",
    publishedAt: "2026-10-17",
    tag: "Digital Marketing",
    readingMinutes: 4,
  },
  {
    slug: "google-business-profile-guide-india",
    title: "How to Set Up Google Business Profile for Your Business in India",
    description:
      "A step-by-step guide to creating and optimising your Google Business Profile so your business appears in Google Maps and local search results across India.",
    publishedAt: "2026-10-17",
    tag: "SEO",
    readingMinutes: 4,
  },
  {
    slug: "whatsapp-business-for-small-business",
    title: "How to Use WhatsApp Business to Get More Customer Enquiries",
    description:
      "WhatsApp Business is free and already used by millions of small businesses in India. Here is how to set it up properly and use it to turn visitors into paying customers.",
    publishedAt: "2026-10-17",
    tag: "Digital Marketing",
    readingMinutes: 3,
  },
  {
    slug: "website-speed-small-business-india",
    title: "Why Your Business Website Is Slow and How to Fix It",
    description:
      "A slow website loses customers before they even read a word. This practical guide explains the most common causes of slow loading in India and how to fix each one without being technical.",
    publishedAt: "2026-10-17",
    tag: "Website Development",
    readingMinutes: 4,
  },
  {
    slug: "local-seo-guide-surat-india",
    title: "Local SEO Guide for Small Businesses in Surat and India",
    description:
      "How to make your business show up when local customers search for your service on Google — without paying for ads. A practical Local SEO guide for small business owners.",
    publishedAt: "2026-10-17",
    tag: "SEO",
    readingMinutes: 4,
  },
  {
    slug: "should-small-business-sell-online-india",
    title: "Should Your Small Business Start Selling Online in India?",
    description:
      "An honest guide to whether your business is ready to sell online, what platforms make sense, and the real costs and effort involved — before you commit to building an online store.",
    publishedAt: "2026-10-17",
    tag: "E-Commerce",
    readingMinutes: 4,
  },
  {
    slug: "how-to-hire-freelance-web-developer-india",
    title: "How to Hire a Freelance Web Developer in India: What to Check",
    description:
      "Before you pay anyone to build your website, read this. A practical checklist of questions, red flags, and what a professional proposal should look like — so you do not waste money.",
    publishedAt: "2026-10-17",
    tag: "Website Development",
    readingMinutes: 4,
  },
  {
    slug: "google-ads-vs-meta-ads-local-business",
    title: "Google Ads vs Meta Ads: Which Is Right for Your Local Business?",
    description:
      "Google Ads reaches people who are searching. Meta Ads reaches people who are scrolling. How to decide which one fits your business, budget and customers.",
    publishedAt: "2026-10-19",
    tag: "Digital Marketing",
    readingMinutes: 3,
  },
  {
    slug: "google-ads-budget-small-business-india",
    title: "How Much Should a Small Business Spend on Google Ads in India?",
    description:
      "There is no magic number. A simple way to work out a sensible starting Google Ads budget from your own costs, prices and goals — before you spend a rupee.",
    publishedAt: "2026-10-19",
    tag: "Digital Marketing",
    readingMinutes: 3,
  },
  {
    slug: "meta-ads-guide-local-business",
    title: "Meta Ads for Local Businesses: A Beginner's Guide",
    description:
      "How Facebook and Instagram ads work for a local business — objectives, audiences, creatives and budgets — and the mistakes that waste money in the first month.",
    publishedAt: "2026-10-19",
    tag: "Digital Marketing",
    readingMinutes: 3,
  },
  {
    slug: "landing-page-vs-website",
    title: "Landing Page vs Website: What Does Your Business Actually Need?",
    description:
      "A landing page and a full website do different jobs. When a single focused page is enough, when you need more, and how the two work together with ads.",
    publishedAt: "2026-10-19",
    tag: "Website Development",
    readingMinutes: 3,
  },
  {
    slug: "business-website-homepage-checklist",
    title: "What to Include on a Business Website Homepage: A Checklist",
    description:
      "Visitors decide in seconds whether to stay. A practical checklist of what your homepage needs — from the first headline to the contact button — and what to leave out.",
    publishedAt: "2026-10-19",
    tag: "Website Development",
    readingMinutes: 3,
  },
  {
    slug: "track-website-and-ad-enquiries",
    title: "How to Track Enquiries from Your Website and Ads",
    description:
      "If you can't see which calls, forms and WhatsApp messages came from your ads, you can't tell what's working. A plain-language guide to tracking enquiries.",
    publishedAt: "2026-10-19",
    tag: "Digital Marketing",
    readingMinutes: 3,
  },
  {
    slug: "ai-search-optimization-small-business",
    title: "How to Make Your Business Visible on ChatGPT, Gemini and Google AI Search",
    description:
      "AI-powered search is changing how customers discover businesses. A practical guide to helping your business appear in ChatGPT, Gemini and Google AI Overviews — and the myths to avoid.",
    publishedAt: "2026-10-20",
    tag: "SEO",
    readingMinutes: 7,
  },
  {
    slug: "website-traffic-no-leads",
    title: "Why Your Website Gets Traffic but No Leads: 9 Things to Fix",
    description:
      "Getting visitors but no enquiries is a conversion problem, not a traffic problem. Here are nine reasons your website isn't turning visitors into leads — and how to fix each one.",
    publishedAt: "2026-10-20",
    tag: "Website Development",
    readingMinutes: 6,
  },
  {
    slug: "google-ads-cost-per-lead-india",
    title: "Google Ads Cost Per Lead in India: What Businesses Should Expect in 2026",
    description:
      "How much does a lead from Google Ads actually cost in India? A clear explanation of the five factors that determine your cost per lead, with illustrative examples for common business types.",
    publishedAt: "2026-10-20",
    tag: "Digital Marketing",
    readingMinutes: 7,
  },
  {
    slug: "website-redesign-vs-new-website",
    title: "Website Redesign vs New Website: Which Is Better for Your Business?",
    description:
      "Not sure whether to redesign your current website or start fresh? A practical framework to help business owners evaluate the real costs, SEO risks and the right decision for their situation.",
    publishedAt: "2026-10-20",
    tag: "Website Development",
    readingMinutes: 6,
  },
  {
    slug: "get-more-customers-google-maps",
    title: "How to Get More Local Customers from Google Maps Without Increasing Your Ad Budget",
    description:
      "Practical steps to optimise your Google Business Profile, improve local relevance and track enquiries — so more people in your area find and contact your business for free.",
    publishedAt: "2026-10-20",
    tag: "SEO",
    readingMinutes: 6,
  },
  {
    slug: "track-leads-google-ads-website-whatsapp",
    title: "How to Track Every Lead from Google Ads, Your Website and WhatsApp",
    description:
      "A step-by-step guide to measuring every form submission, phone call, WhatsApp click and Google Ads conversion — so you always know which marketing is producing real leads.",
    publishedAt: "2026-10-20",
    tag: "Digital Marketing",
    readingMinutes: 7,
  },
  // ── Priority 1–6: Enhanced 2026 series ────────────────────────────
  {
    slug: "ai-search-visibility-2026",
    title: "How to Get Your Business Recommended by AI Search in 2026",
    description:
      "A practical guide for Indian business owners on AI SEO, AEO and GEO — how ChatGPT, Gemini and Google AI Overviews discover businesses and what you can do to improve your visibility.",
    publishedAt: "2026-10-21",
    tag: "SEO",
    readingMinutes: 9,
  },
  {
    slug: "website-development-cost-india-2026",
    title: "Website Development Cost in India (2026): Complete Pricing Guide",
    description:
      "An honest, detailed breakdown of what a business website costs in India in 2026 — from a basic brochure site to a custom web application — with a budget estimator tool.",
    publishedAt: "2026-10-21",
    tag: "Website Development",
    readingMinutes: 10,
  },
  {
    slug: "google-ads-budget-india-2026",
    title: "Google Ads Budget in India (2026): How Much Should a Small Business Spend?",
    description:
      "How to work out a sensible Google Ads budget for your Indian business in 2026 — ad spend vs management fees, cost per click, and a free lead-cost calculator.",
    publishedAt: "2026-10-21",
    tag: "Digital Marketing",
    readingMinutes: 9,
  },
  {
    slug: "why-website-not-getting-customers",
    title: "Why Is Your Website Not Getting Customers? 10 Common Problems and Fixes",
    description:
      "Traffic but no enquiries? A self-assessment checklist and practical fixes for the ten most common reasons Indian business websites fail to convert visitors into leads.",
    publishedAt: "2026-10-21",
    tag: "Website Development",
    readingMinutes: 10,
  },
  {
    slug: "local-seo-small-business-india-2026",
    title: "Local SEO for Small Businesses in India: How to Get More Customers from Google",
    description:
      "How local search and Google Maps work, how to set up and optimize your Google Business Profile, and how to track calls and enquiries from local SEO in India.",
    publishedAt: "2026-10-21",
    tag: "SEO",
    readingMinutes: 10,
  },
  {
    slug: "landing-page-vs-full-website-lead-generation",
    title: "Landing Page vs Full Website: Which Is Better for Generating Leads?",
    description:
      "An annotated comparison of landing pages and full websites for lead generation — when each works best, what every landing page needs, and how to test performance.",
    publishedAt: "2026-10-21",
    tag: "Website Development",
    readingMinutes: 9,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

/** Newest first; articles published on the same day keep their listed order. */
export function sortedBlogPosts(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));
}

/** Topics with the number of articles in each, most common first. */
export function blogTopics(): { tag: string; count: number }[] {
  const counts = new Map<string, number>();
  for (const post of blogPosts) counts.set(post.tag, (counts.get(post.tag) ?? 0) + 1);
  return [...counts.entries()].map(([tag, count]) => ({ tag, count })).sort((a, b) => b.count - a.count);
}

/** Up to `limit` other articles, preferring the same topic. */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getBlogPost(slug);
  const others = sortedBlogPosts().filter((p) => p.slug !== slug);
  const sameTopic = others.filter((p) => p.tag === current?.tag);
  const rest = others.filter((p) => p.tag !== current?.tag);
  return [...sameTopic, ...rest].slice(0, limit);
}

export function topicId(tag: string): string {
  return tag.toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

/** Format an ISO date string into a readable date like "17 October 2026". */
export function formatDate(iso: string): string {
  // UTC keeps the date identical on the server and in every visitor's time zone.
  return new Date(iso).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
