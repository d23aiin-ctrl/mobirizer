import { siteConfig } from '@/lib/metadata';
import { COMPANY_STATS, HERO_ANCHOR } from '@/lib/companyStats';

export const dynamic = 'force-static';

export function GET() {
  const base = siteConfig.url;
  const body = `# Mobirizer — AI Development Studio
> ${HERO_ANCHOR.number} ${HERO_ANCHOR.sentence}

Mobirizer is an AI development studio building production-grade AI systems for
government, BFSI, healthcare, and enterprise clients. Founded in
${COMPANY_STATS.foundedYear}; AI-first since 2019. ${COMPANY_STATS.clientsServed}+
clients, ${COMPANY_STATS.projectsDelivered}+ projects delivered, headquartered
in Vaishali, Bihar, India.

We specialize in agentic AI, retrieval-augmented generation (RAG), fine-tuning,
LLMOps, evals, and guardrails — model-agnostic across Claude, GPT, Gemini, and
open-weight models (Llama, Mistral).

## Core pages
- [Home](${base}/en): Hero, products, capabilities overview
- [Products](${base}/en/products): Live AI products — D23.ai, RoboGuru, OHGRT, Xappy, JanSeva, WhatsApp Commerce
- [Solutions](${base}/en/solutions): Agentic AI, Conversational AI, AI Integration, Custom Development
- [Engineering](${base}/en/engineering): How we build — evals, LLMOps, guardrails, fine-tuning, MCP, retrieval
- [Case Studies](${base}/en/case-studies): Production AI deployments with measurable outcomes
- [Blog](${base}/en/blog): Technical writing on agents, RAG, and production AI
- [Company](${base}/en/company): Founding story, leadership, values
- [Contact](${base}/en/contact): Start a project, book a consultation

## Products
- [D23.ai](${base}/en/products/d23-ai): WhatsApp-native AI assistant supporting 11+ Indian languages
- [WhatsApp Commerce](${base}/en/products/whatsapp-commerce): E-commerce on WhatsApp — catalogs, payments, automated checkout
- [RoboGuru](${base}/en/products/roboguru): AI education platform with photo-to-solution AI
- [OHGRT](${base}/en/products/ohgrt): Professional AI voice generation — text-to-speech, voice cloning, video dubbing
- [Xappy](${base}/en/products/xappy): Healthcare management platform with electronic health records
- [JanSeva](${base}/en/products/janseva): AI citizen-engagement platform for elected representatives

## Solutions
- [Agentic AI](${base}/en/solutions/agentic-ai): Autonomous agents that reason, plan, and execute multi-step tasks
- [Conversational AI](${base}/en/solutions/conversational-ai): Chatbots and voice assistants with multi-turn context
- [AI Integration](${base}/en/solutions/ai-integration): Connect AI to CRMs, ERPs, legacy systems
- [Custom AI Development](${base}/en/solutions/custom-development): Tailored AI for specific business requirements

## Technical writing
- [Evaluating LLM agents in production](${base}/en/blog/evaluating-llm-agents): Eval stack, shadow traffic, regression gates
- [Production RAG in 2026](${base}/en/blog/production-rag-2026): Hybrid retrieval, re-ranking, what we stopped doing

## Locales
This site is available in five languages — URLs share the same path with the
locale prefix swapped (e.g. ${base}/hi/products):
- en (English), hi (Hindi), ta (Tamil), te (Telugu), bn (Bengali)

## Optional
- [Sitemap](${base}/sitemap.xml)
- [Robots](${base}/robots.txt)
- Email: ${siteConfig.company.email}
`;
  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
