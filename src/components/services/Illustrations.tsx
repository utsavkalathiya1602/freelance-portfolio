/** Static wireframe of a website layout — an illustration, not a real project. */
export function WebsiteIllustration() {
  return (
    <figure className="relative">
      <div aria-hidden="true" className="rounded-[var(--radius-panel)] bg-lime p-5 sm:p-8">
        <div className="overflow-hidden rounded-2xl border border-ink/15 bg-white">
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <span className="font-display text-sm font-extrabold tracking-[-0.03em]">Your Brand</span>
            <span className="flex gap-2">
              <span className="h-2 w-8 rounded-full bg-stone" />
              <span className="h-2 w-8 rounded-full bg-stone" />
              <span className="h-2 w-8 rounded-full bg-stone" />
            </span>
          </div>
          <div className="grid gap-4 p-5 sm:grid-cols-[1.3fr_1fr] sm:p-6">
            <div className="space-y-3">
              <span className="block h-3 w-3/4 rounded-full bg-ink" />
              <span className="block h-3 w-1/2 rounded-full bg-ink" />
              <span className="block h-2 w-full rounded-full bg-stone" />
              <span className="block h-2 w-5/6 rounded-full bg-stone" />
              <span className="mt-2 inline-block h-7 w-24 rounded-full bg-lime" />
            </div>
            <div className="aspect-[4/3] rounded-xl bg-peach" />
          </div>
          <div className="grid grid-cols-3 gap-3 border-t border-line p-5 sm:p-6">
            <span className="h-14 rounded-lg bg-ivory" />
            <span className="h-14 rounded-lg bg-lavender" />
            <span className="h-14 rounded-lg bg-ivory" />
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs text-muted">Illustration of a typical business website layout</figcaption>
    </figure>
  );
}
