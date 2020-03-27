import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Section from "../components/section"
import Nav from "..//components/nav"
import Footer from "..//components/footer"
import Testimonial from "..//components/testimonial"
import AboutPhoto from "../images/about.jpg"
import About2Photo from "../images/about2.jpg"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Nav />
    <div className="Hero">
      <div className="Group">
        <h1>About</h1>
        <img
          id="HeroImg"
          src={AboutPhoto}
          alt="David standing at the peak of palm beach lookout in Sydney Australia"
        />
      </div>
    </div>
    <div className="Group">
      <Section
        title="G'day, I'm David"
        text1="I'm a permanent resident living in San Francisco and work at Soprano Design."
        text2="I’m from Sydney Australia and have been working professionally in design since 2009, but my passion for design and technology dates back to my childhood. I remember ordering parts and building my first PC at the age of 12. My home now somewhat resembles a Tony Stark-esk basement full of handmade technological creations."
        text3="I left my life behind in Sydney and moved to San Francisco to pursue my passion for technology as it’s always been my ambition to work among the brilliant minds at the tip of the spear. I’m driven by the opportunity to make a meaningful impact on people’s lives by building the bridge between people and technology to push the world forward through design."
        text4="When I’m not designing, I'm usually out exploring the city, hiking or in the gym."
      />
      <img
        id="FeatureImg"
        src={About2Photo}
        alt="David standing at the peak of palm beach lookout in Sydney Australia"
      />
      <Testimonial
        name1="David Simpson"
        position1="&nbsp;CEO at e-Volve Corporate Technology"
        testimony1='"David is first and foremost an excellent individual and team
        contributor. He is hard working and passionate about UX design
        and its interplay with business..."'
        linkedin1="https://www.linkedin.com/in/david-simpson-6335052/"
        name2="Alex Baburin"
        position2="&nbsp;CEO at Wilcom International"
        testimony2='"I loved working with David. Professional, flexible and excellent
        skills. A real can-do attitude and I would recommend him to
        anyone looking for a UX professional..."'
        linkedin2="https://www.linkedin.com/in/alex-baburin-b7617514/"
        name3="Santiago Morales"
        position3="&nbsp;Global Launch PM at Soprano Design"
        testimony3='"David is an exceptional designer who knows how to cultivate and
        breath life into ideas with incredible creativity and
        innovation..."'
        linkedin3="https://www.linkedin.com/in/santiago-morales-4982a0ba/"
        linkedin="https://www.linkedin.com/in/davidrogerz/"
      />
    </div>
    <Footer />
  </Layout>
)

export default About
