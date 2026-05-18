'use client';

import Link from 'next/link';
import { Header, Footer, EnglishOnlyNotice, Badge, Button } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, motion , PageHeroBackground } from '@/components/ui';

const values = [
  {
    title: 'Ship > Slide',
    body: "We'd rather put a v1 in production than perfect the roadmap deck. Shipping is how we learn.",
    icon: 'ri-rocket-2-line',
  },
  {
    title: 'Boring Tech',
    body: 'We pick the least exciting tool that solves the problem. Novel beats nothing; proven beats novel.',
    icon: 'ri-tools-line',
  },
  {
    title: 'AI Should Feel Invisible',
    body: 'If users have to understand the model to use the product, we built the wrong product.',
    icon: 'ri-magic-line',
  },
  {
    title: 'Build With, Not For',
    body: 'We work alongside the teams we ship with. No ivory-tower hand-offs, no throw-over-the-wall.',
    icon: 'ri-team-line',
  },
];

const hiringBar = [
  'You can point at production systems you built that real humans use.',
  'You pick apart your own code harder than any reviewer will.',
  'You write things down — design docs, post-mortems, handover notes — without being asked.',
  'You can explain a transformer to a product manager and a business constraint to a ML researcher.',
  'You treat evals and observability as first-class deliverables, not afterthoughts.',
];

const benefits = [
  { title: 'Remote-first', body: 'Work from wherever you ship your best code. Quarterly offsites to sync.', icon: 'ri-global-line' },
  { title: 'Latest kit', body: 'MacBook Pro, 4K displays, and model credits (Claude, GPT, Gemini) on the company.', icon: 'ri-macbook-line' },
  { title: 'Learning budget', body: '₹1L/year for courses, conferences, books, and paper subscriptions.', icon: 'ri-book-open-line' },
  { title: 'Real ownership', body: 'Equity for senior hires. Your name on the systems you build.', icon: 'ri-shield-star-line' },
  { title: 'Deep work', body: 'No-meeting Tuesdays and Thursdays. Async-first by default.', icon: 'ri-focus-3-line' },
  { title: 'Health cover', body: 'Group health insurance for you and your family, including parents.', icon: 'ri-heart-pulse-line' },
];

const interviewStages = [
  { n: '01', title: 'Intro call', body: '30 minutes with a founder. What you\'ve shipped, what you want next, what we do.' },
  { n: '02', title: 'Take-home', body: 'A scoped problem from a real project. Two evenings, not two weekends. We pay for your time.' },
  { n: '03', title: 'Deep dive', body: 'We read the submission together. You walk us through trade-offs; we push on the edges.' },
  { n: '04', title: 'Team day', body: 'Pair with two engineers on a live problem. Lunch. Meet the founders. Offer within 48 hours.' },
];

export default function CareersPage() {
  return (
    <>
      <Header activePage="resources" />
      <EnglishOnlyNotice />

      <section className="page-header"><PageHeroBackground />
        <div className="container relative z-10">
          <Animated animation="fadeInUp">
            <Badge icon="ri-user-star-line" variant="white">
              We&apos;re hiring
            </Badge>
          </Animated>
          <Animated animation="fadeInUp" delay={0.1}>
            <h1>Builders wanted.</h1>
          </Animated>
          <Animated animation="fadeInUp" delay={0.2}>
            <p>
              We hire engineers who can design a system, ship it to production, and debug it at 2am when
              a customer calls. Not resume optimizers. Not AI tourists.
            </p>
          </Animated>
        </div>
      </section>

      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Careers</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Animated animation="fadeInUp">
            <div className="section-header-center">
              <Badge icon="ri-compass-3-line" variant="default">How we work</Badge>
              <h2>Values, not ping-pong tables.</h2>
              <p>
                These are the four things we actually argue about in review. They show up in the code,
                not just the deck.
              </p>
            </div>
          </Animated>
          <Stagger>
            <div className="grid-4-col mt-12">
              {values.map((v) => (
                <StaggerItem key={v.title}>
                  <HoverCard>
                    <div className="card card-hover h-full p-8">
                      <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 flex items-center justify-center mb-5">
                        <i className={`${v.icon} text-2xl text-primary-blue`} />
                      </div>
                      <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                      <p className="text-text-muted leading-relaxed">{v.body}</p>
                    </div>
                  </HoverCard>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      <section className="section bg-bg-light">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <Animated animation="fadeInUp">
              <Badge icon="ri-filter-3-line" variant="default">The bar</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-6">
                What we look for.
              </h2>
              <p className="text-lg text-text-muted leading-relaxed">
                Seniority isn&apos;t years. It&apos;s how you handle the thing you didn&apos;t plan
                for. We read submissions for judgment, not just correctness.
              </p>
            </Animated>
            <div>
              <ul className="space-y-4">
                {hiringBar.map((point, i) => (
                  <motion.li
                    key={i}
                    className="flex gap-4 items-start"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-blue/10 flex items-center justify-center mt-1">
                      <i className="ri-check-line text-primary-blue text-sm" aria-hidden="true" />
                    </div>
                    <p className="text-text-dark">{point}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Animated animation="fadeInUp">
            <div className="section-header-center">
              <Badge icon="ri-gift-line" variant="default">Benefits</Badge>
              <h2>What you get.</h2>
              <p>Set up to do the best work of your career, without making your weekends disappear.</p>
            </div>
          </Animated>
          <Stagger>
            <div className="grid-3-col mt-12">
              {benefits.map((b) => (
                <StaggerItem key={b.title}>
                  <div className="card p-6 h-full">
                    <i className={`${b.icon} text-3xl text-primary-blue mb-3 block`} />
                    <h4 className="font-bold text-lg mb-2">{b.title}</h4>
                    <p className="text-text-muted text-sm leading-relaxed">{b.body}</p>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      <section className="section bg-bg-light">
        <div className="container">
          <Animated animation="fadeInUp">
            <div className="section-header-center">
              <Badge icon="ri-route-line" variant="default">Interview</Badge>
              <h2>Four steps. Two weeks. No games.</h2>
              <p>We respect your time. You&apos;ll know where you stand after every step.</p>
            </div>
          </Animated>
          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {interviewStages.map((s, i) => (
              <motion.div
                key={s.n}
                className="card p-6 relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="text-5xl font-extrabold text-primary-blue/10 absolute top-2 right-4">
                  {s.n}
                </div>
                <h4 className="font-bold text-lg mb-2 relative">{s.title}</h4>
                <p className="text-text-muted text-sm leading-relaxed relative">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Animated animation="fadeInUp">
            <div className="card p-12 text-center bg-gradient-primary text-white">
              <Badge icon="ri-inbox-line" variant="white">Open roles</Badge>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-4 mb-4 text-white">
                No open roles posted right now.
              </h2>
              <p className="text-white/85 text-lg mb-8 max-w-2xl mx-auto">
                We hire in small waves. If you think you&apos;d be a fit — send us what you&apos;ve built.
                We read every email. If there&apos;s a match, we&apos;ll talk even without an open posting.
              </p>
              <div className="flex gap-3 justify-center flex-wrap">
                <Button variant="ctaWhite" asChild>
                  <a href="mailto:info@mobirizer.com?subject=Careers%20-%20Introduction">
                    <span>Email us</span>
                    <i className="ri-arrow-right-line" aria-hidden="true" />
                  </a>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/engineering">
                    <span>See how we build</span>
                    <i className="ri-arrow-right-line" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </div>
          </Animated>
        </div>
      </section>

      <Footer />
    </>
  );
}
