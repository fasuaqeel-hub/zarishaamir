"use client";

import { useState } from "react";
import { SectionHeading } from "./SectionHeading";

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
    <section id="faq" className="border-y border-purple/10 bg-periwinkle/10 px-5 py-16 sm:px-8 sm:py-20" aria-label="Frequently asked questions">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-14">
        <SectionHeading
          eyebrow="FAQs"
          title="What clients often ask"
        />

        <div className="overflow-hidden rounded-2xl border border-purple/15 bg-paper shadow-card">
          {questions.map((item, index) => (
            <div key={item.question} className={index ? "border-t border-purple/10" : ""}>
              <button
                type="button"
                className="flex w-full items-center justify-between gap-6 px-5 py-5 text-left sm:px-6"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <h3 className="font-semibold text-ink">{item.question}</h3>
                <span
                  className={`grid size-8 shrink-0 place-items-center rounded-full bg-periwinkle/25 text-lg text-purple transition duration-200 ${
                    openIndex === index ? "rotate-45" : ""
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
                  <p className="px-5 pb-5 text-base leading-relaxed text-ink/65 sm:px-6">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
