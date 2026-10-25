import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleChecklist } from "@/components/blog/ArticleChecklist";

const slug = "ai-code-review-testing-guide";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "AI code review best practices",
    "testing AI generated code",
    "can AI replace code review",
    "AI code quality",
    "review GitHub Copilot code",
    "test Cursor generated code",
    "AI code security review",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "what-ai-gets-right", label: "What AI consistently gets right" },
  { id: "what-ai-misses", label: "What AI consistently misses" },
  { id: "unit-testing", label: "Unit testing AI-generated code" },
  { id: "edge-cases", label: "Edge case testing" },
  { id: "security-review", label: "Security review checklist" },
  { id: "maintainability", label: "Maintainability and readability" },
  { id: "regression-testing", label: "Regression testing" },
  { id: "pr-walkthrough", label: "Pull request walkthrough example" },
  { id: "review-checklist", label: "AI code review checklist" },
  { id: "faqs", label: "Frequently asked questions" },
];

const checklistItems = [
  {
    id: "no-secrets",
    label: "No API keys, tokens, or passwords in code",
    detail: "Search the diff for: 'key', 'token', 'secret', 'password', 'apiKey'. Secrets must come from environment variables.",
  },
  {
    id: "input-validation",
    label: "All external inputs are validated before use",
    detail: "Any data from user input, API responses, URL params, or form fields must be validated before use in logic or queries.",
  },
  {
    id: "sql-injection",
    label: "Database queries use parameterised inputs, not string interpolation",
    detail: "String concatenation in SQL queries is the classic injection vector. Use ? or named parameters in all queries.",
  },
  {
    id: "auth-checks",
    label: "Protected routes and functions check authentication and authorisation",
    detail: "AI often generates route handlers without auth guards. Verify every route that accesses user-specific data is protected.",
  },
  {
    id: "error-handling",
    label: "Error handling is present and does not expose internal details",
    detail: "Catch blocks should log internally but return generic messages to clients. Stack traces should never appear in API responses.",
  },
  {
    id: "tests-pass",
    label: "All existing tests still pass after AI changes",
    detail: "Run the full test suite before merging. AI edits to shared utilities can break tests in unexpected places.",
  },
  {
    id: "edge-case-tests",
    label: "Tests cover null, undefined, empty, and boundary inputs",
    detail: "AI-generated tests often only cover the happy path. Add tests for what happens when inputs are missing or wrong.",
  },
  {
    id: "no-deprecated",
    label: "No deprecated APIs or packages are introduced",
    detail: "Check any new imports against the library's current documentation for the version in package.json.",
  },
  {
    id: "types-correct",
    label: "TypeScript types are explicit and correct (no 'any' introduced)",
    detail: "AI frequently introduces 'any' to silence TypeScript errors. Find the correct type instead.",
  },
  {
    id: "accessible",
    label: "New UI components have correct ARIA roles and labels",
    detail: "AI-generated JSX often lacks aria-label on icon buttons, role attributes on custom widgets, and label associations on form fields.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want code that is built right from the start, not just patched by AI?",
        text: "I write and review code with proper testing, security checks, and maintainability in mind. AI accelerates my work — but the quality bar stays the same. Let's talk about your project.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        AI cannot replace code review. It can accelerate code <em>writing</em> significantly, but the
        resulting code requires the same review rigour as human-written code — often more, because AI
        generates plausible-looking code that can have subtle security flaws, incorrect edge case
        handling, and type safety gaps that are easy to miss on a quick scan. The right workflow:
        use AI to write the first draft, then apply structured review covering <strong>unit tests,
        edge cases, security, maintainability, and regression testing</strong> before merging.
      </p>

      <h2 id="what-ai-gets-right">What AI consistently gets right</h2>
      <p>
        AI coding tools in 2026 reliably produce correct code for:
      </p>
      <ul>
        <li>
          <strong>Standard algorithmic patterns</strong> — sorting, filtering, mapping, reducing
          arrays; string manipulation; date formatting. These are well-represented in training data
          and rarely hallucinated.
        </li>
        <li>
          <strong>Boilerplate and scaffolding</strong> — CRUD API route handlers, React component
          structure, form handling, basic TypeScript interfaces.
        </li>
        <li>
          <strong>Common library usage</strong> — standard usage of popular libraries (React,
          Express, Prisma, Zod, date-fns) is generally accurate for versions the model was trained on.
        </li>
        <li>
          <strong>Happy-path logic</strong> — code that handles the expected, normal case is usually
          correct. Error and edge cases are where accuracy drops.
        </li>
      </ul>

      <h2 id="what-ai-misses">What AI consistently misses</h2>
      <p>
        These categories require explicit human review of every AI-generated pull request:
      </p>
      <ul>
        <li>
          <strong>Security edge cases</strong> — SQL injection via string interpolation, XSS via
          unsanitized output, missing authentication checks, CORS misconfiguration, exposed secrets.
        </li>
        <li>
          <strong>Race conditions</strong> — AI does not model concurrent execution intuitively.
          Shared state mutations, missing locks, and async timing bugs are a common AI failure.
        </li>
        <li>
          <strong>Error propagation</strong> — AI often catches errors silently, logs nothing, and
          returns undefined or an empty object. Callers then fail in confusing ways much later.
        </li>
        <li>
          <strong>Business rule violations</strong> — the AI does not know your business rules.
          It can generate code that is technically correct but violates a product requirement the
          reviewer must know to catch.
        </li>
        <li>
          <strong>Deprecated API usage</strong> — training data has a cutoff; AI may use APIs or
          library methods that have since been deprecated or changed.
        </li>
        <li>
          <strong>Accessibility</strong> — AI-generated JSX frequently lacks aria labels, role
          attributes, and keyboard navigation support.
        </li>
      </ul>

      <h2 id="unit-testing">Unit testing AI-generated code</h2>
      <p>
        The first verification step for any AI-generated function: write unit tests before committing.
        The test prompt:
      </p>
      <pre><code>{`Write unit tests for this function using Vitest.
Cover: the normal case, empty/null inputs, boundary values,
and any case where the function could return unexpected output.

[paste the AI-generated function]`}</code></pre>
      <p>
        Then run the tests. If any fail, that is a bug in the AI code — fix the function, not the
        test. Do not write tests that pass by accepting wrong output.
      </p>
      <p>
        <strong>Watch for tests that only confirm the implementation:</strong> AI sometimes generates
        tests that are tautological — asserting that the function returns exactly what the function
        does. A test that says <code>expect(add(2, 3)).toBe(add(2, 3))</code> tests nothing. Every
        test should have an independently-known expected value.
      </p>

      <h2 id="edge-cases">Edge case testing</h2>
      <p>
        For every AI-generated function, explicitly test these categories of input:
      </p>
      <ul>
        <li>
          <strong>Empty inputs</strong> — empty string, empty array, empty object. Does the function
          handle them gracefully or throw?
        </li>
        <li>
          <strong>Null and undefined</strong> — what happens when a required parameter is null?
          AI code often assumes valid inputs without defensive checks.
        </li>
        <li>
          <strong>Boundary values</strong> — for numeric inputs, test zero, negative values, maximum
          expected values, and one beyond the boundary.
        </li>
        <li>
          <strong>Type mismatches</strong> — what if a string is passed where a number is expected?
          In JavaScript without TypeScript runtime validation, this is a real runtime risk.
        </li>
        <li>
          <strong>Very large inputs</strong> — performance issues and integer overflow are common
          failure modes not tested by default.
        </li>
      </ul>

      <h2 id="security-review">Security review</h2>
      <p>
        Run a security-focused review on any AI code that handles user input, database operations,
        authentication, or external APIs:
      </p>

      <h3>SQL and database injection</h3>
      <p>
        AI models occasionally generate SQL queries using string concatenation. This is the classic
        injection vector:
      </p>
      <pre><code>{`// Dangerous — AI might generate this
const query = \`SELECT * FROM users WHERE id = \${userId}\`;

// Safe — always use parameterised queries
const query = 'SELECT * FROM users WHERE id = ?';
const result = await db.execute(query, [userId]);`}</code></pre>

      <h3>XSS in rendered output</h3>
      <p>
        In React, <code>dangerouslySetInnerHTML</code> in AI-generated JSX is a red flag. Any use of
        it requires verifying the content is sanitised with a library like DOMPurify before rendering.
      </p>

      <h3>Authentication and authorisation gaps</h3>
      <p>
        AI generates route handlers without thinking about which users are allowed to call them.
        Every API route that accesses user-specific data or performs a privileged action must
        explicitly check: is the request authenticated? is the authenticated user authorised to
        perform this action on this resource?
      </p>

      <h3>Exposed error details</h3>
      <p>
        AI error handlers often do:
      </p>
      <pre><code>{`// Bad — exposes internal stack trace to client
res.status(500).json({ error: error.message, stack: error.stack });

// Safe — log internally, return generic message
console.error('Order processing failed:', error);
res.status(500).json({ error: 'An error occurred processing your order' });`}</code></pre>

      <h2 id="maintainability">Maintainability and readability</h2>
      <p>
        Security and correctness matter most, but maintainability determines long-term cost:
      </p>
      <ul>
        <li>
          <strong>No magic numbers</strong> — AI sometimes uses hardcoded values without naming them.
          <code>if (retries &gt; 3)</code> should be <code>const MAX_RETRIES = 3; if (retries &gt; MAX_RETRIES)</code>
        </li>
        <li>
          <strong>Function length</strong> — AI sometimes generates very long functions. Functions
          that exceed 50 lines typically need to be split. Each function should do one thing.
        </li>
        <li>
          <strong>Naming</strong> — AI variable names are sometimes generic (<code>data</code>,
          <code>result</code>, <code>temp</code>). Rename to reflect what the variable contains.
        </li>
        <li>
          <strong>TypeScript types</strong> — search the diff for <code>any</code>. Every
          <code>any</code> type is a deferred bug. Find the correct type or create one.
        </li>
        <li>
          <strong>Comments vs code</strong> — AI sometimes adds comments explaining what the code
          does rather than why. Remove comments that just re-state the code; keep comments that
          explain non-obvious decisions.
        </li>
      </ul>

      <h2 id="regression-testing">Regression testing</h2>
      <p>
        Before merging any AI-generated pull request:
      </p>
      <ol>
        <li>Run the full test suite with <code>npm test</code> or equivalent</li>
        <li>Check that no existing tests have been broken</li>
        <li>For changes to shared utilities, manually trace which callers are affected</li>
        <li>
          Run a type check: <code>npx tsc --noEmit</code> — AI edits can introduce type errors in
          other files that the build tool may not catch
        </li>
        <li>
          For UI changes: manually test the affected flows in a browser, not just in unit tests
        </li>
      </ol>

      <h2 id="pr-walkthrough">Pull request walkthrough example</h2>
      <p>
        Here is a realistic AI-generated pull request with the issues found during review:
      </p>
      <p>
        <strong>PR:</strong> &ldquo;Add endpoint to export user data as CSV&rdquo; — generated by Cursor Composer
        from a brief spec.
      </p>
      <p><strong>Issues found in review:</strong></p>
      <ul>
        <li>
          The route handler had no authentication check — any unauthenticated request could export
          any user&apos;s data. <em>Critical security issue.</em>
        </li>
        <li>
          The CSV was generated by joining field values with commas without escaping. A user with a
          comma in their name would corrupt the CSV output. <em>Data correctness bug.</em>
        </li>
        <li>
          The function fetched all users into memory before writing the CSV. For 100,000 users,
          this would crash the server. <em>Performance issue.</em>
        </li>
        <li>
          There were no tests. <em>Missing tests.</em>
        </li>
        <li>
          The function used <code>any</code> for the user type. <em>TypeScript quality issue.</em>
        </li>
      </ul>
      <p>
        This is not unusual. Five issues in a PR that &ldquo;worked&rdquo; when tested manually — all caught
        in a structured review. None were caught by the AI itself. All were fixable; the point is
        that structured review is the only thing that catches them.
      </p>

      <h2 id="review-checklist">AI code review checklist</h2>
      <ArticleChecklist
        title="AI Code Review Checklist"
        items={checklistItems}
      />

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Should I use AI to review AI-generated code?</h3>
      <p>
        Yes — as one layer of review, not the only one. Ask the AI (or a different AI) to review
        the generated code for security issues, edge cases, and potential bugs. This catches some
        of what the generating AI missed. But AI review of AI code still misses the same categories
        of issues — particularly business rule violations, novel security patterns, and context-specific
        requirements. Human review remains necessary.
      </p>

      <h3>How long should reviewing AI-generated code take?</h3>
      <p>
        Budget approximately 30–50% of the time it would take to write the code manually. AI
        saves time on writing; the savings should partly go into more thorough review, not into
        skipping review entirely. A 200-line PR generated in 10 minutes should still get a 15–20
        minute structured review.
      </p>

      <h3>What tools help with automated security review of AI code?</h3>
      <p>
        <strong>Semgrep</strong> (free community rules) — static analysis that catches common
        security patterns across many languages. <strong>npm audit</strong> — checks dependencies
        for known vulnerabilities. <strong>ESLint with security plugin</strong> (
        <code>eslint-plugin-security</code>) — catches common JavaScript security anti-patterns.
        These automate the mechanical parts of security review; human review is still needed for
        logic-level vulnerabilities.
      </p>

      <p>
        For the tools generating the code being reviewed, see the{" "}
        <Link href="/blog/claude-code-vs-cursor-vs-copilot">Claude Code vs Cursor vs Copilot comparison</Link>.
        For debugging the issues this review process finds, read{" "}
        <Link href="/blog/debug-javascript-errors-with-ai">how to debug JavaScript errors faster using AI</Link>.
      </p>
    </ArticleLayout>
  );
}
