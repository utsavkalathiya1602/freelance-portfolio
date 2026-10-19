import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "meta-ads-guide-local-business";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "Meta Ads for local business",
    "Facebook ads for small business India",
    "Instagram ads beginner guide",
    "click to WhatsApp ads",
    "Meta Ads Surat",
  ],
});

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want help running Meta Ads?",
        text: "Tell me about your business, your area and what you want more of — messages, enquiries or visits. I’ll suggest a simple Facebook and Instagram plan to start with.",
        whatsappMessage: whatsappMessages.digitalMarketing,
      }}
    >
      <h2>What Meta Ads are</h2>
      <p>
        Meta Ads are paid ads that appear on Facebook, Instagram, Messenger and Meta’s partner network. You create and
        manage them in <strong>Meta Ads Manager</strong>, using a business account connected to your Facebook Page and,
        ideally, your Instagram account.
      </p>
      <p>
        Unlike Google search ads, people aren’t looking for you when they see a Meta ad. Your job is to catch attention in
        a busy feed and give the right people a simple next step.
      </p>

      <h2>Step 1: Choose the right objective</h2>
      <p>
        Every campaign starts with an objective, which tells Meta what result to look for. The current objectives are
        Awareness, Traffic, Engagement, Leads, App promotion and Sales. For most local businesses, two matter most:
      </p>
      <ul>
        <li>
          <strong>Leads</strong> — collect enquiries through an instant form inside Facebook or Instagram, or through
          messages.
        </li>
        <li>
          <strong>Engagement (messages)</strong> — start conversations in WhatsApp, Messenger or Instagram Direct. Many
          customers in India are more comfortable sending a message than filling in a form.
        </li>
      </ul>
      <p>
        Pick the objective that matches what you actually want. If you want messages, don’t choose Awareness just because
        it looks cheaper — Meta will find people who are cheap to show ads to, not people who will message you.
      </p>

      <h2>Step 2: Set up your audience</h2>
      <ul>
        <li>
          <strong>Location:</strong> target the area you can actually serve. For a local business, that may be a radius
          around your shop or a few nearby areas — not the whole country.
        </li>
        <li>
          <strong>Age and interests:</strong> start broad. Meta’s delivery system is good at finding responsive people
          when it has room to learn. Very narrow audiences often cost more and deliver less.
        </li>
        <li>
          <strong>Existing customers:</strong> once you have data, you can build audiences from people who visited your
          website or engaged with your page, and show them a follow-up offer.
        </li>
      </ul>
      <p>
        Some categories — such as housing, employment and credit — fall under Meta’s Special Ad Categories, which limit
        targeting options. Check before you plan your audience if your business is in one of these areas.
      </p>

      <h2>Step 3: Make creatives that work in a feed</h2>
      <ul>
        <li>
          <strong>Show the real thing.</strong> Your actual shop, products, team or completed work usually beats generic
          stock photos.
        </li>
        <li>
          <strong>Make the first second count.</strong> On reels and stories, people decide almost instantly whether to
          keep watching. Lead with the product or the offer.
        </li>
        <li>
          <strong>Use the right shape.</strong> Vertical 9:16 for stories and reels, square or 4:5 for the feed.
        </li>
        <li>
          <strong>Say clearly what to do next.</strong> &ldquo;Message us for prices&rdquo;, &ldquo;Book a free
          visit&rdquo; — one clear action.
        </li>
        <li>
          <strong>Prepare a few versions.</strong> Two or three different images or videos let Meta show the one that
          performs best.
        </li>
      </ul>

      <h2>Step 4: Set a budget and be patient</h2>
      <p>
        Meta campaigns go through a <strong>learning phase</strong> while the system figures out who responds to your ads.
        Meta’s guidance is that an ad set needs roughly 50 results (such as leads) within a week to exit learning. Making
        big changes during this time restarts the process, so avoid editing ads every day.
      </p>
      <p>
        As with Google Ads, ad spend is charged in addition to any management fee, and GST applies to ad spend in India.
        Start with a budget you’re comfortable running for a few weeks, rather than a large amount for a few days.
      </p>

      <h2>Step 5: Track what happens after the click</h2>
      <p>
        Likes and comments are nice, but they don’t pay bills. Install the <strong>Meta Pixel</strong> on your website so
        Meta can see which visitors enquire, and count WhatsApp conversations and form leads separately. The{" "}
        <Link href="/blog/track-website-and-ad-enquiries">enquiry tracking guide</Link> explains this without jargon.
      </p>

      <h2>Common first-month mistakes</h2>
      <ul>
        <li>Boosting random posts instead of running a campaign with a clear objective.</li>
        <li>Targeting the whole state or country when you only serve one city.</li>
        <li>Judging results after two days, or changing everything during the learning phase.</li>
        <li>Sending people to a slow homepage instead of a focused page or a chat.</li>
        <li>Not replying to messages quickly — a lead that waits hours often goes cold.</li>
      </ul>

      <h2>Is Meta right for you?</h2>
      <p>
        Meta Ads suit businesses with something visual to show, an offer to promote, or customers who prefer to message
        before buying. If people already search for your service on Google, compare both options in{" "}
        <Link href="/blog/google-ads-vs-meta-ads-local-business">Google Ads vs Meta Ads</Link>, or see the{" "}
        <Link href="/services/digital-marketing">Digital Marketing service page</Link> for how I can help.
      </p>
    </ArticleLayout>
  );
}
