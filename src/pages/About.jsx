function About() {
  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Our story</p>
        <h2>About Atlas Adventure Shop</h2>
      </div>

      <div className="about-layout">
        <article className="information-card">
          <h3>Our Purpose</h3>

          <p>
            Atlas Adventure Shop is a fictional marketplace created to
            demonstrate how React can be used to build an organized,
            multi-page web application.
          </p>
        </article>

        <article className="information-card">
          <h3>How It Was Built</h3>

          <p>
            The project uses reusable React components, React Router for
            navigation, JavaScript arrays, the map method, and custom CSS.
          </p>
        </article>

        <article className="information-card">
          <h3>Original Design</h3>

          <p>
            The fantasy adventure theme gives the application its own style
            instead of repeating the exact classroom example.
          </p>
        </article>
      </div>
    </section>
  );
}

export default About;