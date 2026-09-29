import Reviews from "../components/Reviews";

function ReviewsPage() {
  return (
    <main className="page">
      <section className="page-header">
        <p className="eyebrow">PATIENT EXPERIENCES</p>
        <h1>Patient Reviews</h1>
        <p>
          See what patients say about their experience with our clinic.
        </p>
      </section>

      <Reviews />
    </main>
  );
}

export default ReviewsPage;