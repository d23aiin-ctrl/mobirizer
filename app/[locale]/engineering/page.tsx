'use client';

import Link from 'next/link';
import { Header, Footer, EnglishOnlyNotice, Badge, Button } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, motion, PageHeroBackground } from '@/components/ui';

const HANDBOOK_VERSION = '2026.05';
const LAST_UPDATED = '2026-05-19';
const EDITION_NOTES = 'Adds MCP + retrieval sections; revises fine-tuning guidance after Llama 3.3 / Mistral Large.';

const pillars = [
  {
    id: 'evals',
    num: '01',
    icon: 'ri-test-tube-line',
    title: 'Evals first, then features',
    summary:
      'Before we ship an agent, we ship the dataset that grades it. Offline replay, shadow traffic, live regression gates — all wired into CI.',
    tools: ['Braintrust', 'Langfuse', 'LLM-as-judge quorum', 'Human-in-the-loop sampling'],
  },
  {
    id: 'llmops',
    num: '02',
    icon: 'ri-dashboard-3-line',
    title: 'LLMOps & observability',
    summary:
      'Every prompt is versioned. Every trace is indexed. We treat prompts like schemas — breaking changes get reviews, deprecations get migration notes.',
    tools: ['Langfuse', 'OpenTelemetry', 'Prompt registry with semver', 'Cost + latency SLOs per route'],
  },
  {
    id: 'guardrails',
    num: '03',
    icon: 'ri-shield-keyhole-line',
    title: 'Guardrails & safety',
    summary:
      'Input validation, output classifiers, deterministic policy layers. Guardrails are not a single LLM call — they are a layered pipeline with audit logs.',
    tools: ['Llama Guard 3', 'Prompt-injection classifiers', 'Policy-as-code (Open Policy Agent)', 'PII scrubbing at ingress and egress'],
  },
  {
    id: 'finetuning',
    num: '04',
    icon: 'ri-focus-2-line',
    title: 'Fine-tuning, on purpose',
    summary:
      'We fine-tune when a smaller model + your data beats a frontier model on your task — not because fine-tuning is trendy. Usually SFT + DPO; rarely RLHF.',
    tools: ['LoRA / QLoRA', 'Axolotl + TRL', 'Axolotl-style data recipes', 'On-prem training on H100 / H200'],
  },
  {
    id: 'mcp',
    num: '05',
    icon: 'ri-plug-line',
    title: 'MCP & tool orchestration',
    summary:
      'Tools are the I/O of an agent. We build against the Model Context Protocol so the same tool surface works across Claude, GPT, and open models. No vendor lock-in.',
    tools: ['Model Context Protocol', 'LangGraph orchestration', 'Typed tool schemas', 'Idempotent tool handlers with retries'],
  },
  {
    id: 'retrieval',
    num: '06',
    icon: 'ri-search-eye-line',
    title: 'Retrieval & memory',
    summary:
      'Hybrid BM25 + dense retrieval, always re-ranked, always evaluated on Recall@5 / NDCG. Long-term memory is a schema problem, not a vector problem.',
    tools: ['pgvector / Weaviate / Qdrant', 'bge-reranker-v2', 'Cohere rerank-3.5', 'Structured-field memory + facts store'],
  },
];

const modelPalette = [
  { name: 'Claude (Opus, Sonnet, Haiku)', provider: 'Anthropic', usage: 'Reasoning, long-context synthesis, judge models' },
  { name: 'GPT-4o / GPT-4.1', provider: 'OpenAI', usage: 'Multimodal, structured outputs, tool-heavy agents' },
  { name: 'Gemini 2.5', provider: 'Google', usage: '1M+ context workloads, Vertex AI integrations' },
  { name: 'Llama 3.3 / 4, Mistral', provider: 'Open weights', usage: 'On-prem deployments, fine-tuning, data-residency workloads' },
  { name: 'bge, e5, voyage-3', provider: 'Open / Voyage', usage: 'Embeddings and re-ranking' },
];

const editionHistory = [
  { version: '2026.05', date: '2026-05-19', notes: EDITION_NOTES },
  { version: '2026.02', date: '2026-02-12', notes: 'Added LLMOps prompt-registry semver convention.' },
  { version: '2025.11', date: '2025-11-08', notes: 'First public edition. Six pillars formalized.' },
];

function PrintButton() {
  return (
    <button
      type="button"
      onClick={() => typeof window !== 'undefined' && window.print()}
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/30 text-white/90 hover:bg-white/10 hover:border-white/60 text-sm font-mono transition-colors print:hidden"
      aria-label="Print or save handbook as PDF"
    >
      <i className="ri-printer-line" aria-hidden="true" />
      Print · Save as PDF
    </button>
  );
}

export default function EngineeringPage() {
  return (
    <>
      <div className="print:hidden">
        <Header activePage="resources" />
        <EnglishOnlyNotice />
      </div>

      {/* Print-only document header */}
      <div className="hidden print:block px-8 pt-8 pb-4 border-b border-neutral-300">
        <div className="flex items-baseline justify-between">
          <div className="font-mono text-xs uppercase tracking-widest text-neutral-600">
            Mobirizer Engineering Handbook
          </div>
          <div className="font-mono text-xs text-neutral-600">
            v{HANDBOOK_VERSION} · {LAST_UPDATED} · mobirizer.online/engineering
          </div>
        </div>
      </div>

      <section className="page-header print:hidden">
        <PageHeroBackground />
        <div className="container relative z-10">
          <Animated animation="fadeInUp">
            <div className="inline-flex items-center gap-3 mb-5">
              <Badge icon="ri-book-open-line" variant="white">
                Mobirizer Engineering Handbook
              </Badge>
              <span className="font-mono text-xs px-3 py-1 rounded-full bg-white/10 border border-white/20 text-white/80 tabular-nums">
                v{HANDBOOK_VERSION}
              </span>
            </div>
          </Animated>
          <Animated animation="fadeInUp" delay={0.1}>
            <h1>Six pillars. None glamorous. All load-bearing.</h1>
          </Animated>
          <Animated animation="fadeInUp" delay={0.2}>
            <p>
              The discipline that shows up in every production AI system we ship — versioned like
              the software it documents. Read here, or save the whole thing for later.
            </p>
          </Animated>
          <Animated animation="fadeInUp" delay={0.3}>
            <div className="mt-8 flex items-center gap-6 flex-wrap text-sm">
              <PrintButton />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                Last updated · {LAST_UPDATED}
              </span>
            </div>
          </Animated>
        </div>
      </section>

      <div className="breadcrumb-wrapper print:hidden">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Engineering Handbook</li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Table of contents */}
      <section className="section bg-bg-white border-t border-border print:py-6 print:bg-white">
        <div className="container">
          <Animated animation="fadeInUp">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-6">
                <span className="w-6 h-px bg-text-muted" />
                Contents
              </div>
              <ol className="grid sm:grid-cols-2 gap-x-10 gap-y-2 list-none p-0 m-0">
                {pillars.map((p) => (
                  <li key={p.id} className="flex items-baseline gap-4 py-2 border-b border-border">
                    <span className="font-mono text-xs text-text-muted tabular-nums">{p.num}</span>
                    <a href={`#${p.id}`} className="text-text-dark font-medium hover:text-primary-blue transition-colors">
                      {p.title}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          </Animated>
        </div>
      </section>

      <section className="section print:py-4">
        <div className="container">
          <Stagger>
            <div className="grid md:grid-cols-2 gap-6 print:block print:gap-0 max-w-5xl mx-auto">
              {pillars.map((p) => (
                <StaggerItem key={p.id}>
                  <HoverCard>
                    <article id={p.id} className="card card-hover p-8 h-full print:shadow-none print:border-0 print:border-b print:border-neutral-300 print:rounded-none print:p-4 print:break-inside-avoid">
                      <div className="flex items-start gap-4 mb-5 print:mb-2">
                        <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 flex items-center justify-center flex-shrink-0 print:hidden">
                          <i className={`${p.icon} text-2xl text-primary-blue`} aria-hidden="true" />
                        </div>
                        <div>
                          <div className="font-mono text-xs uppercase tracking-wider text-text-muted mb-1 tabular-nums">
                            §{p.num}
                          </div>
                          <h3 className="text-xl font-bold leading-tight m-0">{p.title}</h3>
                        </div>
                      </div>
                      <p className="text-text-muted leading-relaxed mb-5 print:mb-2 print:text-neutral-700">{p.summary}</p>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border print:border-0 print:pt-1">
                        {p.tools.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-3 py-1 rounded-full bg-bg-light text-text-dark border border-border print:bg-transparent print:border-neutral-300"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </article>
                  </HoverCard>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      <section className="section bg-bg-light print:bg-white print:py-4">
        <div className="container">
          <Animated animation="fadeInUp">
            <div className="max-w-3xl mx-auto print:max-w-none">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-4">
                <span className="w-6 h-px bg-text-muted" />
                Appendix A · Model palette
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark tracking-tighter leading-[1.1] mb-4">
                Model-agnostic on purpose.
              </h2>
              <p className="text-text-muted leading-relaxed">
                The best model is the one that holds up on your evals, fits your latency budget, and
                lives where your data can legally live. That changes every six months; we build so it
                can.
              </p>
            </div>
          </Animated>
          <div className="max-w-4xl mx-auto mt-10">
            <div className="card overflow-hidden print:shadow-none print:border print:border-neutral-300">
              <div className="grid grid-cols-12 bg-bg-light px-6 py-4 text-sm font-semibold text-text-dark border-b border-border print:bg-neutral-100">
                <div className="col-span-5">Model family</div>
                <div className="col-span-3">Provider</div>
                <div className="col-span-4">Where it earns its keep</div>
              </div>
              {modelPalette.map((m, i) => (
                <motion.div
                  key={m.name}
                  className="grid grid-cols-12 px-6 py-4 text-sm border-b border-border last:border-b-0 items-center print:break-inside-avoid"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <div className="col-span-5 font-semibold text-text-dark">{m.name}</div>
                  <div className="col-span-3 text-text-muted">{m.provider}</div>
                  <div className="col-span-4 text-text-muted">{m.usage}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Edition history */}
      <section className="section print:py-4 print:break-before-page">
        <div className="container">
          <Animated animation="fadeInUp">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-4">
                <span className="w-6 h-px bg-text-muted" />
                Appendix B · Edition history
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-text-dark tracking-tighter leading-tight mb-8">
                What changed, and when.
              </h2>
              <ul className="space-y-4 list-none p-0 m-0">
                {editionHistory.map((e) => (
                  <li
                    key={e.version}
                    className="grid grid-cols-[auto_auto_1fr] gap-4 items-baseline py-3 border-b border-border last:border-b-0"
                  >
                    <span className="font-mono text-sm font-semibold text-primary-blue tabular-nums">
                      v{e.version}
                    </span>
                    <span className="font-mono text-xs text-text-muted tabular-nums">{e.date}</span>
                    <span className="text-sm text-text-dark">{e.notes}</span>
                  </li>
                ))}
              </ul>
              <p className="font-mono text-xs text-text-muted mt-8 print:mt-4">
                Editions are SemVer-style by year + minor. Major rewrites bump the year prefix.
              </p>
            </div>
          </Animated>
        </div>
      </section>

      <section className="section print:hidden">
        <div className="container">
          <Animated animation="fadeInUp">
            <div className="card p-12 text-center bg-gradient-primary text-white">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 text-white">
                Want the deeper version?
              </h2>
              <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
                We write up the details in the blog and in client architecture reviews. Happy to walk
                through how this would apply to your system.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button variant="ctaWhite" asChild>
                  <Link href="/blog">
                    <span>Read the blog</span>
                    <i className="ri-arrow-right-line" aria-hidden="true" />
                  </Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/contact">
                    <span>Book a technical review</span>
                    <i className="ri-arrow-right-line" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      {/* Print-only document footer */}
      <div className="hidden print:block px-8 py-4 border-t border-neutral-300 text-xs font-mono text-neutral-600">
        © {new Date().getFullYear()} Mobirizer Services Pvt. Ltd. · mobirizer.online/engineering ·
        Page break: any modern browser, ⌘P / Ctrl+P.
      </div>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
}
