'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const current = mounted ? (theme === 'system' ? resolvedTheme : theme) : 'light';
  const isDark = current === 'dark';

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-bg-light transition-colors text-text-dark"
    >
      {mounted ? (
        <i className={isDark ? 'ri-sun-line text-xl' : 'ri-moon-line text-xl'} aria-hidden="true" />
      ) : (
        <i className="ri-moon-line text-xl opacity-0" aria-hidden="true" />
      )}
    </button>
  );
}
