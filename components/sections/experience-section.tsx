import { SiteShell } from "@/components/site-shell";

const courses = [
  { code: "COMP1531", name: "Software Engineering Fundamentals" },
  { code: "COMP2521", name: "Data Structures & Algorithms" },
  { code: "COMP3121", name: "Algorithms & Programming Techniques" },
];

const societies = [
  {
    org: "UNSW Management Society",
    role: "HR Subcommittee",
    period: "Feb 2026 — Present",
    bullets: [
      "Coordinated onboarding for 30+ new members, improving volunteer retention across events by 25%",
      "Led internal communications across events, philanthropy, and careers teams to streamline member engagement",
      "Organized two professional development workshops attended by 50+ students",
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="education" className="py-24">
      <SiteShell>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">02</p>
        <h2 className="mt-3 text-3xl font-semibold">Education</h2>
        <p className="mt-2 text-muted">Where I study and what I&apos;ve been learning.</p>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
          {/* Degree card */}
          <div className="rounded-2xl border border-border/60 bg-card/60 p-6 backdrop-blur-sm">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-blue-400">Current</p>
                <h3 className="mt-2 text-lg font-semibold">
                  Bachelor of Commerce &amp; Bachelor of Computer Science
                </h3>
                <p className="mt-1 text-sm text-muted">UNSW Sydney</p>
              </div>
              <span className="shrink-0 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted">
                2024 — 2027
              </span>
            </div>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {[
                { label: "Year", value: "3rd" },
                { label: "WAM", value: "Distinction" },
                { label: "Campus", value: "Kensington" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-border/50 bg-background/40 px-4 py-3"
                >
                  <p className="text-xs text-muted">{s.label}</p>
                  <p className="mt-0.5 text-base font-semibold">{s.value}</p>
                </div>
              ))}
            </div>

            <div className="mt-5">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">
                Relevant coursework
              </p>
              <ul className="mt-3 space-y-2">
                {courses.map((c) => (
                  <li key={c.code} className="flex items-baseline gap-3 text-sm">
                    <span className="shrink-0 font-mono text-xs font-semibold text-blue-400">
                      {c.code}
                    </span>
                    <span className="text-muted">{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Societies */}
          <div className="flex flex-col gap-5">
            {societies.map((s) => (
              <div
                key={s.org}
                className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-violet-400">
                      Society
                    </p>
                    <h4 className="mt-1.5 text-sm font-semibold">{s.org}</h4>
                    <p className="text-xs text-muted">{s.role}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border/60 bg-background/40 px-2.5 py-1 text-xs text-muted">
                    {s.period}
                  </span>
                </div>
                <ul className="mt-4 space-y-2">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-xs leading-relaxed text-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-violet-400" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </SiteShell>
    </section>
  );
}
