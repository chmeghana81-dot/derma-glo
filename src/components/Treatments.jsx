import {
  Sparkles,
  CircleDot,
  Scissors,
  Droplets,
  Sun,
  HeartPulse,
} from "lucide-react";

function Treatments() {
  const treatments = [
    {
      icon: Sparkles,
      title: "Skin Care",
      text: "Personalized consultation for common skin concerns and skincare needs.",
    },
    {
      icon: CircleDot,
      title: "Acne & Acne Scars",
      text: "Consultation and treatment planning for acne-prone skin and acne marks.",
    },
    {
      icon: Sun,
      title: "Pigmentation Care",
      text: "Approaches focused on uneven skin tone and pigmentation concerns.",
    },
    {
      icon: Scissors,
      title: "Laser Hair Removal",
      text: "Professional consultation for unwanted hair and laser-based care.",
    },
    {
      icon: Droplets,
      title: "Hair & Scalp Care",
      text: "Assessment and personalized care for hair and scalp concerns.",
    },
    {
      icon: HeartPulse,
      title: "Skin Rejuvenation",
      text: "Aesthetic consultation focused on healthier-looking and refreshed skin.",
    },
  ];

  return (
    <section className="section treatments-section" id="treatments">
      <div className="container">

        <div className="section-heading">
          <span className="section-tag">OUR SERVICES</span>

          <h2>
            Skin & Hair
            <span> Treatments</span>
          </h2>

          <p>
            Explore our range of consultation and treatment services.
          </p>
        </div>

        <div className="treatments-grid">
          {treatments.map((item) => {
            const Icon = item.icon;

            return (
              <div className="treatment-card" key={item.title}>
                <div className="treatment-icon">
                  <Icon size={25} />
                </div>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                <a href="#appointment">
                  Learn More →
                </a>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default Treatments;