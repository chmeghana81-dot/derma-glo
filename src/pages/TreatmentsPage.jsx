import Treatments from "../components/Treatments";

function TreatmentsPage() {
  return (
    <main className="page">
      <section className="page-header">
        <p className="eyebrow">OUR SERVICES</p>
        <h1>Skin, Hair & Laser Treatments</h1>
        <p>
          Explore our range of dermatology and aesthetic care services.
        </p>
      </section>

      <Treatments />
    </main>
  );
}

export default TreatmentsPage;