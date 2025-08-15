import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Employee Management System',
    description: 'A full-stack app to manage employees.',
    tech: ['HTML','CSS', 'Javascript', 'Netlify'],
    github: 'https://github.com/iakashhhh/ems',
    live: 'https://ems-akash.netlify.app',
  },
  {
    title: 'Weather Forecast App',
    description: 'Shows weather updates using APIs.',
    tech: ['HTML', 'API', 'CSS'],
    github: 'https://github.com/iakashhhh/weather-forecast',
    live: 'https://weatherforcast-akash.netlify.app',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-transparent text-white py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 relative z-10">My Projects</h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto relative z-10"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.2 } }, // Stagger children
        }}
      > 
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.07,
              boxShadow: '0px 20px 30px rgba(255, 255, 255, 0.2)',
            }}
            className="backdrop-blur-sm bg-black/50 border border-white/20 p-6 rounded-lg transition transform cursor-pointer"
          >
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="bg-white/20 text-white px-2 py-1 rounded text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="underline hover:text-gray-300"
              >
                GitHub
              </a>
              <a
                href={project.live}
                target="_blank"
                className="underline hover:text-gray-300"
              >
                Live
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
