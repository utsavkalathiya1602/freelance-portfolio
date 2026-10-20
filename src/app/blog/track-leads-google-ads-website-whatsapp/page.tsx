import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "track-leads-google-ads-website-whatsapp";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "track leads from Google Ads and WhatsApp",
    "lead tracking Google Ads India",
    "WhatsApp click tracking Google Analytics",
    "track form submissions Google Analytics",
    "multi-channel lead tracking India",
    "Google Ads conversion tracking setup",
    "attribution tracking small business India",
  ],
});

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want your lead tracking set up properly?",
        text: "I can configure Google Analytics, Google Ads conversion tracking and WhatsApp click measurement on your website — so you can see exactly which marketing produces real enquiries.",
        whatsappMessage: whatsappMessages.digitalMarketing,
      }}
    >
      <h2>Quick answer</h2>
      <p>
        To track every lead from Google Ads, your website and WhatsApp, you need Google Analytics 4 (GA4) to
        measure form submissions and WhatsApp clicks as key events, Google Ads conversion tracking to measure
        ad-driven enquiries, and UTM parameters on all your external links. Connecting these three systems gives
        you a clear picture of which source is producing real enquiries — not just clicks.
      </p>

      <h2>Why clicks and traffic are not enough</h2>
      <p>
        Most small businesses can see how many people visited their website this month. Far fewer can answer:
        how many of those visitors sent an enquiry? Which ad, page or source produced the most enquiries?
        What is the cost per genuine lead from each channel?
      </p>
      <p>
        Without that information, you are optimizing blind. You might be spending heavily on a Google Ads
        campaign that sends clicks but no enquiries, while your Google Maps listing quietly generates most
        of your real customers. Tracking reveals which version of events is true.
      </p>

      <h2>Decide what counts as a lead</h2>
      <p>
        Before installing a single tracking tool, write down the specific actions that mean a visitor wants to
        do business with you. Common lead actions for a small service business:
      </p>
      <ul>
        <li>Submitting a contact or quote form</li>
        <li>Tapping a phone number to call</li>
        <li>Clicking a WhatsApp button</li>
        <li>Completing a booking form</li>
        <li>Requesting directions (for businesses with a physical location)</li>
      </ul>
      <p>
        Avoid counting page views or time on site as leads. These are background signals, not genuine enquiries.
        The cleaner your definition, the more useful your data.
      </p>

      <h2>Set up website form and phone-call tracking</h2>
      <p>
        The most reliable way to track form submissions in Google Analytics 4 is to redirect visitors to a
        dedicated thank-you page after they submit a form (e.g., <code>/thank-you</code>). You then set up a
        key event in GA4 that fires when someone views that thank-you page.
      </p>
      <p>
        If a redirect is not possible, GA4 can also be configured to fire a key event when the form submission
        button is clicked — but this is slightly less accurate, as it may count clicks on forms that were not
        actually completed successfully.
      </p>
      <p>
        For phone call tracking, mark your phone number links as clickable tel: links in your HTML
        (<code>&lt;a href=&quot;tel:+91XXXXXXXXXX&quot;&gt;</code>). GA4 can then track clicks on those links
        as key events. More sophisticated call tracking tools can record and attribute inbound calls to specific
        ads, but for most small businesses, click tracking is sufficient.
      </p>

      <h2>Measure Google Ads conversions</h2>
      <p>
        Google Ads conversion tracking connects your campaign to real enquiries. There are two main approaches:
      </p>
      <ul>
        <li>
          <strong>Import from GA4:</strong> Mark your form submission and call click events as conversions in GA4,
          then import those conversions into your Google Ads account. This is the simplest setup if you already
          have GA4 running.
        </li>
        <li>
          <strong>Google Ads tag directly:</strong> Add a Google Ads conversion tag to your thank-you page or
          configure it to fire on button click. This sends conversion data directly to Google Ads without
          going through GA4.
        </li>
      </ul>
      <p>
        Either approach works. The GA4 import is easier to maintain if you are already using GA4. The direct
        tag gives Google Ads more granular data about conversion timing.
      </p>
      <p>
        Once conversion tracking is active, your Google Ads account can show you cost per conversion
        (cost per lead) for each campaign, ad group and keyword. This is the number that tells you whether
        your ad spend is producing results worth the cost.
      </p>

      <h2>Track WhatsApp clicks and qualified enquiries</h2>
      <p>
        WhatsApp is often the most-used enquiry channel for Indian businesses, but it is also the hardest to
        track automatically because the conversation happens inside WhatsApp, not on your website.
      </p>
      <p>
        <strong>What you can track automatically:</strong> clicks on your WhatsApp button or link. In GA4,
        set up an event that fires when someone clicks your WhatsApp link (<code>wa.me</code> or
        <code>api.whatsapp.com</code>). This tells you how many people clicked to start a conversation.
      </p>
      <p>
        <strong>What requires a manual step:</strong> which of those conversations became genuine enquiries.
        WhatsApp does not send data back to your analytics. The practical solution is to label conversations in
        WhatsApp Business using labels like &ldquo;New Enquiry,&rdquo; &ldquo;Quoted,&rdquo; &ldquo;Won&rdquo; and &ldquo;Lost,&rdquo; and count them
        weekly in a simple spreadsheet.
      </p>
      <p>
        If you run Google Ads and your ad links directly to WhatsApp (rather than your website), you can track
        WhatsApp ad conversions inside Google Ads using the &ldquo;Click to Message&rdquo; conversion type.
      </p>

      <h2>Connect leads to a spreadsheet or CRM</h2>
      <p>
        For most small businesses in India, a simple shared Google Sheet is an adequate lead register. Create
        columns for:
      </p>
      <ul>
        <li>Date</li>
        <li>Lead source (Google Ads, organic Google, WhatsApp, referral, etc.)</li>
        <li>Lead channel (call, form, WhatsApp click)</li>
        <li>Contact name and phone/email</li>
        <li>Service requested</li>
        <li>Status (new, quoted, won, lost)</li>
        <li>Notes</li>
      </ul>
      <p>
        Enter each enquiry the day you receive it. After a month, you have reliable data on where your leads
        come from and what proportion convert to clients — without any specialist software.
      </p>
      <p>
        If you want to automate this, tools like Zapier can connect your website form to a Google Sheet
        automatically. Each form submission creates a new row with the submitted details and a timestamp.
      </p>

      <h2>Create a simple weekly lead report</h2>
      <p>
        Once your tracking is in place, spend 10 minutes each Monday reviewing:
      </p>
      <ol>
        <li>How many enquiries did you receive last week, by channel?</li>
        <li>How many of last week&apos;s enquiries have converted to clients or active quotes?</li>
        <li>What is your cost per lead from Google Ads this week vs last month?</li>
        <li>Are there any keywords or ads spending heavily without producing enquiries?</li>
      </ol>
      <p>
        These four questions, answered weekly, give you enough information to make useful decisions about where
        to invest more and where to cut back.
      </p>

      <h2>Common tracking mistakes and privacy considerations</h2>
      <ul>
        <li>
          <strong>Not testing after setup.</strong> After configuring GA4 and Google Ads tracking, submit your
          own form, click your own call button and tap your WhatsApp link. Check GA4&apos;s real-time report to
          confirm the events appear. A tracking setup that has never been tested may not be working.
        </li>
        <li>
          <strong>Counting the same lead twice.</strong> If a visitor submits your form and also clicks your
          WhatsApp button, that is one enquiry from one person. Your lead register should group by person,
          not by event count.
        </li>
        <li>
          <strong>Ignoring offline enquiries.</strong> Some customers call directly without clicking your
          phone number on the website, or walk in after seeing your Google Maps listing. Ask every new
          customer &ldquo;how did you find us?&rdquo; and add the answer to your spreadsheet.
        </li>
        <li>
          <strong>Sending personal data to analytics.</strong> Never configure tracking to send names, phone
          numbers or email addresses to Google Analytics as event parameters. This is a privacy violation.
          Track actions (form submitted, call clicked) not the personal details entered.
        </li>
        <li>
          <strong>No privacy policy.</strong> If your website uses Google Analytics or Google Ads tags,
          your privacy policy should mention this. Include a brief statement that you use analytics and
          advertising tools and link to Google&apos;s privacy documentation.
        </li>
      </ul>

      <h2>Frequently asked questions</h2>

      <h3>Do I need Google Tag Manager to set up tracking?</h3>
      <p>
        Not necessarily. Google Tag Manager (GTM) makes it easier to add and manage multiple tracking scripts
        without editing your website code every time. For a small business with straightforward tracking needs,
        adding the GA4 tag directly to your website and setting up events in GA4 is entirely sufficient. GTM
        becomes more useful when you need multiple tags or frequent changes.
      </p>

      <h3>How do I know which Google Ad keyword produced a lead?</h3>
      <p>
        With Google Ads conversion tracking active, your campaign reports will show conversions by campaign,
        ad group and keyword. If you also use GA4, you can see the full session path — the keyword that
        brought the visitor, the pages they viewed, and the event they completed.
      </p>

      <h3>Can I track WhatsApp enquiries that come from Instagram or Facebook ads?</h3>
      <p>
        Yes. In Meta Ads Manager, you can set up &ldquo;Messages&rdquo; as a campaign objective and track WhatsApp
        conversation starts as conversions. The Meta Pixel on your website also records if a visitor from a
        Meta ad later clicked your WhatsApp button on the website.
      </p>

      <h3>What if different customers contact me through different channels for the same enquiry?</h3>
      <p>
        This happens regularly — someone fills in a form and then also calls two hours later. In your lead
        register, record this as one enquiry and note both touchpoints. For analytics reporting, it will count
        as two events, which is fine. The lead register is your source of truth for actual business enquiries;
        analytics is your source of truth for marketing performance.
      </p>

      <h3>Is there a free tool to track all my leads in one place?</h3>
      <p>
        Google Sheets with manual entry is the most reliable free option for most small businesses. Free CRM
        tools like HubSpot&apos;s free plan or Zoho CRM free tier offer more structure if you want to track
        multiple stages of a sales conversation. For automated form-to-sheet connections, Zapier&apos;s free plan
        handles up to 100 tasks per month.
      </p>

      <p>
        For a broader view of how to measure the ROI of your advertising, see the{" "}
        <Link href="/blog/google-ads-budget-small-business-india">Google Ads budget guide</Link> or the
        earlier{" "}
        <Link href="/blog/track-website-and-ad-enquiries">enquiry tracking overview</Link>. For help
        setting up measurement on your website and campaigns, visit the{" "}
        <Link href="/services/digital-marketing">Digital Marketing service page</Link>.
      </p>
    </ArticleLayout>
  );
}
