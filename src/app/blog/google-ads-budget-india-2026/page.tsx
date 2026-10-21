import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { BudgetCalculator, ComparisonTable } from "@/components/blog/ArticleWidgets";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "google-ads-budget-india-2026";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "Google Ads cost India 2026",
    "Google Ads budget India small business",
    "cost per click India Google Ads",
    "Google Ads budget small business",
    "how much to spend on Google Ads India",
    "Google Ads management fee India",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "ad-spend-vs-fees", label: "Ad spend vs management fees" },
  { id: "cost-factors", label: "What affects your cost per click" },
  { id: "cpc-examples", label: "Typical CPC ranges for Indian businesses" },
  { id: "calculator", label: "Budget and lead-cost calculator" },
  { id: "sample-budget", label: "Sample monthly budget breakdown" },
  { id: "conversion-tracking", label: "Setting up conversion tracking" },
  { id: "faqs", label: "Frequently asked questions" },
];

const cpcRows = [
  {
    label: "Legal services",
    a: "₹40 – ₹150",
    b: "High competition, high intent",
  },
  {
    label: "Web development / IT",
    a: "₹20 – ₹80",
    b: "Moderate competition",
  },
  {
    label: "Home renovation / interiors",
    a: "₹25 – ₹100",
    b: "High intent, seasonal demand",
  },
  {
    label: "Photography / events",
    a: "₹10 – ₹45",
    b: "Lower competition",
  },
  {
    label: "Education / coaching",
    a: "₹15 – ₹60",
    b: "Growing competition",
  },
  {
    label: "Restaurant / food",
    a: "₹5 – ₹25",
    b: "Very local, lower CPC",
  },
  {
    label: "E-commerce (retail)",
    a: "₹8 – ₹40",
    b: "Varies widely by product",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Planning a Google Ads campaign?",
        text: "Tell me your business type, location, and what you want customers to do. I'll review your goals and landing page and suggest a realistic starting budget.",
        whatsappMessage: whatsappMessages.digitalMarketing,
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        There is no single correct Google Ads budget. A sensible starting point for most Indian small
        businesses is <strong>₹15,000–₹30,000 per month in ad spend</strong>, plus a management fee if
        you hire someone to run the campaign. The right budget is calculated from your own numbers:
        how much a customer is worth to you, what conversion rate you expect, and how many leads you
        need each month. The calculator below will walk you through this.
      </p>

      <h2 id="ad-spend-vs-fees">Ad spend vs management fees: understanding the difference</h2>
      <p>
        When you run Google Ads, there are two separate costs that are often confused:
      </p>
      <ul>
        <li>
          <strong>Ad spend (media budget)</strong> — money paid directly to Google for your clicks and
          impressions. Every rupee here goes to Google.
        </li>
        <li>
          <strong>Management fee</strong> — money paid to a freelancer or agency to set up, monitor and
          optimize your campaigns. This is separate from what Google charges.
        </li>
      </ul>
      <p>
        A common structure in India for small business campaigns: ₹15,000–₹25,000/month to Google
        (ad spend) + ₹5,000–₹15,000/month management fee to a freelancer or agency. The management fee
        often varies based on the total ad spend managed.
      </p>
      <p>
        <strong>Important:</strong> be wary of any provider who charges a percentage of your ad spend
        as their fee, which gives them an incentive to increase your spending rather than your results.
        Look for a flat monthly management fee aligned with your goals.
      </p>

      <h2 id="cost-factors">What affects your cost per click</h2>
      <p>
        Google Ads uses an auction system. Every time someone searches, advertisers bid for the
        placement. Your actual cost per click (CPC) depends on:
      </p>
      <ul>
        <li>
          <strong>Keyword competition</strong> — the more businesses bidding on a keyword, the higher
          the cost. "Lawyer in Mumbai" is far more expensive than "event photographer in Surat."
        </li>
        <li>
          <strong>Your Quality Score</strong> — Google rewards relevant ads and landing pages with lower
          CPCs. A well-written ad matched to a focused landing page will cost less per click than a
          generic ad sending visitors to a homepage.
        </li>
        <li>
          <strong>Location targeting</strong> — targeting a small city like Surat typically costs less
          per click than targeting Mumbai or Delhi, where more advertisers compete.
        </li>
        <li>
          <strong>Bidding strategy</strong> — manual bidding vs automated strategies (like Target CPA
          or Maximize Conversions) affect how Google spends your budget.
        </li>
        <li>
          <strong>Time of day and device</strong> — clicks during business hours or from mobile devices
          in certain categories can cost more.
        </li>
        <li>
          <strong>Ad rank</strong> — higher ad positions cost more per click. Position 1 is not always
          the most cost-effective choice.
        </li>
      </ul>

      <h2 id="cpc-examples">Typical CPC ranges for Indian businesses</h2>
      <p>
        The following are illustrative cost-per-click ranges for common business categories in India in
        2026. Actual CPCs vary by city, competition, and campaign quality.
      </p>
      <ComparisonTable
        colA="Typical CPC (India)"
        colB="Notes"
        rows={cpcRows}
        note="These are illustrative market estimates only. Your actual CPC will depend on your specific keywords, targeting, landing page quality and bidding strategy. Verify current rates using Google Keyword Planner."
      />

      <h2 id="calculator">Budget and lead-cost calculator</h2>
      <p>
        Enter your numbers to estimate how many leads you can expect from a given monthly budget.
        These are illustrative calculations based on your inputs — actual results will differ.
      </p>
      <BudgetCalculator
        title="Monthly Ad Budget Calculator"
        computeType="adsBudget"
        fields={[
          {
            id: "budget",
            label: "Monthly ad spend (₹)",
            min: 5000,
            max: 100000,
            step: 1000,
            defaultValue: 20000,
            prefix: "₹",
          },
          {
            id: "cpc",
            label: "Estimated cost per click (₹)",
            min: 5,
            max: 150,
            step: 5,
            defaultValue: 30,
            prefix: "₹",
          },
          {
            id: "convRate",
            label: "Landing page conversion rate (%)",
            min: 1,
            max: 20,
            step: 1,
            defaultValue: 5,
            suffix: "%",
          },
        ]}
        resultLabel="Estimated leads per month"
        note="Illustrative estimate. Actual results depend on ad quality, keyword targeting, landing page and competition. A 5% conversion rate is optimistic for a new campaign — 2–3% is a more conservative starting assumption."
      />

      <h2 id="sample-budget">Sample monthly budget breakdown</h2>
      <p>
        The following is a hypothetical example for a web development freelancer in Surat running
        a Google Ads campaign. All figures are illustrative.
      </p>
      <ul>
        <li>
          <strong>Monthly ad spend:</strong> ₹20,000
        </li>
        <li>
          <strong>Target keywords:</strong> "website developer Surat," "freelance web developer Gujarat,"
          "website development cost India"
        </li>
        <li>
          <strong>Estimated CPC:</strong> ₹25–₹50
        </li>
        <li>
          <strong>Estimated clicks:</strong> 400–800 per month
        </li>
        <li>
          <strong>Landing page conversion rate:</strong> 3–5%
        </li>
        <li>
          <strong>Estimated leads:</strong> 12–40 per month
        </li>
        <li>
          <strong>Estimated cost per lead:</strong> ₹500–₹1,700
        </li>
      </ul>
      <p>
        If a website project is worth ₹30,000–₹60,000 and you convert 1 in 5 leads, the value of
        each lead is ₹6,000–₹12,000. A cost per lead of ₹500–₹1,700 is highly profitable at that
        conversion rate. This kind of calculation should be done for your own business before
        committing a budget.
      </p>
      <p>
        For a deeper look at cost per lead calculations, see the{" "}
        <Link href="/blog/google-ads-cost-per-lead-india">
          Google Ads cost per lead guide
        </Link>.
      </p>

      <h2 id="conversion-tracking">Setting up conversion tracking: why it is non-negotiable</h2>
      <p>
        If you cannot measure how many leads your ads produce, you cannot tell which keywords or ads
        are working. Conversion tracking is the most important thing to set up before spending a rupee
        on Google Ads.
      </p>
      <ul>
        <li>
          <strong>Form submission tracking</strong> — fire a Google Ads conversion event every time
          your contact form is successfully submitted.
        </li>
        <li>
          <strong>Phone call tracking</strong> — Google Ads provides a forwarding number that tracks
          calls from your ads without changing your real phone number.
        </li>
        <li>
          <strong>WhatsApp click tracking</strong> — if your ads send traffic to a WhatsApp link, track
          clicks on that link as a conversion event.
        </li>
        <li>
          <strong>Avoid wasting budget on zero-conversion campaigns</strong> — without tracking, you
          will never know which ad groups are producing leads and which are burning budget.
        </li>
      </ul>
      <p>
        See the{" "}
        <Link href="/blog/track-leads-google-ads-website-whatsapp">
          complete lead tracking guide
        </Link>{" "}
        for step-by-step setup instructions.
      </p>

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>What is the minimum budget to run Google Ads in India?</h3>
      <p>
        Google has no minimum budget requirement. However, budgets under ₹5,000/month often produce
        too few clicks to generate useful data or consistent leads. ₹10,000–₹15,000/month is a more
        realistic minimum for a small business to learn what works before scaling up.
      </p>

      <h3>Should I run Google Ads before I have a good website?</h3>
      <p>
        No. Sending paid traffic to a slow, unclear or unconvincing website wastes your ad budget.
        Fix your landing page first. A well-designed landing page can double the number of leads from
        the same ad spend. See the{" "}
        <Link href="/blog/landing-page-vs-full-website-lead-generation">
          landing page vs website guide
        </Link>{" "}
        for what a good landing page needs.
      </p>

      <h3>How long before Google Ads starts generating leads?</h3>
      <p>
        Search ads can start driving traffic on day one. However, it usually takes 2–4 weeks for the
        algorithm to optimize delivery and for you to gather enough conversion data to make informed
        adjustments. Expect the first month to be a learning period with lower efficiency than
        months two and three.
      </p>

      <h3>Can I run Google Ads myself without a professional?</h3>
      <p>
        Yes, but the learning curve is steep. Common mistakes — broad match keywords with no negatives,
        sending traffic to a homepage, ignoring Quality Score, not setting up conversion tracking —
        can burn a significant budget before you realize the campaign is not working. If your monthly
        ad spend is ₹20,000+, professional management typically pays for itself through better results.
      </p>

      <h3>What is the difference between Google Ads and Meta Ads for lead generation?</h3>
      <p>
        Google Ads reaches people who are actively searching for your service. Meta Ads (Facebook and
        Instagram) reach people who are not searching but may be interested. Google typically converts
        better for high-intent local services. See the{" "}
        <Link href="/blog/google-ads-vs-meta-ads-local-business">
          Google Ads vs Meta Ads comparison
        </Link>{" "}
        for a full breakdown.
      </p>

      <p>
        Ready to run a Google Ads campaign that generates real leads? Visit the{" "}
        <Link href="/services/digital-marketing">Digital Marketing service page</Link> to see how I
        structure campaigns for Indian small businesses.
      </p>
    </ArticleLayout>
  );
}
