'use client';

import Link from 'next/link';
import { StatCard, Button, Badge, Animated, Stagger, StaggerItem, Float, GradientText, HoverCard, motion, Counter, HeroSpotlight, FloatingOrbs, LivePulse, TypedTerminalLines, Marquee, Magnetic, AgentGraph, KineticHeadline, LiveMetric, ScrollIndicator } from '@/components';
import { COMPANY_STATS, HERO_ANCHOR } from '@/lib/companyStats';

export function HomePageContent() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-hero overflow-hidden">
        <FloatingOrbs />
        <div className="absolute inset-0 grid-pattern opacity-[0.08] pointer-events-none" />
        <div className="absolute inset-0 noise-texture opacity-[0.04] pointer-events-none mix-blend-overlay" />
        <HeroSpotlight />

        <div className="container relative z-10 pt-20 pb-10">
          <div className="hero-two-col items-center">
            <div className="hero-content-col">
              <div className="hero-content">
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-white/60 mb-10"
                >
                  <span className="relative inline-flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70 animate-ping" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Mobirizer // Shipping AI since 2019
                </motion.div>

                <KineticHeadline
                  className="text-[2.75rem] sm:text-6xl md:text-7xl lg:text-[5rem] font-extrabold text-white leading-[0.98] tracking-tightest mb-8"
                  words={['Ship', 'AI', 'that', 'actually', 'works', 'in', 'production.']}
                  highlightFrom={5}
                />

                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                  className="text-lg md:text-xl text-white/70 mb-10 leading-relaxed max-w-xl"
                >
                  Agents, RAG, and fine-tuned models for teams that need them in the wild — not
                  in a slide deck. Boring-tech discipline, measurable outcomes, a decade of shipping.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="flex gap-6 flex-wrap items-center"
                >
                  <Magnetic strength={0.3}>
                    <Button variant="ctaWhite" asChild>
                      <Link href="/contact">
                        <span>Start a project</span>
                        <i className="ri-arrow-right-line" aria-hidden="true" />
                      </Link>
                    </Button>
                  </Magnetic>
                  <Link
                    href="/engineering"
                    className="font-mono text-sm text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5"
                  >
                    See how we build →
                  </Link>
                </motion.div>
              </div>
            </div>

            <div className="hero-image-col">
              <Animated animation="fadeInRight" delay={0.4}>
                <div className="relative rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm font-mono text-[13px] leading-relaxed overflow-hidden shadow-[0_0_80px_-20px_rgba(99,102,241,0.5)]">
                  {/* Titlebar */}
                  <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 text-white/50">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                    <span className="ml-3 text-xs tracking-tight">mobirizer ~ production</span>
                    <div className="ml-auto"><LivePulse /></div>
                  </div>
                  {/* Tabs */}
                  <div className="flex items-center gap-1 px-4 pt-2 border-b border-white/10 text-[11px] font-mono">
                    {[
                      { id: 'logs', label: 'logs', active: true },
                      { id: 'traces', label: 'traces' },
                      { id: 'evals', label: 'evals' },
                    ].map((tab) => (
                      <span
                        key={tab.id}
                        className={`px-3 py-2 ${
                          tab.active
                            ? 'text-white border-b-2 border-indigo-400 -mb-px'
                            : 'text-white/40 border-b-2 border-transparent'
                        }`}
                      >
                        {tab.label}
                      </span>
                    ))}
                  </div>
                  {/* Body */}
                  <div className="p-6 text-white/90">
                    <TypedTerminalLines
                      lineDelay={0.36}
                      lines={[
                        <span key="cmd" className="text-white/50">$ mobirizer deploy agent --production</span>,
                        <span key="blank">&nbsp;</span>,
                        <span key="l1"><span className="text-emerald-300">✓</span> evals passed      <span className="text-white/50">(217/217, 99.1% pass rate)</span></span>,
                        <span key="l2"><span className="text-emerald-300">✓</span> shadow traffic    <span className="text-white/50">(72h, no regressions)</span></span>,
                        <span key="l3"><span className="text-emerald-300">✓</span> guardrails        <span className="text-white/50">(Llama-Guard + OPA policies)</span></span>,
                        <span key="l4"><span className="text-emerald-300">✓</span> observability     <span className="text-white/50">(traces → Langfuse)</span></span>,
                        <span key="blank2">&nbsp;</span>,
                        <span key="l5"><span className="text-white/50">[21:04:18]</span> <span className="text-indigo-300">agent.v4.2</span> live for user {'{cohort: banking}'}</span>,
                        <span key="l6"><span className="text-white/50">[21:04:18]</span> resolution-rate: <span className="text-emerald-300">0.94</span>{' · '}p95: <span className="text-emerald-300">1.2s</span></span>,
                      ]}
                    />
                  </div>
                  {/* Footer with live-updating metrics */}
                  <div className="flex items-center gap-6 px-4 py-2 border-t border-white/10 bg-white/[0.02]">
                    <LiveMetric label="p95" values={[1180, 1210, 1190, 1240, 1200]} suffix="ms" />
                    <LiveMetric label="rps" values={[42, 47, 51, 45, 49]} suffix="" interval={2200} />
                    <LiveMetric label="err" values={[0.02, 0.01, 0.03, 0.01, 0.02]} suffix="%" interval={2600} />
                  </div>
                </div>
              </Animated>
            </div>
          </div>

          {/* Hero anchor metric — one claim, not four */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-16 pt-8 border-t border-white/10 flex flex-wrap items-end justify-between gap-6"
          >
            <p className="text-lg md:text-xl text-white/80 max-w-3xl leading-snug">
              <span className="text-3xl md:text-4xl font-extrabold text-white tracking-tighter tabular-nums mr-3 align-baseline">
                <Counter from={0} to={HERO_ANCHOR.number} duration={1.6} />
              </span>
              {HERO_ANCHOR.sentence}
            </p>
            <div className="hidden md:flex">
              <ScrollIndicator />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Marquee strip — stack ticker */}
        <section className="py-6 border-y border-border bg-bg-light">
          <Marquee speed={48}>
            {[
              'CLAUDE 4', 'GPT-4.1', 'GEMINI 2.5', 'LLAMA 3.3', 'MISTRAL LARGE',
              'LANGGRAPH', 'MCP', 'pgvector', 'WEAVIATE', 'QDRANT',
              'bge-reranker-v2', 'COHERE RERANK', 'LANGFUSE', 'BRAINTRUST',
              'LLAMA GUARD 3', 'OPA', 'LoRA', 'DPO', 'AXOLOTL',
              'POSTGRES', 'REDIS', 'FASTAPI', 'KAFKA', 'H100 / H200',
            ].map((t) => (
              <span
                key={t}
                className="font-mono text-xs tracking-[0.2em] text-text-muted hover:text-primary-blue transition-colors"
              >
                {t}
              </span>
            ))}
          </Marquee>
        </section>

        {/* Philosophy Section */}
        <section className="py-24 bg-bg-white border-t border-border">
          <div className="container">
            <div className="two-col-section">
              <div className="col-left">
                <Animated animation="fadeInLeft">
                  <Badge icon="ri-lightbulb-flash-line" className="mb-5">
                    Our Philosophy
                  </Badge>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark mb-6 leading-tight">
                    Your Ideal Partner in <span className="text-primary-blue">AI Excellence</span>
                  </h2>
                  <p className="text-lg text-text-muted leading-relaxed mb-6">
                    We don&apos;t believe in abstract strategies that overpromise and underdeliver. At
                    Mobirizer, we focus on building real AI solutions backed by clear strategy that
                    effectively boosts your business.
                  </p>
                  <p className="text-lg text-text-muted leading-relaxed mb-8">
                    Our approach is simple: understand your unique challenges, design tailored
                    solutions, and deliver measurable results. No fluff, no buzzwords—just AI that
                    works.
                  </p>
                  <div className="flex gap-6 flex-wrap">
                    {[
                      { icon: 'ri-check-double-line', title: 'Proven Track Record', desc: `${COMPANY_STATS.projectsDelivered}+ successful projects` },
                      { icon: 'ri-shield-check-line', title: 'Enterprise Ready', desc: 'Government & enterprise grade' },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className="flex items-center gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <div className="w-10 h-10 bg-primary-blue/10 rounded-lg flex items-center justify-center">
                          <i className={`${item.icon} text-primary-blue text-xl`} />
                        </div>
                        <div>
                          <div className="font-semibold text-text-dark text-sm">{item.title}</div>
                          <div className="text-sm text-text-muted">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </Animated>
              </div>
              <div className="col-right">
                <Animated animation="fadeInRight">
                  <div className="rounded-xl border border-border bg-bg-white overflow-hidden">
                    <div className="px-6 py-4 border-b border-border text-xs font-mono uppercase tracking-wider text-text-muted">
                      What we ship — on a typical quarter
                    </div>
                    <div className="divide-y divide-border">
                      {[
                        { k: 'Production agents', v: 'LangGraph, typed tool schemas' },
                        { k: 'RAG pipelines', v: 'hybrid retrieval + re-rank' },
                        { k: 'Fine-tunes', v: 'LoRA / DPO, on H100' },
                        { k: 'Eval harnesses', v: 'offline + shadow + live gates' },
                        { k: 'Observability', v: 'Langfuse traces, SLOs per route' },
                        { k: 'Guardrails', v: 'Llama Guard + policy as code' },
                      ].map((item) => (
                        <div key={item.k} className="grid grid-cols-2 px-6 py-4 text-sm">
                          <span className="font-semibold text-text-dark">{item.k}</span>
                          <span className="font-mono text-xs text-text-muted">{item.v}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Animated>
              </div>
            </div>
          </div>
        </section>

        {/* Three Things We Ship — consolidated */}
        <section className="section">
          <div className="container">
            <Animated animation="fadeInUp">
              <div className="max-w-3xl mb-16">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-6">
                  <span className="w-6 h-px bg-text-muted" />
                  What we actually do
                </div>
                <h2 className="text-4xl md:text-5xl font-extrabold text-text-dark tracking-tighter leading-[1.05]">
                  Three kinds of systems.
                  <br />
                  <span className="text-primary-blue">Built to survive production.</span>
                </h2>
              </div>
            </Animated>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  num: '01',
                  icon: 'ri-robot-2-line',
                  title: 'Agentic systems',
                  desc: 'Multi-step agents that reason, call tools, and recover when things go wrong. Deployed with typed tool schemas, idempotent handlers, and explicit escape-hatches.',
                  tech: ['LangGraph', 'MCP', 'Claude / GPT-4o / Llama'],
                  link: '/solutions/agentic-ai',
                },
                {
                  num: '02',
                  icon: 'ri-database-2-line',
                  title: 'RAG & knowledge',
                  desc: 'Hybrid retrieval, re-ranked, and evaluated on Recall@k. Structured chunking, citation-grounded outputs, and retrieval quality you can actually measure.',
                  tech: ['pgvector / Weaviate', 'bge-reranker', 'Hybrid BM25 + dense'],
                  link: '/solutions/conversational-ai',
                },
                {
                  num: '03',
                  icon: 'ri-focus-2-line',
                  title: 'Fine-tuning & integration',
                  desc: 'Fine-tune when smaller-plus-yours beats a frontier model on your task. Ship it behind a policy layer that fits the rest of your stack.',
                  tech: ['LoRA / DPO', 'Axolotl + TRL', 'On-prem H100 / H200'],
                  link: '/solutions/ai-integration',
                },
              ].map((item, i) => (
                <motion.div
                  key={item.num}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Link href={item.link} className="group block h-full">
                    <div className="card card-hover h-full p-8 flex flex-col">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                          <i className={`${item.icon} text-2xl text-primary-blue`} />
                        </div>
                        <span className="font-mono text-xs text-text-muted">{item.num}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-text-dark mb-3 tracking-tight">
                        {item.title}
                      </h3>
                      <p className="text-text-muted leading-relaxed mb-6 flex-1">{item.desc}</p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {item.tech.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-bg-light text-text-muted border border-border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <span className="text-primary-blue font-semibold text-sm inline-flex items-center gap-2 mt-auto">
                        Read how we build them
                        <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" aria-hidden="true" />
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Agent network — visual anatomy */}
        <section className="relative py-24 border-t border-border bg-bg-light overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />
          <div className="container relative z-10">
            <Animated animation="fadeInUp">
              <div className="max-w-3xl mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-5">
                  <span className="w-6 h-px bg-text-muted" />
                  How an agent runs
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark tracking-tighter leading-[1.1]">
                  Orchestration you can actually debug.
                </h2>
                <p className="text-text-muted leading-relaxed mt-4 max-w-2xl">
                  Every node is typed, every edge is traced, every call is replayable. If it
                  breaks at 2am, we know why before the page finishes loading.
                </p>
              </div>
            </Animated>
            <Animated animation="fadeInUp" delay={0.1}>
              <AgentGraph />
            </Animated>
          </div>
        </section>

        {/* Proof strip — dense link-outs */}
        <section className="border-y border-border bg-bg-light/50 py-12">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  eyebrow: 'Case studies',
                  title: 'What we shipped, with the numbers.',
                  href: '/case-studies',
                },
                {
                  eyebrow: 'Engineering',
                  title: 'How we build — evals, LLMOps, guardrails.',
                  href: '/engineering',
                },
                {
                  eyebrow: 'Writing',
                  title: 'Technical posts on agents and RAG in production.',
                  href: '/blog',
                },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-start justify-between gap-4 py-3 border-b border-border md:border-b-0 md:border-r md:last:border-r-0 md:pr-8 last:pr-0"
                >
                  <div>
                    <div className="font-mono text-[11px] uppercase tracking-wider text-text-muted mb-2">
                      {item.eyebrow}
                    </div>
                    <div className="text-text-dark font-semibold leading-snug group-hover:text-primary-blue transition-colors">
                      {item.title}
                    </div>
                  </div>
                  <i className="ri-arrow-right-up-line text-xl text-text-muted group-hover:text-primary-blue group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all mt-1" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section relative">
          <div className="absolute inset-0 grid-pattern opacity-[0.06] pointer-events-none" />
          <div className="container relative z-10">
            <Stagger className="stats-grid" staggerDelay={0.1}>
              {[
                { value: String(COMPANY_STATS.foundedYear), label: 'Founded' },
                { value: `${COMPANY_STATS.clientsServed}+`, label: 'Clients Served' },
                { value: `${COMPANY_STATS.projectsDelivered}+`, label: 'Projects Delivered' },
                { value: `${COMPANY_STATS.yearsShipping}+`, label: 'Years Experience' },
              ].map((stat, i) => (
                <StaggerItem key={i}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, type: 'spring', stiffness: 200 }}
                    viewport={{ once: true }}
                  >
                    <StatCard value={stat.value} label={stat.label} />
                  </motion.div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Tech Stack — credibility strip */}
        <section className="py-20 border-t border-border">
          <div className="container">
            <Animated animation="fadeInUp">
              <div className="max-w-3xl mb-10">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-5">
                  <span className="w-6 h-px bg-text-muted" />
                  Stack
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark tracking-tighter leading-[1.1]">
                  Model-agnostic by design.
                </h2>
              </div>
            </Animated>

            <div className="grid md:grid-cols-4 gap-6 md:gap-10">
              {[
                {
                  label: 'Models',
                  items: ['Claude 4', 'GPT-4.1 / 4o', 'Gemini 2.5', 'Llama 3.3', 'Mistral'],
                },
                {
                  label: 'Retrieval',
                  items: ['pgvector', 'Weaviate', 'Qdrant', 'bge-reranker-v2', 'Cohere rerank-3.5'],
                },
                {
                  label: 'Orchestration',
                  items: ['LangGraph', 'MCP', 'Axolotl + TRL', 'LoRA / DPO', 'FastAPI'],
                },
                {
                  label: 'Ops',
                  items: ['Langfuse', 'Braintrust', 'OpenTelemetry', 'Llama Guard 3', 'OPA policy'],
                },
              ].map((group) => (
                <div key={group.label}>
                  <div className="font-mono text-[11px] uppercase tracking-wider text-text-muted mb-4 pb-3 border-b border-border">
                    {group.label}
                  </div>
                  <ul className="space-y-2.5">
                    {group.items.map((item) => (
                      <li key={item} className="font-mono text-sm text-text-dark">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden py-24 border-t border-border">
          <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
          <FloatingOrbs />
          <div className="absolute inset-0 grid-pattern opacity-[0.05] pointer-events-none" />
          <div className="container relative z-10">
            <Animated animation="fadeInUp">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/60 mb-6">
                  <span className="w-6 h-px bg-white/40" />
                  Let&apos;s build
                </div>
                <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tightest leading-[1.05] mb-6">
                  Have an AI problem
                  <br />
                  <GradientText>worth shipping?</GradientText>
                </h2>
                <p className="text-lg md:text-xl text-white/70 leading-relaxed mb-10 max-w-2xl">
                  Tell us what you&apos;re trying to build. If it&apos;s a good fit, you&apos;ll be on a
                  call with a founder within 48 hours — not a sales rep.
                </p>
                <div className="flex gap-6 flex-wrap items-center">
                  <Magnetic strength={0.3}>
                    <Button variant="ctaWhite" asChild>
                      <Link href="/contact">
                        <span>Start a conversation</span>
                        <i className="ri-arrow-right-line" aria-hidden="true" />
                      </Link>
                    </Button>
                  </Magnetic>
                  <a
                    href="mailto:info@mobirizer.com"
                    className="font-mono text-sm text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5"
                  >
                    info@mobirizer.com
                  </a>
                </div>
              </div>
            </Animated>
          </div>
        </section>
      </main>
    </>
  );
}
