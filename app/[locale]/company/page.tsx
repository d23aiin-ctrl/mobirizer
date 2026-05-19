'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Header, Footer, StatCard, Badge, Button } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, motion , PageHeroBackground } from '@/components/ui';
import { COMPANY_STATS } from '@/lib/companyStats';

export default function CompanyPage() {
  const t = useTranslations('company');
  const tBreadcrumb = useTranslations('breadcrumb');
  return (
    <>
      <Header activePage="company" />

      {/* Page Header */}
      <section className="page-header"><PageHeroBackground />
        <div className="container relative z-10">
          <Animated animation="fadeInUp">
            <h1>{t('pageTitle')}</h1>
          </Animated>
          <Animated animation="fadeInUp" delay={0.1}>
            <p>{t('pageSubtitle')}</p>
          </Animated>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link href="/">{tBreadcrumb('home')}</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                {tBreadcrumb('company')}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Story Section */}
        <section className="py-20 bg-bg-white">
          <div className="container">
            <div className="two-col-section">
              <div className="col-left">
                <Animated animation="fadeInUp">
                  <Badge icon="ri-history-line" className="mb-4">Our Story</Badge>
                </Animated>
                <Animated animation="fadeInUp" delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
                    From Mobile Apps to AI-First
                  </h2>
                </Animated>
                <Animated animation="fadeInUp" delay={0.2}>
                  <p className="text-text-muted leading-relaxed mb-4">
                    Mobirizer was founded in 2014 as a mobile application development company in New
                    Delhi, India. We built apps for startups, enterprises, and everything in between,
                    learning what it takes to ship software that users love.
                  </p>
                </Animated>
                <Animated animation="fadeInUp" delay={0.3}>
                  <p className="text-text-muted leading-relaxed mb-4">
                    In 2019, we started experimenting with AI and machine learning. What began as small
                    experiments quickly became our core focus as we saw the transformative potential of
                    AI for our clients.
                  </p>
                </Animated>
                <Animated animation="fadeInUp" delay={0.4}>
                  <p className="text-text-muted leading-relaxed">
                    In 2024, we made the full pivot to become an AI-first company. Today, we build
                    production-grade AI solutions that serve millions of users across government,
                    education, healthcare, and enterprise sectors.
                  </p>
                </Animated>
              </div>
              <div className="col-right">
                <Animated animation="fadeInRight" delay={0.2}>
                  <div className="timeline">
                    {[
                      { year: '2014', title: 'Company Founded', desc: 'Started as a mobile app development company in New Delhi.' },
                      { year: '2019', title: 'AI Experiments Begin', desc: 'First AI projects launched, exploring conversational interfaces.' },
                      { year: '2021', title: 'D23.ai Launched', desc: 'Government AI platform goes live, serving millions of citizens.' },
                      { year: '2024', title: 'AI-First Pivot', desc: 'Full transition to AI-focused development studio.' },
                      { year: 'Today', title: `${COMPANY_STATS.clientsServed}+ clients, ${COMPANY_STATS.agentsInProduction} agents in production`, desc: `${COMPANY_STATS.projectsDelivered}+ projects delivered, ${(COMPANY_STATS.usersImpacted / 1_000_000).toFixed(0)}M+ users impacted across AI products.`, last: true },
                    ].map((item, i) => (
                      <motion.div
                        key={i}
                        className={`timeline-item ${item.last ? 'pb-0' : ''}`}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.15, duration: 0.5 }}
                      >
                        <div className="timeline-year">{item.year}</div>
                        <div className="timeline-title">{item.title}</div>
                        <div className="timeline-desc">{item.desc}</div>
                      </motion.div>
                    ))}
                  </div>
                </Animated>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <Animated animation="fadeInUp">
                <Badge icon="ri-team-line">Leadership</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">Our Leadership Team</h2>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="section-subtitle">The people driving our AI vision forward.</p>
              </Animated>
            </div>
            <Stagger className="grid-3-col" staggerDelay={0.15}>
              {[
                { name: 'Naseer Ahmad', role: 'Chief Executive Officer', gradient: 'bg-gradient-primary', color: 'text-primary-blue', desc: "Leading the company's vision and strategy for AI-first transformation. Driving business development and partnerships." },
                { name: 'Pawan Singh', role: 'Chief Product Officer', gradient: 'bg-gradient-green', color: 'text-accent-green', desc: 'Overseeing product strategy and user experience across all AI products. Building products users love.' },
                { name: 'Rishi', role: 'Chief Technology Officer', gradient: 'bg-gradient-purple', color: 'text-accent-purple', desc: 'Leading the engineering team and technical architecture. Ensuring scalability and reliability of AI systems.' },
              ].map((person, i) => (
                <StaggerItem key={i} className="grid-item">
                  <HoverCard className="service-card text-center p-8 h-full">
                    <motion.div
                      className={`w-24 h-24 ${person.gradient} rounded-full flex items-center justify-center mx-auto mb-5`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <i className="ri-user-line text-4xl text-white" aria-hidden="true" />
                    </motion.div>
                    <h3 className="text-xl mb-1">{person.name}</h3>
                    <p className={`${person.color} font-semibold mb-3`}>{person.role}</p>
                    <p className="text-text-muted text-sm">{person.desc}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Values Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <Animated animation="fadeInUp">
                <Badge icon="ri-heart-line">Our Values</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">What We Believe In</h2>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="section-subtitle">The principles that guide everything we do.</p>
              </Animated>
            </div>
            <Stagger className="values-grid" staggerDelay={0.1}>
              {[
                { icon: 'ri-rocket-line', title: 'Ship > Slide', desc: "We believe in working demos over presentations. Every week, we ship. Every month, we ship more. Slides don't change the world - working software does." },
                { icon: 'ri-shield-check-line', title: 'Boring Tech is Good Tech', desc: 'We choose reliability over novelty. Our systems run on proven technologies that let us focus on solving real problems instead of fighting infrastructure.' },
                { icon: 'ri-eye-off-line', title: 'AI Should Feel Invisible', desc: "The best AI is the AI you don't notice. We build systems that integrate seamlessly into existing workflows, making technology feel natural and effortless." },
                { icon: 'ri-team-line', title: 'Build With, Not For', desc: "We're partners, not vendors. We build alongside our clients, understanding their context deeply and creating solutions that truly fit their needs." },
              ].map((value, i) => (
                <StaggerItem key={i}>
                  <HoverCard className="value-card h-full">
                    <h3>
                      <motion.i
                        className={`${value.icon} mr-2`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                      />
                      {value.title}
                    </h3>
                    <p>{value.desc}</p>
                  </HoverCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Stats Section */}
        <section className="stats-section">
          <div className="container">
            <Stagger className="stats-grid" staggerDelay={0.1}>
              <StaggerItem>
                <StatCard value={String(COMPANY_STATS.foundedYear)} label="Founded" />
              </StaggerItem>
              <StaggerItem>
                <StatCard value={`${COMPANY_STATS.clientsServed}+`} label="Clients Served" />
              </StaggerItem>
              <StaggerItem>
                <StatCard value={`${COMPANY_STATS.projectsDelivered}+`} label="Projects Delivered" />
              </StaggerItem>
              <StaggerItem>
                <StatCard value={`${COMPANY_STATS.agentsInProduction}`} label="Agents in Production" />
              </StaggerItem>
            </Stagger>
          </div>
        </section>

        {/* Contact Info */}
        <section className="section bg-bg-white">
          <div className="container">
            <div className="flex justify-center">
              <div className="max-w-2xl text-center">
                <Animated animation="fadeInUp">
                  <Badge icon="ri-map-pin-line" className="mb-4">Our Office</Badge>
                </Animated>
                <Animated animation="fadeInUp" delay={0.1}>
                  <h2 className="text-3xl font-bold text-text-dark mb-6">Based in Vaishali, Bihar, India</h2>
                </Animated>
                <Animated animation="scaleIn" delay={0.2}>
                  <HoverCard className="info-card max-w-lg mx-auto text-left">
                    <h4>
                      <i className="ri-building-line mr-2 text-primary-blue" aria-hidden="true" /> Mobirizer Services Pvt. Ltd.
                    </h4>
                    <p className="mb-4">
                      At- Bihari Gadh, Post- Bithauli,
                      <br />
                      P.S.- Bhagwanpur, Hajipur,
                      <br />
                      Dist.- Vaishali, Bihar 844114, India
                    </p>
                    <p className="mb-2">
                      <i className="ri-mail-line mr-2 text-primary-blue" aria-hidden="true" />
                      <a href="mailto:info@mobirizer.com" className="text-primary-blue hover:text-primary-dark transition-colors">info@mobirizer.com</a>
                    </p>
                    <p className="m-0">
                      <i className="ri-phone-line mr-2 text-primary-blue" aria-hidden="true" />
                      <a href="tel:+919810503222" className="text-primary-blue hover:text-primary-dark transition-colors">+91 9810503222</a>
                    </p>
                  </HoverCard>
                </Animated>
              </div>
            </div>
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
                  Want to Join Our Journey?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  We&apos;re always looking for talented people who share our passion for building
                  great software.
                </motion.p>
                <motion.div
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
                </motion.div>
              </div>
            </Animated>
          </div>
        </section>
      </main>

      <Footer variant="simple" />
    </>
  );
}
