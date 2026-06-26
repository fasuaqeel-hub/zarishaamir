"use client";

import { useEffect, useRef, useState } from "react";

const testimonials = [
  {
    quote:
      "Working with Zarish was one of the best choices I've made for my shop. She didn't just design a logo—she got me. She really listened, took the time to understand my vision, and somehow turned it into something even better than I imagined. Every detail, from the logo to the full shop vibe, felt so intentional and true to my brand. Clean, creative, and totally me. Love love love her work. If you're thinking about branding your store or just want your visuals to feel more 'you,' I honestly can't recommend Zarish enough. She's insanely talented, so easy to work with, and truly wants your brand to shine.",
    name: "Zarmeen",
    role: "Former Kittl Creator \u2022 Print-On-Demand Specialist",
    initials: "Z",
  },
  {
    quote:
      "Zarish created a wide range of product mockups for our apparel brand over several months. She consistently delivered high-quality work, was responsive to feedback, and showed genuine flexibility as our workflow evolved. She's detail-oriented, communicates clearly, and takes constructive feedback positively. Highly recommend for anyone needing mockup design or similar creative work.",
    name: "Kai Judd",
    role: "Founder & Marketing Lead, Selfawear",
    initials: "KJ",
  },
  {
    quote:
      "Great to work with Zarish on my streetwear brand logo and merch. Lovin' how she turned my vision into design. Also, I love the structured process all the way through.",
    name: "Nabil Alawadi",
    role: "Founder, Solara Unlimited",
    initials: "NA",
  },
];

export function ClientProof() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [cardsPerView, setCardsPerView] = useState(1);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) {
        setCardsPerView(3);
        return;
      }

      if (window.matchMedia("(min-width: 768px)").matches) {
        setCardsPerView(2);
        return;
      }

      setCardsPerView(1);
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);

    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    setSelectedIndex((currentIndex) => {
      if (currentIndex === null) {
        return null;
      }

      return Math.min(currentIndex, testimonials.length - 1);
    });
  }, [cardsPerView]);

  const selectCard = (cardIndex: number) => {
    const track = trackRef.current;
    const card = track?.children[cardIndex] as HTMLElement | undefined;

    setHasInteracted(true);
    setSelectedIndex(cardIndex);

    if (card) {
      card.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "start",
      });
    }
  };

  const handleScroll = () => {
    const track = trackRef.current;

    if (!track || !hasInteracted) {
      return;
    }

    const cards = Array.from(track.children) as HTMLElement[];
    const closestIndex = cards.reduce((closest, card, index) => {
      const currentDistance = Math.abs(card.offsetLeft - track.scrollLeft);
      const closestDistance = Math.abs(cards[closest].offsetLeft - track.scrollLeft);

      return currentDistance < closestDistance ? index : closest;
    }, 0);

    setSelectedIndex(closestIndex);
  };

  const selectedDotIndex = selectedIndex ?? -1;

  return (
    <section
      id="brand-identity"
      className="bg-paper px-5 py-16 sm:px-8 sm:py-20 lg:py-24"
      aria-labelledby="client-testimonials-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-purple">
            CLIENT TESTIMONIALS
          </p>
          <h2
            id="client-testimonials-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-ink sm:text-4xl"
          >
            The experience behind every project
          </h2>
        </div>

        <div className="mt-10 sm:mt-12">
          <div
            ref={trackRef}
            onScroll={handleScroll}
            onPointerDown={() => setHasInteracted(true)}
            className="flex snap-x snap-mandatory items-stretch gap-4 overflow-x-auto scroll-smooth px-1 py-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-live="polite"
          >
            {testimonials.map(({ quote, name, role, initials }, index) => {
              const isActive = selectedIndex === index;

              return (
                <figure
                  key={name}
                  onClick={() => selectCard(index)}
                  className={`flex min-h-[22rem] shrink-0 basis-full snap-start flex-col rounded-2xl border bg-paper p-6 transition duration-200 sm:p-7 md:basis-[calc((100%-1rem)/2)] lg:basis-[calc((100%-2rem)/3)] ${
                    isActive
                      ? "-translate-y-0.5 border-lilac bg-[#fffdfb] shadow-[0_24px_60px_rgba(74,59,143,0.16)]"
                      : "border-periwinkle/45 bg-[#fffdfb]/80 shadow-[0_14px_38px_rgba(74,59,143,0.06)] hover:border-lilac/45 hover:shadow-card"
                  }`}
                >
                  <div className="flex-1">
                    <div className="h-[10.5rem] overflow-y-auto scroll-smooth pr-2 text-[0.97rem] leading-[1.75] text-ink/72 [scrollbar-color:#4A3B8F_rgba(183,187,241,0.22)] [scrollbar-width:thin] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-purple [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-periwinkle/20">
                      <blockquote>
                        <span className="mr-1 font-bold text-lilac" aria-hidden="true">
                          &ldquo;
                        </span>
                        {quote}
                        <span className="ml-1 font-bold text-lilac" aria-hidden="true">
                          &rdquo;
                        </span>
                      </blockquote>
                    </div>
                  </div>

                  <figcaption className="mt-8 flex items-center gap-3 border-t border-purple/10 pt-5">
                  <div
                    className="grid size-11 shrink-0 place-items-center rounded-full border border-lilac/35 bg-periwinkle/15 text-sm font-bold text-purple"
                    aria-label={`${name} avatar placeholder`}
                  >
                      {initials}
                    </div>
                    <div>
                      <p className="font-bold leading-tight text-ink">{name}</p>
                      <p className="mt-1 text-xs font-semibold leading-relaxed text-ink/55">{role}</p>
                    </div>
                  </figcaption>
                </figure>
              );
            })}
          </div>

          <div className="mt-4 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => selectCard(selectedIndex === null ? 0 : Math.max(0, selectedIndex - 1))}
              disabled={selectedIndex === 0}
              className="grid size-9 place-items-center rounded-full border border-purple/15 bg-paper text-lg font-bold text-purple shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-lilac hover:bg-lilac/10 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:border-purple/15 disabled:hover:bg-paper"
              aria-label="Show previous testimonials"
            >
              <span aria-hidden="true">&lsaquo;</span>
            </button>

            <div className="flex items-center gap-2" aria-label="Testimonial carousel pagination">
              {testimonials.map(({ name }, index) => (
                <button
                  key={name}
                  type="button"
                  onClick={() => selectCard(index)}
                  className={`size-2.5 rounded-full transition duration-200 ${
                    selectedDotIndex === index ? "bg-purple" : "bg-purple/20 hover:bg-lilac"
                  }`}
                  aria-label={`Show testimonial from ${name}`}
                  aria-current={selectedDotIndex === index ? "true" : undefined}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                selectCard(selectedIndex === null ? 0 : Math.min(testimonials.length - 1, selectedIndex + 1))
              }
              disabled={selectedIndex === testimonials.length - 1}
              className="grid size-9 place-items-center rounded-full border border-purple/15 bg-paper text-lg font-bold text-purple shadow-card transition duration-200 hover:-translate-y-0.5 hover:border-lilac hover:bg-lilac/10 disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:translate-y-0 disabled:hover:border-purple/15 disabled:hover:bg-paper"
              aria-label="Show next testimonials"
            >
              <span aria-hidden="true">&rsaquo;</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
