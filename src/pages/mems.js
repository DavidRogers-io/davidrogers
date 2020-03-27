import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Section from "../components/section"
import Nav from "..//components/nav"
import Footer from "..//components/footer"
import ProjectMEMS from "../images/mems.jpg"

const MEMS = () => (
  <Layout>
    <SEO title="MEMS" />
    <Nav />
    <div className="Hero">
      <div className="Group">
        <h1>MEMS</h1>
        <img
          id="HeroImg"
          src={ProjectMEMS}
          alt="David standing at the peak of palm beach lookout in Sydney Australia"
        />
      </div>
    </div>
    <div className="Group">
      <Section
        title="The Need"
        description="I am a user experience designer and product leader from Sydney, Australia. I unlock opportunities by making technology easier to use and delighting users.
    I have led the design of challenging software platforms ranging from startup to enterprise. Currently serving the worlds largest carrier networks deliver mission critical messages."
      />
      <img
        id="FeatureImg"
        src={ProjectMEMS}
        alt="David standing at the peak of palm beach lookout in Sydney Australia"
      />
      <Section
        title="The Challenge"
        description="I am a user experience designer and product leader from Sydney, Australia. I unlock opportunities by making technology easier to use and delighting users.
    I have led the design of challenging software platforms ranging from startup to enterprise. Currently serving the worlds largest carrier networks deliver mission critical messages."
      />
      <img
        id="FeatureImg"
        src={ProjectMEMS}
        alt="David standing at the peak of palm beach lookout in Sydney Australia"
      />
      <Section
        title="The Solution"
        description="I am a user experience designer and product leader from Sydney, Australia. I unlock opportunities by making technology easier to use and delighting users.
    I have led the design of challenging software platforms ranging from startup to enterprise. Currently serving the worlds largest carrier networks deliver mission critical messages."
      />
      <img
        id="FeatureImg"
        src={ProjectMEMS}
        alt="David standing at the peak of palm beach lookout in Sydney Australia"
      />
    </div>
    <Footer />
  </Layout>
)

export default MEMS
