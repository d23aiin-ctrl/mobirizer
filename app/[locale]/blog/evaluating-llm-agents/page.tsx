'use client';

import Link from 'next/link';
import { Header, Footer, EnglishOnlyNotice, Badge } from '@/components';
import { Animated } from '@/components/ui';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateArticleSchema, generateBreadcrumbSchema } from '@/lib/jsonld';

const articleSchema = generateArticleSchema({
  title: 'How we evaluate LLM agents in production',
  description:
    'The eval stack we run in production: offline replay, shadow traffic, live regression gates, and the three metrics that drive every release.',
  slug: 'evaluating-llm-agents',
  datePublished: '2026-03-18',
  readTime: 'PT12M',
});

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Blog', url: '/blog' },
  { name: 'Evaluating LLM agents in production', url: '/blog/evaluating-llm-agents' },
]);

export default function EvaluatingAgentsPost() {
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
                  <li className="breadcrumb-item active" aria-current="page">Evaluating LLM agents</li>
                </ol>
              </nav>
            </div>

            <Badge icon="ri-robot-2-line" variant="default">Engineering · 12 min read · 2026-03-18</Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
              How we evaluate LLM agents in production
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-10">
              Unit tests for agents are a lie. Here is the eval stack we actually run in production,
              the scoring rubrics we trust more than vibes, and the three metrics that survived every
              customer launch.
            </p>
          </Animated>

          <div className="prose prose-lg max-w-none text-text-dark leading-relaxed space-y-6">
            <h2 className="text-2xl font-bold mt-10">The problem with agent evals</h2>
            <p>
              An agent isn&apos;t a function — it&apos;s a distribution. Same input, different trajectory.
              Classical assertion-style tests fail because there is no single correct answer; there is
              a band of acceptable behavior. The job of an eval system is to measure whether you are
              inside that band, and which direction you are drifting.
            </p>

            <h2 className="text-2xl font-bold mt-10">The three layers we run</h2>
            <p>
              We split evals into three layers, each answering a different question.
            </p>

            <h3 className="text-xl font-bold mt-6">1. Offline — trajectory replay</h3>
            <p>
              Before merge, every change runs against a frozen set of ~200 curated conversations. Each
              conversation has labeled expected behaviors: tools the agent should call, refusals it
              should produce, and final-answer shape. We use LLM-as-judge with Claude for rubric
              scoring, but we verify a 10% random sample with a human reviewer every week. When the
              judge drifts from humans, we retrain the judge prompt.
            </p>

            <h3 className="text-xl font-bold mt-6">2. Online — shadow traffic</h3>
            <p>
              New agent versions run in shadow mode against a slice of real traffic for 24–72 hours.
              The shadow response never reaches the user; it is scored against the production response
              by three comparators: tool-call overlap, final-answer semantic similarity (using
              bge-reranker), and a rubric judgement. Regressions of more than 3% on any metric block
              the rollout automatically.
            </p>

            <h3 className="text-xl font-bold mt-6">3. Live — the three metrics</h3>
            <p>
              In production we track many things, but three drive every decision:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Resolution rate</strong> — did the session end with the user&apos;s stated
                intent met? Measured by a downstream classifier on the final user message ("Thanks",
                "That&apos;s not what I asked", a re-ask of the original question).
              </li>
              <li>
                <strong>Tool-call precision</strong> — of the tools the agent invoked, how many were
                necessary for the answer? Measured post-hoc by replaying without each tool and scoring
                if the final answer degrades.
              </li>
              <li>
                <strong>Escape-hatch rate</strong> — how often did the agent hand off, refuse, or
                produce an "I don&apos;t know." This is a stability metric: a sudden rise means the
                upstream model updated, your retrieval is degrading, or you shipped a bad prompt.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-10">What we stopped doing</h2>
            <p>
              We stopped chasing absolute accuracy scores. For open-ended tasks, "73% accuracy"
              measures the dataset more than the agent. We stopped scoring on exact-match.
              We stopped relying on a single LLM judge; quorum with two judges (Claude + GPT-4o) and a
              human tiebreaker caught 14% of false-positives our old single-judge setup missed.
            </p>

            <h2 className="text-2xl font-bold mt-10">The tooling stack</h2>
            <p>
              Our current stack: Braintrust for offline evals and dataset versioning, Langfuse for
              production traces and spans, and a thin internal harness that wires together replay,
              shadow routing, and the regression gates in CI. None of these were our first choice;
              we cycled through three eval platforms before this combination held up.
            </p>

            <h2 className="text-2xl font-bold mt-10">The uncomfortable truth</h2>
            <p>
              Evals are a product. You will spend more time maintaining the eval set than the agent
              itself. Budget for it. Assign an owner. Review the dataset quarterly — customer
              behavior shifts, and an eval set that worked six months ago will quietly stop measuring
              the thing you care about.
            </p>

            <div className="mt-12 p-8 rounded-2xl bg-bg-light">
              <h3 className="text-xl font-bold mb-3">Need an eval system that actually holds up?</h3>
              <p className="text-text-muted mb-4">
                We&apos;ve built this stack for banking, government, and healthcare agents. Happy to
                walk through what would work for yours.
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
