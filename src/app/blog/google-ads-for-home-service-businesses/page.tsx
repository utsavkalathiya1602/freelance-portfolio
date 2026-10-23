import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleFAQ } from "@/components/blog/ArticleFAQ";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "google-ads-for-home-service-businesses";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "Google Ads for roofing companies",
    "Google Ads for HVAC contractors",
    "Google Ads for plumbers",
    "Google Ads for electricians",
    "Local Services Ads vs Google Ads",
    "home services PPC",
  ],
});

const faqs = [
  {
    question: "How much should a roofing or HVAC company spend on Google Ads?",
    answer:
      "Work backwards from your numbers: average job profit, how many leads turn into booked jobs, and what you can afford to pay per lead. Click costs for home services vary hugely by city, season and trade, so check Keyword Planner for your own area rather than relying on national averages.",
  },
  {
    question: "Are Local Services Ads better than Search ads?",
    answer:
      "Neither is always better. Local Services Ads (pay per lead) show a screened badge and are simple to run, but give you less control over keywords and messaging. Search ads give full control and can send people to a landing page. Many home service businesses use both where Local Services Ads are available.",
  },
  {
    question: "Should I target “near me” keywords?",
    answer:
      "You usually don’t need to add “near me” to every keyword — Google uses the searcher’s location. Focus on service and problem keywords, set your location targeting to your real service area, and let match types and the search terms report do the rest.",
  },
  {
    question: "Why am I getting calls for jobs I don’t do?",
    answer:
      "Usually broad keywords and missing negatives. Review the search terms report weekly and add negatives for services you don’t offer, DIY searches, jobs and training. Clear ad copy that names your services and area also filters out wrong-fit calls.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Run a roofing, HVAC, plumbing or electrical business?",
        text: "Tell me your trade, service area and average job value. I will tell you honestly whether Google Ads is likely to work for you, and how I would set it up.",
        whatsappMessage: whatsappMessages.digitalMarketing,
      }}
    >
      <h2>Quick answer</h2>
      <p>
        For roofers, HVAC companies, plumbers and electricians, Google Ads works best when it captures{" "}
        <strong>urgent, high-intent searches</strong> (&ldquo;emergency plumber&rdquo;, &ldquo;AC not cooling&rdquo;,
        &ldquo;roof leak repair&rdquo;) within your <strong>real service area</strong>, sends them to a page with a
        prominent phone number, and measures <strong>booked jobs, not just calls</strong>. Most home service
        businesses should combine a tightly targeted Search campaign with Local Services Ads (pay-per-lead) where
        those are available in their country and trade.
      </p>

      <ArticleToC
        items={[
          { id: "options", label: "Search ads vs Local Services Ads" },
          { id: "keywords", label: "Keywords that bring jobs, not tyre-kickers" },
          { id: "targeting", label: "Service area, schedule and devices" },
          { id: "landing", label: "What your landing page needs" },
          { id: "tracking", label: "Track calls and booked jobs" },
          { id: "budget", label: "Setting a budget from your own numbers" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <h2 id="options">Search ads vs Local Services Ads</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table>
          <thead>
            <tr>
              <th scope="col">Factor</th>
              <th scope="col">Search ads</th>
              <th scope="col">Local Services Ads</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>You pay for</td>
              <td>Clicks</td>
              <td>Leads (calls and messages)</td>
            </tr>
            <tr>
              <td>Control over keywords and ad text</td>
              <td>Full</td>
              <td>Limited — based on your services and profile</td>
            </tr>
            <tr>
              <td>Where people land</td>
              <td>Your landing page or website</td>
              <td>Your Local Services profile, or a call/message</td>
            </tr>
            <tr>
              <td>Trust badge</td>
              <td>No</td>
              <td>Google Screened / verified badge, where available</td>
            </tr>
            <tr>
              <td>Availability</td>
              <td>Most countries</td>
              <td>Selected countries and categories only</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        According to{" "}
        <a href="https://support.google.com/localservices/answer/7195435?hl=en">Google’s Local Services help</a>,
        advertisers are charged for valid leads rather than clicks, and lead prices vary by location and job type.
        Screening can include licence, insurance and background checks, depending on the category and region.
      </p>
      <p>
        <strong>Note for 2026:</strong> Google has announced it is{" "}
        <a href="https://support.google.com/google-ads/answer/17213585?hl=en">
          moving Local Services Ads into Performance Max campaigns with pay-per-lead goals
        </a>
        , starting with selected US home and storefront services. Google says the pay-per-lead model itself stays the
        same, but the setup and reporting change — check the current page for your country and category.
      </p>

      <h2 id="keywords">Keywords that bring jobs, not tyre-kickers</h2>
      <p>Group keywords by job type, so each ad and landing page matches what the person needs:</p>
      <ul>
        <li>
          <strong>Emergency:</strong> &ldquo;emergency plumber&rdquo;, &ldquo;burst pipe repair&rdquo;, &ldquo;24 hour
          electrician&rdquo;, &ldquo;furnace not working&rdquo;.
        </li>
        <li>
          <strong>Repair:</strong> &ldquo;roof leak repair&rdquo;, &ldquo;AC repair&rdquo;, &ldquo;boiler
          repair&rdquo; (UK), &ldquo;hot water system repair&rdquo; (Australia).
        </li>
        <li>
          <strong>Replacement and installation (higher value):</strong> &ldquo;roof replacement&rdquo;, &ldquo;heat
          pump installation&rdquo;, &ldquo;EV charger installation&rdquo;, &ldquo;rewiring a house&rdquo;.
        </li>
      </ul>
      <p>
        Use the words your customers use in your country — a UK homeowner searches for a &ldquo;boiler&rdquo;, a US
        homeowner for a &ldquo;furnace&rdquo; or &ldquo;water heater&rdquo;, an Australian for an &ldquo;aircon&rdquo;
        service.
      </p>
      <p>Start a negative keyword list on day one:</p>
      <ul>
        <li>Jobs and training: &ldquo;jobs&rdquo;, &ldquo;salary&rdquo;, &ldquo;apprenticeship&rdquo;, &ldquo;course&rdquo;</li>
        <li>DIY: &ldquo;how to&rdquo;, &ldquo;diy&rdquo;, &ldquo;youtube&rdquo;, &ldquo;parts&rdquo;, &ldquo;wholesale&rdquo;</li>
        <li>Services and areas you don’t cover</li>
      </ul>
      <p>
        Review the search terms report weekly for the first month. It is the fastest way to stop paying for wrong-fit
        calls — and a common source of the junk leads covered in{" "}
        <Link href="/blog/google-ads-spam-leads">fake and spam leads from Google Ads</Link>.
      </p>

      <h2 id="targeting">Service area, schedule and devices</h2>
      <ul>
        <li>
          <strong>Location:</strong> target the ZIP codes, postcodes or radius you actually serve, and choose to reach
          people <em>in</em> those locations rather than people merely interested in them.
        </li>
        <li>
          <strong>Ad schedule:</strong> if you can’t answer calls at night, either don’t run call-focused ads then, or
          make sure someone (or an answering service) picks up. A missed emergency call is a wasted click.
        </li>
        <li>
          <strong>Call assets:</strong> add your phone number to ads so mobile users can call directly.
        </li>
        <li>
          <strong>Separate campaigns</strong> for emergency and planned work let you set different budgets and
          schedules.
        </li>
      </ul>

      <h2 id="landing">What your landing page needs</h2>
      <ol>
        <li>A headline that repeats the service and area: &ldquo;Emergency Plumber in Denver — On Site in 60 Minutes&rdquo;.</li>
        <li>A click-to-call button at the top on mobile, plus a short form.</li>
        <li>Licences, insurance and certifications relevant to your country and trade.</li>
        <li>Real reviews and photos of real jobs — never stock photos of someone else’s work.</li>
        <li>Service area, opening hours and whether you charge a call-out fee.</li>
      </ol>
      <p>
        Once the page works, improve it with the methods in{" "}
        <Link href="/blog/landing-page-ab-testing-small-budget">landing page A/B testing on a small budget</Link>.
      </p>

      <h2 id="tracking">Track calls and booked jobs</h2>
      <p>
        Most home service leads arrive by phone, so call tracking is essential. Google Ads can track calls from ads
        and calls from your website using a Google forwarding number — see the{" "}
        <a href="https://support.google.com/google-ads/answer/6095883?hl=en">website call tracking setup guide</a>.
        Set a minimum call length so short wrong numbers don’t count.
      </p>
      <p>
        Then go one step further: record which calls became <strong>booked jobs</strong> and their value, and import
        them into Google Ads as offline conversions. Bidding then learns from paying customers instead of every call.
        For the full setup, see{" "}
        <Link href="/blog/track-leads-google-ads-website-whatsapp">how to track every lead from Google Ads</Link>.
      </p>

      <h2 id="budget">Setting a budget from your own numbers</h2>
      <p>
        <em>Hypothetical example — replace every number with your own.</em>
      </p>
      <ul>
        <li>Average profit per repair job: 400 (in your currency)</li>
        <li>Share of leads that become booked jobs: 1 in 3</li>
        <li>Most you would spend to win a job: 120 → so the most you can pay per lead is about 40</li>
        <li>Your expected cost per click (from Keyword Planner for your area): 8</li>
        <li>Landing page conversion rate you are seeing: 10% → cost per lead ≈ 8 ÷ 0.10 = 80</li>
      </ul>
      <p>
        In this example, the cost per lead (80) is double what the business can afford (40). The fix is not a bigger
        budget — it is a better-converting page, tighter keywords, higher-value job types, or a different channel. Run
        this arithmetic before spending, and revisit it monthly with real data. The{" "}
        <Link href="/blog/google-ads-cost-per-lead-india">cost per lead guide</Link> explains the factors behind these
        numbers in more detail.
      </p>

      <ArticleFAQ faqs={faqs} />

      <p>
        For Google Ads setup and management, see the{" "}
        <Link href="/services/digital-marketing">Digital Marketing service page</Link>.
      </p>
    </ArticleLayout>
  );
}
