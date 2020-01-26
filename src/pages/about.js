import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Nav from "..//components/nav"
import Footer from "..//components/footer"

import Project from "..//components/project"
import MEMS from "../images/mems.jpg"
import GAMMA from "../images/mems.jpg"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Nav />
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

export default About
