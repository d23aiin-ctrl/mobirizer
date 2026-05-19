'use client';

import Link from 'next/link';
import { Header, Footer, EnglishOnlyNotice, Badge } from '@/components';
import { Animated } from '@/components/ui';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateBreadcrumbSchema } from '@/lib/jsonld';

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: 'Home', url: '/' },
  { name: 'Case Studies', url: '/case-studies' },
  { name: 'Regional bank KYC agent', url: '/case-studies/regional-bank-kyc-agent' },
]);

export default function KYCCaseStudy() {
  return (
    <>
      <JsonLd data={breadcrumbSchema} />
      <Header activePage="resources" />
      <EnglishOnlyNotice />

      <article className="pt-16 pb-20">
        <div className="container max-w-3xl">
          <Animated animation="fadeInUp">
            <div className="breadcrumb-wrapper mb-6 px-0">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                  <li className="breadcrumb-item"><Link href="/case-studies">Case Studies</Link></li>
                  <li className="breadcrumb-item active" aria-current="page">Regional bank KYC agent</li>
                </ol>
              </nav>
            </div>

            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <Badge icon="ri-bank-line" variant="default">BFSI · India</Badge>
              <span className="text-xs px-3 py-1 rounded-full bg-bg-light text-text-muted font-medium">
                Top-5 Indian co-operative bank · under NDA
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold mt-4 mb-6 leading-tight">
              Cutting KYC review from 6 days to 11 minutes.
            </h1>
            <p className="text-xl text-text-muted leading-relaxed mb-10">
              A multi-agent document-processing pipeline deployed to a regional bank with 40,000+
              monthly onboardings. Straight-through processing climbed from 31% to 94% over eight
              weeks, with zero audit findings in the first two regulatory reviews.
            </p>
          </Animated>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="card p-6 text-center">
              <div className="text-4xl font-extrabold text-primary-blue">94%</div>
              <div className="text-sm text-text-muted mt-2">Straight-through processing</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-extrabold text-primary-blue">11 min</div>
              <div className="text-sm text-text-muted mt-2">Median review time (was 6 days)</div>
            </div>
            <div className="card p-6 text-center">
              <div className="text-4xl font-extrabold text-primary-blue">₹2.3Cr</div>
              <div className="text-sm text-text-muted mt-2">Annual labor savings</div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-text-dark leading-relaxed space-y-6">
            <h2 className="text-2xl font-bold mt-10">The problem</h2>
            <p>
              The bank&apos;s retail onboarding pipeline required three human reviewers per applicant:
              one for document authenticity, one for identity matching, one for sanctions-list
              screening. Median turnaround was 6 working days, and 69% of applications needed at
              least one round of clarification, burning 4–6 more days.
            </p>

            <h2 className="text-2xl font-bold mt-10">Constraints</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Regulatory:</strong> RBI KYC master direction, CKYC integration, audit trail for every decision.</li>
              <li><strong>Data residency:</strong> all processing within India, no model calls to overseas endpoints.</li>
              <li><strong>Uptime:</strong> onboarding tied to sales SLAs — 99.5% availability, no batch windows.</li>
              <li><strong>Override:</strong> every automated decision had to be explainable and reversible by a human reviewer.</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10">What we built</h2>
            <p>
              A four-agent pipeline orchestrated through LangGraph, running on self-hosted open models
              (Llama 3.3 70B for reasoning, fine-tuned LayoutLMv3 for document layout). No overseas
              model calls. Everything in-VPC on the bank&apos;s Yotta infrastructure.
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Document agent</strong> — classifies document type, extracts fields, flags
                tampering via a vision model we fine-tuned on 140K samples of genuine/forged IDs.
              </li>
              <li>
                <strong>Identity agent</strong> — matches extracted fields against application data,
                CKYC, and the bank&apos;s existing customer base; resolves name variants using a
                custom phonetic matcher tuned for Indic languages.
              </li>
              <li>
                <strong>Screening agent</strong> — runs sanctions, PEP, and adverse-media checks in
                parallel; merges results into a single risk score with rationale for each hit.
              </li>
              <li>
                <strong>Adjudication agent</strong> — stitches the three outputs together, decides
                auto-approve / auto-reject / human-review. Escape-hatch rate to human review is
                explicitly tuned, not emergent.
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-10">Evals &amp; guardrails</h2>
            <p>
              Every agent ran against a 5,000-case regression suite before release. Shadow mode ran
              for two weeks against live traffic with no production impact; we compared decisions
              with the human team and graded mismatches daily. Go-live threshold: fewer than 0.5%
              false-approvals in the shadow window. Final pre-launch rate: 0.18%.
            </p>

            <h2 className="text-2xl font-bold mt-10">Outcomes</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Median review time fell from 6 days to 11 minutes for auto-approved cases.</li>
              <li>Straight-through processing rose from 31% to 94% over eight weeks.</li>
              <li>Human review team redirected to exception handling; headcount held flat, throughput tripled.</li>
              <li>Zero adverse findings in first two RBI audits.</li>
              <li>Estimated ₹2.3Cr annual savings on labor, plus faster activation → higher customer lifetime value (bank&apos;s own number).</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10">What we&apos;d do differently</h2>
            <p>
              We under-invested in the reviewer UI in the first release. Reviewers couldn&apos;t see
              <em> why </em>the adjudication agent handed off, which eroded trust. Two weeks after
              launch we shipped a reasoning trace panel. Adoption jumped from 60% to 95%. Lesson:
              explainability is a UX problem more than a model problem.
            </p>

            <h2 className="text-2xl font-bold mt-10">Stack</h2>
            <p>
              Llama 3.3 70B (self-hosted on 4×H100), LayoutLMv3 fine-tuned, LangGraph, pgvector,
              Langfuse for tracing, custom eval harness, FastAPI + Celery for the orchestration
              surface, Postgres + Redis. All in-VPC, no overseas calls.
            </p>

            <div className="mt-12 p-8 rounded-2xl bg-gradient-primary text-white">
              <h3 className="text-xl font-bold mb-3 text-white">Interested in a similar system?</h3>
              <p className="text-white/85 mb-4">
                We&apos;ve built regulated-industry AI pipelines for banks, government, and healthcare.
                Happy to walk through what would work for you.
              </p>
              <Link
                href="/contact"
                className="text-white font-semibold inline-flex items-center gap-2 border-b border-white/40 pb-0.5"
              >
                Start a conversation <i className="ri-arrow-right-line" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </>
  );
}
