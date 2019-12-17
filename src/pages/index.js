import React from "react"
import { Link } from "gatsby"
import Project from "..//components/project"
import Footer from "..//components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo.png"
import MEMS from "../images/mems.jpg"
import GAMMA from "../images/mems.jpg"
import Resume from "../images/david_rogers_resume.pdf"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
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
        <h1>
          David
          <br />
          Rogers
        </h1>
        <h3>
          UX / UI Designer at{" "}
          <a id="CompanyLink" href="https://www.sopranodesign.com/">
            Soprano Design
          </a>
        </h3>
        <p>
          Driven to augment the human experience <br />
          and enrich peoples lives through design
        </p>
        <a className="Button" href="https://www.linkedin.com/in/davidrogerz/">
          Get In Touch
        </a>
      </div>
    </div>
    <div className="Projects">
      <div className="ProjectGroup">
        <Project
          title="MEMS"
          description="The messaging platform powering enterprise and government."
          button="mems"
          image={MEMS}
        />
        <Project
          title="GAMMA"
          description="Trusted mobile messaging and workflow integrations."
          button="gamma"
          image={GAMMA}
        />
        <Project
          title="QOIPR"
          description="The all-in-one reselling platform solution for SMB"
          button="qoipr"
          image={GAMMA}
        />
      </div>
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
