// components/Footer.js
'use client' // ADD THIS LINE

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-group">
        <h2>Let's Connect</h2>
        <h3>
          I'm always eager to discuss design, technology and business. Let's
          nurture your ideas, tackle challenging problems and enrich people's
          lives.
        </h3>
        
        <a 
          className="button footer-button" 
          href="https://www.linkedin.com/in/davidrogerz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get In Touch
        </a>

        <Link href="/about" className="nav-link footer-link">
          Learn more about me
        </Link>

        <p className="signature">
          Designed and developed by David Rogers in San Francisco, California.
        </p>
      </div>
    </footer>
  )
}