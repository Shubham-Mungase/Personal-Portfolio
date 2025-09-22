import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer  text-light pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Branding / About */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Shubham Mungase</h5>
            <p className="small">
              Passionate Java Developer skilled in Spring Boot, Microservices, React, and testing. 
              Building scalable applications with modern technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#about" className="footer-link">About</a></li>
              <li><a href="#portfolio" className="footer-link">Projects</a></li>
              <li><a href="#contact" className="footer-link">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-4 mb-4">
            <h5 className="fw-bold">Contact</h5>
            <p className="mb-1"><i className="fa-solid fa-envelope me-2"></i> mungaseshubham777@gmail.com</p>
            <p className="mb-1"><i className="fa-solid fa-phone me-2"></i> +91 74990 28133</p>
            <p className="mb-1"><i className="fa-solid fa-location-dot me-2"></i>Newasa, Ahilyanagar, Maharashtra, India</p>
            
            <div className="d-flex gap-3 mt-2">
              <a href="https://github.com/shubham-mungase" target="_blank" rel="noreferrer" className="footer-icon">
                <i className="fab fa-github fa-lg"></i>
              </a>
              <a href="https://linkedin.com/in/shubham-mungase-b635222a5" target="_blank" rel="noreferrer" className="footer-icon">
                <i className="fab fa-linkedin fa-lg"></i>
              </a>
              <a href="https://www.instagram.com/shubham.000.777/" className="footer-icon">
                <i className="fab fa-instagram fa-lg"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-top pt-3 mt-3 small" style={{color:"darkblue"}}>
          © {new Date().getFullYear()} Shubham Mungase | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}
