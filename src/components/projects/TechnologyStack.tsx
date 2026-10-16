type TechnologyStackProps = {
  stack: { label: string; items: string[] }[];
  note?: string;
};

export function TechnologyStack({ stack, note }: TechnologyStackProps) {
  return (
    <div>
      <div className="grid gap-4 md:grid-cols-3">
        {stack.map((group) => (
          <div key={group.label} className="rounded-[var(--radius-card)] border border-line bg-white p-6">
            <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">{group.label}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li key={item} className="rounded-full bg-ivory px-3 py-1.5 text-sm font-medium text-ink">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {note ? <p className="mt-4 text-sm text-muted">{note}</p> : null}
    </div>
  );
}
