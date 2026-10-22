import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ComparisonTable } from "@/components/blog/ArticleWidgets";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "landing-page-vs-full-website-lead-generation";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "landing page vs website India",
    "lead generation landing page India",
    "Google Ads landing page India",
    "landing page design India",
    "landing page vs full website",
    "best option for lead generation website",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "the-difference", label: "The key difference between a landing page and a website" },
  { id: "when-landing-page", label: "When a landing page is the right choice" },
  { id: "when-full-website", label: "When you need a full website" },
  { id: "comparison", label: "Side-by-side comparison" },
  { id: "landing-page-anatomy", label: "What every high-converting landing page needs" },
  { id: "common-combo", label: "The common combination: both together" },
  { id: "testing", label: "How to test conversion performance" },
  { id: "faqs", label: "Frequently asked questions" },
];

const comparisonRows = [
  {
    label: "Primary purpose",
    a: "Drive one specific action from one campaign",
    b: "Present your full business and build trust over time",
  },
  {
    label: "Number of pages",
    a: "1",
    b: "5–20+",
  },
  {
    label: "Navigation",
    a: "None or minimal — every link is a distraction",
    b: "Full menu across all sections",
  },
  {
    label: "Traffic source",
    a: "Paid ads, email campaigns, QR codes",
    b: "Search, social, referrals, direct visits",
  },
  {
    label: "SEO potential",
    a: "Limited — not designed to rank for multiple keywords",
    b: "High — multiple pages can rank for different searches",
  },
  {
    label: "Time to build",
    a: "1–5 days",
    b: "2–8 weeks",
  },
  {
    label: "Cost to build",
    a: "₹6,000 – ₹20,000",
    b: "₹25,000 – ₹1,50,000+",
  },
  {
    label: "Best for",
    a: "Google Ads, Meta Ads, specific campaigns",
    b: "Long-term organic growth and multi-service businesses",
  },
];

const landingPageSections = [
  {
    label: "Headline matches the ad",
    a: "\"Website design for small businesses in Surat\"",
    b: "If your ad says 'affordable websites,' the page must say 'affordable websites,' not 'digital solutions.'",
  },
  {
    label: "Sub-headline explains the offer",
    a: "\"Fixed price. Fast delivery. No hidden costs.\"",
    b: "One sentence that explains who this is for and what they get.",
  },
  {
    label: "Hero image or video",
    a: "Real photo of your work or you",
    b: "Avoid generic stock photography — it reduces trust.",
  },
  {
    label: "Benefits (not features)",
    a: "\"You'll have a live website in 14 days\"",
    b: "Not \"we use React and Next.js\" — the visitor doesn't care about technology.",
  },
  {
    label: "Social proof",
    a: "1–3 short reviews with name and business type",
    b: "Even one genuine testimonial significantly improves conversions.",
  },
  {
    label: "Primary CTA (above fold)",
    a: "\"WhatsApp for a Free Quote\" button",
    b: "Visible without scrolling. One clear action.",
  },
  {
    label: "FAQ (objection handling)",
    a: "3–5 questions that stop people from enquiring",
    b: "\"How long does it take?\" \"Do you need my content?\" \"What if I need changes later?\"",
  },
  {
    label: "Repeated CTA (bottom)",
    a: "Same action button repeated at the end",
    b: "Visitors who read to the bottom are usually ready to act.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Need a landing page built for your next campaign?",
        text: "Tell me what you're advertising and where the traffic is coming from. I'll design a focused landing page that matches your ad and converts clicks into enquiries.",
        whatsappMessage: whatsappMessages.webDevelopment,
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        A <strong>landing page</strong> is the right choice when you are running ads and want visitors
        to take one specific action — call, WhatsApp, or fill in a form. A <strong>full website</strong>{" "}
        is right when you need to build trust over time, rank organically for multiple search terms,
        and present several services to different audiences. Many businesses end up using both: a website
        for organic traffic and trust, plus dedicated landing pages for each ad campaign.
      </p>

      <h2 id="the-difference">The key difference: one job vs many jobs</h2>
      <p>
        A <strong>website</strong> is your business&apos;s home online. It explains who you are,
        everything you offer, your work, your location, and how to reach you. People browse it, come
        back to it, and use it to decide whether to trust you.
      </p>
      <p>
        A <strong>landing page</strong> is a single page with a single purpose. Someone arrives —
        usually from an ad — and the page is built to get them to take one action: call, send a message,
        book, or fill in a form. There is nothing else to click on, because every distraction reduces
        the chance they will act.
      </p>
      <p>
        Sending paid ad traffic to a homepage — where the visitor can browse to your blog, read your
        About page, or get lost in a menu — is one of the most common reasons Google Ads campaigns seem
        &quot;not to work.&quot; A focused landing page keeps the visitor&apos;s attention on the single action
        you paid to get them to take.
      </p>

      <h2 id="when-landing-page">When a landing page is the right choice</h2>
      <ul>
        <li>
          <strong>You are running ads for one service or offer.</strong> Someone who clicks an ad for
          &quot;kitchen renovation&quot; should land on a page about kitchen renovation, not a homepage listing
          ten services.
        </li>
        <li>
          <strong>You are launching something new.</strong> A new product, event, course, or seasonal
          offer can go live quickly on one focused page without rebuilding your whole website.
        </li>
        <li>
          <strong>You sell one main thing.</strong> Some businesses genuinely only need one well-made
          page with clear information and a contact button.
        </li>
        <li>
          <strong>You need to start quickly or within a tighter budget.</strong> A single page takes
          less time to plan and build than a multi-page website.
        </li>
        <li>
          <strong>You want to test an offer before committing to a full website.</strong> Run a landing
          page first, validate demand, then expand.
        </li>
      </ul>

      <h2 id="when-full-website">When you need a full website</h2>
      <ul>
        <li>
          <strong>You offer several services</strong> that each need their own explanation, pricing
          context, and specific questions answered.
        </li>
        <li>
          <strong>You want organic search traffic</strong> without paying for every click. Separate
          pages for each service and location give search engines more to rank. See the{" "}
          <Link href="/blog/local-seo-small-business-india-2026">Local SEO guide</Link>.
        </li>
        <li>
          <strong>Customers research before they buy.</strong> They want to see your portfolio, read
          about your process, check reviews, and compare options across multiple visits.
        </li>
        <li>
          <strong>You need features</strong> such as online booking, a product catalogue, a client
          login, or payment processing.
        </li>
        <li>
          <strong>You want long-term brand presence</strong> that builds recognition independent of
          any one ad campaign.
        </li>
      </ul>

      <h2 id="comparison">Side-by-side comparison</h2>
      <ComparisonTable
        colA="Landing page"
        colB="Full website"
        rows={comparisonRows}
        note="Cost and time estimates are illustrative for 2026 Indian market rates. Actual figures depend on design complexity, features and who builds it."
      />

      <h2 id="landing-page-anatomy">What every high-converting landing page needs</h2>
      <p>
        The following are the eight essential sections of a landing page that converts ad clicks into
        enquiries. Each section has a purpose — removing any one of them reduces conversions.
      </p>
      <ComparisonTable
        colA="Example"
        colB="Why it matters"
        rows={landingPageSections}
        note="This is a framework, not a rigid template. The order and wording should be adapted to your specific service and customers."
      />
      <p>
        One critical principle: your landing page headline should match the language of the ad the
        visitor just clicked. If your ad says &quot;Affordable Website Design in Surat,&quot; your page headline
        should say something very close to that — not &quot;Welcome to [Company Name].&quot; This is called
        message match and it is one of the fastest ways to improve conversion rates.
      </p>

      <h2 id="common-combo">The common combination: both together</h2>
      <p>
        Many businesses end up with both: a full website as their permanent home, plus focused landing
        pages for each ad campaign. The website builds trust and brings in organic search traffic; the
        landing pages turn paid clicks into enquiries.
      </p>
      <p>
        A typical setup for a service business in Surat running Google Ads:
      </p>
      <ul>
        <li>
          A full website at yourname.com with pages for each service, a portfolio, an about section,
          and a blog
        </li>
        <li>
          A dedicated landing page at yourname.com/web-design-surat used only for Google Ads traffic
        </li>
        <li>
          A second landing page at yourname.com/google-ads-surat for a digital marketing campaign
        </li>
      </ul>
      <p>
        Each landing page shares the website&apos;s domain (which builds trust) but has no navigation
        menu that could distract the visitor from enquiring.
      </p>

      <h2 id="testing">How to test conversion performance without making unsupported claims</h2>
      <p>
        Testing a landing page honestly means measuring what actually happens — not assuming results
        before you have data. Here is a practical approach:
      </p>
      <ol>
        <li>
          <strong>Set up conversion tracking first.</strong> Install Google Analytics 4 and configure
          event tracking for form submissions, WhatsApp clicks, and phone number taps. Without tracking,
          you cannot measure anything.
        </li>
        <li>
          <strong>Run your current page for 2–4 weeks</strong> to gather a baseline conversion rate.
          How many visitors are taking your desired action?
        </li>
        <li>
          <strong>Make one change at a time.</strong> Test a new headline, a different CTA button
          colour, or a shorter form — but only one thing at a time, so you know which change caused
          any improvement.
        </li>
        <li>
          <strong>Wait for statistical significance.</strong> At least 100 conversions per variant
          before drawing conclusions. Conclusions from 10 conversions are not reliable.
        </li>
        <li>
          <strong>Report honestly.</strong> If a change improved conversions in your test, note the
          conditions — your specific audience, budget, ad copy, and industry. Results in your situation
          may not apply to another business.
        </li>
      </ol>

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Can a landing page rank on Google?</h3>
      <p>
        A landing page can rank for specific search terms, but it is not designed for broad organic
        traffic. It typically lacks the depth, navigation, and multiple pages that help a full website
        rank across many searches. If organic search is a priority, a full website with proper service
        pages will outperform a single landing page.
      </p>

      <h3>Should I use a landing page or my homepage for Google Ads?</h3>
      <p>
        Almost always a dedicated landing page. Your homepage is designed for many audiences and many
        purposes. A landing page is designed for one audience and one action — the person who just
        clicked your specific ad. Using a homepage typically reduces your conversion rate and raises
        your Google Ads Quality Score penalty.
      </p>

      <h3>How long should a landing page be?</h3>
      <p>
        Long enough to answer the most common questions and address the main objections — no longer.
        For simple, low-cost services, a shorter page often converts better. For complex or high-value
        services where trust is important, a longer page with more proof can outperform a short one.
        Test both.
      </p>

      <h3>What is a realistic conversion rate for a landing page?</h3>
      <p>
        For a well-designed landing page matched to a relevant ad, 3–8% is a realistic range for a
        service business in India. New campaigns often start at 1–3% and improve with optimization.
        Any specific number you hear quoted (e.g., &quot;guaranteed 15% conversion&quot;) should be treated with
        scepticism until you see your own data.
      </p>

      <h3>Can I build a landing page myself?</h3>
      <p>
        Yes — tools like Carrd, Unbounce, or a simple HTML page can produce a functional landing page.
        The quality of the copywriting and the clarity of the offer matters more than the technology.
        If you are spending ₹20,000+/month on ads, the cost of a professionally built landing page pays
        for itself quickly in improved conversion rates.
      </p>

      <p>
        For help building a landing page or full website for your next campaign, see the{" "}
        <Link href="/services/web-development">Website Development service page</Link>. The original{" "}
        <Link href="/blog/landing-page-vs-website">
          landing page vs website guide
        </Link>{" "}
        covers this topic from a different angle with additional context.
      </p>
    </ArticleLayout>
  );
}
