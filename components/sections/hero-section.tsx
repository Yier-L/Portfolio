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
    transition: { staggerChildren: 0.11, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28 lg:pt-32 lg:pb-36">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/4 rounded-full bg-blue-500/[0.13] blur-3xl" />
        <div className="absolute right-0 top-32 h-80 w-80 rounded-full bg-violet-500/[0.07] blur-3xl" />
        <div className="absolute bottom-1/2 left-0 h-80 w-80 rounded-full bg-indigo-500/[0.07] blur-3xl" />
      </div>

      <SiteShell>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        >
          {/* Left: text */}
          <div className="max-w-2xl">
            <motion.div
              variants={item}
              className="inline-flex items-center gap-2 rounded-full border border-blue-500/25 bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-blue-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-blue-400" />
              </span>
              {siteConfig.role}
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-5 text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
            >
              {siteConfig.name}
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lg leading-8 text-muted sm:text-xl"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div variants={item} className="mt-10 flex flex-wrap gap-3">
              <Link
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all duration-200 hover:scale-[1.03] hover:bg-blue-600"
              >
                View Work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-medium text-foreground backdrop-blur transition-all duration-200 hover:border-white/20 hover:bg-white/10"
              >
                Contact
                <Mail className="h-4 w-4" />
              </Link>
              <Link
                href="/resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-all duration-200 hover:border-white/20 hover:bg-white/5"
              >
                Resume
                <FileDown className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          {/* Right: info card */}
          <motion.div variants={item} className="relative">
            <div className="absolute -inset-1 rounded-[2.2rem] bg-gradient-to-br from-blue-500/20 via-violet-500/10 to-transparent blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-card p-7 shadow-2xl shadow-black/30 backdrop-blur-xl">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.28em] text-muted">Current focus</p>
                  <h2 className="mt-2 text-xl font-semibold leading-snug tracking-tight">
                    Designing fast,
                    <br />
                    accessible products
                  </h2>
                </div>
                <div className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Seeking internship
                </div>
              </div>

              {/* Stats row */}
              <div className="mt-6 grid grid-cols-3 gap-px rounded-xl border border-border/50 bg-border/20 overflow-hidden">
                {[
                  { label: "Year", value: "3rd" },
                  { label: "University", value: "UNSW" },
                  { label: "Location", value: "Sydney" },
                ].map((s) => (
                  <div key={s.label} className="bg-background/40 px-4 py-3">
                    <p className="text-xl font-semibold">{s.value}</p>
                    <p className="text-xs text-muted">{s.label}</p>
                  </div>
                ))}
              </div>

              {/* Info mini-cards */}
              <div className="mt-4 space-y-3">
                <div className="rounded-xl border border-border/50 bg-background/40 p-3.5">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">What I build</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">
                    Full-stack web apps, APIs, and side projects that solve real problems.
                  </p>
                </div>
                <div className="rounded-xl border border-border/50 bg-background/40 p-3.5">
                  <p className="text-xs uppercase tracking-[0.2em] text-muted">What I&apos;m looking for</p>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/85">
                    Software engineering internship — open to frontend, backend, or full-stack roles.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </SiteShell>
    </section>
  );
}
