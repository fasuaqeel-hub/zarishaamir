"use client";

import { FormEvent, useState } from "react";

const initialFormValues = {
  fullName: "",
  email: "",
  website: "",
  projectType: "",
  projectMessage: "",
};

const projectTypes = [
  "New Brand Identity",
  "Existing Brand Refresh",
  "Logo System",
  "Brand Identity & Merchandise",
  "Merchandise for an Existing Brand",
  "Not Sure Yet",
  "Other",
];

export function FinalCTA() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
    const fullName = formValues.fullName.trim();
    const email = formValues.email.trim();
    const website = formValues.website.trim();
    const projectType = formValues.projectType.trim();
    const projectMessage = formValues.projectMessage.trim();

    console.log("[FinalCTA] Submit started");

    if (!fullName || !email || !projectType || !projectMessage) {
      setStatus("error");
      setStatusMessage("Please fill in your full name, email, project type, and project message.");
      return;
    }

    if (!email.includes("@")) {
      setStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    if (!accessKey) {
      setStatus("error");
      setStatusMessage("The contact form is missing its access key. Please try again later.");
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    const payload = {
      access_key: accessKey,
      subject: "New project inquiry from zarishaamir.com",
      from_name: fullName,
      name: fullName,
      email,
      website_socials: website || "Not provided",
      project_type: projectType,
      message: projectMessage,
    };

    console.log("[FinalCTA] Web3Forms payload", payload);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = await response.json();

      console.log("[FinalCTA] Web3Forms response", {
        ok: response.ok,
        status: response.status,
        result,
      });

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setFormValues(initialFormValues);
      setStatus("success");
      setStatusMessage("Thank you. Your inquiry has been sent successfully. I'll be in touch within 24 hours.");
    } catch (error) {
      console.error("[FinalCTA] Web3Forms submission failed", error);
      setStatus("error");
      setStatusMessage("Something went wrong while sending your inquiry. Please try again.");
    }
  };

  return (
    <section id="contact" className="scroll-mt-28 bg-paper px-5 py-12 sm:px-8 sm:py-14 lg:py-[72px]" aria-labelledby="final-cta-heading">
      <span id="enquire" className="block scroll-mt-28" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[2rem] bg-accent px-6 py-10 text-white shadow-lift sm:px-8 sm:py-12 lg:p-12">
        <div className="relative grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start lg:gap-12">
          <div className="w-full lg:pt-4">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-mint">LET&apos;S TALK</p>
            <h2 id="final-cta-heading" className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              What are you building right now?
            </h2>
            <p className="mt-5 w-full text-base leading-relaxed text-white/78 lg:max-w-xl">
              Whether it&apos;s a new brand, an existing identity, or merchandise that feels like a natural extension of your business, every project begins with understanding where you are today and where you&apos;d like your brand to go. Tell me a little about your project, and I&apos;ll be in touch within 24 hours.
            </p>
          </div>

          <form className="grid gap-4 rounded-3xl border border-accent bg-white p-5 text-left text-ink shadow-card sm:p-6" onSubmit={handleSubmit} noValidate>
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-accent">Full Name</span>
                <input
                  type="text"
                  name="fullName"
                  value={formValues.fullName}
                  onChange={(event) => setFormValues((values) => ({ ...values, fullName: event.target.value }))}
                  required
                  aria-required="true"
                  placeholder="Your full name"
                  className="min-h-12 w-full rounded-xl border border-ink bg-white px-4 py-3 text-sm font-semibold text-ink outline-none transition duration-200 placeholder:text-ink/45 focus:border-accent"
                />
              </label>
              <label className="block">
                <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-accent">Email Address</span>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={(event) => setFormValues((values) => ({ ...values, email: event.target.value }))}
                  required
                  aria-required="true"
                  placeholder="you@example.com"
                  className="min-h-12 w-full rounded-xl border border-ink bg-white px-4 py-3 text-sm font-semibold text-ink outline-none transition duration-200 placeholder:text-ink/45 focus:border-accent"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 flex min-h-8 items-end text-xs font-bold uppercase tracking-[0.12em] text-accent">Website or Socials</span>
                <input
                  type="text"
                  name="website"
                  value={formValues.website}
                  onChange={(event) => setFormValues((values) => ({ ...values, website: event.target.value }))}
                  placeholder="Website, Instagram, LinkedIn, or store link"
                  className="min-h-12 w-full rounded-xl border border-ink bg-white px-4 py-3 text-sm font-semibold text-ink outline-none transition duration-200 placeholder:text-ink/45 focus:border-accent"
                />
              </label>

              <label className="block">
                <span className="mb-2 flex min-h-8 items-end text-xs font-bold uppercase tracking-[0.12em] text-accent">What best describes your project?</span>
                <select
                  name="projectType"
                  value={formValues.projectType}
                  onChange={(event) => setFormValues((values) => ({ ...values, projectType: event.target.value }))}
                  required
                  aria-required="true"
                  className="min-h-12 w-full appearance-none rounded-xl border border-ink bg-white px-4 py-3 text-sm font-semibold text-ink outline-none transition duration-200 focus:border-accent"
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((projectType) => (
                    <option key={projectType} value={projectType}>
                      {projectType}
                    </option>
                  ))}
                </select>
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-xs font-bold uppercase tracking-[0.12em] text-accent">Message</span>
              <textarea
                name="projectMessage"
                value={formValues.projectMessage}
                onChange={(event) => setFormValues((values) => ({ ...values, projectMessage: event.target.value }))}
                required
                aria-required="true"
                placeholder="Share any details related to your project..."
                rows={4}
                className="w-full resize-none rounded-xl border border-ink bg-white px-4 py-3 text-sm font-semibold leading-relaxed text-ink outline-none transition duration-200 placeholder:text-ink/45 focus:border-accent"
              />
            </label>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <button
                type="submit"
                disabled={status === "loading"}
                className="inline-flex min-h-12 items-center justify-center rounded-xl bg-accent px-7 py-3 text-[0.95rem] font-bold tracking-[0.015em] text-white shadow-button transition duration-200 hover:-translate-y-0.5 hover:bg-pink hover:text-white hover:shadow-card disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-accent disabled:hover:shadow-button focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-pink"
              >
                {status === "loading" ? "Sending..." : "Send Inquiry"}
              </button>

              {statusMessage ? (
                <p
                  className={`text-sm font-semibold ${
                    status === "success" ? "text-accent" : "text-pink"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {statusMessage}
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
