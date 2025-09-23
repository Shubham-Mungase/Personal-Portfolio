import 'bootstrap/dist/css/bootstrap.min.css';
import heroImg from '../../assets/shubham.png';
import './Hero.css';
import { motion } from 'framer-motion';

export default function Hero() {

  // Add this function inside your Hero component
const openResume = () => {
  window.open("/Mungase_Shubham_Java_Dev_Testing_Resume.pdf", "_blank"); // opens the PDF in a new tab
};
  return (
    <section className="hero-section container-fluid d-flex align-items-center" id='home'>
      <div className="row w-100 align-items-center justify-content-center g-0">

        {/* Text Section */}
        <motion.div 
          className="col-lg-6 col-md-12 hero-text mb-4 mb-lg-0"
          initial={{ opacity: 0, x: "-10%" }}     // percentage instead of fixed pixels
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.2 }} // triggers when 20% visible
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h5 className="display-5 mb-3" style={{ color: 'darkmagenta' }}>
            Hello, I'm Shubham Mungase
          </h5>
          <p className="fs-4 text-darkmagenta">
            I am a passionate web developer skilled in Java, Spring Boot Microservices, 
            and React, with experience in building scalable, maintainable, and responsive applications. 
            My journey began in college with an all-service provider website using JSP, Servlets, and 
            MVC architecture, which sparked my interest in frameworks. I continuously strive to learn, 
            solve real-world problems, and contribute effectively through teamwork and leadership.
          </p>
         <a className="btn btn-lg btn-primary" onClick={openResume}>
  View Resume
</a>
        </motion.div>

        {/* Image Section */}
        <motion.div 
          className="col-lg-6 col-md-12 hero-image text-center"
          initial={{ opacity: 0, y: "-10%" }}     // percentage instead of fixed pixels
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 1, delay:0.5, ease: "easeOut" }}
        >
          <img
            src={heroImg}
            alt="Hero"
            className="img-fluid "
          />
        </motion.div>

      </div>
    </section>
  );
}
