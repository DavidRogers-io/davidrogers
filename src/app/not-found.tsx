import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Nav />
      <div className="heroGroup">
        <h1>404</h1>
        <h3>Page not found.</h3>
        <a className="button" href="/">
          Go Home
        </a>
      </div>
      <Footer />
    </>
  );
}
