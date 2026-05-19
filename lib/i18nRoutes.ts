/**
 * Routes that have full body translations across all locales. Used by the
 * LanguageSwitcher to decide whether to stay on the same path when
 * switching locale, or to redirect to the locale's home (so a Hindi user
 * doesn't land on an English-banner page).
 *
 * Add a route here only when its body content is genuinely translated in
 * every locale — header/footer chrome alone isn't enough.
 */
export const FULLY_TRANSLATED_PATHS: ReadonlyArray<string> = [
  '/contact',
];

/** True if the route (e.g. "/contact" or "/products/d23-ai") has full coverage. */
export function isPathTranslated(path: string): boolean {
  // Home is special-cased: nav + hero chrome are translated even though body
  // content is partially English. We allow in-place switching.
  if (path === '/' || path === '') return true;
  return FULLY_TRANSLATED_PATHS.some(
    (p) => path === p || path.startsWith(`${p}/`)
  );
}
