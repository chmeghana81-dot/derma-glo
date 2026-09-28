function Gallery() {
  const images = [
    {
      src: "/images/gallery-1.jpg",
      title: "Skin Treatment",
    },
    {
      src: "/images/gallery-2.jpg",
      title: "Skin Consultation",
    },
    {
      src: "/images/gallery-3.jpg",
      title: "Hair Treatment",
    },
    {
      src: "/images/gallery-4.jpg",
      title: "Skin Care",
    },
  ];

  return (
    <section className="section gallery-section" id="gallery">
      <div className="container">

        {/* Section Heading */}
        <div className="section-heading">
          <span className="section-tag">OUR SPACE</span>

          <h2>
            A comfortable
            <span> clinic experience.</span>
          </h2>

          <p>
            Explore our skincare, hair care, and treatment services in a
            comfortable and professional clinic environment.
          </p>
        </div>

        {/* Gallery */}
        <div className="gallery-grid">
          {images.map((image) => (
            <div className="gallery-item" key={image.src}>
              <img
                src={image.src}
                alt={image.title}
              />

              <div className="gallery-overlay">
                <span>{image.title}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Gallery;