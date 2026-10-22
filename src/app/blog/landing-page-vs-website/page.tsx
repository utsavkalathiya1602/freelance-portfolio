import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "landing-page-vs-website";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "landing page vs website",
    "do I need a landing page",
    "landing page for Google Ads",
    "one page website for small business",
    "landing page developer Surat",
  ],
});

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Not sure whether you need a page or a full site?",
        text: "Tell me what you sell and how customers find you. I’ll suggest the simplest option that does the job — a landing page, a full website, or both.",
        whatsappMessage: whatsappMessages.webDevelopment,
      }}
    >
      <h2>Two different jobs</h2>
      <p>
        A <strong>website</strong> is your business’s home online. It explains who you are, everything you offer, your
        work, your location and how to reach you. People browse it, come back to it and use it to check you’re
        trustworthy.
      </p>
      <p>
        A <strong>landing page</strong> is a single page with a single purpose. Someone arrives — usually from an ad —
        and the page is built to get them to take one action: call, send a message, book, or fill in a form. There’s
        nothing else to click on, because every distraction lowers the chance they’ll act.
      </p>

      <h2>When a landing page is the right choice</h2>
      <ul>
        <li>
          <strong>You’re running ads for one service or offer.</strong> Someone who clicks an ad for &ldquo;kitchen
          renovation&rdquo; should land on a page about kitchen renovation, not a homepage listing ten services.
        </li>
        <li>
          <strong>You’re launching something new.</strong> A new product, event, course or season offer can go live
          quickly on one focused page.
        </li>
        <li>
          <strong>You sell one main thing.</strong> Some businesses genuinely only need one well-made page with clear
          information and a contact button.
        </li>
        <li>
          <strong>You need to start quickly or on a smaller budget.</strong> A single page takes less time to plan and
          build than a multi-page website.
        </li>
      </ul>

      <h2>When you need a full website</h2>
      <ul>
        <li>
          <strong>You offer several services</strong> that each need explaining, with their own details and questions.
        </li>
        <li>
          <strong>You want to be found on Google without paying for every click.</strong> Separate pages for each service
          and location give search engines more to understand and rank. See the{" "}
          <Link href="/blog/local-seo-guide-surat-india">Local SEO guide</Link>.
        </li>
        <li>
          <strong>Customers research before they buy.</strong> They want to see your portfolio, read about your process,
          check reviews and compare options.
        </li>
        <li>
          <strong>You need features</strong> such as booking, a catalogue, a client login or payments.
        </li>
      </ul>

      <h2>A quick comparison</h2>
      <ul>
        <li>
          <strong>Purpose:</strong> landing page — one action from one audience. Website — information and trust for
          everyone.
        </li>
        <li>
          <strong>Traffic:</strong> landing page — mostly from ads or a specific campaign. Website — search, referrals,
          social media and direct visits.
        </li>
        <li>
          <strong>Navigation:</strong> landing page — little or none. Website — full menu and multiple pages.
        </li>
        <li>
          <strong>Lifespan:</strong> landing page — often tied to a campaign. Website — long-term, updated over time.
        </li>
      </ul>

      <h2>What a good landing page includes</h2>
      <ol>
        <li>A headline that matches the ad the visitor just clicked.</li>
        <li>A short explanation of the offer and who it’s for.</li>
        <li>Proof — real photos of your work, reviews or examples.</li>
        <li>Answers to the two or three questions that usually stop people from enquiring.</li>
        <li>One clear action, repeated: a call button, a WhatsApp button or a short form.</li>
        <li>Fast loading on mobile — most ad clicks come from phones.</li>
      </ol>

      <h2>The common combination</h2>
      <p>
        Many businesses end up with both: a full website as their permanent home, plus focused landing pages for each ad
        campaign. The website builds trust and brings in search traffic; the landing pages turn paid clicks into
        enquiries. Sending ad traffic to a general homepage is one of the most common reasons ads seem
        &ldquo;not to work&rdquo;.
      </p>
      <p>
        If you’re starting from nothing and plan to advertise, a single strong landing page is often the sensible first
        step, with the full website added once you know what customers respond to.
      </p>

      <h2>Choosing for your business</h2>
      <p>
        Ask yourself one question: <em>where will visitors come from, and what do I want them to do?</em> If the answer is
        &ldquo;from ads, to call me about one service&rdquo;, start with a landing page. If it’s &ldquo;from all over, to
        learn about my business&rdquo;, you need a website. For help with either, see the{" "}
        <Link href="/services/web-development">Website Development service page</Link>.
      </p>
    </ArticleLayout>
  );
}
