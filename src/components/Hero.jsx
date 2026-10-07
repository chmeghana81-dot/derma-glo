import {
  ArrowRight,
  CalendarDays,
  Phone,
} from "lucide-react";

function Hero() {
  return (
    <section
      className="hero"
      id="home"
      style={{
        backgroundImage: "url('/images/hero.jpg')",
      }}
    >
      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      {/* Hero content */}
      <div className="container hero-content">

        <div className="hero-text">

          {/* Small heading */}
          <span className="eyebrow">
            SKIN • HAIR • LASER CARE
          </span>


          {/* Main heading */}
          <h1>
            Healthy Skin.
            <br />
            <span>Confident You.</span>
          </h1>


          {/* Description */}
          <p>
            Personalized dermatology and aesthetic care designed
            around your skin and hair goals.
          </p>


          {/* Buttons */}
          <div className="hero-buttons">

            {/* Appointment */}
            <a
              href="#appointment"
              className="btn btn-primary"
            >
              <CalendarDays size={19} />

              <span>
                Book Appointment
              </span>

              <ArrowRight size={17} />
            </a>


            {/* Phone */}
            <a
              href="tel:08511722157"
              className="btn btn-outline"
            >
              <Phone size={18} />

              <span>
                08511722157
              </span>
            </a>

          </div>


          {/* Bottom information */}
          <div className="hero-info">

            <div>
              <strong>
                Professional Care
              </strong>

              <span>
                Personalized consultation
              </span>
            </div>


            <div>
              <strong>
                Skin & Hair
              </strong>

              <span>
                Focused treatment care
              </span>
            </div>


            <div>
              <strong>
                Rajahmundry
              </strong>

              <span>
                Danavaipeta
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;