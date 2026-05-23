import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10">
      <SiteShell>
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em]">{siteConfig.name}</p>
            <p className="mt-1 text-xs text-muted">
              © {new Date().getFullYear()} — Built with Next.js, Tailwind &amp; Framer Motion.
            </p>
          </div>
          <div className="flex flex-wrap gap-5">
            {siteConfig.socialLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-muted transition hover:text-foreground"
                target="_blank"
                rel="noreferrer"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </SiteShell>
    </footer>
  );
}
