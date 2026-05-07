import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import Testimonial from "@/components/Testimonial";
import CaseImage from "@/components/CaseImage";

export const metadata: Metadata = {
  title: "About",
};

const testimonies = [
  {
    name: "David Simpson",
    position: "\u00A0CEO at e-Volve Corporate Technology",
    quote:
      '"David is first and foremost an excellent individual and team contributor. He is hard working and passionate about UX design and its interplay with business..."',
    linkedin: "https://www.linkedin.com/in/david-simpson-6335052/",
  },
  {
    name: "Alex Baburin",
    position: "\u00A0CEO at Wilcom International",
    quote:
      '"I loved working with David. Professional, flexible and excellent skills. A real can-do attitude and I would recommend him to anyone looking for a UX professional..."',
    linkedin: "https://www.linkedin.com/in/alex-baburin-b7617514/",
  },
  {
    name: "Santiago Morales",
    position: "\u00A0Global Launch PM at Soprano Design",
    quote:
      '"David is an exceptional designer who knows how to cultivate and breath life into ideas with incredible creativity and innovation..."',
    linkedin: "https://www.linkedin.com/in/santiago-morales-4982a0ba/",
  },
];

export default function About() {
  return (
    <>
      <Nav />
      <div className="group">
        <h1>About</h1>
        <h3>Learn about my story and what inspires me.</h3>
        <CaseImage
          src="/images/gammaconference.jpg"
          alt="David with colleagues at a cybersecurity conference"
        />
      </div>
      <div className="group">
        <Section
          title="G'day, I'm David"
          paragraphs={[
            "I am a permanent resident living in San Francisco and work at Soprano Design.",
            "I am from Sydney Australia and have worked professionally in design since 2009, but my passion for design and technology dates back to my childhood. My childhood LEGO addiction really stepped up a notch when I was 12 and first ordered parts and built my own computer. Since then my passion for technology has led me to countless technical projects and creations and my home has grown to resemble Tony Starks basement.",
            "I have also had the fortune to experience growing up in Sydney Australia and Dubai United Arab Emirates. Being raised in vastly different environments, cultures and societies has instilled a broad perspective and understanding of people and behavior. My family is also based in a dozen different countries which shaped a global sense of community and has inspired me to follow my passions wherever they may lead.",
            "I left my life behind in Sydney and moved to San Francisco to pursue my passion for technology as my dream has been to work among the brilliant minds at the tip of the spear. I'm driven by the opportunity to make a meaningful impact on people's lives by building the bridge between people and technology to better the world we live.",
            "When I'm not designing or tinkering on some personal project, I'm usually out exploring the city, hiking or in the gym.",
          ]}
        />
        <CaseImage
          src="/images/about2.jpg"
          alt="David standing at the base of Alamere Falls waterfall"
        />
        <Testimonial
          testimonies={testimonies}
          linkedinUrl="https://www.linkedin.com/in/davidrogerz/"
        />
        <CaseImage
          src="/images/about.jpg"
          alt="David standing at the peak of palm beach lookout in Sydney Australia"
        />
      </div>
      <Footer />
    </>
  );
}
