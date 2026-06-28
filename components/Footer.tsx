const exploreLinks = [
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#featured-work" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Process", href: "#process" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const findMeLinks = [
  { label: "contact@zarishaamir.com", href: "mailto:contact@zarishaamir.com" },
  { label: "www.linkedin.com/in/zarishaamir", href: "https://www.linkedin.com/in/zarishaamir" },
  { label: "@zarishaamirdeziner", href: "https://www.instagram.com/zarishaamirdeziner" },
];

export function Footer() {
  return (
    <footer className="bg-ink px-5 py-12 text-white sm:px-8 sm:py-14" aria-label="Footer">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.35fr_0.8fr_1.1fr] md:gap-12">
          <div>
            <div className="flex items-center gap-4">
              <img
                src="/profile-placeholder.svg"
                alt="Zarish Aamir profile placeholder"
                className="size-12 rounded-2xl border border-white/12 bg-mint object-cover"
              />
              <div>
                <p className="text-lg font-bold leading-tight">Zarish Aamir</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-[0.16em] text-mint">Brand Designer</p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-[1.75] text-white/62">
              Brand identity, logo systems, and custom merch design for businesses ready to be
              recognized.
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
              {findMeLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="group flex w-fit max-w-full items-center gap-2 text-sm font-semibold text-white/62 transition duration-200 hover:text-pink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
                >
                  <span className="truncate">{link.label}</span>
                  <span
                    className="text-xs text-mint transition duration-200 group-hover:text-pink"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </a>
              ))}
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
