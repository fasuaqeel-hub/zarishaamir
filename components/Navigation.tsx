"use client";

import { useEffect, useState } from "react";

const navItems = [
  { label: "Services", href: "#services", id: "services" },
  { label: "Portfolio", href: "#featured-work", id: "featured-work" },
  { label: "Testimonials", href: "#testimonials", id: "testimonials" },
  { label: "Process", href: "#process", id: "process" },
  { label: "FAQs", href: "#faqs", id: "faqs" },
];

export function Navigation() {
  const [activeId, setActiveId] = useState("services");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-30% 0px -55% 0px",
        threshold: [0.12, 0.28, 0.5],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="sticky top-4 z-50 bg-transparent px-5 pt-5 sm:px-8">
      <nav
        className="relative mx-auto max-w-6xl rounded-[2rem] border border-border bg-paper px-3 py-3 shadow-card"
        aria-label="Primary navigation"
      >
        <div className="flex items-center justify-between gap-4">
          <a
            href="#services"
            className="flex min-w-0 items-center gap-3 rounded-full pr-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
            onClick={closeMenu}
          >
            <img
              src="/profile-placeholder.svg"
              alt="Zarish Aamir profile placeholder"
              className="size-11 shrink-0 rounded-full border border-border bg-paper object-cover sm:size-12"
            />
            <span className="truncate text-sm font-bold text-ink sm:text-base">Zarish Aamir</span>
          </a>

          <div className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => {
              const isActive = activeId === item.id;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-4 py-2 text-sm font-bold transition duration-200 hover:-translate-y-0.5 hover:bg-mint hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink ${
                    isActive ? "bg-mint text-accent" : "text-ink/68"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="hidden min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-button transition duration-200 hover:-translate-y-0.5 hover:bg-pink hover:text-white hover:shadow-card focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink lg:inline-flex"
          >
            Get Started
            <span aria-hidden="true">→</span>
          </a>

          <button
            type="button"
            className="grid size-11 place-items-center rounded-full border border-border bg-paper text-accent shadow-card transition duration-200 hover:border-accent hover:bg-mint/35 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
          >
            <span className="relative block h-3.5 w-5" aria-hidden="true">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                  isOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                  isOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition duration-200 ${
                  isOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {isOpen ? (
          <div className="mt-3 grid gap-2 rounded-[1.5rem] border border-border bg-paper/95 p-3 shadow-card lg:hidden">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-3 text-sm font-bold transition duration-200 hover:bg-pink/10 hover:text-accent ${
                  activeId === item.id ? "bg-mint text-accent" : "text-ink/70"
                }`}
                onClick={closeMenu}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="mt-1 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-bold text-white shadow-button transition duration-200 hover:bg-pink hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
              onClick={closeMenu}
            >
              Get Started
              <span aria-hidden="true">→</span>
            </a>
          </div>
        ) : null}
      </nav>
    </header>
  );
}
