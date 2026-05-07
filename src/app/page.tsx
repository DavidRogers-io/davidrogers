import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Project from "@/components/Project";

export const metadata: Metadata = {
  title: "Portfolio",
};

export default function Home() {
  return (
    <>
      <Nav />
      <div className="heroGroup">
        <h1>
          David
          <br />
          Rogers
        </h1>
        <h3>
          Senior UX / UI Designer at{" "}
          <a id="companyLink" href="https://www.sopranodesign.com/">
            Soprano Design.
          </a>
        </h3>
        <p>
          Driven to augment the human experience <br />
          and enrich peoples lives through design.
        </p>
        <a className="button" href="https://www.linkedin.com/in/davidrogerz/">
          Get In Touch
        </a>
      </div>
      <Project
        title="MEMS"
        description="The messaging platform powering enterprise and government."
        href="/mems"
        image="/images/mems.jpg"
        alt="MEMS work and case study"
      />
      <Project
        title="GAMMA"
        description="Trusted mobile messaging and workflow integrations."
        href="/gamma"
        image="/images/gamma.jpg"
        alt="GAMMA work and case study"
      />
      <Project
        title="QOIPR"
        description="The all-in-one reselling platform solution for SMB."
        href="/qoipr"
        image="/images/qoipr.jpg"
        alt="QOIPR work and case study"
      />
      <Footer />
    </>
  );
}
