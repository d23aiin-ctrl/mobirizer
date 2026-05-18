'use client';

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

/**
 * Slim top-of-viewport progress bar that tracks page scroll. For long-form
 * pages (blog posts, case studies). Spring-smoothed so it doesn't jitter.
 */
export function ReadingProgress() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-0.5 origin-left bg-gradient-to-r from-primary-blue via-primary-light to-primary-blue z-[60]"
      style={{ scaleX }}
    />
  );
}
