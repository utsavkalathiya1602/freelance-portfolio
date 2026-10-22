import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ComparisonTable, BudgetCalculator } from "@/components/blog/ArticleWidgets";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "website-development-cost-india-2026";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "website development cost India 2026",
    "website design price India",
    "business website cost India",
    "freelance web developer cost India",
    "how much does a website cost in India",
    "website cost small business India",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "website-types", label: "Website types and typical cost ranges" },
  { id: "what-affects-cost", label: "What makes a website cheaper or more expensive" },
  { id: "cost-components", label: "All cost components explained" },
  { id: "estimator", label: "Website cost estimator" },
  { id: "freelancer-vs-agency", label: "Freelancer vs agency vs website builder" },
  { id: "sample-budgets", label: "Sample budgets and deliverables" },
  { id: "faqs", label: "Frequently asked questions" },
];

const typeRows = [
  {
    label: "Basic brochure website",
    a: "₹8,000 – ₹25,000",
    b: "2–4 pages, contact form, mobile-friendly",
  },
  {
    label: "Professional business website",
    a: "₹25,000 – ₹75,000",
    b: "5–10 pages, portfolio, blog, SEO-ready",
  },
  {
    label: "Landing page",
    a: "₹6,000 – ₹20,000",
    b: "Single-focus page, ad-ready, fast loading",
  },
  {
    label: "E-commerce website",
    a: "₹40,000 – ₹2,00,000+",
    b: "Product catalogue, cart, payments, orders",
  },
  {
    label: "Custom web application",
    a: "₹1,00,000 – ₹10,00,000+",
    b: "Bookings, client portals, dashboards, APIs",
  },
];

const sourceRows = [
  {
    label: "Technical skill needed",
    a: "Low (drag-and-drop)",
    b: "Medium to high",
  },
  {
    label: "Upfront cost",
    a: "₹2,000–₹6,000/year",
    b: "₹6,000–₹3,00,000+",
  },
  {
    label: "Ongoing cost",
    a: "Monthly subscription",
    b: "Hosting + maintenance (lower long-term)",
  },
  {
    label: "Customization",
    a: "Limited by templates",
    b: "Unlimited (custom code)",
  },
  {
    label: "SEO potential",
    a: "Moderate",
    b: "High (full control)",
  },
  {
    label: "Speed/performance",
    a: "Varies by platform",
    b: "High (optimized code)",
  },
  {
    label: "Best for",
    a: "Side projects, testing ideas",
    b: "Serious business investment",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Need a website for your business?",
        text: "Tell me what your business does and what you want the website to achieve. I'll reply with an honest recommendation and a project estimate.",
        whatsappMessage: whatsappMessages.webDevelopment,
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        A basic business website in India costs between <strong>₹8,000 and ₹25,000</strong>. A
        professional multi-page business website ranges from <strong>₹25,000 to ₹75,000</strong>. An
        e-commerce website starts around <strong>₹40,000</strong> and scales with features. Custom web
        applications begin at <strong>₹1,00,000</strong> and increase based on complexity. All figures
        are illustrative estimates; your actual cost depends on features, design complexity, and who
        builds it.
      </p>

      <h2 id="website-types">Website types and typical cost ranges</h2>
      <p>
        The biggest driver of cost is what kind of website you need. Here are the common types and their
        typical Indian market price ranges in 2026:
      </p>
      <ComparisonTable
        colA="Typical cost range (India)"
        colB="What you get"
        rows={typeRows}
        note="These are illustrative market ranges for 2026. Actual quotes will vary by developer, design complexity, content requirements and ongoing support. Always request a detailed written proposal."
      />

      <h2 id="what-affects-cost">What makes a website cheaper or more expensive</h2>
      <h3>Factors that increase cost</h3>
      <ul>
        <li>
          <strong>Custom design</strong> — a unique design built from scratch costs more than adapting
          an existing template or theme.
        </li>
        <li>
          <strong>More pages and content</strong> — each additional service page, blog section, or
          portfolio page requires writing, design and development time.
        </li>
        <li>
          <strong>Complex features</strong> — booking systems, payment gateways, client logins,
          dashboards and third-party integrations each add significant development time.
        </li>
        <li>
          <strong>E-commerce</strong> — product management, inventory, cart, secure payments and
          order tracking require substantial additional work.
        </li>
        <li>
          <strong>Content production</strong> — if the developer is also writing copy, creating graphics
          or sourcing photography, expect higher fees.
        </li>
        <li>
          <strong>Ongoing support and updates</strong> — a maintenance retainer or support agreement adds
          to the total annual cost.
        </li>
      </ul>
      <h3>Factors that reduce cost</h3>
      <ul>
        <li>
          <strong>Template-based design</strong> — starting from a well-chosen template is faster and
          less expensive than a fully custom design.
        </li>
        <li>
          <strong>Clear brief</strong> — a clear written description of what you need reduces revision
          rounds and development time.
        </li>
        <li>
          <strong>You supply the content</strong> — providing your own written copy, photos and logo
          reduces the developer&apos;s workload significantly.
        </li>
        <li>
          <strong>Fewer features to start</strong> — launching with essential features and adding
          complexity later is almost always more cost-efficient.
        </li>
      </ul>

      <h2 id="cost-components">All cost components explained</h2>
      <ul>
        <li>
          <strong>Domain name</strong> — typically ₹800–₹1,500/year for a .com or .in domain.
        </li>
        <li>
          <strong>Web hosting</strong> — shared hosting starts at ₹2,000–₹5,000/year. Managed
          cloud hosting (faster, more reliable) ranges from ₹5,000–₹20,000/year.
        </li>
        <li>
          <strong>Design and development</strong> — the main cost. See the table above.
        </li>
        <li>
          <strong>SSL certificate</strong> — usually included free with modern hosting (Let&apos;s Encrypt).
        </li>
        <li>
          <strong>Email accounts</strong> — business email (e.g. you@yourbusiness.com) costs
          ₹1,000–₹3,000/year through Google Workspace or Zoho Mail.
        </li>
        <li>
          <strong>Ongoing maintenance</strong> — plugin updates, security patches, and minor content
          changes. Many freelancers offer this at ₹1,500–₹5,000/month.
        </li>
        <li>
          <strong>SEO setup</strong> — basic on-page SEO is often included. Ongoing SEO is a separate
          monthly service. See the{" "}
          <Link href="/blog/local-seo-small-business-india-2026">Local SEO guide</Link>.
        </li>
        <li>
          <strong>Analytics setup</strong> — Google Analytics 4 is free to use. Configuration takes
          a few hours and may be included or charged separately.
        </li>
      </ul>

      <h2 id="estimator">Website cost estimator</h2>
      <p>
        Use the sliders below to estimate the development cost of your website. These are illustrative
        ranges only — your actual quote may be higher or lower depending on the specific work involved.
      </p>
      <BudgetCalculator
        title="Website Development Cost Estimator"
        computeType="websiteCost"
        fields={[
          {
            id: "pages",
            label: "Number of pages",
            min: 1,
            max: 20,
            step: 1,
            defaultValue: 5,
            suffix: " pages",
          },
          {
            id: "design",
            label: "Design complexity (1 = template, 5 = fully custom)",
            min: 1,
            max: 5,
            step: 1,
            defaultValue: 2,
          },
          {
            id: "features",
            label: "Extra features (contact form=1, booking=3, e-commerce=5)",
            min: 0,
            max: 5,
            step: 1,
            defaultValue: 1,
          },
        ]}
        resultLabel="Estimated development cost range"
        note="Illustrative estimate only. Request a written proposal for an accurate project cost."
      />

      <h2 id="freelancer-vs-agency">Freelancer vs agency vs website builder</h2>
      <ComparisonTable
        colA="Website builder (DIY)"
        colB="Freelancer / developer"
        rows={sourceRows}
        note="Agency costs are typically 2–4× higher than a freelancer for the same scope. Agencies suit larger budgets where ongoing team support and project management are needed."
      />
      <p>
        For most small businesses in India, a freelance developer offers the best balance of
        cost, quality and direct communication. A website builder is a reasonable starting point for
        very tight budgets or temporary projects but limits what you can do as the business grows.
      </p>

      <h2 id="sample-budgets">Sample budgets and deliverables</h2>
      <h3>Budget: ₹15,000 – ₹25,000</h3>
      <ul>
        <li>4–5 pages: Home, About, Services, Contact, and one additional page</li>
        <li>Mobile-friendly template-based design</li>
        <li>Contact form connected to your email</li>
        <li>WhatsApp button</li>
        <li>Basic on-page SEO setup</li>
        <li>Google Analytics 4 installation</li>
      </ul>
      <h3>Budget: ₹35,000 – ₹60,000</h3>
      <ul>
        <li>Everything above, plus a custom design adapted to your branding</li>
        <li>Individual service pages with dedicated content</li>
        <li>Portfolio or work showcase section</li>
        <li>Blog setup for ongoing content</li>
        <li>Local SEO optimization including Google Business Profile guidance</li>
        <li>Speed optimization and performance setup</li>
      </ul>
      <h3>Budget: ₹80,000 – ₹1,50,000</h3>
      <ul>
        <li>Fully custom design from scratch</li>
        <li>10+ pages including case studies, team, and testimonials sections</li>
        <li>Booking or enquiry management system</li>
        <li>Structured data (schema) for AI and search visibility</li>
        <li>Multi-language support if needed</li>
        <li>6-month maintenance and support included</li>
      </ul>

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Can I get a decent business website for under ₹10,000?</h3>
      <p>
        It is possible, but the options are limited. At this budget, expect a very basic site with a
        template design, minimal customization, and little or no ongoing support. A slightly higher
        budget of ₹15,000–₹25,000 produces a noticeably better result with proper mobile design, contact
        forms and SEO basics.
      </p>

      <h3>Why do some freelancers quote ₹5,000 and others ₹50,000 for the same brief?</h3>
      <p>
        The difference is usually in experience, quality, post-launch support, and what is included.
        A ₹5,000 quote typically means a template applied quickly with minimal customization and no
        support after delivery. A ₹50,000 quote from an experienced freelancer includes strategy,
        custom design, proper SEO setup and ongoing help. Ask both to provide a detailed written scope.
      </p>

      <h3>Is website maintenance really necessary?</h3>
      <p>
        If your website runs on a CMS (like WordPress), plugins and the platform itself need regular
        security updates. Unpatched websites get hacked. If you are running a static website or a
        modern Next.js site, maintenance needs are lower — but you will still want someone available
        for content updates and occasional fixes.
      </p>

      <h3>Should I include the cost of content writing in my budget?</h3>
      <p>
        Yes. Good page copy is as important as the design. If you cannot write it yourself, budget
        ₹2,000–₹8,000 per page for professional copywriting. Poorly written content reduces both
        conversions and search rankings.
      </p>

      <h3>What is the right time to redesign versus build new?</h3>
      <p>
        See the{" "}
        <Link href="/blog/website-redesign-vs-new-website">
          Website redesign vs new website guide
        </Link>{" "}
        for a full framework. In general: if the structure of your current website is fundamentally
        sound but the design is outdated, redesign. If the technology is limiting what you can do
        or the site is slow, build new.
      </p>

      <p>
        Ready to get a website built for your business? Visit the{" "}
        <Link href="/services/web-development">Website Development service page</Link> to see examples
        of recent projects and request a project estimate.
      </p>
      <p>
        For the ongoing cost after launch, see the{" "}
        <Link href="/blog/website-maintenance-cost-india">website maintenance cost guide</Link>.
      </p>
    </ArticleLayout>
  );
}
