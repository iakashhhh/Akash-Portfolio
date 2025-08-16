// src/components/Resume.jsx
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";

export default function Resume() {
  return (
    <motion.section
      id="resume"
      className="w-full py-1 z-10 bg-black/50 backdrop-blur-sm rounded-xl mx-2 md:mx-1 flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-4xl font-bold mb-6 text-center bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
        Resume
      </h2>
      <p className="text-lg text-gray-300 mb-6 text-center max-w-2xl">
        Click the button below to view my resume with all experience, skills, and projects.
      </p>

      {/* View Resume Button */}
      <a
        href="https://drive.google.com/file/d/1LZxWK498tK6HtLoFo1eipXRdDXCwmdJw/view?usp=share_link"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-lg font-medium text-white transition transform hover:scale-105"
      >
        <FaDownload /> View Resume
      </a>

      
    </motion.section>
  );
}
