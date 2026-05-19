/**
 * Canonical company stats — referenced anywhere that surfaces numbers.
 * Never hardcode these values in components; import from here so updates
 * propagate everywhere and pages stay consistent across the site.
 */

export const FOUNDED_YEAR = 2014;
const CURRENT_YEAR = new Date().getFullYear();

export const COMPANY_STATS = {
  foundedYear: FOUNDED_YEAR,
  yearsShipping: CURRENT_YEAR - FOUNDED_YEAR,
  clientsServed: 100,
  projectsDelivered: 200,
  agentsInProduction: 47,
  usersImpacted: 2_000_000,
  /** Years on AI specifically (pivot was 2019) */
  yearsOnAi: CURRENT_YEAR - 2019,
} as const;

/**
 * The single anchor metric we lead with on the homepage. One claim,
 * defensible, sector-specific. Update here, not in components.
 */
export const HERO_ANCHOR = {
  number: COMPANY_STATS.agentsInProduction,
  unit: 'AI agents',
  sentence:
    'AI agents shipped to production across BFSI, government, and healthcare since 2019.',
} as const;
