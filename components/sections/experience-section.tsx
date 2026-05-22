import { experience } from '@/data/experience';
import { SiteShell } from '@/components/site-shell';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24">
      <SiteShell>
        <h2 className="text-3xl font-semibold">Experience</h2>
        <p className="mt-2 text-muted">A concise timeline of roles and accomplishments.</p>

        <div className="mt-8 flow-root">
          <ol className="-mb-8">
            {experience.map((exp) => (
              <li key={exp.id} className="relative pb-8">
                <div className="absolute left-0 top-2 -ml-1 flex h-2 w-2 items-center justify-center rounded-full bg-foreground" />
                <div className="ml-6">
                  <div className="flex items-baseline justify-between gap-4">
                    <h3 className="text-lg font-semibold">{exp.role}</h3>
                    <p className="text-sm text-muted">
                      {exp.start} — {exp.end ?? 'Present'}
                    </p>
                  </div>
                  <p className="mt-1 text-sm text-muted">{exp.company}</p>
                  {exp.summary ? <p className="mt-3 text-sm">{exp.summary}</p> : null}
                  {exp.bullets ? (
                    <ul className="mt-3 ml-4 list-disc text-sm">
                      {exp.bullets.map((b) => (
                        <li key={b}>{b}</li>
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
