import { Star } from "lucide-react";

function Reviews() {
  const reviews = [
    {
      name: "Patient Review",
      text: "Add an authentic patient review here after obtaining permission.",
    },
    {
      name: "Patient Review",
      text: "Add verified feedback from your patients with their consent.",
    },
    {
      name: "Patient Review",
      text: "Use genuine reviews to build trust with new visitors.",
    },
  ];

  return (
    <section className="section reviews-section">
      <div className="container">

        <div className="section-heading">
          <span className="section-tag">PATIENT EXPERIENCES</span>

          <h2>
            What our patients
            <span> say.</span>
          </h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div className="review-card" key={index}>

              <div className="stars">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={17} fill="currentColor" />
                ))}
              </div>

              <p>"{review.text}"</p>

              <strong>{review.name}</strong>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Reviews;