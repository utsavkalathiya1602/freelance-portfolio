import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "google-ads-budget-small-business-india";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "Google Ads budget India",
    "how much to spend on Google Ads small business",
    "Google Ads cost India",
    "Google Ads daily budget",
    "Google Ads for small business Surat",
  ],
});

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want a realistic Google Ads budget for your business?",
        text: "Share your service, area and average job value. I’ll help you work out a sensible starting budget and what results are realistic to expect.",
        whatsappMessage: whatsappMessages.digitalMarketing,
      }}
    >
      <h2>Why there is no single right number</h2>
      <p>
        Google Ads has no fixed price. Every click is priced in an auction, and the cost depends on your industry, your
        location, how many competitors bid for the same searches and how relevant your ads and landing page are. A
        locksmith in a small town and a property developer in a big city can pay very different amounts for a single
        click.
      </p>
      <p>
        So instead of asking &ldquo;what does everyone spend?&rdquo;, it’s more useful to ask: &ldquo;how much can I
        afford to pay for one new customer?&rdquo; You can answer that from numbers you already know.
      </p>

      <h2>Step 1: Work out what a customer is worth</h2>
      <p>
        Start with the average profit from one new customer — not the price, the profit. If a customer usually comes back
        or refers others, you can include some of that future value, but be conservative.
      </p>

      <h2>Step 2: Work out how many enquiries become customers</h2>
      <p>
        Look at your recent enquiries. Out of every 10 calls or messages, how many became paying customers? This is your
        close rate. If you don’t track it yet, start now — it’s the most useful number in your marketing.
      </p>

      <h2>Step 3: Calculate what you can afford per enquiry</h2>
      <p>The maximum you can afford to pay for one enquiry is roughly:</p>
      <p>
        <strong>Profit per customer × close rate = affordable cost per enquiry</strong>
      </p>
      <p>
        <em>Example (illustrative numbers only):</em> if one customer brings ₹3,000 profit and you convert 1 in 4
        enquiries, you can afford up to ₹750 per enquiry before ads stop paying for themselves. Aim to pay well below this
        so the ads are actually profitable.
      </p>

      <h2>Step 4: Estimate the cost per click in your market</h2>
      <p>
        Google’s free <strong>Keyword Planner</strong> (inside your Google Ads account) shows estimated bid ranges for
        searches in your area. Look up the searches your customers would type — for example &ldquo;interior designer
        Surat&rdquo; — and note the range. These are estimates, not promises, but they give you a starting point.
      </p>

      <h2>Step 5: Turn it into a monthly budget</h2>
      <p>
        You also need to estimate how many visitors become enquiries. This depends heavily on your landing page, your
        offer and your market, so treat any first estimate as a guess to be replaced by real data.
      </p>
      <p>
        <em>Continuing the example:</em> if clicks cost around ₹25 and about 1 in 15 visitors enquires, each enquiry costs
        roughly ₹375. If you want 20 enquiries a month, that’s about ₹7,500 in ad spend. Your own numbers will differ — the
        method is what matters.
      </p>

      <h2>Things that catch people out</h2>
      <ul>
        <li>
          <strong>Daily budgets are averages.</strong> Google may spend more than your daily budget on busy days and less
          on quiet ones. Over a month, it won’t charge more than your daily budget multiplied by the average number of days
          in a month (about 30.4).
        </li>
        <li>
          <strong>GST is added on top.</strong> In India, tax is charged on Google Ads spend in addition to your budget.
          Check your invoices so you plan for the full amount.
        </li>
        <li>
          <strong>Ad spend is separate from management fees.</strong> Money you pay Google goes to Google. If someone
          manages the account for you, their fee is a separate cost.
        </li>
        <li>
          <strong>Too small a budget teaches you nothing.</strong> If the budget only buys a handful of clicks a month,
          you won’t get enough data to know whether the ads work.
        </li>
      </ul>

      <h2>How to start sensibly</h2>
      <ol>
        <li>Start with one focused campaign for your most profitable service, in the area you actually serve.</li>
        <li>
          Send clicks to a page that matches the ad — not just your homepage. See{" "}
          <Link href="/blog/landing-page-vs-website">Landing Page vs Website</Link>.
        </li>
        <li>
          Set up <Link href="/blog/track-website-and-ad-enquiries">enquiry tracking</Link> before spending, so every
          rupee can be judged on real calls and messages.
        </li>
        <li>Run it for at least a few weeks before judging, then adjust based on cost per enquiry — not cost per click.</li>
        <li>Increase the budget only for campaigns that already bring enquiries at a cost you can afford.</li>
      </ol>

      <h2>The honest summary</h2>
      <p>
        A sensible Google Ads budget comes from your own numbers: what a customer is worth, how often enquiries become
        customers, and what clicks cost in your area. Start small enough to be comfortable, large enough to learn from,
        and track enquiries from day one. If you’d like help planning it, see the{" "}
        <Link href="/services/digital-marketing">Digital Marketing service page</Link>.
      </p>
    </ArticleLayout>
  );
}
