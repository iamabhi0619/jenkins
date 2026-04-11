export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_20%,rgba(16,185,129,0.18),transparent_35%),radial-gradient(circle_at_85%_15%,rgba(14,165,233,0.2),transparent_35%),radial-gradient(circle_at_45%_80%,rgba(99,102,241,0.2),transparent_45%)]" />

      <main className="relative mx-auto flex min-h-screen w-full max-w-5xl flex-col justify-center px-6 py-14 sm:px-10">
        <section className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl backdrop-blur-md sm:p-10">
          <p className="inline-flex rounded-full border border-emerald-300/40 bg-emerald-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-200">
            CI/CD Pipeline
          </p>

          <h1 className="mt-5 text-3xl font-semibold leading-tight sm:text-5xl">
            Ship code faster with a simple, reliable delivery flow.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            Automate every stage from commit to deployment. Build confidence with
            tests, approvals, and one-click releases.
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-4">
            {[
              { name: "Commit", detail: "Push code" },
              { name: "Build", detail: "Compile app" },
              { name: "Test", detail: "Validate quality" },
              { name: "Deploy", detail: "Release safely" },
            ].map((step, index) => (
              <article
                key={step.name}
                className="rounded-2xl border border-white/10 bg-slate-900/80 p-4 shadow-lg"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <p className="text-xs uppercase tracking-[0.18em] text-sky-300">
                  Step {index + 1}
                </p>
                <h2 className="mt-2 text-lg font-semibold">{step.name}</h2>
                <p className="mt-1 text-sm text-slate-400">{step.detail}</p>
              </article>
            ))}
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-xl bg-emerald-400 px-6 text-sm font-semibold text-slate-950 transition-transform duration-200 hover:-translate-y-0.5 hover:bg-emerald-300"
            >
              Start Pipeline
            </a>
            <a
              href="#"
              className="inline-flex h-11 items-center justify-center rounded-xl border border-slate-400/40 px-6 text-sm font-semibold text-slate-100 transition-colors duration-200 hover:bg-white/10"
            >
              View Docs
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
