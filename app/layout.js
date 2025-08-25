// app/layout.js - COMPLETE IMPROVED VERSION
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  weight: ['400', '800', '900'],
  preload: true,
  fallback: ['system-ui', 'arial'],
  adjustFontFallback: false, // Prevent layout shift
})

export const metadata = {
  title: {
    template: '%s | David Rogers - Senior UX/UI Designer',
    default: 'David Rogers - Senior UX/UI Designer at Soprano Design',
  },
  description: 'David Rogers Senior UX/UI Designer at Soprano Design. Driven to augment the human experience and enrich peoples lives through design.',
  metadataBase: new URL('https://davidrogers.com'), // Update with actual domain
  alternates: {
    canonical: '/',
  },
  authors: [{ name: 'David Rogers', url: 'https://linkedin.com/in/davidrogerz' }],
  creator: 'David Rogers',
  publisher: 'David Rogers',
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
    google: 'G-R9RZX2NSDN', // Add your actual verification code
  },
  category: 'portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#000000" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* PERFORMANCE: Preload critical resources */}
        
        {/* PERFORMANCE: DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.linkedin.com" />
        <link rel="dns-prefetch" href="//www.youtube.com" />
        
        {/* ANALYTICS: Only load if tracking ID is provided */}
        {process.env.GOOGLE_ANALYTICS_TRACKING_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_TRACKING_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.GOOGLE_ANALYTICS_TRACKING_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className={inter.className}>
        {/* ACCESSIBILITY: Screen reader announcement */}
        <div id="live-region" aria-live="polite" aria-atomic="true" className="sr-only" />
        
        {children}
      </body>
    </html>
  )
}