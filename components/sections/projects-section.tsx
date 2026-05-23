"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import { SiteShell } from "@/components/site-shell";
import { motion } from "framer-motion";
import { ExternalLink, GitBranch } from "lucide-react";

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
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">04</p>
            <h2 className="mt-3 text-3xl font-semibold">Projects</h2>
            <p className="mt-2 text-muted">Selected projects with tech tags and quick links.</p>
          </div>

          <div
            className="flex gap-2 overflow-x-auto pb-0.5"
            role="group"
            aria-label="Project filters"
          >
            <button
              onClick={() => setActiveTag(null)}
              aria-pressed={!activeTag}
              aria-label="Show all projects"
              className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                !activeTag
                  ? "bg-foreground text-background"
                  : "border border-border text-muted hover:text-foreground"
              }`}
            >
              All
            </button>
            {allTags.map((t) => (
              <button
                key={t}
                onClick={() => setActiveTag((c) => (c === t ? null : t))}
                aria-pressed={activeTag === t}
                aria-label={`Filter by ${t}`}
                className={`shrink-0 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  activeTag === t
                    ? "bg-foreground text-background"
                    : "border border-border text-muted hover:text-foreground"
                }`}
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
              className="group flex flex-col overflow-hidden rounded-2xl border border-border/70 bg-card backdrop-blur-sm transition-all duration-200 hover:border-white/15 hover:shadow-lg hover:shadow-black/20"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              {/* Image / placeholder */}
              <div className="relative h-44 w-full overflow-hidden bg-gradient-to-br from-blue-500/10 via-violet-500/5 to-indigo-500/10">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(min-width: 1024px) 33vw, 50vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-5xl font-bold text-foreground/10 select-none">
                    {p.title.charAt(0)}
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-5">
                <h3 className="text-base font-semibold">{p.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{p.description}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-border/60 bg-background/50 px-2.5 py-0.5 text-xs text-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="mt-4 flex items-center gap-4 border-t border-border/40 pt-4">
                  {p.repo ? (
                    <a
                      href={p.repo}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`GitHub repository for ${p.title}`}
                      className="flex items-center gap-1.5 text-xs text-muted transition hover:text-foreground"
                    >
                      <GitBranch className="h-3.5 w-3.5" />
                      Repo
                    </a>
                  ) : null}
                  {p.live ? (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Live demo for ${p.title}`}
                      className="flex items-center gap-1.5 text-xs text-muted transition hover:text-foreground"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      Live
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </SiteShell>
    </section>
  );
}
