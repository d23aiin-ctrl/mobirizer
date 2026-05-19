'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Header, Footer, Badge, Button } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, Counter, motion } from '@/components/ui';
import { COMPANY_STATS } from '@/lib/companyStats';

const solutions = [
  {
    id: 'agentic',
    slug: 'agentic-ai',
    icon: 'ri-robot-2-line',
    title: 'Agentic AI',
    subtitle: 'Autonomous AI Systems',
    desc: 'Build autonomous AI agents that can reason, plan, and execute complex multi-step tasks with minimal human intervention. From customer support to workflow automation, our agentic systems work 24/7.',
    features: ['Multi-step reasoning and planning', 'Tool use and API integration', 'Human-in-the-loop workflows', 'Self-correcting behavior'],
  },
  {
    id: 'conversational',
    slug: 'conversational-ai',
    icon: 'ri-chat-3-line',
    title: 'Conversational AI',
    subtitle: 'Chatbots & Voice Assistants',
    desc: 'Build intelligent chatbots and voice assistants that understand context, handle complex queries, and integrate seamlessly with your systems. Available on WhatsApp, web, mobile, and voice platforms.',
    features: ['Natural language understanding', 'Multi-turn conversation handling', 'Multi-language support (11+ languages)', 'CRM, ERP & system integration'],
  },
  {
    id: 'integration',
    slug: 'ai-integration',
    icon: 'ri-plug-line',
    title: 'AI Integration',
    subtitle: 'Seamless System Integration',
    desc: 'Seamlessly integrate AI capabilities into your existing workflows, applications, and business processes. Leverage the latest AI models without disrupting your current operations.',
    features: ['API development and integration', 'Legacy system modernization', 'Data pipeline setup', 'Model deployment & monitoring'],
  },
  {
    id: 'custom',
    slug: 'custom-development',
    icon: 'ri-code-s-slash-line',
    title: 'Custom AI Development',
    subtitle: 'Bespoke AI Solutions',
    desc: 'Bespoke AI solutions tailored to your unique requirements. From data collection and model training to production deployment and ongoing maintenance—the complete AI lifecycle.',
    features: ['Custom model training', 'Fine-tuning existing models', 'MLOps and DevOps', 'Ongoing support & maintenance'],
  },
];

const processSteps = [
  { num: '01', icon: 'ri-search-eye-line', title: 'Discovery', desc: 'We understand your business, challenges, and goals to define the right AI solution. Deep dive into requirements and constraints.' },
  { num: '02', icon: 'ri-pencil-ruler-2-line', title: 'Design', desc: 'We architect the solution, select the right technologies, and create a detailed roadmap. Prototype and validate approach.' },
  { num: '03', icon: 'ri-code-box-line', title: 'Build', desc: 'We develop, test, and iterate rapidly with continuous feedback. Agile sprints with regular demos and quality assurance.' },
  { num: '04', icon: 'ri-rocket-2-line', title: 'Deploy & Support', desc: 'We deploy to production with monitoring, support, and continuous improvement. Ongoing maintenance and optimization.' },
];

const technologies = [
  { icon: 'ri-brain-fill', name: 'OpenAI', desc: 'GPT-4, GPT-4o' },
  { icon: 'ri-sparkling-2-fill', name: 'Anthropic', desc: 'Claude 3.5, Claude 4' },
  { icon: 'ri-google-fill', name: 'Google AI', desc: 'Gemini, Vertex AI' },
  { icon: 'ri-amazon-fill', name: 'AWS', desc: 'Bedrock, SageMaker' },
  { icon: 'ri-facebook-fill', name: 'Meta AI', desc: 'LLaMA, WhatsApp' },
  { icon: 'ri-terminal-box-fill', name: 'Python', desc: 'FastAPI, LangChain' },
];

export default function SolutionsPage() {
  const t = useTranslations('solutions');
  return (
    <>
      <Header activePage="solutions" />

      {/* Hero Section */}
      <section className="relative py-24" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4338ca 100%)' }}>
        <div className="absolute inset-0 grid-pattern opacity-[0.08] pointer-events-none" />
        <div className="container relative z-10">
          <motion.nav
            aria-label="breadcrumb"
            className="mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ol className="breadcrumb bg-white/10 px-5 py-2.5 rounded-lg inline-flex m-0">
              <li className="breadcrumb-item">
                <Link href="/" className="text-white/70 hover:text-white transition-colors">Home</Link>
              </li>
              <li className="breadcrumb-item active text-white" aria-current="page">Solutions</li>
            </ol>
          </motion.nav>
          <div className="flex flex-wrap items-center gap-10">
            <div className="flex-1 min-w-[300px]">
              <Animated animation="fadeInUp">
                <Badge icon="ri-service-line" variant="white" className="mb-5">{t('heroBadge')}</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                  {t('heroTitleStart')} <span className="gradient-text gradient-text-animated">{t('heroTitleAccent')}</span>
                </h1>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="text-lg text-white/80 leading-relaxed max-w-[600px]">
                  {t('heroSubhead')}
                </p>
              </Animated>
            </div>
            <div className="flex gap-4 justify-end">
              <Animated animation="fadeInRight" delay={0.3}>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center border border-white/10">
                  <div className="text-3xl font-extrabold text-white">
                    <Counter from={0} to={COMPANY_STATS.projectsDelivered} duration={2} suffix="+" />
                  </div>
                  <div className="text-sm text-white/70">Projects Delivered</div>
                </div>
              </Animated>
              <Animated animation="fadeInRight" delay={0.4}>
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center border border-white/10">
                  <div className="text-3xl font-extrabold text-white">
                    <Counter from={0} to={COMPANY_STATS.agentsInProduction} duration={2} />
                  </div>
                  <div className="text-sm text-white/70">Agents in Production</div>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Our Approach Section */}
        <section className="section bg-bg-white">
          <div className="container">
            <div className="two-col-section">
              <div className="col-left">
                <Animated animation="fadeInUp">
                  <Badge icon="ri-compass-3-line" className="mb-5">Our Approach</Badge>
                </Animated>
                <Animated animation="fadeInUp" delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark mb-6 leading-tight">
                    AI That Actually <span className="text-primary-blue">Works For You</span>
                  </h2>
                </Animated>
                <Animated animation="fadeInUp" delay={0.2}>
                  <p className="text-lg text-text-muted leading-relaxed mb-6">
                    We don&apos;t just throw AI at problems. We take the time to understand your business, identify where AI can create genuine value, and build solutions that integrate seamlessly into your operations.
                  </p>
                </Animated>
                <Animated animation="fadeInUp" delay={0.3}>
                  <p className="text-lg text-text-muted leading-relaxed mb-8">
                    Our team combines deep technical expertise with real-world implementation experience. We&apos;ve deployed AI systems for governments, enterprises, and startups—each with unique challenges and requirements.
                  </p>
                </Animated>
                <Animated animation="fadeInUp" delay={0.4}>
                  <div className="flex flex-wrap gap-4">
                    <div className="flex-1 min-w-[calc(50%-8px)]">
                      <div className="p-5 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.1) 0%, rgba(139, 92, 246, 0.1) 100%)' }}>
                        <i className="ri-focus-3-line text-3xl text-primary-blue block mb-3" aria-hidden="true" />
                        <div className="font-bold text-text-dark mb-1">Results Focused</div>
                        <div className="text-sm text-text-muted">ROI-driven solutions</div>
                      </div>
                    </div>
                    <div className="flex-1 min-w-[calc(50%-8px)]">
                      <div className="p-5 rounded-2xl" style={{ background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.1) 0%, rgba(74, 222, 128, 0.1) 100%)' }}>
                        <i className="ri-loop-left-line text-3xl text-green-500 block mb-3" aria-hidden="true" />
                        <div className="font-bold text-text-dark mb-1">Iterative Process</div>
                        <div className="text-sm text-text-muted">Rapid feedback loops</div>
                      </div>
                    </div>
                  </div>
                </Animated>
              </div>
              <div className="col-right">
                <Animated animation="fadeInRight" delay={0.2}>
                  <div className="rounded-xl border border-border bg-bg-white p-8">
                    <div className="grid grid-cols-2 gap-6">
                      {[
                        { label: 'Production agents shipped', value: String(COMPANY_STATS.agentsInProduction) },
                        { label: 'Sectors served', value: '6' },
                        { label: 'Years shipping AI', value: `${COMPANY_STATS.yearsOnAi}+` },
                        { label: 'Avg uptime SLO', value: '99.9%' },
                      ].map((s) => (
                        <div key={s.label} className="border-l-2 border-primary-blue pl-4">
                          <div className="text-3xl font-extrabold text-text-dark tracking-tighter">{s.value}</div>
                          <div className="text-xs text-text-muted mt-1 uppercase tracking-wide">{s.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Animated>
              </div>
            </div>
          </div>
        </section>

        {/* Core Solutions */}
        <section className="section" id="agentic">
          <div className="container">
            <div className="section-header">
              <Animated animation="fadeInUp">
                <Badge icon="ri-lightbulb-line">Core Solutions</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">What We Build</h2>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="section-subtitle">Specialized AI solutions tailored to your business needs</p>
              </Animated>
            </div>
            <Stagger className="grid-2-col" staggerDelay={0.15}>
              {solutions.map((sol) => (
                <StaggerItem key={sol.id} className="grid-item" id={sol.id}>
                  <HoverCard className="card card-hover p-8 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                        <i className={`${sol.icon} text-2xl text-primary-blue`} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-dark leading-tight m-0">{sol.title}</h3>
                        <span className="text-text-muted text-sm">{sol.subtitle}</span>
                      </div>
                    </div>
                    <p className="text-text-muted leading-relaxed mb-5">{sol.desc}</p>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-text-muted mb-3">Key capabilities</h4>
                    <ul className="space-y-2 mb-6 flex-1">
                      {sol.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-text-muted text-sm">
                          <i className="ri-check-line text-primary-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/solutions/${sol.slug}`}
                      className="inline-flex items-center gap-2 text-primary-blue font-semibold hover:opacity-80 transition-opacity mt-auto"
                    >
                      Read more <i className="ri-arrow-right-line" aria-hidden="true" />
                    </Link>
                  </HoverCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Process Section */}
        <section className="section" style={{ background: 'linear-gradient(135deg, #1e1b4b 0%, #312e81 100%)' }}>
          <div className="container">
            <div className="section-header">
              <Animated animation="fadeInUp">
                <Badge icon="ri-flow-chart" variant="white">Our Process</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title text-white">How We Work</h2>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="section-subtitle text-white/70">A proven methodology that delivers results</p>
              </Animated>
            </div>
            <Stagger className="grid-4-col" staggerDelay={0.1}>
              {processSteps.map((step) => (
                <StaggerItem key={step.num} className="grid-item">
                  <div className="relative h-full p-8 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm">
                    <span className="absolute top-6 right-6 font-mono text-xs text-white/40 tracking-widest">
                      {step.num}
                    </span>
                    <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5">
                      <i className={`${step.icon} text-2xl text-indigo-300`} aria-hidden="true" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-white/70 leading-relaxed m-0">{step.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="section bg-bg-white">
          <div className="container">
            <div className="section-header">
              <Animated animation="fadeInUp">
                <Badge icon="ri-stack-line">Technologies</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">Powered by Leading AI</h2>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="section-subtitle">We work with the best tools and platforms to deliver exceptional results</p>
              </Animated>
            </div>
            <Stagger className="industries-grid" staggerDelay={0.08}>
              {technologies.map((tech, i) => (
                <StaggerItem key={i} className="grid-item">
                  <HoverCard className="card card-hover text-center py-6 px-4">
                    <i className={`${tech.icon} text-3xl block mb-3 text-primary-blue`} aria-hidden="true" />
                    <h4 className="text-sm font-semibold text-text-dark m-0">{tech.name}</h4>
                    <span className="text-xs text-text-muted">{tech.desc}</span>
                  </HoverCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section relative">
          <div className="absolute inset-0 grid-pattern opacity-[0.06] pointer-events-none" />
          <div className="container relative z-10">
            <Stagger className="stats-grid" staggerDelay={0.1}>
              <StaggerItem>
                <div className="stat-card">
                  <div className="stat-value"><Counter from={0} to={COMPANY_STATS.projectsDelivered} duration={2} suffix="+" /></div>
                  <div className="stat-label">Projects Delivered</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="stat-card">
                  <div className="stat-value"><Counter from={0} to={COMPANY_STATS.clientsServed} duration={2} suffix="+" /></div>
                  <div className="stat-label">Clients Served</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="stat-card">
                  <div className="stat-value"><Counter from={0} to={COMPANY_STATS.agentsInProduction} duration={2} /></div>
                  <div className="stat-label">Agents in Production</div>
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="stat-card">
                  <div className="stat-value">24/7</div>
                  <div className="stat-label">Support Available</div>
                </div>
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta-section">
          <div className="container">
            <Animated animation="scaleIn">
              <div className="cta-card">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  Ready to Transform Your Business with AI?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  Get a free consultation and AI readiness assessment. Let&apos;s discuss how AI can drive efficiency and growth for your organization.
                </motion.p>
                <motion.div
                  className="flex gap-3 justify-center flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Button variant="ctaWhite" asChild>
                    <Link href="/contact">
                      <span>Start a project</span>
                      <i className="ri-arrow-right-line" aria-hidden="true" />
                    </Link>
                  </Button>
                  <a
                    href="tel:+919810503222"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 text-white font-semibold rounded-xl no-underline hover:bg-white/30 transition-all"
                  >
                    <i className="ri-phone-line" aria-hidden="true" />
                    <span>+91 9810503222</span>
                  </a>
                </motion.div>
              </div>
            </Animated>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
