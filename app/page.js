// app/page.js - UPDATED WITH ERROR BOUNDARY AND IMPROVEMENTS
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Project from '../components/Project'
import ErrorBoundary from '../components/ErrorBoundary'

// Static imports for better performance
const projectData = {
  mems: {
    title: "MEMS",
    description: "The messaging platform powering enterprise and government.",
    image: "/images/mems.jpg",
    alt: "MEMS dashboard interface showing messaging platform capabilities"
  },
  gamma: {
    title: "GAMMA", 
    description: "Trusted mobile messaging and workflow integrations.",
    image: "/images/gamma.jpg",
    alt: "GAMMA mobile messaging interface showcasing secure communication features"
  },
  qoipr: {
    title: "QOIPR",
    description: "The all-in-one reselling platform solution for SMB.",
    image: "/images/qoipr.jpg", 
    alt: "QOIPR reselling platform interface displaying business management tools"
  }
}

export const metadata = {
  title: 'David Rogers - Senior UX/UI Designer Portfolio',
  description: 'David Rogers Senior UX/UI Designer at Soprano Design. Driven to augment the human experience and enrich peoples lives through design.',
  author: 'David Rogers',
  keywords: ['UX Designer', 'UI Designer', 'Soprano Design', 'Portfolio', 'San Francisco'],
  openGraph: {
    title: 'David Rogers - Senior UX/UI Designer',
    description: 'David Rogers Senior UX/UI Designer at Soprano Design',
    url: 'https://davidrogers.com',
    siteName: 'David Rogers Portfolio',
    images: [
      {
        url: '/images/og-image.jpg', // Add this image
        width: 1200,
        height: 630,
        alt: 'David Rogers UX/UI Designer Portfolio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'David Rogers - Senior UX/UI Designer',
    description: 'David Rogers Senior UX/UI Designer at Soprano Design',
    creator: '@davidrogerz', // Update with actual handle
    images: ['/images/og-image.jpg'],
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
}

export default function HomePage() {
  return (
    <ErrorBoundary>
      {/* ACCESSIBILITY: Skip link for screen readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Nav />
      
      <main id="main-content" className="hero" role="main">
        <div className="hero-group">
          <h1>
            David
            <br />
            Rogers
          </h1>
          <h3>
            Senior UX / UI Designer at{" "}
            <a 
              id="company-link" 
              href="https://www.sopranodesign.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Soprano Design company website (opens in new tab)"
            >
              Soprano Design.
            </a>
          </h3>
          <p>
            Driven to augment the human experience <br />
            and enrich peoples lives through design.
          </p>
          <a 
            className="button" 
            href="https://www.linkedin.com/in/davidrogerz/" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Get in touch via LinkedIn (opens in new tab)"
          >
            Get In Touch
          </a>
        </div>
      </main>
      
      <section aria-label="Portfolio Projects">
        <ErrorBoundary>
          <Project {...projectData.mems} button="mems" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Project {...projectData.gamma} button="gamma" />
        </ErrorBoundary>
        <ErrorBoundary>
          <Project {...projectData.qoipr} button="qoipr" />
        </ErrorBoundary>
      </section>
      
      <Footer />
    </ErrorBoundary>
  )
}