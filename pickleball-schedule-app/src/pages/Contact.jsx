import React from 'react';


const Contact = () => (
  <div className="contact-page">
    <h2>Contact Us</h2>

    <p>
      We'd love to hear from you! Whether you have questions about upcoming events, want to join our club, or just want to connect — reach out!
    </p>

    <div className="contact-info">
      <p><strong>Email:</strong> vavaupickleball@gmail.com</p>
      <p><strong>Phone:</strong> +676-123-4567</p>
      <p><strong>Facebook:</strong> <a href="https://facebook.com/vavaupickleball" target="_blank" rel="noreferrer">facebook.com/vavaupickleball</a></p>
      <p><strong>Address:</strong> Vavaʻu Courts, Neiafu, Tonga</p>
      <p><strong>Hours:</strong> Mon–Sat, 9:00 AM – 6:00 PM</p>
    </div>

    <div className="contact-form">
      <h3>Send Us a Message</h3>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required />
        <button type="submit" disabled>Send (Coming Soon)</button>
      </form>
    </div>
  </div>
);

export default Contact;
