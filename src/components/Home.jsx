import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import "./Home.css";

const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScroll(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section id="home" className="hero-section text-center text-white">
        <motion.h1
          className="fw-bold display-3 hero-title"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm <span className="text-glow">Danish</span>
        </motion.h1>
        <motion.p
          className="lead text-light fs-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          Front-End Developer
        </motion.p>
        <motion.a
          href="#projects"
          className="btn btn-glow hero-btn mt-4 px-4 py-2"
          whileHover={{ scale: 1.1 }}
        >
          View My Work
        </motion.a>
      </section>

      {/* About Section */}
      <section id="about" className="about-section text-center text-light">
        <h2 className="section-title">About Me</h2>
        <p className="mt-3 fs-5">
          I'm a passionate front-end developer who builds sleek, responsive
          interfaces using React and modern UI design. I love crafting creative
          digital experiences that feel intuitive and alive.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section text-center text-light">
        <h2 className="section-title  mb-5">Skills</h2>
        <div className="skills-carousel">
          {[...skills, ...skills].map((skill, i) => (
            <div className="skill-card" key={i}>
              <div className="icon-glow">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section text-center text-light">
        <h2 className="section-title mb-5">Projects</h2>
        <div className="row g-4 justify-content-center">
          {[
            {
              title: "Todo App",
              img: "todo.PNG",
              live: "https://todo-app-omega-nine-22.vercel.app/",
              git: "https://github.com/danishmeher/Todo-App",
            },
            {
              title: "Crypto App",
              img: "Crypto-app.PNG",
              live: "https://crypto-app-neon-delta.vercel.app/",
              git: "https://github.com/danishmeher/crypto-app",
            },
            {
              title: "Quiz App",
              img: "Quiz.PNG",
              live: "https://quiz-app-gilt-nine-92.vercel.app/",
              git: "https://github.com/danishmeher/quiz-app",
            },
          ].map((proj, i) => (
            <motion.div
              key={i}
              className="col-md-6 col-lg-4"
              whileHover={{ scale: 1.05 }}
            >
              <div className="card neon-card text-center h-100">
                <img src={proj.img} className="card-img-top" alt={proj.title} />
                <div className="card-body text-light">
                  <h5>{proj.title}</h5>
                  <div className="d-flex justify-content-center gap-2 mt-3">
                    <a
                      href={proj.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-glow"
                    >
                      Live
                    </a>
                    <a
                      href={proj.git}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-glow"
                    >
                      Code
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Scroll Button */}
      {showScroll && (
        <motion.button
          className="scroll-btn"
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          ↑
        </motion.button>
      )}

      <footer className="text-center py-3 small text-light">
        © {new Date().getFullYear()} Danish Riaz — Designed with React
      </footer>
    </div>
  );
};

export default Home;
