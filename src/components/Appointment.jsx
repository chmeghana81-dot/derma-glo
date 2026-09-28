import { CalendarDays, Phone } from "lucide-react";

function Appointment() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const phone = formData.get("phone");
    const treatment = formData.get("treatment");
    const message = formData.get("message");

    const whatsappMessage = `
Hello Derma Glo Clinic,

I would like to book an appointment.

Name: ${name}
Phone: ${phone}
Treatment: ${treatment}
Message: ${message || "N/A"}
    `;

    const url = `https://wa.me/918511722157?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section className="section appointment-section" id="appointment">
      <div className="container appointment-grid">

        <div className="appointment-content">
          <span className="section-tag">BOOK A CONSULTATION</span>

          <h2>
            Let's talk about
            <span> your skin & hair goals.</span>
          </h2>

          <p>
            Fill out the form and send your appointment request directly
            through WhatsApp.
          </p>

          <div className="appointment-contact">
            <a href="tel:08511722157">
              <Phone size={20} />
              <div>
                <small>Call us</small>
                <strong>08511722157</strong>
              </div>
            </a>

            <div>
              <CalendarDays size={20} />
              <div>
                <small>Location</small>
                <strong>Danavaipeta, Rajahmundry</strong>
              </div>
            </div>
          </div>
        </div>

        <form className="appointment-form" onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter phone number"
              required
            />
          </div>

          <div className="form-group">
            <label>Interested In</label>

            <select name="treatment" required>
              <option value="">Select a service</option>
              <option value="Skin Care">Skin Care</option>
              <option value="Acne & Acne Scars">
                Acne & Acne Scars
              </option>
              <option value="Pigmentation Care">
                Pigmentation Care
              </option>
              <option value="Laser Hair Removal">
                Laser Hair Removal
              </option>
              <option value="Hair & Scalp Care">
                Hair & Scalp Care
              </option>
              <option value="Skin Rejuvenation">
                Skin Rejuvenation
              </option>
            </select>
          </div>

          <div className="form-group">
            <label>Message</label>

            <textarea
              name="message"
              rows="4"
              placeholder="Tell us briefly about your concern"
            ></textarea>
          </div>

          <button type="submit" className="btn btn-primary form-btn">
            Send Appointment Request
          </button>

        </form>

      </div>
    </section>
  );
}

export default Appointment;