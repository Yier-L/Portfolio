import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <SiteShell>
        <div className="flex flex-col gap-4 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js, Tailwind, and Framer Motion.
          </p>
          <div className="flex flex-wrap gap-4">
            {siteConfig.socialLinks.map((link) => (
              <Link key={link.label} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </SiteShell>
    </footer>
  );
}
