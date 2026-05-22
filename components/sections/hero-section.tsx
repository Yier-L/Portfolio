"use client";

import { motion } from "framer-motion";
import { ArrowRight, Mail, FileDown } from "lucide-react";
import Link from "next/link";
import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/data/site";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 sm:pt-24 lg:pt-32">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-0 top-20 h-80 w-80 rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />
      </div>

      <SiteShell>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        >
          <div className="max-w-2xl">
            <motion.p variants={item} className="text-sm font-medium uppercase tracking-[0.3em] text-muted">
              {siteConfig.role}
            </motion.p>
            <motion.h1
              variants={item}
              className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            >
              {siteConfig.name}
            </motion.h1>
            <motion.p variants={item} className="mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl">
              {siteConfig.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:scale-[1.02]"
              >
                View Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground transition hover:border-white/30 hover:bg-white/5"
              >
                Contact
                <Mail className="h-4 w-4" />
              </Link>
              <Link
                href="/resume.pdf"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition hover:border-white/30 hover:bg-white/5"
              >
                Resume
                <FileDown className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-white/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-card p-8 shadow-2xl shadow-black/20 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-muted">Current focus</p>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight">Designing fast, accessible products</h2>
                </div>
                <div className="rounded-full border border-border px-3 py-1 text-xs text-muted">Available for select work</div>
              </div>

              <div className="mt-10 space-y-4">
                <div className="rounded-2xl border border-border/80 bg-background/60 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted">What I build</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/90">
                    Modern product experiences, design systems, and performance-minded frontend architecture.
                  </p>
                </div>
                <div className="rounded-2xl border border-border/80 bg-background/60 p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted">Where I work</p>
                  <p className="mt-2 text-sm leading-6 text-foreground/90">Remote-first teams with high standards for craft and velocity.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SiteShell>
    </section>
  );
}
