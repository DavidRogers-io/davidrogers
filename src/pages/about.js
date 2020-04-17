import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Nav from "..//components/nav"
import Footer from "..//components/footer"
import Section from "../components/section"
import Testimonial from "..//components/testimonial"
import AboutPhoto from "../images/about.jpg"
import About2Photo from "../images/about2.jpg"
import GAMMAConference from "../images/gammaconference.jpg"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Nav />
    <div className="Hero">
      <div className="Group">
        <h1>About</h1>
        <h3>
          Learn about my story and what inspires me.
        </h3>
        <img
        src={GAMMAConference}
        alt="David and his colleagues at a cybersecurity conference"
      />
      </div>
    </div>
    <div className="Group">
      <Section
        title="G'day, I'm David"
        text1="I'm a permanent resident living in San Francisco and work at Soprano Design."
        text2="I’m from Sydney Australia and have been working professionally in design since 2009, but my passion for design and technology dates back to my childhood. I remember ordering parts and building my first PC when I was 12 and now my home looks a bit like Tony Starks basement of technical projects and creations."
        text3="I left my life behind in Sydney and moved to San Francisco to pursue my passion for technology as it’s always been my ambition to work among the brilliant minds at the tip of the spear. I’m driven by the opportunity to make a meaningful impact on people’s lives by building the bridge between people and technology improving the world we live in through design."
        text4="When I’m not designing, I'm usually out exploring the city, hiking or in the gym."
      />
      <img
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
      <img
        src={AboutPhoto}
        alt="David standing at the peak of palm beach lookout in Sydney Australia"
      />
    </div>
    <Footer />
  </Layout>
)

export default About
