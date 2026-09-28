import {
  UserRound,
  ClipboardCheck,
  ShieldCheck,
  HeartHandshake,
} from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: UserRound,
      title: "Personalized Care",
      text: "Your concerns and goals are considered during consultation.",
    },
    {
      icon: ClipboardCheck,
      title: "Consultation First",
      text: "Understand your concerns before discussing suitable options.",
    },
    {
      icon: ShieldCheck,
      title: "Professional Environment",
      text: "A comfortable environment focused on patient care.",
    },
    {
      icon: HeartHandshake,
      title: "Patient Focused",
      text: "Clear communication and an individual approach to every patient.",
    },
  ];

  return (
    <section className="section why-section" id="why-us">
      <div className="container">

        <div className="section-heading">
          <span className="section-tag">WHY DERMA GLO</span>

          <h2>
            Care designed
            <span> around you.</span>
          </h2>

          <p>
            A thoughtful approach to skin and hair care starts with
            understanding your individual concerns.
          </p>
        </div>

        <div className="why-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="why-card" key={feature.title}>
                <div className="why-icon">
                  <Icon size={25} />
                </div>

                <h3>{feature.title}</h3>
                <p>{feature.text}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;