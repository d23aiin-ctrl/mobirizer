'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { Header, Footer, Badge } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, PageHeroBackground } from '@/components/ui';
import { industries, industrySlugs } from '@/lib/industries';

export default function IndustriesIndex() {
  const t = useTranslations('industries');
  const tBreadcrumb = useTranslations('breadcrumb');
  return (
    <>
      <Header />

      <section className="page-header">
        <PageHeroBackground />
        <div className="container relative z-10">
          <Animated animation="fadeInUp">
            <Badge icon="ri-building-line" variant="white">
              {t('title')}
            </Badge>
          </Animated>
          <Animated animation="fadeInUp" delay={0.1}>
            <h1>{t('indexHeadline')}</h1>
          </Animated>
          <Animated animation="fadeInUp" delay={0.2}>
            <p>{t('indexSubhead')}</p>
          </Animated>
        </div>
      </section>

      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">{tBreadcrumb('home')}</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{t('breadcrumb')}</li>
            </ol>
          </nav>
        </div>
      </div>

      <main id="main-content" role="main">
        <section className="section bg-bg-white">
          <div className="container">
            <Stagger className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {industrySlugs.map((slug) => {
                const industry = industries[slug];
                return (
                  <StaggerItem key={slug}>
                    <HoverCard>
                      <Link href={`/industries/${slug}`} className="block">
                        <article className="card card-hover p-8 h-full">
                          <div className="flex items-start gap-4 mb-5">
                            <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                              <i className={`${industry.icon} text-2xl text-primary-blue`} aria-hidden="true" />
                            </div>
                            <div className="flex-1">
                              <h2 className="text-2xl font-bold text-text-dark mb-2 leading-snug">
                                {industry.name}
                              </h2>
                              <div className="text-3xl font-extrabold text-primary-blue tabular-nums">
                                {industry.anchorMetric.value}{' '}
                                <span className="text-xs font-mono uppercase tracking-wide text-text-muted font-normal">
                                  {industry.anchorMetric.label}
                                </span>
                              </div>
                            </div>
                          </div>
                          <p className="text-text-muted leading-relaxed mb-5">{industry.subhead}</p>
                          <span className="text-primary-blue font-medium inline-flex items-center gap-2">
                            {t('exploreLinkPrefix')} {t(`${slug}.title`).toLowerCase()} {t('exploreLinkSuffix')} <i className="ri-arrow-right-line" aria-hidden="true" />
                          </span>
                        </article>
                      </Link>
                    </HoverCard>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
