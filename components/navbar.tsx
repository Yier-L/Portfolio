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
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <SiteShell>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link
            href="#home"
            className="text-sm font-bold uppercase tracking-[0.28em] transition hover:opacity-70"
          >
            {siteConfig.name}
          </Link>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
            {navigationLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
          </div>

          <div className="flex items-center gap-2 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/70 bg-card text-foreground transition hover:border-border"
              onClick={() => setIsOpen((c) => !c)}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="border-t border-border/50 py-3 md:hidden">
            <nav className="flex flex-col gap-1" aria-label="Mobile primary">
              {navigationLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-3 py-2.5 text-sm text-muted transition-colors hover:bg-white/5 hover:text-foreground"
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
