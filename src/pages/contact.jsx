import './contact.css';

function Contact() {
  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.reset();
  }

  function handleFeedbackClick(event) {
    if (event.currentTarget.form?.checkValidity()) {
      window.alert(
        'Your feedback was submitted successfully.'
      );
    }
  }

  return (
    <main className="contact">
      <h1>Contact Us</h1>
      <p className="contact-intro">
        Have a question or suggestion about the Student Dashboard? Send us a message.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" required />

        <label htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" required />

        <label htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" required />

        <button type="submit" onClick={handleFeedbackClick}>
          Submit feedback
        </button>
      </form>
    </main>
  );
}

export default Contact;