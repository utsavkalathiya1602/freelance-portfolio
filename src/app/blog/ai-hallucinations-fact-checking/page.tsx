import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";

const slug = "ai-hallucinations-fact-checking";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "AI hallucinations explained",
    "why AI gives wrong answers",
    "fact checking AI content",
    "AI hallucination examples",
    "how to verify AI output",
    "AI mistakes and errors",
    "ChatGPT wrong answers",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "what-hallucinations-are", label: "What hallucinations actually are" },
  { id: "why-they-happen", label: "Why they happen" },
  { id: "most-dangerous-types", label: "The most dangerous types" },
  { id: "verifying-claims", label: "Verifying factual claims" },
  { id: "verifying-citations", label: "Verifying citations and sources" },
  { id: "verifying-code", label: "Verifying AI-generated code" },
  { id: "verifying-calculations", label: "Verifying calculations and numbers" },
  { id: "reducing-hallucinations", label: "How to reduce hallucinations with better prompting" },
  { id: "faqs", label: "Frequently asked questions" },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Using AI in your business and want it done properly?",
        text: "I help businesses integrate AI tools with appropriate verification and human oversight — so you get the productivity benefits without the accuracy risks. Let's talk.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        AI hallucinations happen because language models generate text by predicting the next most
        plausible word — not by retrieving verified facts. They produce wrong answers that sound correct
        because the <em>form</em> of a confident, detailed answer is more likely than the form of an
        uncertain one. The most dangerous hallucinations are plausible errors: a made-up citation that
        looks real, a subtly wrong calculation, code that runs but has a security hole. Every important
        AI output — facts, citations, code, numbers — should be independently verified before use.
      </p>

      <h2 id="what-hallucinations-are">What hallucinations actually are</h2>
      <p>
        The term &ldquo;hallucination&rdquo; describes a specific failure mode of large language models: generating
        content that is factually incorrect, fabricated, or inconsistent — but presented with the same
        confidence as accurate content.
      </p>
      <p>
        This happens because LLMs do not &ldquo;know&rdquo; facts in the way a database stores them. They learn
        statistical patterns from text: which words and concepts appear together, how ideas are typically
        expressed, what kinds of answers typically follow what kinds of questions. When generating a
        response, the model predicts the most likely next token based on all the patterns it has learned —
        not by looking up a verified fact.
      </p>
      <p>
        The result: a model that has seen many academic papers will produce text that <em>looks like</em>
        an academic citation, even if the specific paper it cites does not exist. A model that has
        processed thousands of code examples will produce code that <em>looks</em> syntactically correct,
        even if it has a logic error or uses a deprecated API.
      </p>

      <h2 id="why-they-happen">Why hallucinations happen</h2>
      <p>
        Several mechanisms contribute:
      </p>
      <ul>
        <li>
          <strong>Training data gaps</strong> — if the model has little information about a specific
          topic, it fills gaps by extrapolating from related patterns. The less represented a topic
          is in training data, the higher the hallucination rate.
        </li>
        <li>
          <strong>Knowledge cutoff</strong> — models are trained up to a certain date. Queries about
          events, releases, or prices after the cutoff will produce invented answers unless the model
          has access to real-time search.
        </li>
        <li>
          <strong>Confidence bias</strong> — models were reinforced during training to produce
          confident, helpful responses. This inadvertently trains them to sound certain even when
          they are guessing.
        </li>
        <li>
          <strong>Context pressure</strong> — when a conversation has established certain facts
          (even incorrectly), the model&apos;s next response will often accept and build on those
          &ldquo;facts&rdquo; rather than questioning them.
        </li>
        <li>
          <strong>Long-range coherence failure</strong> — in a long document or conversation,
          the model may contradict something it said earlier because it is only attending to recent
          context.
        </li>
      </ul>

      <h2 id="most-dangerous-types">The most dangerous types of hallucinations</h2>
      <p>
        Not all errors are equally risky. The most dangerous hallucinations share one property:
        they are <strong>plausibly correct</strong> — believable enough that a non-expert would
        not notice without checking.
      </p>

      <h3>Fabricated citations and sources</h3>
      <p>
        AI models frequently generate citations to papers, articles, or studies that do not exist —
        with correct-looking author names, publication years, journal names, and volume numbers.
        These are among the most dangerous hallucinations because they look authoritative. Never
        cite an AI-generated reference without finding and reading the original source.
      </p>

      <h3>Plausible but wrong numbers</h3>
      <p>
        Statistics, conversion rates, market sizes, and financial figures generated by AI look
        precise but are often invented or stale. A claim that &ldquo;73% of consumers prefer X&rdquo; that
        cannot be traced to a real study is a hallucination — even if 73% sounds like a plausible
        research finding.
      </p>

      <h3>Subtly wrong code</h3>
      <p>
        Code that runs without errors but has a logic bug, uses a deprecated API, contains a
        SQL injection vulnerability, or stores sensitive data insecurely. Functional correctness
        and security correctness are different dimensions — code can pass tests and still be exploitable.
      </p>

      <h3>Confident incorrect medical or legal information</h3>
      <p>
        AI models regularly give confident wrong answers to medical and legal questions. The phrasing
        is identical to correct answers — which is precisely what makes them dangerous if acted upon
        without professional verification.
      </p>

      <h2 id="verifying-claims">Verifying factual claims</h2>
      <p>
        For any factual statement from an AI tool that matters:
      </p>
      <ol>
        <li>
          <strong>Identify the specific claim</strong> — extract the concrete assertion (&ldquo;X% of Y
          do Z in 2026&rdquo;) separately from the AI&apos;s surrounding reasoning.
        </li>
        <li>
          <strong>Search for the primary source</strong> — find the original research, report, or
          data that the claim would come from. Use Google, Google Scholar, or a specific industry
          database.
        </li>
        <li>
          <strong>Verify the number specifically</strong> — do not just find a report on the topic;
          find the specific figure. Reports are frequently misquoted and figures change between
          editions.
        </li>
        <li>
          <strong>Check the date</strong> — a statistic from 2019 may be technically real but
          misleading in 2026. Verify that the data is current enough to be relevant.
        </li>
      </ol>
      <p>
        A useful cross-check: ask the AI to provide the source for a specific claim. If it cannot
        provide a verifiable citation, treat the claim as unverified.
      </p>

      <h2 id="verifying-citations">Verifying citations and sources</h2>
      <ol>
        <li>
          <strong>Check that the source exists</strong> — search Google Scholar, the publisher&apos;s
          website, or the journal directly. A paper with the exact title the AI cited should be
          findable.
        </li>
        <li>
          <strong>Verify the author and year</strong> — the author name and publication year should
          match. Authors write multiple papers; confirm the AI cited the right one.
        </li>
        <li>
          <strong>Read the abstract or conclusion</strong> — verify that the cited paper actually
          supports the claim the AI made. Papers are frequently cited for claims they do not make
          or only partially support.
        </li>
        <li>
          <strong>Check that the DOI resolves</strong> — if the AI provided a DOI (Digital Object
          Identifier), paste it into <a href="https://doi.org" rel="noopener noreferrer">doi.org</a>.
          A valid DOI resolves to the paper; an invented one will not.
        </li>
      </ol>

      <h2 id="verifying-code">Verifying AI-generated code</h2>
      <p>
        Code verification requires multiple layers:
      </p>
      <ul>
        <li>
          <strong>Does it run?</strong> — the minimum bar. Run the code in a safe environment and
          confirm it executes without errors.
        </li>
        <li>
          <strong>Does it do what you intended?</strong> — test edge cases: empty inputs, very large
          inputs, invalid types, concurrent calls. AI code often handles the happy path and fails
          on edge cases.
        </li>
        <li>
          <strong>Are the APIs current?</strong> — AI models have training cutoffs. Verify that the
          functions, methods, and API endpoints used still exist and have not been deprecated.
          Check the official documentation for the library version you are using.
        </li>
        <li>
          <strong>Are there security issues?</strong> — check for common vulnerabilities: SQL injection
          (if string-interpolating database queries), XSS (if outputting user input directly to HTML),
          exposed secrets, missing authentication checks on routes that need them.
        </li>
        <li>
          <strong>Run a linter and security scanner</strong> — ESLint (JavaScript), Bandit (Python),
          or Semgrep can catch common issues automatically.
        </li>
      </ul>

      <h2 id="verifying-calculations">Verifying calculations and numbers</h2>
      <p>
        AI language models are not calculators. They are better at arithmetic than they used to be
        (especially with tool use), but they still make errors — particularly with:
      </p>
      <ul>
        <li>Multi-step percentage calculations</li>
        <li>Large number arithmetic</li>
        <li>Date arithmetic (days between dates, deadline calculations)</li>
        <li>Financial calculations with compounding</li>
      </ul>
      <p>
        For any calculation that matters: redo it yourself with a calculator or spreadsheet. Do not
        accept AI arithmetic on trust.
      </p>
      <p>
        For code-based calculations, write unit tests with known inputs and expected outputs. Run
        the function against cases where you already know the answer.
      </p>

      <h2 id="reducing-hallucinations">How to reduce hallucinations with better prompting</h2>
      <p>
        You cannot eliminate hallucinations, but you can reduce them:
      </p>
      <ul>
        <li>
          <strong>Ask for sources explicitly:</strong> &ldquo;Include a citation for each claim you make.
          If you don&apos;t have a reliable source for a claim, say so.&rdquo;
        </li>
        <li>
          <strong>Instruct the model to express uncertainty:</strong> &ldquo;If you are not confident
          about something, say &lsquo;I&apos;m not certain&rsquo; rather than presenting it as fact.&rdquo;
        </li>
        <li>
          <strong>Provide context instead of asking the model to recall it:</strong> Paste in the
          actual document, policy, or data you want analyzed rather than asking the model to recall
          it from training data.
        </li>
        <li>
          <strong>Use models with live search access for current information:</strong> Perplexity,
          ChatGPT with Browse, Gemini with Search, and Claude with web search enabled retrieve
          information from current sources rather than recalled training data — significantly
          reducing hallucinations on recent facts.
        </li>
        <li>
          <strong>Break complex tasks into smaller steps:</strong> A model asked to write a 3,000-word
          article with 20 citations in one prompt hallucinates far more than one asked to research
          five specific claims first, then write the article using those verified claims.
        </li>
      </ul>

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Is Claude or GPT-4o less likely to hallucinate?</h3>
      <p>
        Both models have improved significantly on hallucination benchmarks through 2025–2026, but
        neither is reliable for high-stakes factual claims without verification. Claude tends to
        express uncertainty more frequently than GPT-4o, which can make it easier to identify when
        to verify — but expressing uncertainty is not the same as being correct. Use independent
        verification regardless of which model you use.
      </p>

      <h3>Does using AI with web search prevent hallucinations?</h3>
      <p>
        It significantly reduces them for current events and specific facts — the model retrieves
        real sources rather than recalled training data. However, AI with search can still misread
        sources, selectively cite, or introduce errors when synthesizing multiple sources. It is
        better than training-data recall, but verification of important claims is still warranted.
      </p>

      <h3>Are AI hallucinations getting better?</h3>
      <p>
        Yes — measurably. Benchmark hallucination rates for leading models have decreased
        year-over-year. Techniques like Constitutional AI, RLHF refinement, and retrieval augmentation
        all reduce hallucination frequency. However, they have not been eliminated — and the more
        nuanced a topic is, the more likely errors remain.
      </p>

      <p>
        For applying this in practice with AI coding tools, see{" "}
        <Link href="/blog/ai-code-review-testing-guide">how to test AI-generated code properly</Link>.
        For AI automation with appropriate oversight, read{" "}
        <Link href="/blog/ai-automations-for-small-business">practical AI automations for small businesses</Link>.
      </p>
    </ArticleLayout>
  );
}
