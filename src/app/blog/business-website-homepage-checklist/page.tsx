import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "business-website-homepage-checklist";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "business website homepage checklist",
    "what to put on a homepage",
    "small business website content",
    "homepage design tips",
    "what to put on a business website homepage",
  ],
});

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want a homepage that turns visitors into enquiries?",
        text: "Send me your current website or describe your business. I’ll tell you what your homepage is missing and what to change first.",
        whatsappMessage: whatsappMessages.webDevelopment,
      }}
    >
      <h2>Your homepage has one job</h2>
      <p>
        Most visitors decide within a few seconds whether to stay or go back to Google. In that time, your homepage needs
        to answer three questions: <strong>What do you do? Is it for me? What should I do next?</strong> Everything on the
        page should help answer one of those — anything that doesn’t is a distraction.
      </p>

      <h2>The checklist</h2>

      <h3>1. A clear headline that says what you do</h3>
      <p>
        Write what you actually offer and where, in plain words. &ldquo;Dental clinic in Rajkot — implants, braces and
        family dentistry&rdquo; tells visitors more than &ldquo;Welcome to excellence&rdquo;.
      </p>

      <h3>2. One main call to action, visible immediately</h3>
      <p>
        Decide the single most important action — call, WhatsApp, book, request a quote — and make it the most visible
        button on the page. On mobile, it should be on screen without scrolling.
      </p>

      <h3>3. Contact details that are easy to use</h3>
      <p>
        Phone number and WhatsApp as tap-to-call and tap-to-chat links, not plain text. If customers visit you, include
        your address, a map link and opening hours.
      </p>

      <h3>4. Your main services, briefly</h3>
      <p>
        A short list or a few cards, each linking to more detail. Visitors should be able to find &ldquo;their&rdquo;
        service in seconds.
      </p>

      <h3>5. Proof that you’re real and good</h3>
      <p>
        Real photos of your work, your team or your premises; genuine reviews (with permission); examples or case studies;
        how long you’ve been in business. Never use fake reviews or misleading claims — they damage trust the moment
        someone notices.
      </p>

      <h3>6. Who you serve</h3>
      <p>
        Mention the customers and areas you work with — &ldquo;homeowners in North London&rdquo;, &ldquo;restaurants across Ontario&rdquo;,
        &ldquo;small businesses in Surat&rdquo;. It helps visitors recognise themselves, and helps search engines understand where you’re relevant.
      </p>

      <h3>7. Answers to common questions</h3>
      <p>
        A short FAQ handles the doubts that stop people from contacting you: pricing approach, timelines, service area,
        what happens after they enquire.
      </p>

      <h3>8. A second call to action near the bottom</h3>
      <p>
        People who scroll all the way down are interested. Give them a clear next step there too, instead of making them
        scroll back up.
      </p>

      <h2>Technical basics that affect every visitor</h2>
      <ul>
        <li>
          <strong>Mobile first.</strong> For most local businesses, a large share of visitors browse on phones. Check text size, button spacing and
          forms on a real phone.
        </li>
        <li>
          <strong>Speed.</strong> Large uncompressed images are the usual culprit. See{" "}
          <Link href="/blog/website-speed-small-business-india">Why Your Business Website Is Slow</Link>.
        </li>
        <li>
          <strong>A proper page title and description</strong> so your listing in Google search results is clear.
        </li>
        <li>
          <strong>HTTPS</strong> (the padlock in the browser) — most hosting includes it, and browsers warn visitors when
          it’s missing.
        </li>
      </ul>

      <h2>What to leave out</h2>
      <ul>
        <li>Automatic sliders that rotate before people can read them.</li>
        <li>Long welcome paragraphs about your company’s history — move them to the About page.</li>
        <li>Stock photos that could belong to any business.</li>
        <li>Pop-ups that appear the moment someone arrives.</li>
        <li>Five different buttons all asking for different things.</li>
        <li>Outdated offers, broken links and &ldquo;coming soon&rdquo; sections.</li>
      </ul>

      <h2>A quick self-test</h2>
      <p>
        Show your homepage to someone who doesn’t know your business for five seconds, then hide it. Ask them what you
        do, where you are and how to contact you. If they can’t answer all three, your homepage needs work. For a deeper
        look at turning visitors into enquiries, read{" "}
        <Link href="/blog/get-more-website-enquiries">How Can a Small Business Get More Website Enquiries?</Link>
      </p>
      <p>
        To make sure every visitor can use your homepage, run through the{" "}
        <Link href="/blog/website-accessibility-checklist-small-business">website accessibility checklist</Link>.
      </p>
    </ArticleLayout>
  );
}
