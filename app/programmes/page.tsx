import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Programmes - YBS",
  description:
    "Explore YBS programmes including the Cambridge Summer Business Leadership Programme and future business leadership pathways.",
};

const summerModules = [
  "Business Strategy",
  "Entrepreneurship",
  "AI & Innovation",
  "Leadership Communication",
  "Presentation Skills",
  "University & Career Pathway Reflection",
];

const pathwayStages = [
  {
    age: "14-16",
    title: "Business Discovery",
    text: "A foundation stage for students beginning to explore enterprise, communication, and commercial confidence.",
  },
  {
    age: "16-18",
    title: "Leadership & Innovation",
    text: "A development stage for students ready for more structured strategy, innovation, and presentation work.",
  },
  {
    age: "18+",
    title: "Global Business Pathways",
    text: "A future-facing stage connected to university readiness, entrepreneurship, and international direction.",
  },
];

const ecosystem = [
  "Cambridge-based residential learning",
  "Future online preparation and follow-up",
  "Family-facing multilingual communication",
  "International collaboration and cultural exposure",
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
            href="#consultation"
          >
            Book Consultation
          </a>
        </div>
      </nav>
    </header>
  );
}

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-navy text-warm-white">
      <Header />

      <section className="relative border-b border-white/8 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_24%,rgba(88,178,255,0.18),transparent_28%),linear-gradient(115deg,rgba(4,13,29,1)_0%,rgba(8,30,58,0.94)_45%,rgba(5,13,29,1)_100%)]" />
        <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-end gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.04fr_0.96fr] lg:px-10">
          <div>
            <SectionLabel>Programmes</SectionLabel>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
              A business leadership pathway for globally minded students.
            </h1>
          </div>
          <div className="border-l border-sky-200/24 pl-6">
            <p className="text-base leading-8 text-white/70 sm:text-lg">
              YBS begins with the Cambridge Summer Business Leadership Programme
              and develops toward a broader online and offline learning
              ecosystem for future global business leaders.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full bg-warm-white px-6 text-sm font-semibold text-navy transition hover:bg-white"
                href="#consultation"
              >
                Book Consultation
              </a>
              <a
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/20 px-6 text-sm font-semibold text-warm-white transition hover:border-sky-300/60 hover:text-white"
                href="#summer"
              >
                Explore Programme
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-b border-white/8 bg-warm-white text-navy"
        id="summer"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-32">
          <div>
            <SectionLabel tone="navy">Main Programme</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-6xl">
              Cambridge Summer Business Leadership Programme
            </h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-navy/72">
              A refined summer experience combining business learning,
              leadership workshops, communication practice, academic immersion,
              and cultural experience.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {summerModules.map((module) => (
                <div
                  className="border-l border-sky-500/35 pl-5 text-base font-semibold text-navy"
                  key={module}
                >
                  {module}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <SectionLabel>Future Business Leadership Pathway</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl">
              A pathway that can grow with age, maturity, and ambition.
            </h2>
          </div>
          <p className="max-w-xl text-sm leading-7 text-white/60 lg:ml-auto">
            The future pathway is framed as a direction of travel, not a fixed
            guarantee: discovery, leadership, and global business readiness over
            time.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
          {pathwayStages.map((stage) => (
            <div className="bg-navy p-7 sm:p-9" key={stage.title}>
              <p className="text-sm text-sky-300">{stage.age}</p>
              <h3 className="mt-7 text-2xl font-semibold leading-snug text-white">
                {stage.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/58">{stage.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative border-y border-white/8 bg-[#071326] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(67,170,255,0.12),transparent_28%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionLabel>Online + Offline Ecosystem</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl">
              A placeholder for a wider learning platform.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
              Future YBS programme design may connect in-person summer learning
              with online preparation, follow-up, multilingual family access,
              and international collaboration.
            </p>
          </div>
          <div className="grid gap-2">
            {ecosystem.map((item) => (
              <div
                className="flex items-center justify-between gap-6 border-b border-white/12 py-6"
                key={item}
              >
                <span className="text-lg font-medium leading-7 text-white sm:text-xl">
                  {item}
                </span>
                <span className="h-px w-10 shrink-0 bg-sky-300/60 sm:w-12" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32" id="consultation">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-warm-white px-6 py-14 text-navy sm:px-10 sm:py-16 lg:px-16 lg:py-24">
          <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel tone="navy">Programme Consultation</SectionLabel>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
                Book a consultation to discuss programme fit and next steps.
              </h2>
            </div>
            <a
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-6 text-sm font-semibold text-white transition hover:bg-[#102441]"
              href="#consultation"
            >
              Book Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
