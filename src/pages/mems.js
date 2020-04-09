import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Nav from "..//components/nav"
import Footer from "..//components/footer"
import Section from "../components/section"
import Testimonial from "..//components/testimonial"
import ProjectMEMS from "../images/mems.jpg"

const MEMS = () => (
  <Layout>
    <SEO title="MEMS" />
    <Nav />
    <div className="Hero">
      <div className="Group">
        <h1>MEMS</h1>
        <h3>
          The messaging platform powering
          <br />
          enterprise and government.
        </h3>
        <img
          src={ProjectMEMS}
          alt="David standing at the peak of palm beach lookout in Sydney Australia"
        />
      </div>
    </div>
    <div className="Group">
      <Section
        title="The Need"
        text1="Complex multinational enterprise and government organisations require robust and scalable omnichannel mobile messaging capabilities meeting the highest security and compliance standards."
        text2="With a broad range of industries looking to adopt emerging communication channels for parcel deliveries through to managing national emergencies, Soprano MEMS needed to refine an accessible user experience catering to a wide range of use cases."
      />
      <img
        src={ProjectMEMS}
        alt="David standing at the peak of palm beach lookout in Sydney Australia"
      />
      <Section
        title="The Challenge"
        text1="Having achieved great success with thousands of organizations utilizing the capability of MEMS through API’s, it was time to prioritize the accessibility and user experience of platform users."
        text2="With exceptionally capable and feature rich technology being developed over 20 years a design strategy was necessary to navigate the limitations and transition to an accessible design system."
      />
      <img
        src={ProjectMEMS}
        alt="David standing at the peak of palm beach lookout in Sydney Australia"
      />
      <Section title="The Solution" text1="" />
      <img
        src={ProjectMEMS}
        alt="David standing at the peak of palm beach lookout in Sydney Australia"
      />
      <Section title="My Role" text1="" />
      <img
        src={ProjectMEMS}
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

export default MEMS
