import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleFAQ } from "@/components/blog/ArticleFAQ";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "ai-website-builder-vs-custom-website";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "AI website builder vs professional website development",
    "AI website builder vs custom website",
    "is an AI website good for SEO",
    "AI website builder for small business",
    "custom website vs website builder",
  ],
});

const faqs = [
  {
    question: "Are AI-generated websites bad for SEO?",
    answer:
      "Not by default. Google’s guidance focuses on whether content is helpful, not on which tool produced it — but it also warns that generating many pages with AI without adding value can count as scaled content abuse. The bigger SEO risks with builders are technical: limited control over redirects, URLs and structured data, and trouble migrating later.",
  },
  {
    question: "Can I move an AI-built website to a developer later?",
    answer:
      "It depends on the tool. Some generate standard code or a WordPress site you can move; many hosted builders do not let you export the site at all, which means rebuilding it. Check the export options before you start.",
  },
  {
    question: "Is an AI website builder cheaper than hiring a developer?",
    answer:
      "Usually cheaper to start. Over a few years, compare total cost: monthly subscription, paid add-ons for features you need, and the cost of rebuilding if you outgrow the platform.",
  },
  {
    question: "Do developers use AI tools too?",
    answer:
      "Many do, for drafting code, copy or layouts. The difference with custom development is that a person still decides the structure, checks the output, and owns the result together with you.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Not sure which route fits your business?",
        text: "Tell me what your website needs to do. If a builder is enough, I will tell you — and if you need a custom site, I will explain why.",
        whatsappMessage: whatsappMessages.webDevelopment,
      }}
    >
      <h2>Quick answer</h2>
      <p>
        An <strong>AI website builder</strong> is a good choice when you need a simple site quickly, on a small
        budget, and are happy to stay on that platform. A <strong>custom website</strong> is the better choice when
        the site is central to winning customers, needs specific features or integrations, or must be fully owned
        and portable. The deciding question is rarely launch speed — it is{" "}
        <strong>whether you can export, extend and control the site once your business grows</strong>.
      </p>

      <ArticleToC
        items={[
          { id: "what-they-are", label: "What each option actually means" },
          { id: "comparison", label: "Side-by-side comparison" },
          { id: "when-builder", label: "When an AI builder is enough" },
          { id: "when-custom", label: "When custom development is worth it" },
          { id: "seo", label: "SEO and AI search considerations" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <h2 id="what-they-are">What each option actually means</h2>
      <p>&ldquo;AI website builder&rdquo; now covers two quite different kinds of tool:</p>
      <ul>
        <li>
          <strong>Hosted builders with AI features</strong> — you describe your business, the tool generates pages,
          and the site lives on the vendor’s platform. Editing is easy; leaving can be hard.
        </li>
        <li>
          <strong>AI code generators</strong> — tools that produce actual website code from prompts. You often get
          code you can move, but you or someone else then handles hosting, fixes and updates.
        </li>
      </ul>
      <p>
        A <strong>custom website</strong> is planned and built by a developer for your business — its pages,
        structure, forms and integrations — and handed over with the code, domain and hosting in your name. If you
        are deciding between custom platforms, see{" "}
        <Link href="/blog/react-vs-wordpress-small-business">React vs WordPress for a small business</Link>.
      </p>

      <h2 id="comparison">Side-by-side comparison</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table>
          <thead>
            <tr>
              <th scope="col">Factor</th>
              <th scope="col">AI website builder</th>
              <th scope="col">Custom website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Time to launch</td>
              <td>Hours to days</td>
              <td>Usually weeks</td>
            </tr>
            <tr>
              <td>Upfront cost</td>
              <td>Low</td>
              <td>Higher</td>
            </tr>
            <tr>
              <td>Ongoing cost</td>
              <td>Monthly subscription, plus paid add-ons</td>
              <td>Hosting and maintenance</td>
            </tr>
            <tr>
              <td>Ownership and export</td>
              <td>Varies — many hosted builders don’t export</td>
              <td>Code is yours and portable</td>
            </tr>
            <tr>
              <td>Custom features</td>
              <td>Limited to what the platform supports</td>
              <td>Built to your requirements</td>
            </tr>
            <tr>
              <td>SEO control</td>
              <td>Basics covered; less control over redirects and schema</td>
              <td>Full control</td>
            </tr>
            <tr>
              <td>Who fixes problems</td>
              <td>You, or the platform’s support</td>
              <td>Your developer</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        These are general patterns, not guarantees — individual tools vary, so check the specific one you are
        considering.
      </p>

      <h2 id="when-builder">When an AI builder is enough</h2>
      <ul>
        <li>You need a basic online presence fast — a few pages, contact details, a map.</li>
        <li>Your customers mainly find you through referrals, Instagram or Google Maps, not your website.</li>
        <li>You are testing a new business idea and may change direction soon.</li>
        <li>You are comfortable editing the site yourself.</li>
      </ul>
      <p>
        In these cases, a builder plus a well-maintained{" "}
        <Link href="/blog/google-business-profile-guide-india">Google Business Profile</Link> can be a sensible
        starting point.
      </p>

      <h2 id="when-custom">When custom development is worth it</h2>
      <ul>
        <li>The website is your main source of enquiries or sales, and conversion matters.</li>
        <li>You need bookings, customer accounts, dashboards, CRM or WhatsApp integrations the builder can’t support.</li>
        <li>You plan to run Google Ads to landing pages and need full control of tracking and page speed.</li>
        <li>You already have search rankings, and a platform change could break URLs and redirects.</li>
        <li>You want to own everything and not depend on a vendor’s pricing or roadmap.</li>
      </ul>
      <p>
        Cost is covered in the{" "}
        <Link href="/blog/website-development-cost-india-2026">website development cost guide</Link>, and ongoing
        costs in the <Link href="/blog/website-maintenance-cost-india">website maintenance cost guide</Link>.
      </p>

      <h2 id="seo">SEO and AI search considerations</h2>
      <p>
        Google does not penalise a site for being made with AI. Its{" "}
        <a href="https://developers.google.com/search/docs/fundamentals/using-gen-ai-content">
          guidance on generative AI content
        </a>{" "}
        focuses on helpfulness — while warning that using AI to generate many pages without adding value can violate
        its spam policy on scaled content abuse.
      </p>
      <p>
        For AI Overviews and AI Mode, Google’s{" "}
        <a href="https://developers.google.com/search/docs/appearance/ai-features">AI features documentation</a> says
        there are no extra technical requirements: a page needs to be indexed and eligible to show with a snippet. So
        the builder-vs-custom choice matters less for AI search than having clear, original, useful content — whichever
        way the site is built.
      </p>
      <p>
        Where the choice does matter is migration. Moving an established site to or from a builder changes URLs, and
        Google’s{" "}
        <a href="https://developers.google.com/search/docs/crawling-indexing/site-move-with-url-changes">
          site move guidance
        </a>{" "}
        recommends permanent redirects from each old URL to its matching new URL. Make sure the platform lets you set
        them.
      </p>

      <ArticleFAQ faqs={faqs} />

      <p>
        If a custom website is the right fit, see the{" "}
        <Link href="/services/web-development">Web Development service page</Link> or{" "}
        <Link href="/work">recent work</Link>.
      </p>
    </ArticleLayout>
  );
}
