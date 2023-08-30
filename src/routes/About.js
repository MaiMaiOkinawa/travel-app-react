import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import AboutUs from "../components/AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1545599770-28d3851b7829?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}

export default About;
