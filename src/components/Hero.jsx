import { ArrowRight, CalendarDays, Phone } from "lucide-react";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
    
      style={{
  backgroundImage: "url('/images/hero.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "100% center",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh",
}}
    >
      <div className="hero-overlay"></div>

      <div className="container hero-content">
        <div className="hero-text">
          <span className="eyebrow">SKIN • HAIR • LASER CARE</span>

          <h1>
            Healthy Skin.
            <br />
            <span>Confident You.</span>
          </h1>

          <p>
            Personalized dermatology and aesthetic care designed around
            your skin and hair goals.
          </p>

          <div className="hero-buttons">
            <a href="#appointment" className="btn btn-primary">
              <CalendarDays size={19} />
              Book Appointment
              <ArrowRight size={17} />
            </a>

            <a href="tel:08511722157" className="btn btn-outline">
              <Phone size={18} />
              08511722157
            </a>
          </div>

          <div className="hero-info">
            <div>
              <strong>Professional Care</strong>
              <span>Personalized consultation</span>
            </div>

            <div>
              <strong>Skin & Hair</strong>
              <span>Focused treatment care</span>
            </div>

            <div>
              <strong>Rajahmundry</strong>
              <span>Danavaipeta</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;