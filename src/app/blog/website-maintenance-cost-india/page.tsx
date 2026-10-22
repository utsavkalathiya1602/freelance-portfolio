import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleFAQ } from "@/components/blog/ArticleFAQ";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "website-maintenance-cost-india";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "website maintenance cost in India",
    "website maintenance cost per month India",
    "website maintenance cost per year India",
    "website AMC charges India",
    "what is included in website maintenance",
    "small business website maintenance plan",
  ],
});

const faqs = [
  {
    question: "Is website maintenance mandatory?",
    answer:
      "Domain and hosting renewals are mandatory — if they lapse, the website goes offline. Everything else is optional in the short term, but a site that never gets security updates, backups or content updates becomes riskier and less useful over time. A simple static website needs far less maintenance than a WordPress site with many plugins.",
  },
  {
    question: "Is hosting included in website maintenance?",
    answer:
      "Sometimes. Some providers bundle hosting, domain renewal and SSL into a maintenance plan; others charge only for their time and expect you to pay the hosting company directly. Always ask for the quote to list hosting, domain and maintenance as separate lines so you can compare like for like.",
  },
  {
    question: "Can I maintain my website myself?",
    answer:
      "Yes, if the website was built so that you can edit text and images without touching code, and if you are comfortable checking backups and renewals. Many owners update content themselves and pay a developer only for technical work such as updates, fixes and new features.",
  },
  {
    question: "Who should own the domain and hosting accounts?",
    answer:
      "You, the business owner. The domain should be registered in your name with your email address, and you should have the login for hosting. Your developer can be given access, but you should never depend on someone else to renew or release your own domain.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want a clear maintenance estimate for your website?",
        text: "Send me your website link. I will tell you what it actually needs to stay secure and up to date — and what you can safely skip.",
        whatsappMessage: whatsappMessages.webDevelopment,
      }}
    >
      <h2>Quick answer</h2>
      <p>
        Website maintenance in India usually has two parts: <strong>fixed yearly costs</strong> (domain renewal,
        hosting, sometimes an SSL certificate or email) that every website pays, and <strong>maintenance work</strong>{" "}
        (updates, backups, security checks, content changes, fixes) that depends on how the site was built. Indian
        agency guides published in 2026 put most small business maintenance plans somewhere between{" "}
        <strong>₹2,500 and ₹20,000 per month</strong>, while a simple static site can need far less. The
        right price depends on what is included — not on the monthly number alone.
      </p>

      <ArticleToC
        items={[
          { id: "what-it-includes", label: "What website maintenance actually includes" },
          { id: "fixed-costs", label: "Fixed yearly costs every website has" },
          { id: "price-ranges", label: "Published price ranges in India" },
          { id: "what-changes-price", label: "What makes maintenance cheaper or more expensive" },
          { id: "compare-quotes", label: "How to compare maintenance quotes" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <h2 id="what-it-includes">What website maintenance actually includes</h2>
      <p>
        &ldquo;Maintenance&rdquo; is a loose word. Before comparing prices, separate it into the tasks that keep a
        website working:
      </p>
      <ul>
        <li>
          <strong>Renewals</strong> — domain, hosting, SSL certificate and business email (if used). If any of these
          lapse, the site or email stops working.
        </li>
        <li>
          <strong>Backups</strong> — a recent copy of the site and its data stored somewhere other than the server, so
          it can be restored after a mistake, hack or hosting failure.
        </li>
        <li>
          <strong>Software updates</strong> — CMS core, theme and plugin updates for WordPress-type sites, or
          dependency updates for custom-coded sites. Outdated software is a common route for hacks.
        </li>
        <li>
          <strong>Security and uptime monitoring</strong> — knowing when the site goes down or is compromised, instead
          of hearing it from a customer.
        </li>
        <li>
          <strong>Small content changes</strong> — prices, phone numbers, offers, photos, new services.
        </li>
        <li>
          <strong>Fixes</strong> — broken forms, broken links, layout issues after a browser or plugin update.
        </li>
        <li>
          <strong>Optional extras</strong> — SEO work, new pages, blog writing, speed improvements. These are
          improvements, not maintenance, and should be priced separately.
        </li>
      </ul>

      <h2 id="fixed-costs">Fixed yearly costs every website has</h2>
      <p>These are paid whether or not you hire anyone for maintenance:</p>
      <ul>
        <li>
          <strong>Domain renewal</strong> — paid yearly to the registrar. Check the <em>renewal</em> price, not only
          the first-year price; promotional first-year pricing is common.
        </li>
        <li>
          <strong>Hosting</strong> — shared hosting, a managed WordPress plan, or a cloud/static host. Some modern
          hosts have free tiers that are enough for small static or Next.js sites; others charge monthly or yearly.
        </li>
        <li>
          <strong>SSL certificate</strong> — many hosts now include free SSL. If yours charges separately, ask why.
        </li>
        <li>
          <strong>Business email</strong> — optional, usually priced per user per month by the email provider.
        </li>
      </ul>
      <p>
        Ask for each of these as a separate line in any quote. Bundled &ldquo;all-inclusive&rdquo; pricing makes it
        hard to tell how much you are paying for actual work.
      </p>

      <h2 id="price-ranges">Published price ranges in India</h2>
      <p>
        There is no official price list for website maintenance, and most published figures come from agencies that
        sell maintenance plans. Treat the ranges below as rough market estimates, not standard rates:
      </p>
      <ul>
        <li>
          <a href="https://www.aaravinfotech.com/blog/website-maintenance-cost-in-india-2026-what-you-should-actually-be-paying">
            Aarav Infotech (updated August 2026)
          </a>{" "}
          splits prices by site type: about ₹300–₹2,500 a month for a static brochure site, ₹2,500–₹8,000 for a basic
          WordPress site, ₹8,000–₹20,000 for a standard business site with regular content, and ₹15,000–₹50,000 for
          e-commerce.
        </li>
        <li>
          <a href="https://prateeksha.com/blog/website-maintenance-plans-india-2026">
            Prateeksha Web Design (July 2026)
          </a>{" "}
          gives a single range of roughly ₹3,000–₹20,000 a month, depending on site complexity and scope.
        </li>
        <li>
          <a href="https://upgrowth.in/website-maintenance-cost-in-india-and-global/">upGrowth (March 2026)</a>{" "}
          quotes several different ranges on the same page — for example ₹3,000–₹10,000 a month for a small
          business website in one table and higher figures elsewhere — which shows how much the answer depends on
          what is counted as maintenance.
        </li>
      </ul>
      <p>
        <strong>My estimate, clearly labelled as such:</strong> a small, static brochure website with few moving
        parts often needs only occasional paid work — a few hours a year plus renewals — rather than a fixed monthly
        plan. A WordPress site with many plugins, an online store or a booking system needs regular, scheduled
        maintenance, and a monthly plan makes more sense there.
      </p>

      <h2 id="what-changes-price">What makes maintenance cheaper or more expensive</h2>
      <h3>How the site is built</h3>
      <p>
        A static or custom-coded site with no plugins has fewer things to update. A WordPress site with 25 plugins
        has 25 things that can conflict or need patching. Neither approach is wrong — see{" "}
        <Link href="/blog/react-vs-wordpress-small-business">React vs WordPress for a small business</Link> — but
        they carry different maintenance loads.
      </p>
      <h3>What the site does</h3>
      <p>
        Online payments, customer accounts, bookings and stored personal data raise the stakes. These sites need more
        frequent backups, security checks and testing after updates.
      </p>
      <h3>How often content changes</h3>
      <p>
        A site whose prices or offers change weekly needs either an easy editing system for you, or regular paid
        content updates.
      </p>
      <h3>Response time</h3>
      <p>
        &ldquo;Fixed within 24 hours&rdquo; costs more than &ldquo;fixed when convenient&rdquo;. Decide how much downtime
        your business can actually tolerate before paying for a fast response guarantee.
      </p>

      <h2 id="compare-quotes">How to compare maintenance quotes</h2>
      <p>Ask every provider the same questions in writing:</p>
      <ol>
        <li>Which renewals (domain, hosting, SSL, email) are included, and at what yearly cost?</li>
        <li>How often are backups taken, where are they stored, and has a restore been tested?</li>
        <li>How often are software updates applied, and are they tested before going live?</li>
        <li>How many content-change hours or requests are included each month?</li>
        <li>What is the response time for a site that is down, and for a minor fix?</li>
        <li>What is charged extra, and at what hourly rate?</li>
        <li>Will I keep full ownership of the domain, hosting and code if I stop the plan?</li>
      </ol>
      <p>
        A quote far below the market range is not automatically bad, but ask what is left out. A quote far above it
        should come with a clear list of extra work, such as SEO or ad management, that you can price separately.
      </p>
      <p>
        If you are still at the building stage, the{" "}
        <Link href="/blog/website-development-cost-india-2026">website development cost guide</Link> covers the
        one-time build cost, and{" "}
        <Link href="/blog/website-redesign-vs-new-website">redesign vs new website</Link> helps if maintenance costs
        are high because the current site is outdated.
      </p>

      <ArticleFAQ faqs={faqs} />

      <p>
        For a website that is simple to maintain from day one, see the{" "}
        <Link href="/services/web-development">Web Development service page</Link>.
      </p>
    </ArticleLayout>
  );
}
