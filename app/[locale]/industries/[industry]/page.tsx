'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Header, Footer, Badge, Button } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, PageHeroBackground, Magnetic } from '@/components/ui';
import { industries, type IndustrySlug } from '@/lib/industries';

export default function IndustryPage({ params }: { params: { industry: string } }) {
  const data = industries[params.industry as IndustrySlug];
  if (!data) notFound();

  return (
    <>
      <Header />

      {/* Hero */}
      <section className="page-header">
        <PageHeroBackground />
        <div className="container relative z-10">
          <Animated animation="fadeInUp">
            <Badge icon={data.icon} variant="white">
              {data.name}
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
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item"><Link href="/industries">Industries</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{data.name}</li>
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
                  Production proof
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark tracking-tighter leading-[1.1]">
                  What we&apos;ve shipped in {data.name.toLowerCase()}.
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
                          Read more <i className="ri-arrow-right-line" aria-hidden="true" />
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
                  How we deliver
                </div>
                <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark tracking-tighter leading-[1.1]">
                  Capabilities we bring to {data.name.toLowerCase()} clients.
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
                        Read more <i className="ri-arrow-right-line" aria-hidden="true" />
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
                  Let&apos;s build
                </div>
                <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter leading-[1.05] mb-6">
                  Have a {data.name.toLowerCase()} problem worth shipping?
                </h2>
                <p className="text-lg text-white/70 leading-relaxed mb-10 max-w-2xl">
                  Tell us what you&apos;re trying to build. If it&apos;s a good fit, you&apos;ll be on a call with a
                  founder within 48 hours.
                </p>
                <Magnetic strength={0.3}>
                  <Button variant="ctaWhite" asChild>
                    <Link href="/contact">
                      <span>Start a project</span>
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
