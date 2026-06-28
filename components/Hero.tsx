export function Hero() {
  return (
    <section
      id="services"
      className="relative isolate grid scroll-mt-28 place-items-center overflow-hidden bg-paper px-4 pb-3.5 pt-12 sm:px-8 sm:pb-6 sm:pt-20 lg:pb-6 lg:pt-24"
      aria-labelledby="hero-heading"
    >
      <div className="mx-auto w-full max-w-[1040px] text-center">
        <p className="mb-4 inline-flex items-center justify-center rounded-full border border-accent bg-mint px-4 py-2 text-center text-[0.68rem] font-bold uppercase tracking-[0.14em] text-accent shadow-card sm:mb-8 sm:text-xs">
          BRAND IDENTITY &bull; LOGO SYSTEMS &bull; MERCH
        </p>

        <h1
          id="hero-heading"
          className="mx-auto max-w-[23rem] font-display text-[2.16rem] font-bold leading-[1.05] text-ink sm:max-w-[880px] sm:text-[clamp(2.45rem,5.6vw,4.65rem)]"
        >
          <span className="block">Build a brand</span>
          <span className="block">your audience instantly</span>
          <span className="block">recognizes</span>
        </h1>

        <p className="mx-auto mt-4 max-w-[25rem] text-pretty text-[0.95rem] leading-[1.56] text-ink/70 sm:mt-8 sm:max-w-[720px] sm:text-lg sm:leading-[1.72]">
          Your logo, brand assets, and merchandise shouldn&apos;t feel like separate pieces. Together,
          they create a cohesive brand identity that builds trust, connects with the right audience,
          and leaves a lasting impression.
        </p>

        <div className="mx-auto mt-5 flex max-w-md flex-col justify-center gap-4 sm:mt-8 sm:max-w-none sm:flex-row sm:gap-5">
          <a
            href="#enquire"
            className="inline-flex min-h-14 cursor-pointer items-center justify-center rounded-xl border border-accent bg-accent px-9 py-3.5 text-base font-bold tracking-[0.015em] text-white shadow-button transition duration-300 hover:border-pink hover:bg-pink hover:text-white hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink sm:px-10"
          >
            Get Started
          </a>
          <a
            href="#custom-merch"
            className="inline-flex min-h-14 items-center justify-center rounded-xl border border-accent bg-transparent px-9 py-3.5 text-base font-bold tracking-[0.015em] text-accent transition duration-200 hover:-translate-y-0.5 hover:bg-mint hover:text-accent hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink sm:px-10"
          >
            View Brand Projects
          </a>
        </div>
      </div>
    </section>
  );
}
