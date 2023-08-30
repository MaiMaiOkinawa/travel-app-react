import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Speak() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://images.unsplash.com/photo-1541018939203-36eeab6d5721?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        title="Speak"
        btnClass="hide"
      />
      <Footer />
    </>
  );
}

export default Speak;
