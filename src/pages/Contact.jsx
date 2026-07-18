function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("Thank you! Your message has been received.");
    event.target.reset();
  }

  return (
    <section className="page-section">
      <div className="page-heading">
        <p className="eyebrow">Send a message</p>
        <h1>Contact Us</h1>
        <p>
          Have a question about an item or an upcoming adventure?
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          required
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          required
        />

        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          placeholder="How can we help?"
          required
        />

        <button className="primary-button" type="submit">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;