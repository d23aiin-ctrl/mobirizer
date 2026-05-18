import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export const runtime = 'nodejs';

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? 'info@mobirizer.com';
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL ?? 'Mobirizer <no-reply@mobirizer.com>';

interface Body {
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  subject?: string;
  message?: string;
}

function escapeHtml(s: string) {
  return s.replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]!));
}

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: 'Email service not configured. Please set RESEND_API_KEY.' },
      { status: 503 }
    );
  }

  let body: Body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: 'Invalid JSON payload.' }, { status: 400 });
  }

  const { name, email, phone, company, subject, message } = body;

  // Minimal server-side validation — client does the rest
  if (!name || name.trim().length < 2) return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
  if (!message || message.trim().length < 10) return NextResponse.json({ error: 'Message too short.' }, { status: 400 });

  const resend = new Resend(process.env.RESEND_API_KEY);

  const subjectLabel = subject ? ` · ${subject}` : '';
  const html = `
    <h2 style="font-family: sans-serif;">New contact submission${subjectLabel}</h2>
    <table style="font-family: sans-serif; border-collapse: collapse;">
      <tr><td style="padding: 6px 12px;"><b>Name</b></td><td style="padding: 6px 12px;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding: 6px 12px;"><b>Email</b></td><td style="padding: 6px 12px;">${escapeHtml(email)}</td></tr>
      ${phone ? `<tr><td style="padding: 6px 12px;"><b>Phone</b></td><td style="padding: 6px 12px;">${escapeHtml(phone)}</td></tr>` : ''}
      ${company ? `<tr><td style="padding: 6px 12px;"><b>Company</b></td><td style="padding: 6px 12px;">${escapeHtml(company)}</td></tr>` : ''}
      ${subject ? `<tr><td style="padding: 6px 12px;"><b>Subject</b></td><td style="padding: 6px 12px;">${escapeHtml(subject)}</td></tr>` : ''}
    </table>
    <h3 style="font-family: sans-serif; margin-top: 24px;">Message</h3>
    <pre style="font-family: sans-serif; white-space: pre-wrap; background: #f5f5f7; padding: 16px; border-radius: 8px;">${escapeHtml(message)}</pre>
  `;

  try {
    const { error } = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Mobirizer contact — ${name}${subjectLabel}`,
      html,
    });
    if (error) {
      return NextResponse.json({ error: error.message ?? 'Send failed.' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Send failed.' },
      { status: 502 }
    );
  }
}
