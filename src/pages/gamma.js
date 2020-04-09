import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Nav from "..//components/nav"
import Footer from "..//components/footer"
import Section from "../components/section"
import Testimonial from "..//components/testimonial"
import ProjectGAMMA from "../images/gamma.jpg"

const GAMMA = () => (
  <Layout>
    <SEO title="GAMMA" />
    <Nav />
    <div className="Hero">
      <div className="Group">
        <h1>MEMS</h1>
        <h3>
        Trusted mobile messaging and <br />workflow integrations.
        </h3>
        <img
          src={ProjectGAMMA}
          alt="David standing at the peak of palm beach lookout in Sydney Australia"
        />
      </div>
    </div>
    <div className="Group">
      <Section
        title="The Need"
        text1="With a slew of high profile data breaches and industry figures estimating 43% of businesses experiencing a data breach in 2014, enterprise and government were searching for a secure way to communicate in a world with mobile BYOD trending."
        text2="Organisations reliance on managing many messaging, business process and workflow applications exacerbated the need for a single secure mobile messaging solution."
      />
      <img
        src={ProjectGAMMA}
        alt="David standing at the peak of palm beach lookout in Sydney Australia"
      />
      <Section
        title="The Challenge"
        text1="Many successful consumer messaging applications were already laying claim to a saturated market, however, these applications fell short of the necessary compliance, security, integration and performance capabilities required for most business use cases."
        text2="GAMMA, a greenfield project, was tasked to combine the best capabilities of consumer messaging while embedding and securing critical business processes and workflows."
      />
      <img
        src={ProjectGAMMA}
        alt="David standing at the peak of palm beach lookout in Sydney Australia"
      />
      <Section title="The Solution" text1="" />
      <img
        src={ProjectGAMMA}
        alt="David standing at the peak of palm beach lookout in Sydney Australia"
      />
      <Section title="My Role" text1="" />
      <img
        src={ProjectGAMMA}
        alt="David standing at the peak of palm beach lookout in Sydney Australia"
      />
      <Testimonial
        name1="Mark Natter"
        position1="&nbsp;Development Manager at Fluent Commerce"
        testimony1='"I had the pleasure of working with David for almost two years at Soprano Design; collaborating on both web and cutting edge mobile apps. While my role was to lead the development of these apps; Davids insight and input was a driving force behind the UI/UX which made these successful and accepted by users...."'
        linkedin1="https://www.linkedin.com/in/mark-natter-25b7a112/"
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

export default GAMMA