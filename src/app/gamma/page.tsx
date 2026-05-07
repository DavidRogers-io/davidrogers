import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import CaseImage from "@/components/CaseImage";
import { sopranoTestimonies, linkedinUrl } from "@/data/testimonies";

export const metadata: Metadata = {
  title: "GAMMA",
};

export default function GAMMA() {
  return (
    <>
      <Nav />
      <div className="group">
        <h1>GAMMA</h1>
        <h3>
          Trusted mobile messaging and <br />
          workflow integrations.
        </h3>
        <CaseImage src="/images/gamma.jpg" alt="GAMMA work and case study" />
      </div>
      <div className="group">
        <Section
          title="The Role"
          paragraphs={[
            "Since 2015 I've been the UX principal leading the design vision and strategy of products at Soprano Design. I'm responsible for:",
            "Delivering forward-thinking, evolutionary and iterative updates that actualize to the larger vision over time.",
            "Implementing accessible and cohesive user experiences that are inclusive and well informed.",
            "Establish design systems and operations from the ground up within a new product management function and assisting executives screen product resources.",
            "Building relationships with cross functional global teams to lead creative and holistic thinking across diverse product releases, platforms and devices.",
            "Tailoring branded solutions for carrier partners, managing each of their guidelines and ensuring the continuity of their compliance needs.",
          ]}
        />
        <iframe
          title="Soprano GAMMA for Enterprise Mobile Messaging Security"
          width="1200"
          height="600"
          src="https://www.youtube.com/embed/jZW8NS3_wEk"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Section
          title="The Need"
          paragraphs={[
            "With a slew of high profile data breaches and industry figures estimating 43% of businesses experiencing a data breach in 2014, enterprise and government were searching for a secure way to communicate in an increasingly BYOD mobile world.",
            "Organisations reliance on managing many messaging, business process and workflow applications exacerbated the need for a single secure mobile messaging solution.",
          ]}
        />
        <CaseImage
          src="/images/gammawhiteboarding.jpg"
          alt="Post its, sketches and diagrams showing the methods of working out GAMMA"
        />
        <Section
          title="The Challenge"
          paragraphs={[
            "The consumer messaging market is highly competitive with many well funded and established applications. These applications lacked the level compliance, security, integration and performance capabilities most organizations required so we created GAMMA.",
            "GAMMA, a greenfield project, was tasked to combine the best capabilities of consumer messaging while embedding and securing critical business processes and workflows.",
          ]}
        />
        <CaseImage
          src="/images/gammaregistration.jpg"
          alt="GAMMA's registration process"
        />
        <Section
          title="The Solution"
          paragraphs={[
            'Through rapid design sprints and feedback from the skilled global team at Soprano and our partners, GAMMA was quickly defined and fulfilled the niche hypothesized. Building an iOS and Android version of GAMMA with a consistent design language across these platforms allowed maximum reach and efficiency.',
            'GAMMA delivers an "SMS-like" preserving the productivity and immediacy of SMS, while deploying a more advanced business messaging experience in a mission-critical and secure environment. The workflow management features of GAMMA has energized sectors like healthcare, government, legal and financial institutions that heavily rely on security, auditing and complex workflows.',
            "Backed by its sister product MEMS, GAMMA can integrate IT systems and customized business processes into automated and simple interactive workflows. With access to one-touch experiences and mobile forms within a chat style mobile experience, users have access to richer, more efficient interactions directly with one another and their organizations systems.",
            "Having access to advanced administrative tools, reports, pin protection, remote wipe and message expiration controls grants organizations greater visibility and control of their communications. Coupled with world-class security trusted by military and government provides peace of mind the integrity, security and confidentiality of their data.",
            "GAMMA is trusted by the largest healthcare government agencies around the world and is now in use by 1000+ enterprise and government companies worldwide including 50+ fortune 500 companies.",
          ]}
        />
        <CaseImage
          src="/images/gammaworkflows.jpg"
          alt="GAMMA's workflow process"
        />
        <iframe
          title="Soprano GAMMA Enterprise Messaging Workflows"
          width="1200"
          height="600"
          src="https://www.youtube.com/embed/002cDyBxTaU"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <CaseImage
          src="/images/awards.jpg"
          alt="Australian national export awards"
        />
        <CaseImage src="/images/companies.jpg" alt="Companies using GAMMA" />
        <Testimonial
          testimonies={sopranoTestimonies}
          linkedinUrl={linkedinUrl}
        />
      </div>
      <Footer />
    </>
  );
}
