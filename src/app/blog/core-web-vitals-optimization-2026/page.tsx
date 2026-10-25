import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleChecklist } from "@/components/blog/ArticleChecklist";
import { ComparisonTable } from "@/components/blog/ArticleWidgets";

const slug = "core-web-vitals-optimization-2026";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "Core Web Vitals optimization 2026",
    "improve LCP score",
    "fix CLS layout shift",
    "INP interaction to next paint",
    "PageSpeed Insights optimization",
    "Google ranking signals 2026",
    "Core Web Vitals guide developer",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "what-are-cwv", label: "What Core Web Vitals are" },
  { id: "lcp", label: "Largest Contentful Paint (LCP)" },
  { id: "cls", label: "Cumulative Layout Shift (CLS)" },
  { id: "inp", label: "Interaction to Next Paint (INP)" },
  { id: "measuring", label: "How to measure your scores" },
  { id: "nextjs-optimizations", label: "Framework-specific optimizations (Next.js)" },
  { id: "checklist", label: "Core Web Vitals checklist" },
  { id: "faqs", label: "Frequently asked questions" },
];

const metricsRows = [
  {
    label: "What it measures",
    a: "Load time of the largest visible element",
    b: "Visual stability — how much the page jumps",
  },
  {
    label: "Good threshold",
    a: "≤ 2.5 seconds",
    b: "≤ 0.1 (score, not seconds)",
  },
  {
    label: "Needs improvement",
    a: "2.5 – 4.0 seconds",
    b: "0.1 – 0.25",
  },
  {
    label: "Poor",
    a: "> 4.0 seconds",
    b: "> 0.25",
  },
  {
    label: "Common causes",
    a: "Large unoptimized images, render-blocking resources, slow servers",
    b: "Images/ads without dimensions, late-injected content, web fonts",
  },
  {
    label: "Primary fix",
    a: "Optimize hero image: WebP, preload, correct sizing",
    b: "Reserve space for all content: width/height on images, font-display: optional",
  },
];

const checklistItems = [
  {
    id: "lcp-image",
    label: "Identify the LCP element and preload it",
    detail: "Run PageSpeed Insights to find your LCP element. Add <link rel=\"preload\"> for hero images.",
  },
  {
    id: "image-format",
    label: "Convert images to WebP or AVIF",
    detail: "WebP is 25–35% smaller than JPEG. AVIF is smaller still but has slightly less browser support.",
  },
  {
    id: "image-dimensions",
    label: "Add explicit width and height to all images",
    detail: "Missing dimensions are the leading cause of CLS. Browsers need dimensions to reserve space before the image loads.",
  },
  {
    id: "font-display",
    label: "Set font-display: optional or swap for web fonts",
    detail: "font-display: optional prevents layout shift entirely by using the fallback if the web font isn't ready. 'swap' shows fallback text immediately.",
  },
  {
    id: "ttfb",
    label: "Check Time to First Byte (TTFB) — aim for < 600ms",
    detail: "Slow TTFB means slow LCP. Causes: slow server, no CDN, heavy database queries on every request.",
  },
  {
    id: "render-blocking",
    label: "Remove render-blocking scripts",
    detail: "Add defer or async to non-critical scripts. Move CSS that isn't needed for above-the-fold content to lazy-loaded stylesheets.",
  },
  {
    id: "inp-handlers",
    label: "Audit long-running event handlers",
    detail: "If a click handler takes > 200ms, INP will be poor. Break long tasks with setTimeout(fn, 0) or use requestIdleCallback for non-urgent work.",
  },
  {
    id: "cdn",
    label: "Serve static assets from a CDN",
    detail: "CDNs reduce latency for geographically distributed users. Most hosting platforms (Vercel, Netlify, Cloudflare Pages) include this automatically.",
  },
  {
    id: "lazy-load",
    label: "Lazy-load below-the-fold images",
    detail: "Add loading=\"lazy\" to images that are not visible on initial load. Do NOT apply this to the LCP image.",
  },
  {
    id: "field-data",
    label: "Monitor field data (CrUX) not just lab data",
    detail: "PageSpeed Insights lab scores are synthetic. Field data from Chrome UX Report shows what real users experience.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Is your website failing Core Web Vitals?",
        text: "I audit and optimize Next.js and React websites for Core Web Vitals, PageSpeed scores, and real-world performance. Send me your URL and I'll identify the most impactful fixes.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        Core Web Vitals are three Google-defined performance metrics — <strong>LCP</strong> (how fast your main
        content loads), <strong>CLS</strong> (how much the page jumps around while loading), and{" "}
        <strong>INP</strong> (how quickly the page responds to user interactions). Google uses them as{" "}
        <strong>ranking signals</strong> in organic search. The highest-impact fixes are almost always:
        optimizing your hero image for LCP, adding explicit dimensions to images for CLS, and auditing
        slow JavaScript event handlers for INP.
      </p>

      <h2 id="what-are-cwv">What Core Web Vitals are</h2>
      <p>
        Google introduced Core Web Vitals in 2020 as a standardized set of user experience metrics. They became
        a confirmed ranking signal with the Page Experience Update in 2021. In March 2024,{" "}
        <strong>Interaction to Next Paint (INP) replaced First Input Delay (FID)</strong> as the third metric,
        reflecting a more comprehensive measure of page interactivity.
      </p>
      <p>
        Each metric is assessed against three thresholds: <strong>Good</strong>, <strong>Needs Improvement</strong>,
        and <strong>Poor</strong>. Google uses the <strong>75th percentile</strong> of field data from real Chrome
        users (the Chrome UX Report, or CrUX) to assess a page&apos;s performance — meaning 75% of visits must
        meet the &ldquo;Good&rdquo; threshold for a page to be considered passing.
      </p>
      <p>
        Two types of data are available:
      </p>
      <ul>
        <li>
          <strong>Lab data</strong> — a simulated test in a controlled environment (what PageSpeed Insights
          and Lighthouse measure). Fast to get, but may not reflect real user conditions.
        </li>
        <li>
          <strong>Field data</strong> — real measurements from actual Chrome users visiting your site,
          aggregated in the CrUX dataset. This is what Google uses for ranking.
        </li>
      </ul>
      <p>
        A page can score well in lab tests but poorly in field data (due to slow user devices, ad scripts, or
        geographic latency), and vice versa. Always optimise for field data.
      </p>

      <h2 id="lcp">Largest Contentful Paint (LCP)</h2>
      <p>
        LCP measures the time from when the user first navigates to a page until the <strong>largest content
        element visible in the viewport</strong> has finished rendering. The LCP element is typically a hero
        image, a large heading, or a video poster frame.
      </p>
      <p>
        <strong>Good:</strong> ≤ 2.5 seconds &nbsp;|&nbsp; <strong>Poor:</strong> &gt; 4.0 seconds
      </p>

      <h3>Primary causes of poor LCP</h3>
      <ul>
        <li>
          <strong>Unoptimized hero images</strong> — large JPEGs or PNGs served at full resolution are
          the single most common cause. Use WebP or AVIF, compress aggressively, and size images to their
          display size.
        </li>
        <li>
          <strong>Missing preload hint</strong> — the browser discovers the LCP image late because it must
          first parse the HTML and CSS. A <code>&lt;link rel=&quot;preload&quot;&gt;</code> hint tells
          the browser to start fetching it immediately.
        </li>
        <li>
          <strong>Slow server response (TTFB)</strong> — everything downstream is delayed if the server takes
          more than 600ms to respond. Causes: no caching, heavy server-side computation, slow database queries.
        </li>
        <li>
          <strong>Render-blocking resources</strong> — scripts and stylesheets that block rendering delay
          how quickly anything appears on screen.
        </li>
        <li>
          <strong>Client-side rendering without SSR</strong> — in SPAs that render entirely in JavaScript,
          the LCP element doesn&apos;t exist in the initial HTML. The browser sees a blank page until JS
          executes. Server-side rendering (SSR) or static generation solves this.
        </li>
      </ul>

      <h3>Fixing LCP: step by step</h3>
      <ol>
        <li>Run PageSpeed Insights and identify your LCP element</li>
        <li>Convert the image to WebP. Aim for &lt; 100KB for most hero images</li>
        <li>Add <code>fetchpriority=&quot;high&quot;</code> attribute to the LCP image element</li>
        <li>
          Add a preload hint in <code>&lt;head&gt;</code>:{" "}
          <code>&lt;link rel=&quot;preload&quot; as=&quot;image&quot; href=&quot;/hero.webp&quot;&gt;</code>
        </li>
        <li>Ensure your server or CDN responds in &lt; 200ms to cached resources</li>
        <li>
          Remove or defer any JavaScript that executes before the LCP element renders
        </li>
      </ol>

      <h2 id="cls">Cumulative Layout Shift (CLS)</h2>
      <p>
        CLS measures <strong>visual stability</strong> — how much page content moves unexpectedly during loading.
        It is a score (not a time), calculated from the size of the shifted content multiplied by the distance
        it moved.
      </p>
      <p>
        <strong>Good:</strong> ≤ 0.1 &nbsp;|&nbsp; <strong>Poor:</strong> &gt; 0.25
      </p>
      <p>
        A high CLS score means users accidentally click the wrong button because content moved while they were
        reaching for it — one of the most frustrating web experiences.
      </p>

      <h3>Primary causes of poor CLS</h3>
      <ul>
        <li>
          <strong>Images without dimensions</strong> — when a browser doesn&apos;t know an image&apos;s size
          before it loads, it renders with zero height initially, then expands when the image arrives,
          pushing content down. Always add <code>width</code> and <code>height</code> attributes.
        </li>
        <li>
          <strong>Web fonts causing FOUT</strong> — when a custom font loads, text reflows if the fallback
          and web font have different metrics. Use <code>font-display: optional</code> (no shift) or a
          font size adjuster CSS property.
        </li>
        <li>
          <strong>Dynamically injected content</strong> — ads, banners, cookie notices, or chat widgets
          that inject into the DOM above existing content will shift everything below them.
        </li>
        <li>
          <strong>Animations using top/left/margin</strong> — use <code>transform</code> instead. Transform
          animations are composited on the GPU and do not affect layout.
        </li>
      </ul>

      <h2 id="inp">Interaction to Next Paint (INP)</h2>
      <p>
        INP replaced First Input Delay (FID) in March 2024. It measures the latency of <strong>all user
        interactions</strong> (clicks, taps, keyboard input) throughout a page&apos;s lifetime, not just the
        first one. The 75th-percentile worst interaction is reported.
      </p>
      <p>
        <strong>Good:</strong> ≤ 200 milliseconds &nbsp;|&nbsp; <strong>Poor:</strong> &gt; 500 milliseconds
      </p>

      <h3>Primary causes of poor INP</h3>
      <ul>
        <li>
          <strong>Heavy JavaScript execution on the main thread</strong> — the browser can only do one thing
          at a time. If a script is parsing, executing, or responding to a previous interaction, new
          interactions are queued.
        </li>
        <li>
          <strong>Long event handlers</strong> — a click handler that runs complex logic synchronously blocks
          the browser from updating the UI.
        </li>
        <li>
          <strong>Third-party scripts</strong> — analytics, ads, chat widgets, and A/B testing tools are a
          major source of main-thread contention.
        </li>
        <li>
          <strong>React hydration on large pages</strong> — React attaches event listeners to a fully
          server-rendered page during hydration. If this takes too long, interactions before hydration
          completes are delayed.
        </li>
      </ul>

      <h3>Fixing INP</h3>
      <ul>
        <li>Break long tasks into smaller ones using <code>setTimeout(fn, 0)</code> or the newer{" "}
          <code>scheduler.yield()</code> API</li>
        <li>Move non-critical work to <code>requestIdleCallback</code></li>
        <li>Reduce third-party script impact with <code>async</code>, <code>defer</code>, or loading them
          after user interaction</li>
        <li>Use React&apos;s <code>startTransition</code> for non-urgent state updates to prevent blocking
          the UI during re-renders</li>
        <li>Implement partial hydration or lazy hydration with libraries like <code>react-lazy-hydration</code></li>
      </ul>

      <h2 id="measuring">How to measure your Core Web Vitals scores</h2>
      <p>
        Use these tools in combination — no single tool gives the complete picture:
      </p>
      <ul>
        <li>
          <strong>PageSpeed Insights</strong> (pagespeed.web.dev) — shows both lab and field data for any
          public URL. The fastest way to get a score and identify your LCP element. Start here.
        </li>
        <li>
          <strong>Google Search Console</strong> — Core Web Vitals report groups your pages into Good, Needs
          Improvement, and Poor based on real CrUX field data. The only way to see how your whole site is
          performing for real users.
        </li>
        <li>
          <strong>Chrome DevTools</strong> — the Performance tab records a trace of a page load or
          interaction. The Interactions track shows INP contributions. Essential for diagnosing
          root causes.
        </li>
        <li>
          <strong>web-vitals JavaScript library</strong> — add to your site to measure and report real user
          Web Vitals to your analytics platform.
        </li>
        <li>
          <strong>Lighthouse CI</strong> — run lab performance checks automatically in your CI/CD pipeline
          to catch regressions before they reach production.
        </li>
      </ul>

      <h2 id="nextjs-optimizations">Framework-specific optimizations (Next.js)</h2>
      <p>
        Next.js provides built-in features that directly improve Core Web Vitals when used correctly:
      </p>
      <ul>
        <li>
          <strong><code>next/image</code></strong> — automatically generates WebP/AVIF variants, adds
          correct width/height to prevent CLS, lazy-loads below-the-fold images, and supports the{" "}
          <code>priority</code> prop to preload the LCP image.
        </li>
        <li>
          <strong><code>next/font</code></strong> — downloads Google Fonts at build time, self-hosts them,
          and generates <code>font-display: optional</code> CSS automatically. Zero layout shift from fonts.
        </li>
        <li>
          <strong><code>next/script</code></strong> with <code>strategy=&quot;lazyOnload&quot;</code> — defers
          third-party scripts until after the page is interactive, protecting LCP and INP.
        </li>
        <li>
          <strong>React Server Components</strong> — move data fetching server-side to eliminate client-side
          fetch waterfalls that delay LCP.
        </li>
        <li>
          <strong>Streaming with Suspense</strong> — serve fast content immediately while slower sections
          stream in, improving perceived LCP for the above-the-fold content.
        </li>
      </ul>

      <ComparisonTable
        colA="LCP (Largest Contentful Paint)"
        colB="CLS (Cumulative Layout Shift)"
        rows={metricsRows}
        note="INP (Interaction to Next Paint) good threshold: ≤ 200ms. Poor: > 500ms. Measured across all interactions during a page session, reported at the 75th percentile."
      />

      <h2 id="checklist">Core Web Vitals checklist</h2>
      <ArticleChecklist
        title="Core Web Vitals Optimization Checklist"
        items={checklistItems}
      />

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>How much do Core Web Vitals affect Google rankings?</h3>
      <p>
        Google has confirmed they are a ranking signal in its Page Experience system, but they are one factor
        among hundreds. Relevance and content quality dominate rankings; Core Web Vitals act as a tiebreaker
        between pages of similar quality. That said, poor scores (especially on mobile) can visibly depress
        rankings and always hurt conversion rates regardless of SEO impact.
      </p>

      <h3>My PageSpeed Insights score is high but my Search Console shows Poor. Why?</h3>
      <p>
        Lab scores (PageSpeed, Lighthouse) simulate ideal conditions — fast network, clean browser, no
        extensions, single user. Field data reflects real users: slow phones, slow connections, ad scripts,
        browser extensions, and geographic latency. Always use Search Console field data for SEO decisions.
      </p>

      <h3>Does Core Web Vitals apply to mobile and desktop separately?</h3>
      <p>
        Yes. Google assesses mobile and desktop separately using CrUX field data. Mobile thresholds use the
        same values but mobile devices are slower, so mobile scores are typically worse. Google&apos;s page
        experience signal for mobile search uses mobile field data.
      </p>

      <h3>How long does it take for Core Web Vitals improvements to affect rankings?</h3>
      <p>
        CrUX data reflects real user visits over the past 28 days. After deploying fixes, it takes at least
        28 days for your field data to fully reflect the improvement. Search Console updates weekly. Ranking
        changes may lag further behind the data update.
      </p>

      <p>
        For the Next.js features that make Core Web Vitals easier to achieve, read the{" "}
        <Link href="/blog/nextjs-vs-react-2026">Next.js vs React guide</Link>. For the SEO context in which
        page experience signals operate, see the{" "}
        <Link href="/blog/local-seo-small-business-india-2026">Local SEO guide for India</Link>.
      </p>
    </ArticleLayout>
  );
}
