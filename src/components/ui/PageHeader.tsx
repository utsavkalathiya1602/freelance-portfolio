import type { ReactNode } from "react";
import { Container } from "./Container";
import { Eyebrow } from "./SectionHeading";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description?: ReactNode;
  /** Content below the description, in the left column (e.g. buttons). */
  children?: ReactNode;
  /** Visual shown on the right on large screens, below the text on smaller ones. */
  aside?: ReactNode;
};

export function PageHeader({ eyebrow, title, description, children, aside }: PageHeaderProps) {
  const text = (
    <div className={aside ? "" : "max-w-3xl"}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1
        id="page-heading"
        className={`font-display text-[2.6rem] font-bold leading-[1.02] tracking-[-0.04em] text-ink text-balance sm:text-6xl ${
          aside ? "lg:text-[4rem]" : "lg:text-[4.4rem]"
        }`}
      >
        {title}
      </h1>
      {description ? <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{description}</p> : null}
      {children}
    </div>
  );

  return (
    <section aria-labelledby="page-heading" className="border-b border-line">
      <Container className="py-14 sm:py-20">
        {aside ? (
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center lg:gap-16">
            {text}
            <div className="relative isolate">
              <div
                aria-hidden="true"
                className="absolute -right-3 -top-3 -z-10 hidden h-40 w-40 rounded-[var(--radius-panel)] bg-peach sm:block"
              />
              {aside}
            </div>
          </div>
        ) : (
          text
        )}
      </Container>
    </section>
  );
}
