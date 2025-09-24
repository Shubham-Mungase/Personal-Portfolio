import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Portfolio.css";
import SectionHeader from '../SectionHeader/SectionHeader';

import portfolioImg from "../../assets/demo1.png";
import ecommerceImg from "../../assets/allservice.png";
import insuranceImg from "../../assets/demo3.png";
export default function Portfolio() {
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const projects = [
    {
      title: "Portfolio Website",
      description: "A personal portfolio built with React, Bootstrap, and Framer Motion animations.",
      image: portfolioImg,
      tech: ["React", "Bootstrap", "Framer Motion"],
      github: "https://github.com/Shubham-Mungase/Personal-Portfolio",
      status:"Completed",
      demo: "https://www.youtube.com/watch?v=6T4M7PqQk_0" 
      ,
       mode:" "
    },
    {
      title: "All Service Provider",
      description: "Full-stack Java All Service Provider Complete B to C Application.",
      image: ecommerceImg,
      tech: ["Java", "Jsp", "Bootstrap", "MySql","Javascript"],
      github: "https://github.com/Shubham-Mungase/Project-Service-Provider/tree/main/java",
       status:"Completed",
      demo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
       mode:""
    },
    {
      title: "IES-Health-insurance Application",
      description: "Spring Boot + MySQL based blog platform with JWT authentication.",
      image:insuranceImg,
      tech: ["Spring Boot", "Microservices","MySQL", "JWT","Feign Client"],
      github: "#",
      status:"Pending",
      demo: "https://www.youtube.com/embed/tgbNymZ7vqY",
      mode:"disabled"
    }
  ];

  const handleOpenModal = (url) => {
    setVideoUrl(url);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setVideoUrl(""); // stop video on close
  };

  return (
    <section id="portfolio" className="portfolio-section py-5">
      <div className="container-fluid">
      <SectionHeader title={"Portfolio Projects"}/>
        <div className="row g-4">
          {projects.map((project, idx) => (
            <motion.div
              key={idx}
              className="col-md-6 col-lg-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: false }}
            >
              <div className="card h-100 shadow-sm">
                <img
                  src={project.image}
                  className="card-img-top"
                  alt={project.title}
                />
              
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{project.title}</h5>
                  <p className="card-text">{project.description}</p>
                  <span className={`badge bg-${project.status === "Completed" ? "success" : 
                           project.status === "Pending" ? "warning" : 
                           project.status === "Failed" ? "danger" : "secondary"} mb-2`}>
  {project.status}
</span>
                  <div className="mb-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="badge badge-section me-1">
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto d-flex justify-content-between">
                    <a
                      href={project.github}
                      target="_blank"
                      className="btn btn-dark btn-sm"
                      rel="noreferrer"
                    >
                      GitHub
                    </a>
                    <button
                      className="btn btn-primary btn-sm "
                      onClick={() => handleOpenModal(project.demo)}
                     disabled={project.mode === "disabled"}
                    >
                      Live Demo
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bootstrap Modal */}
      {showModal && (
        <div
          className="modal fade show d-block"
          tabIndex="-1"
          style={{ background: "rgba(0,0,0,0.7)" }}
          onClick={handleCloseModal}
        >
          <div
            className="modal-dialog modal-lg modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title ">Live Demo</h5>
                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
              </div>
              <div className="modal-body">
                <div className="ratio ratio-16x9">
                  <iframe
                    src={videoUrl}
                    title="Live Demo Video"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
