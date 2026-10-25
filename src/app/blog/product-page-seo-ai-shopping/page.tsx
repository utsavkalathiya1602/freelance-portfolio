import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleChecklist } from "@/components/blog/ArticleChecklist";

const slug = "product-page-seo-ai-shopping";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "product page SEO 2026",
    "optimize product pages for Google",
    "product schema markup",
    "AI shopping SEO",
    "Google Shopping product optimization",
    "product structured data",
    "e-commerce SEO best practices 2026",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "how-google-reads-products", label: "How Google reads product pages" },
  { id: "title-and-description", label: "Product title and description" },
  { id: "schema-markup", label: "Product schema markup" },
  { id: "pricing-availability", label: "Pricing and availability" },
  { id: "reviews", label: "Customer reviews" },
  { id: "images", label: "Images and media" },
  { id: "ai-shopping-specific", label: "AI Shopping-specific optimizations" },
  { id: "checklist", label: "Product page optimization checklist" },
  { id: "faqs", label: "Frequently asked questions" },
];

const checklistItems = [
  {
    id: "unique-title",
    label: "Write a unique, keyword-rich product title",
    detail: "Include brand, product name, key attribute (size/colour/material), and model number if applicable.",
  },
  {
    id: "original-description",
    label: "Write original product descriptions (minimum 200 words)",
    detail: "Do not copy manufacturer text. Include use cases, specifications, who it is for, and what makes it different.",
  },
  {
    id: "product-schema",
    label: "Add Product schema markup with all required fields",
    detail: "Name, description, image, sku, offers (price, currency, availability), aggregateRating, brand.",
  },
  {
    id: "accurate-price",
    label: "Ensure schema price matches visible page price exactly",
    detail: "Google penalises price mismatches between structured data and visible content.",
  },
  {
    id: "availability",
    label: "Set availability status accurately (InStock / OutOfStock)",
    detail: "OutOfStock products shown as InStock can cause Google Merchant Center disapprovals.",
  },
  {
    id: "gtin",
    label: "Add GTIN (barcode/EAN) or MPN to product schema",
    detail: "GTINs allow Google to match your product to its knowledge graph, improving Shopping visibility.",
  },
  {
    id: "reviews-schema",
    label: "Include review schema with count and average rating",
    detail: "AggregateRating in schema enables star ratings in search results — significant click-through rate boost.",
  },
  {
    id: "webp-images",
    label: "Use multiple high-quality images (WebP, min 800×800px)",
    detail: "At least 3 images: front, back, in-use. Google Shopping requires the main image to have a clean background.",
  },
  {
    id: "faq-schema",
    label: "Add FAQ section with common questions answered",
    detail: "FAQs help AI shopping tools extract answers about your product for conversational queries.",
  },
  {
    id: "breadcrumbs",
    label: "Add BreadcrumbList schema to every product page",
    detail: "Helps Google understand category hierarchy and can display breadcrumbs in search results.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want your product pages optimized for Google and AI shopping tools?",
        text: "I implement product schema, Merchant Center feeds, and SEO best practices for e-commerce stores. Better product pages mean more visibility and more sales.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        Ranking product pages in Google search and appearing in AI shopping tools requires four things working
        together: <strong>accurate structured data</strong> (Product schema), a <strong>Google Merchant
        Center feed</strong> with complete and correct product information, <strong>original product
        descriptions</strong> that contain the attributes customers search for, and <strong>genuine
        customer reviews</strong> with schema markup. Thin descriptions, copied manufacturer text, missing
        GTINs, and price mismatches consistently hurt visibility.
      </p>

      <h2 id="how-google-reads-products">How Google reads product pages</h2>
      <p>
        Google uses two separate but complementary systems to understand product pages:
      </p>
      <ul>
        <li>
          <strong>Web crawling</strong> — Googlebot visits your product page and extracts text, structured
          data markup, images, and page signals. This feeds Google&apos;s organic search index and, for
          pages with Product schema, the Shopping Knowledge Graph.
        </li>
        <li>
          <strong>Merchant Center feed</strong> — a structured data file (XML, CSV, or API) you submit
          directly to Google Merchant Center containing product attributes. This feed drives Google
          Shopping ads and free Shopping listings.
        </li>
      </ul>
      <p>
        For full product visibility across organic search, Shopping listings, and AI Shopping features,
        both systems need to be in place. A great Merchant Center feed with a poor product page (or
        vice versa) leaves traffic on the table.
      </p>

      <h2 id="title-and-description">Product title and description</h2>

      <h3>Product title</h3>
      <p>
        Your product page title (the <code>&lt;h1&gt;</code> and the <code>&lt;title&gt;</code> tag) is
        the primary signal for which searches your page appears in. An effective product title includes:
      </p>
      <ul>
        <li>Brand name (if branded)</li>
        <li>Product type — the primary noun customers search for</li>
        <li>Key differentiating attribute — colour, size, material, model number</li>
        <li>Relevant modifier — &ldquo;for women,&rdquo; &ldquo;heavy duty,&rdquo; &ldquo;wireless&rdquo;</li>
      </ul>
      <p>
        Example — weak: <em>&ldquo;Blue Bag&rdquo;</em> &nbsp;|&nbsp; Strong:{" "}
        <em>&ldquo;Wildcraft 30L Waterproof Backpack for Trekking and Travel — Navy Blue&rdquo;</em>
      </p>

      <h3>Product description</h3>
      <p>
        Write the description you would give a customer asking in person. Cover:
      </p>
      <ul>
        <li><strong>What it is</strong> — clear primary description</li>
        <li><strong>Who it is for</strong> — use case and audience</li>
        <li><strong>Key specifications</strong> — dimensions, weight, materials, capacity, compatibility</li>
        <li><strong>What is included</strong> — accessories, warranty, documentation</li>
        <li><strong>What makes it different</strong> — genuine differentiators, not marketing language</li>
        <li><strong>What it does not do</strong> — honest limitations prevent returns and negative reviews</li>
      </ul>
      <p>
        Minimum effective length: 200 words. AI shopping assistants that summarize products for shoppers
        use this text directly — richer descriptions produce richer, more accurate summaries.
      </p>

      <h2 id="schema-markup">Product schema markup</h2>
      <p>
        Product structured data tells Google (and AI crawlers) the machine-readable attributes of your
        product without relying on text parsing. Use JSON-LD in your page&apos;s <code>&lt;head&gt;</code>:
      </p>
      <pre><code>{`<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Wildcraft 30L Waterproof Backpack",
  "description": "Durable 30-litre backpack for trekking...",
  "image": ["https://example.com/images/backpack-front.webp"],
  "sku": "WC-BP-30L-NAVY",
  "gtin13": "8901234567890",
  "brand": { "@type": "Brand", "name": "Wildcraft" },
  "offers": {
    "@type": "Offer",
    "url": "https://example.com/products/wildcraft-30l-backpack",
    "priceCurrency": "INR",
    "price": "2499",
    "availability": "https://schema.org/InStock",
    "itemCondition": "https://schema.org/NewCondition"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.6",
    "reviewCount": "234"
  }
}
</script>`}</code></pre>
      <p>
        Test your implementation with Google&apos;s{" "}
        <a href="https://search.google.com/test/rich-results" rel="noopener noreferrer">Rich Results Test</a>{" "}
        and the{" "}
        <a href="https://validator.schema.org" rel="noopener noreferrer">Schema Markup Validator</a>.
      </p>

      <h2 id="pricing-availability">Pricing and availability accuracy</h2>
      <p>
        Pricing and availability must be accurate and consistent across:
      </p>
      <ul>
        <li>The visible price on the page</li>
        <li>The price in your Product schema markup</li>
        <li>The price in your Google Merchant Center feed</li>
      </ul>
      <p>
        Google crawls product pages and checks them against your Merchant Center feed. Discrepancies
        above a small tolerance cause <strong>product disapprovals</strong> in Merchant Center, removing
        your product from Shopping results entirely. Automate price sync if you change prices frequently.
      </p>
      <p>
        For availability: never leave an out-of-stock product marked as &ldquo;InStock&rdquo; in schema or your feed.
        This is a common error that damages account standing over time. Use{" "}
        <code>PreOrder</code>, <code>BackOrder</code>, or <code>OutOfStock</code> schema values appropriately.
      </p>

      <h2 id="reviews">Customer reviews</h2>
      <p>
        Reviews serve three functions on product pages: conversion trust signals for human visitors,
        <code>aggregateRating</code> schema that can display star ratings in Google search results, and
        review sentiment that AI shopping tools aggregate when making recommendations.
      </p>
      <p>
        Collecting reviews effectively:
      </p>
      <ul>
        <li>
          <strong>Post-purchase email</strong> — send a review request 7–14 days after delivery (enough
          time to use the product). Keep the request simple: one click to leave a rating.
        </li>
        <li>
          <strong>SMS request</strong> — higher open rates than email, effective for Indian customers
          who may not use email regularly.
        </li>
        <li>
          <strong>WhatsApp follow-up</strong> — appropriate for existing customer relationships; do not
          cold-message people for reviews via WhatsApp.
        </li>
      </ul>
      <p>
        Never incentivise reviews with discounts or gifts — this violates Google&apos;s review policies and
        creates biased review data. Genuine mixed reviews (with some 3-4 star reviews) convert better
        than suspiciously perfect 5-star-only distributions.
      </p>

      <h2 id="images">Images and media</h2>
      <p>
        Google Shopping has strict image requirements that also happen to be best practices for conversion:
      </p>
      <ul>
        <li>
          <strong>Main image:</strong> clean/white background, product only, minimum 800×800px, no
          watermarks or text overlays (Google Merchant Center requirement)
        </li>
        <li>
          <strong>Additional images:</strong> product in use, multiple angles, scale reference, close-up
          of key features
        </li>
        <li>
          <strong>Format:</strong> WebP for fast loading; fallback JPEG for older browsers
        </li>
        <li>
          <strong>Alt text:</strong> descriptive and accurate — &ldquo;Wildcraft 30L navy blue waterproof
          backpack front view&rdquo; — not keyword-stuffed
        </li>
      </ul>

      <h2 id="ai-shopping-specific">AI Shopping-specific optimizations</h2>
      <p>
        AI shopping tools (Google AI Overviews for shopping, ChatGPT Shopping, Perplexity Shopping) have
        additional characteristics to optimize for:
      </p>
      <ul>
        <li>
          <strong>Answer attribute questions explicitly</strong> — if customers frequently ask &ldquo;is this
          waterproof?&rdquo; or &ldquo;can this fit a 15-inch laptop?&rdquo;, answer these in the product description
          and in a product FAQ section. AI tools extract direct answers to direct questions.
        </li>
        <li>
          <strong>Mention compatible use cases</strong> — &ldquo;suitable for daily commute and weekend
          hiking&rdquo; maps your product to conversational queries like &ldquo;best bag for commuting and
          occasional hikes.&rdquo;
        </li>
        <li>
          <strong>Include comparison language where honest</strong> — &ldquo;similar capacity to [common
          competitor product] but with a dedicated laptop sleeve&rdquo; helps AI tools place your product
          in recommendation comparisons.
        </li>
        <li>
          <strong>Keep pricing metadata current</strong> — AI Shopping tools show real-time prices. Stale
          prices (higher than current) reduce click-through.
        </li>
      </ul>

      <h2 id="checklist">Product page optimization checklist</h2>
      <ArticleChecklist
        title="Product Page SEO & AI Shopping Checklist"
        items={checklistItems}
      />

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Is a Google Merchant Center account required for Shopping visibility?</h3>
      <p>
        For Google Shopping ads and free Shopping listings: yes. For Google organic search results (blue
        links): no. Product schema in organic results can display star ratings and price in rich snippets
        without a Merchant Center account, but Shopping tab visibility requires one.
      </p>

      <h3>How long does it take for product schema to appear in search results?</h3>
      <p>
        Google typically crawls updated pages within a few days to a few weeks, depending on your site&apos;s
        crawl frequency. Rich snippets appear once Google has validated the schema. Speed up re-crawling
        by submitting updated URLs through Google Search Console&apos;s URL Inspection tool.
      </p>

      <h3>Do I need different content for AI shopping vs regular Google search?</h3>
      <p>
        No. The same practices — accurate specifications, original descriptions, genuine reviews, correct
        schema, and consistent pricing — serve both. AI shopping tools read the same content that
        organic search crawls; there is no separate content strategy required.
      </p>

      <p>
        For the broader e-commerce conversion context, read{" "}
        <Link href="/blog/online-store-traffic-no-sales">why your online store gets traffic but no sales</Link>.
        For how AI shopping tools work from a customer perspective, see{" "}
        <Link href="/blog/ai-shopping-assistants-ecommerce-2026">how AI shopping assistants are changing online shopping</Link>.
      </p>
    </ArticleLayout>
  );
}
