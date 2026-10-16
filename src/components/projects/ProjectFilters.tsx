"use client";

import { useState, type ReactNode } from "react";

export type FilterGroup = {
  id: string;
  label: string;
  description: string;
  count: number;
  /** Server-rendered content for this category. */
  content: ReactNode;
};

/**
 * Category filter for the Work page.
 * Without JavaScript every group is visible; with JavaScript visitors can narrow the list.
 */
export function ProjectFilters({ groups }: { groups: FilterGroup[] }) {
  const [active, setActive] = useState<string>("all");
  const total = groups.reduce((sum, group) => sum + group.count, 0);
  const options = [{ id: "all", label: "All work", count: total }, ...groups];
  const visible = active === "all" ? groups : groups.filter((group) => group.id === active);

  return (
    <div>
      <div role="group" aria-label="Filter projects by category" className="flex flex-wrap gap-2">
        {options.map((option) => {
          const selected = option.id === active;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={selected}
              onClick={() => setActive(option.id)}
              className={`inline-flex h-11 items-center gap-2 rounded-full border px-5 text-sm font-semibold transition-colors duration-150 ${
                selected ? "border-ink bg-ink text-white" : "border-line bg-white text-ink hover:border-ink"
              }`}
            >
              {option.label}
              <span
                className={`rounded-full px-2 py-0.5 text-xs ${selected ? "bg-lime text-ink" : "bg-stone text-ink"}`}
              >
                {option.count}
              </span>
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        {active === "all"
          ? `Showing all ${total} projects`
          : `Showing ${visible[0]?.count ?? 0} ${visible[0]?.label ?? ""} projects`}
      </p>

      <div className="mt-12 space-y-16 sm:space-y-20">
        {visible.map((group) => (
          <section key={group.id} aria-labelledby={`group-${group.id}`}>
            <div className="mb-8 flex flex-col gap-2 border-b border-line pb-5 sm:flex-row sm:items-end sm:justify-between">
              <h2 id={`group-${group.id}`} className="font-display text-3xl font-bold tracking-[-0.03em] text-ink sm:text-4xl">
                {group.label}
              </h2>
              <p className="max-w-md text-sm text-muted sm:text-right">{group.description}</p>
            </div>
            {group.content}
          </section>
        ))}
      </div>
    </div>
  );
}
