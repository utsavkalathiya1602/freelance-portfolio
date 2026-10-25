import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleChecklist } from "@/components/blog/ArticleChecklist";
import { ComparisonTable } from "@/components/blog/ArticleWidgets";

const slug = "react-server-components-guide";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "React Server Components explained",
    "RSC vs Client Components",
    "React Server Components 2026",
    "use client directive",
    "server components vs client components",
    "Next.js server components guide",
    "React 19 server components",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "what-are-rsc", label: "What React Server Components are" },
  { id: "how-they-work", label: "How they work under the hood" },
  { id: "comparison", label: "Server vs Client Components" },
  { id: "when-to-use", label: "When to use each" },
  { id: "patterns", label: "Practical patterns and examples" },
  { id: "common-mistakes", label: "Common mistakes to avoid" },
  { id: "checklist", label: "RSC readiness checklist" },
  { id: "faqs", label: "Frequently asked questions" },
];

const comparisonRows = [
  {
    label: "Runs on",
    a: "Server (Node.js, Edge runtime)",
    b: "Browser (and server during SSR hydration)",
  },
  {
    label: "Can fetch data directly",
    a: "Yes — async/await, DB queries, secrets",
    b: "No — must use useEffect or SWR/React Query",
  },
  {
    label: "Can use hooks",
    a: "No — no useState, useEffect, useContext",
    b: "Yes — full React hooks support",
  },
  {
    label: "Can handle browser events",
    a: "No — no onClick, onChange, etc.",
    b: "Yes — full event handler support",
  },
  {
    label: "Adds to client JS bundle",
    a: "No — zero client JavaScript by default",
    b: "Yes — component code ships to the browser",
  },
  {
    label: "Access to browser APIs",
    a: "No — window, document unavailable",
    b: "Yes — localStorage, navigator, etc.",
  },
  {
    label: "Can render Client Components",
    a: "Yes — as children",
    b: "Cannot render Server Components directly",
  },
  {
    label: "Declared with",
    a: "Default (no directive needed)",
    b: "'use client' at the top of the file",
  },
];

const checklistItems = [
  {
    id: "identify-interactive",
    label: "Identify which components need interactivity",
    detail: "Only components using useState, useEffect, event handlers or browser APIs need 'use client'.",
  },
  {
    id: "push-client-down",
    label: "Push 'use client' as far down the tree as possible",
    detail: "If only a button inside a page is interactive, make only that button a Client Component — not the whole page.",
  },
  {
    id: "data-in-server",
    label: "Fetch data in Server Components, not Client Components",
    detail: "async Server Components can await fetch() or database calls directly — no useEffect or loading spinner needed.",
  },
  {
    id: "no-secrets-client",
    label: "Keep secrets and API keys in Server Components",
    detail: "Anything inside a Client Component can be read by users in DevTools. Server Components keep credentials server-side.",
  },
  {
    id: "check-third-party",
    label: "Check third-party libraries for RSC compatibility",
    detail: "Libraries using useEffect, context, or browser APIs need to be imported inside Client Components only.",
  },
  {
    id: "avoid-prop-drilling-context",
    label: "Use React Context only in Client Component subtrees",
    detail: "Context providers must be Client Components. Pass data from Server to Client via props, not context.",
  },
  {
    id: "streaming",
    label: "Wrap slow data fetches in Suspense for streaming",
    detail: "Suspense boundaries let Next.js stream fast content immediately while slower sections load in parallel.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want to build a high-performance Next.js application?",
        text: "I design and build React and Next.js applications using modern patterns including Server Components, streaming, and Server Actions. Let's talk about your project.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        React Server Components (RSC) are components that render exclusively on the server — they produce HTML
        (or a serialized React tree) that is sent to the browser without shipping any component JavaScript to
        the client. They can fetch data directly using <code>async/await</code>, access databases and secrets
        securely, and significantly reduce client bundle sizes. Client Components — those marked with{" "}
        <code>&apos;use client&apos;</code> — are still used for anything interactive: forms, modals, real-time
        updates, and browser API access.
      </p>

      <h2 id="what-are-rsc">What React Server Components are</h2>
      <p>
        Introduced experimentally in React 18 and stabilized in React 19 (2024), Server Components are a new
        component type that closes a long-standing gap in React&apos;s mental model: data fetching used to require
        either a useEffect waterfall on the client or framework-specific getServerSideProps patterns. Server
        Components make data fetching a first-class part of the component itself.
      </p>
      <p>
        In Next.js App Router, <strong>every component is a Server Component by default</strong>. You opt
        into client-side behavior by adding <code>&apos;use client&apos;</code> as the first line of a file.
        This inverts the traditional React mental model — rather than all code running in the browser by
        default, only explicitly marked code does.
      </p>
      <p>
        The key benefits of Server Components are:
      </p>
      <ul>
        <li>
          <strong>Zero client JavaScript</strong> — server-rendered components do not appear in the browser
          bundle at all, reducing download size and parse time
        </li>
        <li>
          <strong>Direct data access</strong> — query a database, call an internal API, or read the filesystem
          without an additional API layer
        </li>
        <li>
          <strong>Security</strong> — credentials, database connection strings, and sensitive logic stay on
          the server and are never exposed to the browser
        </li>
        <li>
          <strong>Simplified data fetching</strong> — <code>async/await</code> inside a component replaces
          useEffect + loading state + error handling boilerplate
        </li>
      </ul>

      <h2 id="how-they-work">How React Server Components work under the hood</h2>
      <p>
        When a user requests a page, Next.js (running on Node.js or an edge runtime) renders Server Components
        on the server. The output is not plain HTML — it is a{" "}
        <strong>React Server Component Payload (RSC Payload)</strong>: a compact, streaming-friendly format
        that describes the rendered tree and where Client Component boundaries are.
      </p>
      <p>
        The browser receives this payload and React reconstructs the component tree. Client Components are
        hydrated (their JavaScript runs and event listeners attach). Server Component output is injected as
        static HTML — no hydration needed, no JS bundle for those components.
      </p>
      <p>
        When navigation happens client-side (clicking a link), Next.js fetches only the RSC Payload for the
        new page — not a full HTML document. This makes client-side navigation fast while preserving the
        server-render benefits.
      </p>

      <h2 id="comparison">Server Components vs Client Components</h2>
      <ComparisonTable
        colA="Server Component"
        colB="Client Component ('use client')"
        rows={comparisonRows}
        note="A file marked 'use client' creates a boundary. Any component imported inside that file (and its imports) becomes part of the client bundle."
      />

      <h2 id="when-to-use">When to use each</h2>

      <h3>Use a Server Component when:</h3>
      <ul>
        <li>The component fetches data (from a database, CMS, or API)</li>
        <li>The component displays static or server-rendered content</li>
        <li>The component renders large dependencies (e.g., a syntax highlighter, markdown parser)
          that do not need to run in the browser</li>
        <li>The component needs access to environment variables or secrets</li>
        <li>The component has no user interaction</li>
      </ul>

      <h3>Use a Client Component when:</h3>
      <ul>
        <li>The component uses <code>useState</code>, <code>useReducer</code>, or <code>useContext</code></li>
        <li>The component uses <code>useEffect</code> or lifecycle-style logic</li>
        <li>The component handles DOM events (<code>onClick</code>, <code>onChange</code>, etc.)</li>
        <li>The component uses browser APIs (<code>window</code>, <code>localStorage</code>, <code>navigator</code>)</li>
        <li>The component uses a third-party library that itself uses any of the above</li>
      </ul>

      <h2 id="patterns">Practical patterns and examples</h2>

      <h3>Async data fetching in a Server Component</h3>
      <p>
        The cleanest RSC pattern: fetch data directly in the component. No <code>useEffect</code>, no loading
        state management, no API route needed.
      </p>
      <pre><code>{`// app/products/page.tsx — Server Component (default)
async function ProductsPage() {
  // This runs on the server — DB credentials stay safe
  const products = await db.query('SELECT * FROM products ORDER BY created_at DESC');

  return (
    <ul>
      {products.map(p => <li key={p.id}>{p.name}</li>)}
    </ul>
  );
}`}</code></pre>

      <h3>Composing Server and Client Components</h3>
      <p>
        Server Components can render Client Components as children. The reverse — a Client Component rendering
        a Server Component — does not work directly, but you can pass Server Component output as{" "}
        <code>children</code> props.
      </p>
      <pre><code>{`// Correct: Server Component passes data-fetched content to a Client Component
// app/dashboard/page.tsx (Server Component)
import { InteractiveChart } from './InteractiveChart'; // 'use client'

async function DashboardPage() {
  const stats = await fetchStats(); // server-side fetch
  return <InteractiveChart data={stats} />; // data passes as a serializable prop
}`}</code></pre>

      <h3>Using Suspense for streaming</h3>
      <p>
        Wrap slow components in <code>Suspense</code> to stream fast content immediately while the slow parts
        load in parallel. This dramatically improves perceived performance:
      </p>
      <pre><code>{`import { Suspense } from 'react';
import { SlowDataComponent } from './SlowDataComponent';

export default function Page() {
  return (
    <>
      <FastHeroSection />
      <Suspense fallback={<LoadingSkeleton />}>
        <SlowDataComponent /> {/* Streams in when ready */}
      </Suspense>
    </>
  );
}`}</code></pre>

      <h2 id="common-mistakes">Common mistakes to avoid</h2>
      <ul>
        <li>
          <strong>Marking entire pages as Client Components</strong> — this defeats the purpose of RSC.
          Only leaf components that need interactivity should be Client Components.
        </li>
        <li>
          <strong>Trying to pass non-serializable data to Client Components</strong> — props crossing the
          server-client boundary must be serializable (strings, numbers, plain objects, arrays). Functions
          and class instances cannot cross this boundary.
        </li>
        <li>
          <strong>Importing server-only packages inside Client Components</strong> — packages that use
          Node.js APIs (fs, crypto, etc.) will throw errors in the browser. Use the{" "}
          <code>server-only</code> npm package to guard against accidental imports.
        </li>
        <li>
          <strong>Using <code>useEffect</code> for data fetching in Server Components</strong> — Server
          Components do not have a lifecycle. Use <code>async/await</code> directly.
        </li>
        <li>
          <strong>Expecting Context to work across the server-client boundary</strong> — React Context
          is a client-only feature. Create context providers inside Client Components.
        </li>
      </ul>

      <h2 id="checklist">RSC readiness checklist</h2>
      <p>
        Use this checklist when refactoring an existing Next.js app or setting up a new project to maximize
        Server Component usage:
      </p>
      <ArticleChecklist
        title="React Server Components Checklist"
        items={checklistItems}
      />

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Do Server Components replace getServerSideProps?</h3>
      <p>
        In the App Router, yes. Server Components handle data fetching that previously required{" "}
        <code>getServerSideProps</code> or <code>getStaticProps</code> in the Pages Router. If you are still
        using the Pages Router, those functions still work and are not deprecated.
      </p>

      <h3>Can Server Components use cookies or request headers?</h3>
      <p>
        Yes. Next.js provides <code>cookies()</code> and <code>headers()</code> functions from{" "}
        <code>next/headers</code> that can be called inside Server Components to read request data. These
        functions make the component dynamic (not statically cached).
      </p>

      <h3>Are Server Components the same as Server-Side Rendering (SSR)?</h3>
      <p>
        They are related but distinct. SSR renders the entire React tree on the server for each request.
        Server Components are a more granular model — some components render server-side, others client-side,
        and you control this per component rather than per page. RSC also enables streaming and reduces
        client JavaScript more aggressively than traditional SSR.
      </p>

      <h3>How do I test Server Components?</h3>
      <p>
        Server Components are async functions that return JSX — you can test them with Vitest or Jest by calling
        them directly and awaiting the result. The React team is also developing testing utilities specifically
        for RSC. In Next.js, the built-in <code>next dev</code> environment and full integration tests with
        Playwright or Cypress cover end-to-end behavior.
      </p>

      <p>
        For the broader framework context, read the{" "}
        <Link href="/blog/nextjs-vs-react-2026">Next.js vs React comparison</Link>. For performance impact,
        see the <Link href="/blog/core-web-vitals-optimization-2026">Core Web Vitals optimization guide</Link>.
      </p>
    </ArticleLayout>
  );
}
