const trustPoints = [
  "Clarity first, no guesswork",
  "Free 15-minute discovery call",
  "Open to paid test projects",
];

export function Hero() {
  return (
    <section
      className="relative isolate grid place-items-center overflow-hidden bg-paper px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-24 lg:pb-24 lg:pt-28"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute -left-40 top-[12%] -z-20 size-[30rem] rounded-full bg-periwinkle/40 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -right-40 bottom-[2%] -z-20 size-[30rem] rounded-full bg-lilac/35 blur-[90px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-[8%] top-[-5rem] -z-10 size-44 rounded-full border border-purple/15 bg-periwinkle/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-32 left-[8%] -z-10 size-60 rounded-full border border-purple/15 bg-lilac/15"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-b from-transparent to-periwinkle/10"
        aria-hidden="true"
      />

      <div className="mx-auto w-full max-w-[1040px] text-center">
        <p className="mb-6 inline-flex items-center rounded-full border border-purple/15 bg-paper/80 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-purple shadow-card backdrop-blur-md sm:text-xs">
          <span
            className="mr-2.5 size-1.5 rounded-full bg-lilac ring-4 ring-lilac/20"
            aria-hidden="true"
          />
          Brand Identity &amp; Custom Merch Design
        </p>

        <h1
          id="hero-heading"
          className="mx-auto max-w-[920px] font-display text-[clamp(2.65rem,6.5vw,5.25rem)] font-bold leading-[1.04] tracking-display text-ink"
        >
          Stand out with
          <br />a <span className="text-purple">memorable brand</span> and merch beyond just logos.
        </h1>

        <div className="mx-auto mt-7 max-w-[740px] space-y-3 text-[1.04rem] leading-[1.72] text-ink/70 sm:mt-8 sm:text-lg">
          <p>
            You&apos;ve reached a point where your brand identity doesn&apos;t feel quite right. Maybe it
            was DIY&apos;d, created in a hurry, or you&apos;ve simply outgrown it.
          </p>
          <p>
            Even your merch feels like templates or just logos on merch, rather than something connected
            to your brand message. You want your brand and merch to reflect who you are and support the
            bigger picture of your business.
          </p>
        </div>

        <div className="mx-auto mt-8 flex max-w-md flex-col justify-center gap-3 sm:max-w-none sm:flex-row">
          <a
            href="#enquire"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-purple bg-purple px-7 py-3 text-sm font-bold text-paper shadow-button transition duration-200 hover:-translate-y-0.5 hover:border-ink hover:bg-ink hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac"
          >
            Enquire Today
          </a>
          <a
            href="#featured-work"
            className="inline-flex min-h-12 items-center justify-center rounded-xl border border-purple/70 bg-paper/70 px-7 py-3 text-sm font-bold text-purple backdrop-blur-md transition duration-200 hover:-translate-y-0.5 hover:border-purple hover:bg-periwinkle/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-lilac"
          >
            View Case Study
          </a>
        </div>

        <ul className="mx-auto mt-9 flex max-w-4xl flex-col items-center justify-center gap-3 border-t border-purple/15 pt-5 text-sm font-semibold text-ink/65 sm:mt-10 sm:flex-row sm:flex-wrap sm:gap-x-8">
          {trustPoints.map((point) => (
            <li key={point} className="flex items-center gap-2">
              <span
                className="grid size-5 place-items-center rounded-full bg-periwinkle/50 text-xs font-bold text-purple"
                aria-hidden="true"
              >
                ✓
              </span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
