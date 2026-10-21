"use client";

/**
 * ArticleToC — in-page table of contents.
 * Pass an array of { id, label } items matching the article's heading IDs.
 * Clicking a link scrolls smoothly to the matching section.
 */

type ToCItem = { id: string; label: string };

export function ArticleToC({ items }: { items: ToCItem[] }) {
  return (
    <nav
      aria-label="Table of contents"
      className="my-8 rounded-2xl border border-line bg-stone px-6 py-5"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-muted">
        In this article
      </p>
      <ol className="space-y-2">
        {items.map((item, i) => (
          <li key={item.id} className="flex gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-lime text-[10px] font-bold text-ink">
              {i + 1}
            </span>
            <a
              href={`#${item.id}`}
              className="text-sm font-medium text-ink underline decoration-transparent underline-offset-4 transition-colors hover:decoration-lime"
            >
              {item.label}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
