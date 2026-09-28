import {
  MapPin,
  Phone,
  ExternalLink,
  MessageCircle,
} from "lucide-react";

function Contact() {
  const address =
    "Opp. Life Medical Store, Main Road, Danavaipeta, Rajahmundry-533103, Andhra Pradesh";

  return (
    <section className="section contact-section" id="contact">
      <div className="container">

        <div className="section-heading">
          <span className="section-tag">CONTACT US</span>

          <h2>
            Visit
            <span> Derma Glo.</span>
          </h2>

          <p>
            Have questions or want to schedule a consultation?
            Get in touch with us.
          </p>
        </div>

        <div className="contact-grid">

          <div className="contact-card">
            <div className="contact-icon">
              <MapPin size={24} />
            </div>

            <h3>Our Location</h3>

            <p>{address}</p>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Dr.%20Lasya's%20Derma%20Glo%20Skin%20Hair%20Laser%20Clinic%20Danavaipeta%20Rajahmundry"
              target="_blank"
              rel="noreferrer"
            >
              Get Directions
              <ExternalLink size={15} />
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <Phone size={24} />
            </div>

            <h3>Call Us</h3>

            <p>
              Speak with the clinic for appointment and
              consultation information.
            </p>

            <a href="tel:08511722157">
              08511722157
              <Phone size={15} />
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <MessageCircle size={24} />
            </div>

            <h3>WhatsApp</h3>

            <p>
              Send your appointment enquiry directly through
              WhatsApp.
            </p>

            <a
              href="https://wa.me/918511722157"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
              <MessageCircle size={15} />
            </a>
          </div>

        </div>

        <div className="map-container">
          <iframe
            title="Derma Glo Clinic Location"
            src="https://www.google.com/maps?q=Danavaipeta%20Rajahmundry&output=embed"
            loading="lazy"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  );
}

export default Contact;