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

        <ol className="relative mt-12 grid gap-10 md:grid-cols-4 md:gap-6 lg:mt-16">
          <div
            className="pointer-events-none absolute left-4 top-0 h-full w-px bg-gradient-to-b from-periwinkle via-purple/35 to-periwinkle md:left-0 md:right-0 md:top-5 md:h-px md:w-auto md:bg-gradient-to-r"
            aria-hidden="true"
          />
          {steps.map(({ title, description }, index) => (
            <li
              key={title}
              className={`group relative flex gap-5 pl-12 md:block md:pl-0 ${
                index % 2 ? "md:pt-16" : "md:pt-0"
              }`}
            >
              <div className="absolute left-0 top-0 md:relative md:left-auto md:top-auto md:mb-7 md:flex md:justify-center">
                <span className="grid size-9 place-items-center rounded-full border border-lilac/45 bg-purple text-sm font-bold text-paper shadow-[0_12px_30px_rgba(74,59,143,0.18)] transition-colors group-hover:bg-lilac group-hover:text-ink">
                  {index + 1}
                </span>
              </div>

              <div className="max-w-xl md:mx-auto md:max-w-[15rem] md:text-center">
                <span className="mb-3 block h-px w-12 bg-lilac/70 md:mx-auto" aria-hidden="true" />
                <h3 className="text-lg font-bold leading-snug tracking-tight text-ink">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/65">{description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
