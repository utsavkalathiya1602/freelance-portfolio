import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "google-ads-vs-meta-ads-local-business";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "Google Ads vs Meta Ads",
    "Google Ads or Facebook ads for local business",
    "Instagram ads vs Google Ads India",
    "best ads for small business Surat",
    "local business advertising India",
  ],
});

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Not sure which platform to start with?",
        text: "Tell me what you sell, where your customers are and your budget. I’ll recommend whether to start with Google Ads, Meta Ads or neither — honestly.",
        whatsappMessage: whatsappMessages.digitalMarketing,
      }}
    >
      <h2>The one difference that matters most</h2>
      <p>
        Google Ads and Meta Ads (Facebook and Instagram) are both paid advertising, but they reach people at completely
        different moments.
      </p>
      <ul>
        <li>
          <strong>Google Ads reaches people who are searching.</strong> Someone types &ldquo;AC repair near me&rdquo; or
          &ldquo;dentist in Adajan&rdquo; — they already know what they want, and your ad appears at that moment.
        </li>
        <li>
          <strong>Meta Ads reaches people who are scrolling.</strong> They are not looking for you right now. Your ad
          appears in their Facebook or Instagram feed, stories or reels because they match the audience you chose.
        </li>
      </ul>
      <p>
        Google captures demand that already exists. Meta creates interest that did not exist a minute ago. Almost every
        other difference follows from this.
      </p>

      <h2>When Google Ads is usually the better first step</h2>
      <ul>
        <li>
          <strong>People actively search for your service.</strong> Repairs, clinics, coaching, legal and accounting
          services, local stores, home services — if customers type it into Google, search ads can reach them.
        </li>
        <li>
          <strong>The need is urgent or high-intent.</strong> A person searching &ldquo;emergency plumber&rdquo; wants to
          call someone now, not browse photos.
        </li>
        <li>
          <strong>Your offer is easy to describe in words.</strong> Search ads are text-first. A clear service, location
          and reason to choose you is enough.
        </li>
      </ul>

      <h2>When Meta Ads is usually the better first step</h2>
      <ul>
        <li>
          <strong>Your product is visual.</strong> Clothing, jewellery, food, interiors, events and photography sell
          through images and video, which is exactly what Facebook and Instagram are built for.
        </li>
        <li>
          <strong>People don’t search for you yet.</strong> A new café, a new product or a seasonal offer has little
          search demand. Meta lets you put it in front of the right local audience anyway.
        </li>
        <li>
          <strong>You want messages, not just website visits.</strong> Meta can send people straight into a WhatsApp,
          Messenger or Instagram chat with your business, which suits many Indian customers who prefer to message first.
        </li>
      </ul>

      <h2>A side-by-side comparison</h2>
      <ul>
        <li>
          <strong>How people find you:</strong> Google — by searching. Meta — by being shown your ad while browsing.
        </li>
        <li>
          <strong>Targeting:</strong> Google — keywords and location. Meta — location, age, interests and behaviour.
        </li>
        <li>
          <strong>Ad format:</strong> Google Search — mostly text. Meta — images, video, carousels and reels.
        </li>
        <li>
          <strong>Typical goal:</strong> Google — calls, enquiries and visits from people ready to buy. Meta — awareness,
          messages, leads and repeat visits.
        </li>
        <li>
          <strong>Where people land:</strong> Google — your website, landing page or a call. Meta — your website, an
          instant lead form or a chat.
        </li>
      </ul>

      <h2>What about cost?</h2>
      <p>
        Neither platform has a fixed price. Both run on auctions, so what you pay depends on your industry, your area,
        how many businesses compete for the same customers, and how relevant your ads are. A click on Google often costs
        more than a click on Meta, but a Google click usually comes from someone with a clearer intent to buy. Comparing
        cost per click alone is misleading — compare cost per <em>enquiry</em> and, eventually, cost per customer.
      </p>
      <p>
        If you want a simple way to set a starting budget, read{" "}
        <Link href="/blog/google-ads-budget-small-business-india">
          How Much Should a Small Business Spend on Google Ads in India?
        </Link>
      </p>

      <h2>Can you use both?</h2>
      <p>
        Yes, and many local businesses eventually do. A common pattern is to start with the platform that fits best,
        learn what brings real enquiries, and only then add the second. Running both from day one on a small budget
        usually spreads the money too thin for either to work properly.
      </p>
      <p>
        The two also support each other. Someone who sees your Instagram ad today may search for your business name on
        Google next week — which is also why a complete{" "}
        <Link href="/blog/google-business-profile-guide-india">Google Business Profile</Link> matters, whichever ads you
        run.
      </p>

      <h2>A quick way to decide</h2>
      <ol>
        <li>Ask five recent customers how they found you. If most searched on Google, start with Google Ads.</li>
        <li>
          Type your service and city into Google. If you see other businesses’ ads, there is search demand worth
          competing for.
        </li>
        <li>
          If your product photographs well and customers rarely search for it by name, start with Meta Ads.
        </li>
        <li>
          Whichever you choose, set up{" "}
          <Link href="/blog/track-website-and-ad-enquiries">enquiry tracking</Link> first, so you can judge results on
          real enquiries rather than likes or clicks.
        </li>
      </ol>
      <p>
        If you’d like help choosing and setting up the right channel, see the{" "}
        <Link href="/services/digital-marketing">Digital Marketing service page</Link>.
      </p>
    </ArticleLayout>
  );
}
