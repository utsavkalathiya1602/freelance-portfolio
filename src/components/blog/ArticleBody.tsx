import type { ReactNode } from "react";

/**
 * Wrapper for long-form article body content.
 * Applies site-native typography — matches the brand palette and
 * font stack without needing @tailwindcss/typography.
 */
export function ArticleBody({ children }: { children: ReactNode }) {
  return (
    <div className="article-body space-y-6 text-[1.0625rem] leading-[1.75] text-muted">
      {children}
    </div>
  );
}
