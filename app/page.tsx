import Image from "next/image";
import type { ReactNode } from "react";

const whyYbs = [
  {
    title: "Cambridge-based learning",
    text: "Students learn in one of the world’s most recognised academic cities, with a tone shaped by British educational seriousness.",
  },
  {
    title: "Real business exposure",
    text: "Classroom learning is connected with business cases, founder dialogue, enterprise visits, and practical commercial reasoning.",
  },
  {
    title: "Global leadership mindset",
    text: "The programme develops communication, confidence, and strategic thinking for international environments.",
  },
  {
    title: "AI and future skills",
    text: "Technology, innovation, and AI are explored as forces reshaping business leadership, not as surface-level decoration.",
  },
];

const programmeModules = [
  "Business Strategy",
  "Entrepreneurship",
  "AI & Innovation",
  "Leadership Communication",
  "Presentation Skills",
  "University & Career Pathway Reflection",
];

const journey = [
  {
    stage: "14-16",
    title: "Business Discovery",
    text: "Students build commercial vocabulary, confidence, and curiosity through structured exposure to business ideas.",
  },
  {
    stage: "16-18",
    title: "Leadership & Innovation",
    text: "Older students practise strategic communication, innovation thinking, and collaborative decision-making.",
  },
  {
    stage: "18+",
    title: "Global Business Pathways",
    text: "The pathway extends toward university readiness, entrepreneurship, and long-term international direction.",
  },
];

const network = [
  "Academic-style seminars and guided discussion",
  "Founder, investor, and enterprise perspectives",
  "Online and offline learning touchpoints",
  "Multilingual access for international families",
];

const pathways = [
  "Long-term academic and business leadership pathway",
  "Future online and offline learning ecosystem",
  "International collaboration and cultural fluency",
  "Scalable platform vision for future global campuses",
];

const trustSignals = [
  "CAMBRIDGE YOUTH INTERNATIONAL BUSINESS SCHOOL LTD",
  "Company number: 17210929",
  "English primary · Chinese secondary",
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

function ConsultationButton({
  children = "Book Consultation",
  variant = "primary",
}: {
  children?: ReactNode;
  variant?: "primary" | "secondary" | "dark";
}) {
  const styles = {
    primary:
      "bg-warm-white text-navy shadow-[0_18px_48px_rgba(114,200,255,0.18)] hover:bg-white",
    secondary:
      "border border-white/20 text-warm-white hover:border-sky-300/60 hover:text-white",
    dark: "bg-navy text-white hover:bg-[#102441]",
  };

  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-semibold transition ${styles[variant]}`}
      href="#consultation"
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-navy text-warm-white">
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-navy/86 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <a className="flex min-w-0 items-center gap-3" href="#top" aria-label="YBS home">
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
          </a>

          <div className="hidden items-center gap-8 text-sm text-white/68 lg:flex">
            <a className="hover:text-white" href="#why">
              Why YBS
            </a>
            <a className="hover:text-white" href="#programme">
              Programme
            </a>
            <a className="hover:text-white" href="#journey">
              Journey
            </a>
            <a className="hover:text-white" href="#network">
              Network
            </a>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              aria-label="Chinese language placeholder"
              className="h-10 rounded-full border border-white/14 px-3 text-xs font-semibold uppercase tracking-[0.14em] text-white/72 sm:px-4"
              type="button"
            >
              EN / 中文
            </button>
            <div className="hidden md:block">
              <ConsultationButton />
            </div>
          </div>
        </nav>
      </header>

      <section
        aria-labelledby="hero-title"
        className="relative min-h-screen border-b border-white/8 pt-20"
        id="top"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_25%,rgba(88,178,255,0.20),transparent_27%),linear-gradient(115deg,rgba(4,13,29,1)_0%,rgba(8,30,58,0.96)_45%,rgba(5,13,29,1)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-navy to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.02fr_0.98fr] lg:px-10">
          <div className="max-w-4xl">
            <SectionLabel>Cambridge Summer Business Leadership Programme</SectionLabel>
            <h1
              className="mt-6 max-w-4xl text-4xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl"
              id="hero-title"
            >
              A future business education for globally minded young leaders.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-xl">
              YBS is a Cambridge-based international business and leadership
              academy for young talents seeking global perspective,
              entrepreneurial thinking, and future-ready skills.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ConsultationButton />
              <ConsultationButton variant="secondary">Explore Programme</ConsultationButton>
            </div>
            <div className="mt-8 grid gap-3 text-xs leading-6 text-white/50 sm:grid-cols-3">
              {trustSignals.map((signal) => (
                <p className="border-t border-white/12 pt-3" key={signal}>
                  {signal}
                </p>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[34rem] lg:block">
            <div className="absolute inset-0 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_42px_120px_rgba(0,0,0,0.34)]">
              <div className="relative h-full overflow-hidden rounded-[1.25rem] border border-white/8 bg-[linear-gradient(150deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02)),radial-gradient(circle_at_68%_20%,rgba(114,200,255,0.24),transparent_34%)] p-8">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/52">
                  <span>Global platform</span>
                  <span>Cambridge base</span>
                </div>
                <div className="mt-20 max-w-sm border-l border-sky-200/32 pl-7">
                  <p className="text-5xl font-semibold text-white">YBS</p>
                  <p className="mt-3 text-sm leading-6 text-white/64">
                    A scalable learning ecosystem connecting business education,
                    leadership development, and international family ambition.
                  </p>
                </div>
                <div className="absolute bottom-10 left-8 right-8 grid gap-3">
                  {["Cambridge-based summer learning", "Future online + offline pathways", "Multilingual global access"].map(
                    (item) => (
                      <div
                        className="flex items-center justify-between border-b border-white/10 py-3 text-sm text-white/78"
                        key={item}
                      >
                        <span>{item}</span>
                        <span className="h-2 w-2 rounded-full bg-sky-300" />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32" id="why">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr]">
          <div>
            <SectionLabel>Why YBS</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-5xl">
              An international institution in the making, not a short-term course brand.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/58">
              The homepage begins with the summer programme, but the wider YBS
              direction is a long-term academic and business leadership pathway.
            </p>
          </div>
          <div className="grid gap-x-8 gap-y-10 md:grid-cols-2">
            {whyYbs.map((reason) => (
              <article className="border-t border-white/14 pt-7" key={reason.title}>
                <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
                <p className="mt-4 text-sm leading-7 text-white/62">{reason.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="programme-title"
        className="border-y border-white/8 bg-warm-white text-navy"
        id="programme"
      >
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.95fr_1.05fr] lg:px-10 lg:py-32">
          <div>
            <SectionLabel tone="navy">Programme</SectionLabel>
            <h2
              className="mt-5 text-4xl font-semibold leading-tight text-navy sm:text-6xl"
              id="programme-title"
            >
              Cambridge Summer Business Leadership Programme
            </h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-navy/72">
              The programme combines business learning, leadership workshops,
              communication practice, academic immersion, and cultural experience
              into a coherent summer pathway for internationally minded students.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {programmeModules.map((item) => (
                <div
                  className="border-l border-sky-500/35 pl-5 text-base font-semibold text-navy"
                  key={item}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32" id="journey">
        <div className="mb-12 flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <SectionLabel>Student Journey</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl">
              A pathway that can grow with the student.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/60">
            The journey is structured around age, maturity, and international
            readiness, giving families a clearer long-term view.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-3">
          {journey.map((item) => (
            <div className="bg-navy p-7 sm:p-9" key={item.title}>
              <p className="text-sm text-sky-300">{item.stage}</p>
              <h3 className="mt-7 text-2xl font-semibold leading-snug text-white">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-white/58">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="relative border-y border-white/8 bg-[#071326] px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32"
        id="network"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(67,170,255,0.12),transparent_26%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionLabel>Academic & Industry Network</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl">
              A connected learning model for international families.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
              YBS presents learning as a network: academic-style discussion,
              industry-informed exposure, multilingual access, and future online
              and offline touchpoints.
            </p>
          </div>
          <div className="grid gap-2">
            {network.map((item) => (
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

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <SectionLabel>Future Pathways</SectionLabel>
            <h2 className="mt-5 text-4xl font-semibold leading-tight text-white sm:text-6xl">
              A platform-oriented vision beyond one summer.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/58">
              The current programme is the first visible doorway into a broader
              educational ecosystem for globally mobile families.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {pathways.map((item) => (
              <div className="min-h-44 rounded-sm border border-white/10 bg-white/[0.035] p-7" key={item}>
                <h3 className="text-2xl font-semibold leading-snug text-white">{item}</h3>
                <p className="mt-5 text-sm leading-7 text-white/58">
                  Expressed as a direction of travel, with careful language and
                  no inflated guarantees.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 sm:px-8 lg:px-10" id="consultation">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[1.75rem] bg-warm-white px-6 py-14 text-navy sm:px-10 sm:py-16 lg:px-16 lg:py-24">
          <div className="grid gap-9 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <SectionLabel tone="navy">Begin the conversation</SectionLabel>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
                Start with a private consultation to understand whether YBS is the right fit.
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-navy/62">
                A consultation can clarify student goals, family expectations,
                language needs, and the appropriate entry point into the YBS
                learning pathway.
              </p>
            </div>
            <ConsultationButton variant="dark" />
          </div>
        </div>
      </section>
    </main>
  );
}
