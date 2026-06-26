export function Hero() {
  return (
    <section
      id="services"
      className="relative isolate grid scroll-mt-28 place-items-center overflow-hidden bg-paper px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute right-[8%] top-[-5rem] -z-10 size-44 rounded-full border border-border bg-mint/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-[8%] -z-10 size-60 rounded-full border border-border bg-pink/10"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-cream/35"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1040px] text-center">
        <p className="mb-7 inline-flex items-center rounded-full border border-accent bg-mint px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent shadow-card sm:mb-8 sm:text-xs">
          <span
            className="mr-2.5 size-1.5 rounded-full bg-pink"
            aria-hidden="true"
          />
          BRAND IDENTITY &bull; LOGO SYSTEMS &bull; MERCH
        </p>

        <h1
          id="hero-heading"
          className="mx-auto max-w-[880px] font-display text-[clamp(2.45rem,5.6vw,4.65rem)] font-bold leading-[1.06] text-ink"
        >
          Build a brand your audience instantly <span className="text-accent">recognizes</span>.
        </h1>

        <p className="mx-auto mt-7 max-w-[720px] text-[1.04rem] leading-[1.72] text-ink/70 sm:mt-8 sm:text-lg">
          Your logo, brand assets, and merchandise shouldn&apos;t feel like separate pieces. Together,
          they create a cohesive brand identity that builds trust, connects with the right audience,
          and leaves a lasting impression.
        </p>

        <div className="mx-auto mt-8 flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
          <a
            href="#enquire"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-accent bg-accent px-7 py-3 text-sm font-bold text-white shadow-button transition duration-200 hover:-translate-y-0.5 hover:border-pink hover:bg-pink hover:text-white hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
          >
            Get Started
          </a>
          <a
            href="#custom-merch"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-accent bg-transparent px-7 py-3 text-sm font-bold text-accent transition duration-200 hover:-translate-y-0.5 hover:bg-mint hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
          >
            View Brand Projects
          </a>
        </div>
      </div>
    </section>
  );
}
