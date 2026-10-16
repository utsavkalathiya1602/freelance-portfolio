import { Check } from "lucide-react";

type FeatureListProps = {
  items: string[];
  columns?: 1 | 2 | 3;
  tone?: "white" | "ivory";
};

const columnClass = { 1: "", 2: "sm:grid-cols-2", 3: "sm:grid-cols-2 lg:grid-cols-3" } as const;

export function FeatureList({ items, columns = 2, tone = "white" }: FeatureListProps) {
  return (
    <ul className={`grid gap-3 ${columnClass[columns]}`}>
      {items.map((item) => (
        <li
          key={item}
          className={`flex items-start gap-3 rounded-2xl border border-line p-4 text-[0.95rem] leading-relaxed text-ink ${
            tone === "white" ? "bg-white" : "bg-ivory"
          }`}
        >
          <Check aria-hidden="true" className="mt-1 h-4 w-4 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}
