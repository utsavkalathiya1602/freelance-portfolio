import type { ReactNode } from "react";

export function Tag({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-line bg-white px-3 py-1 text-xs font-medium text-ink ${className}`}
    >
      {children}
    </span>
  );
}
