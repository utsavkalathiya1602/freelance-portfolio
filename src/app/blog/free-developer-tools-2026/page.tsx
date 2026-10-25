import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";

const slug = "free-developer-tools-2026";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "free developer tools 2026",
    "best free web development tools",
    "free tools for web developers",
    "free debugging tools",
    "free accessibility testing tools",
    "free API testing tools",
    "free website performance tools",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "debugging", label: "Debugging and browser DevTools" },
  { id: "performance", label: "Performance and Core Web Vitals" },
  { id: "accessibility", label: "Accessibility testing" },
  { id: "api-testing", label: "API testing" },
  { id: "version-control", label: "Version control and code hosting" },
  { id: "deployment", label: "Deployment and hosting" },
  { id: "code-quality", label: "Code quality and linting" },
  { id: "ai-tools", label: "AI coding tools (free tiers)" },
  { id: "faqs", label: "Frequently asked questions" },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want a developer who uses professional tools and won't cut corners?",
        text: "I use the right tools for each job — free and paid — to build websites that perform, are accessible, and hold up over time. Let's talk about your project.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        The best free developer tools in 2026 are: <strong>Chrome DevTools</strong> (built into Chrome
        — the most powerful browser debugging suite available), <strong>Google PageSpeed Insights</strong>
        (free Core Web Vitals audit), <strong>axe DevTools</strong> (browser extension for accessibility
        testing), <strong>Hoppscotch</strong> (open-source API testing, free self-hosted or cloud free
        tier), <strong>GitHub</strong> (free public and private repositories), and <strong>Vercel /
        Netlify</strong> (free hosting for static sites and serverless functions). Each tool below
        has its free tier limits clearly stated.
      </p>

      <h2 id="debugging">Debugging and browser DevTools</h2>

      <h3>Chrome DevTools</h3>
      <p>
        <strong>Cost:</strong> Free (built into Google Chrome and Chromium-based browsers).<br />
        <strong>Free tier limit:</strong> Unlimited — no paywall, no account required.
      </p>
      <p>
        The most used developer tool in the world. Key panels for web developers:
      </p>
      <ul>
        <li>
          <strong>Elements</strong> — inspect and live-edit HTML and CSS. See computed styles,
          box model, event listeners, and DOM properties.
        </li>
        <li>
          <strong>Console</strong> — log output, JavaScript errors, network failures. The first
          place to look when something breaks.
        </li>
        <li>
          <strong>Network</strong> — see every HTTP request, response headers, payload, timing,
          and size. Essential for debugging API issues and slow page loads.
        </li>
        <li>
          <strong>Performance</strong> — record and analyse runtime performance. Identify long tasks,
          layout shifts, and rendering bottlenecks.
        </li>
        <li>
          <strong>Application</strong> — inspect cookies, localStorage, sessionStorage, IndexedDB,
          service workers, and manifest files.
        </li>
        <li>
          <strong>Lighthouse</strong> — built-in performance, accessibility, SEO, and best-practices
          audit. The same engine as PageSpeed Insights, running locally.
        </li>
      </ul>

      <h3>Firefox Developer Edition</h3>
      <p>
        <strong>Cost:</strong> Free.<br />
        <strong>Best for:</strong> CSS debugging (Firefox&apos;s CSS Grid inspector is better than
        Chrome&apos;s), privacy testing (Firefox&apos;s tracking protection differs from Chrome), and
        cross-browser compatibility verification.
      </p>

      <h3>React Developer Tools</h3>
      <p>
        <strong>Cost:</strong> Free browser extension (Chrome and Firefox).<br />
        <strong>Free tier limit:</strong> Unlimited.<br />
        Inspect React component trees, props, state, hooks, and re-render causes. The &ldquo;Profiler&rdquo;
        tab records renders and shows which components are causing performance issues.
      </p>

      <h2 id="performance">Performance and Core Web Vitals</h2>

      <h3>Google PageSpeed Insights</h3>
      <p>
        <strong>Cost:</strong> Free (<a href="https://pagespeed.web.dev" rel="noopener noreferrer">pagespeed.web.dev</a>).<br />
        <strong>Free tier limit:</strong> Unlimited URL audits; API has a quota of 25,000 requests/day
        (more than enough for manual use).
      </p>
      <p>
        Runs a Lighthouse audit on a real URL and shows Core Web Vitals (LCP, CLS, INP) with field
        data from Chrome User Experience Report where available. Both mobile and desktop scores.
        The &ldquo;Opportunities&rdquo; section gives specific actionable improvements with estimated impact.
      </p>

      <h3>WebPageTest</h3>
      <p>
        <strong>Cost:</strong> Free (<a href="https://webpagetest.org" rel="noopener noreferrer">webpagetest.org</a>).<br />
        <strong>Free tier limit:</strong> Generous free usage; Pro plans for advanced features.
      </p>
      <p>
        More detailed than PageSpeed Insights: filmstrip view of how a page loads visually, waterfall
        chart of all requests, content breakdown by type, multi-location testing (test from a server
        in Mumbai to simulate Indian user experience), and slow connection simulation.
      </p>

      <h3>Chrome DevTools Performance panel</h3>
      <p>
        Built into Chrome (free). For diagnosing JavaScript execution bottlenecks, layout thrashing,
        and long tasks that cause INP (Interaction to Next Paint) failures. Records real interaction
        performance, not just initial load.
      </p>

      <h2 id="accessibility">Accessibility testing</h2>

      <h3>axe DevTools (browser extension)</h3>
      <p>
        <strong>Cost:</strong> Free browser extension (Chrome and Firefox).<br />
        <strong>Free tier limit:</strong> Unlimited automated scans; the paid version adds guided
        testing and some advanced rules. The free version catches the majority of WCAG violations.
      </p>
      <p>
        The most widely used accessibility testing extension. Scans the current page for accessibility
        issues and explains each violation with the WCAG criterion it fails, why it matters, and how
        to fix it. Run it on every page before launch.
      </p>

      <h3>WAVE Web Accessibility Evaluation Tool</h3>
      <p>
        <strong>Cost:</strong> Free browser extension and free online tool (<a href="https://wave.webaim.org" rel="noopener noreferrer">wave.webaim.org</a>).<br />
        <strong>Free tier limit:</strong> Unlimited.
      </p>
      <p>
        Overlays visual indicators directly on the page showing errors, warnings, structural elements,
        and ARIA landmarks. Particularly useful for understanding heading structure, form label
        associations, and colour contrast at a glance.
      </p>

      <h3>Chrome DevTools Accessibility panel</h3>
      <p>
        Built into Chrome (free). In the Elements panel, select an element and open the
        &ldquo;Accessibility&rdquo; tab to see its computed accessibility name, role, and ARIA properties.
        Essential for debugging screen reader announcements and custom ARIA implementations.
      </p>

      <h2 id="api-testing">API testing</h2>

      <h3>Hoppscotch</h3>
      <p>
        <strong>Cost:</strong> Open source, free to self-host; free cloud tier available (<a href="https://hoppscotch.io" rel="noopener noreferrer">hoppscotch.io</a>).<br />
        <strong>Free tier limit:</strong> Unlimited requests; team features and workspace sync require
        a paid plan.
      </p>
      <p>
        A modern, lightweight alternative to Postman. Browser-based, fast, and open source. Supports
        REST, GraphQL, WebSocket, and SSE testing. Import OpenAPI specs. Works fully in the browser
        — no desktop app download required.
      </p>

      <h3>Postman (free tier)</h3>
      <p>
        <strong>Cost:</strong> Free tier available.<br />
        <strong>Free tier limit:</strong> 1,000 mock server calls/month; unlimited manual API requests;
        limited to 3 users for collaboration. The free tier is adequate for individual developers.
      </p>
      <p>
        More feature-rich than Hoppscotch for large API collections: environment variables, test
        scripting, collection runners, and mock servers. The industry standard for API testing;
        widely used in team environments.
      </p>

      <h3>curl (command-line)</h3>
      <p>
        <strong>Cost:</strong> Free, pre-installed on macOS and Linux; available for Windows.<br />
        <strong>Best for:</strong> Quick one-off API tests, scripting, and when a GUI tool is
        unavailable. Every developer should be comfortable with basic curl commands for testing
        API endpoints.
      </p>

      <h2 id="version-control">Version control and code hosting</h2>

      <h3>GitHub</h3>
      <p>
        <strong>Cost:</strong> Free for public and private repositories (unlimited).<br />
        <strong>Free tier limit:</strong> GitHub Actions: 2,000 minutes/month for private repos
        (unlimited for public). Packages: 500MB storage. Codespaces: 120 core-hours/month.
      </p>
      <p>
        The default platform for open-source development and increasingly for private projects.
        Free tier includes: unlimited private repos, unlimited collaborators on public repos, GitHub
        Actions for CI/CD, GitHub Pages for static site hosting, and GitHub Copilot free tier
        (limited completions).
      </p>

      <h3>GitLab (free tier)</h3>
      <p>
        <strong>Cost:</strong> Free self-hosted (unlimited) or free cloud tier.<br />
        <strong>Free tier limit:</strong> Cloud: 400 CI/CD minutes/month, 5GB storage, 5 users.
      </p>
      <p>
        More integrated CI/CD than GitHub at the free tier for private projects. Container registry,
        issue tracking, and wiki included. Better choice for teams wanting an all-in-one platform
        without paying.
      </p>

      <h2 id="deployment">Deployment and hosting</h2>

      <h3>Vercel</h3>
      <p>
        <strong>Cost:</strong> Free Hobby tier.<br />
        <strong>Free tier limit:</strong> 100GB bandwidth/month, 100GB-hours serverless function
        execution, unlimited static deployments. One team member per project. Commercial use
        requires a Pro plan ($20/month).
      </p>
      <p>
        The best free hosting for Next.js projects (built by the same company). Automatic HTTPS,
        global CDN, preview deployments for each Git branch, and serverless functions. For
        freelance portfolio sites and client demos, the free tier is fully adequate.
      </p>

      <h3>Netlify</h3>
      <p>
        <strong>Cost:</strong> Free Starter tier.<br />
        <strong>Free tier limit:</strong> 100GB bandwidth/month, 300 build minutes/month, serverless
        function execution up to 125K requests/month.
      </p>
      <p>
        Similar to Vercel; slightly more framework-agnostic. Better for sites not using Next.js
        (React static sites, Gatsby, Astro, Hugo). Free tier includes form handling (100
        submissions/month) — useful for contact forms without a backend.
      </p>

      <h3>Cloudflare Pages</h3>
      <p>
        <strong>Cost:</strong> Free.<br />
        <strong>Free tier limit:</strong> Unlimited bandwidth, 500 builds/month, unlimited sites,
        500 Cloudflare Workers requests per day (more with Workers free tier).
      </p>
      <p>
        The most generous free tier of the three. Unlimited bandwidth stands out — Vercel and Netlify
        throttle or charge above 100GB. Best for static sites with predictable build cycles.
      </p>

      <h2 id="code-quality">Code quality and linting</h2>

      <h3>ESLint</h3>
      <p>
        <strong>Cost:</strong> Free, open source.<br />
        The standard JavaScript and TypeScript linter. Configure rules in <code>.eslintrc</code> and
        run as part of your build process or pre-commit hook. Plugins cover React
        (<code>eslint-plugin-react</code>), Next.js (<code>eslint-config-next</code>), accessibility
        (<code>eslint-plugin-jsx-a11y</code>), and security (<code>eslint-plugin-security</code>).
      </p>

      <h3>Prettier</h3>
      <p>
        <strong>Cost:</strong> Free, open source.<br />
        Opinionated code formatter. Eliminates style debates in teams — all code is formatted
        consistently on save. Configure once; applies everywhere. Works with ESLint via
        <code>eslint-config-prettier</code>.
      </p>

      <h3>TypeScript (tsc --noEmit)</h3>
      <p>
        <strong>Cost:</strong> Free, open source.<br />
        Running <code>npx tsc --noEmit</code> type-checks your entire project without building output.
        Add to your CI pipeline to catch type errors before they reach production.
      </p>

      <h2 id="ai-tools">AI coding tools (free tiers)</h2>

      <h3>GitHub Copilot (free tier)</h3>
      <p>
        <strong>Free tier:</strong> 2,000 code completions/month and 50 chat messages/month. Available
        in VS Code and JetBrains IDEs. Adequate for occasional use; daily professional use hits the
        limit quickly.
      </p>

      <h3>Cursor (free tier)</h3>
      <p>
        <strong>Free tier:</strong> 2,000 code completions/month. Cursor&apos;s Pro trial gives 14 days
        of full access before reverting to the free tier.
      </p>

      <h3>v0 by Vercel</h3>
      <p>
        <strong>Free tier:</strong> 200 credits/month (each UI generation costs credits). Generates
        React/Next.js components from text descriptions. Free tier is meaningful for occasional use.
      </p>

      <h3>Claude.ai (free tier)</h3>
      <p>
        <strong>Free tier:</strong> Access to Claude Sonnet with daily message limits. Adequate for
        code questions, debugging help, and code review assistance without a subscription.
      </p>

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Can I build a professional freelance portfolio site using only free tools?</h3>
      <p>
        Yes — entirely. VS Code (free IDE) + GitHub (free repository) + Vercel free tier (hosting) +
        a free domain subdomain, or ₹800/year for a custom domain. Total cost: ₹800/year maximum.
        This is how many professional freelance sites are built and hosted.
      </p>

      <h3>Which free API testing tool should I start with?</h3>
      <p>
        Hoppscotch for individual developers — it is open source, browser-based (no download required),
        and has no meaningful free tier restrictions for single-user use. Postman if you need mock
        servers, environment variable management across a team, or test scripting.
      </p>

      <h3>Are there free tools for website security testing?</h3>
      <p>
        <strong>Observatory by Mozilla</strong> (<a href="https://observatory.mozilla.org" rel="noopener noreferrer">observatory.mozilla.org</a>) —
        free HTTP security header audit. Checks for HTTPS configuration, Content-Security-Policy,
        HSTS, and other headers. <strong>OWASP ZAP</strong> — free open-source web application
        security scanner; more advanced, requires some security knowledge to use effectively.
      </p>

      <p>
        For the AI-powered tools in this list, see the{" "}
        <Link href="/blog/claude-code-vs-cursor-vs-copilot">Claude Code vs Cursor vs Copilot comparison</Link>
        {" "}for a detailed breakdown of their paid features. For performance-related tools, the{" "}
        <Link href="/blog/core-web-vitals-optimization-2026">Core Web Vitals optimization guide</Link>
        {" "}explains how to use PageSpeed Insights and DevTools performance profiling in practice.
      </p>
    </ArticleLayout>
  );
}
