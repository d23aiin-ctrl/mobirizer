'use client';

import Link from 'next/link';
import { Header, Footer, EnglishOnlyNotice, Badge } from '@/components';
import { Animated } from '@/components/ui';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/jsonld';

const articleSchema = generateArticleSchema({
  title: 'Production RAG in 2026: what works, what we stopped doing',
  description:
    'Chunking strategies, hybrid retrieval, re-rankers, and why we stopped reaching for a dedicated vector DB on roughly half our deployments.',
  slug: 'production-rag-2026',
  datePublished: '2026-02-04',
  readTime: 'PT15M',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: 'Production RAG in 2026', url: '/blog/production-rag-2026' },
]);

export default function ProductionRAGPost() {
  return (
    <>
      <JsonLd data={[articleSchema, breadcrumbSchema]} />
      <Header activePage="resources" />
      <EnglishOnlyNotice />

      <article className="pt-16 pb-20">
        <div className="container max-w-3xl">
          <Animated animation="fadeInUp">
            <div className="breadcrumb-wrapper mb-6 px-0">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/blog">Blog</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Production RAG in 2026</li>
                </ol>
              </nav>
            </div>

            <Badge icon="ri-database-2-line" variant="default">Engineering · 15 min read · 2026-02-04</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
              Production RAG in 2026: what works, what we stopped doing
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-10">
              Every RAG failure mode we&apos;ve debugged in the last year, mapped to the fix that
              actually worked. Plus: why we stopped reaching for a dedicated vector DB on roughly
              half our deployments.
            </p>
          </Animated>

          <div className="prose prose-lg max-w-none text-text-dark leading-relaxed space-y-6">
            <h2 className="text-2xl font-bold mt-10">The 2024 playbook is wrong in 2026</h2>
            <p>
              The default RAG recipe from two years ago — chunk, embed, top-k, stuff — still works
              for demos. It quietly breaks in production for three reasons: long-context models
              (Claude Sonnet, Gemini 2.5) make top-k less useful, re-rankers have gotten good enough
              to replace embedding quality, and the hybrid lexical + semantic stack now outperforms
              dense-only on every benchmark we care about.
            </p>

            <h2 className="text-2xl font-bold mt-10">Chunking: smaller and smarter</h2>
            <p>
              Fixed-size 1024-token chunks are a crutch. Two approaches that actually move quality:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Structure-aware chunking</strong> — split on markdown headings, code blocks,
                table boundaries. For PDFs, we run a layout model (Unstructured, or a fine-tuned
                LayoutLMv3) first, then chunk within detected regions.
              </li>
              <li>
                <strong>Propositional chunking</strong> — for Q&amp;A-style corpora, use an LLM to
                decompose documents into standalone propositions. Embedding quality jumps because
                each vector represents one claim, not five half-claims.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-10">Retrieval: hybrid, always</h2>
            <p>
              Dense retrieval alone fails on acronyms, product codes, regulatory identifiers, and any
              vocabulary the embedding model didn&apos;t see during training. We run BM25 + dense
              in parallel, then fuse with Reciprocal Rank Fusion (k=60 is a fine default). The ratio
              that works for us is 40/60 lexical/dense for technical corpora, 20/80 for conversational.
            </p>
            <p>
              Then: always re-rank. A 2-stage pipeline — recall 50 with hybrid, re-rank to 8 with
              bge-reranker-v2 or Cohere rerank-3.5 — outperforms any single-stage retriever we&apos;ve
              tested. The re-ranker is the single biggest quality lever most teams skip.
            </p>

            <h2 className="text-2xl font-bold mt-10">The vector DB question</h2>
            <p>
              For corpora under ~1M chunks with <em>static</em> or slow-changing data, Postgres with
              pgvector (HNSW index) has been enough. It saves us a service to operate, gives us
              transactional writes, and query latency is under 40ms p95 on modest hardware. We reach
              for Weaviate or Qdrant when we need: billion-scale, multi-tenant filtering at the index
              level, or tight freshness SLAs on high-write workloads.
            </p>
            <p>
              If you are in the middle band — 1M to 100M chunks — benchmark both before committing.
              The operational cost of a dedicated vector service is often underestimated.
            </p>

            <h2 className="text-2xl font-bold mt-10">Context assembly</h2>
            <p>
              Don&apos;t just concatenate the top-k. We pass retrieved chunks with explicit metadata
              (source, section, confidence) and ask the model to cite. This does three things: it
              surfaces hallucinations at review time, it produces grounded UIs that show sources, and
              it lets us measure retrieval quality post-hoc from citation accuracy.
            </p>

            <h2 className="text-2xl font-bold mt-10">The quality loop</h2>
            <p>
              Without a retrieval eval set you are flying blind. We maintain two sets: a curated
              "gold" set of 100 queries with known-good passages, scored on Recall@5 and NDCG@5, and
              a rolling "weakness" set built from production failures — every time a user said
              "that&apos;s wrong", the retrieved context goes into a dataset that gates the next
              retrieval change.
            </p>

            <h2 className="text-2xl font-bold mt-10">What we stopped doing</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Fine-tuning embedding models on customer data. The cost-to-quality ratio lost against
                a good re-ranker on every benchmark we ran.
              </li>
              <li>
                Multi-query expansion by default. It doubles retrieval cost for a 2–4% recall bump
                on most corpora. We use it only when we can measure the lift.
              </li>
              <li>
                Separate retrieval and answer models for simple Q&amp;A. Long-context models can
                tolerate larger context windows than we give them credit for, and a single-pass
                design is easier to debug.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-10">The short version</h2>
            <p>
              Use structured chunking. Always hybrid-retrieve. Always re-rank. Start with pgvector.
              Instrument retrieval quality like you instrument answer quality. And keep asking
              whether the latest context window makes your retrieval layer irrelevant — sometimes
              the answer is genuinely yes.
            </p>

            <div className="mt-12 p-8 rounded-2xl bg-bg-light">
              <h3 className="text-xl font-bold mb-3">Building or debugging a RAG system?</h3>
              <p className="text-text-muted mb-4">
                We&apos;ve shipped production RAG for legal, medical, and government clients. Happy to
                look at yours.
              </p>
              <Link href="/contact" className="text-primary-blue font-semibold inline-flex items-center gap-2">
                Talk to us <i className="ri-arrow-right-line" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
