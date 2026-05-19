'use client';

import { FormEvent, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { Input } from '@/components';
import { motion } from '@/components/ui';

/**
 * Email-gated handbook download. On success, switches to a "ready" state
 * exposing a Print button (the page itself is print-styled).
 *
 * If the URL has ?print=1 (the link sent in the confirmation email), the
 * gate is bypassed and the user lands directly on the ready state.
 */
export function HandbookGate() {
  const params = useSearchParams();
  const arrivedFromEmail = params.get('print') === '1';

  const [state, setState] = useState<'idle' | 'submitting' | 'ready' | 'error'>(
    arrivedFromEmail ? 'ready' : 'idle'
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  // Auto-trigger print when arriving via the email link.
  useEffect(() => {
    if (!arrivedFromEmail) return;
    const id = setTimeout(() => {
      if (typeof window !== 'undefined') window.print();
    }, 600);
    return () => clearTimeout(id);
  }, [arrivedFromEmail]);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = (data.get('name') as string)?.trim();
    const email = (data.get('email') as string)?.trim();
    const company = (data.get('company') as string)?.trim();
    const role = (data.get('role') as string)?.trim();

    const validation: typeof errors = {};
    if (!name || name.length < 2) validation.name = 'Please enter your name.';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      validation.email = 'Please enter a valid email.';
    setErrors(validation);
    if (Object.keys(validation).length > 0) return;

    setState('submitting');
    setErrorMessage(null);
    try {
      const res = await fetch('/api/playbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, company, role }),
      });
      if (!res.ok) {
        const json = await res.json().catch(() => ({ error: 'Request failed.' }));
        throw new Error(json.error || `Request failed (${res.status})`);
      }
      setState('ready');
    } catch (err) {
      setState('error');
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong.');
    }
  }

  if (state === 'ready') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="card p-8 md:p-10 max-w-2xl mx-auto text-center"
      >
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-500/15 text-emerald-600 mb-5">
          <i className="ri-check-line text-2xl" aria-hidden="true" />
        </div>
        <h3 className="text-2xl font-bold text-text-dark mb-3">Handbook ready.</h3>
        <p className="text-text-muted leading-relaxed mb-6">
          Hit Print below — your browser&apos;s "Save as PDF" handles the rest. We&apos;ve also
          emailed you a link so you can come back any time.
        </p>
        <button
          type="button"
          onClick={() => typeof window !== 'undefined' && window.print()}
          className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-blue text-white text-sm font-semibold hover:bg-primary-dark transition-colors print:hidden"
        >
          <i className="ri-printer-line" aria-hidden="true" />
          Print · Save as PDF
        </button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      className="card p-8 md:p-10 max-w-2xl mx-auto"
    >
      <div className="mb-6">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary-blue mb-2">
          Free · 14 pages · v2026.05
        </div>
        <h3 className="text-2xl md:text-3xl font-extrabold text-text-dark tracking-tight mb-3">
          Get the Engineering Handbook.
        </h3>
        <p className="text-text-muted leading-relaxed">
          The six pillars, the model palette, and the edition history — formatted as a single PDF
          you can share with your team. Drop your email; we&apos;ll send the link.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-4" noValidate>
        <Input id="hb-name" name="name" label="Full name" placeholder="Jane Engineer" required error={errors.name} />
        <Input id="hb-email" type="email" name="email" label="Work email" placeholder="jane@acme.com" required error={errors.email} />
        <Input id="hb-company" name="company" label="Company (optional)" placeholder="Acme Corp" />
        <Input id="hb-role" name="role" label="Role (optional)" placeholder="Engineering Manager" />

        {state === 'error' && (
          <div
            className="sm:col-span-2 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-600"
            role="alert"
          >
            {errorMessage ?? 'Something went wrong. Please try again or email info@mobirizer.com.'}
          </div>
        )}

        <div className="sm:col-span-2 flex items-center gap-4 flex-wrap mt-2">
          <button
            type="submit"
            disabled={state === 'submitting'}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-primary-blue text-white text-sm font-semibold hover:bg-primary-dark transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {state === 'submitting' ? (
              <>
                <i className="ri-loader-4-line animate-spin" aria-hidden="true" />
                Sending…
              </>
            ) : (
              <>
                <i className="ri-download-line" aria-hidden="true" />
                Email me the handbook
              </>
            )}
          </button>
          <span className="font-mono text-[11px] text-text-muted">
            No newsletters · We email it once.
          </span>
        </div>
      </form>
    </motion.div>
  );
}
