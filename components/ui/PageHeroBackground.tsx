'use client';

import { FloatingOrbs, HeroSpotlight } from './AgentEffects';

/**
 * Reusable subtle background for any dark `.page-header` band — orbs,
 * grid pattern, noise, and a mouse spotlight. Mirrors the home hero
 * vocabulary so every page-top feels cohesive.
 *
 * Drop inside a `position: relative; overflow: hidden` parent (the
 * `.page-header` class already provides both).
 */
export function PageHeroBackground() {
  return (
    <>
      <FloatingOrbs />
      <div className="absolute inset-0 grid-pattern opacity-[0.06] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 noise-texture opacity-[0.04] pointer-events-none mix-blend-overlay" aria-hidden="true" />
      <HeroSpotlight />
    </>
  );
}
