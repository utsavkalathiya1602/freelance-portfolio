import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "website-redesign-vs-new-website";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "website redesign vs new website",
    "should I redesign or rebuild my website",
    "website redesign India small business",
    "new website vs redesign cost India",
    "website rebuild vs update",
    "website overhaul small business India",
    "SEO safe website redesign",
  ],
});

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Not sure whether to redesign or rebuild?",
        text: "Send me your current website and a few words about what is not working. I will give you an honest assessment of whether improvement or a rebuild makes more sense for your situation.",
        whatsappMessage: whatsappMessages.webDevelopment,
      }}
    >
      <h2>Quick answer</h2>
      <p>
        A redesign updates the look and content of an existing website while keeping its technical structure. A
        new website starts from scratch with a different platform, structure or codebase. Redesign makes sense
        when your website works technically but looks outdated or lacks content. A new build is warranted when
        the existing website&apos;s structure, platform or code is limiting what you can achieve.
      </p>

      <h2>What is the difference?</h2>
      <p>
        The terms are used loosely, so it helps to define what each actually means in practice:
      </p>
      <ul>
        <li>
          <strong>Redesign</strong> — keeping the same platform and URL structure, but updating the visual design,
          improving the copy, reorganising pages, or improving page speed and mobile layout. The underlying
          technology stays the same.
        </li>
        <li>
          <strong>New website</strong> — changing the platform, the codebase, or both. This might mean moving
          from an old WordPress site to a custom-built website, or rebuilding a site that was built with a
          website builder into a properly structured, professionally coded site.
        </li>
      </ul>
      <p>
        Some projects sit in between — a &ldquo;rebuild&rdquo; may mean rewriting the code while keeping the same pages
        and content structure. The right label matters less than understanding what you actually need.
      </p>

      <h2>Signs your existing website needs a redesign</h2>
      <ul>
        <li>The design looks visually dated compared to your competitors, but the site loads well and functions correctly</li>
        <li>Your services or pricing have changed and the content is out of date</li>
        <li>The mobile layout is awkward but the overall structure is sound</li>
        <li>You want to add a new section — a blog, a gallery, a testimonials page — to an otherwise working site</li>
        <li>The CTA buttons and forms are in the wrong places, but moving them is a content change, not a technical one</li>
        <li>You have received feedback that the site looks unprofessional, but no technical complaints</li>
      </ul>

      <h2>When starting from scratch makes more sense</h2>
      <ul>
        <li>The existing website was built on a free website builder that cannot support the features you now need</li>
        <li>Page speed is critically slow and the cause is the platform or the way it was originally built</li>
        <li>The site has no mobile responsiveness and retrofitting it would require rebuilding most pages anyway</li>
        <li>
          You have changed your business model significantly — different services, different target audience,
          different brand — and the current site cannot reflect that with updates alone
        </li>
        <li>The existing code is poorly structured, insecure or undocumented, making changes risky and expensive</li>
        <li>You need integrations — booking systems, payment, CRM — that the current platform cannot support</li>
        <li>
          You do not have access to the source files or the code — the site was built by someone who is no longer
          available and left no handover documentation
        </li>
      </ul>

      <h2>Cost, time and maintenance considerations</h2>
      <p>
        A redesign is usually faster and less expensive than a new build, because the underlying structure is
        already in place. A new website takes more time but results in a cleaner, more maintainable codebase that
        is easier and cheaper to update in the future.
      </p>
      <p>
        As a rough orientation for a small business website (not a guaranteed price — scope determines cost):
      </p>
      <ul>
        <li>
          <strong>Redesign (visual and content updates only):</strong> ₹8,000–₹25,000 depending on the number
          of pages and the extent of content changes
        </li>
        <li>
          <strong>New website (rebuild from scratch):</strong> ₹20,000–₹65,000 depending on the number of pages,
          features and complexity
        </li>
      </ul>
      <p>
        Over a three-year horizon, a well-built new website often costs less to maintain than a patched, outdated
        website that requires constant workarounds. For more detail on website pricing, see the{" "}
        <Link href="/blog/business-website-cost-surat">website cost guide</Link>.
      </p>

      <h2>What happens to SEO during a redesign?</h2>
      <p>
        This is the question most business owners miss until it is too late. If your current website ranks on
        Google for any terms that bring visitors or enquiries, those rankings are attached to specific URLs.
        A redesign that changes URLs without proper redirects can destroy existing rankings overnight.
      </p>
      <p>
        Even a redesign that keeps the same URLs can temporarily affect rankings if Google needs time to re-crawl
        the updated pages and reassess their relevance. This is normal and usually recovers within a few weeks
        if the new content is at least as good as the old.
      </p>

      <h2>How to protect URLs, rankings and existing enquiries</h2>
      <ul>
        <li>
          Before starting any redesign or rebuild, export a full list of your current URLs using Google Search
          Console or a crawler like Screaming Frog.
        </li>
        <li>
          Identify which URLs receive meaningful traffic or rankings — do not discard these without a redirect plan.
        </li>
        <li>
          Set up 301 redirects from every old URL to the equivalent new URL. A 301 redirect tells search engines
          that a page has moved permanently and transfers most of its ranking authority.
        </li>
        <li>
          After launch, submit a new sitemap in Google Search Console so Google re-indexes your site promptly.
        </li>
        <li>
          Monitor your Search Console impressions and clicks weekly for 4–6 weeks post-launch to catch any
          ranking drops early.
        </li>
      </ul>

      <h2>A decision checklist for business owners</h2>
      <p>Answer these questions to guide your decision:</p>
      <ul>
        <li>Does my website currently load in under 3 seconds on mobile? (If not, investigate the cause before deciding.)</li>
        <li>Am I happy with my website platform and would I continue using it? (If not, a rebuild may be needed.)</li>
        <li>Do I have access to my source files, hosting and domain? (If not, a rebuild is often the simplest path forward.)</li>
        <li>Has my business changed enough that most of my current content needs replacing anyway?</li>
        <li>Does my current site rank on Google for any terms I care about? (If yes, proceed with extra care around URLs.)</li>
        <li>Am I being held back by missing features that my current platform cannot add?</li>
      </ul>
      <p>
        If most of your answers point toward fundamental limitations in the current site, a new build is usually
        the better investment. If the current site works well but simply looks or reads poorly, a redesign is
        more proportionate.
      </p>

      <h2>Frequently asked questions</h2>

      <h3>Will a new website help me rank better on Google?</h3>
      <p>
        Not automatically. A new website built on a solid technical foundation, with clear service pages, fast
        loading and properly structured content, creates better conditions for ranking. But the content, links and
        ongoing SEO work still determine your actual rankings. A new website with poor content will not rank better
        than an older website with well-optimised content.
      </p>

      <h3>How long will I be without a website during a rebuild?</h3>
      <p>
        A well-managed rebuild keeps your existing website live until the new one is ready to launch. Downtime
        should be minutes, not hours or days. If a developer or agency requires you to take your site offline
        during the build, ask why — it should not be necessary.
      </p>

      <h3>Can I redesign my website myself?</h3>
      <p>
        If your site is on a platform like Squarespace or Wix, you can update design and content yourself with no
        technical knowledge. If your site is on WordPress or a custom platform, self-service redesigns carry more
        risk of breaking functionality. A hybrid approach — having a developer handle the technical changes while
        you update content — is often the most cost-effective option.
      </p>

      <h3>What if my website was built by someone I can no longer reach?</h3>
      <p>
        This is a common situation. If you do not have access to the source files, the hosting account, or the
        domain registrar, a rebuild from scratch is usually the most straightforward solution. Before starting,
        check whether you can recover access through the hosting provider using your business email address or
        proof of ownership.
      </p>

      <h3>How do I know if my current website&apos;s SEO is worth preserving?</h3>
      <p>
        Log in to Google Search Console and check your Performance report for the last 12 months. If your site
        has more than a few hundred monthly impressions from organic search and a handful of clicks on terms related
        to your services, those rankings are worth protecting through careful URL management. If your site has
        near-zero organic traffic, there is little ranking equity to lose and a rebuild is lower risk.
      </p>

      <p>
        To discuss whether your current website needs improvement or a complete rebuild, see the{" "}
        <Link href="/services/web-development">Website Development service page</Link> or the{" "}
        <Link href="/blog/how-to-hire-freelance-web-developer-india">guide to hiring a web developer</Link>.
      </p>
    </ArticleLayout>
  );
}
