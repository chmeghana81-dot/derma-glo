import About from "../components/About";

function AboutPage() {
  return (
    <main className="page">
      <section className="page-header">
        <p className="eyebrow">ABOUT OUR CLINIC</p>
        <h1>About Dr. Lasya's Derma Glo</h1>
        <p>
          Professional skin, hair and laser care with personalized
          treatment plans.
        </p>
      </section>

      <About />
    </main>
  );
}

export default AboutPage;