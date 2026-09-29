import Gallery from "../components/Gallery";

function GalleryPage() {
  return (
    <main className="page">
      <section className="page-header">
        <p className="eyebrow">OUR CLINIC</p>
        <h1>Gallery</h1>
        <p>
          Explore our clinic environment and skincare treatment visuals.
        </p>
      </section>

      <Gallery />
    </main>
  );
}

export default GalleryPage;