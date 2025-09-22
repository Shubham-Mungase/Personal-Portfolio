// SectionHeader.jsx
import { motion } from "framer-motion";
export default function SectionHeader({ title }) {
  return (
           <motion.h2
        className="text-center mb-5 display-5"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
         style={{color:"darkmagenta"}}
      >
      {title}
      </motion.h2>
  );
}
