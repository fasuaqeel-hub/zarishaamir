import { SectionHeading } from "./SectionHeading";

const projects = [
  { category: "Creative direction", accent: "bg-white/90", shape: "rounded-full" },
];

export function FeaturedWork() {
  return (
    <section id="featured-work" className="scroll-mt-28 bg-paper px-5 py-12 sm:px-8 sm:py-14 lg:py-[72px]" aria-label="Featured work">
      <span id="custom-merch" className="block scroll-mt-28" aria-hidden="true" />
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected work"
            title="Ideas Brought to Life"
          />
          <a
            href="https://www.behance.net/zarishaamir"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-14 w-fit cursor-pointer items-center justify-center rounded-xl border border-accent bg-accent px-9 py-3.5 text-base font-bold tracking-[0.015em] text-white shadow-button transition duration-300 hover:border-pink hover:bg-pink hover:text-white hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink sm:px-10"
          >
            View full portfolio
          </a>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          <a
            href="https://www.behance.net/gallery/251025059/Lane-brand-identity-and-merch-design?platform=direct"
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-3xl border border-border bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
            aria-label="Open Lane Brand Identity & Custom Merch case study on Behance"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-mint">
              <img
                src="/lane-cover.png"
                alt="Lane Brand Identity & Custom Merch cover"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-accent px-4 py-2 text-xs font-bold text-white opacity-100 shadow-card transition duration-300 [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:bg-pink [@media(hover:hover)]:group-hover:opacity-100">
                View Case Study &rarr;
              </span>
            </div>
            <div className="relative flex flex-col px-5 py-5">
              <h3 className="text-xs font-bold uppercase leading-tight tracking-[0.12em] text-ink">
                LANE
              </h3>
              <p className="mt-2.5 text-xs font-bold uppercase tracking-[0.12em] text-accent">
                Brand identity &bull; Logo system &bull; Custom merch design
              </p>
            </div>
          </a>

          <a
            href="https://www.behance.net/gallery/252094621/Visual-Identity-Podcast-Shes-so-self-centered"
            target="_blank"
            rel="noopener noreferrer"
            className="group overflow-hidden rounded-3xl border border-border bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
            aria-label="Open She's So Self Centered visual identity project on Behance"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-mint">
              <img
                src="/shes-so-self-centered-cover.png"
                alt="She's So Self Centered cover"
                className="h-full w-full object-cover"
                loading="eager"
              />
              <span className="pointer-events-none absolute bottom-4 right-4 rounded-full bg-accent px-4 py-2 text-xs font-bold text-white opacity-100 shadow-card transition duration-300 [@media(hover:hover)]:translate-y-2 [@media(hover:hover)]:opacity-0 [@media(hover:hover)]:group-hover:translate-y-0 [@media(hover:hover)]:group-hover:bg-pink [@media(hover:hover)]:group-hover:opacity-100">
                View Case Study &rarr;
              </span>
            </div>
            <div className="relative flex flex-col px-5 py-5">
              <h3 className="text-xs font-bold uppercase leading-tight tracking-[0.12em] text-ink">
                SHE&apos;S SO SELF CENTERED
              </h3>
              <p className="mt-2.5 text-xs font-bold uppercase tracking-[0.12em] text-accent">
                Visual identity &bull; Merch application
              </p>
            </div>
          </a>

          {projects.map((project, index) => (
            <article
              key={project.category}
              className="group overflow-hidden rounded-3xl border border-border bg-white shadow-card transition duration-300 hover:-translate-y-1 hover:border-accent hover:shadow-lift"
            >
              <div className="relative grid aspect-[4/3] place-items-center overflow-hidden bg-paper">
                <div className={`absolute size-40 ${project.shape} ${project.accent} transition duration-500 group-hover:scale-110`} />
                <div className="absolute left-[22%] top-[22%] size-24 rotate-12 rounded-2xl border border-accent/15 bg-white/85 transition duration-500 group-hover:rotate-6 group-hover:border-pink" />
                <span className="relative text-5xl font-bold tracking-display text-accent/75">0{index + 3}</span>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <h3 className="font-bold text-ink">{project.category}</h3>
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-accent">Selected work</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
