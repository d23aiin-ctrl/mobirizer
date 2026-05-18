'use client';

import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { locales, localeNames, localeNamesShort, Locale } from '@/i18n';
import { cn } from '@/lib/cn';

export function LanguageSwitcher() {
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  const handleChange = (newLocale: Locale) => {
    if (newLocale === locale) return;
    const stripped = pathname.replace(new RegExp(`^/${locale}(?=/|$)`), '') || '/';
    const newPath = stripped === '/' ? `/${newLocale}` : `/${newLocale}${stripped}`;
    router.push(newPath);
  };

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          type="button"
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-primary-blue/5 transition-colors text-text-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue"
          aria-label="Select language"
        >
          <i className="ri-global-line text-lg" aria-hidden="true" />
          <span className="hidden sm:inline text-sm font-medium">{localeNamesShort[locale]}</span>
          <i className="ri-arrow-down-s-line text-sm transition-transform data-[state=open]:rotate-180" aria-hidden="true" />
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content
          align="end"
          sideOffset={8}
          className="min-w-[160px] bg-bg-white rounded-xl shadow-xl border border-border p-2 z-50 data-[state=open]:animate-fade-in-down"
        >
          {locales.map((loc) => (
            <DropdownMenu.Item
              key={loc}
              onSelect={() => handleChange(loc)}
              className={cn(
                'w-full text-left px-4 py-2 rounded-lg transition-colors text-sm cursor-pointer outline-none',
                locale === loc
                  ? 'bg-primary-blue/10 text-primary-blue font-medium'
                  : 'text-text-dark data-[highlighted]:bg-bg-light'
              )}
            >
              {localeNames[loc]}
            </DropdownMenu.Item>
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}

export default LanguageSwitcher;
