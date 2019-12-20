import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Nav from "..//components/nav"
import Footer from "..//components/footer"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="Hero">
      <Nav />
      <div className="HeroGroup"></div>
    </div>
    <Footer />
  </Layout>
)

export default About
