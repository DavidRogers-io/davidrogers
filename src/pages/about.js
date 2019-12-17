import React from "react"
import Layout from "../components/layout"
import Footer from "..//components/footer"
import SEO from "../components/seo"

const About = () => (
  <Layout>
    <SEO title="About" />
    <div className="Hero">
      <div className="HeroGroup">
        <h2>Hi, I'm David</h2>
        <p>
          I'd love to have a chat about design and tech to ideas and
          philosophies. Connect with me on LinkedIn or send me an email and
          let's talk. Nurturing your ideas or product from the ground up.
        </p>
        <a href="mailto: david@davidrogers.io">david@davidrogers.io</a>
        <a href="https://www.linkedin.com/in/davidrogerz/">
          linkedin.com/in/davidrogerz
        </a>
        <h2>Testimonials</h2>
      </div>
    </div>
    <Footer />
  </Layout>
)

export default About
