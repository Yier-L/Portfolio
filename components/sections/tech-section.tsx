import { techCatalog } from "@/data/tech";
import { SiteShell } from "@/components/site-shell";

export function TechSection() {
  return (
    <section id="tech" className="py-24">
      <SiteShell>
        <div>
          <h2 className="text-3xl font-semibold">Tech Stack</h2>
          <p className="mt-3 text-muted">Tools and technologies I use grouped by category.</p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="text-sm font-medium uppercase text-muted">Languages</h3>
              <ul className="mt-4 space-y-2">
                {techCatalog.languages.map((l) => (
                  <li key={l} className="rounded-md border border-border/60 bg-card/50 px-3 py-2 text-sm">
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase text-muted">Frameworks</h3>
              <ul className="mt-4 space-y-2">
                {techCatalog.frameworks.map((l) => (
                  <li key={l} className="rounded-md border border-border/60 bg-card/50 px-3 py-2 text-sm">
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase text-muted">Tools</h3>
              <ul className="mt-4 space-y-2">
                {techCatalog.tools.map((l) => (
                  <li key={l} className="rounded-md border border-border/60 bg-card/50 px-3 py-2 text-sm">
                    {l}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-medium uppercase text-muted">Cloud / Infra</h3>
              <ul className="mt-4 space-y-2">
                {techCatalog.cloud.map((l) => (
                  <li key={l} className="rounded-md border border-border/60 bg-card/50 px-3 py-2 text-sm">
                    {l}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </SiteShell>
    </section>
  );
}
