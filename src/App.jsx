import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaLinkedin, FaBootstrap,} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import todoimg from "./assets/todo.PNG";
import cryptoimg from "./assets/Crypto-app.png";
import codingimg from "./assets/coding-man.jpg"
import "./App.css"; // Custom styles

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  // Navbar scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top button visibility
  const [showScroll, setShowScroll] = useState(false);
  useEffect(() => {
    const toggleVisibility = () =>
     setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <nav className={`navbar navbar-expand-lg fixed-top shadow ${scrolled ? "scrolled" : ""}`}>
  <div className="container">
    <a className="navbar-brand fw-bold fs-4 text-primary" href="#home">Danish Riaz</a>

    {/* Burger Button for small screens */}
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#navbarNav"
      aria-controls="navbarNav" 
      aria-expanded="false" 
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>

    {/* Navbar Links */}
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto fw-semibold">
        <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
        <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
        <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
        <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
      </ul>
    </div>
  </div>
</nav>


      {/* Hero Section */}
      <section id="home" className="hero-section d-flex flex-column justify-content-center align-items-center text-center">
        <h1 className="fw-bold display-4 text-white">Hi, I'm Danish 👋</h1>
        <p className="lead text-light">Front-End Developer | ReactJS</p>
        <a href="#projects" className="btn btn-primary mt-3 px-4 py-2">View My Work</a>
      </section>

      {/* About Section */}
      <section id="about" className="container py-5">
        <h2 className="text-center mb-4">About Me</h2>
        <p className="text-center fs-5">
          I'm a passionate front-end developer who loves building responsive,
          modern, and user-friendly web applications using ReactJS and Bootstrap.
          My goal is to craft clean and efficient code that delivers amazing user experiences.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4">Skills</h2>
          <div className="row text-center g-4">
            <div className="col-md-3 skill"><FaHtml5 size={50} color="#e34c26"/><p>HTML5</p></div>
            <div className="col-md-3 skill"><FaCss3Alt size={50} color="#264de4"/><p>CSS3</p></div>
            <div className="col-md-3 skill"><FaJs size={50} color="#f7df1e"/><p>JavaScript</p></div>
            <div className="col-md-3 skill"><FaReact size={50} color="#61dbfb"/><p>ReactJS</p></div>
            <div className="col-md-3 skill"><FaBootstrap size={50} color="#61dbfb"/><p>BootStrap</p></div>
            <div className="col-md-3 skill"><SiTailwindcss size={50} color="#61dbfb"/><p>Tailwind</p></div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-5">
        <h2 className="text-center mb-4">Projects</h2>
        <div className="row g-4">
          {/* Project 1 - Todo App */}
          <div className="col-md-6 col-lg-4">
            <div className="card shadow project-card h-100">
              <img src={todoimg} className="card-img-top" alt="Todo App" />
              <div className="card-body">
                <h5 className="card-title">Todo App</h5>
                <p className="card-text">
                  A simple and intuitive Todo App to manage your daily tasks.
                  Add, edit, and delete todos with smooth UI built in React.
                </p>
              </div>
              <div className="card-footer text-center">
                <a href="https://todo-app-omega-nine-22.vercel.app/" className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="https://github.com/danishmeher/Todo-App" className="btn btn-sm btn-outline-dark ms-2" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>

          {/* Project 2 - Crypto App */}
          <div className="col-md-6 col-lg-4">
            <div className="card shadow project-card h-100">
              <img src={cryptoimg} className="card-img-top" alt="Crypto App" />
              <div className="card-body">
                <h5 className="card-title">Crypto App</h5>
                <p className="card-text">
                  A crypto tracker with live market updates, charts, and
                  detailed coin data using React + CoinGecko API.
                </p>
              </div>
              <div className="card-footer text-center">
                <a href="https://crypto-app-neon-delta.vercel.app/" className="btn btn-sm btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
                <a href="https://github.com/danishmeher/crypto-app" className="btn btn-sm btn-outline-dark ms-2" target="_blank" rel="noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-5">
        <div className="container text-center text-white">
          <h2>Contact Me</h2>
          <p className="mb-4">Let's build something amazing together 🚀</p>
          <p>Email: <a href="mailto:danishmeher086@gmail.com" className="text-white">Danish.daniriaz@gmail.com</a></p>
          <div className="d-flex justify-content-center gap-4 mt-3">
            <a href="https://github.com/danishmeher" target="_blank" rel="noreferrer"><FaGithub size={35} color="white" /></a>
            <a href="https://www.linkedin.com/in/danishriazdani/" target="_blank" rel="noreferrer"><FaLinkedin size={35} color="#0e76a8" /></a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white text-center py-3">
        <p>© {new Date().getFullYear()} Danish Riaz | All Rights Reserved</p>
      </footer>

      {/* Scroll to Top */}
      {showScroll && (
        <button 
          className="btn btn-primary scroll-to-top"
          onClick={() => window.scrollTo({top: 0, behavior: "smooth"})}
        >
          ↑
        </button>
      )}
    </div>
  );
};

export default App;
