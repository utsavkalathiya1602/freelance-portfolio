import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleChecklist } from "@/components/blog/ArticleChecklist";

const slug = "typescript-best-practices-2026";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "TypeScript best practices 2026",
    "TypeScript strict mode",
    "TypeScript utility types",
    "discriminated unions TypeScript",
    "branded types TypeScript",
    "TypeScript scalable architecture",
    "TypeScript tips advanced",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "strict-mode", label: "Always enable strict mode" },
  { id: "utility-types", label: "Master the built-in utility types" },
  { id: "discriminated-unions", label: "Discriminated unions for state" },
  { id: "branded-types", label: "Branded types for type safety" },
  { id: "generics", label: "Generics done right" },
  { id: "unknown-vs-any", label: "unknown over any" },
  { id: "module-structure", label: "Structuring large TypeScript codebases" },
  { id: "tooling", label: "Tooling and linting" },
  { id: "checklist", label: "TypeScript quality checklist" },
  { id: "faqs", label: "Frequently asked questions" },
];

const checklistItems = [
  {
    id: "strict",
    label: "Enable strict: true in tsconfig.json",
    detail: "Turns on strictNullChecks, noImplicitAny, strictFunctionTypes and more in a single flag.",
  },
  {
    id: "no-any",
    label: "Ban explicit any with ESLint (@typescript-eslint/no-explicit-any)",
    detail: "Use unknown for genuinely unknown values. Cast with type guards, not 'as any'.",
  },
  {
    id: "utility-types",
    label: "Use built-in utility types instead of manual type construction",
    detail: "Partial, Required, Pick, Omit, Readonly, Record, ReturnType, Parameters — know them all.",
  },
  {
    id: "discriminated-union",
    label: "Model state with discriminated unions",
    detail: "A union with a shared 'status' or 'kind' field enables exhaustive switch narrowing.",
  },
  {
    id: "no-type-assertions",
    label: "Minimise 'as' type assertions",
    detail: "Each 'as' is a lie you tell the compiler. Use type guards (typeof, instanceof, 'in') instead.",
  },
  {
    id: "zod-validation",
    label: "Validate external data with Zod or Valibot at runtime",
    detail: "TypeScript types are erased at runtime. API responses and form data must be validated before use.",
  },
  {
    id: "const-assertions",
    label: "Use 'as const' for literal and tuple types",
    detail: "Prevents widening from 'string' to a specific literal — useful for config objects and route arrays.",
  },
  {
    id: "isolate-modules",
    label: "Enable isolatedModules for fast builds",
    detail: "Required for Vite, esbuild and SWC. Prevents patterns that only work with full-program type checking.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Need TypeScript expertise on your project?",
        text: "I build type-safe React and Next.js applications with TypeScript. If your codebase has grown unwieldy or you're starting fresh, let's talk about the right architecture.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        The most impactful TypeScript practices in 2026 are: enable <code>strict: true</code>, replace{" "}
        <code>any</code> with <code>unknown</code>, model your state with discriminated unions, validate
        external data with Zod at runtime (types are erased at compile time), push generics as far as needed
        but no further, and structure large codebases around feature modules rather than technical layers.
      </p>

      <h2 id="strict-mode">Always enable strict mode</h2>
      <p>
        The single highest-impact TypeScript setting is <code>strict: true</code> in <code>tsconfig.json</code>.
        It enables a group of compiler flags that catch the most common bugs:
      </p>
      <ul>
        <li><code>strictNullChecks</code> — <code>null</code> and <code>undefined</code> are not assignable to
          other types unless explicitly declared</li>
        <li><code>noImplicitAny</code> — variables inferred as <code>any</code> produce errors</li>
        <li><code>strictFunctionTypes</code> — function parameters are checked contravariantly</li>
        <li><code>strictPropertyInitialization</code> — class properties must be initialized in the constructor</li>
      </ul>
      <p>
        If you are enabling strict mode on an existing codebase, use <code>// @ts-expect-error</code> or{" "}
        <code>skipLibCheck: true</code> as temporary scaffolding — then address errors file by file. Do not
        leave <code>// @ts-ignore</code> comments permanently; they suppress errors silently.
      </p>

      <h2 id="utility-types">Master the built-in utility types</h2>
      <p>
        TypeScript ships with a powerful set of utility types that transform existing types. Using them
        reduces duplication and keeps types in sync automatically:
      </p>
      <pre><code>{`type User = {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
};

// Only the fields you need
type UserPreview = Pick<User, 'id' | 'name'>;

// All fields optional (for PATCH endpoints)
type UserUpdate = Partial<User>;

// All fields required (useful for validating complete objects)
type FullUser = Required<User>;

// Immutable version — prevents mutation bugs
type ReadonlyUser = Readonly<User>;

// Extract function return types without duplication
type FetchResult = ReturnType<typeof fetchUser>;

// Create typed maps
type UserMap = Record<string, User>;`}</code></pre>
      <p>
        Less-known but equally useful: <code>Awaited&lt;T&gt;</code> unwraps Promise types (vital for async
        functions), <code>NonNullable&lt;T&gt;</code> removes <code>null</code> and <code>undefined</code>,
        and <code>Extract&lt;T, U&gt;</code> / <code>Exclude&lt;T, U&gt;</code> filter union members.
      </p>

      <h2 id="discriminated-unions">Discriminated unions for modelling state</h2>
      <p>
        Discriminated unions are the most reliable pattern for modelling state that can be in multiple
        distinct shapes — loading, success, and error being the classic example:
      </p>
      <pre><code>{`// Bad: all optional fields — any combination is "valid"
type FetchState = {
  isLoading?: boolean;
  data?: User;
  error?: Error;
};

// Good: each state is precisely defined
type FetchState =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'success'; data: User }
  | { status: 'error'; error: Error };

function render(state: FetchState) {
  switch (state.status) {
    case 'idle': return <Idle />;
    case 'loading': return <Spinner />;
    case 'success': return <UserCard user={state.data} />; // data is guaranteed here
    case 'error': return <Error message={state.error.message} />;
  }
  // TypeScript catches unhandled cases if you add a new status variant
}`}</code></pre>
      <p>
        The discriminant field (<code>status</code>, <code>kind</code>, <code>type</code>) narrows the type
        in every branch. The compiler will alert you if you add a new union member and forget to handle it —
        this is <strong>exhaustive checking</strong>, one of TypeScript&apos;s most valuable features.
      </p>

      <h2 id="branded-types">Branded types for type safety</h2>
      <p>
        TypeScript uses structural typing — two types with the same shape are interchangeable. This means you
        can accidentally pass a <code>UserId</code> where an <code>OrderId</code> is expected and TypeScript
        will not complain if both are just <code>string</code>.
      </p>
      <p>
        Branded (nominal) types solve this by attaching a unique tag:
      </p>
      <pre><code>{`// Declare branded types
type UserId = string & { readonly __brand: 'UserId' };
type OrderId = string & { readonly __brand: 'OrderId' };

// Constructor functions ensure correct instantiation
function createUserId(id: string): UserId {
  return id as UserId;
}

// Now this is a type error — you cannot mix them up
function getOrder(orderId: OrderId) { /* ... */ }
const userId = createUserId('abc-123');
getOrder(userId); // ❌ TypeScript Error: Argument of type 'UserId' not assignable to 'OrderId'`}</code></pre>
      <p>
        Branded types are particularly valuable for IDs, monetary values, validated strings, and any other
        primitive that has a semantic meaning beyond its underlying type.
      </p>

      <h2 id="generics">Generics done right</h2>
      <p>
        Generics make code reusable without sacrificing type information. The key rules:
      </p>
      <ul>
        <li>
          <strong>Constrain generics with <code>extends</code></strong> when you need to access specific
          properties: <code>function getKey&lt;T extends {'{'} id: string {'}'}&gt;(item: T): string</code>
        </li>
        <li>
          <strong>Use default type parameters</strong> (TypeScript 5.x) to make generics optional:{" "}
          <code>function create&lt;T = string&gt;(): T</code>
        </li>
        <li>
          <strong>Avoid over-generification</strong> — if a function only ever works with one type, don&apos;t
          make it generic. Generics add cognitive overhead.
        </li>
        <li>
          <strong>Use <code>const</code> type parameters</strong> (TS 5.0+) to preserve literal types in
          generic functions: <code>function identity&lt;const T&gt;(val: T): T</code>
        </li>
      </ul>

      <h2 id="unknown-vs-any">Use unknown over any</h2>
      <p>
        <code>any</code> disables type checking entirely — it infects every value it touches. <code>unknown</code>{" "}
        is the type-safe alternative: it accepts any value but forces you to narrow it before using it:
      </p>
      <pre><code>{`// Bad: any propagates silently
function parseJson(json: string): any {
  return JSON.parse(json); // anything goes after this
}

// Good: unknown forces you to validate before use
function parseJson(json: string): unknown {
  return JSON.parse(json);
}

const result = parseJson('{"name":"Alice"}');
// result.name; // ❌ Error: Cannot access properties on 'unknown'

// Validate with Zod before using:
const UserSchema = z.object({ name: z.string() });
const user = UserSchema.parse(result); // now correctly typed`}</code></pre>

      <h2 id="module-structure">Structuring large TypeScript codebases</h2>
      <p>
        Technical layering (organizing by <code>/components</code>, <code>/hooks</code>, <code>/utils</code>)
        works for small projects but breaks down at scale — changing a feature requires touching many
        directories. Feature-based organization keeps related code together:
      </p>
      <pre><code>{`src/
  features/
    auth/
      components/     # LoginForm, AuthGuard
      hooks/          # useAuth, useSession
      api.ts          # auth-related API calls
      types.ts        # AuthUser, LoginPayload
    products/
      components/     # ProductCard, ProductList
      hooks/          # useProducts, useCart
      api.ts
      types.ts
  shared/
    ui/               # Button, Input, Modal
    lib/              # date utils, validators
    types/            # global types`}</code></pre>
      <p>
        Use barrel files (<code>index.ts</code>) sparingly — they make tree-shaking harder and can cause
        circular dependency issues in large projects. Prefer explicit imports.
      </p>

      <h2 id="tooling">Tooling and linting</h2>
      <p>
        The TypeScript compiler alone is not enough. A robust setup includes:
      </p>
      <ul>
        <li>
          <strong><code>@typescript-eslint/eslint-plugin</code></strong> with <code>recommended-type-checked</code>
          preset — catches patterns the compiler misses, including dangerous type assertions and unsafe spread
          operations
        </li>
        <li>
          <strong>Zod or Valibot</strong> for runtime validation of external data (API responses, environment
          variables, form inputs). Types disappear at runtime — your validator is your last line of defence.
        </li>
        <li>
          <strong>Prettier</strong> with TypeScript parser — consistent formatting removes formatting debates
          from code review
        </li>
        <li>
          <strong>tsx or ts-node</strong> for running TypeScript scripts without a build step during development
        </li>
        <li>
          <strong>tsc --noEmit</strong> in CI — run a full type check on every pull request, separately from
          the build (bundlers like esbuild and SWC transpile TS but skip type checking)
        </li>
      </ul>

      <h2 id="checklist">TypeScript quality checklist</h2>
      <ArticleChecklist
        title="TypeScript Project Checklist"
        items={checklistItems}
      />

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Should I use TypeScript for small projects?</h3>
      <p>
        Yes — the setup cost is low (add TypeScript to a Vite or Next.js project in minutes) and the benefits
        compound quickly. Even a 500-line project benefits from autocomplete and catching null-reference errors
        before runtime. The common argument that TypeScript slows you down is almost always a sign of missing
        tooling, not a language problem.
      </p>

      <h3>What is the difference between interface and type in TypeScript?</h3>
      <p>
        For most practical purposes, they are interchangeable. Key differences: <code>interface</code> supports
        declaration merging (you can add fields to an interface from another file), and is slightly better for
        object shapes. <code>type</code> supports unions, intersections, mapped types, and conditional types —
        things interfaces cannot do. Pick a style and be consistent; prefer <code>type</code> for complex
        types and <code>interface</code> for class contracts.
      </p>

      <h3>How do I type a React component correctly?</h3>
      <p>
        In modern React with TypeScript, prefer inferring the return type rather than annotating it explicitly:
      </p>
      <pre><code>{`// Modern — infer return type, define props inline or as a type
type ButtonProps = {
  label: string;
  onClick: () => void;
  variant?: 'primary' | 'ghost';
};

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

// Avoid React.FC — it implicitly adds children prop and has other quirks
`}</code></pre>

      <h3>Do I need to type everything explicitly?</h3>
      <p>
        No — TypeScript&apos;s inference is excellent. Let the compiler infer return types, variable types, and
        array element types. Explicit annotations are most valuable for function parameters (inference cannot
        infer from the call site), exported API surfaces, and complex object literals.
      </p>

      <p>
        For applying TypeScript in a Next.js project, read the{" "}
        <Link href="/blog/nextjs-vs-react-2026">Next.js vs React guide</Link>. For overall development
        workflow improvements, see the{" "}
        <Link href="/blog/ai-coding-tools-developers-2026">AI coding tools comparison</Link>.
      </p>
    </ArticleLayout>
  );
}
