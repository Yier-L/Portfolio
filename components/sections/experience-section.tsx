import { experience } from "@/data/experience";
import { SiteShell } from "@/components/site-shell";

function formatDate(ym: string) {
  if (!ym || ym === "Present") return ym;
  const [year, month] = ym.split("-");
  return new Date(Number(year), Number(month) - 1).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  });
}

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <SiteShell>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">03</p>
        <h2 className="mt-3 text-3xl font-semibold">Experience</h2>
        <p className="mt-2 text-muted">A concise timeline of roles and accomplishments.</p>

        <div className="mt-10 ml-2 border-l border-border/50">
          <ol className="space-y-8">
            {experience.map((exp) => (
              <li key={exp.id} className="relative pl-8">
                {/* Timeline dot */}
                <span className="absolute -left-[9px] top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-background ring-2 ring-blue-500/50">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                </span>

                {/* Card */}
                <div className="rounded-2xl border border-border/60 bg-card/60 p-5 backdrop-blur-sm">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                    <div>
                      <h3 className="text-base font-semibold">{exp.role}</h3>
                      <p className="mt-0.5 text-sm font-medium text-muted">{exp.company}</p>
                    </div>
                    <p className="shrink-0 rounded-full border border-border/60 bg-background/40 px-3 py-1 text-xs text-muted">
                      {formatDate(exp.start)} — {exp.end ? (exp.end === "Present" ? "Present" : formatDate(exp.end)) : "Present"}
                    </p>
                  </div>

                  {exp.summary ? (
                    <p className="mt-3 text-sm leading-relaxed text-foreground/75">{exp.summary}</p>
                  ) : null}

                  {exp.bullets ? (
                    <ul className="mt-3 space-y-1.5">
                      {exp.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2 text-sm text-foreground/75">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </SiteShell>
    </section>
  );
}
