import { motion, AnimatePresence } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiExpress } from 'react-icons/si';

const skills = [
  { name: 'React', icon: <FaReact size={40} color="#61DBFB" />, color: '#61DBFB' },
  { name: 'Node.js', icon: <FaNodeJs size={40} color="#3C873A" />, color: '#3C873A' },
  { name: 'Express', icon: <SiExpress size={40} color="#000000" />, color: '#999999' },
  { name: 'MongoDB', icon: <SiMongodb size={40} color="#47A248" />, color: '#47A248' },
  { name: 'TailwindCSS', icon: <SiTailwindcss size={40} color="#38B2AC" />, color: '#38B2AC' },
  { name: 'JavaScript', icon: <FaJsSquare size={40} color="#F0DB4F" />, color: '#F0DB4F' },
  { name: 'HTML', icon: <FaHtml5 size={40} color="#E34C26" />, color: '#E34C26' },
  { name: 'CSS', icon: <FaCss3Alt size={40} color="#264de4" />, color: '#264de4' },
  { name: 'Git', icon: <FaGitAlt size={40} color="#F1502F" />, color: '#F1502F' },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
  exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
};

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: [20, -10, 0], // bounce effect
    transition: { duration: 0.8 } 
  },
  exit: { opacity: 0, y: -20, transition: { duration: 0.4 } },
};

export default function Skills() {
  return (
    <section id="skills" className="bg-black/50 backdrop-blur-sm rounded-lg py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        Skills
      </h2>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-4 gap-12 justify-items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.2 }}
      >
        <AnimatePresence>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="relative flex flex-col items-center gap-2 cursor-pointer"
              variants={skillVariants}
              whileHover={{ scale: 1.2 }}
            >
              {/* Subtle animated glowing circle */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  width: 70,
                  height: 70,
                  backgroundColor: skill.color,
                  filter: 'blur(25px)',
                  zIndex: -1,
                }}
                animate={{ opacity: [0.05, 0.25, 0.05], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
              />

              {/* Skill Icon */}
              <div className="p-4 rounded-full bg-white/10 z-10">{skill.icon}</div>
              <p className="text-white text-sm z-10">{skill.name}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
