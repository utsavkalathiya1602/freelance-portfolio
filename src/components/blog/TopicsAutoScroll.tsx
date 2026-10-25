"use client";

import { useEffect, useRef, useState } from "react";
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
 */
export function TopicsAutoScroll({ topics }: { topics: Topic[] }) {
  const [startIdx, setStartIdx] = useState(0);
  const [sliding, setSliding] = useState(false);
  const pausedRef = useRef(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    // No cycling needed if topics fit in the window
    if (topics.length <= VISIBLE) return;

    function tick() {
      if (pausedRef.current) return;
      setSliding(true);
      setTimeout(() => {
        setStartIdx((prev) => (prev + 1) % topics.length);
        setSliding(false);
      }, SLIDE_MS);
    }

    intervalRef.current = setInterval(tick, HOLD_MS + SLIDE_MS);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [topics.length]);

  function handleMouseEnter() {
    pausedRef.current = true;
  }

  function handleMouseLeave() {
    pausedRef.current = false;
  }

  // Render VISIBLE + 1 items so the "next" item is ready below the fold
  const items = Array.from({ length: Math.min(VISIBLE + 1, topics.length) }, (_, i) =>
    topics[(startIdx + i) % topics.length]
  );

  const ITEM_H_REM = 2.625; // height of each row in rem
  const containerH = ITEM_H_REM * VISIBLE;

  return (
    <div
      style={{ height: `${containerH}rem`, overflow: "hidden" }}
      aria-live="polite"
      aria-atomic="false"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul
        style={{
          transform: sliding ? `translateY(-${ITEM_H_REM}rem)` : "translateY(0)",
          transition: sliding
            ? `transform ${SLIDE_MS}ms cubic-bezier(0.4, 0, 0.2, 1)`
            : "none",
        }}
      >
        {items.map((topic, i) => (
          <li
            key={`${startIdx}-${i}`}
            style={{ height: `${ITEM_H_REM}rem` }}
            className={`flex items-center ${i < items.length - 1 ? "border-b border-line" : ""}`}
          >
            <a
              href={`#topic-${topicId(topic.tag)}`}
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
  );
}
