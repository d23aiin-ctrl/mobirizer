import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-hero relative overflow-hidden flex items-center">
      <div className="absolute inset-0 grid-pattern opacity-[0.08] pointer-events-none" />
      <div className="container relative z-10 py-20">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.25em] text-white/60 mb-8">
            <span className="w-6 h-px bg-white/40" />
            404 — not found
          </div>
          <h1 className="text-[2.75rem] md:text-7xl font-extrabold text-white leading-[0.98] tracking-tightest mb-6">
            The page you&apos;re looking for isn&apos;t here.
          </h1>
          <pre className="font-mono text-sm text-white/50 mb-10 whitespace-pre-wrap">
{`$ mobirizer route-lookup
  status: 404
  hint:   check the URL, or head somewhere else`}
          </pre>
          <div className="flex gap-6 flex-wrap items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-neutral-900 font-semibold rounded-lg hover:bg-white/90 transition-colors"
            >
              <i className="ri-arrow-left-line" aria-hidden="true" />
              Back to home
            </Link>
            <Link
              href="/engineering"
              className="font-mono text-sm text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5"
            >
              See how we build
            </Link>
            <Link
              href="/contact"
              className="font-mono text-sm text-white/60 hover:text-white transition-colors border-b border-white/20 hover:border-white/60 pb-0.5"
            >
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
