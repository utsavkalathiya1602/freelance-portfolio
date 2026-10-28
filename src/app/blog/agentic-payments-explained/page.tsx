import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ComparisonTable } from "@/components/blog/ArticleWidgets";

const slug = "agentic-payments-explained";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "agentic payments",
    "AI agents in payments",
    "agentic commerce",
    "autonomous payments",
    "AI shopping agents",
    "secure AI transactions",
    "what are agentic payments",
    "can AI agents make payments safely",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "what-are-agentic-payments", label: "What are agentic payments?" },
  { id: "how-ai-agents-interact", label: "How AI agents interact with payment systems" },
  { id: "vs-ordinary-payments", label: "How agentic payments differ from ordinary online payments" },
  { id: "business-use-cases", label: "Potential business use cases" },
  { id: "security-risks", label: "Security, authorisation, and fraud risks" },
  { id: "human-controls", label: "Human approval and spending controls" },
  { id: "current-limitations", label: "Adoption challenges and current limitations" },
  { id: "what-to-watch", label: "What businesses should watch next" },
  { id: "faqs", label: "Frequently asked questions" },
];

const pilotVsProductionRows = [
  {
    label: "Visa Trusted Agent Protocol (TAP)",
    a: "In production piloting with select partners (Visa, 2026)",
    b: "Provides cryptographic agent identity and tokenised payment credentials for AI agents",
  },
  {
    label: "Mastercard Agent Pay",
    a: "Live pilots with selected financial institutions (Mastercard, 2026)",
    b: "Agent identity verification and spending controls on behalf of users",
  },
  {
    label: "Stripe agent payment support",
    a: "Available via Stripe API with developer integration (Stripe, 2026)",
    b: "Developers can build agent payment flows; not yet a consumer-facing product",
  },
  {
    label: "Razorpay conversational commerce (India)",
    a: "Pilot stage in India as of 2026",
    b: "AI-driven in-app purchase flows; limited to partner merchants",
  },
  {
    label: "Autonomous B2B procurement agents",
    a: "Enterprise deployments at select large companies",
    b: "AI agents approved to place orders within pre-defined supplier catalogues and budget limits",
  },
  {
    label: "Fully autonomous general consumer shopping",
    a: "Not yet in mainstream production",
    b: "No widely available consumer product allows AI to shop without per-transaction approval in 2026",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Building a web application with payment or AI agent features?",
        text: "Agentic commerce requires careful architecture — secure API design, authentication flows, and webhook verification. If you are planning an application that integrates payments or AI workflows, I can help with the technical planning and development.",
        whatsappMessage: "Hi, I am building an application with AI and payment features and would like to discuss the architecture.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        Agentic payments are transactions initiated by an AI agent acting on a user&#39;s behalf, within limits set by
        that user. In 2026, several major payment networks — including Visa, Mastercard, and Stripe — have announced
        or are piloting the infrastructure required for AI agents to make payments. However, fully autonomous consumer
        shopping agents are not yet widely available in production. Most current implementations require explicit
        per-transaction approval, operate within pre-defined spending limits, and are restricted to specific merchant
        contexts. This article explains what the technology is, what is actually working versus what is still being
        piloted, and what the key security and accountability questions are.
      </p>

      <h2 id="what-are-agentic-payments">What are agentic payments?</h2>
      <p>
        Agentic payments occur when an AI agent — software that can plan and execute multi-step tasks autonomously —
        searches for products or services, selects an option based on user-defined preferences, and initiates a
        payment, all without the user manually completing each step.
      </p>
      <p>
        The concept is an extension of AI agents more broadly. While an AI chatbot answers questions, an AI agent can
        take actions: browsing a supplier catalogue, comparing prices, adding items to a cart, and completing a
        purchase. When that action involves a payment, the agent must interact with payment infrastructure in a way
        that is authenticated, authorised, and accountable.
      </p>
      <p>
        This is meaningfully different from saved payment methods or one-click checkout, where a human initiates the
        payment. In agentic payments, the trigger comes from the agent, not the human — even if the human set the
        parameters in advance.
      </p>

      <h2 id="how-ai-agents-interact">How AI agents interact with commerce and payment systems</h2>
      <p>
        A simplified flow of how an agentic payment might work:
      </p>
      <ol>
        <li>
          <strong>User authorises the agent:</strong> The user sets parameters — a maximum spending limit, approved
          merchant categories, types of products the agent can purchase — and grants the agent a tokenised payment
          credential with those constraints encoded
        </li>
        <li>
          <strong>Agent receives a task:</strong> The user (or an automated trigger) asks the agent to fulfil a goal —
          for example, &quot;reorder office supplies when stock falls below threshold&quot;
        </li>
        <li>
          <strong>Agent searches and selects:</strong> The agent queries approved suppliers or public merchants,
          compares options against the user&#39;s stated preferences (price, delivery time, sustainability criteria),
          and selects an option
        </li>
        <li>
          <strong>Agent initiates payment:</strong> The agent submits a payment request using its tokenised credential
          to the merchant&#39;s payment system. The payment network verifies that the agent&#39;s credential is valid and
          that the transaction is within authorised parameters
        </li>
        <li>
          <strong>Confirmation and reporting:</strong> The payment is processed; the user receives a notification
          confirming what was purchased, from whom, and for how much. The agent cannot exceed the authorised limit
          or transact with unapproved merchants
        </li>
      </ol>
      <p>
        The technical foundation — giving AI agents a verifiable identity and constrained payment credential — is the
        key problem being solved by projects like Visa&#39;s Trusted Agent Protocol (TAP) and Mastercard Agent Pay.
        Without a way for a payment network to verify that a payment request is coming from an authorised agent acting
        within defined limits, there is no secure way to allow agent-initiated transactions.
      </p>

      <h2 id="vs-ordinary-payments">How agentic payments differ from ordinary online payments</h2>
      <p>
        In ordinary online payments, a human is present at the point of payment — they click &quot;Buy&quot;, authenticate
        with a password or biometric, and confirm the transaction. Even saved payment methods with one-click checkout
        involve a human making the final purchase decision.
      </p>
      <p>
        Agentic payments remove the human from the specific moment of purchase. The human&#39;s involvement is upstream —
        in setting the rules and authorisations — rather than at the point of each individual transaction. This
        creates several novel questions:
      </p>
      <ul>
        <li>
          <strong>Authentication:</strong> Traditional payment authentication relies on something the human knows
          (password), has (phone for OTP), or is (biometric). None of these directly apply to an agent. New
          authentication models — cryptographic agent identity, hardware attestation, and user-signed authorisation
          tokens — are being developed.
        </li>
        <li>
          <strong>Authorisation scope:</strong> How do merchant payment systems know what an agent is and is not
          allowed to buy? Current approaches involve encoding constraints into the payment credential itself.
        </li>
        <li>
          <strong>Liability:</strong> If an agent purchases the wrong item, exceeds a budget due to a system error,
          or is exploited by a fraudulent merchant, who is responsible — the user, the agent software provider, the
          payment network, or the merchant?
        </li>
        <li>
          <strong>Dispute resolution:</strong> Chargebacks and payment disputes are built around human-initiated
          purchases. Processes for agent-initiated transactions are not yet standardised.
        </li>
      </ul>

      <h2 id="business-use-cases">Potential business use cases</h2>

      <h3>B2B procurement</h3>
      <p>
        Enterprise AI agents can be authorised to replenish supplies from approved vendors within budget limits —
        without requiring a purchase order approved by a human for every routine reorder. This is one of the more
        advanced and currently viable applications, because the parameters are well-defined and the merchant
        relationships are pre-established.
      </p>

      <h3>Travel and expense management</h3>
      <p>
        An agent could book flights, hotels, and ground transport for an employee according to company travel policy
        (economy class, approved hotel chains, within daily rate limits) — handling the complete booking flow without
        human intervention beyond the initial authorisation.
      </p>

      <h3>Subscription and service management</h3>
      <p>
        Agents could manage software subscriptions — upgrading, downgrading, or cancelling services based on usage
        data and budget parameters, without manual review of each billing cycle.
      </p>

      <h3>Consumer personal shopping</h3>
      <p>
        A consumer agent could be authorised to reorder specific household items (pet food, coffee, printer paper)
        when levels fall below a threshold, selecting the best available price within a budget. This is conceptually
        straightforward but raises consumer protection questions about returns, unintended purchases, and how agents
        handle merchant promotions or upsells.
      </p>

      <h2 id="security-risks">Security, authorisation, and fraud risks</h2>

      <h3>Agent impersonation</h3>
      <p>
        If a fraudster can forge or steal an agent&#39;s payment credential, they can make purchases that appear to
        come from a legitimate authorised agent. Cryptographic identity — where the agent&#39;s credential is tied to a
        specific private key that cannot be copied — is the primary defence being built into protocols like Visa TAP.
      </p>

      <h3>Prompt injection attacks</h3>
      <p>
        AI agents can be manipulated by malicious content embedded in websites or documents they process. A
        fraudulent merchant page could contain hidden instructions that cause an agent to make unintended purchases or
        reveal its payment credential. This is an active and serious security research area — there is currently no
        complete solution.
      </p>

      <h3>Scope creep</h3>
      <p>
        An agent given broad spending permissions might interpret its mandate more liberally than the user intended —
        purchasing a more expensive option because it technically met the criteria, or selecting a service from an
        unfamiliar provider because it was cheapest. Tight, explicit parameter specification is important.
      </p>

      <h3>Infrastructure liability</h3>
      <p>
        Legal liability frameworks for AI-initiated payments are still being developed. If an agent makes a purchase
        the user did not intend, the user&#39;s recourse and the merchant&#39;s obligations are not yet clearly standardised.
      </p>

      <h2 id="human-controls">Human approval and spending controls</h2>
      <p>
        All responsible agentic payment implementations in 2026 include some form of human control. The specific
        mechanisms vary but commonly include:
      </p>
      <ul>
        <li>
          <strong>Spending limits:</strong> A maximum total spend per transaction, per day, or per period that the
          agent credential enforces automatically
        </li>
        <li>
          <strong>Merchant allowlists:</strong> Restricting the agent to transact only with pre-approved merchants or
          merchant categories
        </li>
        <li>
          <strong>Per-transaction approval for large amounts:</strong> Below a threshold, the agent proceeds autonomously;
          above it, a human confirmation is required before the transaction completes
        </li>
        <li>
          <strong>Real-time notifications:</strong> Every agent transaction triggers a push notification to the user
          immediately, allowing prompt detection of unintended activity
        </li>
        <li>
          <strong>Revocable authorisation:</strong> The user can revoke the agent&#39;s payment credential at any time
          — ideally with a single action in the platform interface
        </li>
      </ul>
      <p>
        The principle that human oversight must be preserved — even when the agent is operating autonomously — is
        consistently stated by payment networks, regulators, and responsible AI developers. The question is not
        whether humans remain in control, but how that control is exercised efficiently without requiring approval of
        every routine transaction.
      </p>

      <h2 id="current-limitations">Adoption challenges and current limitations (October 2026)</h2>
      <ComparisonTable
        colA="Current status (October 2026)"
        colB="Description"
        rows={pilotVsProductionRows}
        note="Status verified from publicly available company announcements and official documentation as of October 2026. Pilot status may change as implementations progress. Do not rely on pilot-stage features for production business decisions without confirming current availability with the provider."
      />

      <h3>Regulatory uncertainty</h3>
      <p>
        Regulators in most jurisdictions — including the RBI in India, the FCA in the UK, and financial regulators
        across the EU — have not yet published comprehensive frameworks specifically for AI-agent-initiated
        transactions. Businesses building on this technology should monitor regulatory developments closely, as
        rules could change.
      </p>

      <h3>Interoperability</h3>
      <p>
        Visa, Mastercard, and third-party payment networks are developing their own agent protocols, which are not
        necessarily interoperable with each other. A merchant who accepts Visa TAP-enabled agents may not accept
        Mastercard Agent Pay credentials, and vice versa — creating fragmentation similar to early card network
        incompatibilities.
      </p>

      <h2 id="what-to-watch">What businesses should watch next</h2>
      <ul>
        <li>
          <strong>Regulatory guidance:</strong> Watch for RBI, FCA, CFPB, and EU regulatory statements on AI agent
          transaction liability and consumer protection obligations for agent-initiated purchases
        </li>
        <li>
          <strong>Protocol standardisation:</strong> Whether an open standard emerges for agent identity and payment
          credentials — or whether multiple proprietary protocols coexist — will significantly affect implementation
          complexity
        </li>
        <li>
          <strong>Consumer dispute frameworks:</strong> Payment networks and consumer protection bodies working on
          how chargebacks, fraud liability, and dispute resolution apply to agent-initiated transactions
        </li>
        <li>
          <strong>India-specific developments:</strong> NPCI and RBI policies on AI agent payments on the UPI
          network — particularly how agent identity and authorisation would work within UPI&#39;s existing architecture
        </li>
      </ul>

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Can I use an AI agent to shop online automatically right now?</h3>
      <p>
        In limited contexts, yes. Some enterprise tools allow AI agents to make purchases within pre-approved
        supplier catalogues. For general consumer online shopping, no widely available consumer product allows
        fully autonomous agent purchases without per-transaction approval as of October 2026. Most consumer-facing
        &quot;shopping assistant&quot; AI tools make recommendations but still require you to click &quot;Buy&quot;.
      </p>

      <h3>Are agentic payments safe?</h3>
      <p>
        The safety of agentic payments depends entirely on the implementation: how tightly spending limits are set,
        whether merchant allowlists are used, how the agent credential is secured, and whether real-time notification
        and easy revocation are available. Infrastructure-level work by Visa and Mastercard addresses some risks, but
        prompt injection and scope interpretation remain active challenges without complete solutions.
      </p>

      <h3>How is this different from autopay or direct debit?</h3>
      <p>
        Autopay and direct debit allow recurring payments to a known merchant at a known amount on a known schedule.
        Agentic payments are more flexible — the agent can decide when to purchase, what to purchase, and from whom,
        within defined parameters. That flexibility is both the value proposition and the source of additional risk
        compared to fixed recurring payments.
      </p>

      <h3>What should I do if an AI agent makes a purchase I did not authorise?</h3>
      <p>
        Contact your bank immediately and report it as an unauthorised transaction. The normal dispute and chargeback
        process applies. Review the permissions you granted to the agent and revoke its payment access while the
        dispute is resolved.
      </p>

      <p>
        For related reading, see the article on{" "}
        <Link href="/blog/ai-financial-fraud-detection">AI financial fraud detection</Link> — which covers how
        payment networks detect fraud in real time, including the emerging challenge of AI-vs-AI fraud — and{" "}
        <Link href="/blog/building-secure-payment-systems">building secure payment integrations</Link> for developers
        working on the technical side of payment flows.
      </p>
    </ArticleLayout>
  );
}
