"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message is too short"),
});

type ContactForm = z.infer<typeof contactSchema>;

export function ContactSection() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });
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
      // simple UX feedback
      setStatus("Message sent — thank you!");
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : String(err);
      setStatus(message || "An error occurred");
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-semibold">Contact</h2>
        <p className="mt-2 text-muted">Get in touch — I typically respond within a few days.</p>

        <form onSubmit={handleSubmit(onSubmit)} className="mt-8 grid gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <label className="flex flex-col">
              <span className="text-sm text-muted">Name</span>
              <input className="mt-1 rounded-md border border-border bg-card px-3 py-2" {...register("name")} />
              {errors.name ? <span className="mt-1 text-xs text-red-400">{errors.name.message}</span> : null}
            </label>

            <label className="flex flex-col">
              <span className="text-sm text-muted">Email</span>
              <input className="mt-1 rounded-md border border-border bg-card px-3 py-2" {...register("email")} />
              {errors.email ? <span className="mt-1 text-xs text-red-400">{errors.email.message}</span> : null}
            </label>
          </div>

          <label className="flex flex-col">
            <span className="text-sm text-muted">Subject (optional)</span>
            <input className="mt-1 rounded-md border border-border bg-card px-3 py-2" {...register("subject")} />
          </label>

          <label className="flex flex-col">
            <span className="text-sm text-muted">Message</span>
            <textarea rows={6} className="mt-1 rounded-md border border-border bg-card px-3 py-2" {...register("message")} />
            {errors.message ? <span className="mt-1 text-xs text-red-400">{errors.message.message}</span> : null}
          </label>

          <div className="mt-4 flex items-center gap-3">
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background disabled:opacity-60"
            >
              {isSubmitting ? "Sending…" : "Send message"}
            </button>

            {isSubmitSuccessful ? (
              <span className="text-sm text-muted">Thanks — I&apos;ll reply soon.</span>
            ) : null}
          </div>
          {status ? (
            <div role="status" aria-live="polite" className="mt-3 text-sm">
              {status}
            </div>
          ) : null}
        </form>
      </div>
    </section>
  );
}
