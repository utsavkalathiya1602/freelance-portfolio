import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleChecklist } from "@/components/blog/ArticleChecklist";

const slug = "website-ai-search-engine-visibility";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "website AI search visibility",
    "how to appear in AI search results",
    "AI search engine optimization",
    "make website AI friendly",
    "AEO answer engine optimization",
    "GEO generative engine optimization",
    "ChatGPT Gemini search visibility website",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "how-ai-reads-sites", label: "How AI search engines read websites" },
  { id: "crawlability", label: "Crawlability — can AI access your pages?" },
  { id: "page-structure", label: "Clear page structure" },
  { id: "useful-answers", label: "Writing content that directly answers questions" },
  { id: "structured-data", label: "Structured data" },
  { id: "credibility", label: "Source credibility signals" },
  { id: "internal-links", label: "Internal linking" },
  { id: "what-you-can-measure", label: "What you can actually measure" },
  { id: "checklist", label: "AI search visibility checklist" },
  { id: "faqs", label: "Frequently asked questions" },
];

const checklistItems = [
  {
    id: "crawlable",
    label: "Confirm your site is crawlable — no robots.txt blocks on key pages",
    detail: "Check robots.txt at yourdomain.com/robots.txt. Ensure it does not block Googlebot or GPTBot.",
  },
  {
    id: "no-js-only",
    label: "Key content is in HTML — not loaded exclusively by JavaScript",
    detail: "View page source (Ctrl+U). If your main content is absent from source, AI crawlers may miss it.",
  },
  {
    id: "h1-structure",
    label: "Each page has exactly one H1 that matches the page topic",
    detail: "H1 is the clearest signal of what a page is about. Use it for the main topic keyword.",
  },
  {
    id: "faq-sections",
    label: "Service and product pages have FAQ sections with direct Q&A",
    detail: "Write questions as customers would ask them in a search or voice query. Answer concisely in the first sentence.",
  },
  {
    id: "local-business-schema",
    label: "LocalBusiness or Organization schema is present on homepage/contact page",
    detail: "Include name, address, phone, URL, opening hours, and geographic area served.",
  },
  {
    id: "faq-schema",
    label: "FAQPage schema is added to pages with genuine Q&A content",
    detail: "Only add where real questions and answers exist — Google penalizes misuse.",
  },
  {
    id: "author-info",
    label: "Blog articles have author name and bio",
    detail: "AI systems favour content from identifiable, credible authors. Add an author byline and brief expertise description.",
  },
  {
    id: "nap-consistent",
    label: "Business name, address, and phone number are identical everywhere",
    detail: "Check Google Business Profile, LinkedIn, Justdial, Yelp, and directory listings for consistency.",
  },
  {
    id: "page-speed",
    label: "Mobile PageSpeed score above 60",
    detail: "Slow pages are crawled less thoroughly. Run PageSpeed Insights on your key landing pages.",
  },
  {
    id: "internal-links",
    label: "Key pages are linked to from other pages on your site",
    detail: "Orphan pages (no internal links pointing to them) are crawled less frequently and weighted lower.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want your website properly structured for AI search visibility?",
        text: "I audit and improve website structure, structured data, and content organization for both traditional SEO and AI search. Let's review your site.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        Making your website visible to AI search engines — Google AI Overviews, ChatGPT with search,
        Perplexity, Gemini — requires the same foundation as good traditional SEO, with additional
        emphasis on four areas: <strong>crawlability</strong> (AI must be able to read your pages),
        <strong>direct answers</strong> (content structured as question + answer), <strong>structured
        data</strong> (machine-readable labels on your key information), and{" "}
        <strong>credibility signals</strong> (consistent business information, author credentials,
        external mentions). There is no paid shortcut — AI recommendations are editorially generated.
      </p>

      <h2 id="how-ai-reads-sites">How AI search engines read websites</h2>
      <p>
        Different AI search tools use different methods to gather information:
      </p>
      <ul>
        <li>
          <strong>Google AI Overviews</strong> use Google&apos;s existing search index — the same pages
          Googlebot has already crawled. Pages not indexed by Google cannot appear in AI Overviews.
          Google&apos;s AI then synthesizes answers from multiple indexed pages, prioritising those
          it considers high-quality and relevant.
        </li>
        <li>
          <strong>ChatGPT with Browse</strong> uses Bing&apos;s search index combined with real-time
          web fetching. OpenAI also has its own crawler (GPTBot) that indexes content for ChatGPT&apos;s
          knowledge base independently of Bing.
        </li>
        <li>
          <strong>Perplexity</strong> uses multiple search indices and its own crawler (PerplexityBot)
          to fetch pages in real time when answering queries.
        </li>
        <li>
          <strong>Gemini (Google)</strong> for web queries uses Google&apos;s index, similar to Google
          AI Overviews.
        </li>
      </ul>
      <p>
        The common requirement: your pages must be <strong>indexed</strong> (crawled and added to
        search indices) and <strong>readable</strong> (content accessible without JavaScript execution
        in many cases). Everything else builds on this foundation.
      </p>

      <h2 id="crawlability">Crawlability — can AI access your pages?</h2>
      <p>
        Check your <code>robots.txt</code> file at <code>yourdomain.com/robots.txt</code>. This file
        tells crawlers which pages to access. Common mistakes:
      </p>
      <ul>
        <li>
          <code>Disallow: /</code> — blocks all crawlers from the entire site. Usually from a
          development misconfiguration that was never reversed after launch.
        </li>
        <li>
          Blocking specific AI crawlers. If you want AI search visibility, do not block GPTBot
          (OpenAI), PerplexityBot, or Googlebot-Extended. Your robots.txt should allow them:
        </li>
      </ul>
      <pre><code>{`# Allow all well-behaved crawlers
User-agent: *
Allow: /

# Block only sensitive internal areas
Disallow: /admin/
Disallow: /api/private/`}</code></pre>
      <p>
        Also check: is your key content in the HTML source, or loaded by JavaScript? View a page&apos;s
        source (right-click → View Page Source) and search for a phrase from your main content.
        If it is not there, crawlers that do not execute JavaScript (common for AI crawlers) will
        not see it. Server-side rendering (SSR) or static generation in Next.js solves this.
      </p>

      <h2 id="page-structure">Clear page structure</h2>
      <p>
        AI tools extract structured information from page content. A well-structured page makes this
        reliable; a poorly structured page produces inconsistent extraction.
      </p>
      <ul>
        <li>
          <strong>One H1 per page</strong> — clearly identifies the page topic. Matches the title
          tag and primary keyword.
        </li>
        <li>
          <strong>H2 headings for major sections</strong> — AI tools use heading text as signals
          for section content. Write headings as topic summaries, not clever titles.
        </li>
        <li>
          <strong>Short, direct paragraphs</strong> — AI extraction works better on concise,
          structured paragraphs than dense prose. One idea per paragraph.
        </li>
        <li>
          <strong>Bullet points and numbered lists</strong> — structured formats are particularly
          well-suited for AI extraction and display in AI Overview cards.
        </li>
        <li>
          <strong>Answer at the top</strong> — for informational content, state the direct answer
          in the first paragraph. AI tools that generate summaries often extract the first
          substantive sentence.
        </li>
      </ul>

      <h2 id="useful-answers">Writing content that directly answers questions</h2>
      <p>
        AI search tools are fundamentally answer engines. They work best with content written in
        question-and-answer format. For every service or topic page:
      </p>
      <ol>
        <li>
          <strong>Identify the questions your customers ask</strong> — use Google Search Console
          (queries report), &ldquo;People Also Ask&rdquo; in Google, or simply your customer support inbox.
        </li>
        <li>
          <strong>Write a direct answer first</strong> — start the answer with the most direct
          response possible (one or two sentences). Add detail in subsequent paragraphs.
        </li>
        <li>
          <strong>Use the customer&apos;s phrasing</strong> — the question heading should match how
          a customer would naturally ask it, not how you would phrase it internally.
        </li>
      </ol>
      <p>
        Example — weak heading: <em>&ldquo;Our Service Methodology&rdquo;</em>
        {" "}— Strong heading: <em>&ldquo;How does the website development process work?&rdquo;</em>
      </p>
      <p>
        A page with 5–8 genuine questions answered directly is far more likely to be cited in an
        AI response than a page with the same word count in flowing prose.
      </p>

      <h2 id="structured-data">Structured data</h2>
      <p>
        Structured data (schema markup) labels your content in a machine-readable format, reducing
        the ambiguity of text extraction. Implement these for small business websites:
      </p>
      <ul>
        <li>
          <strong>LocalBusiness or ProfessionalService schema</strong> — on your homepage or
          contact page. Include <code>name</code>, <code>address</code>, <code>telephone</code>,
          <code>url</code>, <code>openingHours</code>, and <code>areaServed</code>.
        </li>
        <li>
          <strong>FAQPage schema</strong> — on pages with genuine question-and-answer sections.
          Each question becomes a <code>Question</code> entity; each answer a <code>Answer</code>.
        </li>
        <li>
          <strong>Article or BlogPosting schema</strong> — on blog posts. Include
          <code>author</code>, <code>datePublished</code>, <code>dateModified</code>, and
          <code>headline</code>.
        </li>
        <li>
          <strong>BreadcrumbList schema</strong> — shows site hierarchy in search results and
          helps AI understand page categorization.
        </li>
      </ul>
      <p>
        Google states that no specific schema is <em>required</em> to appear in AI features —
        pages need to be indexed and eligible for standard snippets. Schema helps machines read
        your information accurately, which in turn improves how AI tools represent your business.
      </p>

      <h2 id="credibility">Source credibility signals</h2>
      <p>
        AI search tools cross-reference multiple sources before forming recommendations. Credibility
        signals that matter:
      </p>
      <ul>
        <li>
          <strong>Consistent NAP (Name, Address, Phone)</strong> — your business details must match
          across your website, Google Business Profile, LinkedIn, Justdial, and any directories.
          Inconsistencies reduce AI confidence in your business information.
        </li>
        <li>
          <strong>Author credentials on content</strong> — named authors with relevant experience
          stated in a bio. AI tools that assess E-E-A-T (Experience, Expertise, Authoritativeness,
          Trustworthiness) look for identifiable human authorship.
        </li>
        <li>
          <strong>External mentions</strong> — press coverage, industry directories, guest posts,
          and partner links from credible sites all contribute to the picture AI builds of your
          business.
        </li>
        <li>
          <strong>Verified Google Business Profile</strong> — a verified, complete GBP is one
          of the clearest signals that your business is real and operating. Complete all fields:
          category, hours, description, photos, Q&amp;A.
        </li>
      </ul>

      <h2 id="internal-links">Internal linking</h2>
      <p>
        Internal links help AI crawlers discover all your pages and understand the relationships
        between them. Key practices:
      </p>
      <ul>
        <li>
          Every important page should be linked from at least one other page on your site.
          &ldquo;Orphan pages&rdquo; (no internal links) are crawled less frequently.
        </li>
        <li>
          Use descriptive anchor text — &ldquo;read our Google Ads guide&rdquo; rather than &ldquo;click here.&rdquo;
          Anchor text is a signal for the destination page&apos;s topic.
        </li>
        <li>
          Link related articles together (as this site does in article footers) — this creates
          a topic cluster that signals expertise depth on a subject.
        </li>
      </ul>

      <h2 id="what-you-can-measure">What you can actually measure</h2>
      <p>
        AI search visibility is harder to measure than traditional search visibility. Honest
        assessment of what is available:
      </p>
      <ul>
        <li>
          <strong>Google Search Console</strong> — includes traffic from Google AI Overviews in
          the &ldquo;Web&rdquo; search type. A separate AI performance report is rolling out to some
          accounts. Monitor organic impressions and clicks; improvement correlates with AI visibility.
        </li>
        <li>
          <strong>Manual testing</strong> — regularly query ChatGPT, Gemini, and Perplexity for
          your service + location (e.g., &ldquo;best web developer in Surat&rdquo;). Record which businesses
          are mentioned. Results vary; treat these as snapshots.
        </li>
        <li>
          <strong>Referral traffic</strong> — check Google Analytics for referral traffic from
          perplexity.ai, chatgpt.com, or bing.com (Copilot). These represent users who clicked
          through from AI search results.
        </li>
      </ul>
      <p>
        There is no tool that shows a &ldquo;rank&rdquo; in AI search the way Google Search Console shows
        traditional rankings. Avoid services promising guaranteed AI search positions — no such
        product can deliver this reliably.
      </p>

      <h2 id="checklist">AI search visibility checklist</h2>
      <ArticleChecklist
        title="AI Search Visibility Checklist"
        items={checklistItems}
      />

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Does schema markup guarantee I will appear in AI search answers?</h3>
      <p>
        No — and any service claiming this is inaccurate. Schema helps AI systems read your
        information accurately, which can improve how they represent your business. Whether you
        are cited in a specific answer depends on relevance, credibility, and the query — factors
        you influence over time but cannot control directly.
      </p>

      <h3>How long does it take to improve AI search visibility?</h3>
      <p>
        The same timeline as traditional SEO: weeks to months for technical changes to take effect
        as pages are re-crawled, and months to see consistent results from content improvements.
        There are no quick wins. Consistent content creation and credibility building over 6–12
        months produces measurable change.
      </p>

      <h3>Should I block AI crawlers from my website?</h3>
      <p>
        Only if you have specific reasons not to want your content used as AI training data or
        referenced in AI answers. Blocking GPTBot prevents OpenAI from using your content in
        ChatGPT training and reduces ChatGPT search visibility. For most businesses seeking
        organic discovery, keeping major AI crawlers enabled is in your interest.
      </p>

      <p>
        For the specific case of local businesses, the earlier{" "}
        <Link href="/blog/ai-search-visibility-2026">AI visibility guide for 2026</Link> covers
        Google Business Profile and local signals in more detail. For the technical performance
        foundation, see the{" "}
        <Link href="/blog/core-web-vitals-optimization-2026">Core Web Vitals optimization guide</Link>.
      </p>
    </ArticleLayout>
  );
}
