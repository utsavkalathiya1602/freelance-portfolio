import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleChecklist } from "@/components/blog/ArticleChecklist";
import { ArticleFAQ } from "@/components/blog/ArticleFAQ";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "website-security-checklist-small-business";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "website security checklist",
    "small business website security",
    "how to secure a WordPress website",
    "website hacked what to do",
    "website backup best practices",
  ],
});

const accountChecks = [
  {
    id: "2sv",
    label: "Two-step verification is on for hosting, domain registrar, CMS admin and business email",
    detail: "These four accounts control your website. Losing any one of them can mean losing the site.",
  },
  {
    id: "unique-passwords",
    label: "Each of those accounts has its own strong, unique password (or a passkey)",
    detail: "A password manager makes this practical. Never reuse your email password anywhere else.",
  },
  {
    id: "own-accounts",
    label: "The domain and hosting are registered in the business’s name, with an email you control",
    detail: "Not in a former employee’s or developer’s personal account.",
  },
  {
    id: "remove-users",
    label: "Old staff, freelancers and agencies no longer have admin access",
    detail: "Give each person their own login with the lowest role they need — never share one admin account.",
  },
];

const siteChecks = [
  {
    id: "updates",
    label: "CMS, theme, plugins or code dependencies are up to date",
    detail: "Remove plugins and themes you don’t use — deactivated code can still be vulnerable.",
  },
  {
    id: "https",
    label: "The whole site loads over HTTPS, and http:// redirects to https://",
    detail: "Free certificates are available from most hosts. Check that the certificate renews automatically.",
  },
  {
    id: "backups",
    label: "Automatic backups run, are stored away from the server, and a restore has been tested",
    detail: "A backup you have never restored is a hope, not a plan.",
  },
  {
    id: "forms",
    label: "Forms are protected against spam and validate input on the server",
    detail: "Add a CAPTCHA or honeypot, and never email form data to an address you don’t monitor.",
  },
  {
    id: "monitoring",
    label: "Uptime monitoring alerts you if the site goes down",
    detail: "Several free services check your site every few minutes and email you.",
  },
  {
    id: "search-console",
    label: "Google Search Console is set up for the site",
    detail: "Google notifies verified owners about detected security issues and malware.",
  },
];

const faqs = [
  {
    question: "Why would hackers target a small business website?",
    answer:
      "Most attacks are automated, not personal. Bots scan the internet for out-of-date software and weak passwords, then use any site they can break into to send spam, host phishing pages or spread malware. Being small doesn’t make a site less likely to be scanned.",
  },
  {
    question: "Is a static or custom-coded website more secure than WordPress?",
    answer:
      "A static site has less to attack — no database or admin login on the live server — so it avoids many common problems. WordPress can be run securely, but it needs regular updates and careful plugin choices. Any site is only as secure as its accounts and how well it is maintained.",
  },
  {
    question: "Do I need a paid security plugin or service?",
    answer:
      "Not always. Updates, strong unique passwords with two-step verification, and tested backups prevent most common problems. A firewall or security service can add protection for busy WordPress or e-commerce sites, but it doesn’t replace the basics.",
  },
  {
    question: "Who is responsible for my website’s security — me, my developer or my host?",
    answer:
      "Usually all three, for different parts. The host secures the server, the developer or maintenance provider keeps the site’s software updated, and you control the accounts and passwords. Agree in writing who handles updates and backups after launch.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Not sure how secure your website is?",
        text: "Send me your website link. I will check the basics — updates, HTTPS, backups and exposed admin areas — and tell you what needs attention.",
        whatsappMessage: whatsappMessages.webDevelopment,
      }}
    >
      <h2>Quick answer</h2>
      <p>
        Most small business websites are not hacked by someone targeting them — they are found by automated bots
        looking for <strong>out-of-date software</strong> and <strong>weak or reused passwords</strong>. The four
        habits that prevent most problems are: two-step verification on every account that controls the site, keeping
        software updated, tested backups stored away from the server, and removing access for people who no longer
        need it.
      </p>

      <ArticleToC
        items={[
          { id: "accounts", label: "Secure the accounts that control your website" },
          { id: "site", label: "Secure the website itself" },
          { id: "monthly", label: "A 10-minute monthly routine" },
          { id: "hacked", label: "What to do if your website is hacked" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <h2 id="accounts">Secure the accounts that control your website</h2>
      <p>
        Your website is controlled by four accounts: the domain registrar, the hosting provider, the website admin
        (WordPress, Shopify, Wix or similar), and the email address that receives password resets. Whoever controls
        these controls your website.
      </p>
      <ArticleChecklist title="Account security" items={accountChecks} />
      <p>
        The UK National Cyber Security Centre’s{" "}
        <a href="https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security/secure-your-important-online-accounts">
          guide for small organisations
        </a>{" "}
        recommends turning on two-step verification for important accounts — even when you already have a strong
        password — and using passkeys where they are offered.
      </p>

      <h2 id="site">Secure the website itself</h2>
      <ArticleChecklist title="Website security" items={siteChecks} />

      <h3>Updates: the single most important habit</h3>
      <p>
        Many website break-ins exploit a weakness that already had a fix available — the site simply hadn’t been
        updated. On WordPress, that usually means a plugin. On custom sites, it means the framework and its packages.
        Set a regular schedule, and test important pages and forms after each update.
      </p>

      <h3>Backups: follow the &ldquo;away from the server&rdquo; rule</h3>
      <p>
        A backup stored only on the same server can be lost along with the site. The NCSC’s{" "}
        <a href="https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security/backing-up-your-data">
          backup guidance
        </a>{" "}
        advises keeping backups separate from the original and checking that you can actually restore them. Keep
        several dated copies, so you can go back to a version from before a problem started.
      </p>

      <h3>Forms and customer data</h3>
      <p>
        Contact forms are a common target for spam bots. Protect them with a CAPTCHA or hidden honeypot field,
        validate input on the server, and only collect the information you really need. If you store customer
        details, check the data protection rules in your country — such as the GDPR in the UK and EU, or the Digital
        Personal Data Protection Act in India.
      </p>
      <p>
        For spam leads coming specifically from ads, see{" "}
        <Link href="/blog/google-ads-spam-leads">how to reduce fake leads from Google Ads</Link>.
      </p>

      <h2 id="monthly">A 10-minute monthly routine</h2>
      <ol>
        <li>Apply pending updates (or confirm your maintenance provider has).</li>
        <li>Check that the latest backup completed and is stored off the server.</li>
        <li>Review admin users — remove anyone who no longer needs access.</li>
        <li>Open Search Console and check the Security issues report.</li>
        <li>Submit your own contact form once to confirm it still delivers.</li>
        <li>Check the domain and SSL certificate renewal dates.</li>
      </ol>
      <p>
        If you pay someone to do this, the{" "}
        <Link href="/blog/website-maintenance-cost-india">website maintenance cost guide</Link> explains what a
        maintenance plan should include.
      </p>

      <h2 id="hacked">What to do if your website is hacked</h2>
      <ol>
        <li>
          <strong>Change passwords</strong> for hosting, domain, website admin and email — from a device you trust —
          and turn on two-step verification if it wasn’t already.
        </li>
        <li>
          <strong>Contact your host.</strong> Many hosts can isolate the site and help identify what was changed.
        </li>
        <li>
          <strong>Restore a clean backup</strong> from before the problem started, then update everything immediately
          — restoring an out-of-date site just reopens the same hole.
        </li>
        <li>
          <strong>Check Search Console</strong> for security warnings, and request a review once the site is clean.
        </li>
        <li>
          <strong>Tell affected customers</strong> if their personal data may have been exposed, following the rules
          in your country.
        </li>
      </ol>

      <ArticleFAQ faqs={faqs} />

      <p>
        For a website that is secure and easy to maintain from the start, see the{" "}
        <Link href="/services/web-development">Web Development service page</Link>.
      </p>
    </ArticleLayout>
  );
}
