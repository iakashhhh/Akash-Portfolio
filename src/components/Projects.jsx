import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

// Import your project images
import EMSImage from "../assets/ems.png";
import WeatherImage from "../assets/weather.png";

const projects = [
  {
    title: "Employee Management System",
    description:
      "A full-stack web application to manage employees, track details, and handle CRUD operations.",
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    github: "https://github.com/iakashhhh/ems",
    live: "https://ems-akash.netlify.app",
    image: EMSImage,
  },
  {
    title: "Weather Forecast App",
    description:
      "Displays live weather updates using external APIs with a clean and responsive UI.",
    tech: ["HTML", "API", "CSS"],
    github: "https://github.com/iakashhhh/weather-forecast",
    live: "https://weatherforecast-akash.netlify.app",
    image: WeatherImage,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-transparent text-white py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 relative z-10">
        My Projects
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, scale: 0.85 }, // start zoomed out
              visible: { opacity: 1, scale: 1 }, // zoom in
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 15px 40px rgba(255, 255, 255, 0.15)",
            }}
            className="backdrop-blur-sm bg-black/50 border border-white/20 rounded-xl overflow-hidden shadow-lg transition-all"
          >
            {/* Project Image - clickable */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="block overflow-hidden"
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-56 md:h-64 object-cover"
                whileHover={{ scale: 1.1 }} // image zoom on hover
                transition={{ duration: 0.4 }}
              />
            </a>

            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4 text-gray-300">{project.description}</p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
                >
                  <FaGithub /> GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition"
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
