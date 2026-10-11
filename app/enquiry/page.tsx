
"use client";

import { FormEvent, useState } from "react";

const services = [
  "Complete Rebrand (existing business)",
  "New Brand Identity (new business)",
  "Brand Touchpoints (tech packs, stationery, social templates, packaging, etc.)",
  "Merch design (for an existing merch line)",
  "Merch design (for a new business)",
  "Other",
];

const timelines = [
  "Ready to get started",
  "Within the next 1–2 months",
  "2–6 months+ (not urgent)",
  "Other",
];

const investments = [
  "$500–$1500",
  "$1500–$3000",
  "$3000–$5000",
  "$5000+",
  "Other",
];

const discoverySources = [
  "Instagram",
  "Behance",
  "LinkedIn",
  "Google Search",
  "Referral",
  "Other",
];

const initialValues = {
  fullName: "",
  businessName: "",
  website: "",
  email: "",
  location: "",
  projectDescription: "",
  projectGoals: "",
  designVision: "",
  questions: "",
  otherService: "",
  otherTimeline: "",
  otherInvestment: "",
  otherSource: "",
};

export default function EnquiryPage() {
  const [values, setValues] = useState(initialValues);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [timeline, setTimeline] = useState("");
  const [investment, setInvestment] = useState("");
  const [sources, setSources] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const updateField = (field: keyof typeof initialValues, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
  };

  const toggleSelection = (
    value: string,
    selected: string[],
    setSelected: (items: string[]) => void
  ) => {
    setSelected(
      selected.includes(value)
        ? selected.filter((item) => item !== value)
        : [...selected, value]
    );
  };

  const inputClass =
    "mt-1.5 min-h-11 w-full rounded-xl border border-ink/20 bg-white px-3 py-2.5 text-sm text-ink outline-none transition placeholder:text-ink/40 focus:border-accent focus:ring-2 focus:ring-accent/10";

  const labelClass =
    "block text-sm font-semibold text-ink";

  const sectionClass =
    "rounded-2xl border border-ink/10 bg-white p-4 shadow-sm sm:p-6";

  const sectionTitleClass =
    "mb-4 text-xl font-bold tracking-tight text-accent sm:text-2xl";

  const optionClass =
    "flex min-h-9 cursor-pointer items-start gap-2.5 rounded-lg px-2 py-1.5 text-sm leading-snug transition hover:bg-paper";

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (
      !values.fullName.trim() ||
      !values.businessName.trim() ||
      !values.website.trim() ||
      !values.email.trim() ||
      !values.location.trim() ||
      !values.projectDescription.trim() ||
      !values.projectGoals.trim()
    ) {
      setStatus("error");
      setStatusMessage("Please complete all required fields.");
      return;
    }

    if (!values.email.includes("@")) {
      setStatus("error");
      setStatusMessage("Please enter a valid email address.");
      return;
    }

    if (selectedServices.length === 0) {
      setStatus("error");
      setStatusMessage("Please select at least one service.");
      return;
    }

    if (!timeline || !investment || sources.length === 0) {
      setStatus("error");
      setStatusMessage(
        "Please select a project timeline, investment range, and where you found me."
      );
      return;
    }

    if (!accessKey) {
      setStatus("error");
      setStatusMessage(
        "The form is missing its access key. Please try again later."
      );
      return;
    }

    setStatus("loading");
    setStatusMessage("");

    const payload = {
      access_key: accessKey,
      subject: `New detailed project enquiry from ${values.fullName.trim()}`,
      from_name: values.fullName.trim(),
      name: values.fullName.trim(),
      email: values.email.trim(),
      business_name: values.businessName.trim(),
      website_socials: values.website.trim(),
      location: values.location.trim(),
      services_required: selectedServices
        .map((service) =>
          service === "Other" && values.otherService.trim()
            ? `Other: ${values.otherService.trim()}`
            : service
        )
        .join(", "),
      project_timeline:
        timeline === "Other" && values.otherTimeline.trim()
          ? `Other: ${values.otherTimeline.trim()}`
          : timeline,
      project_description: values.projectDescription.trim(),
      project_goals: values.projectGoals.trim(),
      design_vision: values.designVision.trim() || "Not provided",
      project_investment:
        investment === "Other" && values.otherInvestment.trim()
          ? `Other: ${values.otherInvestment.trim()}`
          : investment,
      discovery_source: sources
        .map((source) =>
          source === "Other" && values.otherSource.trim()
            ? `Other: ${values.otherSource.trim()}`
            : source
        )
        .join(", "),
      additional_questions: values.questions.trim() || "None",
    };

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

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed.");
      }

      setValues(initialValues);
      setSelectedServices([]);
      setTimeline("");
      setInvestment("");
      setSources([]);
      setStatus("success");
      setStatusMessage(
        "Thank you for your enquiry! Your message has been sent successfully. I'll be in touch within 24 hours."
      );
    } catch (error) {
      console.error("Enquiry form submission failed:", error);
      setStatus("error");
      setStatusMessage(
        "Something went wrong while sending your enquiry. Please try again."
      );
    }
  };

  return (
    <main className="min-h-screen bg-paper px-5 py-12 text-ink sm:px-8 sm:py-16">
      <div className="mx-auto max-w-5xl">
        <a
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-accent transition hover:opacity-70"
        >
          ← Back to home
        </a>

        <header className="mb-8 mt-6 sm:mb-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
            PROJECT ENQUIRY
          </p>
          <h1 className="mt-3 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Let&apos;s bring your vision to life.
          </h1>
          <div className="mt-4 max-w-4xl space-y-2.5 text-base leading-relaxed text-ink/70">
            <p>Hi! I'm Zarish, and it's nice to see you here 👋</p>
            <p>
              Want to give your audience a memorable experience of a brand that feels
              like you? You're at the right place. Please take a little time to fill
              out the form below with as much detail as possible.
            </p>
            <p>
              I keep my project slots limited each year so I can properly focus on
              every brand I work with.
            </p>
            <p>
              After submitting the form, you'll hear from me within 24 hours.
            </p>
          </div>

          <p className="mt-4 text-sm text-ink/60">
            Fields marked with <span className="font-bold text-accent">*</span>{" "}
            are required.
          </p>
        </header>

        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <section className={sectionClass}>
            <h2 className={sectionTitleClass}>01. About You & Your Business</h2>

            <div className="grid gap-x-6 gap-y-4 sm:grid-cols-2">
              <label className={labelClass}>
                Full Name <span className="text-accent">*</span>
                <input
                  className={inputClass}
                  type="text"
                  autoComplete="name"
                  placeholder="Your full name"
                  value={values.fullName}
                  onChange={(e) => updateField("fullName", e.target.value)}
                  required
                />
              </label>

              <label className={labelClass}>
                What is the name of your business?{" "}
                <span className="text-accent">*</span>
                <input
                  className={inputClass}
                  type="text"
                  placeholder="Your business name"
                  value={values.businessName}
                  onChange={(e) => updateField("businessName", e.target.value)}
                  required
                />
              </label>

              <label className={labelClass}>
                Link to website/social media{" "}
                <span className="text-accent">*</span>
                <input
                  className={inputClass}
                  type="text"
                  placeholder="Website, Instagram, LinkedIn, etc."
                  value={values.website}
                  onChange={(e) => updateField("website", e.target.value)}
                  required
                />
              </label>

              <label className={labelClass}>
                What is the best email to contact you?{" "}
                <span className="text-accent">*</span>
                <input
                  className={inputClass}
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={values.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  required
                />
              </label>

              <label className={labelClass}>
                Where are you located? <span className="text-accent">*</span>
                <input
                  className={inputClass}
                  type="text"
                  placeholder="City and country"
                  value={values.location}
                  onChange={(e) => updateField("location", e.target.value)}
                  required
                />
              </label>
            </div>
          </section>

          <section className={sectionClass}>
            <h2 className={sectionTitleClass}>02. Project Details</h2>

            <fieldset>
              <legend className={labelClass}>
                What services do you require?{" "}
                <span className="text-accent">*</span>
              </legend>

              <div className="mt-2 grid gap-x-4 sm:grid-cols-2">
                {services.map((service) => (
                  <label key={service} className={optionClass}>
                    <input
                      className="mt-1 h-4 w-4 shrink-0 accent-accent"
                      type="checkbox"
                      checked={selectedServices.includes(service)}
                      onChange={() =>
                        toggleSelection(
                          service,
                          selectedServices,
                          setSelectedServices
                        )
                      }
                    />
                    <span>{service}</span>
                  </label>
                ))}
              </div>

              {selectedServices.includes("Other") && (
                <input
                  className={inputClass}
                  type="text"
                  placeholder="Tell me which other service you need"
                  value={values.otherService}
                  onChange={(e) => updateField("otherService", e.target.value)}
                />
              )}
            </fieldset>

            <fieldset className="mt-6">
              <legend className={labelClass}>
                How soon are you hoping to start this project?{" "}
                <span className="text-accent">*</span>
              </legend>
              <div className="mt-2 grid gap-x-4 sm:grid-cols-2">
                {timelines.map((item) => (
                  <label key={item} className={optionClass}>
                    <input
                      className="mt-1 h-4 w-4 shrink-0 accent-accent"
                      type="radio"
                      name="timeline"
                      value={item}
                      checked={timeline === item}
                      onChange={() => setTimeline(item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
              {timeline === "Other" && (
                <input
                  className={inputClass}
                  type="text"
                  placeholder="Tell me your preferred timeline"
                  value={values.otherTimeline}
                  onChange={(e) => updateField("otherTimeline", e.target.value)}
                />
              )}
            </fieldset>

            <label className={`${labelClass} mt-6`}>
              Project Description <span className="text-accent">*</span>
              <textarea
                className={`${inputClass} resize-y`}
                rows={4}
                placeholder="Share the details of your project..."
                value={values.projectDescription}
                onChange={(e) =>
                  updateField("projectDescription", e.target.value)
                }
                required
              />
            </label>

            <label className={`${labelClass} mt-6`}>
              What would you like this project to help you achieve?{" "}
              <span className="text-accent">*</span>
              <textarea
                className={`${inputClass} resize-y`}
                rows={3}
                placeholder="What are your goals? What would success look like?"
                value={values.projectGoals}
                onChange={(e) => updateField("projectGoals", e.target.value)}
                required
              />
            </label>

            <label className={`${labelClass} mt-6`}>
              What vision/design style do you have for the project?
              <span className="mt-1 block font-normal leading-relaxed text-ink/60">
                Drop a link to your Pinterest board, inspiration folder, or
                anywhere else you&apos;ve saved visuals.
              </span>
              <textarea
                className={`${inputClass} resize-y`}
                rows={3}
                placeholder="Share links or describe your visual direction..."
                value={values.designVision}
                onChange={(e) => updateField("designVision", e.target.value)}
              />
            </label>

            <fieldset className="mt-6">
              <legend className={labelClass}>
                Project Investment{" "}
                <span className="font-normal text-ink/60">
                  (Brand Identity projects typically start from $1500)
                </span>{" "}
                <span className="text-accent">*</span>
              </legend>
              <div className="mt-2 grid gap-x-4 sm:grid-cols-2">
                {investments.map((item) => (
                  <label key={item} className={optionClass}>
                    <input
                      className="mt-1 h-4 w-4 shrink-0 accent-accent"
                      type="radio"
                      name="investment"
                      value={item}
                      checked={investment === item}
                      onChange={() => setInvestment(item)}
                    />
                    <span>{item}</span>
                  </label>
                ))}
              </div>
              {investment === "Other" && (
                <input
                  className={inputClass}
                  type="text"
                  placeholder="Share your expected investment"
                  value={values.otherInvestment}
                  onChange={(e) =>
                    updateField("otherInvestment", e.target.value)
                  }
                />
              )}
            </fieldset>
          </section>

          <section className={sectionClass}>
            <fieldset>
              <legend className={labelClass}>
                Where did you find me?{" "}
                <span className="text-accent">*</span>
              </legend>
              <div className="mt-2 grid gap-x-4 sm:grid-cols-2">
                {discoverySources.map((source) => (
                  <label key={source} className={optionClass}>
                    <input
                      className="mt-1 h-4 w-4 shrink-0 accent-accent"
                      type="checkbox"
                      checked={sources.includes(source)}
                      onChange={() =>
                        toggleSelection(source, sources, setSources)
                      }
                    />
                    <span>{source}</span>
                  </label>
                ))}
              </div>
              {sources.includes("Other") && (
                <input
                  className={inputClass}
                  type="text"
                  placeholder="Tell me where you found my work"
                  value={values.otherSource}
                  onChange={(e) => updateField("otherSource", e.target.value)}
                />
              )}
            </fieldset>

            <label className={`${labelClass} mt-6`}>
              Any questions or queries?
              <textarea
                className={`${inputClass} resize-y`}
                rows={3}
                placeholder="Your questions or additional notes..."
                value={values.questions}
                onChange={(e) => updateField("questions", e.target.value)}
              />
            </label>
          </section>

          {statusMessage && (
            <p
              role="status"
              aria-live="polite"
              className={`rounded-xl p-4 text-sm font-semibold ${
                status === "success"
                  ? "bg-white text-accent"
                  : "bg-white text-red-700"
              }`}
            >
              {statusMessage}
            </p>
          )}

          <div className="flex flex-col items-start gap-4 pt-2">
            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex min-h-12 items-center justify-center rounded-xl bg-accent px-8 py-4 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === "loading" ? "Sending enquiry..." : "Submit Enquiry"}
            </button>
            <p className="text-xs leading-relaxed text-ink/60">
              Your details will be used to respond to your project enquiry.
            </p>
          </div>
        </form>
      </div>
    </main>
  );
}
