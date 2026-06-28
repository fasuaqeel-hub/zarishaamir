"use client";

import { useState } from "react";

const questions = [
  {
    question: "How do you make sure the designs fit my brand?",
    answer:
      "Every project starts by understanding your business, audience, and goals. That foundation helps shape every design decision to align with your brand.",
  },
  {
    question: "What if I'm not sure what my brand needs?",
    answer:
      "That's completely normal. Part of the process is helping you identify what's missing and recommending the best direction based on your goals.",
  },
  {
    question: "Can you create merchandise for an existing business?",
    answer:
      "Yes. If your brand is already established, I can create merchandise that complements your current identity.",
  },
  {
    question: "What files will I receive?",
    answer:
      "You'll receive organized, digital and production-ready files in the formats you need, including AI, EPS, SVG, PNG, JPEG, and PDF, along with brand guidelines where applicable.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faqs" className="scroll-mt-28 bg-paper px-5 py-12 sm:px-8 sm:py-14 lg:py-[72px]" aria-label="Frequently asked questions">
      <span id="faq" className="block scroll-mt-28" aria-hidden="true" />
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted">
            Don&apos;t see your question here? I&apos;m happy to help. Send me a message with your
            question and I&apos;ll get back to you within 24 hours.
          </p>
          <a
            href="#enquire"
            className="mt-6 inline-flex min-h-14 items-center justify-center rounded-xl border border-accent bg-transparent px-9 py-3.5 text-base font-bold tracking-[0.015em] text-accent transition duration-200 hover:-translate-y-0.5 hover:bg-mint hover:text-accent hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink sm:px-10"
          >
            Ask a question
          </a>
        </div>

        <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-card">
          {questions.map((item, index) => (
            <div key={item.question} className={index ? "border-t border-border" : ""}>
              <button
                type="button"
                className={`flex w-full items-center justify-between gap-6 px-5 py-5 text-left transition duration-200 sm:px-6 ${
                  openIndex === index ? "bg-mint/20" : "hover:bg-mint/35"
                }`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-semibold text-ink">{item.question}</h3>
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full text-lg transition duration-200 ${
                    openIndex === index ? "rotate-45 bg-mint text-accent" : "bg-mint/45 text-accent"
                  }`}
                  aria-hidden="true"
                >
                  +
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`grid transition-all duration-300 ease-out ${
                  openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-base leading-relaxed text-muted sm:px-6">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
