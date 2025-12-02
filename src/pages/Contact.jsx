import React, { useState } from "react";
import '../styles/Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // null | "error" | "sent"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const validateEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email).toLowerCase());

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = form;

    if (!name.trim() || !email.trim() || !message.trim() || !validateEmail(email)) {
      setStatus("error");
      return;
    }

    const subject = encodeURIComponent(`Portfolio message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} <${email}>`);

    window.location.href = `mailto:kv.subba.rao521@gmail.com?subject=${subject}&body=${body}`;

    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2>Contact Me</h2>

        <div className="contact-grid">
          {/* FORM */}
          <form onSubmit={handleSubmit} className="contact-form">
            <label>
              <span>Name</span>
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label>
              <span>Email</span>
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                required
              />
            </label>

            <label>
              <span>Message</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Write a short message..."
                rows={6}
                required
              />
            </label>

            <div className="contact-action">
              <button type="submit" className="send-btn">Send Message</button>

              {status === "error" && (
                <span className="error-text">
                  Please fill all fields with a valid email.
                </span>
              )}

              {status === "sent" && (
                <span className="success-text">
                  Mail app opened — send your message there.
                </span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
