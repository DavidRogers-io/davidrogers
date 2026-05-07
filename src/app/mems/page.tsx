import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import CaseImage from "@/components/CaseImage";
import { sopranoTestimonies, linkedinUrl } from "@/data/testimonies";

export const metadata: Metadata = {
  title: "MEMS",
};

export default function MEMS() {
  return (
    <>
      <Nav />
      <div className="group">
        <h1>MEMS</h1>
        <h3>
          The messaging platform powering
          <br />
          enterprise and government.
        </h3>
        <CaseImage src="/images/mems.jpg" alt="MEMS work and case study" />
      </div>
      <div className="group">
        <Section
          title="My Role"
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
          title="Soprano MEMS company video"
          width="1200"
          height="600"
          src="https://www.youtube.com/embed/IDO-Mbs4UzM"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Section
          title="The Need"
          paragraphs={[
            "Complex multinational enterprise and government organisations require robust and scalable omnichannel mobile messaging capabilities meeting the highest security and compliance standards.",
            "With a broad range of industries looking to adopt emerging communication channels for parcel deliveries through to managing national emergencies, Soprano MEMS needed to refine an accessible user experience catering to a wide range of use cases.",
          ]}
        />
        <CaseImage
          src="/images/memswhiteboarding.jpg"
          alt="Post its, sketches and diagrams showing the methods of working out MEMS"
        />
        <Section
          title="The Challenge"
          paragraphs={[
            "Having achieved great success with thousands of organizations utilizing the capability of MEMS through API's, it was time to prioritize the accessibility and user experience of platform users.",
            "With exceptionally capable and feature rich technology being developed over 20 years a design strategy was necessary to navigate the limitations and transition to an accessible design system.",
          ]}
        />
        <CaseImage
          src="/images/memsrapidalert.jpg"
          alt="MEMS RapidAlert before and after"
        />
        <Section
          title="The Solution"
          paragraphs={[
            "With our skilled cross functional and global team, we executed our design strategy by implementing a responsive design system catering to 13 major Mobile Network Operators while undertaking a company wide rebrand. Part of this strategy was a comprehensive usability analysis of the existing system which guided us to complete WCAG 2.1 and Section 508 compliance.",
            "Organisations now have 6 more channels (IP, Voice, RCS, WhatsApp, WeChat and BusinessChat) and the ability to orchestrate complex omnichannel communications. These advancements gave reach to new opportunities and led to the creation of RapidAlert, a crisis communications management center capable of deploying tailored nationwide messaging.",
            "Our solutions weren't limited to who could be reached by what channels we could offer, we considered how and why with new drag and drop workflow and chatbot editors. Organisations can now create and deploy intelligent chatbots that engage and consider the nature and intent of a conversation.",
            "The cumulation of these efforts has been a refined and accessible modern user experience resulting in 4x more organisations, 4x growth message volume and the trust of twice as many Fortune 500 companies.",
          ]}
        />
        <CaseImage
          src="/images/memsaddressbook.jpg"
          alt="MEMS address book before and after"
        />
        <CaseImage
          src="/images/memsdashboard.jpg"
          alt="MEMS dashboard before and after"
        />
        <iframe
          title="Soprano MEMS Interview on Sky News"
          width="1200"
          height="600"
          src="https://www.youtube.com/embed/lF1S2W6pTVw"
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
