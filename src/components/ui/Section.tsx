import type { ReactNode } from "react";
import { Container } from "./Container";

type Tone = "ivory" | "white" | "stone" | "ink";

const tones: Record<Tone, string> = {
  ivory: "bg-ivory text-ink",
  white: "bg-white text-ink",
  stone: "bg-stone text-ink",
  ink: "bg-ink text-white",
};

type SectionProps = {
  children: ReactNode;
  id?: string;
  tone?: Tone;
  className?: string;
  labelledBy?: string;
};

export function Section({ children, id, tone = "ivory", className = "", labelledBy }: SectionProps) {
  return (
    <section id={id} aria-labelledby={labelledBy} className={`${tones[tone]} py-16 sm:py-20 lg:py-24 ${className}`}>
      <Container>{children}</Container>
    </section>
  );
}
