import { SectionHeading } from "./SectionHeading";

const beforeItems = [
  "Sending extra emails regarding color changes, adjusting logo sizes, or making sure the logo stands out on different backgrounds.",
  "Constantly guessing which style suits the merch best, whether the message stands out, and if people will actually want to wear it.",
];

const afterItems = [
  "Save time. One click and your brand guidelines are shared with the team, keeping all marketing materials cohesive.",
  "A message that stands out on merch and reflects the style of your brand around what your audience believes in and wants to wear.",
];

export function BeforeAfter() {
  return (
    <section
      id="brand-guidelines"
      className="bg-paper px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-label="Before and after comparison"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="WHAT IT FEELS LIKE"
          title="Spend Less Time Fixing, More Time Growing"
          align="center"
        />

        <div className="mx-auto mt-9 grid max-w-5xl gap-4 md:grid-cols-2 sm:mt-11">
          <article className="flex h-full flex-col rounded-3xl border border-periwinkle bg-periwinkle/10 p-6 shadow-card sm:p-8">
            <div className="flex items-center gap-3 border-b border-purple/10 pb-5">
              <span
                className="grid size-8 place-items-center rounded-full border border-purple/15 bg-paper text-sm font-bold text-ink/45"
                aria-hidden="true"
              >
                ✕
              </span>
              <h3 className="text-sm font-bold tracking-[0.16em] text-ink/55">BEFORE</h3>
            </div>

            <ul className="mt-6 space-y-6">
              {beforeItems.map((item) => (
                <li key={item} className="flex gap-3.5 text-base leading-relaxed text-ink/65">
                  <span className="mt-0.5 text-sm font-bold text-ink/35" aria-hidden="true">
                    ✕
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="relative flex h-full flex-col overflow-hidden rounded-3xl border border-purple bg-purple p-6 text-paper shadow-lift sm:p-8">
            <div
              className="pointer-events-none absolute -bottom-24 -right-20 size-64 rounded-full bg-lilac/20"
              aria-hidden="true"
            />
            <div className="relative flex items-center gap-3 border-b border-periwinkle/25 pb-5">
              <span
                className="grid size-8 place-items-center rounded-full bg-lilac text-sm font-bold text-ink"
                aria-hidden="true"
              >
                ✓
              </span>
              <h3 className="text-sm font-bold tracking-[0.16em] text-periwinkle">AFTER</h3>
            </div>

            <ul className="relative mt-6 space-y-6">
              {afterItems.map((item) => (
                <li key={item} className="flex gap-3.5 text-base leading-relaxed text-paper/85">
                  <span
                    className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-lilac text-xs font-bold text-ink"
                    aria-hidden="true"
                  >
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
