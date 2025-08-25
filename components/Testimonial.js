// components/Testimonial.js - FIXED VERSION
'use client'
import React from "react"

export default function Testimonial({ testimonials, mainLinkedin }) {
  return (
    <section className="testimonial" aria-labelledby="testimonials-heading">
      <div className="testimonial-group">
        <h2 id="testimonials-heading">Testimonials</h2>
        <div>
          {testimonials && testimonials.map((testimonial, index) => (
            <div key={index} className="testimony">
              <a 
                href={testimonial.linkedin}
                className="testimony-name"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${testimonial.name}'s LinkedIn profile`}
              >
                {testimonial.name}
              </a>
              <p className="testimony-position">{testimonial.position}</p>
              <p>
                {/* FIXED: Use 'testimony' property instead of 'text' */}
                {testimonial.testimony}
                {testimonial.linkedin && (
                  <a 
                    href={testimonial.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="testimony-link"
                    aria-label={`Read more about ${testimonial.name} on LinkedIn`}
                  >
                    read more
                  </a>
                )}
              </p>
            </div>
          ))}
        </div>
        {mainLinkedin && (
          <a 
            className="button" 
            href={mainLinkedin} 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Read more testimonials on LinkedIn"
          >
            Read More
          </a>
        )}
      </div>
    </section>
  )
}