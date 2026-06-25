const categoryPills = [
  { label: "Brand Identity", href: "#brand-identity" },
  { label: "Logo Systems", href: "#logo-systems" },
  { label: "Custom Merch", href: "#custom-merch" },
  { label: "Brand Guidelines", href: "#brand-guidelines" },
];

export function Hero() {
  return (
    <section
      className="relative isolate grid place-items-center overflow-hidden bg-paper px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -left-44 top-[10%] -z-20 size-[30rem] rounded-full bg-periwinkle/25 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-44 bottom-[4%] -z-20 size-[30rem] rounded-full bg-lilac/20 blur-[110px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[8%] top-[-5rem] -z-10 size-44 rounded-full border border-purple/10 bg-periwinkle/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-[8%] -z-10 size-60 rounded-full border border-purple/10 bg-lilac/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-periwinkle/5"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1040px] text-center">
        <p className="mb-6 inline-flex items-center rounded-full border border-purple/15 bg-paper/80 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-purple shadow-card backdrop-blur-md sm:text-xs">
          <span
            className="mr-2.5 size-1.5 rounded-full bg-lilac ring-4 ring-lilac/20"
            aria-hidden="true"
          />
          BRAND IDENTITY &bull; LOGO SYSTEMS &bull; MERCH
        </p>

        <nav
          className="mx-auto mb-7 flex max-w-3xl justify-start gap-2 overflow-x-auto pb-1 sm:mb-8 sm:justify-center sm:overflow-visible"
          aria-label="Brand service categories"
        >
          {categoryPills.map((pill) => (
            <a
              key={pill.href}
              href={pill.href}
              className="shrink-0 rounded-full border border-purple/15 bg-paper/70 px-4 py-2 text-xs font-bold text-purple shadow-card backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-lilac hover:bg-lilac/10 hover:text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac sm:text-sm"
            >
              {pill.label}
            </a>
          ))}
        </nav>

        <h1
          id="hero-heading"
          className="mx-auto max-w-[880px] font-display text-[clamp(2.45rem,5.6vw,4.65rem)] font-bold leading-[1.06] text-ink"
        >
          Build a brand your audience instantly recognizes.
        </h1>

        <p className="mx-auto mt-7 max-w-[720px] text-[1.04rem] leading-[1.72] text-ink/70 sm:mt-8 sm:text-lg">
          Your logo, brand assets, and merchandise shouldn&apos;t feel like separate pieces. Together,
          they create a cohesive brand identity that builds trust, connects with the right audience,
          and leaves a lasting impression.
        </p>

        <div className="mx-auto mt-8 flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
          <a
            href="#enquire"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-purple bg-purple px-7 py-3 text-sm font-bold text-paper shadow-button transition duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac"
          >
            Get Started
          </a>
          <a
            href="#custom-merch"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-purple/70 bg-paper/70 px-7 py-3 text-sm font-bold text-purple backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-purple hover:bg-periwinkle/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac"
          >
            View Brand Projects
          </a>
        </div>
      </div>
    </section>
  );
}
