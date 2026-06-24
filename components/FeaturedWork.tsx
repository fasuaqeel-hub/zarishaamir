import { SectionHeading } from "./SectionHeading";

const projects = [
  { category: "Brand identity", accent: "bg-lilac/45", shape: "rounded-full" },
  { category: "Merch systems", accent: "bg-periwinkle/70", shape: "rounded-[2rem]" },
  { category: "Creative direction", accent: "bg-purple/20", shape: "rounded-full" },
];

export function FeaturedWork() {
  return (
    <section id="featured-work" className="bg-paper px-5 py-16 sm:px-8 sm:py-20 lg:py-24" aria-label="Featured work">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured work"
            title="Ideas Brought to Life"
            description="A preview of thoughtful brand worlds and merch systems built to feel distinct, useful, and ready to grow."
          />
          <span className="w-fit rounded-full border border-purple/15 bg-periwinkle/15 px-3 py-1.5 text-xs font-bold text-purple">
            Case studies coming soon
          </span>
        </div>

        <div className="mt-9 grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.category}
              className="group overflow-hidden rounded-3xl border border-purple/15 bg-paper shadow-card transition duration-300 hover:-translate-y-1 hover:border-lilac hover:shadow-lift"
            >
              <div className="relative grid aspect-[4/3] place-items-center overflow-hidden bg-periwinkle/10">
                <div className={`absolute size-40 ${project.shape} ${project.accent} transition duration-500 group-hover:scale-110`} />
                <div className="absolute left-[22%] top-[22%] size-24 rotate-12 rounded-2xl border border-purple/20 bg-paper/70 backdrop-blur-sm transition duration-500 group-hover:rotate-6" />
                <span className="relative text-5xl font-bold tracking-display text-purple/70">0{index + 1}</span>
              </div>
              <div className="flex items-center justify-between px-5 py-4">
                <h3 className="font-bold text-ink">{project.category}</h3>
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-purple">Selected work</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
