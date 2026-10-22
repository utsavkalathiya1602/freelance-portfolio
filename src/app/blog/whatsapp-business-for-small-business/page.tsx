import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";

const slug = "whatsapp-business-for-small-business";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "WhatsApp Business small business India",
    "WhatsApp Business setup guide India",
    "get customer enquiries WhatsApp India",
    "WhatsApp for business Surat",
    "WhatsApp Business catalogue India",
  ],
});

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want a WhatsApp button on your website?",
        text: "If your website does not have a WhatsApp contact button, I can add one. Tell me about your business and I will suggest the best way to set it up.",
      }}
    >

              <h2>Why WhatsApp Business is worth setting up properly</h2>
              <p>
                India has over 500 million WhatsApp users. For many small business customers — especially in cities like Surat, Ahmedabad, and Mumbai — WhatsApp is the preferred way to contact a business. It is faster than email and more comfortable than a phone call.
              </p>
              <p>
                WhatsApp Business is a separate free app from Meta (the company behind WhatsApp). It gives you a professional business profile, automated replies, and a product catalogue — all things a regular WhatsApp account does not have.
              </p>

              <h2>Setting up WhatsApp Business: the basics</h2>
              <p>
                Download the WhatsApp Business app from the Google Play Store or Apple App Store. Register with your business phone number — this should be a number dedicated to your business, not your personal number (though you can use a personal number if you only have one).
              </p>
              <p>
                Once set up, go to <strong>Settings → Business Tools → Business Profile</strong> and fill in:
              </p>
              <ul>
                <li>Business name</li>
                <li>Category (e.g., Professional Services, Retail, etc.)</li>
                <li>Description — a short paragraph describing what you do and where</li>
                <li>Address (if you have a physical location)</li>
                <li>Email address</li>
                <li>Website URL</li>
                <li>Opening hours</li>
              </ul>
              <p>
                A complete profile makes your business look professional when customers view your contact details.
              </p>

              <h2>Set up automated messages</h2>
              <p>
                This is one of the most useful features of WhatsApp Business. Go to <strong>Settings → Business Tools</strong> and set up:
              </p>
              <ul>
                <li>
                  <strong>Away message:</strong> Automatically sent when someone messages you outside your business hours. Example: &ldquo;Thank you for your message. I am currently unavailable and will reply within one business day. For urgent enquiries, please call [number].&rdquo;
                </li>
                <li>
                  <strong>Greeting message:</strong> Sent automatically when someone messages you for the first time. Example: &ldquo;Hello! Thank you for reaching out to [Business Name]. Please describe what you are looking for and I will get back to you shortly.&rdquo;
                </li>
                <li>
                  <strong>Quick replies:</strong> Shortcut responses you can use frequently — for example, typing &ldquo;/price&rdquo; could send your standard pricing message. These save time when answering the same questions repeatedly.
                </li>
              </ul>

              <h2>Create a product or service catalogue</h2>
              <p>
                WhatsApp Business lets you create a catalogue of your products or services, each with a name, description, price, and photo. Customers can browse your catalogue directly in WhatsApp without leaving the app.
              </p>
              <p>
                Go to <strong>Settings → Business Tools → Catalogue</strong> to set this up. Even if you do not sell products directly, listing your services with descriptions and approximate prices helps customers understand what you offer before they message you — reducing back-and-forth.
              </p>

              <h2>Use labels to organise your conversations</h2>
              <p>
                WhatsApp Business lets you apply colour-coded labels to conversations — for example, &ldquo;New enquiry,&rdquo; &ldquo;Paid,&rdquo; &ldquo;Pending,&rdquo; or &ldquo;Follow up needed.&rdquo; This is a simple way to manage customer communication without needing separate software.
              </p>
              <p>
                Tap and hold a conversation to assign a label. You can create your own label names based on your workflow.
              </p>

              <h2>Add a WhatsApp chat button to your website</h2>
              <p>
                A floating WhatsApp button on your website makes it effortless for visitors to contact you. Many visitors — particularly those on mobile — prefer tapping a WhatsApp button over filling in a contact form.
              </p>
              <p>
                The button should link to <code>https://wa.me/91XXXXXXXXXX</code> (replacing X with your 10-digit mobile number). You can also pre-fill a message, for example:{" "}
                <code>https://wa.me/91XXXXXXXXXX?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20services.</code>
              </p>
              <p>
                If your website is built on WordPress or a custom platform, ask your developer to add this. It takes less than 30 minutes and can make a noticeable difference to the number of enquiries you receive.
              </p>

              <h2>Share your WhatsApp link — not just your number</h2>
              <p>
                WhatsApp Business gives you a short link (like <code>wa.me/91XXXXXXXXXX</code>) that opens a chat with your business directly. Add this link to:
              </p>
              <ul>
                <li>Your Google Business Profile (in the website or contact field)</li>
                <li>Your Instagram and Facebook bio</li>
                <li>Your email signature</li>
                <li>Business cards or print materials with a QR code</li>
              </ul>

              <h2>What WhatsApp Business cannot replace</h2>
              <p>
                WhatsApp Business is excellent for one-to-one communication with existing or prospective customers. It is not a substitute for a website. A website is how customers find you through Google search; WhatsApp is how they contact you once they have found you.
              </p>
              <p>
                If your business does not yet have a website, see the{" "}
                <Link href="/services/web-development">
                  Website Development service page
                </Link>{" "}
                for information on what a proper business website includes.
              </p>
    </ArticleLayout>
  );
}
