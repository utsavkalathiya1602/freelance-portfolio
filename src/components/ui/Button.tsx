import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "dark" | "outline" | "light";
type Size = "md" | "lg";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold whitespace-nowrap transition-colors duration-150 focus-visible:outline-offset-4";

const variants: Record<Variant, string> = {
  primary: "bg-lime text-ink border border-ink/10 hover:bg-ink hover:text-lime",
  dark: "bg-ink text-white border border-ink hover:bg-lime hover:text-ink",
  outline: "bg-transparent text-ink border border-ink/25 hover:border-ink hover:bg-white",
  light: "bg-white text-ink border border-white hover:bg-lime hover:border-lime",
};

const sizes: Record<Size, string> = {
  md: "h-11 px-5 text-sm",
  lg: "h-13 px-6 text-[0.95rem]",
};

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  /** Opens external URLs in a new tab with safe rel attributes. */
  external?: boolean;
};

export function Button({
  href,
  children,
  variant = "primary",
  size = "md",
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`;
  // Hash/anchor links (#section) must use a native <a> so the browser always
  // scrolls to the target — Next.js <Link> skips navigation when the URL
  // (including the hash) hasn't changed, which means clicking the button a
  // second time after the user has scrolled away does nothing.
  const isAnchorLink = href.startsWith("#");
  const isPlainLink = isAnchorLink || external || /^(mailto:|tel:|https?:)/.test(href);

  if (isPlainLink) {
    return (
      <a
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
