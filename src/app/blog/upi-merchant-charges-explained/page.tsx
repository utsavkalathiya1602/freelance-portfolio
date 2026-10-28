import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ComparisonTable } from "@/components/blog/ArticleWidgets";

const slug = "upi-merchant-charges-explained";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "UPI merchant charges",
    "UPI MDR explained",
    "UPI transaction fees 2026",
    "merchant payment charges India",
    "UPI MDR rules 2026",
    "digital payment fees India",
    "UPI payment rules merchants",
    "are there UPI charges for merchants",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "what-are-upi-merchant-charges", label: "What are UPI merchant charges?" },
  { id: "what-is-mdr", label: "What is MDR?" },
  { id: "current-rules-2026", label: "Current UPI MDR rules in 2026" },
  { id: "transaction-types", label: "How charges differ by transaction type" },
  { id: "deferred-rollout", label: "The deferred MDR rollout explained" },
  { id: "payment-provider-charges", label: "What payment providers may charge" },
  { id: "questions-to-ask", label: "Questions to ask before choosing a provider" },
  { id: "common-misunderstandings", label: "Common merchant misunderstandings" },
  { id: "faqs", label: "Frequently asked questions" },
];

const mdrRows = [
  {
    label: "Person-to-Person (P2P) transfers",
    a: "Free, regardless of amount",
    b: "All P2P transfers — no MDR applies",
  },
  {
    label: "P2M — small merchants (≤₹1L/month)",
    a: "Free — zero MDR under P2PM framework",
    b: "Street vendors, small shops receiving up to ₹1 lakh per month",
  },
  {
    label: "P2M — transactions up to ₹2,000",
    a: "Free",
    b: "Covers ~95–96% of daily retail UPI transactions (NPCI, 2026)",
  },
  {
    label: "P2M — transactions above ₹2,000",
    a: "0.4% MDR (capped at ₹300 per transaction)",
    b: "Applies to medium/large merchants; deferred post-Diwali 2026",
  },
  {
    label: "Utilities, telecom, insurance, railways, fuel",
    a: "Flat nominal charge (approx. ₹5)",
    b: "Special category — specific charge may vary by provider",
  },
  {
    label: "Capital market transactions",
    a: "0.02% MDR (capped at ₹300)",
    b: "Lower rate for financial market transactions",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Need a payment integration or fintech web application?",
        text: "If you are building a business website that needs to accept UPI or other online payments, I can help with the technical integration. Send me a message with your requirements.",
        whatsappMessage: "Hi, I need help integrating UPI or online payment into my website.",
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        As of October 2026, most UPI transactions remain free. Person-to-person (P2P) transfers carry no charges.
        Person-to-merchant (P2M) transactions up to ₹2,000 are free for both consumers and merchants. A Merchant
        Discount Rate (MDR) of 0.4% — capped at ₹300 — was proposed for P2M transactions above ₹2,000, but its
        implementation has been deferred by NPCI until after Diwali 2026, with the final implementation date to be
        announced separately. Small merchants receiving up to ₹1 lakh per month continue to enjoy zero MDR.
      </p>
      <p>
        <strong>Important:</strong> This article reflects information as of 28 October 2026, based on NPCI and PIB
        sources. The MDR implementation date has not yet been confirmed. Check NPCI&#39;s official website or your
        payment service provider for the latest confirmed rules before making business decisions.
      </p>

      <h2 id="what-are-upi-merchant-charges">What are UPI merchant charges?</h2>
      <p>
        UPI merchant charges are the fees that a business (the merchant) may pay when customers use UPI to pay them.
        Unlike bank transaction fees that consumers pay directly, merchant charges are deducted from the payment
        received by the merchant — consumers are not supposed to be charged a separate UPI surcharge at checkout.
      </p>
      <p>
        These charges are a form of Merchant Discount Rate — a term borrowed from the card payment industry. The MDR
        is the cost the merchant pays to support the payment infrastructure: the banks, the payment network (in this
        case NPCI), and any payment aggregator or service provider involved in processing the transaction.
      </p>
      <p>
        Since UPI was launched, most merchant transactions have been zero-MDR as part of a government policy to
        encourage digital payments. The ongoing policy debate centres on how to sustainably fund UPI infrastructure
        while keeping payments accessible to small businesses and consumers.
      </p>

      <h2 id="what-is-mdr">What is MDR?</h2>
      <p>
        MDR stands for Merchant Discount Rate. It is a percentage fee charged on each payment transaction, deducted
        from the amount received by the merchant. The MDR is typically shared among three parties:
      </p>
      <ul>
        <li>
          <strong>The issuing bank</strong> (the bank that issued the customer&#39;s UPI-linked account) — receives the
          largest share for maintaining customer accounts and processing debits
        </li>
        <li>
          <strong>The acquiring bank or payment aggregator</strong> (the institution connecting the merchant to the
          payment network) — receives a share for processing and settlement
        </li>
        <li>
          <strong>NPCI</strong> (the network operator) — receives a small share for operating the UPI infrastructure
        </li>
      </ul>
      <p>
        For example, with a 0.4% MDR on a ₹5,000 transaction: the merchant receives ₹4,980, and ₹20 is distributed
        among the parties above. This is a simplified illustration — actual distribution formulae are determined by
        NPCI and may differ.
      </p>

      <h2 id="current-rules-2026">Current UPI MDR rules in 2026</h2>
      <p>
        The following reflects the framework announced by NPCI and the Ministry of Finance, as of October 2026.
        Implementation of the P2M MDR for larger transactions has been deferred. Check official sources for
        confirmation of final implementation dates.
      </p>
      <ComparisonTable
        colA="MDR status"
        colB="Who it applies to"
        rows={mdrRows}
        note="Sources: NPCI official announcement (October 2026); PIB (pib.gov.in); IndusInd Bank consumer guide. The 0.4% MDR on P2M transactions above ₹2,000 has been deferred post-Diwali 2026 — confirm the final implementation date before assuming it is in effect."
      />

      <h2 id="transaction-types">How charges differ by transaction type</h2>

      <h3>Person-to-Person (P2P)</h3>
      <p>
        When you transfer money to a friend, family member, or anyone&#39;s personal UPI ID, this is a P2P transaction.
        P2P transfers are completely free under the UPI framework, regardless of the amount. There is no MDR applied
        to P2P transactions.
      </p>

      <h3>Person-to-Merchant (P2M) — consumers paying businesses</h3>
      <p>
        When a customer scans a QR code at a shop, pays via UPI link, or settles an invoice through UPI to a
        registered merchant, this is a P2M transaction. The MDR rules apply to this category.
      </p>
      <p>
        The distinction between small and medium-large merchants is determined by the merchant&#39;s monthly UPI
        collection volume. Merchants receiving up to ₹1 lakh per month fall under the Person-to-Person-Merchant
        (P2PM) framework and enjoy zero MDR. This protects street vendors, small retail shops, and micro-businesses
        from payment processing costs.
      </p>

      <h3>Special categories</h3>
      <p>
        Certain merchant categories — including utility bill payments, telecom recharges, insurance premiums, railway
        tickets, and fuel purchases — may attract a flat nominal charge rather than a percentage-based MDR. The
        specific charge for each category should be confirmed with NPCI or your payment service provider, as
        commercial arrangements vary.
      </p>

      <h2 id="deferred-rollout">The deferred MDR rollout explained</h2>
      <p>
        The UPI and Services Steering Committee announced in October 2026 that the implementation of MDR on select
        P2M transactions above ₹2,000 would be deferred until immediately after Diwali 2026, with the final
        implementation date to be announced separately. The deferral was announced to allow banks, payment
        aggregators, and payment apps additional time to prepare their systems and merchant communications.
      </p>
      <p>
        The deferral does not mean the MDR framework has been cancelled. Merchants should:
      </p>
      <ul>
        <li>Monitor NPCI&#39;s official website (npci.org.in) for the confirmed implementation date</li>
        <li>Check communications from their payment service provider or acquiring bank</li>
        <li>
          Review how MDR — if implemented — would affect their pricing, particularly for high-ticket transactions
          above ₹2,000
        </li>
        <li>
          Understand that the ₹300 per-transaction cap limits the maximum cost on any single UPI payment, regardless
          of the transaction amount
        </li>
      </ul>

      <h2 id="payment-provider-charges">What payment providers may charge separately</h2>
      <p>
        Even under a zero-MDR environment, merchants may still pay charges to their payment service providers. These
        are different from the NPCI MDR and are governed by individual commercial agreements:
      </p>
      <ul>
        <li>
          <strong>Payment gateway or aggregator fees:</strong> Services like Razorpay, PayU, Cashfree, or Stripe India
          charge their own processing fees. These may include per-transaction fees, monthly subscription fees, or
          settlement fees. These are set by the payment aggregator, not NPCI, and vary by plan and volume.
        </li>
        <li>
          <strong>Chargeback handling fees:</strong> If a customer disputes a transaction, some providers charge a fee
          for the dispute-handling process.
        </li>
        <li>
          <strong>Settlement timing fees:</strong> Standard settlement may be next-day (T+1); instant or same-day
          settlement may attract an additional charge.
        </li>
        <li>
          <strong>Integration and onboarding fees:</strong> Some providers charge one-time or annual fees for API
          access, onboarding support, or premium features.
        </li>
      </ul>
      <p>
        Always obtain a written, itemised fee schedule from your payment provider before signing up. Promotional
        zero-fee offers may revert to standard rates after an introductory period.
      </p>

      <h2 id="questions-to-ask">Questions to ask before choosing a payment provider</h2>
      <ol>
        <li>What is the MDR or processing fee for UPI P2M transactions above and below ₹2,000?</li>
        <li>Are there any additional charges beyond MDR (settlement fees, gateway fees, chargeback fees)?</li>
        <li>What is the standard settlement period, and what does faster settlement cost?</li>
        <li>Will your fees change when the NPCI MDR implementation date is confirmed?</li>
        <li>What is the process if a transaction is disputed or reversed?</li>
        <li>Are there minimum monthly volume requirements or monthly subscription fees?</li>
        <li>What are the integration requirements — API, QR code, payment link, or point-of-sale terminal?</li>
        <li>Is there a free trial period, and what are the terms if you switch providers later?</li>
      </ol>

      <h2 id="common-misunderstandings">Common merchant misunderstandings</h2>

      <h3>Misunderstanding 1: "UPI is always completely free for merchants"</h3>
      <p>
        This was broadly true under the zero-MDR policy. However, the framework now distinguishes between transaction
        types and merchant sizes. Once the P2M MDR above ₹2,000 is implemented (date to be confirmed), medium and
        large merchants will face a 0.4% charge on high-ticket transactions. Small merchants and all sub-₹2,000
        transactions remain free.
      </p>

      <h3>Misunderstanding 2: "MDR means customers pay extra"</h3>
      <p>
        MDR is a merchant-side cost, not a consumer surcharge. Customers are not supposed to be charged a separate
        &quot;UPI fee&quot; on top of the transaction amount. If a merchant attempts to add a surcharge, this is not
        compliant with standard UPI operating guidelines.
      </p>

      <h3>Misunderstanding 3: "All payment providers will charge exactly 0.4%"</h3>
      <p>
        The 0.4% MDR in the NPCI framework is the wholesale cost shared between banks and NPCI. Payment aggregators
        or gateways that you contract with may charge their own fees on top of this, which can be higher or structured
        differently. Always read your payment provider&#39;s fee schedule carefully.
      </p>

      <h3>Misunderstanding 4: "The MDR implementation started on 15 October 2026"</h3>
      <p>
        The originally proposed date of 15 October 2026 was superseded by NPCI&#39;s deferral announcement. As of
        28 October 2026, MDR on P2M transactions above ₹2,000 has not been implemented. The final implementation
        date has not been confirmed.
      </p>

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>Do I pay MDR on UPI transactions below ₹2,000?</h3>
      <p>
        No. Transactions up to ₹2,000 — which cover approximately 95–96% of daily retail UPI payments — are
        free for merchants under the current framework.
      </p>

      <h3>I am a small business. Will the UPI MDR affect me?</h3>
      <p>
        If your monthly UPI collections are ₹1 lakh or less, you fall under the P2PM (small merchant) category and
        continue to pay zero MDR even after the deferred implementation takes effect. If your collections exceed
        ₹1 lakh per month, only your transactions above ₹2,000 will attract the 0.4% MDR (capped at ₹300).
      </p>

      <h3>How do I verify my merchant category and MDR status?</h3>
      <p>
        Contact your acquiring bank or payment aggregator to confirm how you are categorised. If you registered as a
        merchant through a payment app, their merchant support team can confirm the applicable fee structure.
      </p>

      <h3>Where can I find official UPI MDR information?</h3>
      <p>
        The authoritative sources are NPCI&#39;s official website (npci.org.in), Press Information Bureau
        announcements (pib.gov.in), and communications from your registered bank or payment service provider. Be
        cautious of unofficial summaries that may not reflect the most recent deferral or framework details.
      </p>

      <h3>Does MDR apply to UPI payments made through WhatsApp Pay or other apps?</h3>
      <p>
        MDR applies based on the transaction type (P2P or P2M) and amount — not the app used to initiate the payment.
        The same rules apply whether the payment is made via Google Pay, PhonePe, Paytm, WhatsApp Pay, or a bank&#39;s
        own UPI app.
      </p>

      <p>
        For broader context on digital payment technology and security, see the article on{" "}
        <Link href="/blog/agentic-payments-explained">agentic payments</Link> — covering the next generation of
        AI-driven payment models — and{" "}
        <Link href="/blog/ai-financial-fraud-detection">AI financial fraud detection</Link> for information on how
        payment networks protect merchants and consumers from fraud.
      </p>
    </ArticleLayout>
  );
}
