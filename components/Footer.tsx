import { Mail, createLucideIcon, type LucideIcon } from "lucide-react";

const exploreLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#featured-work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const Linkedin = createLucideIcon("Linkedin", [
  ["path", { d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z", key: "c2jq9f" }],
  ["rect", { width: "4", height: "12", x: "2", y: "9", key: "mk3on5" }],
  ["circle", { cx: "4", cy: "4", r: "2", key: "bt5ra8" }],
]);

const Instagram = createLucideIcon("Instagram", [
  ["rect", { width: "20", height: "20", x: "2", y: "2", rx: "5", ry: "5", key: "2e1cvw" }],
  ["path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z", key: "9exkf1" }],
  ["line", { x1: "17.5", x2: "17.51", y1: "6.5", y2: "6.5", key: "r4j83e" }],
]);

const findMeLinks: Array<{ label: string; href: string; icon: LucideIcon }> = [
  { label: "contact@zarishaamir.com", href: "mailto:contact@zarishaamir.com", icon: Mail },
  {
    label: "www.linkedin.com/in/zarishaamir",
    href: "https://www.linkedin.com/in/zarishaamir",
    icon: Linkedin,
  },
  {
    label: "@zarishaamir.design",
    href: "https://www.instagram.com/zarishaamir.design?igsh=aWtmNWZhdWt3ejI2",
    icon: Instagram,
  },
];

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-white sm:px-8 sm:py-14" aria-label="Footer">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.35fr_0.8fr_1.1fr] md:gap-12">
          <div>
            <div className="flex items-center gap-4">
              <span className="size-16 shrink-0 overflow-hidden rounded-full border-2 border-[#DAEEE3] bg-mint sm:size-[72px]">
                <img
                  src="/profile-zarish.png"
                  alt="Zarish Aamir"
                  className="size-full scale-125 object-cover object-top"
                />
              </span>
              <div>
                <p className="text-lg font-bold leading-tight">Zarish Aamir</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-mint">Brand Designer</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-[1.75] text-white/62">
              Brand identity, logo systems, and custom merch design for businesses that want to be
              more recognizable.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Explore</h2>
            <nav className="mt-5 grid gap-3" aria-label="Footer navigation">
              {exploreLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm font-semibold text-white/62 transition duration-200 hover:text-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.18em] text-white">Find Me</h2>
            <div className="mt-5 grid gap-3">
              {findMeLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex w-fit max-w-full items-center gap-2 text-sm font-semibold text-white/62 transition duration-200 hover:text-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
                >
                  <Icon
                    className="size-[18px] shrink-0 text-mint/80 transition duration-200 group-hover:text-pink"
                    aria-hidden="true"
                    strokeWidth={1.8}
                  />
                  <span className="min-w-0 truncate">{link.label}</span>
                  <span
                    className="text-xs text-mint transition duration-200 group-hover:text-pink"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-sm text-white/52 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; 2026 Zarish Aamir. All rights reserved.</p>
          <a
            href="#"
            className="w-fit font-semibold text-white/70 transition duration-200 hover:text-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
          >
            Back to top <span aria-hidden="true">&uarr;</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
