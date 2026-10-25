import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { siteConfig } from "@/config/site";
import { blogPosts, blogTopics, getBlogPost } from "@/data/blog";
import { TopicsAutoScroll } from "@/components/blog/TopicsAutoScroll";

/** Right-hand panel for the blog header. Every number is computed from the articles themselves. */
export function BlogHeroAside({ startHereSlug }: { startHereSlug: string }) {
  const topics = blogTopics();
  const startHere = getBlogPost(startHereSlug) ?? blogPosts[0];
  const totalMinutes = blogPosts.reduce((sum, post) => sum + post.readingMinutes, 0);

  return (
    <div className="grid gap-4">

      {/* ── Row 1: stats + topics ──────────────────────────── */}
      <div className="grid gap-4 sm:grid-cols-[1fr_1.15fr]">

        {/* Stats card */}
        <div className="flex flex-col rounded-[var(--radius-panel)] border border-ink/10 bg-lime p-6">
          <BookOpen aria-hidden="true" className="h-6 w-6" />
          <p className="mt-6 font-display text-5xl font-bold tracking-[-0.04em] text-ink">
            {blogPosts.length}
          </p>
          <p className="text-sm font-medium text-ink/75">practical guides</p>
          <p className="mt-auto pt-6 text-sm text-ink/75">
            About {totalMinutes} minutes of reading across {topics.length} topics
          </p>
        </div>

        {/* Topics card — auto-cycles 4 at a time */}
        <nav
          aria-label="Browse by topic"
          className="rounded-[var(--radius-panel)] border border-line bg-white p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">
              Topics
            </p>
          </div>

          <TopicsAutoScroll topics={topics} />
        </nav>
      </div>

      {/* ── Start here banner ─────────────────────────────── */}
      {startHere ? (
        <Link
          href={`/blog/${startHere.slug}`}
          className="group flex items-center justify-between gap-4 rounded-[var(--radius-card)] bg-ink px-6 py-5 text-white transition-colors duration-150 hover:bg-ink/90"
        >
          <span className="min-w-0">
            <span className="mb-1 inline-block rounded-full bg-lime px-2.5 py-0.5 text-xs font-semibold text-ink">
              Start here
            </span>
            <span className="block font-display text-lg font-bold leading-snug">
              {startHere.title}
            </span>
          </span>
          <ArrowRight aria-hidden="true" className="h-5 w-5 shrink-0 text-lime" />
        </Link>
      ) : null}

      {/* ── Author line ───────────────────────────────────── */}
      <p className="flex items-center gap-3 px-1 text-sm text-muted">
        <span
          aria-hidden="true"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-ink font-display text-xs font-extrabold text-lime"
        >
          {siteConfig.brandMark}
        </span>
        Written by {siteConfig.name}, {siteConfig.title.toLowerCase()} in {siteConfig.shortLocation}.
      </p>
    </div>
  );
}
