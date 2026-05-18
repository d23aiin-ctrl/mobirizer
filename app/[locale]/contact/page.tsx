'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { useTranslations } from 'next-intl';
import { Header, Footer, Badge } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, Accordion, AccordionItem, AccordionTrigger, AccordionContent, motion , PageHeroBackground } from '@/components/ui';
import { ContactForm } from './ContactForm';

const FAQ_KEYS = ['q1', 'q2', 'q3', 'q4', 'q5'] as const;

export default function ContactPage() {
  const t = useTranslations('contact');
  const tBreadcrumb = useTranslations('breadcrumb');

  return (
    <>
      <Header activePage="contact" />

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
                {tBreadcrumb('contact')}
              </li>
            </ol>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main id="main-content" role="main">
        <section className="section bg-bg-white">
          <div className="container">
            <div className="two-col-section">
              {/* Contact Form */}
              <div className="col-left">
                <Animated animation="fadeInUp">
                  <h2 className="text-2xl font-bold text-text-dark mb-2">{t('form.title')}</h2>
                </Animated>
                <Animated animation="fadeInUp" delay={0.1}>
                  <p className="text-text-muted mb-8">{t('form.subtitle')}</p>
                </Animated>
                <Suspense fallback={null}>
                  <ContactForm />
                </Suspense>
              </div>

              {/* Contact Info */}
              <div className="col-right">
                <Animated animation="fadeInRight">
                  <h2 className="text-2xl font-bold text-text-dark mb-2">{t('info.title')}</h2>
                </Animated>
                <Animated animation="fadeInRight" delay={0.1}>
                  <p className="text-text-muted mb-8">{t('info.subtitle')}</p>
                </Animated>

                <Stagger staggerDelay={0.15}>
                  <StaggerItem>
                    <HoverCard className="info-card">
                      <div className="flex items-start gap-3">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-primary-blue/10 to-primary-light/15 rounded-xl flex items-center justify-center shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <i className="ri-mail-line text-xl text-primary-blue" aria-hidden="true" />
                        </motion.div>
                        <div>
                          <h4 className="mb-1">{t('info.email')}</h4>
                          <p>
                            <a href="mailto:info@mobirizer.com" className="text-primary-blue hover:text-primary-dark transition-colors">
                              info@mobirizer.com
                            </a>
                          </p>
                        </div>
                      </div>
                    </HoverCard>
                  </StaggerItem>

                  <StaggerItem>
                    <HoverCard className="info-card">
                      <div className="flex items-start gap-3">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-accent-green/10 to-accent-green-light/15 rounded-xl flex items-center justify-center shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <i className="ri-phone-line text-xl text-accent-green" aria-hidden="true" />
                        </motion.div>
                        <div>
                          <h4 className="mb-1">{t('info.phone')}</h4>
                          <p>
                            <a href="tel:+919810503222" className="text-primary-blue hover:text-primary-dark transition-colors">
                              +91 9810503222
                            </a>
                          </p>
                        </div>
                      </div>
                    </HoverCard>
                  </StaggerItem>

                  <StaggerItem>
                    <HoverCard className="info-card">
                      <div className="flex items-start gap-3">
                        <motion.div
                          className="w-12 h-12 bg-gradient-to-br from-accent-orange/10 to-accent-orange/15 rounded-xl flex items-center justify-center shrink-0"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ type: 'spring', stiffness: 300 }}
                        >
                          <i className="ri-map-pin-line text-xl text-accent-orange" aria-hidden="true" />
                        </motion.div>
                        <div>
                          <h4 className="mb-1">{t('info.address')}</h4>
                          <p>{t('info.addressValue')}</p>
                        </div>
                      </div>
                    </HoverCard>
                  </StaggerItem>

                  <StaggerItem>
                    <HoverCard className="rounded-2xl p-6 mb-4" style={{ background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)' }}>
                      <h4 className="text-white text-lg font-semibold mb-3">
                        <i className="ri-time-line mr-2" aria-hidden="true" /> {t('info.hours')}
                      </h4>
                      <p className="text-white/90 m-0">
                        {t('info.hoursValue')}
                        <br />
                        {t('info.hoursClosed')}
                      </p>
                    </HoverCard>
                  </StaggerItem>
                </Stagger>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <Animated animation="fadeInUp">
                <Badge icon="ri-question-line">{t('faq.badge')}</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">{t('faq.title')}</h2>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="section-subtitle">{t('faq.subtitle')}</p>
              </Animated>
            </div>
            <Animated animation="fadeInUp" delay={0.3}>
              <Accordion type="single" collapsible className="content-centered space-y-4">
                {FAQ_KEYS.map((k) => (
                  <AccordionItem key={k} value={k}>
                    <AccordionTrigger>{t(`faq.${k}.question`)}</AccordionTrigger>
                    <AccordionContent>{t(`faq.${k}.answer`)}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Animated>
          </div>
        </section>
      </main>

      <Footer variant="simple" />
    </>
  );
}
