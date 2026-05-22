import Image from "next/image";
import { SiteShell } from "@/components/site-shell";
import { skills } from "@/data/skills";
import { siteConfig } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <SiteShell>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-semibold">About</h2>
            <p className="mt-4 max-w-xl text-lg leading-7 text-muted">
              Hello — I&apos;m {siteConfig.name}, a software engineer focused on building polished,
              accessible, and high-performance web applications. I enjoy working end-to-end,
              from product thinking and design systems to shipping fast, maintainable frontend
              architecture.
            </p>

            <div className="mt-6 space-y-4">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">Current focus</p>
              <p className="text-base">Design systems, performance optimization, and developer experience.</p>
            </div>

            <div className="mt-8">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted">Tech I work with</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {Object.entries(skills).flatMap(([, arr]) => arr as string[]).map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-3 py-1 text-sm text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="order-1 flex items-center justify-center lg:order-2">
            <div className="rounded-3xl border border-border bg-card p-6">
              <Image
                src="/images/avatar.svg"
                alt="Yier Liao"
                width={220}
                height={220}
                className="rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </SiteShell>
    </section>
  );
}
