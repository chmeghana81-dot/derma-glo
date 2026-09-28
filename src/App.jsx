import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Treatments from "./components/Treatments";
import WhyChooseUs from "./components/WhyChooseUs";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Appointment from "./components/Appointment";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />
        <Treatments />
        <WhyChooseUs />
        <Gallery />
        <Reviews />
        <Appointment />
        <Contact />
      </main>

      <Footer />

      <a
        href="https://wa.me/918511722157"
        className="floating-whatsapp"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        WhatsApp
      </a>
    </>
  );
}

export default App;