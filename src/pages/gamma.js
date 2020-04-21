import React from "react"
import SEO from "../components/seo"
import Layout from "../components/layout"
import Nav from "..//components/nav"
import Footer from "..//components/footer"
import Section from "../components/section"
import Testimonial from "..//components/testimonial"
import Image from "..//components/image"

const GAMMA = () => (
  <Layout>
    <SEO title="GAMMA" />
    <Nav />
    <div className="Hero">
      <div className="Group">
        <h1>GAMMA</h1>
        <h3>
          Trusted mobile messaging and <br />
          workflow integrations.
        </h3>
        <Image filename="gamma.jpg" alt="GAMMA work and case study" />
      </div>
    </div>
    <div className="Group">
      <Section
        title="The Role"
        text1="Since 2015 I’ve been the UX principal leading the design vision and strategy of products at Soprano Design. I’m responsible for:"
        text2="Delivering forward-thinking, evolutionary and iterative updates that actualize to the larger vision over time."
        text3="Implementing accessible and cohesive user experiences that are inclusive and well informed."
        text4="Establish design systems and operations from the ground up within a new product management function and assisting executives screen product resources."
        text5="Building relationships with cross functional global teams to lead creative and holistic thinking across diverse product releases, platforms and devices."
        text6="Tailoring branded solutions for carrier partners, managing each of their guidelines and ensuring the continuity of their compliance needs."
      />
      <iframe
        title="Soprano GAMMA for Enterprise Mobile Messaging Security"
        width="100%"
        height="600"
        src="https://www.youtube.com/embed/jZW8NS3_wEk"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Section
        title="The Need"
        text1="With a slew of high profile data breaches and industry figures estimating 43% of businesses experiencing a data breach in 2014, enterprise and government were searching for a secure way to communicate  in an increasingly BYOD mobile world."
        text2="Organisations reliance on managing many messaging, business process and workflow applications exacerbated the need for a single secure mobile messaging solution."
      />
      <Image
        filename="gammawhiteboarding.jpg"
        alt="Post its, sketches and diagrams showing the methods of working out GAMMA"
      />
      <Section
        title="The Challenge"
        text1="The consumer messaging market is highly competitive with many well funded and established applications. These applications lacked the level compliance, security, integration and performance capabilities most organizations required so we created GAMMA."
        text2="GAMMA, a greenfield project, was tasked to combine the best capabilities of consumer messaging while embedding and securing critical business processes and workflows."
      />
      <Image
        filename="gammaregistration.jpg"
        alt="GAMMA's registration process"
      />
      <Section
        title="The Solution"
        text1="Through rapid design sprints and feedback from the skilled global team at Soprano and our partners, GAMMA was quickly defined and fulfilled the niche hypothesized. Building an iOS and Android version of GAMMA with a consistent design language across these platforms allowed maximum reach and efficiency."
        text2="GAMMA delivers an “SMS-like” preserving the productivity and immediacy of SMS, while deploying a more advanced business messaging experience in a mission-critical and secure environment. The workflow management features of GAMMA has energized sectors like healthcare, government, legal and financial institutions that heavily rely on security, auditing and complex workflows."
        text3="Backed by its sister product MEMS, GAMMA can integrate IT systems and customized business processes into automated and simple interactive workflows. With access to one-touch experiences and mobile forms within a chat style mobile experience, users have access to richer, more efficient interactions directly with one another and their organizations systems."
        text4="Having access to advanced administrative tools, reports, pin protection, remote wipe and message expiration controls grants organizations greater visibility and control of their communications. Coupled with world-class security trusted by military and government provides peace of mind the integrity, security and confidentiality of their data."
        text5="GAMMA is trusted by the largest healthcare government agencies around the world and is now in use by 1000+ enterprise and government companies worldwide including 50+ fortune 500 companies."
      />
      <Image filename="gammaworkflows.jpg" alt="GAMMA's workflow process" />
      <iframe
        title="Soprano GAMMA Enterprise Messaging Workflows"
        width="1200"
        height="600"
        src="https://www.youtube.com/embed/002cDyBxTaU"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <Image filename="awards.jpg" alt="Australian national export awards" />
      <Image filename="companies.jpg" alt="Companies using GAMMA" />
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
