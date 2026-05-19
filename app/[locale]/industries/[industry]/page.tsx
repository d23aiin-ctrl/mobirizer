'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { notFound } from 'next/navigation';
import { Header, Footer, Badge, Button } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, PageHeroBackground, Magnetic } from '@/components/ui';
import { industries, type IndustrySlug } from '@/lib/industries';

export default function IndustryPage({ params }: { params: { industry: string } }) {
  const data = industries[params.industry as IndustrySlug];
  if (!data) notFound();
  const t = useTranslations('industries');
  const tBreadcrumb = useTranslations('breadcrumb');
  const localizedName = t(`${params.industry}.title`);
  const lower = localizedName.toLowerCase();

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="page-header">
        <PageHeroBackground />
        <div className="container relative z-10">
          <Animated animation="fadeInUp">
            <Badge icon={data.icon} variant="white">
              {localizedName}
            </Badge>
          </Animated>
          <Animated animation="fadeInUp" delay={0.1}>
            <h1>{data.headline}</h1>
          </Animated>
          <Animated animation="fadeInUp" delay={0.2}>
            <p>{data.subhead}</p>
          </Animated>
          <Animated animation="fadeInUp" delay={0.3}>
            <div className="mt-10 pt-8 border-t border-white/10 flex items-baseline gap-4">
              <span className="text-4xl md:text-5xl font-extrabold text-white tracking-tighter tabular-nums">
                {data.anchorMetric.value}
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-white/60">
                {data.anchorMetric.label}
              </span>
            </div>
          </Animated>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">{tBreadcrumb('home')}</Link></li>
              <li className="breadcrumb-item"><Link href="/industries">{t('breadcrumb')}</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{localizedName}</li>
            </ol>
          </nav>
        </div>
      </div>

      <main id="main-content" role="main">
        {/* Proof Section */}
        <section className="section bg-bg-white">
          <div className="container">
            <Animated animation="fadeInUp">
              <div className="max-w-2xl mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-4">
                  <span className="w-6 h-px bg-text-muted" />
                  {t('proofEyebrow')}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark tracking-tighter leading-[1.1]">
                  {t('proofHeaderPrefix')} {lower}.
                </h2>
              </div>
            </Animated>

            <Stagger className="space-y-6">
              {data.proof.map((item) => (
                <StaggerItem key={item.href}>
                  <HoverCard>
                    <Link href={item.href} className="block">
                      <article className="card card-hover p-8">
                        <h3 className="text-xl md:text-2xl font-bold text-text-dark mb-3 leading-snug">
                          {item.label}
                        </h3>
                        <p className="text-text-muted leading-relaxed mb-6">{item.excerpt}</p>
                        <div className="grid grid-cols-3 gap-6 mb-4 pt-4 border-t border-border">
                          {item.outcomes.map((o) => (
                            <div key={o.label}>
                              <div className="text-2xl md:text-3xl font-extrabold text-primary-blue tabular-nums">
                                {o.value}
                              </div>
                              <div className="text-xs text-text-muted mt-1">{o.label}</div>
                            </div>
                          ))}
                        </div>
                        <span className="text-primary-blue font-medium inline-flex items-center gap-2">
                          {t('readMore')} <i className="ri-arrow-right-line" aria-hidden="true" />
                        </span>
                      </article>
                    </Link>
                  </HoverCard>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* Capabilities */}
        <section className="section">
          <div className="container">
            <Animated animation="fadeInUp">
              <div className="max-w-2xl mb-12">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-text-muted mb-4">
                  <span className="w-6 h-px bg-text-muted" />
                  {t('capabilitiesEyebrow')}
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark tracking-tighter leading-[1.1]">
                  {t('capabilitiesHeaderPrefix')} {lower} {t('capabilitiesHeaderSuffix')}
                </h2>
              </div>
            </Animated>

            <Stagger className="grid md:grid-cols-3 gap-6">
              {data.capabilities.map((cap) => (
                <StaggerItem key={cap.href}>
                  <Link href={cap.href} className="block">
                    <article className="card card-hover h-full p-6">
                      <h3 className="text-lg font-bold text-text-dark mb-2">{cap.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed mb-4">{cap.description}</p>
                      <span className="text-primary-blue text-sm font-medium inline-flex items-center gap-2">
                        {t('readMore')} <i className="ri-arrow-right-line" aria-hidden="true" />
                      </span>
                    </article>
                  </Link>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </section>

        {/* CTA */}
        <section className="relative overflow-hidden py-24 border-t border-border">
          <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
          <PageHeroBackground />
          <div className="container relative z-10">
            <Animated animation="fadeInUp">
              <div className="max-w-3xl">
                <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-white/60 mb-6">
                  <span className="w-6 h-px bg-white/40" />
                  {t('ctaEyebrow')}
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter leading-[1.05] mb-6">
                  {t('ctaHeadlinePrefix')} {lower} {t('ctaHeadlineSuffix')}
                </h2>
                <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">
                  {t('ctaBody')}
                </p>
                <Magnetic strength={0.3}>
                  <Button variant="ctaWhite" asChild>
                    <Link href="/contact">
                      <span>{t('ctaPrimary')}</span>
                      <i className="ri-arrow-right-line" aria-hidden="true" />
                    </Link>
                  </Button>
                </Magnetic>
              </div>
            </Animated>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
