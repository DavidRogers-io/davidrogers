import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Nav from "..//components/nav"
import Footer from "..//components/footer"
import Section from "../components/section"
import Testimonial from "..//components/testimonial"
import ProjectMEMS from "../images/mems.jpg"
import Awards from "../images/awards.jpg"
import Companies from "../images/companies.jpg"
import MEMSWhiteboarding from "../images/memswhiteboarding.jpg"

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
        title="My Role"
        text1="Since 2015 I’ve been the UX principal leading the design vision and strategy of products at Soprano Design. I’m responsible for:"
        text2="Delivering forward-thinking, evolutionary and iterative updates that actualize to the larger vision over time."
        text3="Implementing accessible and cohesive user experiences that are inclusive and well informed."
        text4="Establish design systems and operations from the ground up within a new product management function and assisting executives screen product resources."
        text5="Building relationships with cross functional global teams to lead creative and holistic thinking across diverse product releases, platforms and devices."
        text6="Tailoring branded solutions for carrier partners, managing each of their guidelines and ensuring the continuity of their compliance needs."
      />
      <iframe
        title="Soprano MEMS company video"
        width="1200"
        height="600"
        src="https://www.youtube.com/embed/IDO-Mbs4UzM"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Section
        title="The Need"
        text1="Complex multinational enterprise and government organisations require robust and scalable omnichannel mobile messaging capabilities meeting the highest security and compliance standards."
        text2="With a broad range of industries looking to adopt emerging communication channels for parcel deliveries through to managing national emergencies, Soprano MEMS needed to refine an accessible user experience catering to a wide range of use cases."
      />
      <img
        src={MEMSWhiteboarding}
        alt="Post its, sketches and diagrams showing the methods of working out MEMS"
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
      <Section
        title="The Solution"
        text1="With our skilled cross functional and global team, we executed our design strategy by implementing a design system catering to 13 major Mobile Network Operators while undertaking a company wide rebrand. Part of this strategy was a comprehensive usability analysis of the existing system which guided us to complete WCAG 2.1 and Section 508 compliance."
        text2="Organisations now have 6 more channels (IP, Voice, RCS, WhatsApp, WeChat and BusinessChat) and the ability to orchestrate complex omnichannel communications. These advancements gave reach to new opportunities and led to the creation of RapidAlert, a crisis communications management center capable of deploying tailored nationwide messaging."
        text3="Our solutions weren’t limited to who could be reached by what channels we could offer, we considered how and why with new drag and drop workflow and chatbot editors. Organisations can now create and deploy intelligent chatbots that engage and consider the nature and intent of a conversation."
        text4="The cumulation of these efforts has been a refined and accessible modern user experience resulting in 4x more organisations, 4x growth message volume and the trust of twice as many Fortune 500 companies."
      />
      <iframe
        title="Soprano MEMS Interview on Sky News"
        width="1200"
        height="600"
        src="https://www.youtube.com/embed/lF1S2W6pTVw"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <img src={Awards} alt="Australian national export awards" />
      <img src={Companies} alt="Companies using MEMS" />
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
