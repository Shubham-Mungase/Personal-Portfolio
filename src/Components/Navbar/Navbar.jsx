import './Navbar.css';
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Offcanvas } from 'bootstrap'; // Import Offcanvas class

export default function Navbar() {
  const navItems = ["Home", "About", "Education", "Skills", "Portfolio", "Contact"];
  const customTextColors = [
    "#8b0068", "crimson", "goldenrod", "darkred", "#000080", "purple", "darkslategrey"
  ];

  const roles = [
    "Shubham Mungase",
    "Java Developer...",
    "Spring Boot Developer",
    "Full Stack Java Developer",
    "Microservices Developer",
    "API Developer...",
    "Software Test Engineer",
    "Frontend Developer",
    "Web Application Developer",
    "Database Engineer..."
  ];

  const timeDelay = [5000,5000,6000,7000,7000,5000,7000,5000,7000,6000];
  const [index, setIndex] = useState(0);

  // Typewriter rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % roles.length);
    }, timeDelay[index]);
    return () => clearInterval(interval);
  }, [index]);

  // Navbar color change on scroll
  const [navbarColor, setNavbarColor] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setNavbarColor(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to hide offcanvas on nav link click
  const handleNavLinkClick = () => {
    const offcanvasEl = document.getElementById('offcanvasNavbar');
    const bsOffcanvas = Offcanvas.getInstance(offcanvasEl); // Use imported Offcanvas class
    if (bsOffcanvas) bsOffcanvas.hide();
  };

  return (
    <nav className={`navbar ${navbarColor ? "navbarColor" : ""} navbar-expand-md fixed-top`}>
      <div className="container-fluid">
        <h3 style={{ color: customTextColors[index] }} className='glow-text'>
          <Typewriter
            key={index}
            options={{
              strings: [roles[index].toUpperCase()],
              autoStart: true,
              loop: false,
              delay: 100,
              deleteSpeed: 50,
            }}
          />
        </h3>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              {navItems.map((item, idx) => (
                <motion.li
                  key={idx}
                  className="nav-item"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  <a
                    className="nav-link"
                    href={`#${item.toLowerCase()}`}
                    onClick={handleNavLinkClick} // Auto-close offcanvas
                  >
                    {item.toUpperCase()}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
