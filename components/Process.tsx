const steps = [
  {
    title: "Discover Your Brand",
    description:
      "We start by understanding your business, goals, and audience. Whether you already have an identity or we're building one from scratch, this step gives us clarity before any design begins.",
  },
  {
    title: "Creative Direction",
    description:
      "Together, we decide the visual direction by exploring ideas based on your brand needs. This could include refining an existing brand, creating a logo system and other brand assets from scratch, or developing merchandise.",
  },
  {
    title: "Design & Development",
    description:
      "With a clear direction in place, every element from logo systems and brand assets to merchandise is designed to create a cohesive brand that connects with your audience.",
  },
  {
    title: "Delivery & Launch",
    description:
      "You'll receive organized, production-ready files along with clear brand guidelines and everything needed to confidently launch or expand your brand.",
  },
];

export function Process() {
  return (
    <section
      id="logo-systems"
      className="relative overflow-hidden border-y border-purple/10 bg-periwinkle/10 px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="process-heading"
    >
      <div
        className="pointer-events-none absolute -right-32 top-4 size-72 rounded-full bg-lilac/15 blur-[75px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-11">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-purple">THE PROCESS</p>
          <h2
            id="process-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl"
          >
            A clear process from brand discovery to launch.
          </h2>
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
