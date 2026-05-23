import { techCatalog } from "@/data/tech";
import { SiteShell } from "@/components/site-shell";

const categoryConfig = {
  languages: {
    label: "Languages",
    pill: "border-blue-500/30 bg-blue-500/10 text-blue-300",
    heading: "text-blue-400",
  },
  frameworks: {
    label: "Frameworks & Libraries",
    pill: "border-violet-500/30 bg-violet-500/10 text-violet-300",
    heading: "text-violet-400",
  },
  tools: {
    label: "Tools",
    pill: "border-emerald-500/30 bg-emerald-500/10 text-emerald-300",
    heading: "text-emerald-400",
  },
  cloud: {
    label: "Cloud / Infra",
    pill: "border-amber-500/30 bg-amber-500/10 text-amber-300",
    heading: "text-amber-400",
  },
} as const;

export function TechSection() {
  return (
    <section id="tech" className="py-24">
      <SiteShell>
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">02</p>
        <h2 className="mt-3 text-3xl font-semibold">Tech Stack</h2>
        <p className="mt-3 text-muted">Tools and technologies I use, grouped by category.</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {(Object.keys(categoryConfig) as Array<keyof typeof categoryConfig>).map((cat) => (
            <div
              key={cat}
              className="rounded-2xl border border-border/60 bg-card/50 p-5 backdrop-blur-sm"
            >
              <h3 className={`mb-4 text-xs font-semibold uppercase tracking-[0.22em] ${categoryConfig[cat].heading}`}>
                {categoryConfig[cat].label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {techCatalog[cat].map((item) => (
                  <span
                    key={item}
                    className={`rounded-full border px-3 py-1 text-xs font-medium ${categoryConfig[cat].pill}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </SiteShell>
    </section>
  );
}
