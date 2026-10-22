import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleFAQ } from "@/components/blog/ArticleFAQ";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "website-pages-not-indexed-google";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "crawled currently not indexed how to fix",
    "discovered currently not indexed",
    "website not indexed by Google",
    "Google not indexing my pages",
    "Search Console page indexing report",
  ],
});

const faqs = [
  {
    question: "How long does Google take to index a new website?",
    answer:
      "There is no fixed time. Some pages are indexed within days, others take weeks, and Google does not guarantee that every page will be indexed. Submitting a sitemap and linking to new pages from existing ones helps Google find them sooner.",
  },
  {
    question: "Should I keep clicking “Request indexing”?",
    answer:
      "No. For “Crawled – currently not indexed”, Google’s own help text says there is no need to resubmit the URL. Repeated requests don’t change Google’s decision; improving the page and how it is linked does.",
  },
  {
    question: "Is it bad if some pages are not indexed?",
    answer:
      "Not necessarily. Google’s help page notes that “not indexed” is not always bad — redirected URLs, duplicates with a canonical, and pages you have set to noindex should not be indexed. Focus on the pages that should bring customers.",
  },
  {
    question: "Does a small website have crawl budget problems?",
    answer:
      "Rarely. Crawl budget is mainly a concern for very large sites. For a small business site with a few dozen pages, indexing problems are much more often about duplicate or thin pages, weak internal links, or technical blocks.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Pages still not showing on Google?",
        text: "Send me your website link and a screenshot of the Page indexing report. I will tell you which issues matter and which you can ignore.",
        whatsappMessage: whatsappMessages.digitalMarketing,
      }}
    >
      <h2>Quick answer</h2>
      <p>
        If Search Console shows <strong>&ldquo;Crawled – currently not indexed&rdquo;</strong>, Google visited the
        page but decided not to index it for now — usually because it looks too similar to other pages, too thin, or
        not important within the site. If it shows <strong>&ldquo;Discovered – currently not indexed&rdquo;</strong>,
        Google knows the URL exists but hasn’t crawled it yet. In both cases, repeatedly requesting indexing rarely
        helps. Fix technical blocks first, then make each page clearly unique and useful, and link to it from
        relevant pages on your own site.
      </p>

      <ArticleToC
        items={[
          { id: "statuses", label: "What the two statuses mean" },
          { id: "technical", label: "Rule out technical blocks first" },
          { id: "quality", label: "Make the page worth indexing" },
          { id: "links", label: "Help Google find and value the page" },
          { id: "monitor", label: "Check progress the right way" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <h2 id="statuses">What the two statuses mean</h2>
      <p>
        Both statuses appear in the{" "}
        <a href="https://support.google.com/webmasters/answer/7440203?hl=en">Page indexing report</a> in Google Search
        Console. According to Google’s help documentation:
      </p>
      <ul>
        <li>
          <strong>Crawled – currently not indexed:</strong> Google crawled the page but did not index it. It may or
          may not be indexed in the future, and there is no need to resubmit it for crawling.
        </li>
        <li>
          <strong>Discovered – currently not indexed:</strong> Google found the URL but hasn’t crawled it yet —
          typically because crawling then was expected to overload the site, so it was rescheduled.
        </li>
      </ul>
      <p>
        Google does not publish a precise list of reasons for each decision, so the steps below are the practical
        checks that most often make a difference, not a guaranteed fix.
      </p>

      <h2 id="technical">Rule out technical blocks first</h2>
      <p>
        Use the <a href="https://support.google.com/webmasters/answer/9012289?hl=en">URL Inspection tool</a> on one
        affected page and check:
      </p>
      <ul>
        <li>
          <strong>noindex</strong> — the page must not carry a noindex meta tag or header. Website builders and staging
          settings sometimes leave this on after launch.
        </li>
        <li>
          <strong>robots.txt</strong> — the page, and the CSS and JavaScript files it needs, must not be blocked.
        </li>
        <li>
          <strong>Canonical</strong> — the canonical URL should point to the page itself, not to the homepage or
          another page.
        </li>
        <li>
          <strong>Status code</strong> — the page should return 200, not a redirect or a soft 404.
        </li>
        <li>
          <strong>Rendering</strong> — the &ldquo;View crawled page&rdquo; screenshot and HTML should show your
          real content, not an empty shell or a loading spinner.
        </li>
      </ul>

      <h2 id="quality">Make the page worth indexing</h2>
      <p>
        On small business websites, the pages that sit in &ldquo;Crawled – currently not indexed&rdquo; are often:
      </p>
      <ul>
        <li>
          <strong>Near-duplicate location or service pages</strong> — &ldquo;Website design in Area A&rdquo; and
          &ldquo;Website design in Area B&rdquo; with only the area name changed.
        </li>
        <li>
          <strong>Thin pages</strong> — a heading, two sentences and a contact button.
        </li>
        <li>
          <strong>Overlapping blog posts</strong> — several articles answering the same question in slightly different
          words.
        </li>
        <li>
          <strong>Tag, filter or parameter URLs</strong> that repeat content available elsewhere.
        </li>
      </ul>
      <p>For each important page, ask: what does this page offer that no other page on my site does? Then:</p>
      <ul>
        <li>Merge pages that answer the same question, and redirect the weaker one to the stronger one.</li>
        <li>Add specific detail: process, pricing guidance, real examples, photos, FAQs your customers actually ask.</li>
        <li>Give each page a unique title and meta description that describes what is different about it.</li>
      </ul>

      <h2 id="links">Help Google find and value the page</h2>
      <ul>
        <li>
          <strong>Internal links:</strong> link to the page from your homepage, service pages or related articles
          with descriptive link text. Pages with no internal links (&ldquo;orphan pages&rdquo;) look unimportant.
        </li>
        <li>
          <strong>Sitemap:</strong> include only canonical, indexable URLs in your XML sitemap and submit it in Search
          Console.
        </li>
        <li>
          <strong>Speed and server health:</strong> slow or error-prone servers can slow crawling. See the{" "}
          <Link href="/blog/website-speed-small-business-india">website speed guide</Link>.
        </li>
        <li>
          <strong>External mentions:</strong> a Google Business Profile link, directory listings and genuine mentions
          help Google discover and trust a new site.
        </li>
      </ul>

      <h2 id="monitor">Check progress the right way</h2>
      <ol>
        <li>Fix the issues on a group of affected pages.</li>
        <li>
          In the Page indexing report, open the issue and use <strong>Validate fix</strong> for technical problems.
        </li>
        <li>Use URL Inspection to request indexing once for a significantly improved page — then wait.</li>
        <li>Recheck after two to four weeks rather than daily.</li>
      </ol>
      <p>
        Indexing is only the first step. Once pages are indexed, the{" "}
        <Link href="/blog/local-seo-small-business-india-2026">local SEO guide</Link> covers how to rank for nearby
        customers, and the{" "}
        <Link href="/blog/ai-search-visibility-2026">AI search visibility guide</Link> explains how indexed pages can
        appear in AI Overviews.
      </p>

      <ArticleFAQ faqs={faqs} />

      <p>
        For a technical SEO check of your website, see the{" "}
        <Link href="/services/digital-marketing">Digital Marketing service page</Link>.
      </p>
    </ArticleLayout>
  );
}
