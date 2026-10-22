import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleFAQ } from "@/components/blog/ArticleFAQ";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "google-ads-spam-leads";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "fake leads from Google Ads",
    "spam leads Google Ads",
    "Google Ads lead quality",
    "Performance Max spam leads",
    "Google Ads lead form spam",
    "how to stop spam form submissions",
  ],
});

const faqs = [
  {
    question: "Does Google refund money for fake leads?",
    answer:
      "Google filters invalid clicks and may credit invalid click activity, but a fake or low-quality form submission is not the same as an invalid click. Google’s own help documentation says its traffic filters don’t prevent invalid leads on their own, so protection on the form and in your campaign settings is your responsibility.",
  },
  {
    question: "Will adding reCAPTCHA reduce my number of real leads?",
    answer:
      "Invisible or score-based checks such as reCAPTCHA v3 add little friction for real visitors. Visible puzzles add more. Watch the form completion rate for two to four weeks after adding protection and compare the number of genuine leads, not total submissions.",
  },
  {
    question: "Should I stop using Performance Max because of spam leads?",
    answer:
      "Not automatically. First check where the junk leads come from, make sure only qualified leads are counted as conversions, and add form protection. If spam still dominates after those fixes, test a Search campaign against it with the same budget and compare cost per qualified lead.",
  },
  {
    question: "Are Google Ads lead form assets less spammy than website forms?",
    answer:
      "They are different, not automatically better. Lead form assets prefill details from the user’s Google account, which makes submitting easy — for genuine and casual users alike. Google offers verification options for lead forms; check the lead form editor for the options available in your account.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Paying for leads that never answer the phone?",
        text: "Share your campaign type and a few sample junk leads (with personal details removed). I will tell you where they are most likely coming from and what to fix first.",
        whatsappMessage: whatsappMessages.digitalMarketing,
      }}
    >
      <h2>Quick answer</h2>
      <p>
        Spam leads from Google Ads usually come from three places: <strong>bots filling your website form</strong>,{" "}
        <strong>low-intent placements</strong> (Display, partner sites and broad automated campaigns), and{" "}
        <strong>real people who submit by mistake or with wrong details</strong>. Google says its invalid-traffic
        filters protect your budget but{" "}
        <a href="https://support.google.com/google-ads/answer/18179211?hl=en">
          don’t prevent invalid leads on their own
        </a>
        . The fix is to protect the form, tighten where ads appear, and — most importantly — only count{" "}
        <em>qualified</em> leads as conversions so Google’s bidding stops chasing junk.
      </p>

      <ArticleToC
        items={[
          { id: "types", label: "The three types of junk leads" },
          { id: "diagnose", label: "Find where the junk is coming from" },
          { id: "form-fixes", label: "Fix the form" },
          { id: "campaign-fixes", label: "Fix the campaign settings" },
          { id: "conversion-fixes", label: "Fix what you count as a conversion" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <h2 id="types">The three types of junk leads</h2>
      <ul>
        <li>
          <strong>Bot submissions</strong> — random names, gibberish messages, foreign numbers, many submissions in a
          few minutes. Bots often post directly to the form, skipping any browser-side checks.
        </li>
        <li>
          <strong>Low-intent humans</strong> — real people who clicked an ad on an app or game, or who tapped a
          prefilled form without meaning to contact you. They exist, but don’t answer.
        </li>
        <li>
          <strong>Wrong-fit leads</strong> — genuine enquiries for a service you don’t offer, outside your area, or
          below your minimum budget. This is a targeting and messaging problem, not spam.
        </li>
      </ul>
      <p>
        Each type needs a different fix, so label 20–30 recent bad leads before changing anything.
      </p>

      <h2 id="diagnose">Find where the junk is coming from</h2>
      <ol>
        <li>
          <strong>Check the campaign type.</strong> In Google Ads, compare conversions by campaign. Performance Max
          and Display can show ads across many surfaces; Search ads appear against search queries. If junk is
          concentrated in one campaign, start there.
        </li>
        <li>
          <strong>Check the network.</strong> For Search campaigns, segment by network to see whether conversions
          come from Google Search or from search partners.
        </li>
        <li>
          <strong>Check timestamps.</strong> Bursts of submissions at odd hours or seconds apart point to bots.
        </li>
        <li>
          <strong>Check the conversion action.</strong> If a &ldquo;thank-you page view&rdquo; is counted, anyone
          reloading or bookmarking that page creates a conversion. If a button click is counted, a click without a
          completed form still counts.
        </li>
      </ol>

      <h2 id="form-fixes">Fix the form</h2>
      <p>
        Google’s{" "}
        <a href="https://support.google.com/google-ads/answer/18179211?hl=en">guidance on preventing invalid leads</a>{" "}
        recommends safeguards on your own website forms, including:
      </p>
      <ul>
        <li>
          <strong>reCAPTCHA or a similar bot check</strong> on the form.
        </li>
        <li>
          <strong>Server-side validation</strong> — checks that run on the server, because sophisticated bots can
          bypass browser-only checks and post data directly. Validate that phone numbers match the expected format
          (for India, a 10-digit mobile number) and that email domains are real.
        </li>
        <li>
          <strong>Double opt-in</strong> — a confirmation link by email, where it suits your business.
        </li>
      </ul>
      <p>Practical additions that work well for small Indian businesses:</p>
      <ul>
        <li>A hidden &ldquo;honeypot&rdquo; field that humans never see — any submission that fills it is a bot.</li>
        <li>
          One qualifying question, such as area, budget band or service type. It filters wrong-fit leads and gives
          you context before you call.
        </li>
        <li>
          A WhatsApp or call option next to the form. Many people in India prefer it, and a chat is hard for a bot to
          fake.
        </li>
      </ul>

      <h2 id="campaign-fixes">Fix the campaign settings</h2>
      <ul>
        <li>
          <strong>Search campaigns:</strong> review whether to include the Display Network and search partners. If
          partner traffic produces junk, turn it off and compare.
        </li>
        <li>
          <strong>Search terms:</strong> review the search terms report weekly and add negative keywords for
          irrelevant searches — &ldquo;free&rdquo;, &ldquo;jobs&rdquo;, &ldquo;course&rdquo; or service types you don’t
          offer.
        </li>
        <li>
          <strong>Location:</strong> target people <em>in</em> your service area rather than people merely
          interested in it, if you only serve locally.
        </li>
        <li>
          <strong>Lead form assets:</strong> if you use Google’s native lead forms, check the verification options
          Google describes in its{" "}
          <a href="https://support.google.com/google-ads/answer/9423234">lead form asset documentation</a>, and add a
          qualifying question.
        </li>
        <li>
          <strong>Ad copy:</strong> state who you serve and, where relevant, a starting price. Clear ads put off the
          wrong clicks before you pay for them.
        </li>
      </ul>

      <h2 id="conversion-fixes">Fix what you count as a conversion</h2>
      <p>
        This is the step most accounts miss. Smart Bidding and Performance Max optimise towards whatever you mark as
        a conversion. If every form submission counts — including spam — the system learns to find more people like
        the spammers.
      </p>
      <ul>
        <li>Count only completed form submissions, calls above a minimum duration, and WhatsApp chats — not page views or button clicks alone.</li>
        <li>
          Where possible, mark which leads were genuine in a spreadsheet or CRM and feed qualified leads back to
          Google Ads through offline conversion import, so bidding learns from real customers.
        </li>
        <li>
          If tracking itself looks wrong — conversions that don’t match the leads you receive — work through the{" "}
          <Link href="/blog/google-ads-conversion-tracking-not-working">
            conversion tracking troubleshooting guide
          </Link>{" "}
          first.
        </li>
      </ul>
      <p>
        Once junk is filtered out, your real cost per lead may look higher — but it is the number that matters. The{" "}
        <Link href="/blog/google-ads-cost-per-lead-india">Google Ads cost per lead guide</Link> explains how to judge
        it against your profit per customer.
      </p>

      <ArticleFAQ faqs={faqs} />

      <p>
        For campaign setup and lead tracking done for you, see the{" "}
        <Link href="/services/digital-marketing">Digital Marketing service page</Link>.
      </p>
    </ArticleLayout>
  );
}
