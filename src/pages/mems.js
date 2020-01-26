import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Nav from "..//components/nav"
import Footer from "..//components/footer"

const MEMS = () => (
  <Layout>
    <SEO title="MEMS" />
    <Nav />
    <div className="Hero">
      <div className="HeroGroup"></div>
    </div>
    <Footer />
  </Layout>
)

export default MEMS
