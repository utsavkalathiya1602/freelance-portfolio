import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleFAQ } from "@/components/blog/ArticleFAQ";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "google-ads-conversion-tracking-not-working";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "Google Ads conversion tracking not working",
    "Google Ads conversions showing zero",
    "Google Ads form submission tracking not working",
    "import GA4 key events to Google Ads",
    "Google Ads vs GA4 conversions mismatch",
    "Google Ads call tracking not working",
  ],
});

const faqs = [
  {
    question: "How long do Google Ads conversions take to appear?",
    answer:
      "Google’s help documentation notes that conversion data can take up to 24 hours to appear in Google Ads, and that newly marked GA4 key events can take 24–48 hours before they are available to import. Wait at least a day after a test before deciding tracking is broken.",
  },
  {
    question: "Why does Google Ads show more conversions than I received leads?",
    answer:
      "Common causes are counting a thank-you page that can be reloaded, counting button clicks instead of completed submissions, the same action being tracked by both a Google Ads tag and an imported GA4 event, or the count setting being “Every” instead of “One” for leads.",
  },
  {
    question: "Should I use the Google Ads tag or GA4 imports?",
    answer:
      "Either can work. The Google Ads tag is direct and usually reports faster; GA4 imports keep one definition of a lead across analytics and ads. What matters is that the same lead action is not set as a primary conversion twice.",
  },
  {
    question: "Can I track WhatsApp enquiries as Google Ads conversions?",
    answer:
      "You can track clicks on a WhatsApp button as a conversion, but that measures intent, not a confirmed conversation. Treat it as a secondary or lower-value action unless you can confirm chats separately.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Conversion numbers still don’t add up?",
        text: "I can audit your Google Ads conversion setup, fix the tags and make sure bidding only learns from real enquiries.",
        whatsappMessage: whatsappMessages.digitalMarketing,
      }}
    >
      <h2>Quick answer</h2>
      <p>
        When Google Ads conversion tracking &ldquo;isn’t working&rdquo;, the problem is almost always one of four
        things: <strong>the tag isn’t firing</strong>, <strong>the wrong action is being counted</strong>,{" "}
        <strong>the conversion is set as secondary</strong> (so it doesn’t show in the main Conversions column), or{" "}
        <strong>the same lead is counted twice</strong> by the Google Ads tag and a GA4 import. Work through them in
        that order: confirm the tag fires, submit a real test lead, then check the conversion action’s status,
        goal and counting settings.
      </p>

      <ArticleToC
        items={[
          { id: "symptoms", label: "Match the symptom to the likely cause" },
          { id: "step-1", label: "Step 1: Check the conversion action status" },
          { id: "step-2", label: "Step 2: Confirm the tag fires" },
          { id: "step-3", label: "Step 3: Check form tracking" },
          { id: "step-4", label: "Step 4: Check GA4 key event imports" },
          { id: "step-5", label: "Step 5: Check call tracking" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <p>
        This is a troubleshooting guide. If you are setting tracking up for the first time, start with{" "}
        <Link href="/blog/track-leads-google-ads-website-whatsapp">
          how to track leads from Google Ads, your website and WhatsApp
        </Link>
        .
      </p>

      <h2 id="symptoms">Match the symptom to the likely cause</h2>
      <div className="overflow-x-auto rounded-2xl border border-line">
      <table>
        <thead>
          <tr>
            <th scope="col">Symptom</th>
            <th scope="col">Most likely cause</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Zero conversions, but you are getting leads</td>
            <td>Tag not installed or not firing, or the trigger doesn’t match how the form works</td>
          </tr>
          <tr>
            <td>Conversions in &ldquo;All conversions&rdquo; but not in &ldquo;Conversions&rdquo;</td>
            <td>The action is set as secondary</td>
          </tr>
          <tr>
            <td>More conversions than real leads</td>
            <td>Double counting, page reloads, button clicks counted, or spam submissions</td>
          </tr>
          <tr>
            <td>Google Ads and GA4 numbers differ</td>
            <td>Different attribution and counting rules — some difference is normal</td>
          </tr>
          <tr>
            <td>Calls happen but no call conversions</td>
            <td>Phone number on site doesn’t match the format entered, or the snippet isn’t on that page</td>
          </tr>
        </tbody>
      </table>
      </div>

      <h2 id="step-1">Step 1: Check the conversion action status</h2>
      <p>
        In Google Ads, open <strong>Goals → Conversions → Summary</strong> and look at each action’s status and
        whether it is <strong>primary</strong> or <strong>secondary</strong>.
      </p>
      <ul>
        <li>
          <strong>Primary</strong> actions are used for bidding and appear in the &ldquo;Conversions&rdquo; column.
        </li>
        <li>
          <strong>Secondary</strong> actions are for observation only and appear under &ldquo;All conversions&rdquo;.
        </li>
      </ul>
      <p>
        Google’s documentation notes that conversions created from the Google Analytics side start as{" "}
        <a href="https://support.google.com/google-ads/answer/2375435?hl=en">secondary</a> and need to be changed in
        Google Ads if you want them to drive bidding. An &ldquo;Inactive&rdquo; or &ldquo;No recent
        conversions&rdquo; status tells you to move on to Step 2.
      </p>

      <h2 id="step-2">Step 2: Confirm the tag fires</h2>
      <ol>
        <li>Open your website with Google’s Tag Assistant connected.</li>
        <li>Check the Google tag loads on every page — not only the homepage.</li>
        <li>
          Complete the actual lead action (submit the form with test details) and confirm the conversion event fires
          at that moment.
        </li>
        <li>If you use a cookie consent banner, test with consent accepted — and understand that declined consent reduces what can be measured.</li>
      </ol>
      <p>
        Google’s help pages note that an &ldquo;Inactive tag&rdquo; status often means the tag or snippet isn’t
        implemented correctly.
      </p>

      <h2 id="step-3">Step 3: Check form tracking</h2>
      <p>Most broken form tracking comes from a mismatch between how the form works and how the trigger was set up:</p>
      <ul>
        <li>
          <strong>Thank-you page trigger, but the form shows an inline message.</strong> Modern forms often show
          &ldquo;Thanks, we’ll be in touch&rdquo; without loading a new page, so a page-view trigger never fires.
        </li>
        <li>
          <strong>Click trigger on the submit button.</strong> This fires even when the form fails validation, so it
          over-counts.
        </li>
        <li>
          <strong>Form sent through WhatsApp or email app.</strong> If the button opens WhatsApp or the mail app, no
          form is &ldquo;submitted&rdquo; on the site. Track the click as intent, not as a confirmed lead.
        </li>
      </ul>
      <p>
        The most reliable option is to fire the conversion only after the form’s success response — something your
        developer can add in a few lines.
      </p>

      <h2 id="step-4">Step 4: Check GA4 key event imports</h2>
      <p>
        If you import conversions from Google Analytics 4, Google’s{" "}
        <a href="https://support.google.com/google-ads/answer/10632359">GA4 import documentation</a> lists the
        requirements:
      </p>
      <ul>
        <li>The Google Analytics property and Google Ads account must be linked, with auto-tagging on.</li>
        <li>Only events marked as <strong>key events</strong> in GA4 can be imported.</li>
        <li>New key events can take 24–48 hours to become available for import.</li>
      </ul>
      <p>
        The most common mistake here is <strong>double counting</strong>: a form submission tracked by a Google Ads
        tag <em>and</em> imported from GA4, with both set as primary. Keep one as primary and the other as secondary,
        or remove one.
      </p>
      <p>
        For leads, Google suggests counting <strong>&ldquo;One&rdquo;</strong> conversion per click rather than
        &ldquo;Every&rdquo;, so one person submitting twice isn’t counted as two leads.
      </p>

      <h2 id="step-5">Step 5: Check call tracking</h2>
      <p>
        Google Ads can track calls from ads and calls to a number on your website using a Google forwarding number.
        According to the{" "}
        <a href="https://support.google.com/google-ads/answer/6095883?hl=en">website call tracking setup guide</a>:
      </p>
      <ul>
        <li>The Google tag must be on every page, plus a phone snippet on pages showing your number.</li>
        <li>
          The number you enter in Google Ads must match the number exactly as it appears on the website, or Google
          can’t find and replace it.
        </li>
        <li>The default snippet tracks one number per page.</li>
      </ul>
      <p>
        If you only measure clicks on a &ldquo;Call now&rdquo; link, remember that Google’s{" "}
        <a href="https://support.google.com/google-ads/answer/6095878">phone-click documentation</a> says this tracks
        clicks only, not whether a call actually happened.
      </p>
      <p>
        Once tracking is fixed, check whether the leads it counts are real — the{" "}
        <Link href="/blog/google-ads-spam-leads">spam leads guide</Link> covers that side.
      </p>

      <ArticleFAQ faqs={faqs} />

      <p>
        For help with campaign setup and measurement, visit the{" "}
        <Link href="/services/digital-marketing">Digital Marketing service page</Link>.
      </p>
    </ArticleLayout>
  );
}
