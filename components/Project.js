// components/Project.js
'use client' // ADD THIS LINE

import Link from 'next/link'
import Image from 'next/image'

export default function Project({ title, description, button, image, alt }) {
  const href = `/${button}`
  
  return (
    <article className="project" aria-labelledby={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <header>
        <Link href={href} className="project-title-link" aria-describedby={`desc-${title.toLowerCase().replace(/\s+/g, '-')}`}>
          <h2 id={`project-${title.toLowerCase().replace(/\s+/g, '-')}`}>{title}</h2>
        </Link>
      </header>
      
      <div className="project-details">
        <h3 id={`desc-${title.toLowerCase().replace(/\s+/g, '-')}`}>{description}</h3>
        <Link href={href} className="project-link" aria-label={`View ${title} case study`}>
          View Case Study
        </Link>
      </div>
      
      {image && (
        <Link href={href} className="project-image-link">
          <Image
            src={image}
            alt={alt}
            width={1200}
            height={600}
            style={{ width: '100%', height: 'auto', marginBottom: '4rem' }}
          />
        </Link>
      )}
    </article>
  )
}