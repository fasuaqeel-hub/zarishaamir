const steps = [
  {
    title: "Tell me about your brand",
    description:
      "Fill in the enquiry form and share who you are, what you're building, and what you need. We'll then hop on a call to discuss the scope and direction of the project.",
  },
  {
    title: "Build the brand foundation",
    description:
      "Based on clear creative direction, logo concepts, colors, typography, and supporting assets are created to make sure everything connects back to the bigger picture of your business.",
  },
  {
    title: "Create merch people connect with",
    description:
      "Once the brand foundation is in place, we develop merch concepts and refine them into designs that feel intentional and aligned with your brand. If you already have a brand, we first understand your identity and audience to make sure the merch resonates.",
  },
  {
    title: "Launch with everything ready to use",
    description:
      "Receive logos, brand assets, guidelines, and merch files prepared for digital use and print, ready for you and your team to use with confidence.",
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="relative overflow-hidden border-y border-purple/10 bg-periwinkle/10 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="process-heading"
    >
      <div
        className="pointer-events-none absolute -right-32 top-4 size-72 rounded-full bg-lilac/15 blur-[75px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-11">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-purple">The process</p>
          <h2
            id="process-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl"
          >
            From Idea to <span className="text-purple">Ready to Launch</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-ink/65">
            A simple path from first enquiry to final files, so you always know what happens next.
          </p>
        </div>

        <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ title, description }, index) => (
            <li
              key={title}
              className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-purple/15 bg-paper p-5 shadow-card transition duration-200 before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:bg-lilac before:opacity-0 before:transition-opacity hover:-translate-y-1 hover:border-lilac hover:shadow-lift hover:before:opacity-100 sm:p-6"
            >
              <span className="grid size-9 shrink-0 place-items-center rounded-full bg-purple text-sm font-bold text-paper transition-colors group-hover:bg-lilac group-hover:text-ink">
                {index + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold leading-snug tracking-tight text-ink">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/65">{description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
