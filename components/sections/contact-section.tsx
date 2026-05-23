"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/data/site";
import { Mail, MapPin, Send } from "lucide-react";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message is too short"),
});

type ContactForm = z.infer<typeof contactSchema>;

const inputClass =
  "rounded-lg border border-border/70 bg-background/60 px-3 py-2.5 text-sm outline-none transition duration-150 focus:border-blue-500/60 focus:ring-1 focus:ring-blue-500/25 placeholder:text-muted/50";

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactForm>({ resolver: zodResolver(contactSchema) });
  const [status, setStatus] = React.useState<string | null>(null);

  async function onSubmit(values: ContactForm) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message");
      }
      reset();
      setStatus("Message sent — thank you!");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setStatus(message || "An error occurred");
    }
  }

  const isSuccess = status?.includes("thank");

  return (
    <section id="contact" className="py-24">
      <SiteShell>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:items-start">
          {/* Left: info */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.3em] text-blue-400">05</p>
            <h2 className="mt-3 text-3xl font-semibold">Contact</h2>
            <p className="mt-3 text-muted">
              Get in touch — I typically respond within a few days.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 bg-card">
                  <Mail className="h-4 w-4 text-muted" />
                </div>
                <div>
                  <p className="text-xs text-muted">Email</p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-sm transition hover:text-blue-400"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border/70 bg-card">
                  <MapPin className="h-4 w-4 text-muted" />
                </div>
                <div>
                  <p className="text-xs text-muted">Location</p>
                  <p className="text-sm">{siteConfig.location}</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted">Elsewhere</p>
              <div className="mt-3 flex flex-col gap-2">
                {siteConfig.socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-1 text-sm text-muted transition hover:text-foreground"
                  >
                    {link.label}
                    <span className="transition-transform duration-150 group-hover:translate-x-0.5">→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right: form card */}
          <div className="rounded-2xl border border-border/60 bg-card/70 p-6 backdrop-blur-sm">
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">Name</span>
                  <input className={inputClass} {...register("name")} />
                  {errors.name ? (
                    <span className="text-xs text-red-400">{errors.name.message}</span>
                  ) : null}
                </label>

                <label className="flex flex-col gap-1.5">
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">Email</span>
                  <input type="email" className={inputClass} {...register("email")} />
                  {errors.email ? (
                    <span className="text-xs text-red-400">{errors.email.message}</span>
                  ) : null}
                </label>
              </div>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">
                  Subject{" "}
                  <span className="normal-case tracking-normal text-muted/60">(optional)</span>
                </span>
                <input className={inputClass} {...register("subject")} />
              </label>

              <label className="flex flex-col gap-1.5">
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted">Message</span>
                <textarea
                  rows={5}
                  className={`${inputClass} resize-none`}
                  {...register("message")}
                />
                {errors.message ? (
                  <span className="text-xs text-red-400">{errors.message.message}</span>
                ) : null}
              </label>

              <div className="flex items-center gap-3 pt-1">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-medium text-background transition-all duration-200 hover:scale-[1.02] hover:opacity-90 disabled:opacity-60"
                >
                  {isSubmitting ? "Sending…" : "Send message"}
                  <Send className="h-3.5 w-3.5" />
                </button>

                {isSubmitSuccessful && !status?.startsWith("An error") ? (
                  <span className="text-sm text-emerald-400">Thanks — I&apos;ll reply soon.</span>
                ) : null}
              </div>

              {status ? (
                <div
                  role="status"
                  aria-live="polite"
                  className={`rounded-lg px-3 py-2.5 text-sm ${
                    isSuccess
                      ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
                      : "border border-red-500/20 bg-red-500/10 text-red-400"
                  }`}
                >
                  {status}
                </div>
              ) : null}
            </form>
          </div>
        </div>
      </SiteShell>
    </section>
  );
}
