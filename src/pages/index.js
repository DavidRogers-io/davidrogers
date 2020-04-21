import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Nav from "..//components/nav"
import Footer from "..//components/footer"
import Project from "..//components/project"
import ProjectMEMS from "../images/mems.jpg"
import ProjectGAMMA from "../images/gamma.jpg"
import ProjectQOIPR from "../images/qoipr.jpg"

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" />
    <Nav />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>
          David
          <br />
          Rogers
        </h1>
        <h3>
          Senior UX / UI Designer at{" "}
          <a id="CompanyLink" href="https://www.sopranodesign.com/">
            Soprano Design.
          </a>
        </h3>
        <p>
          Driven to augment the human experience <br />
          and enrich peoples lives through design.
        </p>
        <a className="Button" href="https://www.linkedin.com/in/davidrogerz/">
          Get In Touch
        </a>
      </div>
    </div>
    <Project
      title="MEMS"
      description="The messaging platform powering enterprise and government."
      button="mems"
      image={ProjectMEMS}
      alt="MEMS work and case study"
    />
    <Project
      title="GAMMA"
      description="Trusted mobile messaging and workflow integrations."
      button="gamma"
      image={ProjectGAMMA}
      alt="GAMMA work and case study"
    />
    <Project
      title="QOIPR"
      description="The all-in-one reselling platform solution for SMB."
      button="qoipr"
      image={ProjectQOIPR}
      alt="QOIPR work and case study"
    />
    <Footer />
  </Layout>
)

export default IndexPage
