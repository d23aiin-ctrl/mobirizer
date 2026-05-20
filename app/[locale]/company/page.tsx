'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Header, Footer, StatCard, Badge, Button } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, motion , PageHeroBackground } from '@/components/ui';
import { COMPANY_STATS } from '@/lib/companyStats';

export default function CompanyPage() {
  const t = useTranslations('company');
  const tBreadcrumb = useTranslations('breadcrumb');
  const tCommon = useTranslations('common');
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
                  <Badge icon="ri-history-line" className="mb-4">{t('story.badge')}</Badge>
                </Animated>
                <Animated animation="fadeInUp" delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-bold text-text-dark mb-6">
                    {t('story.title')}
                  </h2>
                </Animated>
                <Animated animation="fadeInUp" delay={0.2}>
                  <p className="text-text-muted leading-relaxed mb-4">{t('story.paragraph1')}</p>
                </Animated>
                <Animated animation="fadeInUp" delay={0.3}>
                  <p className="text-text-muted leading-relaxed mb-4">{t('story.paragraph2')}</p>
                </Animated>
                <Animated animation="fadeInUp" delay={0.4}>
                  <p className="text-text-muted leading-relaxed">{t('story.paragraph3')}</p>
                </Animated>
              </div>
              <div className="col-right">
                <Animated animation="fadeInRight" delay={0.2}>
                  <div className="timeline">
                    {(['2014', '2019', '2021', '2024', 'today'] as const).map((yearKey, i, arr) => {
                      const displayYear = yearKey === 'today' ? t('timeline.today.title').split(' ')[0] === 'Today' ? 'Today' : yearKey : yearKey;
                      // Render the year as the raw label for non-today entries; for today use literal "Today"
                      const year = yearKey === 'today' ? 'Today' : yearKey;
                      const isLast = i === arr.length - 1;
                      return (
                        <motion.div
                          key={yearKey}
                          className={`timeline-item ${isLast ? 'pb-0' : ''}`}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.15, duration: 0.5 }}
                        >
                          <div className="timeline-year">{year}</div>
                          <div className="timeline-title">{t(`timeline.${yearKey}.title`)}</div>
                          <div className="timeline-desc">{t(`timeline.${yearKey}.description`)}</div>
                        </motion.div>
                      );
                    })}
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
                <Badge icon="ri-team-line">{t('leadership.badge')}</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">{t('leadership.title')}</h2>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="section-subtitle">{t('leadership.subtitle')}</p>
              </Animated>
            </div>
            <Stagger className="grid-3-col" staggerDelay={0.15}>
              {(['naseer', 'pawan', 'rishi'] as const).map((personKey) => (
                <StaggerItem key={personKey} className="grid-item">
                  <HoverCard className="card card-hover text-center p-8 h-full">
                    <div className="w-24 h-24 rounded-full bg-primary-blue/10 flex items-center justify-center mx-auto mb-5">
                      <i className="ri-user-line text-4xl text-primary-blue" aria-hidden="true" />
                    </div>
                    <h3 className="text-xl mb-1">{t(`leadership.${personKey}.name`)}</h3>
                    <p className="text-primary-blue font-semibold mb-3">{t(`leadership.${personKey}.role`)}</p>
                    <p className="text-text-muted text-sm">{t(`leadership.${personKey}.description`)}</p>
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
                <Badge icon="ri-heart-line">{t('values.badge')}</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">{t('values.title')}</h2>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="section-subtitle">{t('values.subtitle')}</p>
              </Animated>
            </div>
            <Stagger className="values-grid" staggerDelay={0.1}>
              {([
                { key: 'shipOverSlide', icon: 'ri-rocket-line' },
                { key: 'boringTech', icon: 'ri-shield-check-line' },
                { key: 'invisibleAi', icon: 'ri-eye-off-line' },
                { key: 'buildWith', icon: 'ri-team-line' },
              ] as const).map((value) => (
                <StaggerItem key={value.key}>
                  <HoverCard className="value-card h-full">
                    <h3>
                      <motion.i
                        className={`${value.icon} mr-2`}
                        whileHover={{ scale: 1.2, rotate: 10 }}
                        aria-hidden="true"
                      />
                      {t(`values.${value.key}.title`)}
                    </h3>
                    <p>{t(`values.${value.key}.description`)}</p>
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
                <StatCard value={String(COMPANY_STATS.foundedYear)} label={t('statsSection.founded')} />
              </StaggerItem>
              <StaggerItem>
                <StatCard value={`${COMPANY_STATS.clientsServed}+`} label={t('statsSection.clientsWorldwide')} />
              </StaggerItem>
              <StaggerItem>
                <StatCard value={`${COMPANY_STATS.projectsDelivered}+`} label={t('statsSection.projectsCompleted')} />
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
                  <Badge icon="ri-map-pin-line" className="mb-4">{t('office.badge')}</Badge>
                </Animated>
                <Animated animation="fadeInUp" delay={0.1}>
                  <h2 className="text-3xl font-bold text-text-dark mb-6">{t('office.title')}</h2>
                </Animated>
                <Animated animation="scaleIn" delay={0.2}>
                  <HoverCard className="info-card max-w-lg mx-auto text-left">
                    <h4>
                      <i className="ri-building-line mr-2 text-primary-blue" aria-hidden="true" /> {t('office.companyName')}
                    </h4>
                    <p className="mb-4">{t('office.address')}</p>
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
                  {t('cta.title')}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  {t('cta.description')}
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Button variant="ctaWhite" asChild>
                    <Link href="/contact">
                      <span>{tCommon('startProject')}</span>
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
