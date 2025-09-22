import React from 'react';
import { motion } from "framer-motion";
import './Skills.css';
import SectionHeader from '../SectionHeader/SectionHeader';

export default function Skills() {
  const skills = [
    { name: "Java", icon: "☕", link: "https://github.com/Shubham-Mungase/Java-code" },
    { name: "Spring Boot", icon: "🌱", link: "https://github.com/Shubham-Mungase/Spring-Practice" },
    {name:"Microservices",icon:"🟦🟧",link:"https://github.com/shubham-Mungase/Microservices"},
    { name: "React", icon: "⚛️", link: "https://github.com/shubham-Mungase/react-project" },
     { name: "DSA", icon: "🔍", link: "https://github.com/shubham-Mungase/DSA" },
    { name: "MySQL", icon: "💾", link: "#" },
    { name: "CPP", icon: "➕", link: "https://github.com/shubham-Mungase/Cpp" },
{ name: "C Programing", icon: "🅲", link: "https://github.com/shubham-Mungase/Cprograming" },
{ name: "Python", icon: "🐍", link: "https://github.com/shubham-Mungase/Python" },
    { name: "HTML", icon: "📄", link: "https://github.com/Shubham-Mungase/HTML-2024" },
    { name: "CSS", icon: "🎨", link: "https://github.com/Shubham-Mungase/CSS-2024" },
    { name: "JavaScript", icon: "📜", link: "https://github.com/Shubham-Mungase/Javascript-2025" },
    { name: "Manual Testing", icon: "👀", link: "#" },
    { name: "Selenium", icon: "🤖", link: "#"},
    { name: "Api Testing", icon: "🌐", link: "#" },
     { name: "GitHub", icon: "🐙", link: "#", mode:"disabled"},
    
  
  ];

  return (
    <section className="skills-section container py-5" id='skills'>
      <SectionHeader title={"Skills"} />

      <div className="row justify-content-center g-0">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="col-6 col-sm-4 col-md-3 col-lg-2"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <a
  href={skill.link !== "#" ? skill.link : undefined}
  target={skill.link !== "#" ? "_blank" : undefined}
  rel={skill.link !== "#" ? "noopener noreferrer" : undefined}
  className={`skill-card ${skill.link === "#" ? "disabled-link" : ""}`}
  onClick={(e) => {
    if (skill.link === "#") e.preventDefault(); 
  }}
>
  <div className="skill-icon">{skill.icon}</div>
  <p className="skill-name">{skill.name}</p>
</a>

          </motion.div>
        ))}
      </div>
    </section>
  );
}
