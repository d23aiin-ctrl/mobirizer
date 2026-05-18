'use client';

import { useState, FormEvent, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { Input, Textarea, Select, Button } from '@/components';
import { motion } from '@/components/ui';

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const PRODUCT_LABEL: Record<string, string> = {
  'd23-ai': 'D23.ai',
  'whatsapp-commerce': 'WhatsApp Commerce',
  'roboguru': 'RoboGuru',
  'ohgrt': 'OHGRT',
  'xappy': 'Xappy Healthcare',
  'janseva': 'JanSeva',
};

export function ContactForm() {
  const t = useTranslations('contact.form');
  const params = useSearchParams();
  const productParam = params.get('product');
  const planParam = params.get('plan');

  const prefill = useMemo(() => {
    if (!productParam && !planParam) return { subject: '', message: '' };
    const productName = productParam ? PRODUCT_LABEL[productParam] ?? productParam : '';
    const planName = planParam ? planParam.charAt(0).toUpperCase() + planParam.slice(1) : '';
    const parts: string[] = [];
    if (productName) parts.push(productName);
    if (planName) parts.push(`${planName} tier`);
    const tag = parts.join(' — ');
    return {
      subject: 'project',
      message: tag ? `${t('prefillIntro')} ${tag}.\n\n` : '',
    };
  }, [productParam, planParam, t]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [subject, setSubject] = useState<string>(prefill.subject);

  function validateForm(formData: FormData): FormErrors {
    const newErrors: FormErrors = {};

    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const subject = formData.get('subject') as string;
    const message = formData.get('message') as string;

    if (!name || name.trim().length < 2) {
      newErrors.name = t('errors.name');
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      newErrors.email = t('errors.email');
    }

    if (phone && phone.trim()) {
      const phoneRegex = /^[+]?[\d\s-]{10,15}$/;
      if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
        newErrors.phone = t('errors.phone');
      }
    }

    if (!subject) {
      newErrors.subject = t('errors.subject');
    }

    if (!message || message.trim().length < 10) {
      newErrors.message = t('errors.message');
    }

    return newErrors;
  }

  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitError, setSubmitError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setIsSubmitting(true);
    setSubmitError(null);

    const payload = {
      name: (formData.get('name') as string)?.trim(),
      email: (formData.get('email') as string)?.trim(),
      phone: (formData.get('phone') as string)?.trim() || undefined,
      company: (formData.get('company') as string)?.trim() || undefined,
      subject: (formData.get('subject') as string)?.trim() || subject,
      message: (formData.get('message') as string)?.trim(),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({ error: 'Request failed.' }));
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setSubmitState('success');
      (e.target as HTMLFormElement).reset();
      setErrors({});
    } catch (err) {
      setSubmitState('error');
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong.');
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <motion.form
      className="contact-form"
      id="contactForm"
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {submitState === 'success' && (
        <div
          className="mb-6 rounded-lg border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300"
          role="status"
        >
          {t('success')}
        </div>
      )}
      {submitState === 'error' && (
        <div
          className="mb-6 rounded-lg border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-300"
          role="alert"
        >
          {submitError ?? t('errorFallback')}
        </div>
      )}
      <div className="form-grid">
        <motion.div
          className="form-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          <Input
            id="name"
            name="name"
            label={t('name')}
            placeholder={t('namePlaceholder')}
            required
            error={errors.name}
          />
        </motion.div>
        <motion.div
          className="form-col"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.15, duration: 0.4 }}
        >
          <Input
            type="email"
            id="email"
            name="email"
            label={t('email')}
            placeholder={t('emailPlaceholder')}
            required
            error={errors.email}
          />
        </motion.div>
        <motion.div
          className="form-col"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        >
          <Input
            type="tel"
            id="phone"
            name="phone"
            label={t('phone')}
            placeholder={t('phonePlaceholder')}
            error={errors.phone}
          />
        </motion.div>
        <motion.div
          className="form-col"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25, duration: 0.4 }}
        >
          <Input
            id="company"
            name="company"
            label={t('company')}
            placeholder={t('companyPlaceholder')}
          />
        </motion.div>
        <motion.div
          className="form-col-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <Select
            id="subject"
            name="subject"
            label={t('subject')}
            placeholder={t('subjectPlaceholder')}
            required
            error={errors.subject}
            value={subject}
            onValueChange={setSubject}
            options={[
              { value: 'general', label: t('subjectOptions.general') },
              { value: 'project', label: t('subjectOptions.project') },
              { value: 'products', label: t('subjectOptions.products') },
              { value: 'partnership', label: t('subjectOptions.partnership') },
              { value: 'support', label: t('subjectOptions.support') },
            ]}
          />
        </motion.div>
        <motion.div
          className="form-col-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.4 }}
        >
          <Textarea
            id="message"
            name="message"
            label={t('message')}
            rows={5}
            placeholder={t('messagePlaceholder')}
            required
            error={errors.message}
            defaultValue={prefill.message}
          />
        </motion.div>
        <motion.div
          className="form-col-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button type="submit" variant="cta" size="lg" disabled={isSubmitting} className="w-full">
              <i className="ri-send-plane-line" aria-hidden="true" />
              {isSubmitting ? t('submitting') : t('submit')}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.form>
  );
}
