import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "website-traffic-no-leads";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "website traffic but no leads",
    "website not converting visitors",
    "improve website conversion rate India",
    "why website gets no enquiries",
    "website conversion optimization small business",
    "landing page optimization India",
    "improve website enquiries",
  ],
});

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want a review of your website's conversion issues?",
        text: "Tell me your website address and what you want visitors to do. I will identify the most likely reasons visitors are leaving without enquiring and what it would take to fix them.",
        whatsappMessage: whatsappMessages.webDevelopment,
      }}
    >
      <h2>Quick answer</h2>
      <p>
        Traffic without leads is a conversion problem, not a traffic problem. The most common causes are an unclear
        offer, a weak or missing call to action, slow mobile loading, no trust signals, and missing or complicated
        contact options. Fixing the right combination of these typically doubles or triples enquiries from the same
        number of visitors.
      </p>

      <h2>Visitors vs enquiries: understand the difference</h2>
      <p>
        Getting 500 visitors a month from Google sounds healthy. But if zero of them call, message or fill in a
        form, the traffic is not yet working. Visits tell you people found your website. Enquiries tell you people
        wanted to do business with you.
      </p>
      <p>
        The gap between the two is your conversion rate. Even a small improvement — from 1% to 3% — triples your
        leads without spending another rupee on advertising.
      </p>

      <h2>Nine reasons your website is not converting</h2>

      <h3>1. The offer is unclear</h3>
      <p>
        A visitor should understand within five seconds what you do, who you do it for, and what they should do
        next. If your homepage opens with your company name and a tagline like &ldquo;Your trusted partner for
        excellence,&rdquo; visitors have to work to figure out what you actually sell.
      </p>
      <p>
        Fix: Replace vague headlines with specific ones. &ldquo;Website Design for Small Businesses in Surat — Fixed
        Price, Fast Delivery&rdquo; is clear. &ldquo;Digital solutions for a changing world&rdquo; is not.
      </p>

      <h3>2. Weak or missing call to action</h3>
      <p>
        Every page should tell visitors what to do next. A &ldquo;Contact Us&rdquo; link buried in the footer is not a call
        to action. If your page does not have a visible, specific button — &ldquo;Get a Quote,&rdquo; &ldquo;WhatsApp Us,&rdquo;
        &ldquo;Book a Free Call&rdquo; — many visitors who are interested will simply leave.
      </p>
      <p>
        Fix: Place a clear CTA button above the fold (visible without scrolling) and repeat it at least once at
        the bottom of each page. Use action language, not generic labels.
      </p>

      <h3>3. Slow mobile experience</h3>
      <p>
        In India, the majority of web traffic arrives on mobile devices over 4G connections. A page that takes
        more than 3 seconds to load loses a significant portion of visitors before they even see your offer.
        Page speed is also a Google ranking factor.
      </p>
      <p>
        Fix: Test your page speed using Google PageSpeed Insights. Common fixes include compressing images,
        removing unused scripts, and using modern image formats. The{" "}
        <Link href="/blog/website-speed-small-business-india">website speed guide</Link> covers this in more detail.
      </p>

      <h3>4. Missing trust signals and genuine reviews</h3>
      <p>
        A visitor who does not know your business needs reasons to trust you before they will share their phone
        number or enquire about a project. If your website shows no client names, no reviews, no work examples
        and no clear information about who runs the business, many visitors will choose a competitor who appears
        more established.
      </p>
      <p>
        Fix: Add a small selection of client names or logos (with permission), real testimonials with first names
        and business types, and a brief professional biography or About section. If you have Google reviews, link
        to your profile.
      </p>

      <h3>5. Confusing navigation</h3>
      <p>
        If visitors cannot quickly find the page they are looking for, they leave. A navigation menu with eight
        top-level items, unclear labels, or nested dropdowns adds friction.
      </p>
      <p>
        Fix: Keep your main navigation to five or fewer items. Label them by what the visitor wants, not what you
        want to call them. &ldquo;Our Services&rdquo; and &ldquo;What We Do&rdquo; both mean the same thing — pick the clearer one.
      </p>

      <h3>6. Complicated enquiry forms</h3>
      <p>
        Forms with ten required fields — company name, designation, GST number, project budget range, timeline,
        how did you hear about us — deter the majority of people who would have enquired through a simple form.
        The more fields you add, the fewer submissions you receive.
      </p>
      <p>
        Fix: Reduce your contact form to three to five fields maximum: name, phone or email, and a brief message.
        Collect extra details after the conversation has started. Also offer WhatsApp as an alternative — many
        people in India prefer messaging to filling in forms.
      </p>

      <h3>7. Poor mobile layout</h3>
      <p>
        A website can load quickly on mobile but still have a poor layout — text too small to read, buttons too
        close together to tap, images that overflow the screen, or forms that are difficult to complete on a small
        keyboard. Speed and layout are separate problems.
      </p>
      <p>
        Fix: Open your website on an actual mobile phone (not just a browser developer tool). Try to read the
        content, tap every button and fill in your contact form. Issues that feel minor on a desktop are often
        deal-breakers on mobile.
      </p>

      <h3>8. Traffic does not match your target audience</h3>
      <p>
        Sometimes the traffic itself is the problem — not its volume, but its relevance. If you run a website
        development business but your most-visited pages are beginner coding tutorials, you are attracting
        learners, not buyers.
      </p>
      <p>
        Fix: In Google Analytics or Search Console, check which pages and search terms bring the most traffic.
        If high-traffic pages have near-zero enquiries and are not service pages, your content strategy may be
        attracting the wrong visitors. Redirect your content effort toward topics your ideal customers actually
        search for.
      </p>

      <h3>9. Conversion tracking is missing</h3>
      <p>
        If you do not know how many people called, messaged or submitted your form this month, you cannot measure
        whether any change you make is working. Many businesses assume their website &ldquo;doesn&apos;t work&rdquo; without
        having the data to know what is actually happening.
      </p>
      <p>
        Fix: Set up Google Analytics 4 with key event tracking for form submissions, phone clicks and WhatsApp
        button clicks. Once you can measure enquiries, you can improve them. The{" "}
        <Link href="/blog/track-website-and-ad-enquiries">enquiry tracking guide</Link> explains how to do this.
      </p>

      <h2>How to audit your website in 30 minutes</h2>
      <ol>
        <li>Open your homepage on a mobile phone and ask: &ldquo;What does this business do, and what should I do next?&rdquo; Answer honestly.</li>
        <li>Use Google PageSpeed Insights to check your mobile load speed. Aim for a score above 70.</li>
        <li>Try to complete your own contact form from start to finish. Count the fields and the steps.</li>
        <li>Check Google Analytics: which pages have the most traffic? Which have the lowest time on page?</li>
        <li>Search for your own business on Google. Does your Google Business Profile appear? Does it look complete and accurate?</li>
        <li>Ask someone unfamiliar with your business to look at your homepage for 10 seconds and explain back what you do.</li>
      </ol>

      <h2>Which fix should you prioritize first?</h2>
      <p>
        Start with the fix that removes the biggest barrier for most visitors. As a rough priority order:
      </p>
      <ol>
        <li>Unclear offer and missing CTA — these affect every visitor</li>
        <li>Slow mobile speed — affects the majority of Indian visitors</li>
        <li>Complicated forms — directly reduces enquiry volume</li>
        <li>Missing trust signals — affects visitors who are close to enquiring</li>
        <li>Tracking setup — enables you to measure every subsequent improvement</li>
      </ol>

      <h2>Frequently asked questions</h2>

      <h3>How many enquiries should a website convert from 1,000 visitors?</h3>
      <p>
        A realistic conversion rate for a service business website ranges from 1% to 5%, depending on traffic
        quality, the nature of the service, and how well the website is optimized. A well-targeted landing page
        for a specific service with strong ad traffic can reach higher. If you are converting under 0.5%, there
        is usually a clear structural problem.
      </p>

      <h3>Does adding more pages help get more leads?</h3>
      <p>
        More pages can bring more organic search traffic if those pages target specific queries. But more pages
        alone do not improve conversion — the quality of each page matters more than the quantity. A single
        focused service page that is clear, fast and trustworthy will outperform ten poorly written pages.
      </p>

      <h3>Should I use a pop-up to capture leads?</h3>
      <p>
        Pop-ups can increase form submissions, but they irritate many visitors and can harm the user experience —
        especially on mobile. If you use one, trigger it only after a visitor has scrolled most of the way through
        a page, and make sure it is easy to dismiss. A well-placed inline CTA is usually more effective.
      </p>

      <h3>Can I improve conversions without redesigning my whole website?</h3>
      <p>
        Yes. Many of the most impactful changes — rewriting your headline, adding a WhatsApp button, simplifying
        your form, adding one real testimonial — can be made to an existing website in a day. A full redesign is
        only necessary if the website&apos;s structure itself is preventing these changes.
      </p>

      <h3>Does my website need a live chat to convert better?</h3>
      <p>
        Live chat can help if someone is available to respond quickly. An unanswered chat is worse than no chat.
        For most small businesses in India, a clearly placed WhatsApp button achieves the same outcome with less
        complexity and is more natural for Indian customers.
      </p>

      <p>
        For a more complete solution — including a website built for conversions from the start — see the{" "}
        <Link href="/services/web-development">Website Development service page</Link> or the{" "}
        <Link href="/blog/landing-page-vs-website">landing page vs website comparison</Link>.
      </p>
    </ArticleLayout>
  );
}
