"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Discover Your Brand",
    description:
      "We start by understanding your business, goals, and audience. Whether you already have an identity or we're building one from scratch, this step gives us clarity before any design begins.",
  },
  {
    title: "Creative Direction",
    description:
      "Together, we decide the visual direction by exploring ideas based on your brand needs. This could include refining an existing brand, creating a logo system and other brand assets from scratch, or developing merchandise.",
  },
  {
    title: "Design & Development",
    description:
      "With a clear direction in place, every element from logo systems and brand assets to merchandise is designed to create a cohesive brand that connects with your audience.",
  },
  {
    title: "Delivery & Launch",
    description:
      "You'll receive organized, production-ready files along with clear brand guidelines and everything needed to confidently launch or expand your brand.",
  },
];

export function Process() {
  const stepRefs = useRef<Array<HTMLLIElement | null>>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const touchOrTabletQuery = window.matchMedia("(max-width: 1023px), (hover: none), (pointer: coarse)");
    let animationFrame = 0;

    const updateCenteredStep = () => {
      if (!touchOrTabletQuery.matches) {
        setActiveIndex(null);
        return;
      }

      const viewportCenter = window.innerHeight / 2;
      const visibleSteps = stepRefs.current
        .map((step, index) => ({ step, index }))
        .filter(({ step }) => {
          if (!step) {
            return false;
          }

          const rect = step.getBoundingClientRect();
          return rect.bottom > 0 && rect.top < window.innerHeight;
        });

      if (!visibleSteps.length) {
        setActiveIndex(null);
        return;
      }

      const closestStep = visibleSteps.reduce((closest, current) => {
        const closestRect = closest.step?.getBoundingClientRect();
        const currentRect = current.step?.getBoundingClientRect();

        if (!closestRect || !currentRect) {
          return closest;
        }

        const closestDistance = Math.abs(closestRect.top + closestRect.height / 2 - viewportCenter);
        const currentDistance = Math.abs(currentRect.top + currentRect.height / 2 - viewportCenter);

        return currentDistance < closestDistance ? current : closest;
      });

      setActiveIndex(closestStep.index);
    };

    const requestCenteredStepUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateCenteredStep);
    };

    updateCenteredStep();
    window.addEventListener("scroll", requestCenteredStepUpdate, { passive: true });
    window.addEventListener("resize", requestCenteredStepUpdate);
    touchOrTabletQuery.addEventListener("change", updateCenteredStep);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", requestCenteredStepUpdate);
      window.removeEventListener("resize", requestCenteredStepUpdate);
      touchOrTabletQuery.removeEventListener("change", updateCenteredStep);
    };
  }, []);

  return (
    <section
      id="process"
      className="relative scroll-mt-28 overflow-hidden border-y border-accent bg-accent px-5 py-14 sm:px-8 sm:py-14 lg:py-20"
      aria-labelledby="process-heading"
    >
      <span id="logo-systems" className="block scroll-mt-28" aria-hidden="true" />
      <span id="brand-guidelines" className="block scroll-mt-28" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl">
        <div className="mx-auto mb-9 max-w-2xl text-center sm:mb-11">
          <h2
            id="process-heading"
            className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl"
          >
            <span className="block">A clear process from</span>
            <span className="block">brand discovery to launch</span>
          </h2>
        </div>

        <ol className="mt-12 grid gap-4 md:grid-cols-2 lg:mt-14">
          {steps.map(({ title, description }, index) => {
            const isActive = activeIndex === index;

            return (
              <li
                key={title}
                ref={(element) => {
                  stepRefs.current[index] = element;
                }}
                data-step-index={index}
                className={`group relative rounded-2xl px-5 py-5 pr-16 text-left transition duration-300 ease-out hover:-translate-y-1 hover:border-transparent hover:bg-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:px-6 sm:py-6 sm:pr-[4.5rem] ${
                  isActive
                    ? "-translate-y-1 border border-transparent bg-white shadow-[0_12px_30px_rgba(0,0,0,0.08)]"
                    : "border border-[#214B55]/45 bg-white/[0.04] shadow-[0_18px_55px_rgba(17,17,17,0.08)]"
                }`}
              >
                <span
                  className={`absolute right-5 top-5 grid size-10 place-items-center rounded-full border text-sm font-bold shadow-card transition-colors duration-300 ease-out group-hover:border-pink group-hover:bg-pink group-hover:text-white sm:right-6 sm:top-6 ${
                    isActive
                      ? "border-pink bg-pink text-white"
                      : "border-mint bg-mint text-accent"
                  }`}
                >
                  {index + 1}
                </span>

                <div className="max-w-[38rem]">
                  <h3
                    className={`text-lg font-bold leading-snug tracking-tight transition-colors duration-300 ease-out group-hover:text-ink ${
                      isActive ? "text-ink" : "text-white"
                    }`}
                  >
                    {title}
                  </h3>
                  <p
                    className={`mt-3 text-[0.9rem] font-normal leading-[1.7] transition-colors duration-300 ease-out group-hover:text-[#333333] ${
                      isActive ? "text-[#333333]" : "text-white/[0.88]"
                    }`}
                  >
                    {description}
                  </p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
