import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "About YBS - Cambridge Youth International Business School",
  description:
    "Learn about YBS, a Cambridge-based international business and leadership academy for globally minded young talents.",
};

const principles = [
  {
    title: "Institutional seriousness",
    text: "YBS is designed to feel closer to a future international institution than a course-selling website.",
  },
  {
    title: "Global family perspective",
    text: "The audience includes European Chinese entrepreneur families and globally minded young talents preparing for international environments.",
  },
  {
    title: "Future-ready leadership",
    text: "Business, communication, entrepreneurship, and AI-era awareness are treated as connected leadership capabilities.",
  },
];

const platformDirections = [
  "Cambridge-based summer learning",
  "Long-term business leadership pathway",
  "Online and offline learning ecosystem",
  "English primary with Chinese accessibility",
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
          <Link className="hover:text-white" href="/contact">
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
          <Link
            className="hidden min-h-12 items-center justify-center rounded-full bg-warm-white px-6 text-sm font-semibold text-navy transition hover:bg-white md:inline-flex"
            href="/contact"
          >
            Book Consultation
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-navy text-warm-white">
      <Header />

      <section className="relative border-b border-white/8 pt-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_22%,rgba(88,178,255,0.16),transparent_29%),linear-gradient(115deg,rgba(4,13,29,1)_0%,rgba(8,30,58,0.93)_45%,rgba(5,13,29,1)_100%)]" />
        <div className="relative mx-auto grid min-h-[72vh] max-w-7xl items-end gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div>
            <SectionLabel>About YBS</SectionLabel>
            <h1 className="mt-6 max-w-4xl text-4xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl">
              A Cambridge-based academy for future global business leaders.
            </h1>
          </div>
          <div className="border-l border-sky-200/24 pl-6">
            <p className="text-base leading-8 text-white/70 sm:text-lg">
              YBS - Cambridge Youth International Business School is a premium
              international education brand built for student recruitment,
              parent trust, and long-term leadership development.
            </p>
            <p className="mt-6 text-xs leading-6 text-white/48">
              YBS operates as an independent organisation. References to
              Cambridge describe the city and learning context, not official
              affiliation with the University of Cambridge.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionLabel>Positioning</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Business school authority with British educational restraint.
            </h2>
          </div>
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-3">
            {principles.map((principle) => (
              <article className="border-t border-white/14 pt-7" key={principle.title}>
                <h3 className="text-xl font-semibold text-white">{principle.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{principle.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/8 bg-warm-white text-navy">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-2 lg:px-10 lg:py-32">
          <div>
            <SectionLabel tone="navy">Mission</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight sm:text-5xl">
              To help young talents develop global perspective,
              entrepreneurial thinking, and future-ready skills.
            </h2>
          </div>
          <div>
            <SectionLabel tone="navy">Vision</SectionLabel>
            <p className="mt-5 text-lg leading-9 text-navy/72">
              YBS is evolving toward a global education platform: a connected
              pathway where in-person learning, international collaboration,
              online access, and multilingual family communication can develop
              over time.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <SectionLabel>Platform Direction</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl">
              Built for a wider international learning ecosystem.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {platformDirections.map((direction) => (
              <div className="min-h-36 rounded-sm border border-white/10 bg-white/[0.035] p-7" key={direction}>
                <h3 className="text-2xl font-semibold leading-snug text-white">
                  {direction}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8 lg:px-10" id="consultation">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-warm-white px-6 py-14 text-navy sm:px-10 sm:py-16 lg:px-16 lg:py-24">
          <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel tone="navy">Next Step</SectionLabel>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
                Discuss whether YBS is the right fit for your child or family.
              </h2>
            </div>
            <Link
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-navy px-6 text-sm font-semibold text-white transition hover:bg-[#102441]"
              href="/contact"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
