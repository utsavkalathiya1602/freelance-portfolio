import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleFAQ } from "@/components/blog/ArticleFAQ";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "landing-page-ab-testing-small-budget";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "landing page A/B testing",
    "A/B testing for landing page optimization",
    "landing page A/B testing tool",
    "Google Ads experiments landing page",
    "how long to run an A/B test",
  ],
});

const faqs = [
  {
    question: "Is Google Optimize still available for A/B testing?",
    answer:
      "No. Google Optimize and Optimize 360 were discontinued on 30 September 2023. Alternatives include Google Ads experiments for ad traffic, A/B testing features built into landing page builders, and dedicated testing tools.",
  },
  {
    question: "Can I test two landing pages by switching them week by week?",
    answer:
      "It is better than nothing, but weekly comparisons are distorted by seasonality, competitor activity, holidays and changes in ad delivery. Running both versions at the same time with a random split is much more reliable.",
  },
  {
    question: "How many conversions do I need before trusting a result?",
    answer:
      "There is no single number — it depends on how big the difference between versions is. Small differences need far more data to detect. As a practical rule of thumb, be cautious about calling a winner with only a handful of conversions per version, and use a significance calculator rather than eyeballing the numbers.",
  },
  {
    question: "Should I test the headline or the button colour first?",
    answer:
      "The headline and offer. On low-traffic pages, only large changes produce differences you can detect. Button colour tests rarely move results enough to measure on a small budget.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want a landing page that is built to be tested?",
        text: "I build landing pages for Google Ads and Meta Ads campaigns with tracking set up from day one, so you can compare versions on real enquiries.",
        whatsappMessage: whatsappMessages.digitalMarketing,
      }}
    >
      <h2>Quick answer</h2>
      <p>
        A/B testing shows two versions of a page to similar visitors at the same time and compares how many of each
        become leads. On a small budget, the challenge is volume: with only a few leads a week, small changes take
        months to measure. So <strong>test big, meaningful differences</strong> — a different offer, headline or page
        structure — <strong>one at a time</strong>, split traffic randomly, and judge results on{" "}
        <strong>real leads, not clicks</strong>. If you get very few conversions, fix the obvious problems first and
        test later.
      </p>

      <ArticleToC
        items={[
          { id: "before", label: "Before you test: three prerequisites" },
          { id: "what-to-test", label: "What to test first on a small budget" },
          { id: "how", label: "How to split traffic" },
          { id: "how-long", label: "How long to run a test" },
          { id: "worked-example", label: "A worked example" },
          { id: "mistakes", label: "Common mistakes" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <h2 id="before">Before you test: three prerequisites</h2>
      <ol>
        <li>
          <strong>Conversion tracking works.</strong> If form submissions, calls or WhatsApp clicks aren’t tracked
          accurately, a test result is meaningless. If numbers look wrong, start with the{" "}
          <Link href="/blog/google-ads-conversion-tracking-not-working">conversion tracking troubleshooting guide</Link>.
        </li>
        <li>
          <strong>The page has no obvious problems.</strong> A page that is slow on mobile, has a broken form or no
          clear call to action doesn’t need a test — it needs fixing. See{" "}
          <Link href="/blog/website-traffic-no-leads">why a website gets traffic but no leads</Link>.
        </li>
        <li>
          <strong>You have a written hypothesis.</strong> For example: &ldquo;Showing a starting price in the headline
          will increase quote requests from people who are ready to buy.&rdquo; It forces you to test one idea and
          to decide in advance what &ldquo;better&rdquo; means.
        </li>
      </ol>

      <h2 id="what-to-test">What to test first on a small budget</h2>
      <p>Ranked by how likely they are to produce a difference you can actually measure:</p>
      <ol>
        <li>
          <strong>The offer</strong> — free inspection vs free quote, fixed price vs &ldquo;from&rdquo; price, a
          guarantee vs none.
        </li>
        <li>
          <strong>The headline</strong> — matching the search term closely vs a benefit-led message.
        </li>
        <li>
          <strong>The contact method</strong> — form first vs call or WhatsApp first; a short form vs a multi-step
          form.
        </li>
        <li>
          <strong>Page length and proof</strong> — a short page vs a longer page with reviews, photos of real work
          and FAQs.
        </li>
      </ol>
      <p>
        Leave button colours, small wording changes and image swaps until you have much more traffic. On a small
        budget, they rarely produce a measurable difference.
      </p>

      <h2 id="how">How to split traffic</h2>
      <h3>Option 1: Google Ads experiments (for ad traffic)</h3>
      <p>
        Google Ads lets you create a{" "}
        <a href="https://support.google.com/google-ads/answer/6261395?hl=en">custom experiment</a> from a Search
        campaign: you copy the campaign, change the final URL to your new page, and split traffic between the
        original and the experiment. Google’s documentation describes a <strong>cookie-based split</strong>, which
        keeps each person on one version however often they search, and a search-based split, where the same person
        can see both. For landing page tests, the cookie-based split is usually the cleaner choice.
      </p>
      <h3>Option 2: Your landing page tool or website</h3>
      <p>
        Many landing page builders include A/B testing. On a custom site, your developer can randomly assign visitors
        to version A or B and record the version alongside each conversion. Make sure each visitor keeps seeing the
        same version on return visits.
      </p>
      <h3>Option 3: Sequential testing (last resort)</h3>
      <p>
        If you can’t split traffic, run version A for a period and then version B for the same length of time. This
        is much weaker evidence, because anything else that changed — season, competitors, budget — affects the
        result. Avoid holiday periods and don’t change anything else during the test.
      </p>

      <h2 id="how-long">How long to run a test</h2>
      <ul>
        <li>
          <strong>Run full weeks.</strong> Enquiries often differ between weekdays and weekends, so run at least two
          complete weeks.
        </li>
        <li>
          <strong>Decide the end point in advance.</strong> Stopping the moment one version looks ahead is the most
          common way small tests produce false winners.
        </li>
        <li>
          <strong>Use a significance calculator.</strong> Free A/B test calculators tell you whether a difference is
          likely to be real. Google Ads experiments report this for you.
        </li>
        <li>
          <strong>Accept &ldquo;no clear winner&rdquo;.</strong> It is a valid result. Keep the simpler or cheaper
          version and test a bigger idea next.
        </li>
      </ul>

      <h2 id="worked-example">A worked example</h2>
      <p>
        <em>This is a hypothetical example to show the arithmetic, not real client data.</em>
      </p>
      <p>
        A plumbing company sends about 600 ad clicks a month to its landing page. Version A has a long form; version B
        has a phone button at the top and a three-field form. After four weeks with a 50/50 cookie split:
      </p>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table>
          <thead>
            <tr>
              <th scope="col">Version</th>
              <th scope="col">Visitors</th>
              <th scope="col">Leads</th>
              <th scope="col">Conversion rate</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>A — long form</td>
              <td>300</td>
              <td>12</td>
              <td>4.0%</td>
            </tr>
            <tr>
              <td>B — call button + short form</td>
              <td>300</td>
              <td>21</td>
              <td>7.0%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        B looks much better, but a standard two-proportion significance test on these numbers gives a p-value of
        roughly 0.1 — not significant at the usual 95% confidence level. Nine extra leads could still be chance.
        The honest next step is to keep the test running, or to adopt B while recognising the evidence is suggestive
        rather than conclusive — and then check lead <em>quality</em>: did B’s extra leads turn into booked jobs?
      </p>

      <h2 id="mistakes">Common mistakes</h2>
      <ul>
        <li>Testing several changes at once, so you can’t tell which one made the difference.</li>
        <li>Judging on clicks or time on page instead of real leads.</li>
        <li>Changing budget, bids or ads in the middle of the test.</li>
        <li>Counting spam form submissions as conversions.</li>
        <li>Declaring a winner after a few days.</li>
      </ul>
      <p>
        If you are still deciding between a dedicated landing page and your main website, read{" "}
        <Link href="/blog/landing-page-vs-full-website-lead-generation">landing page vs full website</Link> first.
      </p>

      <ArticleFAQ faqs={faqs} />

      <p>
        For landing pages and campaign setup, see the{" "}
        <Link href="/services/digital-marketing">Digital Marketing service page</Link>.
      </p>
    </ArticleLayout>
  );
}
