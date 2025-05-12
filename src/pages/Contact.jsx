import React from 'react';
import '../style.css';

export default function Contact() {
  return (
    <section className="about-container">
      <div className="about-text">
        <h2>Contact Me</h2>
        <p>I'd love to hear from you! Feel free to send a message:</p>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
