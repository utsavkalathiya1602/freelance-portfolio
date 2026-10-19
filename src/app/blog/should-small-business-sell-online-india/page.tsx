import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";

const slug = "should-small-business-sell-online-india";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "should small business sell online India",
    "start online store India",
    "e-commerce for small business India",
    "sell online small business Surat",
    "online store cost India",
  ],
});

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Thinking about selling online?",
        text: "Tell me what you sell and who your customers are. I will give you an honest opinion on whether an online store makes sense and what the best option would be for your specific situation.",
      }}
    >

              <h2>The honest question to ask first</h2>
              <p>
                Before building an online store, the question is not &ldquo;how do I set it up?&rdquo; — it is &ldquo;does this make sense for my business?&rdquo; Selling online requires effort before, during, and after launch. Many small businesses that build online stores find them sitting unused because they underestimated what it takes to run one.
              </p>
              <p>
                This guide helps you think through whether selling online is the right move for your business — and if it is, what your options are.
              </p>

              <h2>Selling online works well when</h2>
              <ul>
                <li>Your product can be shipped or delivered (physical goods) or downloaded (digital goods)</li>
                <li>You already have customers asking to buy from you remotely</li>
                <li>Your products have clear descriptions and photos — customers do not need to inspect them in person before buying</li>
                <li>You have the operational capacity to pack and ship orders, or to handle digital delivery</li>
                <li>You are willing to manage returns and customer complaints that come with online selling</li>
              </ul>

              <h2>Selling online is harder than it looks when</h2>
              <ul>
                <li>Your service requires an in-person consultation or visit (interior design, tailoring, construction)</li>
                <li>Your products are custom-made per order and cannot be listed at a fixed price</li>
                <li>You do not have reliable packaging and shipping logistics in place</li>
                <li>You are already running at full capacity and cannot handle more orders without hiring staff</li>
                <li>You are expecting an online store to bring customers by itself — without any marketing</li>
              </ul>
              <p>
                An online store is a selling tool, not a marketing tool. It does not bring customers on its own; you still have to drive traffic to it through search, social media, or ads.
              </p>

              <h2>Option 1: Marketplaces (Amazon, Flipkart, Meesho)</h2>
              <p>
                Selling on an existing marketplace like Amazon India, Flipkart, or Meesho is the fastest way to start selling online. These platforms already have millions of buyers, payment systems, and delivery logistics built in.
              </p>
              <p>
                <strong>Advantages:</strong> Built-in customer base, no website needed, payment and delivery handled by the platform.
              </p>
              <p>
                <strong>Disadvantages:</strong> High competition, marketplace fees (typically 10–30% of each sale), no control over how your brand appears, customer data belongs to the platform, and you are competing on price against hundreds of similar sellers.
              </p>
              <p>
                Marketplaces work best for businesses selling mass-market physical products that customers are already searching for. They are less suitable for artisan products, custom work, or service-based businesses.
              </p>

              <h2>Option 2: Your own online store (Shopify, WooCommerce)</h2>
              <p>
                Building your own online store gives you full control over your brand, customer data, and pricing — with no per-sale marketplace fees beyond payment processing (typically 2–3% per transaction with Razorpay or PayU in India).
              </p>
              <p>
                <strong>Shopify</strong> is the easiest platform to set up and manage. Monthly plans start at approximately ₹1,900/month for a basic store. It handles hosting, security, and most of the technical complexity for you.
              </p>
              <p>
                <strong>WooCommerce</strong> is a plugin for WordPress websites and is free to install (though paid extensions add up). It requires more technical knowledge to set up and maintain than Shopify.
              </p>
              <p>
                <strong>Both require:</strong> A domain name, payment gateway integration (Razorpay, PayU, or similar), and your own marketing effort to drive traffic.
              </p>

              <h2>Option 3: WhatsApp or Instagram selling</h2>
              <p>
                Many small businesses in India start by taking orders through WhatsApp or Instagram DMs — without a formal online store at all. This works well when:
              </p>
              <ul>
                <li>You are just testing whether online selling makes sense for your products</li>
                <li>You have a small, manageable volume of orders</li>
                <li>Your customers are already using these platforms to find and contact you</li>
              </ul>
              <p>
                As order volume grows, managing this through chat becomes difficult. At that point, a proper store becomes worth the investment. Starting with WhatsApp or Instagram gives you real data on demand before committing to a platform.
              </p>

              <h2>What does setting up an online store actually cost?</h2>
              <p>
                Here are realistic costs for a small business online store in India:
              </p>
              <ul>
                <li><strong>Domain name:</strong> ₹800 – ₹1,500 per year</li>
                <li><strong>Shopify Basic plan:</strong> approximately ₹1,900/month</li>
                <li><strong>WooCommerce + hosting:</strong> ₹3,000 – ₹8,000 per year for hosting, plus developer time to set up</li>
                <li><strong>Payment gateway (Razorpay):</strong> 2% per transaction (no monthly fee for standard integration)</li>
                <li><strong>Custom design and setup (if hiring a developer):</strong> ₹15,000 – ₹40,000 depending on complexity</li>
                <li><strong>Photography:</strong> if your products do not have good photos, budget ₹5,000 – ₹20,000 for a product photography session</li>
              </ul>
              <p>
                These are one-time and recurring costs before you have sold a single item. This is why validating demand through WhatsApp or a marketplace first makes sense for many businesses.
              </p>

              <h2>If you decide to build a store</h2>
              <p>
                Start small. Launch with your best-selling products first. Do not try to list your entire catalogue before launch — that will delay you for months. A store with 10 well-photographed, well-described products that launches in 4 weeks is better than a store with 200 products that launches in 6 months.
              </p>
              <p>
                If you would like help setting up a custom online store on your existing website or as a new project, see the{" "}
                <Link href="/services/web-development">
                  Website Development service page
                </Link>
                .
              </p>
    </ArticleLayout>
  );
}
