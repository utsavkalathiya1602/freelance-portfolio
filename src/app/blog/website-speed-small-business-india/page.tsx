import type { Metadata } from "next";
import Link from "next/link";
import { pageMetadata } from "@/lib/metadata";
import { getBlogPost } from "@/data/blog";
import { ArticleLayout } from "@/components/blog/ArticleLayout";
import { ArticleToC } from "@/components/blog/ArticleToC";
import { ArticleFAQ } from "@/components/blog/ArticleFAQ";
import { whatsappMessages } from "@/lib/whatsapp";

const slug = "website-speed-small-business-india";
const post = getBlogPost(slug)!;

export const metadata: Metadata = pageMetadata({
  title: post.title,
  description: post.description,
  path: `/blog/${slug}`,
  article: post,
  keywords: [
    "why is my website slow",
    "why is my website slow on mobile",
    "website slow to load fix",
    "Core Web Vitals small business",
    "improve website loading speed",
  ],
});

const faqs = [
  {
    question: "Does website speed affect Google rankings?",
    answer:
      "It can, but it is one signal among many. Google’s documentation says Core Web Vitals are used by its ranking systems, while also making clear that good scores do not guarantee top rankings — relevant, helpful content matters more. Speed matters most for visitors: a slow page loses people before they read anything.",
  },
  {
    question: "What PageSpeed Insights score should I aim for?",
    answer:
      "The score is a lab estimate, not a ranking factor in itself. A more useful target is to pass Core Web Vitals in the field data section (LCP, INP and CLS all rated “Good”). If there is not enough real-user data yet, use the lab score as a guide to the biggest problems.",
  },
  {
    question: "Why is my website fast on Wi-Fi but slow on mobile data?",
    answer:
      "Mobile phones usually have slower processors and less reliable connections than a laptop on Wi-Fi. Heavy JavaScript, large images and third-party widgets hurt much more on a mid-range phone, which is why PageSpeed Insights tests the mobile version separately.",
  },
  {
    question: "Do I need a CDN for a small business website?",
    answer:
      "Not always. If most of your visitors are in the same region as your server, a CDN helps less. If you serve customers in several countries, or your host is far from your audience, a CDN — many have free plans — is one of the simplest improvements available.",
  },
];

export default function Article() {
  return (
    <ArticleLayout
      post={post}
      cta={{
        heading: "Is your website slow?",
        text: "Share your website URL and I will check it on PageSpeed Insights and give you an honest assessment of what is slowing it down and what can be fixed.",
        whatsappMessage: whatsappMessages.webDevelopment,
      }}
    >
      <h2>Quick answer</h2>
      <p>
        Most slow small business websites have the same few causes: <strong>oversized images</strong>,{" "}
        <strong>too many plugins or third-party scripts</strong>, <strong>no caching</strong>, and{" "}
        <strong>hosting that is slow or far from your visitors</strong>. Test the page in{" "}
        <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer">
          PageSpeed Insights
        </a>
        , look at the mobile results first, and fix the largest problems in that order. Most image and plugin fixes
        need no coding at all.
      </p>

      <ArticleToC
        items={[
          { id: "why-it-matters", label: "Why speed matters" },
          { id: "check", label: "How to check your website speed" },
          { id: "core-web-vitals", label: "Core Web Vitals in plain English" },
          { id: "causes", label: "Six common causes and their fixes" },
          { id: "seo", label: "Speed and SEO: what is and isn’t true" },
          { id: "faq", label: "Frequently asked questions" },
        ]}
      />

      <h2 id="why-it-matters">Why speed matters</h2>
      <p>
        Visitors judge a business in the first few seconds. If a page is blank, jumps around while loading, or
        doesn’t respond when tapped, many people go back to the search results and choose a competitor. This matters
        most on mobile, where most small business websites now receive a large share of their visitors — check your
        own analytics to see the split for your site.
      </p>
      <p>
        The effect is the same whether your customers are in London, Toronto, Sydney or Surat. What changes between
        markets is <em>where</em> your visitors are relative to your server, and what devices and connections they
        typically use.
      </p>

      <h2 id="check">How to check your website speed</h2>
      <ol>
        <li>
          Open{" "}
          <a href="https://pagespeed.web.dev" target="_blank" rel="noopener noreferrer">
            PageSpeed Insights
          </a>{" "}
          and enter the page you want to test — your homepage and your most important service or landing page.
        </li>
        <li>
          Look first at <strong>&ldquo;Discover what your real users are experiencing&rdquo;</strong>. This is field
          data from real Chrome users. If your site doesn’t have enough traffic, this section will be missing.
        </li>
        <li>
          Then look at the <strong>diagnostics</strong> section below the lab score. It lists the specific images,
          scripts and files causing the delay.
        </li>
        <li>Test the mobile tab before the desktop tab.</li>
      </ol>
      <p>
        If your site is verified in Google Search Console, the <strong>Core Web Vitals report</strong> shows which
        groups of pages pass or fail, based on real-user data.
      </p>

      <h2 id="core-web-vitals">Core Web Vitals in plain English</h2>
      <p>
        Google’s{" "}
        <a href="https://web.dev/articles/vitals" target="_blank" rel="noopener noreferrer">
          Core Web Vitals
        </a>{" "}
        are three measurements of how a page feels to use:
      </p>
      <div className="overflow-x-auto rounded-2xl border border-line">
        <table>
          <thead>
            <tr>
              <th scope="col">Metric</th>
              <th scope="col">What it measures</th>
              <th scope="col">&ldquo;Good&rdquo; threshold</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>LCP — Largest Contentful Paint</td>
              <td>How quickly the main content (often the hero image or headline) appears</td>
              <td>2.5 seconds or less</td>
            </tr>
            <tr>
              <td>INP — Interaction to Next Paint</td>
              <td>How quickly the page responds when someone taps or clicks</td>
              <td>200 milliseconds or less</td>
            </tr>
            <tr>
              <td>CLS — Cumulative Layout Shift</td>
              <td>How much the layout jumps around while loading</td>
              <td>0.1 or less</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Large images usually hurt LCP. Heavy JavaScript — chat widgets, page builders, tracking scripts — usually
        hurts INP. Images and ads without reserved space usually cause CLS.
      </p>

      <h2 id="causes">Six common causes and their fixes</h2>

      <h3>1. Images that are too large</h3>
      <p>
        This is the most common cause, and it needs no technical skill to fix. Phone photos are often several
        megabytes each. Uploading them directly means visitors download far more than they need.
      </p>
      <p>
        <strong>The fix:</strong> resize images to the size they are actually displayed, then compress them with a
        free tool like{" "}
        <a href="https://squoosh.app" target="_blank" rel="noopener noreferrer">
          Squoosh
        </a>{" "}
        or{" "}
        <a href="https://tinypng.com" target="_blank" rel="noopener noreferrer">
          TinyPNG
        </a>
        . Use modern formats such as WebP or AVIF where your platform supports them. As a practical rule of thumb,
        most images on a small business site can be well under 200 KB.
      </p>

      <h3>2. Too many plugins or third-party scripts</h3>
      <p>
        WordPress, Shopify apps and website builders make it easy to add features — and each one can add its own
        scripts to every page. Chat widgets, pop-ups, review badges, heatmaps and multiple tracking tags add up.
      </p>
      <p>
        <strong>The fix:</strong> list everything that loads on your homepage and ask whether each item still earns
        its place. Common candidates to remove or replace:
      </p>
      <ul>
        <li>Page builders that load heavy code on pages that don’t use them</li>
        <li>Sliders and carousels — a single strong image usually loads faster and converts as well</li>
        <li>Duplicate tracking tags, or tools nobody has looked at in months</li>
        <li>Outdated plugins that no longer receive updates — they are also a security risk</li>
      </ul>

      <h3>3. No caching</h3>
      <p>
        Without caching, the server rebuilds each page for every visitor, and browsers download the same files again
        and again.
      </p>
      <p>
        <strong>The fix:</strong> on WordPress, use a caching plugin or your host’s built-in caching. On custom-built
        and modern static sites, caching should be part of the setup — ask your developer to confirm it is configured.
      </p>

      <h3>4. Slow hosting, or hosting far from your visitors</h3>
      <p>
        Every request travels from the visitor to your server and back. If your audience is in Australia and your
        server is in the US — or your audience is in India and your server is in Europe — that distance adds delay to
        every request. Overloaded budget shared hosting adds more.
      </p>
      <p>
        <strong>The fix:</strong> choose a host with a data centre near your main audience, or put the site behind a
        Content Delivery Network (CDN) such as Cloudflare, which serves files from locations around the world. If you
        serve customers in several countries, a CDN is usually the simpler option.
      </p>

      <h3>5. Render-blocking scripts and fonts</h3>
      <p>
        Some scripts and font files load before the page can be shown, so visitors stare at a blank screen.
      </p>
      <p>
        <strong>The fix:</strong> this one needs a developer. Non-critical scripts should load after the main content,
        and fonts should be limited to the weights you actually use. PageSpeed Insights lists the specific files under
        its diagnostics.
      </p>

      <h3>6. No lazy loading for images further down the page</h3>
      <p>
        Browsers may try to load every image at once, including ones far below the first screen.
      </p>
      <p>
        <strong>The fix:</strong> add <code>loading=&quot;lazy&quot;</code> to images below the first screen. Most
        modern platforms do this automatically. Don’t lazy-load the main hero image — that delays LCP.
      </p>

      <h2 id="seo">Speed and SEO: what is and isn’t true</h2>
      <p>
        Google’s{" "}
        <a
          href="https://developers.google.com/search/docs/appearance/core-web-vitals"
          target="_blank"
          rel="noopener noreferrer"
        >
          Core Web Vitals documentation
        </a>{" "}
        says these metrics are used by its ranking systems and recommends achieving good scores. It also says that
        good page experience alone does not guarantee high rankings. In practice:
      </p>
      <ul>
        <li>A faster page won’t outrank a much more relevant, helpful page just by being fast.</li>
        <li>Between pages of similar quality, a better experience can help.</li>
        <li>The biggest gain is usually in conversions: more visitors stay long enough to contact you.</li>
      </ul>
      <p>
        If speed is fine but visitors still don’t get in touch, the problem is elsewhere — see{" "}
        <Link href="/blog/website-traffic-no-leads">why a website gets traffic but no leads</Link>.
      </p>

      <ArticleFAQ faqs={faqs} />

      <p>
        If you need a website built with speed as a priority from the start, see the{" "}
        <Link href="/services/web-development">Website Development service page</Link>.
      </p>
    </ArticleLayout>
  );
}
