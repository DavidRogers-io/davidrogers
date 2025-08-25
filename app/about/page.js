// app/about/page.js - FIXED VERSION
import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Section from '../../components/Section'
import Testimonial from '../../components/Testimonial'
import OptimizedImage from '../../components/OptimizedImage'

export const metadata = {
  title: 'About - David Rogers',
  description: 'Learn about David Rogers story and what inspires him as a UX/UI Designer.',
  openGraph: {
    title: 'About - David Rogers',
    description: 'Learn about David Rogers story and what inspires him as a UX/UI Designer.',
    images: [
      {
        url: '/images/gammaconference.jpg',
        width: 1200,
        height: 600,
        alt: 'David Rogers presenting at a cybersecurity conference',
      },
    ],
  },
}

const testimonialData = {
  testimonials: [
    {
      name: "David Simpson",
      position: "CEO at e-Volve Corporate Technology",
      testimony: "David is first and foremost an excellent individual and team contributor. He is hard working and passionate about UX design and its interplay with business...",
      linkedin: "https://www.linkedin.com/in/david-simpson-6335052/"
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

export default function AboutPage() {
  return (
    <>
      {/* ACCESSIBILITY: Skip link for screen readers */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Nav />
      
      <main id="main-content" className="hero" role="main">
        <div className="group">
          <h1>About</h1>
          <h3>Learn about my story and what inspires me.</h3>
          <OptimizedImage
            src="/images/gammaconference.jpg"
            alt="David Rogers presenting at a cybersecurity conference with colleagues"
            width={1200}
            height={600}
            priority
          />
        </div>
      </main>
      
      <div className="group">
        <Section
          title="G'day, I'm David"
          paragraphs={[
            "I am a permanent resident living in San Francisco and work at Soprano Design.",
            "I am from Sydney Australia and have worked professionally in design since 2009, but my passion for design and technology dates back to my childhood. My childhood LEGO addiction really stepped up a notch when I was 12 and first ordered parts and built my own computer. Since then my passion for technology has led me to countless technical projects and creations and my home has grown to resemble Tony Starks basement.",
            "I have also had the fortune to experience growing up in Sydney Australia and Dubai United Arab Emirates. Being raised in vastly different environments, cultures and societies has instilled a broad perspective and understanding of people and behavior. My family is also based in a dozen different countries which shaped a global sense of community and has inspired me to follow my passions wherever they may lead.",
            "I left my life behind in Sydney and moved to San Francisco to pursue my passion for technology as my dream has been to work among the brilliant minds at the tip of the spear. I'm driven by the opportunity to make a meaningful impact on people's lives by building the bridge between people and technology to better the world we live.",
            "When I'm not designing or tinkering on some personal project, I'm usually out exploring the city, hiking or in the gym."
          ]}
        />
        
        <OptimizedImage
          src="/images/about2.jpg"
          alt="David standing at the base of Alamere Falls waterfall"
          width={1200}
          height={600}
        />
        
        <Testimonial {...testimonialData} />
        
        <OptimizedImage
          src="/images/about.jpg"
          alt="David standing at the peak of palm beach lookout in Sydney Australia"
          width={1200}
          height={600}
        />
      </div>
      
      <Footer />
    </>
  )
}