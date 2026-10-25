import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";

const slug = "web-development-updates-october-2026";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "web development updates October 2026",
    "JavaScript framework updates 2026",
    "browser updates October 2026",
    "Next.js update October 2026",
    "TypeScript 5.7 release",
    "CSS updates October 2026",
    "web standards October 2026",
  ],
});

const toc = [
  { id: "overview", label: "What changed this month" },
  { id: "frameworks", label: "Framework releases" },
  { id: "browsers", label: "Browser announcements" },
  { id: "css", label: "CSS updates worth knowing" },
  { id: "web-standards", label: "Web standards and specifications" },
  { id: "what-to-learn-next", label: "What to learn next" },
  { id: "faqs", label: "Frequently asked questions" },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want a developer who builds with current standards, not outdated patterns?",
        text: "I stay current with the web platform and build sites using modern CSS, current framework best practices, and proper performance techniques. Let's talk about your project.",
      }}
    >
      <ArticleToC items={toc} />

      <p>
        <em>
          This article covers significant web development releases from October 2026. Each item
          includes source links to official documentation or release notes. Migration advice is
          included where the change requires developer action.
        </em>
      </p>

      <h2 id="overview">What changed this month</h2>
      <p>
        October 2026&apos;s web development releases were framework-heavy — Next.js 15.1, Vite 6.0 stable,
        and TypeScript 5.7 all shipped within the same month. Browser vendors pushed two notable
        interoperability wins: CSS Anchor Positioning now has full cross-browser support, and the
        Speculation Rules API reached stable in Chrome 130. Here is everything that needs to be on
        your radar, in order of relevance.
      </p>

      <h2 id="frameworks">Framework releases</h2>

      <h3>Next.js 15.1</h3>
      <p>
        <strong>Source:</strong> nextjs.org/blog/next-15-1<br />
        <strong>Breaking changes:</strong> None (minor release)<br />
        <strong>Migration effort:</strong> Low — standard <code>npm update next</code>
      </p>
      <p>
        Next.js 15.1 is a non-breaking minor release from Vercel. Key additions:
      </p>
      <ul>
        <li>
          <strong><code>after()</code> API — stable:</strong> Allows code to run after a response is
          sent to the client, without blocking the response. Use cases: logging, analytics calls,
          non-critical post-request operations. Previously experimental; now stable in 15.1.
          <pre><code>{`import { after } from 'next/server';

export async function GET(request) {
  const response = await getResponseData();
  
  // Runs after response is sent — doesn't block client
  after(async () => {
    await logAnalyticsEvent('api_call', { path: request.url });
  });
  
  return Response.json(response);
}`}</code></pre>
        </li>
        <li>
          <strong><code>next.config.ts</code> — stable:</strong> TypeScript configuration file support,
          previously experimental. Rename <code>next.config.js</code> to <code>next.config.ts</code>
          and add types for full TypeScript support in your configuration.
        </li>
        <li>
          <strong>Error overlay improvements:</strong> The development error overlay now links
          directly to the relevant Next.js documentation section for the error type shown.
        </li>
        <li>
          <strong>Cold start reduction:</strong> Approximately 18% improvement in serverless function
          cold start times on Vercel infrastructure (internal Vercel benchmark).
        </li>
      </ul>
      <p>
        <strong>Should you update?</strong> Yes — no breaking changes, incremental improvements,
        and the <code>after()</code> API stable release is worth adopting for analytics and logging
        use cases.
      </p>

      <h3>TypeScript 5.7</h3>
      <p>
        <strong>Source:</strong> devblogs.microsoft.com/typescript/announcing-typescript-5-7/<br />
        <strong>Breaking changes:</strong> Minor — some previously-allowed patterns now error in
        strict mode. Check the release notes.<br />
        <strong>Migration effort:</strong> Low for most projects
      </p>
      <p>
        TypeScript 5.7 shipped with three improvements relevant to most developers:
      </p>
      <ul>
        <li>
          <strong>Path rewriting for <code>.ts</code> → <code>.js</code> imports:</strong> When
          writing ESM TypeScript, you previously had to import with <code>.js</code> extensions
          (even though the file was <code>.ts</code>) for correct emit output. TypeScript 5.7
          handles this mapping, reducing the friction of ESM TypeScript projects.
        </li>
        <li>
          <strong>Uninitialised variable detection improvements:</strong> TypeScript now catches
          a broader class of cases where a variable might be used before initialisation across
          all code paths. Some code that was previously allowed will now error — these are usually
          real bugs.
        </li>
        <li>
          <strong>Performance:</strong> 10–15% faster type checking in large monorepos via improved
          module resolution caching.
        </li>
      </ul>
      <p>
        <strong>Migration note:</strong> Run <code>npx tsc --noEmit</code> after upgrading to catch
        any new errors the stricter checks surface. Address each one — they reflect real improvements
        to type safety, not noise.
      </p>

      <h3>Vite 6.0 stable</h3>
      <p>
        <strong>Source:</strong> vitejs.dev/blog/announcing-vite6<br />
        <strong>Breaking changes:</strong> Yes — see migration guide<br />
        <strong>Migration effort:</strong> Medium — plugin compatibility check required
      </p>
      <p>
        Vite 6.0 stabilised the Environment API and previewed Rolldown integration. The primary
        developer-facing change: the Environment API is now the recommended way for plugins to
        handle multiple build targets (browser, SSR, edge). Plugins that relied on internal
        Vite APIs for this may need updates.
      </p>
      <p>
        <strong>For most developers using Vite for React/Vue projects:</strong> Vite 6 is a
        straightforward upgrade if all your plugins have been updated for 6.x compatibility.
        Check your key plugins&apos; changelogs before upgrading. The Vite 6 migration guide at
        vitejs.dev is comprehensive and clearly lists breaking changes by category.
      </p>

      <h3>React 19.1</h3>
      <p>
        <strong>Source:</strong> React GitHub releases<br />
        <strong>Breaking changes:</strong> None (patch release)<br />
        <strong>Migration effort:</strong> None required
      </p>
      <p>
        React 19.1 is a targeted patch release. The main improvement: hydration errors caused by
        browser extensions injecting into the DOM are now handled more gracefully — instead of
        propagating as unresolvable hydration mismatches, they are suppressed and logged to the
        console with a specific explanation. This makes debugging extension-related hydration issues
        significantly easier.
      </p>

      <h2 id="browsers">Browser announcements</h2>

      <h3>Chrome 130: Speculation Rules API stable</h3>
      <p>
        <strong>Source:</strong> developer.chrome.com/blog<br />
        <strong>Availability:</strong> Chrome 130+ (stable); not yet in Firefox or Safari
      </p>
      <p>
        The Speculation Rules API, which enables pre-rendering of pages before the user navigates
        to them, reached stable in Chrome 130. Pre-rendered pages load near-instantly because
        the browser has already fetched, parsed, and rendered them in a background context.
      </p>
      <p>
        <strong>Implementation:</strong> Add a JSON script tag to declare which URLs to speculate on:
      </p>
      <pre><code>{`<script type="speculationrules">
{
  "prerender": [
    {
      "where": { "href_matches": "/*" },
      "eagerness": "moderate"
    }
  ]
}
</script>`}</code></pre>
      <p>
        <strong>Key constraints:</strong> Same-origin only; Chrome applies conservative limits on
        how many pages can be pre-rendered simultaneously; does not work for pages that set
        <code>Cache-Control: no-store</code>.
      </p>
      <p>
        <strong>For Next.js developers:</strong> <code>next/link</code> prefetches JavaScript
        by default, which is different from full pre-rendering. Native integration between
        Next.js and the Speculation Rules API is on the roadmap but not yet available.
      </p>

      <h3>Firefox: CSS Anchor Positioning enabled by default</h3>
      <p>
        <strong>Source:</strong> Mozilla blog (blog.mozilla.org)<br />
        <strong>Availability:</strong> Cross-browser (Chrome 125+, Safari 18, Firefox 131+)
      </p>
      <p>
        CSS Anchor Positioning achieved cross-browser support in October when Firefox enabled it
        by default. This CSS feature allows elements to be positioned relative to a named &ldquo;anchor&rdquo;
        element anywhere in the DOM — enabling tooltips, dropdowns, and popovers that stay
        correctly positioned without JavaScript.
      </p>
      <pre><code>{`/* Define the anchor */
.button {
  anchor-name: --my-button;
}

/* Position the tooltip relative to the anchor */
.tooltip {
  position: absolute;
  position-anchor: --my-button;
  top: anchor(bottom);
  left: anchor(center);
}`}</code></pre>
      <p>
        <strong>Migration opportunity:</strong> If you have tooltip or popover logic implemented
        with JavaScript position calculations, evaluate whether CSS Anchor Positioning can replace
        it. Browser support is now sufficient to use in production (with a fallback for very old
        browsers).
      </p>

      <h3>Safari 18.2: Web Animations API fix</h3>
      <p>
        <strong>Source:</strong> Safari Release Notes (webkit.org/blog)<br />
        <strong>Availability:</strong> Safari 18.2 (iOS 18.2, macOS Sequoia)
      </p>
      <p>
        Safari 18.2 fixed a timing bug in the Web Animations API that caused animation timing
        to drift in certain looping scenarios. If you have reported animation inconsistencies
        specifically on Safari, test again in 18.2.
      </p>

      <h2 id="css">CSS updates worth knowing</h2>

      <h3>CSS Nesting — fully stable across all browsers</h3>
      <p>
        CSS Nesting (the ability to write nested CSS rules without a preprocessor) is now
        stable in Chrome, Firefox, and Safari. If you are still using Sass/LESS primarily for
        nesting syntax, native CSS nesting removes that dependency for new projects.
      </p>
      <pre><code>{`.card {
  background: white;
  padding: 1rem;
  
  /* Native CSS nesting — no Sass required */
  &:hover {
    background: #f5f5f5;
  }
  
  & .card-title {
    font-size: 1.25rem;
    font-weight: 600;
  }
}`}</code></pre>

      <h3>@layer — established as a standard pattern</h3>
      <p>
        CSS <code>@layer</code> (cascade layers) is now used by most major UI libraries and
        design systems to manage CSS specificity. If you are building a design system or working
        with a framework that uses layers, understanding the cascade layer order in your project
        prevents specificity conflicts.
      </p>

      <h2 id="web-standards">Web standards and specifications</h2>

      <h3>View Transitions Level 2 — W3C Candidate Recommendation</h3>
      <p>
        <strong>Source:</strong> w3.org/TR/css-view-transitions-2/<br />
        <strong>Availability:</strong> Level 1 is in Chrome; Level 2 (cross-document) is experimental
      </p>
      <p>
        The W3C published View Transitions Level 2 as a Candidate Recommendation. Level 2 adds
        cross-document transitions — animated page transitions for multi-page apps (MPAs) without
        JavaScript. A user navigating from page A to page B sees a smooth, CSS-defined transition
        between the two page states.
      </p>
      <p>
        <strong>Current status:</strong> Level 1 (same-document, single-page app transitions) is
        stable in Chrome. Level 2 (cross-document, MPA transitions) is in development — Chrome
        has an experimental implementation behind a flag. Not yet in production use.
      </p>

      <h3>Temporal API — Stage 3 in TC39</h3>
      <p>
        The Temporal API — JavaScript&apos;s long-awaited modern date and time library — remains at
        TC39 Stage 3 (finalising specification). A polyfill is available for production use:
        <a href="https://github.com/tc39/proposal-temporal" rel="noopener noreferrer">
          github.com/tc39/proposal-temporal
        </a>. Native browser support is not yet widely available — do not use without a polyfill.
        When Temporal ships natively, it will replace the common pattern of importing
        <code>date-fns</code> or <code>dayjs</code> for most date operations.
      </p>

      <h2 id="what-to-learn-next">What to learn next</h2>
      <p>
        Based on October&apos;s releases, these are the skills most worth investing time in heading
        into Q1 2027:
      </p>
      <ul>
        <li>
          <strong>CSS Anchor Positioning</strong> — now cross-browser and stable. If you build
          UI components with tooltips, dropdowns, or popovers, learning this reduces your
          JavaScript dependency in a meaningful way.
        </li>
        <li>
          <strong>Next.js <code>after()</code> API</strong> — for anyone building Next.js applications
          that do post-request processing (analytics, logging, notifications), this API improves
          response time with no functional downside.
        </li>
        <li>
          <strong>TypeScript 5.7</strong> — upgrade and address any new errors the stricter checks
          surface. They are worth fixing.
        </li>
        <li>
          <strong>Speculation Rules API</strong> — worth understanding for sites where navigation
          speed is a conversion factor, even though full framework integration is still pending.
        </li>
      </ul>

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Should I upgrade to Next.js 15.1 now?</h3>
      <p>
        Yes. No breaking changes, meaningful improvements, and the stable <code>after()</code> API
        is useful immediately. Run your test suite after upgrading to confirm nothing is affected
        by internal changes.
      </p>

      <h3>Should I migrate from Vite 5 to Vite 6 immediately?</h3>
      <p>
        Check plugin compatibility first. If all your key plugins have released Vite 6 compatible
        versions, yes — upgrade. If any critical plugin does not yet support Vite 6, wait for the
        plugin update rather than staying on an incompatible combination.
      </p>

      <h3>Is CSS Anchor Positioning safe to use in production?</h3>
      <p>
        Yes, with a fallback for older browsers. Can I Use shows approximately 85–90% global browser
        support as of late 2026. Add a <code>@supports (anchor-name: --x)</code> check and fall
        back to a JavaScript-positioned approach for browsers that do not support it, or accept
        that the feature gracefully degrades (if the tooltip position being slightly off is acceptable).
      </p>

      <p>
        For the Next.js context behind this month&apos;s update, read the{" "}
        <Link href="/blog/nextjs-vs-react-2026">Next.js vs React guide</Link>. For the TypeScript
        practices that make 5.7&apos;s stricter checks useful, see{" "}
        <Link href="/blog/typescript-best-practices-2026">TypeScript best practices 2026</Link>.
      </p>
    </ArticleLayout>
  );
}
