const testimonials = [
  {
    quote:
      "Love the structured approach. This level of organization is exactly why I wanted you on the team.",
    label: "Process",
  },
  {
    quote: "Really appreciated the tee designs. Quality work all the way through.",
    label: "Merch Design",
  },
  {
    quote: "Your eye for detail and feedback during the logo design process, lovin it.",
    label: "Brand Identity",
  },
];

export function ClientProof() {
  return (
    <section
      id="client-proof"
      className="bg-paper px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-10"
      aria-labelledby="client-proof-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-7 flex items-end justify-between gap-6 border-t border-purple/15 pt-8 sm:mb-8">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-purple">Client proof</p>
            <h2
              id="client-proof-heading"
              className="max-w-2xl text-2xl font-bold leading-tight tracking-tight text-ink sm:text-3xl"
            >
              What clients have said while working together
            </h2>
          </div>
          <div className="hidden h-px w-24 bg-lilac sm:block" aria-hidden="true" />
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map(({ quote, label }) => (
            <figure
              key={label}
              className="flex min-h-44 flex-col justify-between rounded-2xl border border-periwinkle bg-periwinkle/10 p-5 shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-lilac hover:bg-paper sm:p-6"
            >
              <blockquote className="text-[0.95rem] leading-relaxed text-ink/75">
                <span className="mr-1 font-bold text-lilac" aria-hidden="true">
                  “
                </span>
                {quote}
                <span className="ml-1 font-bold text-lilac" aria-hidden="true">
                  ”
                </span>
              </blockquote>
              <figcaption className="mt-6">
                <span className="inline-flex rounded-full border border-purple/15 bg-paper px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-purple">
                  {label}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
