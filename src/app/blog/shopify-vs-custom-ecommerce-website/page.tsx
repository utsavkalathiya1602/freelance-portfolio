import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ComparisonTable } from "@/components/blog/ArticleWidgets";

const slug = "shopify-vs-custom-ecommerce-website";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "Shopify vs custom website 2026",
    "Shopify vs custom ecommerce",
    "should I use Shopify or build custom",
    "Shopify vs WooCommerce vs custom",
    "custom ecommerce development cost India",
    "Shopify pros and cons",
    "when to use Shopify",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "what-shopify-is", label: "What Shopify actually is" },
  { id: "what-custom-is", label: "What a custom e-commerce website is" },
  { id: "cost-comparison", label: "Cost comparison" },
  { id: "comparison-table", label: "Side-by-side comparison" },
  { id: "choose-shopify", label: "When Shopify is the right choice" },
  { id: "choose-custom", label: "When custom development is the right choice" },
  { id: "third-option", label: "The third option: WooCommerce" },
  { id: "faqs", label: "Frequently asked questions" },
];

const comparisonRows = [
  {
    label: "Upfront cost",
    a: "Low (setup fees only)",
    b: "High (development cost)",
  },
  {
    label: "Ongoing monthly cost",
    a: "$39–$399+/month platform fee",
    b: "Hosting ($20–200/month) + maintenance",
  },
  {
    label: "Time to launch",
    a: "Days to weeks",
    b: "Weeks to months",
  },
  {
    label: "Design flexibility",
    a: "Limited to theme customization",
    b: "Unlimited — built to your exact spec",
  },
  {
    label: "Payment processing",
    a: "Shopify Payments or 3rd-party (+ 0.5–2% fee)",
    b: "Any provider — no platform transaction fee",
  },
  {
    label: "SEO control",
    a: "Good but with some limitations",
    b: "Full control over all SEO elements",
  },
  {
    label: "Integrations",
    a: "8,000+ apps in Shopify App Store",
    b: "Any API — custom integration required",
  },
  {
    label: "Performance",
    a: "Shopify-managed CDN — generally fast",
    b: "Depends on development quality",
  },
  {
    label: "Scalability",
    a: "Handles high traffic well on higher plans",
    b: "Unlimited — scales with your hosting",
  },
  {
    label: "Who manages updates",
    a: "Shopify (automatic)",
    b: "You or your developer",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Not sure which e-commerce approach fits your business?",
        text: "I build both Shopify stores and custom e-commerce websites. I'll recommend the right approach based on your products, budget, and growth plans — with no agenda either way.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        For most small and medium businesses launching an online store, <strong>Shopify is the right
        starting point</strong> — it is faster to launch, lower upfront cost, handles hosting and security,
        and has excellent app integrations. Choose a <strong>custom-built store</strong> when you have
        non-standard business logic (complex B2B pricing, bespoke product configuration, deep ERP
        integration), need full ownership without ongoing platform fees, or Shopify&apos;s transaction fees
        make it economically unviable at your sales volume.
      </p>

      <h2 id="what-shopify-is">What Shopify actually is</h2>
      <p>
        Shopify is a <strong>hosted e-commerce platform</strong> — a subscription software-as-a-service
        (SaaS) product that provides everything needed to run an online store: hosting, checkout, payment
        processing, inventory management, and a storefront. You pay a monthly fee and run your store on
        Shopify&apos;s infrastructure.
      </p>
      <p>
        Shopify&apos;s current plans (as of 2026) are:
      </p>
      <ul>
        <li><strong>Basic:</strong> $39/month — for new stores, up to 2 staff accounts</li>
        <li><strong>Shopify:</strong> $105/month — growing businesses, 5 staff accounts, professional reports</li>
        <li><strong>Advanced:</strong> $399/month — high-volume stores, custom reports, third-party calculated shipping</li>
        <li><strong>Shopify Plus:</strong> from $2,300/month — enterprise, complex B2B, multi-store</li>
      </ul>
      <p>
        If you use a payment provider other than Shopify Payments (e.g., Razorpay, Paytm, CCAvenue in
        India), Shopify charges an additional <strong>transaction fee of 0.5% to 2%</strong> on every sale,
        depending on your plan. This cost can become significant at volume.
      </p>

      <h2 id="what-custom-is">What a custom e-commerce website is</h2>
      <p>
        A custom e-commerce website is built from scratch (or on a framework like Next.js) by a developer,
        using a payment API (Stripe, Razorpay, PayU), a database, and a CMS of your choice. You own the
        entire codebase, host it where you want, and pay no platform transaction fees.
      </p>
      <p>
        Common custom e-commerce tech stacks in 2026:
      </p>
      <ul>
        <li><strong>Next.js + Stripe + Sanity/Contentful</strong> — fast, SEO-strong, works with any design</li>
        <li><strong>Next.js + Medusa.js</strong> — open-source headless commerce backend built for custom stores</li>
        <li><strong>Next.js + WooCommerce (headless)</strong> — WordPress backend, modern React frontend</li>
      </ul>

      <h2 id="cost-comparison">Cost comparison: Shopify vs custom, year one</h2>
      <p>
        These are illustrative estimates for a small-to-medium Indian online store. Actual costs vary widely.
      </p>
      <ul>
        <li>
          <strong>Shopify (Basic, year one):</strong> ₹39,000–55,000 platform fees + ₹15,000–40,000 theme
          + ₹10,000–30,000 app subscriptions + transaction fees (if not using Shopify Payments) +
          ₹10,000–25,000 setup/customization. <strong>Total: ~₹75,000–1,50,000 year one.</strong>
        </li>
        <li>
          <strong>Custom (Next.js + Razorpay):</strong> ₹1,50,000–4,00,000 development cost + ₹15,000–40,000
          hosting/year + payment processing fees (Razorpay: 2% per transaction) + ongoing maintenance.
          <strong> Total: ~₹1,70,000–4,50,000 year one.</strong> No platform transaction fees on sales.
        </li>
      </ul>
      <p>
        Custom development has a higher upfront cost but no ongoing platform fee. For a store doing
        ₹50,00,000+ annual revenue, Shopify&apos;s 2% additional transaction fee (on non-Shopify-Payments plans)
        alone costs ₹1,00,000/year — closing the gap quickly.
      </p>

      <h2 id="comparison-table">Side-by-side comparison</h2>
      <ComparisonTable
        colA="Shopify"
        colB="Custom-built store"
        rows={comparisonRows}
        note="Shopify Payments is not available in India as of 2026. Indian merchants use Shopify with third-party gateways (Razorpay, PayU, etc.), which incur Shopify's additional transaction fee."
      />

      <h2 id="choose-shopify">When Shopify is the right choice</h2>
      <ul>
        <li>
          <strong>You are launching your first online store</strong> and need to validate demand before
          investing in a custom build. Shopify lets you sell in days, not months.
        </li>
        <li>
          <strong>You sell standard physical or digital products</strong> without complex configuration,
          custom pricing tiers, or unusual fulfilment requirements.
        </li>
        <li>
          <strong>Your team is non-technical</strong> and you want to manage products, orders, and
          content without relying on a developer for every change.
        </li>
        <li>
          <strong>You need rapid access to integrations</strong> — Shopify&apos;s App Store covers most
          requirements (loyalty programmes, subscriptions, reviews, upsells) without custom development.
        </li>
        <li>
          <strong>You are in a market where Shopify Payments is available</strong> — this eliminates
          the transaction fee and simplifies checkout.
        </li>
      </ul>

      <h2 id="choose-custom">When custom development is the right choice</h2>
      <ul>
        <li>
          <strong>Your business model is non-standard</strong> — B2B with customer-specific pricing,
          complex product bundles, subscription + one-time purchase combos, or deep ERP/warehouse integration.
        </li>
        <li>
          <strong>Transaction fees are a significant cost</strong> — at high sales volumes without Shopify
          Payments access, custom avoids a permanent percentage of revenue going to the platform.
        </li>
        <li>
          <strong>You need full design control</strong> — Shopify themes, even headless ones, impose
          constraints. A custom build implements exactly the experience you need.
        </li>
        <li>
          <strong>You are building a marketplace</strong> — multi-vendor functionality in Shopify requires
          expensive apps; a custom build owns the entire logic.
        </li>
        <li>
          <strong>Long-term cost of ownership matters</strong> — you plan to run the store for 5+ years
          and want to avoid permanent platform dependency and fee increases.
        </li>
      </ul>

      <h2 id="third-option">The third option: WooCommerce</h2>
      <p>
        WooCommerce (a WordPress plugin) sits between Shopify and a full custom build. It is open-source,
        has no transaction fees, and can be self-hosted. Trade-offs: you are responsible for hosting,
        security, updates, and plugin compatibility. Performance requires active management.
        WooCommerce is appropriate for teams already on WordPress, or stores needing specific content
        + commerce integration that Shopify does not handle well.
      </p>

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Can I migrate from Shopify to a custom store later?</h3>
      <p>
        Yes — and it is a common path. Shopify exports products, customers, and order history as CSV.
        Migrating a large store takes time and risks SEO disruption if URL structures change, but it is
        technically straightforward. Plan URL redirects carefully and use 301 redirects from all old
        Shopify product URLs.
      </p>

      <h3>Is Shopify good for SEO?</h3>
      <p>
        Shopify is adequate for SEO — it generates sitemap.xml, supports canonical tags, and allows
        meta description customization. Its main SEO limitations: URLs include <code>/products/</code> and
        <code>/collections/</code> prefixes (not editable), canonical behaviour on variant pages can cause
        duplicate content, and JavaScript-heavy themes can slow page loads if not optimized.
      </p>

      <h3>Can I use Razorpay with Shopify in India?</h3>
      <p>
        Yes. Razorpay, PayU, CCAvenue, and other Indian payment gateways integrate with Shopify as
        third-party providers. The trade-off is Shopify&apos;s additional transaction fee (0.5–2%) applies
        to every sale processed through a third-party gateway. Factor this into your margin calculations.
      </p>

      <p>
        For the full cost breakdown of starting an e-commerce business, see{" "}
        <Link href="/blog/ecommerce-startup-cost-2026">the real cost of starting an e-commerce business in 2026</Link>.
        For optimizing your store&apos;s product pages, read the{" "}
        <Link href="/blog/product-page-seo-ai-shopping">product page SEO and AI shopping guide</Link>.
      </p>
    </ArticleLayout>
  );
}
