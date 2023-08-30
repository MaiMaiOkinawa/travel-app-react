import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Category from "../components/Category";
import Goal from "../components/Goal";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1584697964400-2af6a2f6204c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
        title="Speak Read Grow Together"
        text="Choose Your Category"
        btnText="Start Lesson"
        url="/speak"
        btnClass="show"
      />
      <Category />
      <Goal />
      <Footer />
    </>
  );
}

export default Home;
