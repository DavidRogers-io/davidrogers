import React from "react"
import Nav from "..//components/nav"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="Hero">
      <Nav />
      <div className="HeroGroup">
        <h1>Page Not Found</h1>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
