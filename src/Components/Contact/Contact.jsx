import 'bootstrap/dist/css/bootstrap.min.css';
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import './Contact.css';
import SectionHeader from '../SectionHeader/SectionHeader';

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < breakpoint);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);

  return isMobile;
}

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const isMobile = useIsMobile(); 

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Enter a valid email";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v = validate();
    if (Object.keys(v).length) {
      setErrors(v);
      toast.error("Please fix the highlighted fields.", { position: "top-center" });
      return;
    }

    setErrors({});
    setSending(true);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      await emailjs.send(
        SERVICE_ID,
        AUTO_REPLY_TEMPLATE_ID,
        {
          to_name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      toast.success(`Hey ${formData.name}, I appreciate your message! I'll get in touch soon 😊`, {
        position: "top-center",
        autoClose: 4000,
        hideProgressBar: true,
        theme: "colored",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      toast.error("Oops! Could not send your message. Please try again.", {
        position: "top-center",
        autoClose: 4500,
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="contact-section container-fluid">
      {/* Heading */}
      <motion.div
        className="col-12 text-center mt-5 mb-0"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionHeader title={"Get In Touch"} />
        <p className="text-muted mt-1">
          Have a project in mind or just want to say hello? Fill out the form below 👇
        </p>
      </motion.div>

      <div className="row justify-content-center align-items-stretch g-4">
        {/* Contact Form */}
        <motion.div
          className="col-xl-6 col-lg-7 col-md-8"
          initial={{
            opacity: 0,
            x: isMobile ? 0 : -50,
            y: isMobile ? 50 : 0,
          }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <form onSubmit={handleSubmit} noValidate className="form-container p-4 p-md-5">
            <div className="mb-2">
              <label className="form-label fw-semibold">Name</label>
              <input
                type="text"
                className={`form-control ${errors.name ? "is-invalid" : ""}`}
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                disabled={sending}
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Email</label>
              <input
                type="email"
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                disabled={sending}
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Message</label>
              <textarea
                className={`form-control ${errors.message ? "is-invalid" : ""}`}
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                placeholder="Your Message"
                disabled={sending}
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100 py-2" disabled={sending}>
              {sending ? (
                <>
                  <span
                    className="spinner-border spinner-border-sm me-2"
                    role="status"
                    aria-hidden="true"
                  ></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </motion.div>

        {/* Contact Info */}
       <motion.div
  className="col-xl-4 col-lg-5 col-md-8"
  initial={{
    opacity: 0,
    x: isMobile ? 0 : 0,
    y: isMobile ? 50 : 0,
  }}
  whileInView={{ opacity: 1, x: 0, y: 0 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
>
  <div className="info-container h-100 p-4 p-md-5">
    <h3 className="mb-4">Contact Information</h3>

    <div className="contact-info-item mb-4">
      <div className="d-flex align-items-center mb-2">
        <h5 className="mb-0">Email</h5>
      </div>
      <p className="ms-5">mungaseshubham777@gmail.com</p>
    </div>

    <div className="contact-info-item mb-4">
      <div className="d-flex align-items-center mb-2">
        <h5 className="mb-0">Mobile No</h5>
      </div>
      <p className="ms-5">+91 7499028133</p>
    </div>

    <div className="contact-info-item mb-4">
      <div className="d-flex align-items-center mb-2">
        <h5 className="mb-0">Address</h5>
      </div>
      <p className="ms-5">
        At post Dedgaon, Newasa,
        <br />
        Ahilyanagar, Maharashtra
      </p>
    </div>

    {/* Social Media Section */}
    <div className="social-links mt-1">
      <h5 className="mb-3">Follow Me</h5>
      <div className="d-flex gap-5 ms-2">
        <a href="https://www.linkedin.com/in/shubham-mungase-b635222a5/" target="_blank" rel="noreferrer" className="social-link">
          <i className="fab fa-linkedin fa-2x"></i>
        </a>
        <a href="https://github.com/shubham-mungase/" target="_blank" rel="noreferrer" className="social-link">
          <i className="fab fa-github fa-2x"></i>
        </a>
        <a href="https://www.youtube.com/@Syntax-Shubham" target="_blank" rel="noreferrer" className="social-link" aria-disabled>
  <i className="fab fa-youtube fa-2x"></i>
</a>

        <a href="https://www.instagram.com/shubham.000.777/" target="_blank" rel="noreferrer" className="social-link">
          <i className="fab fa-instagram fa-2x"></i>
        </a>
      </div>
    </div>
  </div>
</motion.div>

      </div>

      <ToastContainer />
    </section>
  );
}
