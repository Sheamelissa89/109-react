import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="hero page-section">
      <div className="hero-content">
        <p className="eyebrow">Prepare for your next journey</p>

        <h2>Adventure begins with the right equipment.</h2>

        <p>
          Explore a collection of fantasy-inspired tools, supplies, and
          treasures created for travelers, explorers, and heroes.
        </p>

        <Link className="primary-button" to="/catalog">
          Explore the Catalog
        </Link>
      </div>

      <div className="hero-symbol" aria-hidden="true">
        🧭
      </div>
    </section>
  );
}

export default Home;