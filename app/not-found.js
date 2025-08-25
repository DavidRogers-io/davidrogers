// app/not-found.js - FIXED VERSION
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import Link from 'next/link'

export const metadata = {
  title: '404: Page Not Found - David Rogers',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <>
      {/* ACCESSIBILITY: Skip link for screen readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Nav />
      
      <main id="main-content" className="hero" role="main">
        <div className="hero-group">
          <h1>404</h1>
          <h3>Page Not Found</h3>
          <p>The page you are looking for could not be found.</p>
          <Link href="/" className="button">
            Return Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </>
  )
}