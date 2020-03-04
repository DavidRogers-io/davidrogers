import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Nav from "..//components/nav"
import Footer from "..//components/footer"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Nav />
    <div className="Hero">
      <div className="HeroGroup">
        <h1>Page Not Found</h1>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default NotFoundPage
