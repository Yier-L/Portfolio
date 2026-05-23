import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { skills } from "@/data/skills";
import { siteConfig } from "@/data/site";

const stats = [
  { label: "Year", value: "3rd" },
  { label: "Degree", value: "CS + Comm" },
  { label: "Location", value: "Sydney" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <SiteShell>
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">01</p>
            <h2 className="mt-3 text-3xl font-semibold">About</h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted">
              I&apos;m {siteConfig.name}, a 3rd year university student at UNSW studying a double degree: Bachelor of Commerce/Computer Science.
              I&apos;m passionate about creating projects to solve issues for the web and
              applying my skills in technology and commercial business in a cohesive, holistic way.
            </p>
            <p className="mt-3 max-w-xl text-base leading-7 text-muted">
              I prefer full-stack developement, from designing clean interfaces to wiring up
              APIs and databases. Currently looking for a software engineering internship where I can
              contribute, learn, and grow professionally.
            </p>

            {/* Stats */}
            <div className="mt-8 flex flex-wrap gap-6">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="text-2xl font-semibold">{s.value}</p>
                  <p className="mt-0.5 text-xs text-muted">{s.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Tech I work with</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {Object.values(skills).flatMap((arr) => arr).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border/70 bg-card/60 px-3 py-1 text-sm text-muted backdrop-blur-sm"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent blur-2xl" />
              <div className="relative rounded-3xl border border-white/10 bg-card p-5 shadow-xl shadow-black/20 backdrop-blur-sm">
                <Image
                  src="/images/avatar.svg"
                  alt={siteConfig.name}
                  width={240}
                  height={240}
                  className="rounded-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </SiteShell>
    </section>
  );
}
