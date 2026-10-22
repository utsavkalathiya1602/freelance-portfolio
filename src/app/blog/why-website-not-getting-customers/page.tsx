import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleChecklist } from "@/components/blog/ArticleChecklist";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "why-website-not-getting-customers";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "website not getting leads India",
    "website conversion optimization India",
    "increase website enquiries small business",
    "improve website conversions India",
    "website not converting visitors",
    "website problems no customers",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "problem-1", label: "1. Unclear headline and offer" },
  { id: "problem-2", label: "2. Weak or missing call to action" },
  { id: "problem-3", label: "3. Slow mobile loading" },
  { id: "problem-4", label: "4. Missing trust signals" },
  { id: "problem-5", label: "5. Complicated contact forms" },
  { id: "problem-6", label: "6. Poor mobile layout" },
  { id: "problem-7", label: "7. No pricing transparency" },
  { id: "problem-8", label: "8. Irrelevant traffic" },
  { id: "problem-9", label: "9. Slow or confusing navigation" },
  { id: "problem-10", label: "10. No conversion tracking" },
  { id: "self-audit", label: "30-minute self-audit checklist" },
  { id: "faqs", label: "Frequently asked questions" },
];

const auditChecklist = [
  {
    id: "headline-test",
    label: "Open your homepage on mobile — can you understand the offer in 5 seconds?",
    detail: "Ask someone unfamiliar with your business to look for 10 seconds and explain what you do.",
  },
  {
    id: "cta-visible",
    label: "Is there a visible CTA button above the fold without scrolling?",
    detail: "\"Get a Quote,\" \"WhatsApp Us,\" or \"Book a Free Call\" — not just a menu link.",
  },
  {
    id: "page-speed",
    label: "Check your mobile score in Google PageSpeed Insights",
    detail: "Aim for 70+. Test at pagespeed.web.dev using your mobile URL.",
  },
  {
    id: "form-fields",
    label: "Count the fields in your contact form — are there 5 or fewer?",
    detail: "Name, phone or email, and a message is enough. Remove everything else.",
  },
  {
    id: "trust-signals",
    label: "Does your site show at least one real client review, testimonial, or project example?",
    detail: "A first name, business type, and one sentence of feedback counts.",
  },
  {
    id: "pricing-hint",
    label: "Do you give visitors any price information or guide?",
    detail: "Even a \"starting from\" or a link to a pricing guide reduces hesitation.",
  },
  {
    id: "whatsapp",
    label: "Is there a WhatsApp button on every page?",
    detail: "Most Indian customers prefer WhatsApp over a contact form.",
  },
  {
    id: "navigation",
    label: "Count your main navigation items — are there 5 or fewer?",
    detail: "More than 6 top-level items is usually too many.",
  },
  {
    id: "analytics",
    label: "Is Google Analytics 4 installed and tracking form and WhatsApp clicks?",
    detail: "Without tracking, you cannot measure what is working.",
  },
  {
    id: "traffic-check",
    label: "Check Search Console — are your high-traffic pages service pages or informational pages?",
    detail: "If informational pages dominate, your content may be attracting the wrong visitors.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Get your website reviewed for usability and lead generation",
        text: "Send me your website address and what you want visitors to do. I'll identify the most likely reasons visitors aren't enquiring and what it would take to fix them.",
        whatsappMessage: whatsappMessages.webDevelopment,
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        Getting visitors but no enquiries is a conversion problem, not a traffic problem. The ten most
        common causes are: an unclear offer, a weak or absent call to action, slow mobile loading,
        missing trust signals, complicated contact forms, poor mobile layout, no pricing information,
        irrelevant traffic, confusing navigation, and no conversion tracking. Most can be fixed without
        rebuilding your website from scratch.
      </p>

      <h2 id="problem-1">1. Unclear headline and offer</h2>
      <p>
        A visitor should understand within five seconds what you do, who you do it for, and what they
        should do next. If your homepage opens with your company name and a tagline like &quot;Your trusted
        partner for excellence,&quot; visitors have to guess what you actually sell.
      </p>
      <p>
        <strong>The fix:</strong> Replace vague headlines with specific ones. &quot;Website Design for Small
        Businesses in Surat — Fixed Price, Fast Delivery&quot; is clear. &quot;Digital solutions for a
        changing world&quot; is not. Your headline should name what you do and, ideally, who you do it for.
      </p>

      <h2 id="problem-2">2. Weak or missing call to action</h2>
      <p>
        Every page should tell visitors what to do next. A &quot;Contact Us&quot; link buried in the footer is
        not a call to action. If your page does not have a visible, specific button above the fold —
        &quot;Get a Quote,&quot; &quot;WhatsApp Us,&quot; &quot;Book a Free Call&quot; — many interested visitors will simply leave.
      </p>
      <p>
        <strong>The fix:</strong> Place a clear CTA button above the fold on every key page and repeat
        it at least once at the bottom. Use action language: &quot;Get a Free Quote,&quot; not &quot;Submit.&quot; Make it
        obvious what happens when they click.
      </p>

      <h2 id="problem-3">3. Slow mobile loading</h2>
      <p>
        In India, the majority of web traffic arrives on mobile devices. A page that takes more than
        3 seconds to load loses a significant portion of visitors before they even see your offer.
        Page speed is also a Google ranking factor.
      </p>
      <p>
        <strong>The fix:</strong> Test with Google PageSpeed Insights (pagespeed.web.dev). The most
        common fixes: compress images, use modern formats (WebP), remove unused JavaScript, and choose
        a faster hosting provider. See the{" "}
        <Link href="/blog/website-speed-small-business-india">website speed guide</Link> for detail.
      </p>

      <h2 id="problem-4">4. Missing trust signals</h2>
      <p>
        A visitor who does not know your business needs reasons to trust you before sharing their
        phone number. If your website shows no client names, no reviews, no work examples, and no clear
        information about who runs the business, many visitors will choose a competitor who appears
        more established.
      </p>
      <p>
        <strong>The fix:</strong> Add a small selection of real client names or logos (with permission),
        genuine testimonials with first names and business types, a brief professional biography, and a
        link to your Google reviews profile. Real project photos are better than stock photography.
      </p>

      <h2 id="problem-5">5. Complicated contact forms</h2>
      <p>
        Forms with ten required fields — company name, designation, GST number, project budget range,
        timeline, how did you hear about us — deter most people who would have enquired through a
        simple form. Every additional required field reduces submissions.
      </p>
      <p>
        <strong>The fix:</strong> Reduce your contact form to three to five fields: name, phone or email,
        and a brief message. Collect extra details after the conversation has started. Also offer WhatsApp
        as an alternative — many people in India strongly prefer messaging to filling in forms.
      </p>

      <h2 id="problem-6">6. Poor mobile layout</h2>
      <p>
        A website can load quickly on mobile but still have a poor layout — text too small to read,
        buttons too close to tap accurately, images that overflow the screen, or forms that are
        awkward to complete on a small keyboard.
      </p>
      <p>
        <strong>The fix:</strong> Open your website on an actual mobile phone. Try to read the content,
        tap every button and complete your contact form. Issues that feel minor on a desktop are often
        deal-breakers on mobile. Make sure tap targets are at least 44×44px.
      </p>

      <h2 id="problem-7">7. No pricing transparency</h2>
      <p>
        Many Indian business websites show no price information at all. Visitors who cannot estimate
        whether you are within their budget often leave rather than enquire. They assume the worst.
      </p>
      <p>
        <strong>The fix:</strong> You do not have to publish exact prices. A &quot;starting from ₹15,000&quot;
        or a pricing guide blog post (like the{" "}
        <Link href="/blog/website-development-cost-india-2026">
          website development cost guide
        </Link>
        ) removes the uncertainty and qualifies your enquiries at the same time.
      </p>

      <h2 id="problem-8">8. Irrelevant traffic</h2>
      <p>
        Sometimes the traffic itself is the problem — not its volume, but its relevance. If you run a
        web development business but your most-visited pages are beginner coding tutorials, you are
        attracting learners, not buyers.
      </p>
      <p>
        <strong>The fix:</strong> In Google Analytics or Search Console, check which pages bring the
        most traffic and which search queries they came from. If high-traffic pages are purely
        informational and produce no enquiries, redirect your content effort toward topics your ideal
        customers search for with buying intent.
      </p>

      <h2 id="problem-9">9. Slow or confusing navigation</h2>
      <p>
        If visitors cannot quickly find the page they are looking for, they leave. A navigation menu
        with eight top-level items, unclear labels, or nested dropdowns that are hard to use on mobile
        adds friction at every step.
      </p>
      <p>
        <strong>The fix:</strong> Keep your main navigation to five or fewer items. Label them by what
        the visitor wants: &quot;Services,&quot; &quot;Work,&quot; &quot;Prices,&quot; &quot;Contact&quot; — not what you want to call them.
        Remove dropdown menus if you can. Test on mobile.
      </p>

      <h2 id="problem-10">10. No conversion tracking</h2>
      <p>
        If you do not know how many people called, messaged or submitted your form this month, you
        cannot measure whether any change you make is working. Many businesses assume their website
        &quot;doesn&apos;t work&quot; without having the data to know what is actually happening.
      </p>
      <p>
        <strong>The fix:</strong> Set up Google Analytics 4 with event tracking for form submissions,
        phone clicks and WhatsApp button clicks. Once you can measure enquiries, you can improve them.
        The{" "}
        <Link href="/blog/track-leads-google-ads-website-whatsapp">
          lead tracking guide
        </Link>{" "}
        explains how to do this step by step.
      </p>

      <h2 id="self-audit">30-minute self-audit checklist</h2>
      <p>
        Work through each item below on your own website right now. Tick off what is already in place
        and note what needs attention.
      </p>
      <ArticleChecklist
        title="Website Conversion Self-Audit"
        items={auditChecklist}
      />

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>How many enquiries should 1,000 website visitors produce?</h3>
      <p>
        A realistic conversion rate for a service business website is 1–5%, depending on traffic quality,
        the nature of the service, and how well the website is optimised. If you are converting under
        0.5%, there is usually a clear structural problem. A focused landing page matched to a specific
        ad campaign can reach higher rates.
      </p>

      <h3>Should I use a pop-up to capture leads?</h3>
      <p>
        Pop-ups can increase form submissions but irritate many visitors and hurt the experience on
        mobile. If you use one, trigger it only after a visitor has scrolled most of the way through
        the page, and make it easy to dismiss. A well-placed inline CTA is usually more effective and
        less disruptive.
      </p>

      <h3>Can I improve conversions without rebuilding my website?</h3>
      <p>
        Yes. Many of the most impactful changes — rewriting your headline, adding a WhatsApp button,
        simplifying your form, adding one real testimonial — can be made to an existing website in a
        day. A full rebuild is only necessary if the website&apos;s structure itself is preventing these
        changes.
      </p>

      <h3>Does my website need a live chat widget?</h3>
      <p>
        Live chat helps only if someone is available to respond quickly. An unanswered chat is worse
        than no chat. For most small businesses in India, a prominently placed WhatsApp button achieves
        the same outcome with far less complexity and feels more natural to Indian customers.
      </p>

      <h3>Should I add more pages to get more leads?</h3>
      <p>
        More pages can bring more organic search traffic if those pages target specific queries. But
        more pages alone do not improve conversion — the quality of each page matters more than
        quantity. A single focused service page that is clear, fast and trustworthy will outperform
        ten poorly written pages.
      </p>

      <p>
        For a website built for conversions from the start, see the{" "}
        <Link href="/services/web-development">Website Development service page</Link>. For help
        understanding what your visitors are doing, see the{" "}
        <Link href="/blog/track-website-and-ad-enquiries">enquiry tracking guide</Link>.
      </p>
    </ArticleLayout>
  );
}
