/**
 * Industry verticals — first-class navigation surface for enterprise/gov
 * buyers who search by sector, not by technology. Each industry aggregates
 * existing products, case studies, and solutions filtered by relevance.
 */

export type IndustrySlug = 'government' | 'bfsi' | 'healthcare' | 'education';

export interface Industry {
  slug: IndustrySlug;
  name: string;
  icon: string;
  headline: string;
  /** One-line positioning shown under the H1 */
  subhead: string;
  /** Single anchor stat for this vertical */
  anchorMetric: { value: string; label: string };
  /** Proof points — links to existing product/case-study pages */
  proof: {
    label: string;
    href: string;
    excerpt: string;
    outcomes: { value: string; label: string }[];
  }[];
  /** Capabilities we deliver in this vertical (solution slugs) */
  capabilities: { title: string; description: string; href: string }[];
}

export const industries: Record<IndustrySlug, Industry> = {
  government: {
    slug: 'government',
    name: 'Government',
    icon: 'ri-government-line',
    headline: 'AI for citizen-facing services, not slide decks.',
    subhead:
      'Government-grade AI deployed in production for citizen engagement, grievance management, and public health programs. Built for data residency, audit trails, and the realities of public infrastructure.',
    anchorMetric: { value: '6+', label: 'live government deployments' },
    proof: [
      {
        label: 'D23.ai — WhatsApp-native AI assistant',
        href: '/products/d23-ai',
        excerpt:
          "India's first WhatsApp-native AI assistant supporting eleven Indian languages — voice, image, train PNR, web search — designed for first-time-online users.",
        outcomes: [
          { value: '5,000+', label: 'active users' },
          { value: '1M+', label: 'messages processed' },
          { value: '11+', label: 'languages' },
        ],
      },
      {
        label: 'JanSeva — citizen engagement for elected representatives',
        href: '/products/janseva',
        excerpt:
          'WhatsApp-based grievance management with voice support and sentiment analytics — production for over two years.',
        outcomes: [
          { value: '95%', label: 'resolution rate' },
          { value: '6', label: 'languages' },
          { value: '24/7', label: 'uptime' },
        ],
      },
    ],
    capabilities: [
      { title: 'Multilingual conversational AI', description: 'WhatsApp / voice / IVR — designed for low-bandwidth and first-time digital users.', href: '/solutions/conversational-ai' },
      { title: 'Workflow automation', description: 'Grievance routing, document processing, intent classification — auditable and reversible.', href: '/solutions/agentic-ai' },
      { title: 'Custom development', description: 'Bespoke AI platforms for ministry-level digitization initiatives.', href: '/solutions/custom-development' },
    ],
  },
  bfsi: {
    slug: 'bfsi',
    name: 'BFSI',
    icon: 'ri-bank-line',
    headline: 'AI for banking — under audit, under SLA, under NDA.',
    subhead:
      'Production AI for KYC, document processing, sanctions screening, and customer onboarding — engineered to RBI master direction, with data residency in India and explainable decisions for every automated action.',
    anchorMetric: { value: '₹2.3Cr', label: 'annual savings on a single deployment' },
    proof: [
      {
        label: 'KYC review pipeline — Top-5 Indian co-operative bank',
        href: '/case-studies/regional-bank-kyc-agent',
        excerpt:
          'Multi-agent document-processing system reducing median review time from 6 days to 11 minutes — with zero adverse RBI audit findings.',
        outcomes: [
          { value: '94%', label: 'straight-through processing' },
          { value: '11 min', label: 'median review time' },
          { value: '₹2.3Cr', label: 'annual labor savings' },
        ],
      },
      {
        label: 'WhatsApp Commerce — conversational checkout',
        href: '/products/whatsapp-commerce',
        excerpt:
          'Native WhatsApp commerce for retail customers — catalogs, payments, automated checkout, CRM integration. 98% open rates beat email and SMS combined.',
        outcomes: [
          { value: '98%', label: 'open rate' },
          { value: '45%', label: 'higher conversion' },
        ],
      },
    ],
    capabilities: [
      { title: 'Agentic AI pipelines', description: 'Multi-agent orchestration with typed tool schemas, audit trails, and human-in-the-loop escape hatches.', href: '/solutions/agentic-ai' },
      { title: 'AI integration', description: 'Connect to core banking, CRM, and KYC providers — on-prem or in-VPC.', href: '/solutions/ai-integration' },
      { title: 'Custom fine-tuning', description: 'Domain-specific models for compliance, risk, and document understanding.', href: '/solutions/custom-development' },
    ],
  },
  healthcare: {
    slug: 'healthcare',
    name: 'Healthcare',
    icon: 'ri-heart-pulse-line',
    headline: 'AI for hospitals and ministries, not consumer demos.',
    subhead:
      'Patient records, clinician workflows, and health-program platforms designed for public hospitals, government health departments, and the realities of low-bandwidth deployments.',
    anchorMetric: { value: '100K+', label: 'patient records under management' },
    proof: [
      {
        label: 'Xappy — Sri Lanka Ministry of Health',
        href: '/products/xappy',
        excerpt:
          'National healthcare digitization initiative — electronic health records, multi-facility support, analytics, and clinician workflow on low-bandwidth infrastructure.',
        outcomes: [
          { value: '100K+', label: 'records managed' },
          { value: '6+', label: 'facilities' },
          { value: 'Gov', label: 'grade security' },
        ],
      },
    ],
    capabilities: [
      { title: 'Healthcare-specific AI', description: 'Triage, document understanding, clinical note generation tuned for medical vocabulary.', href: '/solutions/custom-development' },
      { title: 'Conversational AI', description: 'Patient-facing chat and voice for appointments, reminders, and follow-up — multilingual.', href: '/solutions/conversational-ai' },
      { title: 'AI integration', description: 'EHR connectors, HIE bridges, and HIS integration for hospital networks.', href: '/solutions/ai-integration' },
    ],
  },
  education: {
    slug: 'education',
    name: 'Education',
    icon: 'ri-graduation-cap-line',
    headline: 'AI tutoring that holds up in the classroom.',
    subhead:
      'Adaptive learning and photo-to-solution AI built for the realities of Indian K-12 — multilingual, low-cost-per-session, and resilient on intermittent connectivity.',
    anchorMetric: { value: '1', label: 'production tutoring platform' },
    proof: [
      {
        label: 'RoboGuru — AI tutor with photo-to-solution',
        href: '/products/roboguru',
        excerpt:
          'AI-powered tutoring assistant — students photograph a problem and get a step-by-step solution with concept explanations. Adaptive across math and science.',
        outcomes: [
          { value: 'K-12', label: 'curriculum' },
          { value: 'Photo→', label: 'solution' },
          { value: 'Adaptive', label: 'learning' },
        ],
      },
    ],
    capabilities: [
      { title: 'Conversational AI tutors', description: 'Subject-grounded chat that resists hallucination and explains its reasoning.', href: '/solutions/conversational-ai' },
      { title: 'Custom AI development', description: 'Curriculum-tuned models, photo-to-solution pipelines, and adaptive assessment.', href: '/solutions/custom-development' },
      { title: 'AI integration', description: 'LMS connectors, SIS bridges, and parent/teacher dashboards.', href: '/solutions/ai-integration' },
    ],
  },
};

export const industrySlugs: IndustrySlug[] = ['government', 'bfsi', 'healthcare', 'education'];
