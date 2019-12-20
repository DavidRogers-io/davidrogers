import React from "react"
import Nav from "..//components/nav"
import Footer from "..//components/footer"
import Layout from "../components/layout"
import SEO from "../components/seo"

const MEMS = () => (
  <Layout>
    <SEO title="MEMS" />
    <div className="Hero">
      <Nav />
      <div className="HeroGroup"></div>
    </div>
    <Footer />
  </Layout>
)

export default MEMS
