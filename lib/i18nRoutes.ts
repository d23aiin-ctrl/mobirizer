/**
 * Routes that have full body translations across all locales. Used by the
 * LanguageSwitcher to decide whether to stay on the same path when
 * switching locale, or to redirect to the locale's home (so a Hindi user
 * doesn't land on an English-banner page).
 *
 * Two kinds of entries:
 *   - { path: '/contact' }              — that path AND any sub-routes covered
 *   - { path: '/products', exact: true } — only the exact path; sub-routes (leaf
 *                                          pages) still fall back to home
 *
 * Add a route here only when its body content is genuinely translated in
 * every locale — header/footer chrome alone isn't enough.
 */
export type TranslatedRoute = { path: string; exact?: boolean };

export const FULLY_TRANSLATED_PATHS: ReadonlyArray<TranslatedRoute> = [
  { path: '/contact' },
  { path: '/products', exact: true },
  { path: '/solutions', exact: true },
  { path: '/industries' },
  { path: '/company', exact: true },
];

/** True if the route (e.g. "/contact" or "/products/d23-ai") has full coverage. */
export function isPathTranslated(path: string): boolean {
  // Home is special-cased: nav + hero chrome are translated even though body
  // content is partially English. We allow in-place switching.
  if (path === '/' || path === '') return true;
  return FULLY_TRANSLATED_PATHS.some(({ path: p, exact }) =>
    exact ? path === p : path === p || path.startsWith(`${p}/`)
  );
}
