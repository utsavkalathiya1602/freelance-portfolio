import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";

const slug = "ecommerce-startup-cost-2026";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "cost to start ecommerce business 2026",
    "ecommerce startup costs India",
    "how much to start online store India",
    "Shopify cost India",
    "ecommerce business budget breakdown",
    "online store investment required",
    "starting ecommerce business cost",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "fixed-costs", label: "Fixed costs — what you pay regardless" },
  { id: "platform-costs", label: "Platform and website costs" },
  { id: "payment-processing", label: "Payment processing fees" },
  { id: "product-photography", label: "Product photography" },
  { id: "shipping", label: "Shipping and fulfilment" },
  { id: "marketing", label: "Marketing and advertising" },
  { id: "ongoing-costs", label: "Ongoing maintenance costs" },
  { id: "total-estimates", label: "Total cost estimates by scenario" },
  { id: "faqs", label: "Frequently asked questions" },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want a realistic cost estimate for your e-commerce project?",
        text: "I can tell you exactly what it will cost to build and run your online store — and which approach gives you the best return for your budget. Let's talk through your plans.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        Starting a small e-commerce business in India in 2026 costs between{" "}
        <strong>₹50,000 and ₹3,00,000 in year one</strong>, depending on your platform choice, product
        category, and marketing approach. A lean Shopify store with dropshipping can start for ₹50,000–80,000.
        A custom-built store with original products and proper marketing requires ₹1,50,000–3,00,000.
        The breakdown below separates <strong>fixed costs</strong> (you pay once or annually regardless of
        sales) from <strong>variable costs</strong> (which scale with your revenue).
      </p>

      <h2 id="fixed-costs">Fixed costs — what you pay regardless of sales</h2>

      <h3>Domain name</h3>
      <p>
        A <code>.com</code> domain registered through GoDaddy, Namecheap, or Google Domains costs approximately
        <strong> ₹800–1,500/year</strong>. A <code>.in</code> domain is slightly cheaper at ₹600–900/year.
        This is non-negotiable — your own domain is essential for brand credibility and email addresses.
      </p>

      <h3>Business registration</h3>
      <p>
        While not technically a website cost, you will need some form of business registration to accept
        payments legally:
      </p>
      <ul>
        <li><strong>GST registration:</strong> Free — required if annual turnover exceeds ₹40 lakhs
          (goods) or ₹20 lakhs (services), but advisable earlier for input tax credits</li>
        <li><strong>Sole proprietorship:</strong> Effectively free to start — operate under your own name</li>
        <li><strong>Private limited company:</strong> ₹8,000–15,000 through a CA — required if you plan
          to raise investment or operate at significant scale</li>
      </ul>

      <h2 id="platform-costs">Platform and website costs</h2>

      <h3>Option 1: Shopify</h3>
      <p>Shopify&apos;s current plans for Indian merchants:</p>
      <ul>
        <li><strong>Basic:</strong> $39/month (~₹3,250/month, ~₹39,000/year)</li>
        <li><strong>Shopify:</strong> $105/month (~₹8,750/month, ~₹1,05,000/year)</li>
        <li><strong>Advanced:</strong> $399/month (~₹33,250/month, ~₹3,99,000/year)</li>
      </ul>
      <p>
        Note: Shopify Payments is not available in India. You will use Razorpay, PayU, or CCAvenue — which
        means Shopify charges an additional <strong>2% transaction fee</strong> (Basic plan) on every sale.
        On ₹10,00,000 in annual sales, this is ₹20,000 extra per year.
      </p>
      <p>
        A Shopify theme ranges from free (adequate) to $300–400 (~₹25,000–33,000) for premium.
        Typical apps (reviews, email marketing, upsells) add ₹2,000–8,000/month.
      </p>

      <h3>Option 2: Custom-built store (Next.js / React)</h3>
      <p>Development cost for a professional custom store by a freelance developer in India:</p>
      <ul>
        <li><strong>Basic store (up to 100 products):</strong> ₹80,000–1,50,000</li>
        <li><strong>Full-featured store (products, cart, accounts, admin):</strong> ₹1,50,000–3,50,000</li>
        <li><strong>Complex marketplace or B2B platform:</strong> ₹3,50,000–10,00,000+</li>
      </ul>
      <p>Hosting for a custom store: ₹1,500–5,000/month on Vercel, Railway, or AWS.</p>

      <h3>Option 3: WooCommerce (WordPress)</h3>
      <p>
        WooCommerce itself is free (open source). Costs are hosting (₹500–3,000/month), a premium theme
        (₹5,000–15,000 once), and plugins (₹0–20,000/year). Setup by a developer: ₹25,000–80,000.
      </p>

      <h2 id="payment-processing">Payment processing fees</h2>
      <p>
        Payment gateways charge per transaction. These are <strong>variable costs</strong> — you pay a
        percentage of each sale. Current rates for major Indian gateways (as of 2026):
      </p>
      <ul>
        <li><strong>Razorpay:</strong> 2% per transaction (domestic cards, net banking, UPI); 3% for
          EMI; 3% for international cards</li>
        <li><strong>PayU:</strong> Similar rates — approximately 1.99–2.99% depending on instrument</li>
        <li><strong>CCAvenue:</strong> 2% standard; lower rates on higher volume plans</li>
        <li><strong>Stripe (for international sales):</strong> 2.9% + 30¢ per transaction</li>
      </ul>
      <p>
        On ₹5,00,000 in monthly sales, Razorpay&apos;s 2% fee costs ₹10,000/month. Plan for this from day one.
      </p>

      <h2 id="product-photography">Product photography</h2>
      <p>
        Good product photography is one of the highest-ROI investments for an online store. Customers
        cannot touch or try products — images are your showroom.
      </p>
      <ul>
        <li>
          <strong>DIY photography:</strong> ₹5,000–15,000 one-time for a lightbox, foam board backdrop,
          and ring light. Adequate for simple products when done carefully.
        </li>
        <li>
          <strong>Freelance product photographer:</strong> ₹500–2,000 per product (5–10 shots).
          ₹15,000–40,000 for a 20-product shoot.
        </li>
        <li>
          <strong>Studio with retouching:</strong> ₹2,000–5,000 per product. Justified for fashion,
          jewellery, and high-ticket items where image quality directly drives sales.
        </li>
      </ul>

      <h2 id="shipping">Shipping and fulfilment</h2>
      <p>
        Shipping costs are complex because they depend on product weight, dimensions, and delivery distance.
        Two approaches:
      </p>

      <h3>Self-fulfilment</h3>
      <p>
        You pack and ship orders yourself. Rate examples for domestic India shipping (major courier aggregators):
      </p>
      <ul>
        <li>0–500g: ₹45–80 within zone, ₹80–140 across zones</li>
        <li>500g–1kg: ₹65–100 within zone, ₹110–180 across zones</li>
      </ul>
      <p>
        Use a shipping aggregator like Shiprocket, Delhivery, or EasyPost India to access discounted rates
        across multiple couriers. Self-fulfilment requires storage space and packaging materials
        (₹5,000–15,000 initial investment in packing supplies).
      </p>

      <h3>Third-party logistics (3PL) / dropshipping</h3>
      <p>
        3PL warehouses store, pack, and ship your products. Fees: ₹25–50 per unit for warehousing per
        month + per-order pick-and-pack fee (₹40–80). Better than self-fulfilment at volume;
        adds complexity and margin compression at small scale.
      </p>

      <h2 id="marketing">Marketing and advertising</h2>
      <p>
        A new store with no brand recognition needs paid traffic to get its first sales. Organic search
        (SEO) takes 6–12 months to build. Social media takes time to grow. Plan for paid marketing from
        day one.
      </p>
      <ul>
        <li>
          <strong>Google Shopping Ads:</strong> Minimum meaningful budget ₹15,000–25,000/month for a
          new store. Cost per click varies widely by category — ₹5–50 for most consumer goods.
        </li>
        <li>
          <strong>Meta (Facebook/Instagram) Ads:</strong> ₹10,000–20,000/month minimum. Effective for
          fashion, gifts, and impulse purchases with strong visual product appeal.
        </li>
        <li>
          <strong>WhatsApp marketing:</strong> Build a broadcast list from existing customers. WhatsApp
          Business API costs depend on message volume — but the ROI for repeat purchases is high.
        </li>
        <li>
          <strong>Influencer marketing:</strong> Micro-influencer (10K–100K followers) posts:
          ₹5,000–25,000 per post for product reviews in niche categories.
        </li>
      </ul>

      <h2 id="ongoing-costs">Ongoing maintenance costs</h2>
      <p>
        After launch, plan for:
      </p>
      <ul>
        <li>Platform or hosting: covered above</li>
        <li>Email marketing tool (Mailchimp / Klaviyo / Brevo): ₹0–5,000/month</li>
        <li>Customer support tool (Freshdesk / Zendesk): ₹0–3,000/month on free or starter tiers</li>
        <li>Accounting software (Zoho Books / Tally): ₹1,000–3,000/month</li>
        <li>Website maintenance (updates, bug fixes, speed): ₹5,000–15,000/month if using a developer</li>
        <li>SSL certificate: Free with Let&apos;s Encrypt (or included with Shopify/most hosts)</li>
      </ul>

      <h2 id="total-estimates">Total cost estimates by scenario</h2>

      <h3>Lean dropshipping store (Shopify Basic)</h3>
      <ul>
        <li>Domain: ₹1,000</li>
        <li>Shopify Basic (year one): ₹39,000</li>
        <li>Premium theme: ₹0 (free theme)</li>
        <li>Apps: ₹12,000/year</li>
        <li>Product photography: ₹0 (supplier images)</li>
        <li>Marketing (3 months test): ₹30,000</li>
      </ul>
      <p><strong>Year one total: ~₹82,000 + transaction fees</strong></p>

      <h3>Small own-product store (Shopify + photographer)</h3>
      <ul>
        <li>Domain + GST registration: ₹5,000</li>
        <li>Shopify Basic (year one): ₹39,000</li>
        <li>Premium theme: ₹20,000</li>
        <li>Apps: ₹18,000/year</li>
        <li>Product photography (30 products): ₹30,000</li>
        <li>Packing supplies: ₹8,000</li>
        <li>Marketing (6 months): ₹90,000</li>
      </ul>
      <p><strong>Year one total: ~₹2,10,000 + transaction fees</strong></p>

      <h3>Serious custom store (own tech + brand)</h3>
      <ul>
        <li>Custom development: ₹1,80,000</li>
        <li>Hosting (year one): ₹30,000</li>
        <li>Photography: ₹50,000</li>
        <li>Branding/design: ₹30,000</li>
        <li>Marketing (6 months): ₹1,20,000</li>
        <li>Misc (legal, packaging): ₹30,000</li>
      </ul>
      <p><strong>Year one total: ~₹4,40,000 (no platform transaction fees)</strong></p>

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>What is the minimum to start an online store in India?</h3>
      <p>
        The absolute minimum for a functional, credible store is approximately ₹40,000–60,000: Shopify
        Basic subscription, a domain, basic product images, and enough marketing budget to test demand.
        Investing less risks a store that never gets found or trusted enough to produce sales.
      </p>

      <h3>How long until an e-commerce store is profitable?</h3>
      <p>
        Most e-commerce businesses take 6–18 months to break even. Variables: product margins, marketing
        efficiency, return rates, and how quickly organic traffic builds. Plan financially for a 12-month
        runway without relying on store profits.
      </p>

      <h3>Are there any hidden costs?</h3>
      <p>
        The most commonly underestimated costs: Shopify&apos;s additional transaction fee on non-Shopify-Payments
        gateways, return processing costs (5–15% return rates are common in fashion), customer acquisition
        cost (how much you pay in ads per customer), and the time cost of managing orders, customer support,
        and inventory.
      </p>

      <p>
        For the platform decision this budget analysis feeds into, read{" "}
        <Link href="/blog/shopify-vs-custom-ecommerce-website">Shopify vs custom e-commerce website</Link>.
        For increasing the return on your store once launched, see{" "}
        <Link href="/blog/online-store-traffic-no-sales">why your online store gets traffic but no sales</Link>.
      </p>
    </ArticleLayout>
  );
}
