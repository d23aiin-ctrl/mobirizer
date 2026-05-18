'use client';

import Link from 'next/link';
import { Header, Footer, EnglishOnlyNotice, Badge } from '@/components';
import { Animated, Stagger, StaggerItem, HoverCard , PageHeroBackground } from '@/components/ui';

const posts = [
  {
    slug: 'evaluating-llm-agents',
    title: 'How we evaluate LLM agents in production',
    excerpt:
      'Unit tests for agents are a lie. Here is the eval stack we actually run — offline, online, and the rubric scoring we trust more than vibes.',
    category: 'Engineering',
    readTime: '12 min read',
    date: '2026-03-18',
    icon: 'ri-robot-2-line',
  },
  {
    slug: 'production-rag-2026',
    title: 'Production RAG in 2026: what works, what we stopped doing',
    excerpt:
      'Every RAG failure we have debugged in the last year, mapped to the fix. Chunk strategy, hybrid search, re-rankers, and why we stopped using vector DBs for half our deployments.',
    category: 'Engineering',
    readTime: '15 min read',
    date: '2026-02-04',
    icon: 'ri-database-2-line',
  },
];

export default function BlogPage() {
  return (
    <>
      <Header activePage="resources" />
      <EnglishOnlyNotice />

      <section className="page-header"><PageHeroBackground />
        <div className="container relative z-10">
          <Animated animation="fadeInUp">
            <Badge icon="ri-article-line" variant="white">
              Writing
            </Badge>
          </Animated>
          <Animated animation="fadeInUp" delay={0.1}>
            <h1>Engineering notes.</h1>
          </Animated>
          <Animated animation="fadeInUp" delay={0.2}>
            <p>
              Things we figured out the hard way so you don&apos;t have to. No thought-leadership fluff —
              only things we&apos;d tell a friend debugging the same problem.
            </p>
          </Animated>
        </div>
      </section>

      <div className="breadcrumb-wrapper">
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link href="/">Home</Link></li>
              <li className="breadcrumb-item active" aria-current="page">Blog</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <Stagger>
            <div className="grid md:grid-cols-2 gap-8">
              {posts.map((post) => (
                <StaggerItem key={post.slug}>
                  <HoverCard>
                    <Link href={`/blog/${post.slug}`} className="block h-full">
                      <article className="card card-hover h-full p-8">
                        <div className="flex items-center gap-3 mb-6">
                          <div className="w-12 h-12 rounded-xl bg-primary-blue/10 flex items-center justify-center">
                            <i className={`${post.icon} text-2xl text-primary-blue`} />
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-primary-blue uppercase tracking-wide">
                              {post.category}
                            </div>
                            <div className="text-xs text-text-muted">
                              {post.readTime} · {post.date}
                            </div>
                          </div>
                        </div>
                        <h2 className="text-2xl font-bold mb-3 leading-tight">{post.title}</h2>
                        <p className="text-text-muted leading-relaxed mb-6">{post.excerpt}</p>
                        <span className="text-primary-blue font-medium inline-flex items-center gap-2">
                          Read the post <i className="ri-arrow-right-line" aria-hidden="true" />
                        </span>
                      </article>
                    </Link>
                  </HoverCard>
                </StaggerItem>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      <Footer />
    </>
  );
}
