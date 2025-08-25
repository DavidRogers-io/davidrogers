// app/mems/page.js - FIXED VERSION
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Section from '../../components/Section'
import Testimonial from '../../components/Testimonial'
import OptimizedImage from '../../components/OptimizedImage'
import VideoEmbed from '../../components/VideoEmbed'

export const metadata = {
  title: 'MEMS - David Rogers Portfolio',
  description: 'The messaging platform powering enterprise and government - MEMS project case study by David Rogers.',
  openGraph: {
    title: 'MEMS - David Rogers Portfolio',
    description: 'The messaging platform powering enterprise and government case study',
    images: [
      {
        url: '/images/mems.jpg',
        width: 1200,
        height: 600,
        alt: 'MEMS dashboard interface redesign',
      },
    ],
  },
}

const testimonialData = {
  testimonials: [
    {
      name: "Mark Natter",
      position: "Development Manager at Fluent Commerce",
      testimony: "I had the pleasure of working with David for almost two years at Soprano Design; collaborating on both web and cutting edge mobile apps. While my role was to lead the development of these apps; Davids insight and input was a driving force behind the UI/UX which made these successful and accepted by users....",
      linkedin: "https://www.linkedin.com/in/mark-natter-25b7a112/"
    },
    {
      name: "Alex Baburin",
      position: "CEO at Wilcom International",
      testimony: "I loved working with David. Professional, flexible and excellent skills. A real can-do attitude and I would recommend him to anyone looking for a UX professional...",
      linkedin: "https://www.linkedin.com/in/alex-baburin-b7617514/"
    },
    {
      name: "Santiago Morales", 
      position: "Global Launch PM at Soprano Design",
      testimony: "David is an exceptional designer who knows how to cultivate and breath life into ideas with incredible creativity and innovation...",
      linkedin: "https://www.linkedin.com/in/santiago-morales-4982a0ba/"
    }
  ],
  mainLinkedin: "https://www.linkedin.com/in/davidrogerz/"
}

export default function MemsPage() {
  return (
    <>
      {/* ACCESSIBILITY: Skip link for screen readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Nav />
      
      <main id="main-content" className="hero" role="main">
        <div className="group">
          <h1>MEMS</h1>
          <h3>
            The messaging platform powering
            <br />
            enterprise and government.
          </h3>
          <OptimizedImage
            src="/images/mems.jpg"
            alt="MEMS dashboard interface showing before and after redesign comparison"
            priority
          />
        </div>
      </main>
      
      <div className="group">
        <Section
          title="My Role"
          paragraphs={[
            "Since 2015 I've been the UX principal leading the design vision and strategy of products at Soprano Design. I'm responsible for:",
            "Delivering forward-thinking, evolutionary and iterative updates that actualize to the larger vision over time.",
            "Implementing accessible and cohesive user experiences that are inclusive and well informed.",
            "Establish design systems and operations from the ground up within a new product management function and assisting executives screen product resources.",
            "Building relationships with cross functional global teams to lead creative and holistic thinking across diverse product releases, platforms and devices.",
            "Tailoring branded solutions for carrier partners, managing each of their guidelines and ensuring the continuity of their compliance needs."
          ]}
        />
        
        <VideoEmbed
          src="https://www.youtube.com/embed/IDO-Mbs4UzM"
          title="Soprano MEMS company video"
        />
        
        <Section
          title="The Need"
          paragraphs={[
            "Complex multinational enterprise and government organisations require robust and scalable omnichannel mobile messaging capabilities meeting the highest security and compliance standards.",
            "With a broad range of industries looking to adopt emerging communication channels for parcel deliveries through to managing national emergencies, Soprano MEMS needed to refine an accessible user experience catering to a wide range of use cases."
          ]}
        />
        
        <OptimizedImage
          src="/images/memswhiteboarding.jpg"
          alt="Post-it notes, sketches and diagrams showing the MEMS design process methodology"
        />
        
        <Section
          title="The Challenge"
          paragraphs={[
            "Having achieved great success with thousands of organizations utilizing the capability of MEMS through API's, it was time to prioritize the accessibility and user experience of platform users.",
            "With exceptionally capable and feature rich technology being developed over 20 years a design strategy was necessary to navigate the limitations and transition to an accessible design system."
          ]}
        />
        
        <OptimizedImage
          src="/images/memsrapidalert.jpg"
          alt="MEMS RapidAlert crisis communication interface before and after redesign"
        />
        
        <Section
          title="The Solution"
          paragraphs={[
            "With our skilled cross functional and global team, we executed our design strategy by implementing a responsive design system catering to 13 major Mobile Network Operators while undertaking a company wide rebrand. Part of this strategy was a comprehensive usability analysis of the existing system which guided us to complete WCAG 2.1 and Section 508 compliance.",
            "Organisations now have 6 more channels (IP, Voice, RCS, WhatsApp, WeChat and BusinessChat) and the ability to orchestrate complex omnichannel communications. These advancements gave reach to new opportunities and led to the creation of RapidAlert, a crisis communications management center capable of deploying tailored nationwide messaging.",
            "Our solutions weren't limited to who could be reached by what channels we could offer, we considered how and why with new drag and drop workflow and chatbot editors. Organisations can now create and deploy intelligent chatbots that engage and consider the nature and intent of a conversation.",
            "The cumulation of these efforts has been a refined and accessible modern user experience resulting in 4x more organisations, 4x growth message volume and the trust of twice as many Fortune 500 companies."
          ]}
        />
        
        <OptimizedImage
          src="/images/memsaddressbook.jpg"
          alt="MEMS address book and contact management interface before and after redesign"
        />
        
        <OptimizedImage
          src="/images/memsdashboard.jpg"
          alt="MEMS main dashboard interface showing improved user experience design"
        />
        
        <VideoEmbed
          src="https://www.youtube.com/embed/lF1S2W6pTVw"
          title="Soprano MEMS Interview on Sky News"
        />
        
        <OptimizedImage
          src="/images/awards.jpg"
          alt="Australian national export awards recognition for MEMS platform"
        />
        
        <OptimizedImage
          src="/images/companies.jpg"
          alt="Fortune 500 companies and organizations using MEMS platform"
        />
        
        <Testimonial {...testimonialData} />
      </div>
      
      <Footer />
    </>
  )
}