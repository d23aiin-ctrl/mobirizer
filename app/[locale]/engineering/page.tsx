'use client';

import Link from 'next/link';
import { Header, Footer, EnglishOnlyNotice, Badge, Button } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, motion , PageHeroBackground } from '@/components/ui';

const pillars = [
  {
    id: 'evals',
    icon: 'ri-test-tube-line',
    title: 'Evals first, then features',
    summary:
      'Before we ship an agent, we ship the dataset that grades it. Offline replay, shadow traffic, live regression gates — all wired into CI.',
    tools: ['Braintrust', 'Langfuse', 'LLM-as-judge quorum', 'Human-in-the-loop sampling'],
  },
  {
    id: 'llmops',
    icon: 'ri-dashboard-3-line',
    title: 'LLMOps & observability',
    summary:
      'Every prompt is versioned. Every trace is indexed. We treat prompts like schemas — breaking changes get reviews, deprecations get migration notes.',
    tools: ['Langfuse', 'OpenTelemetry', 'Prompt registry with semver', 'Cost + latency SLOs per route'],
  },
  {
    id: 'guardrails',
    icon: 'ri-shield-keyhole-line',
    title: 'Guardrails & safety',
    summary:
      'Input validation, output classifiers, deterministic policy layers. Guardrails are not a single LLM call — they are a layered pipeline with audit logs.',
    tools: ['Llama Guard 3', 'Prompt-injection classifiers', 'Policy-as-code (Open Policy Agent)', 'PII scrubbing at ingress and egress'],
  },
  {
    id: 'finetuning',
    icon: 'ri-focus-2-line',
    title: 'Fine-tuning, on purpose',
    summary:
      'We fine-tune when a smaller model + your data beats a frontier model on your task — not because fine-tuning is trendy. Usually SFT + DPO; rarely RLHF.',
    tools: ['LoRA / QLoRA', 'Axolotl + TRL', 'Axolotl-style data recipes', 'On-prem training on H100 / H200'],
  },
  {
    id: 'mcp',
    icon: 'ri-plug-line',
    title: 'MCP & tool orchestration',
    summary:
      'Tools are the I/O of an agent. We build against the Model Context Protocol so the same tool surface works across Claude, GPT, and open models. No vendor lock-in.',
    tools: ['Model Context Protocol', 'LangGraph orchestration', 'Typed tool schemas', 'Idempotent tool handlers with retries'],
  },
  {
    id: 'retrieval',
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

export default function EngineeringPage() {
  return (
    <>
      <Header activePage="resources" />
      <EnglishOnlyNotice />

      <section className="page-header"><PageHeroBackground />
        <div className="container relative z-10">
          <Animated animation="fadeInUp">
            <Badge icon="ri-code-s-slash-line" variant="white">
              How we build
            </Badge>
          </Animated>
          <Animated animation="fadeInUp" delay={0.1}>
            <h1>Engineering discipline, not AI theatre.</h1>
          </Animated>
          <Animated animation="fadeInUp" delay={0.2}>
            <p>
              The six pillars that show up in every production AI system we ship. None of them are
              glamorous; all of them are load-bearing.
            </p>
          </Animated>
        </div>
      </section>

      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Engineering</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Stagger>
            <div className="grid md:grid-cols-2 gap-6">
              {pillars.map((p) => (
                <StaggerItem key={p.id}>
                  <HoverCard>
                    <div className="card card-hover p-8 h-full">
                      <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 flex items-center justify-center mb-5">
                        <i className={`${p.icon} text-2xl text-primary-blue`} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{p.title}</h3>
                      <p className="text-text-muted leading-relaxed mb-5">{p.summary}</p>
                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {p.tools.map((t) => (
                          <span
                            key={t}
                            className="text-xs px-3 py-1 rounded-full bg-bg-light text-text-dark border border-border"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      <section className="section bg-bg-light">
        <div className="container">
          <Animated animation="fadeInUp">
            <div className="section-header-center">
              <Badge icon="ri-cpu-line" variant="default">Model palette</Badge>
              <h2>We&apos;re model-agnostic on purpose.</h2>
              <p>
                The best model is the one that holds up on your evals, fits your latency budget, and
                lives where your data can legally live. That changes every six months; we build so it
                can.
              </p>
            </div>
          </Animated>
          <div className="max-w-4xl mx-auto mt-10">
            <div className="card overflow-hidden">
              <div className="grid grid-cols-12 bg-bg-light px-6 py-4 text-sm font-semibold text-text-dark border-b border-border">
                <div className="col-span-5">Model family</div>
                <div className="col-span-3">Provider</div>
                <div className="col-span-4">Where it earns its keep</div>
              </div>
              {modelPalette.map((m, i) => (
                <motion.div
                  key={m.name}
                  className="grid grid-cols-12 px-6 py-4 text-sm border-b border-border last:border-b-0 items-center"
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

      <section className="section">
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

      <Footer />
    </>
  );
}
