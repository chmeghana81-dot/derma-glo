
import About from "../components/About";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import Treatments from "../components/Treatments";
import WhyChooseUs from "../components/WhyChooseUs";
import Contact from "../components/Contact";
import Appointment from"../components/Appointment"

function Home() {
  return (
    <>
      <Hero />
      <About/>  
      <Treatments/>
      <WhyChooseUs />
      <Gallery/>       
      <Appointment/>
      <Reviews/>
       <Contact/>
    {/* <Appointment/> */}

      
      
    </>
    
  );
}

export default Home;