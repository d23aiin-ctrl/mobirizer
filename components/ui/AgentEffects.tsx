'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

/**
 * Mouse-following radial spotlight over the hero. Fades in after mount.
 * Desktop only — disabled under pointer: coarse.
 */
export function HeroSpotlight() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = ref.current;
    if (!el) return;

    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty('--spot-x', `${x}px`);
      el.style.setProperty('--spot-y', `${y}px`);
    };

    const parent = el.parentElement;
    parent?.addEventListener('mousemove', handle);
    return () => parent?.removeEventListener('mousemove', handle);
  }, [reduce]);

  if (reduce) return null;

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 hidden md:block transition-opacity duration-700"
      style={{
        background:
          'radial-gradient(600px circle at var(--spot-x, 50%) var(--spot-y, 40%), rgba(99,102,241,0.18), transparent 60%)',
      }}
    />
  );
}

/**
 * Two softly pulsing gradient orbs parked behind the hero.
 */
export function FloatingOrbs() {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute top-[-10%] left-[-5%] w-[45rem] h-[45rem] rounded-full blur-3xl opacity-[0.18]"
        style={{ background: 'radial-gradient(circle, #6366f1 0%, transparent 60%)' }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.18, 0.26, 0.18] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-15%] right-[-10%] w-[40rem] h-[40rem] rounded-full blur-3xl opacity-[0.12]"
        style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 60%)' }}
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.12, 0.2, 0.12] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
      />
    </>
  );
}

/**
 * Small pulsing live dot with trailing ring.
 */
export function LivePulse({ label = 'LIVE' }: { label?: string }) {
  return (
    <span className="inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-wider text-emerald-300">
      <span className="relative inline-flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      {label}
    </span>
  );
}

/**
 * Terminal lines revealed sequentially with a cursor, then static.
 * Each line is given a delay; the last gets a blinking cursor.
 */
export function TypedTerminalLines({
  lines,
  lineDelay = 0.35,
}: {
  lines: React.ReactNode[];
  lineDelay?: number;
}) {
  const reduce = useReducedMotion();
  const [doneAll, setDoneAll] = useState(false);

  useEffect(() => {
    if (reduce) {
      setDoneAll(true);
      return;
    }
    const total = lines.length * lineDelay * 1000 + 400;
    const t = setTimeout(() => setDoneAll(true), total);
    return () => clearTimeout(t);
  }, [lines.length, lineDelay, reduce]);

  return (
    <>
      {lines.map((line, i) => (
        <motion.div
          key={i}
          initial={reduce ? { opacity: 1, x: 0 } : { opacity: 0, x: -4 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: reduce ? 0 : i * lineDelay, duration: reduce ? 0 : 0.25 }}
          className="whitespace-pre"
        >
          {line}
          {i === lines.length - 1 && (
            <span
              className={`inline-block w-2 h-[1.1em] ml-1 align-[-2px] bg-white/80 ${
                doneAll && !reduce ? 'animate-pulse' : ''
              }`}
            />
          )}
        </motion.div>
      ))}
    </>
  );
}

/**
 * Infinite horizontal ticker. Duplicates children so the loop is seamless.
 * Pure CSS animation, pauses on hover.
 */
export function Marquee({ children, speed = 40 }: { children: ReactNode; speed?: number }) {
  const reduce = useReducedMotion();
  return (
    <div className="group relative overflow-hidden whitespace-nowrap">
      <div
        className={`inline-flex gap-10 ${reduce ? '' : 'animate-marquee group-hover:[animation-play-state:paused]'}`}
        style={{ animationDuration: reduce ? undefined : `${speed}s` }}
      >
        <div className="inline-flex gap-10 shrink-0">{children}</div>
        <div className="inline-flex gap-10 shrink-0" aria-hidden="true">
          {children}
        </div>
      </div>
      {/* Edge fade */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-bg-light to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-bg-light to-transparent" />
    </div>
  );
}

/**
 * Magnetic hover — child wrapper that shifts toward the cursor while it
 * hovers near it. Disabled on touch/reduced-motion.
 */
export function Magnetic({
  children,
  strength = 0.25,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(hover: none)').matches) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      el.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
    };
    const reset = () => {
      el.style.transform = 'translate(0, 0)';
    };

    el.addEventListener('mousemove', handleMove);
    el.addEventListener('mouseleave', reset);
    return () => {
      el.removeEventListener('mousemove', handleMove);
      el.removeEventListener('mouseleave', reset);
    };
  }, [strength]);

  return (
    <span
      ref={ref}
      className={`inline-block transition-transform duration-300 ease-out will-change-transform ${className ?? ''}`}
    >
      {children}
    </span>
  );
}

/**
 * Word-by-word kinetic reveal for a headline. Each word fades in and
 * rises with a tight stagger. Accepts an array of words + optional
 * gradient-highlighted indices.
 */
export function KineticHeadline({
  words,
  highlightFrom,
  className,
}: {
  words: string[];
  highlightFrom?: number;
  className?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <h1 className={className}>
      {words.map((w, i) => {
        const isHighlight = highlightFrom !== undefined && i >= highlightFrom;
        return (
          <motion.span
            key={`${i}-${w}`}
            initial={reduce ? { opacity: 1, y: 0 } : { opacity: 0, y: 28, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{
              delay: reduce ? 0 : i * 0.07,
              duration: reduce ? 0 : 0.5,
              ease: [0.2, 0.8, 0.2, 1],
            }}
            className={`inline-block mr-[0.22em] ${
              isHighlight
                ? 'bg-gradient-to-br from-white via-indigo-200 to-white bg-clip-text text-transparent'
                : ''
            }`}
          >
            {w}
          </motion.span>
        );
      })}
    </h1>
  );
}

/**
 * Small looping metric — cycles a numeric display between target values to
 * suggest live movement without being a real data source.
 */
export function LiveMetric({
  label,
  values,
  suffix = 'ms',
  interval = 1800,
}: {
  label: string;
  values: number[];
  suffix?: string;
  interval?: number;
}) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((v) => (v + 1) % values.length), interval);
    return () => clearInterval(t);
  }, [values.length, interval]);

  return (
    <span className="inline-flex items-baseline gap-2 font-mono text-xs text-white/60">
      <span className="uppercase tracking-wider text-[10px]">{label}</span>
      <motion.span
        key={values[i]}
        initial={{ opacity: 0, y: -4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className="text-emerald-300 tabular-nums"
      >
        {values[i]}
        {suffix}
      </motion.span>
    </span>
  );
}

/**
 * Minimal down-chevron that gently bobs, suggesting "scroll".
 */
export function ScrollIndicator({ label = 'Scroll' }: { label?: string }) {
  return (
    <motion.div
      aria-hidden="true"
      className="inline-flex flex-col items-center gap-2 text-white/50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.6 }}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.25em]">{label}</span>
      <motion.div
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        className="w-[1px] h-8 bg-gradient-to-b from-white/40 to-transparent"
      />
    </motion.div>
  );
}

/**
 * Agent network graph — 5 nodes connected by animated gradient lines
 * with travelling "data packets" along each edge. SVG, ~8kb, 60fps.
 */
export function AgentGraph() {
  const reduce = useReducedMotion();
  const nodes = [
    { id: 'in', label: 'User', x: 80, y: 200, kind: 'io' },
    { id: 'orch', label: 'Orchestrator', x: 300, y: 100, kind: 'agent' },
    { id: 'rag', label: 'Retrieval', x: 300, y: 300, kind: 'tool' },
    { id: 'llm', label: 'LLM', x: 560, y: 100, kind: 'model' },
    { id: 'tool', label: 'Tools', x: 560, y: 300, kind: 'tool' },
    { id: 'out', label: 'Response', x: 800, y: 200, kind: 'io' },
  ];

  const edges = [
    { from: 'in', to: 'orch' },
    { from: 'in', to: 'rag' },
    { from: 'orch', to: 'llm' },
    { from: 'orch', to: 'tool' },
    { from: 'rag', to: 'orch' },
    { from: 'llm', to: 'out' },
    { from: 'tool', to: 'out' },
  ];

  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

  const nodeFill = (kind: string) =>
    ({ io: '#a5b4fc', agent: '#6366f1', tool: '#525259', model: '#8b5cf6' }[kind] ?? '#525259');

  return (
    <svg
      viewBox="0 0 880 400"
      className="w-full h-auto max-w-4xl mx-auto"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="edge-grad" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.1" />
          <stop offset="50%" stopColor="rgb(99, 102, 241)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.1" />
        </linearGradient>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Edges */}
      {edges.map((e, i) => {
        const a = byId[e.from];
        const b = byId[e.to];
        return (
          <g key={`${e.from}-${e.to}`}>
            <line
              x1={a.x}
              y1={a.y}
              x2={b.x}
              y2={b.y}
              stroke="url(#edge-grad)"
              strokeWidth={1.5}
              opacity={0.6}
            />
            {/* Travelling packet */}
            {!reduce && (
              <circle r={3} fill="#6366f1" filter="url(#glow)">
                <animateMotion
                  dur={`${3 + (i % 3)}s`}
                  repeatCount="indefinite"
                  begin={`${i * 0.4}s`}
                  path={`M ${a.x},${a.y} L ${b.x},${b.y}`}
                />
              </circle>
            )}
          </g>
        );
      })}

      {/* Nodes */}
      {nodes.map((n) => (
        <g key={n.id}>
          <circle
            cx={n.x}
            cy={n.y}
            r={28}
            fill="rgb(var(--bg-surface))"
            stroke={nodeFill(n.kind)}
            strokeWidth={2}
          />
          <circle cx={n.x} cy={n.y} r={8} fill={nodeFill(n.kind)} opacity={0.4}>
            {!reduce && (
              <>
                <animate attributeName="r" values="6;14;6" dur="3s" repeatCount="indefinite" />
                <animate
                  attributeName="opacity"
                  values="0.5;0;0.5"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </>
            )}
          </circle>
          <circle cx={n.x} cy={n.y} r={5} fill={nodeFill(n.kind)} />
          <text
            x={n.x}
            y={n.y + 52}
            textAnchor="middle"
            className="font-mono fill-text-dark"
            fontSize="12"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}
