import type { ReactNode } from "react";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  /** "narrow" keeps long-form text at a comfortable reading width (~70 characters per line). */
  size?: "default" | "narrow";
};

const widths = { default: "max-w-[1180px]", narrow: "max-w-[760px]" } as const;

export function Container({ children, className = "", size = "default" }: ContainerProps) {
  return <div className={`mx-auto w-full ${widths[size]} px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>;
}
