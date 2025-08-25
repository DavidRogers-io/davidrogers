// app/gamma/page.js - FIXED VERSION
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Section from '../../components/Section'
import Testimonial from '../../components/Testimonial'
import OptimizedImage from '../../components/OptimizedImage'
import VideoEmbed from '../../components/VideoEmbed'

export const metadata = {
  title: 'GAMMA - David Rogers Portfolio',
  description: 'Trusted mobile messaging and workflow integrations - GAMMA project case study by David Rogers.',
  openGraph: {
    title: 'GAMMA - David Rogers Portfolio',
    description: 'Trusted mobile messaging and workflow integrations case study',
    images: [
      {
        url: '/images/gamma.jpg',
        width: 1200,
        height: 600,
        alt: 'GAMMA mobile messaging interface',
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

export default function GammaPage() {
  return (
    <>
      {/* ACCESSIBILITY: Skip link for screen readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Nav />
      
      <main id="main-content" className="hero" role="main">
        <div className="group">
          <h1>GAMMA</h1>
          <h3>
            Trusted mobile messaging and <br />
            workflow integrations.
          </h3>
          <OptimizedImage
            src="/images/gamma.jpg"
            alt="GAMMA mobile messaging and workflow integration interface"
            priority
          />
        </div>
      </main>
      
      <div className="group">
        <Section
          title="The Role"
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
          src="https://www.youtube.com/embed/jZW8NS3_wEk"
          title="Soprano GAMMA for Enterprise Mobile Messaging Security"
        />
        
        <Section
          title="The Need"
          paragraphs={[
            "With a slew of high profile data breaches and industry figures estimating 43% of businesses experiencing a data breach in 2014, enterprise and government were searching for a secure way to communicate in an increasingly BYOD mobile world.",
            "Organisations reliance on managing many messaging, business process and workflow applications exacerbated the need for a single secure mobile messaging solution."
          ]}
        />
        
        <OptimizedImage
          src="/images/gammawhiteboarding.jpg"
          alt="Post-it notes, sketches and diagrams showing the GAMMA design process and methodology"
        />
        
        <Section
          title="The Challenge"
          paragraphs={[
            "The consumer messaging market is highly competitive with many well funded and established applications. These applications lacked the level compliance, security, integration and performance capabilities most organizations required so we created GAMMA.",
            "GAMMA, a greenfield project, was tasked to combine the best capabilities of consumer messaging while embedding and securing critical business processes and workflows."
          ]}
        />
        
        <OptimizedImage
          src="/images/gammaregistration.jpg"
          alt="GAMMA's streamlined user registration and onboarding process interface"
        />
        
        <Section
          title="The Solution"
          paragraphs={[
            "Through rapid design sprints and feedback from the skilled global team at Soprano and our partners, GAMMA was quickly defined and fulfilled the niche hypothesized. Building an iOS and Android version of GAMMA with a consistent design language across these platforms allowed maximum reach and efficiency.",
            "GAMMA delivers an \"SMS-like\" preserving the productivity and immediacy of SMS, while deploying a more advanced business messaging experience in a mission-critical and secure environment. The workflow management features of GAMMA has energized sectors like healthcare, government, legal and financial institutions that heavily rely on security, auditing and complex workflows.",
            "Backed by its sister product MEMS, GAMMA can integrate IT systems and customized business processes into automated and simple interactive workflows. With access to one-touch experiences and mobile forms within a chat style mobile experience, users have access to richer, more efficient interactions directly with one another and their organizations systems.",
            "Having access to advanced administrative tools, reports, pin protection, remote wipe and message expiration controls grants organizations greater visibility and control of their communications. Coupled with world-class security trusted by military and government provides peace of mind the integrity, security and confidentiality of their data.",
            "GAMMA is trusted by the largest healthcare government agencies around the world and is now in use by 1000+ enterprise and government companies worldwide including 50+ fortune 500 companies."
          ]}
        />
        
        <OptimizedImage
          src="/images/gammaworkflows.jpg"
          alt="GAMMA's advanced workflow automation and business process integration interface"
        />
        
        <VideoEmbed
          src="https://www.youtube.com/embed/002cDyBxTaU"
          title="Soprano GAMMA Enterprise Messaging Workflows"
        />
        
        <OptimizedImage
          src="/images/awards.jpg"
          alt="Australian national export awards recognition for GAMMA"
        />
        
        <OptimizedImage
          src="/images/companies.jpg"
          alt="Fortune 500 companies and organizations using GAMMA platform"
        />
        
        <Testimonial {...testimonialData} />
      </div>
      
      <Footer />
    </>
  )
}