import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ComparisonTable } from "@/components/blog/ArticleWidgets";

const slug = "nextjs-vs-react-2026";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "Next.js vs React 2026",
    "when to use Next.js vs React",
    "Next.js App Router guide",
    "React Server Components 2026",
    "Next.js vs React performance",
    "Next.js SEO benefits",
    "which framework to choose 2026",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "what-is-react", label: "What React is (and is not)" },
  { id: "what-is-nextjs", label: "What Next.js adds on top" },
  { id: "comparison", label: "Side-by-side comparison" },
  { id: "rendering", label: "Rendering strategies explained" },
  { id: "when-react", label: "When to choose plain React" },
  { id: "when-nextjs", label: "When to choose Next.js" },
  { id: "migration", label: "Migrating from React to Next.js" },
  { id: "faqs", label: "Frequently asked questions" },
];

const comparisonRows = [
  {
    label: "Type",
    a: "UI library",
    b: "Full-stack React framework",
  },
  {
    label: "Routing",
    a: "Manual (React Router, TanStack Router)",
    b: "Built-in file-system routing (App Router)",
  },
  {
    label: "Rendering",
    a: "Client-side by default",
    b: "SSR, SSG, ISR, RSC — per-page choice",
  },
  {
    label: "SEO out of the box",
    a: "Requires extra config",
    b: "Strong — server HTML delivered to crawlers",
  },
  {
    label: "API routes",
    a: "None — needs separate backend",
    b: "Built-in Route Handlers",
  },
  {
    label: "Data fetching",
    a: "useEffect / TanStack Query",
    b: "async/await in Server Components",
  },
  {
    label: "Image optimization",
    a: "Manual",
    b: "Built-in <Image> component",
  },
  {
    label: "Bundle size",
    a: "Smaller base (library only)",
    b: "Larger base (framework overhead)",
  },
  {
    label: "Learning curve",
    a: "Lower starting point",
    b: "Steeper — more concepts to understand",
  },
  {
    label: "Deployment",
    a: "Any static host (Netlify, S3, etc.)",
    b: "Vercel (optimized), or self-hosted Node.js",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Need help choosing the right tech stack for your project?",
        text: "I build production Next.js and React applications for businesses and startups. Send me a message with your project requirements and I'll recommend the right approach.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        React is a <strong>UI library</strong>. Next.js is a <strong>full-stack framework built on top of React</strong>.
        For most modern web projects — especially those needing SEO, server-side rendering, or a backend — Next.js is
        the right choice. Use plain React (with Vite or Create React App) only when you are building an internal tool,
        a dashboard behind a login, or a highly interactive SPA where SEO is irrelevant.
      </p>

      <h2 id="what-is-react">What React is (and is not)</h2>
      <p>
        React, maintained by Meta, is a JavaScript library for building user interfaces using a component model.
        It handles the <strong>view layer only</strong> — it renders UI components and manages their state. It
        does not include routing, data fetching conventions, server rendering, or a backend.
      </p>
      <p>
        When developers talk about "a React app," they typically mean a client-side single-page application (SPA)
        where all JavaScript is sent to the browser and rendering happens there. This is fast to develop but has
        real drawbacks:
      </p>
      <ul>
        <li>Search engine crawlers see an empty HTML shell until JavaScript executes</li>
        <li>First meaningful paint is delayed while JS downloads, parses, and runs</li>
        <li>You must wire together routing, data fetching, and state management yourself</li>
      </ul>
      <p>
        React 19 (2024–2025) introduced React Server Components, async transitions, and Actions — but these
        features require a framework like Next.js to actually use in production.
      </p>

      <h2 id="what-is-nextjs">What Next.js adds on top of React</h2>
      <p>
        Next.js, maintained by Vercel, is a production-ready framework that wraps React and adds everything a
        real web application needs:
      </p>
      <ul>
        <li>
          <strong>File-system routing</strong> — create a file in <code>app/</code> and it becomes a route,
          with layouts, loading states, and error boundaries built in
        </li>
        <li>
          <strong>Server Components</strong> — components that render on the server, keeping sensitive logic
          and large dependencies off the client bundle
        </li>
        <li>
          <strong>Multiple rendering modes</strong> — Static Site Generation (SSG), Server-Side Rendering (SSR),
          Incremental Static Regeneration (ISR), and full client-side rendering, chosen per page
        </li>
        <li>
          <strong>Route Handlers</strong> — API endpoints inside your Next.js project, eliminating the need for
          a separate backend for many use cases
        </li>
        <li>
          <strong>Built-in optimizations</strong> — image compression and lazy loading via{" "}
          <code>&lt;Image&gt;</code>, automatic font optimization, script prioritization
        </li>
        <li>
          <strong>Metadata API</strong> — generate <code>&lt;title&gt;</code>, Open Graph, and structured data
          from a typed, co-located API
        </li>
      </ul>

      <h2 id="comparison">Side-by-side comparison</h2>
      <p>
        Here is how React (as a standalone library with Vite) compares to Next.js across the decisions that
        matter most in a real project:
      </p>
      <ComparisonTable
        colA="React (Vite/SPA)"
        colB="Next.js (App Router)"
        rows={comparisonRows}
        note="Next.js 15+ (released 2024) introduced the stable App Router with React Server Components, async params, and improved caching defaults. Always read the Next.js docs for your specific installed version before building."
      />

      <h2 id="rendering">Rendering strategies explained</h2>
      <p>
        One of Next.js's biggest advantages is letting you choose a rendering strategy for each route. In the
        App Router, a component is a <strong>Server Component by default</strong>. Add{" "}
        <code>&apos;use client&apos;</code> at the top to make it a Client Component.
      </p>

      <h3>Server Components (RSC)</h3>
      <p>
        Server Components render on the server and send HTML (or a serialized React tree) to the client.
        They can fetch data directly — including database queries — without exposing credentials to the browser.
        They produce zero client-side JavaScript by default, keeping bundle sizes small.
      </p>

      <h3>Client Components</h3>
      <p>
        Client Components run in the browser and support interactivity: <code>useState</code>,{" "}
        <code>useEffect</code>, event handlers, and browser APIs. Use them for interactive UI elements like
        forms, dropdowns, and real-time features.
      </p>

      <h3>Static generation (SSG) and ISR</h3>
      <p>
        Pages that don&apos;t need per-request data are statically generated at build time and served from a CDN.
        ISR (Incremental Static Regeneration) adds a <code>revalidate</code> option that automatically rebuilds
        stale pages in the background — ideal for content-heavy sites that update periodically.
      </p>

      <h2 id="when-react">When to choose plain React (Vite)</h2>
      <p>
        Plain React with Vite makes sense when:
      </p>
      <ul>
        <li>
          <strong>SEO is irrelevant</strong> — internal dashboards, admin panels, or tools behind authentication
          that search engines will never index
        </li>
        <li>
          <strong>The app is highly interactive and stateful</strong> — think Figma-style design tools,
          real-time collaborative apps, or complex data visualizations where client state dominates
        </li>
        <li>
          <strong>You are embedding a React component into an existing site</strong> — a widget that needs to
          run in isolation without server infrastructure
        </li>
        <li>
          <strong>Your team is new to React</strong> and you want the smallest surface area to learn before
          adding framework conventions
        </li>
      </ul>

      <h2 id="when-nextjs">When to choose Next.js</h2>
      <p>
        Next.js is the right choice for the vast majority of production web projects:
      </p>
      <ul>
        <li>
          <strong>Public-facing websites and landing pages</strong> — where Google must be able to read your
          content without executing JavaScript
        </li>
        <li>
          <strong>E-commerce</strong> — product pages need SSG/ISR for performance and SEO; cart and checkout
          need server actions for security
        </li>
        <li>
          <strong>Blogs and content sites</strong> — static generation makes pages extremely fast; ISR keeps
          them fresh without manual rebuilds
        </li>
        <li>
          <strong>SaaS applications</strong> — the App Router&apos;s layout system handles authenticated and
          public routes cleanly; Route Handlers replace Express for most API needs
        </li>
        <li>
          <strong>Projects where performance metrics matter</strong> — Core Web Vitals, image optimization,
          and font loading are handled automatically
        </li>
      </ul>

      <h2 id="migration">Migrating from a React SPA to Next.js</h2>
      <p>
        The Next.js documentation includes an{" "}
        <a href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration" rel="noopener noreferrer">
          official migration guide
        </a>
        . The main steps are:
      </p>
      <ol>
        <li>Replace Vite&apos;s entry point with Next.js&apos;s <code>app/layout.tsx</code> and <code>app/page.tsx</code></li>
        <li>Migrate React Router routes to Next.js file-based routes in <code>app/</code></li>
        <li>
          Identify which components need interactivity (add <code>&apos;use client&apos;</code>) and which can
          become Server Components (remove it — they are server by default)
        </li>
        <li>Replace <code>fetch</code> calls inside <code>useEffect</code> with async Server Components or
          Server Actions</li>
        <li>Update image tags to <code>&lt;Image&gt;</code> from <code>next/image</code></li>
      </ol>
      <p>
        Expect the migration of a medium-sized SPA to take 1–3 days if your component tree is well-structured.
        The biggest challenge is usually identifying which state is truly client-only and which can move to the
        server.
      </p>

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Is Next.js replacing React?</h3>
      <p>
        No. Next.js is built on React and depends on it. React is a library; Next.js is a framework. They are
        complementary, not competing. You write React components inside a Next.js project.
      </p>

      <h3>Can I use React hooks in Next.js?</h3>
      <p>
        Yes — inside Client Components (marked with <code>&apos;use client&apos;</code>). Hooks like{" "}
        <code>useState</code>, <code>useEffect</code>, and <code>useContext</code> do not work in Server
        Components because they have no browser runtime.
      </p>

      <h3>Is Next.js only for Vercel hosting?</h3>
      <p>
        No. Next.js can be self-hosted on any Node.js server, deployed to AWS, GCP, Azure, Railway, Render,
        or containerized with Docker. Vercel provides the most seamless deployment experience and some
        features (like Edge Middleware and ISR) work best there, but the framework is not locked to the platform.
      </p>

      <h3>What is the App Router vs the Pages Router?</h3>
      <p>
        Next.js has two routing systems. The <strong>Pages Router</strong> is the original system (
        <code>pages/</code> directory) — stable, well-documented, and used in most existing Next.js codebases.
        The <strong>App Router</strong> (<code>app/</code> directory) is the current standard, introduced in
        Next.js 13 and now the recommended approach. It supports React Server Components, nested layouts,
        streaming, and Server Actions. New projects should use the App Router.
      </p>

      <h3>How does Next.js help with SEO?</h3>
      <p>
        Because Next.js can render HTML on the server, search engine crawlers receive fully-formed page content
        without needing to run JavaScript. The Metadata API lets you define title tags, descriptions, and Open
        Graph data per page in a type-safe way. The <code>&lt;Image&gt;</code> component automatically adds
        width/height attributes that prevent layout shift — a Core Web Vitals signal.
      </p>

      <p>
        For the technical performance fundamentals that Next.js helps with, see the{" "}
        <Link href="/blog/core-web-vitals-optimization-2026">Core Web Vitals optimization guide</Link>. To
        understand Server Components in more depth, read the{" "}
        <Link href="/blog/react-server-components-guide">React Server Components guide</Link>.
      </p>
    </ArticleLayout>
  );
}
