'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { cn } from '@/lib/cn';

interface FooterProps {
  variant?: 'default' | 'simple';
}

const socialLinks = [
  {
    href: 'https://www.linkedin.com/company/mobirizer/',
    icon: 'ri-linkedin-fill',
    label: 'LinkedIn',
  },
  {
    href: 'https://twitter.com/mobirizer',
    icon: 'ri-twitter-x-line',
    label: 'Twitter',
  },
  {
    href: 'https://github.com/mobirizer',
    icon: 'ri-github-fill',
    label: 'GitHub',
  },
  {
    href: 'https://www.facebook.com/MobiRizer',
    icon: 'ri-facebook-fill',
    label: 'Facebook',
  },
];

const productLinkKeys = [
  { href: '/products/d23-ai', key: 'd23ai' },
  { href: '/products/roboguru', key: 'roboguru' },
  { href: '/products/ohgrt', key: 'ohgrt' },
  { href: '/products/xappy', key: 'xappy' },
  { href: '/products/janseva', key: 'janseva' },
  { href: '/products/whatsapp-commerce', key: 'whatsappCommerce', defaultOnly: true },
];

const solutionLinkKeys = [
  { href: '/solutions#agentic', key: 'agenticAi' },
  { href: '/solutions#conversational', key: 'conversationalAi' },
  { href: '/solutions#integration', key: 'aiIntegration' },
  { href: '/solutions#custom', key: 'customDevelopment', defaultOnly: true },
];

const companyLinkKeys = [
  { href: '/company', key: 'aboutUs' },
  { href: '/contact', key: 'contact' },
  { href: '/privacy-policy', key: 'privacyPolicy' },
  { href: '/terms-of-service', key: 'termsOfService' },
];

const resourceLinkKeys = [
  { href: '/engineering', key: 'engineering' },
  { href: '/blog', key: 'blog' },
  { href: '/case-studies', key: 'caseStudies' },
  { href: '/careers', key: 'careers' },
];

export function Footer({ variant = 'default' }: FooterProps) {
  const isSimple = variant === 'simple';
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tProducts = useTranslations('products');
  const tSolutions = useTranslations('solutions');
  const tResources = useTranslations('resources');

  return (
    <footer className="main-footer" role="contentinfo">
      <div className="container">
        <div className="footer-grid">
          {/* Brand Section */}
          <div className="footer-section">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/assets/images/logo.png"
                alt="Mobirizer Logo"
                width={48}
                height={48}
                className="w-12 h-12 rounded-xl"
              />
              <span className="text-xl font-bold text-white">Mobirizer</span>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              {t('description')}
            </p>
            <ul className="space-y-2 mb-5 font-mono text-xs">
              <li>
                <a href="mailto:info@mobirizer.com" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
                  <i className="ri-mail-line" aria-hidden="true" />
                  info@mobirizer.com
                </a>
              </li>
              <li>
                <a href="tel:+919810503222" className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2">
                  <i className="ri-phone-line" aria-hidden="true" />
                  +91 9810503222
                </a>
              </li>
            </ul>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <i className={cn(social.icon, 'text-lg')}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div className="footer-section">
            <h4>{t('products')}</h4>
            <ul className="space-y-3">
              {productLinkKeys
                .filter((link) => !link.defaultOnly || !isSimple)
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {tProducts(`${link.key}.name`)}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="footer-section">
            <h4>{t('solutions')}</h4>
            <ul className="space-y-3">
              {solutionLinkKeys
                .filter((link) => !link.defaultOnly || !isSimple)
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white transition-colors"
                    >
                      {tSolutions(`${link.key}.name`)}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Resources */}
          <div className="footer-section">
            <h4>{tResources('title')}</h4>
            <ul className="space-y-3">
              {resourceLinkKeys.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {tResources(`${link.key}.title`)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="footer-section">
            <h4>{t('company')}</h4>
            <ul className="space-y-3">
              {companyLinkKeys.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors"
                  >
                    {tNav(link.key)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 mt-8 border-t border-white/10 text-center">
          <p className="text-white/60 text-sm">
            {t('copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
}
