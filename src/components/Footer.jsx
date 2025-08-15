import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <motion.footer
      className="w-full py-6 mt-12 flex flex-col md:flex-row justify-between items-center px-6 bg-black/50 backdrop-blur-sm border-t border-white/20 text-white"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <p className="text-sm">&copy; {new Date().getFullYear()} Akash Sharma. All rights reserved.</p>

      <div className="flex gap-4 mt-2 md:mt-0">
        <a
          href="https://github.com/iakashhhh"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-110"
        >
          <FaGithub size={20} color="#FFFFFF" />
        </a>
        <a
          href="https://www.linkedin.com/in/akash-sharma-202269246/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-110"
        >
          <FaLinkedin size={20} color="#0A66C2" />
        </a>
        <a
          href="mailto:i.akashhhh@gmail.com"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition transform hover:scale-110"
        >
          <FaEnvelope size={20} color="#EA4335" />
        </a>
      </div>
    </motion.footer>
  );
}
