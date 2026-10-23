"use client";

import { useState } from "react";

type ChecklistItem = { id: string; label: string; detail?: string };

/**
 * Interactive checklist widget for blog articles.
 * Items are ticked client-side only (no persistence).
 */
export function ArticleChecklist({
  title,
  items,
}: {
  title: string;
  items: ChecklistItem[];
}) {
  const [checked, setChecked] = useState<Set<string>>(new Set());

  function toggle(id: string) {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  }

  const done = checked.size;
  const total = items.length;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="my-8 rounded-2xl border border-line bg-white p-6 shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-4">
        <h3 className="font-display text-lg font-bold text-ink">{title}</h3>
        <span className="shrink-0 rounded-full bg-lime px-3 py-1 text-xs font-bold text-ink">
          {done}/{total}
        </span>
      </div>

      {/* Progress bar */}
      <div className="mb-5 h-2 w-full overflow-hidden rounded-full bg-stone">
        <div
          className="h-full rounded-full bg-ink"
          style={{ width: `${pct}%` }}
          role="progressbar"
          aria-valuenow={done}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-label={`${done} of ${total} items complete`}
        />
      </div>

      <ul className="space-y-3">
        {items.map((item) => {
          const isChecked = checked.has(item.id);
          return (
            <li key={item.id}>
              <label className="flex cursor-pointer items-start gap-3 group">
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => toggle(item.id)}
                  className="sr-only"
                  aria-describedby={item.detail ? `${item.id}-detail` : undefined}
                />
                <span
                  aria-hidden="true"
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                    isChecked
                      ? "border-ink bg-ink text-white"
                      : "border-line bg-white group-hover:border-ink"
                  }`}
                >
                  {isChecked && (
                    <svg viewBox="0 0 12 10" className="h-3 w-3 fill-current">
                      <polyline
                        points="1,5 4,9 11,1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </span>
                <span className="leading-snug">
                  <span
                    className={`text-sm font-medium leading-snug transition-colors ${
                      isChecked ? "text-muted line-through" : "text-ink"
                    }`}
                  >
                    {item.label}
                  </span>
                  {item.detail && (
                    <span
                      id={`${item.id}-detail`}
                      className="mt-0.5 block text-xs text-muted"
                    >
                      {item.detail}
                    </span>
                  )}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      {done === total && total > 0 && (
        <p className="mt-5 rounded-xl bg-lime px-4 py-3 text-sm font-semibold text-ink">
          ✓ All items complete — great work!
        </p>
      )}
    </div>
  );
}
