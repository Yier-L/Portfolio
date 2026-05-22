"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { SiteShell } from "@/components/site-shell";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const allTags = useMemo(() => {
    const s = new Set<string>();
    projects.forEach((p) => p.tags?.forEach((t) => s.add(t)));
    return Array.from(s);
  }, []);

  const [activeTag, setActiveTag] = useState<string | null>(null);

  const visible = projects.filter((p) => (activeTag ? p.tags?.includes(activeTag) : true));

  return (
    <section id="projects" className="py-24">
      <SiteShell>
        <div>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-3xl font-semibold">Projects</h2>
              <p className="mt-2 text-muted">Selected projects with tech tags and quick links.</p>
            </div>

            <div className="flex gap-2" role="group" aria-label="Project filters">
              <button
                onClick={() => setActiveTag(null)}
                aria-pressed={!activeTag}
                aria-label="Show all projects"
                className={`rounded-full px-3 py-1 text-sm ${activeTag ? "border border-border" : "bg-foreground text-background"}`}
              >
                All
              </button>
              {allTags.map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTag((c) => (c === t ? null : t))}
                  aria-pressed={activeTag === t}
                  aria-label={`Filter projects by ${t}`}
                  className={`rounded-full px-3 py-1 text-sm ${activeTag === t ? "bg-foreground text-background" : "border border-border"}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>

          <motion.div layout className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" role="list">
            {visible.map((p) => (
              <motion.article
                layout
                key={p.id}
                role="listitem"
                className="rounded-2xl border border-border bg-card p-4 hover:scale-[1.01]"
                whileHover={{ y: -6 }}
              >
                <div className="relative mb-4 h-40 w-full overflow-hidden rounded-lg bg-zinc-800">
                  {p.image ? (
                    <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 33vw, 50vw" />
                  ) : null}
                </div>

                <h3 id={`heading-${p.id}`} className="text-lg font-semibold">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-muted">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-2" aria-hidden>
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex gap-3">
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted underline"
                      aria-label={`Repository for ${p.title}`}
                    >
                      Repo
                    </a>
                  ) : null}
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-muted underline"
                      aria-label={`Live demo for ${p.title}`}
                    >
                      Live
                    </a>
                  ) : null}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </SiteShell>
    </section>
  );
}
