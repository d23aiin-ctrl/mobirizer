import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { siteConfig } from '@/lib/metadata';

export const runtime = 'nodejs';

const CONTACT_TO = process.env.CONTACT_TO_EMAIL ?? 'info@mobirizer.com';
const CONTACT_FROM = process.env.CONTACT_FROM_EMAIL ?? 'Mobirizer <no-reply@mobirizer.com>';

interface Body {
  name?: string;
  email?: string;
  company?: string;
  role?: string;
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

  const { name, email, company, role } = body;
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: 'Valid email required.' }, { status: 400 });
  }
  if (!name || name.trim().length < 2) {
    return NextResponse.json({ error: 'Name is required.' }, { status: 400 });
  }

  const resend = new Resend(process.env.RESEND_API_KEY);
  const handbookUrl = `${siteConfig.url}/en/engineering?print=1`;

  // Internal notification — lead capture
  const notifyHtml = `
    <h2 style="font-family: sans-serif;">Engineering Handbook download</h2>
    <table style="font-family: sans-serif; border-collapse: collapse;">
      <tr><td style="padding: 6px 12px;"><b>Name</b></td><td style="padding: 6px 12px;">${escapeHtml(name)}</td></tr>
      <tr><td style="padding: 6px 12px;"><b>Email</b></td><td style="padding: 6px 12px;">${escapeHtml(email)}</td></tr>
      ${company ? `<tr><td style="padding: 6px 12px;"><b>Company</b></td><td style="padding: 6px 12px;">${escapeHtml(company)}</td></tr>` : ''}
      ${role ? `<tr><td style="padding: 6px 12px;"><b>Role</b></td><td style="padding: 6px 12px;">${escapeHtml(role)}</td></tr>` : ''}
    </table>
  `;

  // Lead confirmation email — link back to the handbook
  const confirmHtml = `
    <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto;">
      <h2 style="font-size: 20px; margin: 0 0 16px;">Your Engineering Handbook is ready.</h2>
      <p style="line-height: 1.55; color: #444;">
        Thanks${name ? `, ${escapeHtml(name.split(' ')[0])}` : ''}. The Mobirizer Engineering Handbook
        (v2026.05) is up at the link below. Open it, hit ⌘P / Ctrl+P, and save as PDF — the page
        is print-styled.
      </p>
      <p style="margin: 24px 0;">
        <a href="${handbookUrl}" style="display: inline-block; background: #6366f1; color: white; padding: 12px 20px; border-radius: 8px; text-decoration: none; font-weight: 600;">
          Open the Handbook →
        </a>
      </p>
      <p style="line-height: 1.55; color: #666; font-size: 14px;">
        The six pillars — evals, LLMOps, guardrails, fine-tuning, MCP, retrieval — plus the
        model palette we use, and our edition history.
      </p>
      <p style="line-height: 1.55; color: #666; font-size: 14px; margin-top: 32px;">
        If you'd like a private walk-through tailored to your stack, just reply to this email.<br />
        — Mobirizer
      </p>
    </div>
  `;

  try {
    // Internal notification
    const notifyResult = await resend.emails.send({
      from: CONTACT_FROM,
      to: CONTACT_TO,
      replyTo: email,
      subject: `Handbook download — ${name}${company ? ` (${company})` : ''}`,
      html: notifyHtml,
    });
    if (notifyResult.error) {
      return NextResponse.json(
        { error: notifyResult.error.message ?? 'Send failed.' },
        { status: 502 }
      );
    }

    // Confirmation to the lead (best-effort — don't fail the whole request if this errors)
    await resend.emails.send({
      from: CONTACT_FROM,
      to: email,
      subject: 'Your Mobirizer Engineering Handbook (v2026.05)',
      html: confirmHtml,
    });

    return NextResponse.json({ ok: true, handbookUrl });
  } catch (err) {
    return NextResponse.json(
      { error: err instanceof Error ? err.message : 'Send failed.' },
      { status: 502 }
    );
  }
}
