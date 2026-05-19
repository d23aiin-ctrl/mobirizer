'use client';

import Link from 'next/link';
import { Header, Footer, StatCard, Badge, Button } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard, Float, GradientText, motion } from '@/components/ui';

const products = [
  {
    slug: 'roboguru',
    icon: 'ri-graduation-cap-line',
    title: 'RoboGuru',
    subtitle: 'AI-Powered Education',
    desc: 'Intelligent tutoring system using computer vision and AI to help students learn. Take a photo of any problem and get step-by-step solutions instantly.',
    features: ['Photo-to-solution AI technology', 'Adaptive learning paths', 'Math, Science & more subjects'],
  },
  {
    slug: 'ohgrt',
    icon: 'ri-voiceprint-line',
    title: 'OHGRT',
    subtitle: 'AI Voice Generation Studio',
    desc: 'Professional AI voice generation platform for content creators and enterprises. Create natural-sounding voices with voice cloning and video dubbing.',
    features: ['Text-to-speech generation', 'AI video dubbing', 'Voice cloning technology'],
    badges: ['4.8★ Rating', '2M+ Downloads'],
  },
  {
    slug: 'xappy',
    icon: 'ri-heart-pulse-line',
    title: 'Xappy',
    subtitle: 'Healthcare Management Platform',
    desc: 'Comprehensive healthcare management for government health departments. Digitize patient records and streamline health services delivery at scale.',
    features: ['Electronic health records (EHR)', 'Multi-facility support', 'Health analytics dashboard'],
    badges: ['Gov Grade', 'Deployed in Sri Lanka'],
  },
  {
    slug: 'janseva',
    icon: 'ri-government-line',
    title: 'JanSeva',
    subtitle: 'AI Citizen Engagement Platform',
    desc: 'AI-powered engagement platform for elected representatives. Connect with constituents via WhatsApp, manage grievances, and build digital presence—all automated.',
    features: ['24/7 WhatsApp bot automation', 'Voice message support', 'Analytics & sentiment tracking'],
    badges: ['95% Resolution Rate', '6 Languages'],
  },
  {
    slug: 'whatsapp-commerce',
    icon: 'ri-shopping-bag-3-line',
    title: 'WhatsApp Commerce',
    subtitle: 'Sell on WhatsApp',
    desc: 'Turn WhatsApp into your storefront. Product catalogs, native payments, automated checkout, and CRM integrations - sell where 500M+ Indians already are.',
    features: ['Product catalogs in WhatsApp', 'Native payment integrations', 'Automated checkout flows'],
    badges: ['98% Open Rate', '45% Higher Conv.'],
  },
];

const useCases = [
  { icon: 'ri-government-line', title: 'Government', desc: 'Citizen engagement, grievance management, and healthcare digitization for public sector.', href: '/industries/government' },
  { icon: 'ri-book-open-line', title: 'Education', desc: 'AI tutoring, homework assistance, and adaptive learning for students of all ages.', href: '/industries/education' },
  { icon: 'ri-heart-pulse-line', title: 'Healthcare', desc: 'Patient management, EHR systems, and health analytics for hospitals and clinics.', href: '/industries/healthcare' },
  { icon: 'ri-movie-2-line', title: 'Media & Content', desc: 'Voice generation, video dubbing, and content creation for creators and enterprises.', href: '/products/ohgrt' },
];

export default function ProductsPage() {
  return (
    <>
      <Header activePage="products" />

      {/* Hero Section */}
      <section className="relative bg-gradient-hero py-24">
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
              <li className="breadcrumb-item active text-white" aria-current="page">Products</li>
            </ol>
          </motion.nav>
          <div className="hero-two-col">
            <div className="hero-content-col">
              <Animated animation="fadeInUp">
                <Badge icon="ri-apps-2-line" variant="white" className="mb-5">Our Products</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-5 leading-tight">
                  AI Products Built for <GradientText>Real-World Impact</GradientText>
                </h1>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="text-lg text-white/80 leading-relaxed max-w-xl">
                  From WhatsApp assistants to healthcare platforms, our products serve millions of
                  users across government, education, and enterprise sectors.
                </p>
              </Animated>
            </div>
            <div className="hero-image-col">
              <Animated animation="fadeInRight" delay={0.3}>
                <div className="flex gap-4 justify-end">
                  <motion.div
                    className="glass-card p-6 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-extrabold text-white">6</div>
                    <div className="text-sm text-white/70">Live Products</div>
                  </motion.div>
                  <motion.div
                    className="glass-card p-6 text-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5, type: 'spring', stiffness: 200 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-3xl font-extrabold text-white">2M+</div>
                    <div className="text-sm text-white/70">Users Served</div>
                  </motion.div>
                </div>
              </Animated>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main id="main-content" role="main">
        {/* Products Philosophy Section */}
        <section className="py-20 bg-bg-white">
          <div className="container">
            <div className="two-col-section">
              <div className="col-left">
                <Animated animation="fadeInUp">
                  <Badge icon="ri-lightbulb-line" className="mb-5">Our Approach</Badge>
                </Animated>
                <Animated animation="fadeInUp" delay={0.1}>
                  <h2 className="text-3xl md:text-4xl font-extrabold text-text-dark mb-6 leading-tight">
                    Products That <span className="text-primary-blue">Solve Real Problems</span>
                  </h2>
                </Animated>
                <Animated animation="fadeInUp" delay={0.2}>
                  <p className="text-lg text-text-muted leading-relaxed mb-6">
                    We don&apos;t build products for the sake of technology. Each product in our
                    portfolio was born from a genuine need—whether it&apos;s making AI accessible via
                    WhatsApp, revolutionizing education, or digitizing healthcare for governments.
                  </p>
                </Animated>
                <Animated animation="fadeInUp" delay={0.3}>
                  <p className="text-lg text-text-muted leading-relaxed mb-8">
                    Our products are battle-tested in production environments, serving real users at
                    scale. They represent our commitment to building AI that works reliably,
                    ethically, and delivers measurable value.
                  </p>
                </Animated>
                <Animated animation="fadeInUp" delay={0.4}>
                  <div className="flex gap-6 flex-wrap">
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                        <i className="ri-global-line text-primary-blue text-2xl" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-bold text-text-dark">Production Ready</div>
                        <div className="text-sm text-text-muted">Serving millions daily</div>
                      </div>
                    </motion.div>
                    <motion.div
                      className="flex items-center gap-3"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                        <i className="ri-shield-check-line text-primary-blue text-2xl" aria-hidden="true" />
                      </div>
                      <div>
                        <div className="font-bold text-text-dark">Enterprise Grade</div>
                        <div className="text-sm text-text-muted">Secure & compliant</div>
                      </div>
                    </motion.div>
                  </div>
                </Animated>
              </div>
              <div className="col-right">
                <Animated animation="fadeInRight" delay={0.2}>
                  <div className="rounded-xl border border-border bg-bg-white divide-y divide-border">
                    {[
                      { label: 'Products in production', value: '6' },
                      { label: 'Active users', value: '5,000+' },
                      { label: 'Messages processed', value: '1M+' },
                      { label: 'Average rating', value: '4.8★' },
                      { label: 'Languages supported', value: '11+' },
                    ].map((s) => (
                      <div key={s.label} className="flex items-baseline justify-between px-6 py-4">
                        <span className="text-sm text-text-muted">{s.label}</span>
                        <span className="text-2xl font-extrabold text-text-dark font-mono tracking-tight">{s.value}</span>
                      </div>
                    ))}
                  </div>
                </Animated>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Products */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <Animated animation="fadeInUp">
                <Badge icon="ri-star-line">Featured</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">Our Product Portfolio</h2>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="section-subtitle">AI-powered solutions serving diverse industries</p>
              </Animated>
            </div>

            {/* D23.ai — featured: indigo monochrome, numbers-led */}
            <Animated animation="fadeInUp" delay={0.1}>
              <article className="card card-hover p-10 md:p-12 mb-8">
                <div className="flex flex-wrap items-start gap-10">
                  <div className="flex-1 min-w-[280px]">
                    <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-primary-blue mb-5">
                      <span className="w-6 h-px bg-primary-blue" />
                      Featured · WhatsApp native
                    </div>
                    <h3 className="text-3xl md:text-4xl font-extrabold text-text-dark tracking-tight mb-4">
                      D23.ai
                    </h3>
                    <p className="text-text-muted leading-relaxed mb-8 max-w-xl">
                      India&apos;s first WhatsApp-native AI assistant that understands and responds in
                      11+ Indian languages. Send voice messages, generate images, check train PNR
                      status, search the web — all within WhatsApp.
                    </p>
                    <Link
                      href="/products/d23-ai"
                      className="text-primary-blue font-semibold inline-flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                      Explore D23.ai <i className="ri-arrow-right-line" aria-hidden="true" />
                    </Link>
                  </div>
                  <div className="flex-1 min-w-[260px] grid grid-cols-3 gap-6 pt-2">
                    {[
                      { value: '5,000+', label: 'Active users' },
                      { value: '1M+', label: 'Messages processed' },
                      { value: '11+', label: 'Languages' },
                    ].map((stat) => (
                      <div key={stat.label} className="border-l-2 border-primary-blue pl-4">
                        <div className="text-3xl md:text-4xl font-extrabold text-text-dark tabular-nums tracking-tighter">
                          {stat.value}
                        </div>
                        <div className="text-xs text-text-muted mt-1 uppercase tracking-wide">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </Animated>

            {/* Other Products Grid — monochrome, numbers-led */}
            <Stagger className="grid-2-col" staggerDelay={0.15}>
              {products.map((prod) => (
                <StaggerItem key={prod.slug} className="grid-item">
                  <HoverCard className="card card-hover p-8 h-full flex flex-col">
                    <div className="flex items-start gap-4 mb-5">
                      <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 flex items-center justify-center flex-shrink-0">
                        <i className={`${prod.icon} text-2xl text-primary-blue`} aria-hidden="true" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-text-dark leading-tight m-0">{prod.title}</h3>
                        <span className="text-text-muted text-sm">{prod.subtitle}</span>
                      </div>
                    </div>
                    {prod.badges && (
                      <div className="flex flex-wrap gap-2 mb-5">
                        {prod.badges.map((badge) => (
                          <span
                            key={badge}
                            className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-bg-light text-text-dark border border-border tabular-nums"
                          >
                            {badge}
                          </span>
                        ))}
                      </div>
                    )}
                    <p className="text-text-muted leading-relaxed mb-5">{prod.desc}</p>
                    <ul className="space-y-2 mb-5 flex-1">
                      {prod.features.map((f, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-text-muted text-sm">
                          <i className="ri-check-line text-primary-blue mt-0.5 flex-shrink-0" aria-hidden="true" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={`/products/${prod.slug}`}
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

        {/* Use Cases Section */}
        <section className="section bg-bg-white">
          <div className="container">
            <div className="section-header">
              <Animated animation="fadeInUp">
                <Badge icon="ri-building-2-line">Use Cases</Badge>
              </Animated>
              <Animated animation="fadeInUp" delay={0.1}>
                <h2 className="section-title">Built for Diverse Industries</h2>
              </Animated>
              <Animated animation="fadeInUp" delay={0.2}>
                <p className="section-subtitle">Our products serve organizations across multiple sectors</p>
              </Animated>
            </div>
            <Stagger className="grid-4-col" staggerDelay={0.1}>
              {useCases.map((uc) => (
                <StaggerItem key={uc.title} className="grid-item">
                  <Link href={uc.href} className="block h-full">
                    <HoverCard className="card card-hover text-center py-8 px-5 h-full">
                      <div className="w-14 h-14 rounded-2xl bg-primary-blue/10 flex items-center justify-center mx-auto mb-5">
                        <i className={`${uc.icon} text-2xl text-primary-blue`} aria-hidden="true" />
                      </div>
                      <h3 className="text-lg font-bold mb-3 text-text-dark">{uc.title}</h3>
                      <p className="text-text-muted text-sm leading-relaxed m-0">{uc.desc}</p>
                    </HoverCard>
                  </Link>
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
                <StatCard value="6" label="Live Products" />
              </StaggerItem>
              <StaggerItem>
                <StatCard value="2M+" label="Total Users" />
              </StaggerItem>
              <StaggerItem>
                <StatCard value="11+" label="Languages Supported" />
              </StaggerItem>
              <StaggerItem>
                <StatCard value="4.8★" label="Average Rating" />
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
                  Want to Build a Custom Product?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  We can help you create AI-powered products tailored to your specific needs. From
                  concept to production, we handle the complete journey.
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
                  <Button variant="ghost" asChild>
                    <Link href="/solutions">
                      <span>Explore Solutions</span>
                      <i className="ri-arrow-right-line" aria-hidden="true" />
                    </Link>
                  </Button>
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
