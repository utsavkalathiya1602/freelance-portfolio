import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "track-website-and-ad-enquiries";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "track website enquiries",
    "Google Ads conversion tracking",
    "Meta Pixel setup small business",
    "GA4 key events",
    "UTM parameters guide",
  ],
});

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want tracking set up properly?",
        text: "I can set up Google Analytics, Google Ads conversion tracking and the Meta Pixel on your website, so you can see which marketing brings real enquiries.",
        whatsappMessage: whatsappMessages.digitalMarketing,
      }}
    >
      <h2>Why tracking comes first</h2>
      <p>
        Without tracking, you can see what you spent on ads but not what you got back. Clicks, likes and impressions are
        easy to measure — but they don’t tell you whether anyone actually called, messaged or filled in a form. Tracking
        connects your marketing to real enquiries, so you can keep what works and stop paying for what doesn’t.
      </p>
      <p>
        It’s also how the ad platforms improve. Google Ads and Meta both use your conversion data to find more people
        likely to enquire. Without it, they optimise for clicks instead.
      </p>

      <h2>Decide what counts as an enquiry</h2>
      <p>Before installing anything, list the actions that mean someone wants to do business with you:</p>
      <ul>
        <li>Submitting the contact or quote form</li>
        <li>Tapping the phone number to call</li>
        <li>Tapping the WhatsApp button</li>
        <li>Clicking &ldquo;Get directions&rdquo; (for businesses customers visit)</li>
        <li>Completing a booking or purchase</li>
      </ul>
      <p>
        Keep the list short. Page views and time on site are useful background information, but they aren’t enquiries.
      </p>

      <h2>The four tools most small businesses need</h2>

      <h3>1. Google Analytics 4 (GA4)</h3>
      <p>
        Google’s free analytics tool shows where visitors come from and what they do on your site. Mark your important
        actions — form submissions, call clicks, WhatsApp clicks — as <strong>key events</strong> (GA4’s name for what
        used to be called conversions). You can then see which sources bring enquiries, not just visitors.
      </p>

      <h3>2. Google Ads conversion tracking</h3>
      <p>
        If you run Google Ads, set up conversion actions so the account knows which clicks led to enquiries. You can create
        them in Google Ads using the Google tag on your website, or import your key events from GA4. Calls made directly
        from your ads can be tracked as conversions too.
      </p>

      <h3>3. Meta Pixel (and Conversions API)</h3>
      <p>
        For Facebook and Instagram ads, the <strong>Meta Pixel</strong> is a small piece of code that tells Meta when a
        visitor from an ad takes an action on your site, such as submitting a lead form. Meta also offers the{" "}
        <strong>Conversions API</strong>, which sends the same events from your server and helps when browsers block
        tracking. If your ads send people to an instant form or a WhatsApp chat instead of your website, Meta records those
        results inside Ads Manager.
      </p>

      <h3>4. UTM parameters on your links</h3>
      <p>
        UTM parameters are short tags added to the end of a link — for example{" "}
        <code>?utm_source=instagram&amp;utm_medium=bio&amp;utm_campaign=diwali_offer</code>. When someone clicks that
        link, Google Analytics records exactly where they came from. Use them on links in social media bios, WhatsApp
        broadcasts, emails and printed QR codes, so every source shows up separately.
      </p>

      <h2>Don’t forget offline enquiries</h2>
      <p>
        Many customers in India call directly or walk in after seeing an ad. Software can’t always see that, so add a
        simple habit: ask every new customer &ldquo;how did you hear about us?&rdquo; and note the answer in a spreadsheet
        or your WhatsApp Business labels. Combined with your online tracking, this gives a much more honest picture.
      </p>

      <h2>Privacy and accuracy</h2>
      <ul>
        <li>Mention analytics and advertising cookies in your website’s privacy policy.</li>
        <li>Never send personal details such as phone numbers or names to analytics tools in plain form.</li>
        <li>
          Expect some gaps — ad blockers, privacy settings and people switching devices mean no tracking is 100% complete.
          Look at trends rather than exact counts.
        </li>
      </ul>

      <h2>Check it actually works</h2>
      <ol>
        <li>Submit your own form, tap your call and WhatsApp buttons from a phone.</li>
        <li>Check that each action appears in GA4’s real-time report.</li>
        <li>In Google Ads and Meta Events Manager, confirm the conversions show as active and recording.</li>
        <li>Recheck after any website change — a redesigned form can silently break tracking.</li>
      </ol>

      <h2>What to look at each month</h2>
      <p>
        Once tracking works, the most useful number is <strong>cost per enquiry</strong> for each channel: what you spent
        on Google Ads, Meta Ads or anything else, divided by the enquiries it produced. Compare that with what an enquiry is
        worth to you — the{" "}
        <Link href="/blog/google-ads-budget-small-business-india">Google Ads budget guide</Link> shows how to work that out.
        For help setting up tracking, see the{" "}
        <Link href="/services/digital-marketing">Digital Marketing service page</Link>.
      </p>
    </ArticleLayout>
  );
}
