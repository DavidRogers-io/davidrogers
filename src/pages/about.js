import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Nav from "..//components/nav"
import Footer from "..//components/footer"
import Section from "../components/section"
import Testimonial from "..//components/testimonial"
import Image from "..//components/image"

const About = () => (
  <Layout>
    <SEO title="About" />
    <Nav />
    <div className="Hero">
      <div className="Group">
        <h1>About</h1>
        <h3>Learn about my story and what inspires me.</h3>
        <Image
          filename="gammaconference.jpg"
          alt="David with colleagues at a cybersecurity conference"
        />
      </div>
    </div>
    <div className="Group">
      <Section
        title="G'day, I'm David"
        text1="I am a permanent resident living in San Francisco and work at Soprano Design."
        text2="I am from Sydney Australia and have worked professionally in design since 2009, but my passion for design and technology dates back to my childhood. My childhood LEGO addiction really stepped up a notch when I was 12 and first ordered parts and built my own computer. Since then my passion for technology has led me to countless technical projects and creations and my home has grown to resemble Tony Starks basement."
        text3="I have also had the fortune to experience growing up in Sydney Australia and Dubai United Arab Emirates. Being raised in vastly different environments, cultures and societies has instilled a broad perspective and understanding of people and behavior. My family is also based in a dozen different countries which shaped a global sense of community and has inspired me to follow my passions wherever they may lead."
        text4="I left my life behind in Sydney and moved to San Francisco to pursue my passion for technology as my dream has been to work among the brilliant minds at the tip of the spear. I’m driven by the opportunity to make a meaningful impact on people’s lives by building the bridge between people and technology to better the world we live."
        text5="When I’m not designing or tinkering on some personal project, I'm usually out exploring the city, hiking or in the gym."
      />
      <Image
        filename="about2.jpg"
        alt="David standing at the base of Alamere Falls waterfall"
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
      <Image
        filename="about.jpg"
        alt="David standing at the peak of palm beach lookout in Sydney Australia"
      />
    </div>
    <Footer />
  </Layout>
)

export default About
