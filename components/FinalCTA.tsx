export function FinalCTA() {
  return (
    <section id="enquire" className="bg-paper px-5 py-16 sm:px-8 sm:py-20 lg:py-24" aria-labelledby="final-cta-heading">
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-ink px-6 py-14 text-center text-paper shadow-lift sm:px-12 sm:py-16">
        <div className="absolute -left-16 -top-20 size-56 rounded-full bg-purple blur-[2px]" aria-hidden="true" />
        <div className="absolute -bottom-24 -right-12 size-64 rounded-full bg-lilac/25" aria-hidden="true" />
        <div className="absolute right-[18%] top-8 size-20 rotate-12 rounded-2xl border border-periwinkle/30" aria-hidden="true" />

        <div className="relative mx-auto max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-lilac">Start a project</p>
          <h2 id="final-cta-heading" className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
            Ready for a Brand That Feels Like You?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-periwinkle">
            Let&apos;s shape a clear, memorable identity and merch that supports where your business is going next.
          </p>
          <a href="#enquire" className="mt-7 inline-flex min-h-12 items-center justify-center rounded-xl bg-lilac px-7 py-3 text-sm font-bold text-ink transition duration-200 hover:-translate-y-0.5 hover:bg-periwinkle focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-paper">
            Enquire Today
          </a>
        </div>
      </div>
    </section>
  );
}
