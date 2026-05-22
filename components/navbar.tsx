"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { SiteShell } from "@/components/site-shell";
import { navigationLinks } from "@/data/navigation";
import { siteConfig } from "@/data/site";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <SiteShell>
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="#home" className="text-sm font-semibold tracking-[0.28em] uppercase">
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground"
              onClick={() => setIsOpen((current) => !current)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-border/60 py-4 md:hidden">
            <nav className="flex flex-col gap-3" aria-label="Mobile primary">
              {navigationLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-2xl px-3 py-2 text-sm text-muted transition hover:bg-white/5 hover:text-foreground"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        ) : null}
      </SiteShell>
    </header>
  );
}
