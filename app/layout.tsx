import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';
import { ThemeProvider } from 'next-themes';
import { ConsentProvider } from '@/components/consent-provider';
import { CookieBanner } from '@/components/cookie-banner';
import { ServiceWorkerRegister } from '@/components/service-worker-register';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FlowAfric - Connect • Call • Pay | African Super App',
  description: 'FlowAfric is the ultimate super app for Africans. Manage Naira & crypto wallets, trade P2P, make VoIP calls, and shop with escrow protection. Connect • Call • Pay with FlowAfric.',
  keywords: 'FlowAfric, African fintech, super app, Naira wallet, crypto wallet, P2P trading, VoIP calls, marketplace, escrow, payments, Nigeria, Africa',
  authors: [{ name: 'FlowAfric Team' }],
  creator: 'FlowAfric',
  publisher: 'FlowAfric',
  metadataBase: new URL('https://flowafric.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'FlowAfric - Connect • Call • Pay | African Super App',
    description: 'The ultimate super app for Africans. Manage wallets, trade P2P, make calls, and shop securely.',
    url: 'https://flowafric.com',
    siteName: 'FlowAfric',
    images: [
      {
        url: '/flowafric-logo-tagline.png',
        width: 1200,
        height: 630,
        alt: 'FlowAfric - African Super App',
      },
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'FlowAfric - African Super App (SVG)',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FlowAfric - Connect • Call • Pay | African Super App',
    description: 'The ultimate super app for Africans. Manage wallets, trade P2P, make calls, and shop securely.',
    images: ['/flowafric-logo-tagline.png', '/og-image.svg'],
    creator: '@flowafric',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'verification-token-here',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Performance: Preload hero logo/tagline image used above the fold */}
        <link rel="preload" as="image" href="/flowafric-logo-tagline.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/flowafric-logo.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/flowafric-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/flowafric-logo.png" />
        <link rel="manifest" href="/manifest.json" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "FlowAfric",
              "alternateName": "FlowAfric Super App",
              "url": "https://flowafric.com",
              "logo": "https://flowafric.com/logo.png",
              "description": "FlowAfric is the ultimate super app for Africans, offering Naira & crypto wallets, P2P trading, VoIP calls, and marketplace with escrow protection.",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "KM 5, Iworoko Road, behind Pathfinder Hotel",
                "addressLocality": "Ado-Ekiti",
                "addressRegion": "Ekiti State",
                "addressCountry": "Nigeria"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": process.env.NEXT_PUBLIC_SUPPORT_PHONE,
                "contactType": "Customer Service",
                "email": process.env.NEXT_PUBLIC_SUPPORT_EMAIL
              },
              "sameAs": [
                process.env.NEXT_PUBLIC_TWITTER_URL,
                process.env.NEXT_PUBLIC_INSTAGRAM_URL,
                process.env.NEXT_PUBLIC_LINKEDIN_URL
              ]
            })
          }}
        />
        {/* SEO: SoftwareApplication JSON-LD to describe the mobile app */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              "name": "FlowAfric",
              "applicationCategory": "FinanceApplication",
              "operatingSystem": "Android, iOS",
              "offers": { "@type": "Offer", "price": "0", "priceCurrency": "USD" },
              "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.8", "ratingCount": 1200 },
              "description": "Connect • Call • Pay. Manage Naira & crypto wallets, P2P trading, VoIP calls, and secure marketplace with escrow.",
              "downloadUrl": process.env.NEXT_PUBLIC_GOOGLE_PLAY_URL,
              "screenshot": [
                "https://flowafric.com/og-image.png"
              ],
              "publisher": { "@type": "Organization", "name": "FlowAfric" }
            })
          }}
        />
        {/* SEO: WebSite JSON-LD with SearchAction (if you add site search later) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "FlowAfric",
              "url": "https://flowafric.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://flowafric.com/?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-emerald-600 text-white px-4 py-2 rounded z-50">Skip to main content</a>
        <ServiceWorkerRegister />
        <ConsentProvider>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <Navigation />
            <main id="main" className="min-h-screen">
              {children}
            </main>
            <Footer />
            <CookieBanner />
          </ThemeProvider>
        </ConsentProvider>
      </body>
    </html>
  );
}