import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import CaseImage from "@/components/CaseImage";

export const metadata: Metadata = {
  title: "QOIPR",
};

export default function QOIPR() {
  return (
    <>
      <Nav />
      <div className="group">
        <h1>QOIPR</h1>
        <h3>Case study coming soon</h3>
        <CaseImage src="/images/qoipr.jpg" alt="QOIPR work and case study" />
      </div>
      <div className="group" />
      <Footer />
    </>
  );
}
