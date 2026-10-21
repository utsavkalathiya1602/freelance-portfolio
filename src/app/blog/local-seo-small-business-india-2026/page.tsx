import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleChecklist } from "@/components/blog/ArticleChecklist";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "local-seo-small-business-india-2026";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "local SEO India 2026",
    "Google Business Profile optimization India",
    "local business SEO guide India",
    "local SEO small business",
    "Google Maps SEO India",
    "how to rank on Google Maps India",
    "local SEO Surat Gujarat",
  ],
});

const toc = [
  { id: "quick-answer", label: "Quick answer" },
  { id: "how-local-search-works", label: "How local search and Google Maps work" },
  { id: "gbp-setup", label: "Setting up your Google Business Profile" },
  { id: "gbp-optimize", label: "Optimizing your profile for more visibility" },
  { id: "reviews", label: "Reviews: the most powerful local signal" },
  { id: "website-local-seo", label: "Your website and local SEO" },
  { id: "tracking", label: "Tracking calls, visits and enquiries" },
  { id: "checklist", label: "Local SEO checklist" },
  { id: "faqs", label: "Frequently asked questions" },
];

const localSeoChecklist = [
  {
    id: "gbp-claimed",
    label: "Claim and verify your Google Business Profile",
    detail: "Go to business.google.com and follow the verification steps (postcard, phone, or video).",
  },
  {
    id: "gbp-category",
    label: "Set the most accurate primary business category",
    detail: "This is the most important field in your GBP. Choose the category that best describes your main service.",
  },
  {
    id: "gbp-description",
    label: "Write a complete business description (750 characters)",
    detail: "Include your main services, location, and what makes you different. No keyword stuffing.",
  },
  {
    id: "gbp-hours",
    label: "Set accurate opening hours and keep them updated",
    detail: "Include holiday hours. Incorrect hours harm trust and rankings.",
  },
  {
    id: "gbp-photos",
    label: "Upload at least 10 real photos of your work, premises, or team",
    detail: "Profiles with photos receive significantly more clicks. Use actual photos, not stock images.",
  },
  {
    id: "gbp-products",
    label: "Add your services to the Services tab in your GBP",
    detail: "List each service with a description. This helps Google understand what you offer.",
  },
  {
    id: "nap-consistent",
    label: "Ensure your name, address and phone number are identical everywhere",
    detail: "Check your website, JustDial, Sulekha, LinkedIn, Indiamart, and any other directories.",
  },
  {
    id: "reviews-ask",
    label: "Ask your last 5 satisfied customers for a Google review",
    detail: "Send them a direct link to your GBP review page. One follow-up message is acceptable.",
  },
  {
    id: "reviews-respond",
    label: "Respond to every Google review — positive and negative",
    detail: "Thank positive reviewers. Respond professionally to negative ones without arguing.",
  },
  {
    id: "local-pages",
    label: "Create a dedicated page on your website for each service in each location",
    detail: "E.g., \"Website Development in Surat\" and \"Google Ads Management in Gujarat\" as separate pages.",
  },
  {
    id: "schema",
    label: "Add LocalBusiness schema to your website contact or homepage",
    detail: "Include name, address, phone, URL, opening hours and service area.",
  },
  {
    id: "gbp-posts",
    label: "Publish at least one GBP post per month",
    detail: "Share a recent project, tip, or offer. Active profiles tend to rank better.",
  },
  {
    id: "tracking-setup",
    label: "Enable call tracking and website click tracking in your GBP",
    detail: "Google provides a free forwarding number. Connect your GBP to Google Analytics.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Need a website and local search strategy for your business?",
        text: "Tell me your business type and location. I'll explain what local SEO work will have the most impact and how a well-optimised website supports your Google Maps visibility.",
        whatsappMessage: whatsappMessages.digitalMarketing,
      }}
    >
      <ArticleToC items={toc} />

      <h2 id="quick-answer">Quick answer</h2>
      <p>
        Local SEO is the process of making your business appear when customers nearby search for your
        service on Google — in Google Search results and on Google Maps — without paying for ads. The
        most impactful first step is claiming and fully completing your <strong>Google Business Profile</strong>.
        After that, consistent business information across the web, genuine customer reviews, and relevant
        pages on your website all contribute to higher local rankings.
      </p>

      <h2 id="how-local-search-works">How local search and Google Maps work</h2>
      <p>
        When someone in Surat searches "website developer near me" or "plumber in Varachha," Google
        shows a local results block — often called the "Map Pack" or "Local Pack" — above the regular
        search results. This block shows three businesses with their star rating, address, phone number
        and a link to Google Maps.
      </p>
      <p>
        Google uses three main signals to decide which businesses appear in this local pack:
      </p>
      <ul>
        <li>
          <strong>Relevance</strong> — how well your Google Business Profile and website match what
          the customer searched for.
        </li>
        <li>
          <strong>Distance</strong> — how close your business is to the customer or the location they
          specified.
        </li>
        <li>
          <strong>Prominence</strong> — how well-known and credible your business is online, based on
          reviews, mentions, and the quality of your online presence.
        </li>
      </ul>
      <p>
        You cannot control distance — your location is your location. But you can significantly
        improve your relevance and prominence through the steps below.
      </p>

      <h2 id="gbp-setup">Setting up your Google Business Profile</h2>
      <p>
        Your Google Business Profile (GBP) — previously called Google My Business — is the single
        most important asset for local search. It is free and controls how your business appears on
        Google Maps and in local search results.
      </p>
      <ol>
        <li>
          Go to <strong>business.google.com</strong> and search for your business name.
        </li>
        <li>
          If your business is already listed, claim it. If not, click "Add your business."
        </li>
        <li>
          Complete the verification process. Google typically verifies via a postcard to your business
          address (5–14 days), a phone call, or in some cases a video verification.
        </li>
        <li>
          Once verified, complete every field in your profile — do not leave anything blank.
        </li>
      </ol>
      <p>
        Key fields to complete fully: business name (exactly as it appears everywhere else), primary
        category, address, phone number, website URL, opening hours, and business description.
      </p>

      <h2 id="gbp-optimize">Optimizing your profile for more visibility</h2>
      <h3>Choose the right primary category</h3>
      <p>
        Your primary category is the most important field in your GBP. Google uses it to match your
        business to relevant searches. Choose the most specific category that accurately describes your
        main service. You can add secondary categories for additional services.
      </p>
      <h3>Write a detailed business description</h3>
      <p>
        Your description (up to 750 characters) should clearly explain what you do, who you serve, and
        why customers choose you. Mention your city and key services naturally. Do not stuff keywords
        or include promotional claims like "best" or "cheapest."
      </p>
      <h3>Add real photos regularly</h3>
      <p>
        Profiles with photos receive significantly more clicks than those without. Upload photos of:
        your work or completed projects, your workplace or premises, your team, and any certifications
        or awards. Update photos regularly — new photos signal an active business.
      </p>
      <h3>Use GBP Posts</h3>
      <p>
        GBP Posts are short updates that appear on your profile. Use them to share recent project
        completions, service announcements, local events, or helpful tips. Publishing at least once a
        month signals activity to Google.
      </p>
      <h3>Complete the Services and Products sections</h3>
      <p>
        List each service you offer with a clear description. For example: "Website Design for Small
        Businesses," "Google Ads Management," "Local SEO Setup." These help Google understand the
        breadth of what you offer and match your profile to more relevant searches.
      </p>

      <h2 id="reviews">Reviews: the most powerful local signal</h2>
      <p>
        Google reviews are one of the most powerful signals for local search visibility and the primary
        factor that converts a searcher into a caller. A business with 20 genuine reviews consistently
        outranks businesses with fewer reviews, all else being equal.
      </p>
      <h3>How to get more genuine reviews</h3>
      <ul>
        <li>
          Ask satisfied customers directly, immediately after delivering your service when satisfaction
          is highest.
        </li>
        <li>
          Send a direct review link — go to your GBP, click "Share review form," and send the short
          URL. The fewer steps between the customer and the review form, the higher the completion rate.
        </li>
        <li>
          One polite follow-up is acceptable if you do not hear back. Never offer incentives for
          reviews — this violates Google&apos;s policies and can result in review removal or penalties.
        </li>
      </ul>
      <h3>Responding to reviews</h3>
      <p>
        Respond to every review — positive and negative. Thank positive reviewers personally. For
        negative reviews, acknowledge the concern, explain what happened calmly if appropriate, and
        invite the customer to contact you directly. Never argue publicly. Your response is visible
        to every future customer who reads that review.
      </p>
      <p>
        Never fabricate reviews, pay for fake reviews, or ask employees to post reviews. This risks
        review removal, GBP suspension, and legal risk in India.
      </p>

      <h2 id="website-local-seo">Your website and local SEO</h2>
      <h3>Location and service pages</h3>
      <p>
        Your Google Business Profile and your website work together. A dedicated page on your website
        for each service — mentioning your city and surrounding areas — reinforces your relevance for
        local searches. Example page titles:
      </p>
      <ul>
        <li>"Website Development for Small Businesses in Surat"</li>
        <li>"Google Ads Management for Surat and Gujarat Businesses"</li>
        <li>"Local SEO Services for Indian Small Businesses"</li>
      </ul>
      <p>
        Each page should answer the most common questions a local customer would ask about that
        specific service. Do not create multiple near-identical pages targeting slightly different
        city names — this thin content can hurt rather than help your rankings.
      </p>
      <h3>LocalBusiness schema markup</h3>
      <p>
        Adding LocalBusiness schema to your website tells search engines your business name, address,
        phone number, service area, and operating hours in a structured, machine-readable format. This
        reinforces the information in your GBP and helps AI search systems understand your business.
      </p>
      <h3>NAP consistency</h3>
      <p>
        NAP stands for Name, Address, Phone — the three pieces of business information that must be
        identical everywhere online. Inconsistencies (a different phone format here, an abbreviated
        address there) reduce Google&apos;s confidence in your business data. Audit every directory
        listing and fix discrepancies.
      </p>
      <p>
        Common Indian directories to check: JustDial, Sulekha, Indiamart, Practo (for health
        businesses), LinkedIn, and your industry-specific directories.
      </p>

      <h2 id="tracking">Tracking calls, website visits and enquiries from local SEO</h2>
      <p>
        Without tracking, you cannot tell whether your local SEO efforts are producing enquiries.
        Set up the following:
      </p>
      <ul>
        <li>
          <strong>GBP Insights</strong> — your GBP dashboard shows how many people searched for your
          business, called your phone number, requested directions, and visited your website directly
          from your profile.
        </li>
        <li>
          <strong>Google Analytics 4</strong> — connect your website to GA4 to track which pages local
          visitors land on and what actions they take.
        </li>
        <li>
          <strong>Call tracking</strong> — GBP provides a free forwarding number that tracks calls
          from your profile. Enable it in your GBP settings.
        </li>
        <li>
          <strong>UTM parameters</strong> — add a UTM tag to the website URL in your GBP profile
          (e.g., ?utm_source=gbp) so Google Analytics can identify traffic coming from your GBP.
        </li>
      </ul>
      <p>
        See the{" "}
        <Link href="/blog/track-leads-google-ads-website-whatsapp">complete lead tracking guide</Link>{" "}
        for step-by-step setup instructions.
      </p>

      <h2 id="checklist">Local SEO checklist</h2>
      <p>
        Work through each item to audit your current local SEO setup. Tick off what is already done and
        add outstanding items to your priority list.
      </p>
      <ArticleChecklist
        title="Local SEO Checklist for Indian Businesses"
        items={localSeoChecklist}
      />

      <h2 id="faqs">Frequently asked questions</h2>

      <h3>How long does local SEO take to show results?</h3>
      <p>
        A newly claimed and fully completed GBP can start appearing in local results within a few weeks.
        Significant ranking improvements — moving into the top 3 local pack results — typically take
        3–6 months of consistent effort, depending on competition in your area.
      </p>

      <h3>Can I rank on Google Maps without a website?</h3>
      <p>
        Yes — a Google Business Profile alone can help you appear in Maps results. However, a website
        significantly improves your relevance and prominence signals and gives customers more information
        to make a decision. Businesses with websites consistently outperform those without in local
        search.
      </p>

      <h3>What is the difference between local SEO and regular SEO?</h3>
      <p>
        Regular SEO focuses on ranking in standard organic search results for any location. Local SEO
        specifically targets searches with local intent — people searching "near me" or in a specific
        city — and prioritizes the Google Maps local pack. Local SEO depends heavily on your GBP;
        regular SEO does not.
      </p>

      <h3>Do I need to be physically located in a city to rank there?</h3>
      <p>
        For Google Maps results, you generally need a verified address in the city or a defined service
        area that includes it. For regular organic search results, you can rank for nearby cities with
        well-written location service pages without being physically there.
      </p>

      <h3>How important are citations and directory listings?</h3>
      <p>
        Citations (mentions of your NAP on other websites) were more impactful five years ago. They
        still matter for consistency and credibility but are no longer the primary ranking factor. Focus
        first on GBP completeness and genuine reviews — they have more impact in 2026.
      </p>

      <p>
        For the complete local search picture, see the{" "}
        <Link href="/blog/local-seo-guide-surat-india">
          Local SEO guide for Surat and India
        </Link>{" "}
        and the{" "}
        <Link href="/blog/get-more-customers-google-maps">
          Google Maps customer guide
        </Link>. For local SEO as part of a broader digital marketing strategy, visit the{" "}
        <Link href="/services/digital-marketing">Digital Marketing service page</Link>.
      </p>
    </ArticleLayout>
  );
}
