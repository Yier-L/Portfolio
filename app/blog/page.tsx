import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

const title = `Blog — ${siteConfig.name}`;

export const metadata: Metadata = {
  title,
  openGraph: {
    title,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/og?title=${encodeURIComponent(title)}`,
      },
    ],
  },
};

export default function BlogIndex() {
  const posts = [
    {
      title: "Shipping faster with small experiments",
      href: "/blog/sample",
      date: "2026-05-22",
      readingTime: "2 min",
      tags: ["product", "experiments"],
    },
  ];

  return (
    <main id="content">
      <section className="py-20">
        <SiteShell>
          <h1 className="text-3xl font-semibold">Blog</h1>
          <p className="mt-2 text-muted">Thoughts on product, engineering, and front-end craft.</p>

          <div className="mt-8 grid gap-6">
            {posts.map((p) => (
              <article key={p.href} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h2 className="text-lg font-semibold">
                      <Link href={p.href}>{p.title}</Link>
                    </h2>
                    <p className="mt-2 text-sm text-muted">
                      {p.date} • {p.readingTime}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </SiteShell>
      </section>
    </main>
  );
}
