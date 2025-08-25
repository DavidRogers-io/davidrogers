// app/qoipr/page.js - FIXED VERSION
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import OptimizedImage from '../../components/OptimizedImage'

export const metadata = {
  title: 'QOIPR - David Rogers Portfolio',
  description: 'The all-in-one reselling platform solution for SMB - QOIPR project case study by David Rogers.',
  openGraph: {
    title: 'QOIPR - David Rogers Portfolio',
    description: 'The all-in-one reselling platform solution for SMB case study',
    images: [
      {
        url: '/images/qoipr.jpg',
        width: 1200,
        height: 600,
        alt: 'QOIPR reselling platform interface',
      },
    ],
  },
}

export default function QoiprPage() {
  return (
    <>
      {/* ACCESSIBILITY: Skip link for screen readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Nav />
      
      <main id="main-content" className="hero" role="main">
        <div className="group">
          <h1>QOIPR</h1>
          <h3>Case study coming soon</h3>
          <OptimizedImage
            src="/images/qoipr.jpg"
            alt="QOIPR all-in-one reselling platform interface for small and medium businesses"
            priority
          />
        </div>
      </main>
      
      <div className="group">
        <div className="section">
          <div className="section-details">
            <h2>Coming Soon</h2>
            <div>
              <p>
                This case study is currently being developed and will showcase the design and 
                development of QOIPR, an all-in-one reselling platform solution specifically 
                designed for small and medium businesses.
              </p>
              <p>
                Check back soon for the complete case study including design process, 
                challenges, solutions, and results.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  )
}