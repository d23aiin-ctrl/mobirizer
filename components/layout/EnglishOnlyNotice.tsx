'use client';

import { useLocale } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

/**
 * Small non-intrusive banner shown on English-only pages when the user
 * has landed on a non-English locale. Tells them the page is only in
 * English for now, and offers a link to the English version.
 */
export function EnglishOnlyNotice() {
  const locale = useLocale();
  const pathname = usePathname();

  if (locale === 'en') return null;

  const enPath = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), '/en');

  return (
    <div className="bg-bg-light border-b border-border">
      <div className="container py-2.5 flex items-center justify-between gap-4 text-xs">
        <span className="text-text-muted">
          This page is currently available in English only.
        </span>
        <Link
          href={enPath}
          className="font-mono text-primary-blue hover:underline whitespace-nowrap"
        >
          View in English →
        </Link>
      </div>
    </div>
  );
}
