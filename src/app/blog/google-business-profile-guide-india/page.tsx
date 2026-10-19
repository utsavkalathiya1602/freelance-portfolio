import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";

const slug = "google-business-profile-guide-india";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  keywords: [
    "Google Business Profile India",
    "set up Google My Business India",
    "Google Maps listing small business India",
    "local search SEO India",
    "Google Business Profile Surat",
  ],
});

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want help getting found on Google?",
        text: "Tell me about your business and location. I can help you set up and optimise your Google Business Profile and website so local customers can find you.",
      }}
    >

              <h2>What is Google Business Profile and why does it matter?</h2>
              <p>
                Google Business Profile (previously called Google My Business) is a free tool from Google that controls how your business appears in Google Search and Google Maps. When someone searches for &ldquo;interior designer in Surat&rdquo; or &ldquo;accountant near me,&rdquo; the businesses that appear in the map panel at the top of the results are there because they have a verified Google Business Profile.
              </p>
              <p>
                Without a profile, your business is invisible in those local results — no matter how good your website is.
              </p>

              <h2>Step 1: Create your profile</h2>
              <p>
                Go to{" "}
                <a href="https://business.google.com" target="_blank" rel="noopener noreferrer">
                  business.google.com
                </a>{" "}
                and sign in with a Google account associated with your business. Click &ldquo;Add your business to Google&rdquo; and follow the prompts. You will be asked for:
              </p>
              <ul>
                <li>Your business name (exactly as customers know it)</li>
                <li>The category that best describes your business</li>
                <li>Your location — a physical address if customers visit you, or a service area if you travel to them</li>
                <li>Your phone number and website URL</li>
                <li>Your opening hours</li>
              </ul>

              <h2>Step 2: Verify your listing</h2>
              <p>
                Google needs to confirm that you are the legitimate owner of the business. The most common verification method is a postcard sent to your registered address containing a PIN code. This usually arrives within 5 to 14 days in India. Enter the PIN in your Google Business Profile dashboard to complete verification.
              </p>
              <p>
                Some businesses are offered phone or email verification instead, which is faster. If you do not verify your listing, it may not appear in local search results.
              </p>

              <h2>Step 3: Complete every section of your profile</h2>
              <p>
                A complete profile ranks better and converts more visitors into enquiries. Do not leave any section blank. Important sections to fill:
              </p>
              <ul>
                <li><strong>Business description:</strong> Write 2–3 sentences describing what you do, who you serve, and where you are based. Include the city name naturally.</li>
                <li><strong>Services or products:</strong> List each service individually with a name and short description. This helps Google understand what searches to show your listing for.</li>
                <li><strong>Photos:</strong> Add at least 5 photos — your workplace, your work examples, and ideally a photo of yourself or your team. Businesses with photos get significantly more clicks.</li>
                <li><strong>Opening hours:</strong> Keep these accurate, including holiday hours when relevant.</li>
                <li><strong>Q&amp;A section:</strong> You can add your own questions and answers. Add the most common questions your customers ask.</li>
              </ul>

              <h2>Step 4: Get your first reviews</h2>
              <p>
                Reviews are one of the most important ranking factors for local search. More genuine positive reviews mean a higher position in local results and more trust from potential customers.
              </p>
              <p>
                The simplest way to get reviews: after completing a project or service, send your customer the direct review link. You can find this link in your Google Business Profile dashboard under &ldquo;Get more reviews.&rdquo; Copy it and share it via WhatsApp.
              </p>
              <p>
                Never buy reviews or ask friends to leave fake ones. Google detects and removes inauthentic reviews, and repeated violations can result in your listing being suspended.
              </p>

              <h2>Step 5: Post updates regularly</h2>
              <p>
                Google Business Profile allows you to post short updates — similar to social media posts — that appear in your listing. Post updates about:
              </p>
              <ul>
                <li>New services or offers</li>
                <li>Completed projects (with a photo and brief description)</li>
                <li>Seasonal promotions</li>
                <li>Announcements (new location, changed hours, etc.)</li>
              </ul>
              <p>
                Posting once or twice a month signals to Google that your profile is active, which can help your ranking.
              </p>

              <h2>Step 6: Respond to all reviews — including negative ones</h2>
              <p>
                Responding to reviews shows professionalism and helps build trust with potential customers who read them. For positive reviews, a short genuine thank-you is enough. For negative reviews, respond calmly, acknowledge the concern, and explain what you have done or will do. Never argue publicly.
              </p>

              <h2>Common mistakes to avoid</h2>
              <ul>
                <li>Using a name that does not match your actual business name (adding keywords like &ldquo;Best Surat Architect&rdquo; to your name violates Google&rsquo;s guidelines and can lead to suspension)</li>
                <li>Selecting the wrong business category</li>
                <li>Listing a fake address or one that does not match your actual location</li>
                <li>Leaving the profile unverified</li>
                <li>Never adding photos or updates after setup</li>
              </ul>

              <h2>How long before you see results?</h2>
              <p>
                After verification and completing your profile, it usually takes 2 to 6 weeks before your listing starts appearing consistently in local search results. Building reviews and posting updates regularly accelerates this process.
              </p>
              <p>
                If you want additional visibility beyond what the Google Business Profile provides, see the{" "}
                <Link href="/services/digital-marketing">
                  Digital Marketing service page
                </Link>{" "}
                for information on local SEO and Google Ads campaigns.
              </p>
    </ArticleLayout>
  );
}
