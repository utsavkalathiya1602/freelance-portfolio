import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleChecklist } from "@/components/blog/ArticleChecklist";

const slug = "online-store-traffic-no-sales";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "online store traffic no sales",
    "why ecommerce not converting",
    "ecommerce conversion rate optimization",
    "fix online store not selling",
    "high traffic low conversion ecommerce",
    "ecommerce audit checklist",
    "improve online store sales",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "problem-1", label: "1. Slow mobile page speed" },
  { id: "problem-2", label: "2. Weak product pages" },
  { id: "problem-3", label: "3. Checkout friction" },
  { id: "problem-4", label: "4. Shipping surprises at checkout" },
  { id: "problem-5", label: "5. Missing trust signals" },
  { id: "problem-6", label: "6. No clear return policy" },
  { id: "problem-7", label: "7. Payment failures" },
  { id: "problem-8", label: "8. Wrong traffic source" },
  { id: "problem-9", label: "9. No abandoned cart recovery" },
  { id: "problem-10", label: "10. Poor mobile UX beyond speed" },
  { id: "problem-11", label: "11. Unclear value proposition" },
  { id: "problem-12", label: "12. Pricing out of context" },
  { id: "checklist", label: "Audit checklist" },
  { id: "faqs", label: "Frequently asked questions" },
];

const checklistItems = [
  {
    id: "mobile-speed",
    label: "Check mobile page speed — target LCP under 2.5s",
    detail: "Use Google PageSpeed Insights on your homepage and a product page. A score below 50 on mobile is urgent.",
  },
  {
    id: "product-images",
    label: "Audit product images — minimum 800×800px, multiple angles",
    detail: "Check every product has at least 3 images. Blurry or small images are a top reason customers abandon.",
  },
  {
    id: "product-descriptions",
    label: "Rewrite thin product descriptions — add size, material, use case",
    detail: "Flag any products with fewer than 150 words of description. Add specifications and answer common questions.",
  },
  {
    id: "checkout-steps",
    label: "Count checkout steps — reduce to 2–3 maximum",
    detail: "More than 3 steps to complete a purchase loses a significant portion of buyers. Offer guest checkout.",
  },
  {
    id: "shipping-visibility",
    label: "Show shipping costs before the checkout page",
    detail: "Add a shipping cost estimator on product pages or cart. Hidden shipping costs cause 48% of cart abandonment.",
  },
  {
    id: "trust-signals",
    label: "Add visible trust signals — reviews, badges, social proof",
    detail: "Display review count and star rating on product pages. Add payment security badges near the buy button.",
  },
  {
    id: "return-policy",
    label: "Make your return policy visible on product pages",
    detail: "Add a short return policy summary (e.g. '30-day returns') directly below the add-to-cart button.",
  },
  {
    id: "payment-test",
    label: "Test the full checkout on a real mobile device",
    detail: "Complete a real purchase from your own store on a phone. Look for broken steps, missing payment methods, or confusing error messages.",
  },
  {
    id: "abandoned-cart",
    label: "Set up abandoned cart emails — send within 1 hour",
    detail: "An email sent within 60 minutes of abandonment recovers significantly more carts than one sent the next day.",
  },
  {
    id: "traffic-quality",
    label: "Check traffic source quality in analytics",
    detail: "High bounce rates from specific campaigns or channels mean you are bringing in the wrong audience. Review ad targeting.",
  },
  {
    id: "value-proposition",
    label: "Test your homepage headline — does it explain what you sell and who it's for?",
    detail: "Ask someone unfamiliar with your store to read your homepage and explain what you sell. If they cannot, rewrite the headline.",
  },
  {
    id: "price-context",
    label: "Add price context — comparison, savings, instalment options",
    detail: "Show was/now pricing for discounts, mention financing if available, and compare value to alternatives.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want an expert audit of your online store?",
        text: "I audit e-commerce websites for conversion bottlenecks and implement the fixes. If your store has traffic but no sales, there is almost always a specific, fixable reason — let's find it.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        Traffic without sales is almost always a <strong>conversion problem</strong>, not a traffic problem.
        The most common causes: slow mobile pages that users leave before they load, weak product pages that
        do not give customers enough information or confidence to buy, checkout friction that creates
        unnecessary steps or surprises (especially shipping costs revealed late), and missing trust
        signals (reviews, return policies, payment security). Work through the 12 issues below to find
        which ones apply to your store.
      </p>

      <h2 id="problem-1">1. Slow mobile page speed</h2>
      <p>
        More than 70% of e-commerce traffic comes from mobile devices. A product page that takes more than
        3 seconds to load on a 4G connection loses approximately 53% of mobile visitors before they see
        anything. Run Google PageSpeed Insights on your homepage and a product page (test the mobile tab).
      </p>
      <p>
        The most common causes of slow e-commerce pages: large unoptimized product images (convert to WebP),
        too many tracking scripts and chat widgets loading on every page, video embeds that autoplay, and
        Shopify themes with bloated CSS that loads unused styles.
      </p>
      <p>
        <strong>Quick fix:</strong> Compress all product images to under 150KB each in WebP format. Remove
        any apps or scripts you are not actively using. This alone often produces a measurable improvement.
      </p>

      <h2 id="problem-2">2. Weak product pages</h2>
      <p>
        A product page needs to answer every question a customer would ask in person. If a customer cannot
        mentally picture owning the product, they will not buy it. The most common gaps:
      </p>
      <ul>
        <li>
          <strong>Insufficient images</strong> — one front-facing photo is not enough. Show all angles, the
          product in use, scale reference, close-up of materials, and packaging.
        </li>
        <li>
          <strong>No specifications</strong> — dimensions, weight, materials, compatibility, and care
          instructions must be explicit, not assumed.
        </li>
        <li>
          <strong>Copied manufacturer descriptions</strong> — customers (and Google) have likely seen
          the generic description elsewhere. Write original content that reflects how your customers
          actually use the product.
        </li>
        <li>
          <strong>No reviews</strong> — a product with zero reviews is an unknown risk. Even 5–10 genuine
          reviews dramatically increase purchase confidence.
        </li>
      </ul>

      <h2 id="problem-3">3. Checkout friction</h2>
      <p>
        Every unnecessary step between &ldquo;add to cart&rdquo; and &ldquo;order confirmed&rdquo; loses customers.
        Industry data consistently shows checkout abandonment rates of 60–80% — most of which is recoverable.
      </p>
      <ul>
        <li>
          <strong>Forced account creation</strong> — requiring registration before purchase is the
          number one checkout killer. Always offer a guest checkout option.
        </li>
        <li>
          <strong>Too many form fields</strong> — only ask for information you genuinely need. Do you
          actually need a company name, two address lines, and a fax number?
        </li>
        <li>
          <strong>Payment method gaps</strong> — in India, a store without UPI is leaving a large
          percentage of mobile buyers behind. Offer UPI, credit/debit card, net banking, and EMI options.
        </li>
        <li>
          <strong>No progress indicator</strong> — customers abandon when they cannot see how many
          steps remain. A simple step indicator (1 of 3) reduces anxiety significantly.
        </li>
      </ul>

      <h2 id="problem-4">4. Shipping surprises at checkout</h2>
      <p>
        Research by the Baymard Institute consistently shows that <strong>unexpected shipping costs are
        the leading cause of checkout abandonment</strong> — cited by nearly half of all customers who
        abandon. If you reveal ₹200 shipping only at the payment step, many customers who would have
        paid it willingly will feel deceived and leave.
      </p>
      <p>
        <strong>Fix:</strong> Show shipping cost (or a free shipping threshold) on the product page itself.
        If you offer free shipping above a threshold, display it prominently at the top of the page:
        &ldquo;Free delivery on orders above ₹499.&rdquo;
      </p>

      <h2 id="problem-5">5. Missing trust signals</h2>
      <p>
        First-time visitors to an unfamiliar store make a quick risk assessment: &ldquo;Can I trust this
        website with my payment details and expect to actually receive the product?&rdquo;
        Trust signals that reduce this friction:
      </p>
      <ul>
        <li>Customer reviews with photos on product pages</li>
        <li>SSL certificate (HTTPS) — visible padlock in the browser</li>
        <li>Payment security badges (Razorpay, PayU, Visa/Mastercard logos)</li>
        <li>Contact information (phone number or WhatsApp) visible in the header</li>
        <li>A physical address or About page that explains who you are</li>
        <li>Social media links showing an active presence</li>
      </ul>

      <h2 id="problem-6">6. No clear return policy</h2>
      <p>
        An unclear or hard-to-find return policy creates purchase hesitation. The fix is not necessarily
        making your policy more generous — it is making it more visible. Add a short summary directly
        on the product page: &ldquo;30-day returns · Easy exchange · No questions asked.&rdquo;
        Link to the full policy from this summary. Customers who can see the return policy convert at
        higher rates even if they never intend to return the product.
      </p>

      <h2 id="problem-7">7. Payment failures</h2>
      <p>
        Payment gateway errors that are not clearly communicated cause silent abandonment — the customer
        tries to pay, gets an unclear error, and leaves. Check your payment provider&apos;s dashboard for
        failed transactions. Common causes in India:
      </p>
      <ul>
        <li>Bank-side transaction limits on UPI (₹1,00,000/day by default)</li>
        <li>3D Secure card authentication timing out if your page is slow</li>
        <li>Net banking sessions expiring during a long checkout flow</li>
        <li>International cards not supported if your gateway is not configured correctly</li>
      </ul>
      <p>
        Test your checkout with multiple payment methods on real devices. Look at your payment
        gateway&apos;s error codes for patterns.
      </p>

      <h2 id="problem-8">8. Wrong traffic source</h2>
      <p>
        Traffic from the wrong audience looks identical to conversion problems but has a different
        root cause. Indicators of wrong-audience traffic:
      </p>
      <ul>
        <li>High bounce rate (above 70%) on product pages</li>
        <li>Average session duration under 30 seconds</li>
        <li>High click-through rate on ads but low add-to-cart rate</li>
        <li>Traffic primarily from keywords unrelated to purchase intent (informational, not commercial)</li>
      </ul>
      <p>
        Check your Google Analytics acquisition report. If paid traffic has a conversion rate near zero,
        your ad targeting needs refining — not your product pages.
      </p>

      <h2 id="problem-9">9. No abandoned cart recovery</h2>
      <p>
        Approximately 70% of people who add to cart do not complete a purchase in the same session.
        An abandoned cart email sequence recovers a meaningful portion of these. The setup:
      </p>
      <ol>
        <li><strong>Email 1:</strong> within 1 hour — &ldquo;You left something behind&rdquo; with product images</li>
        <li><strong>Email 2:</strong> 24 hours later — reminder, possibly with social proof or review</li>
        <li><strong>Email 3:</strong> 72 hours later — optional small incentive (free shipping, 5% off)</li>
      </ol>
      <p>
        Shopify has built-in abandoned checkout emails. For custom stores, Klaviyo and Brevo (formerly
        Sendinblue) offer this functionality with Indian pricing.
      </p>

      <h2 id="problem-10">10. Poor mobile UX beyond speed</h2>
      <p>
        Speed is one part of mobile experience. Other common mobile UX failures:
      </p>
      <ul>
        <li>Add-to-cart button below the fold — users should not scroll to find the buy action</li>
        <li>Tiny tap targets on variant selectors (size, colour) — buttons under 44px cause mis-taps</li>
        <li>Zoom-in required to read product descriptions — text too small</li>
        <li>Pop-ups that cannot be dismissed easily on a phone</li>
        <li>Pinch-zoom disabled by viewport meta tag</li>
      </ul>

      <h2 id="problem-11">11. Unclear value proposition</h2>
      <p>
        If a first-time visitor cannot understand within 5 seconds what you sell and why they should buy
        from you rather than Amazon, you will lose them. Test this by asking someone unfamiliar with your
        store to read your homepage and explain what you sell. If they hesitate, your headline and hero
        section need work.
      </p>
      <p>
        The value proposition should answer: <em>What do I get? Who is it for? Why you and not a
        competitor?</em>
      </p>

      <h2 id="problem-12">12. Pricing out of context</h2>
      <p>
        Customers do not evaluate prices in isolation — they evaluate them relative to a reference point.
        If your price appears high with no context, customers hesitate even if it is fair. Techniques
        that work:
      </p>
      <ul>
        <li>Show the original price crossed out next to the sale price</li>
        <li>Display the cost per use (&ldquo;Only ₹50 per use&rdquo;)</li>
        <li>Offer EMI options for higher-priced items</li>
        <li>Highlight what is included (&ldquo;Includes 1-year warranty and free installation&rdquo;)</li>
      </ul>

      <h2 id="checklist">12-point audit checklist</h2>
      <ArticleChecklist
        title="Online Store Conversion Audit"
        items={checklistItems}
      />

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>What is a good conversion rate for an online store in India?</h3>
      <p>
        Industry benchmarks vary by product category. A commonly cited average is 1–3% for Indian e-commerce
        stores — meaning 1 to 3 purchases per 100 visitors. Fashion and accessories tend to be at the
        lower end; B2B and high-intent service purchases can be higher. If your conversion rate is below
        0.5%, there is almost certainly a specific fixable problem. Above 3% is strong.
      </p>

      <h3>Which problem should I fix first?</h3>
      <p>
        Start with mobile page speed and product page quality — they affect the largest number of visitors.
        Then address checkout friction. Payment failures and abandoned cart recovery are also high-ROI
        because they recover customers who were already willing to buy.
      </p>

      <p>
        For the AI search and product discoverability context, read{" "}
        <Link href="/blog/product-page-seo-ai-shopping">how to optimize product pages for Google and AI shopping</Link>.
        For the Shopify vs custom decision that affects which fixes are available to you, see the{" "}
        <Link href="/blog/shopify-vs-custom-ecommerce-website">Shopify vs custom e-commerce comparison</Link>.
      </p>
    </ArticleLayout>
  );
}
