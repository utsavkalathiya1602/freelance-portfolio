import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  /** Use "h1" for page heroes; sections default to "h2". */
  as?: "h1" | "h2";
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
  /** id for the heading, so sections can reference it with aria-labelledby. */
  id?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  as: Tag = "h2",
  align = "left",
  tone = "light",
  className = "",
  id,
}: SectionHeadingProps) {
  const centered = align === "center";
  const titleSize =
    Tag === "h1"
      ? "text-[2.4rem] leading-[1.04] sm:text-5xl lg:text-[4.1rem]"
      : "text-[2rem] leading-[1.08] sm:text-[2.6rem] lg:text-5xl";

  return (
    <div className={`${centered ? "mx-auto text-center" : ""} max-w-3xl ${className}`}>
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <Tag
        id={id}
        className={`font-display font-bold tracking-[-0.03em] text-balance ${titleSize} ${
          tone === "dark" ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </Tag>
      {description ? (
        <p
          className={`mt-5 max-w-2xl text-base leading-relaxed sm:text-lg ${centered ? "mx-auto" : ""} ${
            tone === "dark" ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function Eyebrow({ children, tone = "light" }: { children: ReactNode; tone?: "light" | "dark" }) {
  return (
    <p
      className={`mb-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.16em] ${
        tone === "dark" ? "text-lime" : "text-muted"
      }`}
    >
      <span aria-hidden="true" className={`h-2 w-2 rounded-full ${tone === "dark" ? "bg-lime" : "bg-ink"}`} />
      {children}
    </p>
  );
}
