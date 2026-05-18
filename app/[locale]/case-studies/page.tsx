'use client';

import Link from 'next/link';
import { Header, Footer, EnglishOnlyNotice, Badge } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard , PageHeroBackground } from '@/components/ui';

const caseStudies = [
  {
    slug: 'regional-bank-kyc-agent',
    sector: 'Banking',
    client: 'Regional bank (under NDA)',
    title: 'Cutting KYC review from 6 days to 11 minutes.',
    excerpt:
      'A multi-agent document-processing system that reads ID documents, validates against sanctions lists, and flags anomalies — deployed to a regional bank processing 40,000+ onboardings per month.',
    outcomes: [
      { value: '94%', label: 'straight-through processing' },
      { value: '11 min', label: 'median review time' },
      { value: '₹2.3Cr', label: 'annual labor savings' },
    ],
    icon: 'ri-bank-line',
    illustrative: true,
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <Header activePage="resources" />
      <EnglishOnlyNotice />

      <section className="page-header"><PageHeroBackground />
        <div className="container relative z-10">
          <Animated animation="fadeInUp">
            <Badge icon="ri-award-line" variant="white">
              What we&apos;ve shipped
            </Badge>
          </Animated>
          <Animated animation="fadeInUp" delay={0.1}>
            <h1>Case studies.</h1>
          </Animated>
          <Animated animation="fadeInUp" delay={0.2}>
            <p>
              Real projects, real outcomes, real constraints. We write these up with the client&apos;s
              permission, not from a marketing brief.
            </p>
          </Animated>
        </div>
      </section>

      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Case Studies</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Stagger>
            <div className="grid md:grid-cols-1 gap-8 max-w-4xl mx-auto">
              {caseStudies.map((cs) => (
                <StaggerItem key={cs.slug}>
                  <HoverCard>
                    <Link href={`/case-studies/${cs.slug}`} className="block">
                      <article className="card card-hover p-8 md:p-10">
                        <div className="flex items-start gap-5 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                            <i className={`${cs.icon} text-2xl text-primary-blue`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 flex-wrap mb-2">
                              <span className="text-xs font-semibold text-primary-blue uppercase tracking-wide">
                                {cs.sector}
                              </span>
                              <span className="text-xs text-text-muted">·</span>
                              <span className="text-xs text-text-muted">{cs.client}</span>
                              {cs.illustrative && (
                                <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 font-medium">
                                  Illustrative template
                                </span>
                              )}
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold leading-tight">{cs.title}</h2>
                          </div>
                        </div>
                        <p className="text-text-muted leading-relaxed mb-6">{cs.excerpt}</p>
                        <div className="grid grid-cols-3 gap-6 mb-6 pt-6 border-t border-border">
                          {cs.outcomes.map((o) => (
                            <div key={o.label}>
                              <div className="text-3xl font-extrabold text-primary-blue">{o.value}</div>
                              <div className="text-xs text-text-muted mt-1">{o.label}</div>
                            </div>
                          ))}
                        </div>
                        <span className="text-primary-blue font-medium inline-flex items-center gap-2">
                          Read the case study <i className="ri-arrow-right-line" aria-hidden="true" />
                        </span>
                      </article>
                    </Link>
                  </HoverCard>
                </StaggerItem>
              ))}
            </div>
          </Stagger>

          <Animated animation="fadeInUp">
            <div className="text-center mt-12 max-w-2xl mx-auto">
              <p className="text-text-muted">
                More case studies are in review with clients for publication. If you&apos;d like a
                walk-through under NDA, just ask.
              </p>
              <Link
                href="/contact"
                className="text-primary-blue font-semibold inline-flex items-center gap-2 mt-4"
              >
                Request a reference call <i className="ri-arrow-right-line" aria-hidden="true" />
              </Link>
            </div>
          </Animated>
        </div>
      </section>

      <Footer />
    </>
  );
}
