import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Nav from "..//components/nav"
import Footer from "..//components/footer"
import ProjectGAMMA from "../images/gamma.jpg"

const GAMMA = () => (
  <Layout>
    <SEO title="GAMMA" />
    <Nav />
    <div className="Hero">
      <div className="HeroGroup"></div>
    </div>
    <Footer />
  </Layout>
)

export default GAMMA