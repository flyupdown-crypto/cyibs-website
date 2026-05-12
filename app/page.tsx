import Image from "next/image";
import type { ReactNode } from "react";

const whyYbs = [
  {
    title: "Business school discipline",
    text: "Students practise strategy, decision-making, leadership communication, and commercial reasoning in a mature setting.",
  },
  {
    title: "British academic atmosphere",
    text: "The experience is shaped by quiet confidence, intellectual seriousness, and the cultural expectations of elite education.",
  },
  {
    title: "Future-ready perspective",
    text: "AI and innovation are explored as practical forces changing companies, careers, and family enterprise decisions.",
  },
];

const programmePillars = [
  "Case-led business learning",
  "Leadership communication",
  "Entrepreneurial challenge lab",
  "AI and innovation perspective",
];

const journey = [
  {
    step: "01",
    title: "Arrival & Orientation",
    text: "Students enter a composed international environment and begin with shared expectations.",
  },
  {
    step: "02",
    title: "Leadership Foundations",
    text: "Workshops develop confidence, listening, structured thinking, and persuasive communication.",
  },
  {
    step: "03",
    title: "Business Challenge Lab",
    text: "Small groups analyse commercial problems and turn ideas into clear strategic choices.",
  },
  {
    step: "04",
    title: "Academic Immersion",
    text: "Students engage with a Cambridge setting while avoiding inflated institutional claims.",
  },
  {
    step: "05",
    title: "Industry Dialogue",
    text: "Founder, investor, and business perspectives help students connect theory to reality.",
  },
  {
    step: "06",
    title: "Final Presentation",
    text: "The programme closes with a polished presentation and reflection on future pathways.",
  },
];

const network = [
  "Academic-style seminars and guided discussion",
  "Entrepreneurship and family business perspectives",
  "Industry-informed workshops and case practice",
  "Mentoring moments for personal direction",
];

const pathways = [
  "Greater leadership confidence",
  "A stronger global education profile",
  "Sharper entrepreneurial judgement",
  "Commercial awareness for the AI era",
];

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-sky-300">
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
      <header className="fixed left-0 right-0 top-0 z-50 border-b border-white/8 bg-navy/82 backdrop-blur-xl">
        <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-5 sm:px-8 lg:px-10">
          <a className="flex min-w-0 items-center gap-3" href="#top" aria-label="YBS home">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-sm border border-white/12 bg-white">
              <Image
                alt="YBS"
                className="h-full w-full object-contain p-1.5"
                height={44}
                src="/logo/ybs-logo.png"
                width={44}
              />
            </span>
            <span className="min-w-0 text-sm leading-tight text-white">
              <span className="block font-semibold">YBS</span>
              <span className="hidden text-white/58 sm:block">
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_74%_24%,rgba(88,178,255,0.22),transparent_28%),linear-gradient(115deg,rgba(4,13,29,0.99)_0%,rgba(8,31,61,0.94)_45%,rgba(5,13,29,1)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-navy to-transparent" />
        <div className="relative mx-auto grid min-h-[calc(100vh-5rem)] max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:px-10">
          <div className="max-w-4xl">
            <SectionLabel>Cambridge Summer Business Leadership Programme</SectionLabel>
            <h1
              className="mt-6 max-w-4xl text-4xl font-semibold leading-none text-white sm:text-6xl lg:text-7xl"
              id="hero-title"
            >
              Business leadership for globally minded young people.
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/72 sm:text-xl">
              YBS is a premium summer programme for European Chinese entrepreneur
              families seeking a thoughtful bridge between business education,
              British academic culture, and the future of AI-enabled enterprise.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ConsultationButton />
              <ConsultationButton variant="secondary">Explore Programme</ConsultationButton>
            </div>
            <p className="mt-7 max-w-xl text-xs leading-6 text-white/48">
              Delivered as an independent youth business programme in a Cambridge
              context. No official university affiliation is implied.
            </p>
          </div>

          <div className="relative hidden min-h-[32rem] lg:block">
            <div className="absolute inset-0 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 shadow-[0_42px_120px_rgba(0,0,0,0.34)]">
              <div className="relative h-full overflow-hidden rounded-[1.25rem] border border-white/8 bg-[linear-gradient(150deg,rgba(255,255,255,0.10),rgba(255,255,255,0.02)),radial-gradient(circle_at_70%_20%,rgba(114,200,255,0.24),transparent_34%)] p-8">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-white/52">
                  <span>Leadership Lab</span>
                  <span>Summer</span>
                </div>
                <div className="mt-24 max-w-sm border-l border-sky-200/32 pl-7">
                  <p className="text-5xl font-semibold text-white">12</p>
                  <p className="mt-3 text-sm leading-6 text-white/64">
                    days of strategy, communication, innovation, founder
                    dialogue, and future pathway reflection.
                  </p>
                </div>
                <div className="absolute bottom-10 left-8 right-8 grid gap-3">
                  {["Business judgement", "AI-era awareness", "Boardroom confidence"].map(
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
              A quieter, more serious standard for youth business education.
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
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
            <SectionLabel>Programme</SectionLabel>
            <h2
              className="mt-5 text-4xl font-semibold leading-tight text-navy sm:text-6xl"
              id="programme-title"
            >
              Cambridge Summer Business Leadership Programme
            </h2>
          </div>
          <div>
            <p className="text-lg leading-9 text-navy/72">
              Designed for ambitious secondary-school students, the programme
              blends business cases, leadership practice, innovation discussion,
              and final presentation work into a refined summer journey.
            </p>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {programmePillars.map((item) => (
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
              Built to develop composure, judgement, and direction.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/60">
            Each stage moves students from observation to participation, then
            from participation to clear presentation.
          </p>
        </div>
        <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-2 xl:grid-cols-3">
          {journey.map((item) => (
            <div className="bg-navy p-7 sm:p-9" key={item.title}>
              <p className="text-sm text-sky-300">{item.step}</p>
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
              Trusted inputs without exaggerated promises.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/60">
              The programme uses carefully selected academic-style and
              industry-informed learning moments to help students think beyond
              classroom performance.
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
              Preparation that continues after the summer.
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {pathways.map((item) => (
              <div className="min-h-40 rounded-sm border border-white/10 bg-white/[0.035] p-7" key={item}>
                <h3 className="text-2xl font-semibold leading-snug text-white">{item}</h3>
                <p className="mt-5 text-sm leading-7 text-white/58">
                  Built through structured discussion, practical challenge, and
                  reflective guidance rather than inflated guarantees.
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
              <SectionLabel>Begin the conversation</SectionLabel>
              <h2 className="mt-5 max-w-4xl text-4xl font-semibold leading-tight sm:text-6xl">
                Discuss whether YBS is the right summer step for your family.
              </h2>
              <p className="mt-6 max-w-2xl text-sm leading-7 text-navy/62">
                A consultation can clarify student fit, learning goals, and the
                kind of business leadership experience that feels appropriate.
              </p>
            </div>
            <ConsultationButton variant="dark" />
          </div>
        </div>
      </section>
    </main>
  );
}
