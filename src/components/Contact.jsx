import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://portfolio-backend-lies.onrender.com/send", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(formData),
});


      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully ✅");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus(data.message || "Failed to send ❌");
      }
    } catch (error) {
      console.error(error);
      setStatus("Something went wrong ❌");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <motion.h2
        className="section-title text-center mb-4"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Get in Touch
      </motion.h2>

      <motion.p
        className="contact-text text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        I'd love to collaborate, discuss opportunities, or just have a chat ✨
      </motion.p>

      <motion.div
        className="contact-container"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6 }}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <label>Name</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <label>Email</label>
          </div>

          <div className="input-group">
            <textarea
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <label>Message</label>
          </div>

          <motion.button
            type="submit"
            className="btn-glow w-100 mt-3"
            whileHover={{ scale: 1.05 }}
          >
            Send Message 🚀
          </motion.button>

          {status && <p className="text-center mt-3">{status}</p>}
        </form>

        <div className="social-links">
          <a
            href="mailto:danish@example.com"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaEnvelope />
          </a>
          <a
            href="https://github.com/danishmeher"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/danishriazdani/"
            target="_blank"
            rel="noreferrer"
            className="social-icon"
          >
            <FaLinkedin />
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
