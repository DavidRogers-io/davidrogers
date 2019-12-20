import React from "react"
import { Link } from "gatsby"
import "./footer.css"

const Footer = props => (
  <div className="Footer">
    <div className="FooterGroup">
      <h2>Let's Connect.</h2>
      <h3>
        I'm always eager to discuss design, technology and business. Let's
        nurture your ideas, tackle challenging problems and enrich people's
        lives.
      </h3>
      <a className="Button" href="https://www.linkedin.com/in/davidrogerz/">
        Get In Touch
      </a>
      <Link className="NavLink" to="/about/">
        Learn more about me
      </Link>
      <p className="Signature">
        Designed and developed by David Rogers in San Francisco, California
      </p>
    </div>
  </div>
)

export default Footer
