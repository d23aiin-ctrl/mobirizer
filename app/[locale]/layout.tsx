import type { Metadata, Viewport } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { BackToTop, ThemeProvider } from '@/components';
import { PageTransition } from '@/components/ui';
import { JsonLd } from '@/components/seo/JsonLd';
import { generateOrganizationSchema, generateWebsiteSchema } from '@/lib/jsonld';
import { locales, Locale } from '@/i18n';
import { siteConfig } from '@/lib/metadata';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-mono',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const viewport: Viewport = {
  themeColor: '#6366f1',
  width: 'device-width',
  initialScale: 1,
};

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: t('siteTitle'),
      template: `%s | ${t('siteName')}`,
    },
    description: t('siteDescription'),
    keywords: t('keywords'),
    authors: [{ name: 'Mobirizer Services Pvt. Ltd.' }],
    robots: 'index, follow',
    icons: {
      icon: '/assets/images/favicon.png',
      apple: '/assets/images/apple-icon.png',
    },
    alternates: {
      canonical: `${siteConfig.url}/${locale}`,
      languages: Object.fromEntries(
        locales.map((loc) => [loc, `${siteConfig.url}/${loc}`])
      ),
    },
    openGraph: {
      title: t('siteTitle'),
      description: t('siteDescription'),
      type: 'website',
      locale: getOGLocale(locale),
      siteName: t('siteName'),
    },
  };
}

function getOGLocale(locale: Locale): string {
  const map: Record<Locale, string> = {
    en: 'en_IN',
    hi: 'hi_IN',
    ta: 'ta_IN',
    te: 'te_IN',
    bn: 'bn_IN',
  };
  return map[locale];
}

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  if (!locales.includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      dir="ltr"
      className={`${inter.variable} ${jetbrainsMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <JsonLd data={[generateOrganizationSchema(), generateWebsiteSchema(locale)]} />
      </head>
      <body>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <PageTransition>{children}</PageTransition>
            <BackToTop />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
