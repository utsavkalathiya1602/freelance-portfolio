/**
 * Updates `readingMinutes` in src/data/blog.ts from each article's actual word count.
 *
 * Run: npm run blog:reading-time   (after adding or editing an article)
 * Reading speed: ~200 words per minute, rounded, minimum 1 minute.
 */
import { readFile, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";

const DATA = "src/data/blog.ts";
const WORDS_PER_MINUTE = 200;

let data = await readFile(DATA, "utf8");
const slugs = [...data.matchAll(/slug: "([^"]+)"/g)].map((m) => m[1]);

for (const slug of slugs) {
  const page = `src/app/blog/${slug}/page.tsx`;
  if (!existsSync(page)) {
    console.warn(`! missing page for "${slug}"`);
    continue;
  }
  const source = await readFile(page, "utf8");
  const body = source.split(/<ArticleLayout[\s\S]*?\n {4}>/)[1]?.split("</ArticleLayout>")[0] ?? "";
  // FAQ and checklist entries (e.g. <ArticleFAQ faqs={faqs} />) live in arrays above the component.
  const preamble = source.split("export default function")[0];
  const faqText = [...preamble.matchAll(/(?:question|answer|label|detail):\s*"((?:[^"\\]|\\.)*)"/g)]
    .map((m) => m[1])
    .join(" ");
  const text = `${body} ${faqText}`
    .replace(/\{" "\}/g, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/&[a-z]+;/g, " ");
  const words = text.split(/\s+/).filter((w) => /\w/.test(w)).length;
  const minutes = Math.max(1, Math.round(words / WORDS_PER_MINUTE));

  const entry = new RegExp(`(slug: "${slug}",[\\s\\S]*?readingMinutes: )\\d+`);
  data = data.replace(entry, `$1${minutes}`);
  console.log(`${slug.padEnd(45)} ${String(words).padStart(5)} words  ${minutes} min`);
}

await writeFile(DATA, data);
console.log(`Updated ${DATA}`);
