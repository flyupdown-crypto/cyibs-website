const highlights = [
  "Next.js App Router",
  "TypeScript-ready",
  "Tailwind CSS styling",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center px-6 py-16 sm:px-10">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">
            CYIBS Website
          </p>
          <h1 className="mt-5 text-5xl font-semibold leading-tight text-white sm:text-7xl">
            A clean foundation for the next chapter.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            This project is now initialized with Next.js, TypeScript, Tailwind
            CSS, and the App Router so the CYIBS site can grow from a modern,
            production-ready base.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          {highlights.map((highlight) => (
            <div
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 text-sm font-medium text-slate-100"
              key={highlight}
            >
              {highlight}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
