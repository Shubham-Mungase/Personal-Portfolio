import React from "react";
import { motion } from "framer-motion";
import "./About.css";
import heroImg from '../../assets/shubham.png';
import SectionHeader from "../SectionHeader/SectionHeader";

export default function About() {
  return (
    <section id="about" className="about-section container py-5">
      <SectionHeader title={"About Me"} />

      <div className="row align-items-center g-0">
        {/* Profile Image */}
        <motion.div
          className="col-12 col-md-5 text-center mb-4"
          initial={{ opacity: 0, x: "-10%" }}   // % instead of fixed px
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={heroImg}
            alt="Shubham Mungase"
            className="about-img shadow-lg"
          />
        </motion.div>

        {/* About Text */}
        <motion.div
          className="col-12 col-md-7 d-flex flex-column justify-content-center"
          initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5 }}

        >
          <div className="about-text">
           <p>
  Hi, I’m <span className="highlight">Shubham Mungase</span>, a passionate 
  <strong> Java Developer</strong> with expertise in 
  <strong> Spring Boot, Microservices, and Testing</strong> (Selenium, TestNG, API, Manual). 
  I specialize in building scalable and reliable applications by combining robust back-end 
  development with modern front-end frameworks such as 
  <strong> React, and Bootstrap</strong>.
</p>

<p>
  I have hands-on experience with databases including 
  <strong> MySQL, MongoDB, Oracle, and PostgreSQL</strong>, 
  and I enjoy developing responsive, user-friendly web applications using 
  <strong>HTML, CSS, and JavaScript</strong>.
</p>

<p>
  Currently, I’m pursuing my <strong> MSc in Computer Science </strong> 
  and hold a <strong>BSc in Computer Science from Pune University (8.02 CGPA)</strong>. 
  I have also completed certification courses in <strong> Full Stack Development </strong> 
  and <strong> Software Testing</strong>.  
  As part of my learning journey, I am working on projects such as a 
  <strong> Microservices Architecture System </strong> and continuously improving my 
  <strong> Data Structures & Algorithms</strong> skills.  
  My goal is to leverage my expertise to deliver impactful, real-world solutions 
  as a <strong>Java Microservices Developer</strong>.
</p>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
