import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Contact YBS - Book a Private Consultation",
  description:
    "Book a private consultation with YBS to discuss programme suitability and next steps.",
};

const contactDetails = [
  "Cambridge, United Kingdom",
  "admissions@cyibs.com",
  "www.cyibs.com",
];

const programmes = [
  "Cambridge Summer Business Leadership Programme",
  "Future Business Leadership Pathway",
  "Online + Offline Learning Ecosystem",
  "Not sure yet",
];

function SectionLabel({ children, tone = "blue" }: { children: ReactNode; tone?: "blue" | "navy" }) {
  return (
    <p
      className={`text-xs font-semibold uppercase tracking-[0.22em] ${
        tone === "navy" ? "text-navy/62" : "text-sky-300"
      }`}
    >
      {children}
    </p>
  );
}

function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-navy/86 backdrop-blur-xl">
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
        <Link className="flex min-w-0 items-center gap-3" href="/" aria-label="YBS home">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-white/12 bg-white shadow-[0_16px_40px_rgba(0,0,0,0.25)]">
            <Image
              alt="YBS"
              className="h-full w-full object-contain p-1.5"
              height={48}
              priority
              src="/logo/ybs-logo.png"
              width={48}
            />
          </span>
          <span className="min-w-0 text-sm leading-tight text-white">
            <span className="block font-semibold">YBS</span>
            <span className="hidden max-w-64 text-white/58 sm:block">
              Cambridge Youth International Business School
            </span>
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-sm text-white/68 lg:flex">
          <Link className="hover:text-white" href="/about">
            About
          </Link>
          <Link className="hover:text-white" href="/programmes">
            Programmes
          </Link>
          <Link className="hover:text-white" href="/#network">
            Network
          </Link>
          <Link className="text-white" href="/contact">
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            aria-label="Chinese language placeholder"
            className="h-10 rounded-full border border-white/14 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/72 sm:px-4"
            type="button"
          >
            EN / 中文
          </button>
          <a
            className="hidden min-h-12 items-center justify-center rounded-full bg-warm-white px-6 text-sm font-semibold text-navy transition hover:bg-white md:inline-flex"
            href="#consultation-form"
          >
            Book Consultation
          </a>
        </div>
      </nav>
    </header>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <label className="grid gap-3 text-sm font-semibold text-white/76">
      {label}
      {children}
    </label>
  );
}

const fieldClass =
  "min-h-12 rounded-sm border border-white/12 bg-white/[0.045] px-4 text-sm text-white outline-none transition placeholder:text-white/32 focus:border-sky-300/55 focus:bg-white/[0.065]";

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-navy text-warm-white">
      <Header />

      <section className="relative border-b border-white/8 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(88,178,255,0.18),transparent_28%),linear-gradient(115deg,rgba(4,13,29,1)_0%,rgba(8,30,58,0.94)_45%,rgba(5,13,29,1)_100%)]" />
        <div className="relative mx-auto grid min-h-[68vh] max-w-7xl items-end gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.04fr_0.96fr] lg:px-10">
          <div>
            <SectionLabel>Private Consultation</SectionLabel>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
              Book a Private Consultation
            </h1>
          </div>
          <div className="border-l border-sky-200/24 pl-6">
            <p className="text-base leading-8 text-white/70 sm:text-lg">
              Speak with YBS to understand whether our programmes are the right
              fit for your child, family, or institution.
            </p>
            <p className="mt-6 text-xs leading-6 text-white/48">
              Consultation is a suitability conversation, not an admission
              decision or programme availability guarantee.
            </p>
          </div>
        </div>
      </section>

      <section
        className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[1.1fr_0.9fr] lg:px-10 lg:py-32"
        id="consultation-form"
      >
        <div className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 shadow-[0_40px_120px_rgba(0,0,0,0.24)] sm:p-8 lg:p-10">
          <div className="mb-10">
            <SectionLabel>Consultation Form</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-white sm:text-5xl">
              Tell us a little about your family’s goals.
            </h2>
          </div>

          <form className="grid gap-6">
            <div className="grid gap-6 md:grid-cols-2">
              <Field label="Parent / Guardian Name">
                <input className={fieldClass} name="guardianName" placeholder="Full name" type="text" />
              </Field>
              <Field label="Student Age">
                <input className={fieldClass} name="studentAge" placeholder="e.g. 15" type="text" />
              </Field>
              <Field label="Current Country">
                <input className={fieldClass} name="country" placeholder="Country of residence" type="text" />
              </Field>
              <Field label="Email">
                <input className={fieldClass} name="email" placeholder="name@example.com" type="email" />
              </Field>
              <Field label="WhatsApp / WeChat">
                <input className={fieldClass} name="messaging" placeholder="Preferred contact ID or number" type="text" />
              </Field>
              <Field label="Interested Programme">
                <select className={fieldClass} defaultValue="" name="programme">
                  <option value="" disabled>
                    Select programme
                  </option>
                  {programmes.map((programme) => (
                    <option className="bg-navy text-white" key={programme} value={programme}>
                      {programme}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <Field label="Message">
              <textarea
                className={`${fieldClass} min-h-36 py-4`}
                name="message"
                placeholder="Share the student’s background, goals, or questions."
              />
            </Field>
            <button
              className="mt-2 inline-flex min-h-12 w-full items-center justify-center rounded-full bg-warm-white px-6 text-sm font-semibold text-navy transition hover:bg-white sm:w-fit"
              type="button"
            >
              Submit Consultation Request
            </button>
          </form>
        </div>

        <aside className="grid gap-6">
          <section className="rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <SectionLabel>WeChat</SectionLabel>
            <h2 className="mt-5 text-3xl font-semibold leading-tight text-white">
              WeChat consultation available
            </h2>
            <div className="mt-8 flex aspect-square max-w-72 items-center justify-center rounded-sm border border-dashed border-white/22 bg-white/[0.035] text-center text-sm leading-6 text-white/48">
              WeChat QR code placeholder
            </div>
          </section>

          <section className="rounded-[1.25rem] border border-white/10 bg-white/[0.035] p-6 sm:p-8">
            <SectionLabel>Contact Details</SectionLabel>
            <div className="mt-6 grid gap-4">
              {contactDetails.map((detail) => (
                <p className="border-b border-white/10 pb-4 text-lg font-medium text-white" key={detail}>
                  {detail}
                </p>
              ))}
            </div>
          </section>

          <section className="rounded-[1.25rem] border border-sky-300/18 bg-sky-300/[0.055] p-6 sm:p-8">
            <SectionLabel>Compliance Note</SectionLabel>
            <p className="mt-5 text-sm leading-7 text-white/64">
              Submitting this form does not constitute admission, enrolment, or
              confirmation of programme availability. YBS will contact families
              directly to discuss suitability and next steps.
            </p>
          </section>
        </aside>
      </section>
    </main>
  );
}
