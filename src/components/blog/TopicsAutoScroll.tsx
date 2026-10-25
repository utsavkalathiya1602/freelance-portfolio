"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { topicId } from "@/data/blog";

type Topic = { tag: string; count: number };

const VISIBLE = 4;
const HOLD_MS = 2600;   // how long each set is shown
const SLIDE_MS = 400;   // slide animation duration

/**
 * Shows VISIBLE topics at a time and auto-cycles through all topics
 * with a smooth slide-up ticker animation.
 *
 * Auto-scroll pauses when the user hovers over the list so they can
 * read or click a topic without the list moving under them.
 *
 * Top / bottom arrow buttons let the user manually step through topics.
 * Clicking a topic sets the URL hash filter (picked up by BlogList)
 * and smooth-scrolls down to the articles section.
 */
export function TopicsAutoScroll({ topics }: { topics: Topic[] }) {
  const [startIdx, setStartIdx] = useState(0);
  const [sliding, setSliding] = useState(false);
  const [slideDir, setSlideDir] = useState<"up" | "down">("up");
  const pausedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const animatingRef = useRef(false);

  // ── Auto-cycle ──────────────────────────────────────────────────────────
  useEffect(() => {
    if (topics.length <= VISIBLE) return;

    function tick() {
      if (pausedRef.current) return;
      step("up");
    }

    intervalRef.current = setInterval(tick, HOLD_MS + SLIDE_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topics.length]);

  // ── Shared slide logic ───────────────────────────────────────────────────
  function step(dir: "up" | "down") {
    if (animatingRef.current) return;
    animatingRef.current = true;
    setSlideDir(dir);
    setSliding(true);
    setTimeout(() => {
      setStartIdx((prev) =>
        dir === "up"
          ? (prev + 1) % topics.length
          : (prev - 1 + topics.length) % topics.length
      );
      setSliding(false);
      animatingRef.current = false;
    }, SLIDE_MS);
  }

  function handleMouseEnter() { pausedRef.current = true; }
  function handleMouseLeave() { pausedRef.current = false; }

  function handleTopicClick(e: React.MouseEvent<HTMLAnchorElement>, tag: string) {
    e.preventDefault();
    const nextHash = `#topic-${topicId(tag)}`;
    window.history.replaceState(null, "", `${window.location.pathname}${nextHash}`);
    window.dispatchEvent(new HashChangeEvent("hashchange"));
    const articlesSection = document.getElementById("articles");
    if (articlesSection) {
      articlesSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }

  // Render VISIBLE + 1 items so the incoming item is ready below/above the fold
  const items = Array.from({ length: Math.min(VISIBLE + 1, topics.length) }, (_, i) =>
    topics[(startIdx + i) % topics.length]
  );

  const ITEM_H_REM = 2.625;
  const containerH = ITEM_H_REM * VISIBLE;

  const translateY = sliding
    ? slideDir === "up"
      ? `translateY(-${ITEM_H_REM}rem)`
      : `translateY(${ITEM_H_REM}rem)`
    : "translateY(0)";

  const showArrows = topics.length > VISIBLE;

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="flex gap-2"
    >
      {/* ── Scrolling list ── */}
      <div
        style={{ height: `${containerH}rem`, overflow: "hidden" }}
        className="flex-1"
        aria-live="polite"
        aria-atomic="false"
      >
        <ul
          style={{
            margin: 0,
            padding: 0,
            listStyle: "none",
            transform: translateY,
            transition: sliding
              ? `transform ${SLIDE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
              : "none",
          }}
        >
          {items.map((topic, i) => (
            <li
              key={topic.tag}
              style={{ height: `${ITEM_H_REM}rem` }}
              className={`flex items-center ${i < items.length - 1 ? "border-b border-line" : ""}`}
            >
              <a
                href={`#topic-${topicId(topic.tag)}`}
                onClick={(e) => handleTopicClick(e, topic.tag)}
                className="flex w-full items-center justify-between gap-3 text-sm font-medium text-ink transition-colors duration-150 hover:text-muted"
              >
                <span>{topic.tag}</span>
                <span className="shrink-0 rounded-full bg-stone px-2 py-0.5 text-xs tabular-nums">
                  {topic.count}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* ── ▲ ▼ pill control on the right ── */}
      {showArrows && (
        <div
          style={{ height: `${containerH}rem` }}
          className="flex flex-col items-center justify-between py-1"
        >
          <button
            type="button"
            aria-label="Show previous topics"
            onClick={() => step("down")}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-line bg-white text-muted transition-all duration-150 hover:border-ink hover:bg-ink hover:text-white"
          >
            <ChevronUp className="h-3 w-3" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Show next topics"
            onClick={() => step("up")}
            className="flex h-6 w-6 items-center justify-center rounded-full border border-line bg-white text-muted transition-all duration-150 hover:border-ink hover:bg-ink hover:text-white"
          >
            <ChevronDown className="h-3 w-3" aria-hidden="true" />
          </button>
        </div>
      )}
    </div>
  );
}
