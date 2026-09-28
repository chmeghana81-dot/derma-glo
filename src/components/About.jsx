import { CheckCircle2, Sparkles } from "lucide-react";

function About() {
  const points = [
    "Personalized consultation",
    "Individual treatment planning",
    "Skin and hair focused care",
    "Patient-centered approach",
  ];

  return (
    <section className="section about-section" id="about">
      <div className="container about-grid">

        {/* About Image */}
        <div className="about-image">
          <img
            src="/images/clinic.jpg"
            alt="Derma Glo Skin Hair Laser Clinic"
          />

          <div className="experience-card">
            <Sparkles size={22} />

            <div>
              <strong>Derma Glo</strong>
              <span>Skin • Hair • Laser</span>
            </div>
          </div>
        </div>

        {/* About Content */}
        <div className="about-content">
          <span className="section-tag">ABOUT DERMA GLO</span>

          <h2>
            Care that puts
            <span> your skin first.</span>
          </h2>

          <p>
            Dr. Lasya's Derma Glo Skin Hair Laser Clinic is located in
            Danavaipeta, Rajahmundry, offering a professional environment
            for personalized skin and hair care consultations.
          </p>

          <p>
            Every individual has different skin and hair concerns. Our
            approach focuses on understanding your concerns and discussing
            suitable treatment options based on your needs.
          </p>

          {/* About Points */}
          <div className="about-points">
            {points.map((point) => (
              <div className="about-point" key={point}>
                <CheckCircle2 size={19} />
                <span>{point}</span>
              </div>
            ))}
          </div>

          {/* Appointment Button */}
          <a href="#appointment" className="text-btn">
            Schedule a consultation →
          </a>
        </div>

      </div>
    </section>
  );
}

export default About;