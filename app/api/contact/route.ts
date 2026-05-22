import { z } from "zod";
import fs from "fs/promises";
import path from "path";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  subject: z.string().optional(),
  message: z.string().min(1),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);

    const resendKey = process.env.RESEND_API_KEY;
    const contactTo = process.env.CONTACT_TO_EMAIL;
    const contactFrom = process.env.CONTACT_FROM_EMAIL || "no-reply@example.com";

    if (resendKey && contactTo) {
      // send via Resend
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: contactFrom,
          to: contactTo,
          subject: `[Portfolio contact] ${data.subject || "New message"}`,
          html: `<p><strong>Name:</strong> ${data.name}</p><p><strong>Email:</strong> ${data.email}</p><p><strong>Message:</strong><br/>${data.message}</p>`,
        }),
      });

      if (!res.ok) {
        const txt = await res.text().catch(() => "");
        return new Response(JSON.stringify({ error: "Failed sending email", details: txt }), { status: 500 });
      }

      return new Response(JSON.stringify({ ok: true }), { status: 200 });
    }

    // Fallback: append to data/messages.json (useful in dev or when no email provider configured)
    const file = path.join(process.cwd(), "data/messages.json");
    let arr: unknown[] = [];
    try {
      const raw = await fs.readFile(file, "utf-8");
      arr = JSON.parse(raw || "[]");
    } catch {
      arr = [];
    }

    arr.push({ ...data, createdAt: new Date().toISOString() });
    await fs.writeFile(file, JSON.stringify(arr, null, 2));

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (err: unknown) {
    const message = err instanceof Error ? err.message : String(err);
    return new Response(JSON.stringify({ error: message || "Invalid request" }), { status: 400 });
  }
}
