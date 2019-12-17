import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo.png"
import Resume from "../images/david_rogers_resume.pdf"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />

    <div className="Hero">
      <div className="Nav">
        <Link to="/">
          <img className="Logo" src={Logo} alt="" />
        </Link>
        <div className="NavRight">
          <Link className="NavLink" to="/">
            Portfolio
          </Link>
          <Link className="NavLink" to="/about/">
            About
          </Link>
          <a className="NavLink" href={Resume}>
            Resume
          </a>
          <a
            className="NavLink"
            href="https://www.linkedin.com/in/davidrogerz/"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="HeroGroup">
        <h1>Page Not Found</h1>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
