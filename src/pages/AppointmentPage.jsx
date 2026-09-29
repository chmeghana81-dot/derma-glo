import Appointment from "../components/Appointment";

function AppointmentPage() {
  return (
    <main className="page">
      <section className="page-header">
        <p className="eyebrow">BOOK A CONSULTATION</p>
        <h1>Schedule an Appointment</h1>
        <p>
          Share your details and request an appointment with our clinic.
        </p>
      </section>

      <Appointment />
    </main>
  );
}

export default AppointmentPage;