// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from "react-google-recaptcha-v3";
import "./Contact.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const { executeRecaptcha } = useGoogleReCaptcha();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!executeRecaptcha) {
      alert("reCAPTCHA not ready — please refresh the page.");
      return;
    }

    // executeRecaptcha returns the token for the action "contact_form"
    const token = await executeRecaptcha("contact_form");

    try {
      const res = await fetch("http://localhost:5000/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, token }),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("❌ " + (data.error || "Server error"));
      }
    } catch (err) {
      console.error(err);
      alert("❌ Error sending message");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2 className="section-title text-center mb-4">Get in Touch</motion.h2>

      <motion.div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input type="text" name="name" required value={formData.name} onChange={handleChange} />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input type="email" name="email" required value={formData.email} onChange={handleChange} />
            <label>Email</label>
          </div>

          <div className="input-group">
            <textarea name="message" required value={formData.message} onChange={handleChange}></textarea>
            <label>Message</label>
          </div>

          <motion.button type="submit" className="btn-glow w-100 mt-3" whileHover={{ scale: 1.05 }}>
            Send Message 🚀
          </motion.button>
        </form>

        <div className="social-links">
          <a href="mailto:danish@example.com" className="social-icon"><FaEnvelope /></a>
          <a href="https://github.com/danishmeher" className="social-icon"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/danishriazdani/" className="social-icon"><FaLinkedin /></a>
        </div>
      </motion.div>
    </section>
  );
};

const Contact = () => (
  <GoogleReCaptchaProvider reCaptchaKey="6LdCyugrAAAAAFmQR1W2qWOiv9fMx3Wux-tCRyNd">
    <ContactForm />
  </GoogleReCaptchaProvider>
);

export default Contact;
