// components/Nav.js
'use client' // ADD THIS LINE

import Link from 'next/link'
import Image from 'next/image'

export default function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      <div className="nav-group">
        <Link href="/" className="nav-logo" aria-label="David Rogers home page">
          <Image 
            src="/images/logo.png" 
            alt="David Rogers logo" 
            width={48} 
            height={48}
            priority
          />
        </Link>
        <div className="nav-right">
          <Link href="/" className="nav-link">
            Portfolio
          </Link>
          <Link href="/about" className="nav-link">
            About
          </Link>
          <a 
            href="/david_rogers_resume.pdf" 
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <a 
            href="https://www.linkedin.com/in/davidrogerz/" 
            className="nav-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  )
}