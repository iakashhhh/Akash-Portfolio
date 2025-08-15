import { motion } from 'framer-motion';
import ProfileImage from './assets/profile.jpg';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Footer from './components/Footer';
import './index.css';

export default function App() {
  const scrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById('projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative w-full min-h-screen bg-animated text-white flex flex-col items-center justify-center px-4 overflow-hidden pt-6">

      {/* Particle Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${Math.random() * 10 + 5}s`,
              opacity: Math.random() * 0.5 + 0.3,
            }}
          ></div>
        ))}
      </div>

      {/* Profile Image */}
      <motion.div
        className="mb-6 z-10"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 0.8, scale: 1.05 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src={ProfileImage}
          alt="Akash Sharma"
          className="w-64 md:w-80 "
        />
      </motion.div>

      {/* Hero Name */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="text-5xl md:text-6xl font-bold mb-4 text-center z-10 "
      >
        Akash Sharma
      </motion.h1>

      {/* Tagline */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="text-xl md:text-2xl mb-4 text-center z-10"
      >
        Full Stack Web Developer
      </motion.p>

      {/* Social Links */}
      <motion.div
        className="flex gap-6 mb-8 z-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
      >
        <a
          href="https://github.com/iakashhhh"
          target="_blank"
          className="text-white hover:text-gray-300 transition transform hover:scale-110"
        >
          <FaGithub size={28} />
        </a>
        <a
          href="https://linkedin.com/in/iakashhhh"
          target="_blank"
          className="text-white hover:text-gray-300 transition transform hover:scale-110"
        >
          <FaLinkedin size={28} />
        </a>
        <a
          href="mailto:i.akashhhh@gmail.com"
          className="text-white hover:text-gray-300 transition transform hover:scale-110"
        >
          <FaEnvelope size={28} />
        </a>
      </motion.div>

      {/* About/Bio Section */}
      <motion.section
        className="w-full max-w-3xl z-10 mb-8 bg-black/50 backdrop-blur-sm rounded-xl p-6 text-center mx-2 md:mx-0"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <p className="text-white text-lg md:text-xl">
          Hi! I’m Akash Sharma, a passionate Full Stack Web Developer with experience in building dynamic, responsive web applications using React, Node.js, and MongoDB. I love turning ideas into digital experiences and continuously learning new technologies to improve my craft.
        </p>
      </motion.section>

      {/* View My Work Button with Bouncing Arrow */}
      <motion.div
        className="flex flex-col items-center z-10 mb-8"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
      >
        <motion.a
          href="#projects"
          onClick={scrollToProjects}
          className="px-6 py-3 border border-white rounded hover:bg-white hover:text-black transition"
        >
          View My Work
        </motion.a>

        {/* Bouncing Arrow */}
        <motion.div
          className="mt-2 text-white text-2xl animate-bounce"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1 }}
        >
          ↓
        </motion.div>
      </motion.div>

      {/* Projects Section */}
      <motion.section
        id="projects"
        className="w-full py-20 mt-12 z-10 bg-black/50 backdrop-blur-sm rounded-xl mx-2 md:mx-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Projects />
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
        className="w-full py-20 z-10 bg-black/50 backdrop-blur-sm rounded-xl mx-2 md:mx-10 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Skills />
      </motion.section>

      {/* Footer */}
      <Footer />
    </div>
  );
}
