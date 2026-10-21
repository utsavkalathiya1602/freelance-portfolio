"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
import { formatDate, topicId, type BlogPost } from "@/data/blog";

type BlogListProps = {
  posts: BlogPost[];
  topics: { tag: string; count: number }[];
};

const ALL = "all";

/** Threshold for the "New" badge: 30 days in milliseconds. */
const NEW_THRESHOLD_MS = 1000 * 60 * 60 * 24 * 30;

/**
 * Article cards with topic filters. The selected topic is kept in the URL hash
 * (e.g. /blog#topic-seo) so it can be linked to and survives reloads.
 * Without JavaScript, every article is shown.
 */
export function BlogList({ posts, topics }: BlogListProps) {
  const [active, setActive] = useState<string>(ALL);
  const [newSlugs, setNewSlugs] = useState<Set<string>>(new Set());

  useEffect(() => {
    const fromHash = () => {
      const match = window.location.hash.match(/^#topic-(.+)$/);
      const found = match ? topics.find((topic) => topicId(topic.tag) === match[1]) : undefined;
      setActive(found ? found.tag : ALL);
    };
    fromHash();
    window.addEventListener("hashchange", fromHash);
    return () => window.removeEventListener("hashchange", fromHash);
  }, [topics]);

  // Compute "New" badges client-side only (Date.now() is unstable during prerender).
  useEffect(() => {
    const now = Date.now();
    const slugs = new Set<string>();
    for (const post of posts) {
      if (now - new Date(post.publishedAt).getTime() < NEW_THRESHOLD_MS) {
        slugs.add(post.slug);
      }
    }
    setNewSlugs(slugs);
  }, [posts]);

  function select(tag: string) {
    setActive(tag);
    const hash = tag === ALL ? "" : `#topic-${topicId(tag)}`;
    window.history.replaceState(null, "", `${window.location.pathname}${hash}`);
  }

  const visible = active === ALL ? posts : posts.filter((post) => post.tag === active);
  const options = [{ tag: ALL, label: "All articles", count: posts.length }, ...topics.map((t) => ({ ...t, label: t.tag }))];

  return (
    <div>
      <div role="group" aria-label="Filter articles by topic" className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = option.tag === active;
          return (
            <button
              key={option.tag}
              type="button"
              aria-pressed={selected}
              onClick={() => select(option.tag)}
              className={`inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-150 ${
                selected ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-ink"
              }`}
            >
              {option.label}
              <span className={`rounded-full px-2 py-0.5 text-xs ${selected ? "bg-lime text-ink" : "bg-stone text-ink"}`}>
                {option.count}
              </span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {visible.length} {visible.length === 1 ? "article" : "articles"}
        {active === ALL ? "" : ` about ${active}`}
      </p>

      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((post) => (
          <li key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="group flex h-full flex-col rounded-[var(--radius-card)] border border-line bg-white p-7 transition-shadow duration-200 hover:shadow-[0_12px_32px_-16px_rgba(23,23,23,0.2)]"
            >
              <span className="flex items-center gap-2">
                <span className="rounded-full bg-lime px-3 py-1 text-xs font-semibold text-ink">
                  {post.tag}
                </span>
                {newSlugs.has(post.slug) && (
                  <span className="rounded-full bg-ink px-2.5 py-1 text-xs font-bold text-lime">
                    New
                  </span>
                )}
              </span>
              <h2 className="mt-4 font-display text-xl font-bold leading-snug tracking-[-0.02em] text-ink text-balance group-hover:underline group-hover:decoration-lime group-hover:decoration-[3px] group-hover:underline-offset-4">
                {post.title}
              </h2>
              <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-muted">{post.description}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                Read article
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </span>
              <span className="mt-4 flex items-center justify-between gap-3 border-t border-line pt-4 text-xs text-muted">
                <time dateTime={post.publishedAt}>{formatDate(post.publishedAt)}</time>
                <span className="inline-flex items-center gap-1">
                  <Clock aria-hidden="true" className="h-3.5 w-3.5" />
                  {post.readingMinutes} min read
                </span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
