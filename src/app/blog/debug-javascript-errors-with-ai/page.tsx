import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";

const slug = "debug-javascript-errors-with-ai";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "debug JavaScript with AI",
    "AI debugging JavaScript errors",
    "ChatGPT debug code",
    "Cursor debug JavaScript",
    "how to debug faster with AI",
    "JavaScript error AI assistant",
    "AI pair programming debugging",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "setup", label: "Setup: what to give the AI" },
  { id: "example-bug", label: "The example bug" },
  { id: "step-1", label: "Step 1: Share the full error" },
  { id: "step-2", label: "Step 2: Diagnose the root cause" },
  { id: "step-3", label: "Step 3: Apply and verify the fix" },
  { id: "when-ai-is-wrong", label: "When the AI's first answer is wrong" },
  { id: "prompt-patterns", label: "Prompt patterns that work" },
  { id: "what-ai-cannot-do", label: "What AI cannot do in debugging" },
  { id: "faqs", label: "Frequently asked questions" },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Need a developer who debugs properly and doesn't just apply AI patches?",
        text: "I debug and fix JavaScript and React issues at the root cause level. Let's talk about what is broken in your project.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        AI tools (Cursor, Claude Code, ChatGPT, GitHub Copilot Chat) significantly speed up debugging
        when given the right context: the <strong>full error message</strong>, the <strong>stack trace</strong>,
        the <strong>relevant code snippet</strong>, and the <strong>expected vs actual behaviour</strong>.
        The workflow is: share context → get a diagnosis → verify the fix with tests before committing.
        When the AI&apos;s first answer is wrong (it will be sometimes), describe what happened when you tried
        it — the second attempt is usually correct.
      </p>

      <h2 id="setup">Setup: what to give the AI</h2>
      <p>
        The most common mistake when debugging with AI is providing too little context. An AI tool
        given &ldquo;my function isn&apos;t working&rdquo; is no better than a search engine. Give it:
      </p>
      <ul>
        <li>
          <strong>The full error message</strong> — copy the exact text, not a paraphrase. Error
          codes and specific wording matter.
        </li>
        <li>
          <strong>The complete stack trace</strong> — every line. The top entry shows where the error
          was thrown; lower entries show how execution got there. Both are needed.
        </li>
        <li>
          <strong>The relevant code</strong> — the function or component that is failing, plus any
          closely related code (the caller, the data being passed in). Not the entire codebase.
        </li>
        <li>
          <strong>What you expected vs what happened</strong> — this tells the AI whether the problem
          is a wrong output, a thrown exception, or a silent failure.
        </li>
        <li>
          <strong>What you have already tried</strong> — prevents the AI from suggesting things you
          have ruled out.
        </li>
      </ul>

      <h2 id="example-bug">The example bug</h2>
      <p>
        We will debug a real category of JavaScript bug: <strong>the &ldquo;Cannot read properties of
        undefined&rdquo; error</strong> — one of the most common JavaScript runtime errors. Here is the
        setup:
      </p>
      <pre><code>{`// utils/formatUser.ts
export function formatUserDisplay(user) {
  return \`\${user.profile.firstName} \${user.profile.lastName}\`;
}

// In a React component:
const UserCard = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  return <div>{formatUserDisplay(user)}</div>;
};`}</code></pre>
      <p><strong>Error in the browser console:</strong></p>
      <pre><code>{`TypeError: Cannot read properties of undefined (reading 'firstName')
    at formatUserDisplay (utils/formatUser.ts:2:21)
    at UserCard (components/UserCard.tsx:11:15)
    at renderWithHooks (react-dom.development.js:14985:18)
    at mountIndeterminateComponent (react-dom.development.js:17811:13)
    at beginWork (react-dom.development.js:19049:16)`}</code></pre>

      <h2 id="step-1">Step 1: Share the full error with the AI</h2>
      <p>
        Here is the prompt that was sent to Claude in Cursor Chat:
      </p>
      <pre><code>{`I have a TypeError in a React component. Here is the error:

TypeError: Cannot read properties of undefined (reading 'firstName')
    at formatUserDisplay (utils/formatUser.ts:2:21)
    at UserCard (components/UserCard.tsx:11:15)

Here is the relevant code:

// utils/formatUser.ts
export function formatUserDisplay(user) {
  return \`\${user.profile.firstName} \${user.profile.lastName}\`;
}

// components/UserCard.tsx
const UserCard = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  return <div>{formatUserDisplay(user)}</div>;
};

The component should show a user's full name. The error happens immediately when the component mounts.`}</code></pre>

      <h2 id="step-2">Step 2: Diagnose the root cause</h2>
      <p>Claude&apos;s diagnosis (summarised):</p>
      <blockquote>
        <p>
          The error occurs because <code>formatUserDisplay</code> is called on the initial render
          when <code>user</code> is still <code>null</code> (the initial state value). The
          <code>useEffect</code> fetch has not completed yet. When <code>user</code> is <code>null</code>,
          accessing <code>user.profile</code> throws <code>TypeError: Cannot read properties of null
          (reading &apos;profile&apos;)</code>, and then accessing <code>.firstName</code> on
          <code>undefined</code> throws the error you see.
        </p>
        <p>
          There are two layers to fix: guard against <code>null</code> in the component, and add a
          null check in <code>formatUserDisplay</code> for defensive programming.
        </p>
      </blockquote>
      <p>
        Claude then provided this corrected code:
      </p>
      <pre><code>{`// utils/formatUser.ts
export function formatUserDisplay(user) {
  if (!user?.profile) return '';
  return \`\${user.profile.firstName ?? ''} \${user.profile.lastName ?? ''}\`.trim();
}

// components/UserCard.tsx
const UserCard = ({ userId }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser(userId).then(setUser);
  }, [userId]);

  // Guard: don't render until user is loaded
  if (!user) return <div>Loading...</div>;

  return <div>{formatUserDisplay(user)}</div>;
};`}</code></pre>
      <p>
        The diagnosis was correct on the first attempt. Note that Claude also proactively added the
        optional chaining and nullish coalescing for defensive handling of users who might have
        missing profile fields — a quality improvement beyond just fixing the immediate error.
      </p>

      <h2 id="step-3">Step 3: Apply and verify the fix with tests</h2>
      <p>
        Before committing the fix, verify it covers the failing case and does not break other cases.
        The follow-up prompt:
      </p>
      <pre><code>{`Write Vitest unit tests for the updated formatUserDisplay function covering:
1. A complete user object
2. A null user
3. A user with a missing profile
4. A user with missing firstName or lastName`}</code></pre>
      <p>Claude generated:</p>
      <pre><code>{`import { describe, it, expect } from 'vitest';
import { formatUserDisplay } from './formatUser';

describe('formatUserDisplay', () => {
  it('returns full name for a complete user', () => {
    const user = { profile: { firstName: 'Alice', lastName: 'Smith' } };
    expect(formatUserDisplay(user)).toBe('Alice Smith');
  });

  it('returns empty string for null user', () => {
    expect(formatUserDisplay(null)).toBe('');
  });

  it('returns empty string when profile is missing', () => {
    expect(formatUserDisplay({ profile: null })).toBe('');
    expect(formatUserDisplay({})).toBe('');
  });

  it('handles missing firstName or lastName gracefully', () => {
    const userMissingFirst = { profile: { firstName: null, lastName: 'Smith' } };
    expect(formatUserDisplay(userMissingFirst)).toBe('Smith');

    const userMissingLast = { profile: { firstName: 'Alice', lastName: undefined } };
    expect(formatUserDisplay(userMissingLast)).toBe('Alice');
  });
});`}</code></pre>
      <p>
        All 4 tests pass. The fix is verified. This complete workflow — share context, diagnose,
        fix, verify — took approximately 8 minutes total.
      </p>

      <h2 id="when-ai-is-wrong">When the AI&apos;s first answer is wrong</h2>
      <p>
        AI debugging suggestions are wrong approximately 15–25% of the time on first attempt for
        non-trivial bugs. The correct response is not to give up — it is to provide feedback:
      </p>
      <pre><code>{`I tried your suggestion. Here is what happened:

- I added the null check to formatUserDisplay
- The original error is gone
- But now the component shows "Loading..." indefinitely even after the fetch completes

Here is the updated component code: [paste updated code]
Here is the network response from fetchUser: [paste API response or data structure]`}</code></pre>
      <p>
        With this feedback, the AI can typically identify the secondary issue (in this case, perhaps
        the fetch is failing silently or returning an unexpected data structure). The second attempt
        is correct much more often than the first when given specific feedback about what happened.
      </p>
      <p>
        <strong>When to stop and debug manually:</strong> If the AI has given three different
        suggestions and none have worked, the bug is likely in a part of the system the AI cannot
        see from the code snippets alone (network state, browser caching, environment variable,
        build tool configuration). Switch to traditional debugging: browser DevTools breakpoints,
        <code>console.log</code> tracing through the execution path, or the React DevTools component
        inspector.
      </p>

      <h2 id="prompt-patterns">Prompt patterns that consistently work</h2>
      <ul>
        <li>
          <strong>Error + trace + code + expected vs actual:</strong>{" "}
          <em>&ldquo;I got this error [paste error] at this location [paste trace]. Here is the code
          [paste]. I expected X but got Y.&rdquo;</em>
        </li>
        <li>
          <strong>Narrowed hypothesis testing:</strong>{" "}
          <em>&ldquo;I think the problem is in how the API response is structured. Here is what the
          API returns [paste] and here is how it is being accessed [paste]. What is wrong?&rdquo;</em>
        </li>
        <li>
          <strong>Request for test cases first:</strong>{" "}
          <em>&ldquo;Before fixing this, write test cases that reproduce the bug, then fix the code to
          make them pass.&rdquo;</em> This forces the AI to verify its own fix.
        </li>
        <li>
          <strong>Ask for explanation before fix:</strong>{" "}
          <em>&ldquo;Explain why this bug occurs before suggesting a fix.&rdquo;</em> A correct explanation
          of the root cause is a reliable predictor that the fix will also be correct.
        </li>
      </ul>

      <h2 id="what-ai-cannot-do">What AI cannot do in debugging</h2>
      <ul>
        <li>
          <strong>Observe runtime state directly</strong> — AI cannot attach to your running process,
          inspect memory, or see variable values at runtime. You must provide this information explicitly.
        </li>
        <li>
          <strong>Debug environment-specific issues reliably</strong> — if a bug only occurs in
          production but not development (due to build optimisation, environment variables, or
          infrastructure differences), AI cannot diagnose it without detailed environment context.
        </li>
        <li>
          <strong>Handle race conditions without a reproduction case</strong> — intermittent bugs
          that depend on timing require you to first create a consistent reproduction before AI
          assistance is useful.
        </li>
        <li>
          <strong>Know about very recent breaking changes</strong> — if a library released a
          breaking change last week, the AI&apos;s training data may not include it. Always check
          the library&apos;s changelog for the specific version you are using.
        </li>
      </ul>

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Which AI tool is best for debugging JavaScript?</h3>
      <p>
        For interactive debugging within your editor: Cursor Composer (reads terminal output and
        applies fixes in the same session). For complex bugs requiring deep reasoning: Claude Code
        or Claude via chat with the full context. For quick targeted questions: GitHub Copilot Chat
        or ChatGPT. See the{" "}
        <Link href="/blog/claude-code-vs-cursor-vs-copilot">Claude Code vs Cursor vs Copilot comparison</Link>
        {" "}for detail.
      </p>

      <h3>Can AI debug TypeScript errors?</h3>
      <p>
        Yes — TypeScript errors are among the clearest inputs for AI debugging because the error
        message is precise and the relevant code is small. Copy the full TypeScript error output
        (including the expected vs received type information) along with the relevant type definitions.
        AI tools resolve TypeScript type errors reliably in most cases.
      </p>

      <h3>Is it safe to paste production code into AI tools for debugging?</h3>
      <p>
        Check your AI tool&apos;s privacy policy before pasting real production code containing
        customer data, credentials, or proprietary business logic. Use enterprise plans with
        no-training guarantees for sensitive code, or anonymise/sanitise the snippet (replace
        real values with placeholders) before pasting.
      </p>

      <p>
        For reviewing and testing the code that emerges from AI debugging sessions, read{" "}
        <Link href="/blog/ai-code-review-testing-guide">can AI replace code review?</Link> For the
        tools used in this article, see the{" "}
        <Link href="/blog/claude-code-vs-cursor-vs-copilot">Claude Code vs Cursor vs Copilot comparison</Link>.
      </p>
    </ArticleLayout>
  );
}
