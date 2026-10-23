import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleChecklist } from "@/components/blog/ArticleChecklist";
import { ArticleFAQ } from "@/components/blog/ArticleFAQ";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "website-accessibility-checklist-small-business";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "website accessibility checklist",
    "WCAG 2.2 checklist small business",
    "website accessibility checker free",
    "ADA website accessibility small business",
    "European Accessibility Act website",
  ],
});

const checklist = [
  {
    id: "alt-text",
    label: "Every meaningful image has alt text that describes its purpose",
    detail: "Decorative images use empty alt (alt=\"\"). Logos say the business name.",
  },
  {
    id: "contrast",
    label: "Text has enough contrast against its background",
    detail: "WCAG AA: at least 4.5:1 for normal text and 3:1 for large text. Light grey on white usually fails.",
  },
  {
    id: "keyboard",
    label: "You can reach and use every link, button, menu and form field with the Tab key",
    detail: "Including the mobile menu, pop-ups and the cookie banner — and you can close them with the keyboard.",
  },
  {
    id: "focus",
    label: "A visible outline shows which element has keyboard focus",
    detail: "And sticky headers or chat widgets don’t hide the focused element (WCAG 2.2, 2.4.11).",
  },
  {
    id: "headings",
    label: "Each page has one H1 and headings follow a logical order",
    detail: "Screen reader users navigate by headings. Don’t pick heading levels for their size.",
  },
  {
    id: "form-labels",
    label: "Every form field has a visible label, not just placeholder text",
    detail: "Error messages say what went wrong and how to fix it, in text — not only in red.",
  },
  {
    id: "link-text",
    label: "Links and buttons describe where they go",
    detail: "“View pricing” instead of “Click here”. Icon-only buttons need an accessible name.",
  },
  {
    id: "targets",
    label: "Buttons and links are large enough to tap",
    detail: "WCAG 2.2 AA asks for targets of at least 24×24 CSS pixels or enough spacing (2.5.8).",
  },
  {
    id: "zoom",
    label: "The page still works when zoomed to 200% and on a narrow phone screen",
    detail: "No text cut off, no sideways scrolling for normal content.",
  },
  {
    id: "media",
    label: "Videos have captions; nothing auto-plays sound or flashes",
    detail: "Auto-playing carousels can be paused.",
  },
  {
    id: "language",
    label: "The page language is set (e.g. <html lang=\"en\">)",
    detail: "Screen readers use it to pick the right pronunciation.",
  },
  {
    id: "documents",
    label: "Important PDFs (menus, price lists) are also available as accessible web pages",
    detail: "Scanned image PDFs can’t be read by screen readers at all.",
  },
];

const faqs = [
  {
    question: "Is an accessibility overlay or widget enough to make my site compliant?",
    answer:
      "No tool can automatically fix every accessibility problem. Overlays can change colours or text size, but they cannot write meaningful alt text, fix a form that has no labels, or repair a menu that can’t be used with a keyboard. Fix the underlying website instead.",
  },
  {
    question: "Which WCAG version should a small business aim for?",
    answer:
      "WCAG 2.2 Level AA is the current practical target. Many laws still reference WCAG 2.0 or 2.1 AA, but WCAG 2.2 builds on them, so meeting 2.2 AA also covers the earlier versions’ AA requirements.",
  },
  {
    question: "How much does it cost to make a website accessible?",
    answer:
      "It depends on how the site was built. Fixing alt text, labels, contrast and headings on a small site is often a modest job. A site built on an inaccessible theme or page builder may need significant rework. Building accessibility in from the start is far cheaper than retrofitting it.",
  },
  {
    question: "Can automated checkers tell me if my site is accessible?",
    answer:
      "They catch a useful share of issues — missing alt text, low contrast, missing labels — but not all of them. Keyboard testing and a quick screen reader check are still needed, and complex sites benefit from a manual audit.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Want your website checked for accessibility?",
        text: "Send me your website link. I will run through the checklist, list the issues in order of impact, and tell you what can be fixed quickly.",
        whatsappMessage: whatsappMessages.webDevelopment,
      }}
    >
      <h2>Quick answer</h2>
      <p>
        An accessible website can be used by people with visual, hearing, motor or cognitive disabilities — including
        people using screen readers, keyboards instead of a mouse, or zoomed-in text. For a small business, the
        practical target is <strong>WCAG 2.2 Level AA</strong>. Start with the issues that block people most often:
        missing alt text, low colour contrast, forms without labels, and menus or pop-ups that can’t be used with a
        keyboard. Most of these can be fixed without redesigning your site.
      </p>

      <ArticleToC
        items={[
          { id: "why", label: "Why accessibility matters for a small business" },
          { id: "checklist", label: "The 12-point accessibility checklist" },
          { id: "test", label: "How to test your website for free" },
          { id: "laws", label: "What the law says in different countries" },
          { id: "priorities", label: "What to fix first" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <h2 id="why">Why accessibility matters for a small business</h2>
      <ul>
        <li>
          <strong>More customers can use your site.</strong> Someone who can’t complete your enquiry form will
          contact a competitor instead.
        </li>
        <li>
          <strong>It overlaps with good usability.</strong> Clear headings, readable contrast, descriptive buttons
          and simple forms help every visitor — especially on a phone in bright sunlight.
        </li>
        <li>
          <strong>Legal risk is real in some markets.</strong> Rules differ by country and business size, as covered
          below.
        </li>
      </ul>

      <h2 id="checklist">The 12-point accessibility checklist</h2>
      <p>
        This checklist covers the issues that most often affect small business websites. It is based on{" "}
        <a href="https://www.w3.org/TR/WCAG22/">WCAG 2.2</a>, the current version of the W3C’s Web Content
        Accessibility Guidelines, but it is not a complete audit of every success criterion.
      </p>
      <ArticleChecklist title="Small business accessibility checklist" items={checklist} />
      <p>
        WCAG 2.2 added several new requirements, including minimum target sizes and keeping focused elements from
        being hidden behind sticky content. The W3C’s{" "}
        <a href="https://www.w3.org/WAI/standards-guidelines/wcag/new-in-22/">What’s new in WCAG 2.2</a> page
        summarises them.
      </p>

      <h2 id="test">How to test your website for free</h2>
      <ol>
        <li>
          <strong>Keyboard test (5 minutes).</strong> Put the mouse away. Press Tab through your homepage and contact
          page. Can you see where you are at every step? Can you open the menu, submit the form and close any
          pop-up?
        </li>
        <li>
          <strong>Automated check.</strong> Run Lighthouse (built into Chrome DevTools) or a free browser extension
          such as WAVE or axe DevTools. Fix every error it reports, then review its warnings.
        </li>
        <li>
          <strong>Zoom and mobile check.</strong> Zoom the browser to 200% and look for cut-off text or overlapping
          content. Then try the site on a real phone.
        </li>
        <li>
          <strong>Screen reader spot check.</strong> Use the screen reader already on your device — VoiceOver on
          iPhone and Mac, TalkBack on Android, Narrator on Windows — and listen to your homepage and form.
        </li>
      </ol>
      <p>
        Automated tools only catch part of the problem. A page can score 100 in Lighthouse and still be hard to use
        with a keyboard, so the manual checks matter.
      </p>

      <h2 id="laws">What the law says in different countries</h2>
      <p>
        This is a general overview, not legal advice. Rules depend on your country, sector and business size — check
        the official guidance for your situation.
      </p>
      <h3>United States</h3>
      <p>
        The Department of Justice’s{" "}
        <a href="https://www.ada.gov/resources/web-guidance/">guidance on web accessibility and the ADA</a> states
        that businesses open to the public must make their online offerings accessible, and points to WCAG as a
        helpful standard. It also notes there is no detailed technical regulation for these businesses, so they have
        flexibility in how they comply. A separate 2024 rule sets WCAG 2.1 AA for state and local governments.
      </p>
      <h3>European Union</h3>
      <p>
        The European Accessibility Act has applied since 28 June 2025 to a defined set of consumer products and
        services, including e-commerce. Websites are generally assessed against the harmonised standard EN 301 549,
        which incorporates WCAG 2.1 AA. Microenterprises (fewer than 10 staff and turnover or balance sheet not over
        €2 million) have exemptions for services, and enforcement is set by each member state — check your national
        rules.
      </p>
      <h3>United Kingdom</h3>
      <p>
        The Equality Act 2010 requires service providers to make reasonable adjustments for disabled people, which can
        include websites. The specific public sector accessibility regulations apply to public bodies, not private
        businesses.
      </p>
      <h3>Canada (Ontario)</h3>
      <p>
        Under Ontario’s accessibility law, businesses and non-profits with 50 or more employees must make public
        websites meet WCAG 2.0 Level AA (with some exceptions), according to{" "}
        <a href="https://www.ontario.ca/page/how-make-websites-accessible">Ontario’s official guidance</a>. Smaller
        organisations are encouraged, but not required, to follow it.
      </p>
      <h3>India</h3>
      <p>
        The Rights of Persons with Disabilities Act, 2016 includes accessibility obligations, and government websites
        follow the Guidelines for Indian Government Websites. Requirements for private businesses are less clearly
        defined, so WCAG 2.2 AA remains the sensible practical target.
      </p>

      <h2 id="priorities">What to fix first</h2>
      <p>If you can’t fix everything at once, work in this order:</p>
      <ol>
        <li>Anything that stops someone contacting or buying from you — the enquiry form, phone links, checkout.</li>
        <li>Keyboard traps and pop-ups or cookie banners that can’t be closed.</li>
        <li>Missing alt text on images that carry information, and low-contrast text.</li>
        <li>Heading structure, link text and button names.</li>
        <li>PDFs and older content.</li>
      </ol>
      <p>
        Many of these fixes also improve conversions — see{" "}
        <Link href="/blog/why-website-not-getting-customers">why a website isn’t getting customers</Link> — and the
        homepage basics in the{" "}
        <Link href="/blog/business-website-homepage-checklist">homepage checklist</Link>.
      </p>

      <ArticleFAQ faqs={faqs} />

      <p>
        For a website built with accessibility in mind from day one, see the{" "}
        <Link href="/services/web-development">Web Development service page</Link>.
      </p>
    </ArticleLayout>
  );
}
