import { motion } from 'framer-motion';

const skills = [
  'React', 'Node.js', 'Express', 'MongoDB', 'TailwindCSS',
  'JavaScript', 'HTML', 'CSS', 'Git'
];

export default function Skills() {
  return (
    <section id="skills" className="bg-black/50 backdrop-blur-sm rounded-lg py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>

      <motion.div
        className="flex flex-wrap justify-center gap-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: 0.1 } }
        }}
      >
        {skills.map((skill, index) => (
          <motion.span
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 }
            }}
            whileHover={{ scale: 1.4, boxShadow: '10px 20px 40px rgba(255,255,255,0.2)' }}
            className="bg-white/20 text-white px-5 py-2 rounded cursor-pointer transition transform"
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </section>
  );
}
