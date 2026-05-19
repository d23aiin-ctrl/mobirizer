'use client';

import Link from 'next/link';
import { Header, Footer, EnglishOnlyNotice, Badge } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard , PageHeroBackground } from '@/components/ui';

type CaseStudy = {
  slug: string;
  href: string;
  sector: string;
  client: string;
  title: string;
  excerpt: string;
  outcomes: { value: string; label: string }[];
  icon: string;
};

const caseStudies: CaseStudy[] = [
  {
    slug: 'd23-ai',
    href: '/products/d23-ai',
    sector: 'Consumer AI · India',
    client: "India's first WhatsApp-native AI assistant",
    title: 'WhatsApp AI in 11+ Indian languages, deployed at scale.',
    excerpt:
      'A multi-modal assistant that handles voice messages, image generation, and live information lookup (train PNR, web search) — all inside WhatsApp, in eleven Indian languages. Designed for retention, not novelty: median user returns four times a week.',
    outcomes: [
      { value: '5,000+', label: 'active users' },
      { value: '1M+', label: 'messages processed' },
      { value: '11+', label: 'languages' },
    ],
    icon: 'ri-whatsapp-line',
  },
  {
    slug: 'janseva',
    href: '/products/janseva',
    sector: 'GovTech · India',
    client: '24/7 citizen-engagement platform for elected representatives',
    title: 'Grievance resolution on WhatsApp with 95% first-touch close rate.',
    excerpt:
      'A WhatsApp-based engagement layer for constituency-level grievance management — voice messages, sentiment-tracked analytics, and intent routing across six languages. Production for over two years.',
    outcomes: [
      { value: '95%', label: 'resolution rate' },
      { value: '6', label: 'languages' },
      { value: '24/7', label: 'uptime' },
    ],
    icon: 'ri-government-line',
  },
  {
    slug: 'xappy',
    href: '/products/xappy',
    sector: 'Healthcare · Sri Lanka MoH',
    client: 'National healthcare digitization initiative',
    title: 'Patient records, multi-facility, government-grade.',
    excerpt:
      'A healthcare management platform deployed for the Sri Lanka Ministry of Health digitization initiative — electronic health records, multi-facility support, analytics, and clinician workflow. Designed for low-bandwidth public hospitals.',
    outcomes: [
      { value: '100K+', label: 'records managed' },
      { value: '6+', label: 'facilities' },
      { value: 'Gov', label: 'grade security' },
    ],
    icon: 'ri-heart-pulse-line',
  },
  {
    slug: 'regional-bank-kyc-agent',
    href: '/case-studies/regional-bank-kyc-agent',
    sector: 'BFSI · India',
    client: 'Top-5 Indian co-operative bank · under NDA',
    title: 'Cutting KYC review from 6 days to 11 minutes.',
    excerpt:
      'A multi-agent document-processing pipeline that reads ID documents, validates against sanctions lists, and flags anomalies — deployed to a regional bank processing 40,000+ onboardings per month.',
    outcomes: [
      { value: '94%', label: 'straight-through processing' },
      { value: '11 min', label: 'median review time' },
      { value: '₹2.3Cr', label: 'annual labor savings' },
    ],
    icon: 'ri-bank-line',
  },
  {
    slug: 'ohgrt',
    href: '/products/ohgrt',
    sector: 'Media · Voice AI',
    client: 'Professional voice generation for creators and enterprises',
    title: 'Voice cloning + video dubbing across 10+ languages.',
    excerpt:
      'A production voice platform for content creators and enterprise customers — text-to-speech, voice cloning with consent, and end-to-end video dubbing. Sustained 4.8-star user rating across 2M+ downloads.',
    outcomes: [
      { value: '2M+', label: 'downloads' },
      { value: '10+', label: 'languages' },
      { value: '4.8★', label: 'user rating' },
    ],
    icon: 'ri-voiceprint-line',
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
            <h1>Production AI across 5 sectors. Here&apos;s what we shipped.</h1>
          </Animated>
          <Animated animation="fadeInUp" delay={0.2}>
            <p>
              Real deployments — consumer AI, government, healthcare, banking, and media — with
              the numbers that came out the other side.
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
                    <Link href={cs.href} className="block">
                      <article className="card card-hover p-8 md:p-10">
                        <div className="flex items-start gap-5 mb-6">
                          <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                            <i className={`${cs.icon} text-2xl text-primary-blue`} aria-hidden="true" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 flex-wrap mb-2">
                              <span className="text-xs font-semibold text-primary-blue uppercase tracking-wide">
                                {cs.sector}
                              </span>
                              <span className="text-xs text-text-muted">·</span>
                              <span className="text-xs text-text-muted">{cs.client}</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-bold leading-tight">{cs.title}</h2>
                          </div>
                        </div>
                        <p className="text-text-muted leading-relaxed mb-6">{cs.excerpt}</p>
                        <div className="grid grid-cols-3 gap-6 mb-6 pt-6 border-t border-border">
                          {cs.outcomes.map((o) => (
                            <div key={o.label}>
                              <div className="text-3xl font-extrabold text-primary-blue tabular-nums">{o.value}</div>
                              <div className="text-xs text-text-muted mt-1">{o.label}</div>
                            </div>
                          ))}
                        </div>
                        <span className="text-primary-blue font-medium inline-flex items-center gap-2">
                          Read more <i className="ri-arrow-right-line" aria-hidden="true" />
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
