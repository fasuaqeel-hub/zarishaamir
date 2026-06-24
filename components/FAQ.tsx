import { SectionHeading } from "./SectionHeading";

const questions = ["What does a typical project include?", "How long does the process take?", "Can we start with a smaller paid project?"];

export function FAQ() {
  return (
    <section id="faq" className="border-y border-purple/10 bg-periwinkle/10 px-5 py-16 sm:px-8 sm:py-20" aria-label="Frequently asked questions">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <SectionHeading
          eyebrow="FAQ"
          title="A Few Things You May Be Wondering"
          description="Clear expectations make for better creative work. Full project details will live here."
        />

        <div className="overflow-hidden rounded-2xl border border-purple/15 bg-paper shadow-card">
          {questions.map((question, index) => (
            <div key={question} className={`flex items-center justify-between gap-6 px-5 py-5 sm:px-6 ${index ? "border-t border-purple/10" : ""}`}>
              <h3 className="font-semibold text-ink">{question}</h3>
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-periwinkle/25 text-lg text-purple" aria-hidden="true">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
