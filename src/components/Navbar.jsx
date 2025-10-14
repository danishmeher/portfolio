import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import "./Navbar.css";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top glass-nav ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="container">
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.1 }}>
          <Link to="/" className="navbar-brand fw-bold text-glow">
            DR
          </Link>
        </motion.div>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler bg-secondary"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Nav Links */}
        <div className="collapse navbar-collapse " id="navbarNav">
          <ul className="navbar-nav ms-auto fw-semibold ">
            {location.pathname === "/" && (
              <>
                <li className="nav-item">
                  <a className="nav-link neon-link" href="#about">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link neon-link" href="#skills">
                    Skills
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link neon-link" href="#projects">
                    Projects
                  </a>
                </li>
              </>
            )}
            <li className="nav-item">
              <Link className="nav-link neon-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
