import { Phone, MapPin } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div className="footer-brand">
          <div className="logo footer-logo">
            <div className="logo-icon">DG</div>

            <div>
              <span>DERMA GLO</span>
              <small>Skin • Hair • Laser Clinic</small>
            </div>
          </div>

          <p>
            Professional skin and hair care consultation in
            Danavaipeta, Rajahmundry.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>

          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#treatments">Treatments</a>
          <a href="#appointment">Appointment</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>

          <a href="tel:08511722157">
            <Phone size={16} />
            08511722157
          </a>

          <span>
            <MapPin size={16} />
            Danavaipeta, Rajahmundry
          </span>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            © {new Date().getFullYear()} Dr. Lasya's Derma Glo Skin Hair
            Laser Clinic. All Rights Reserved.
          </p>

          <p>
            Designed with care.
          </p>
        </div>
      </div>

    </footer>
  );
}

export default Footer;