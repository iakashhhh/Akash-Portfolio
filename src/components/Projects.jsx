import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useState } from "react";

// Import your project images
import EMSImage from "../assets/ems.png";
import WeatherImage from "../assets/weather.png";
import PortfolioImage from "../assets/Portfolio.png";

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
  {
    title: "Akash Portfolio",
    description:
      "My personal portfolio website showcasing my projects, skills, and resume in a clean and responsive design.",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    github: "https://github.com/iakashhhh/Akash-Portfolio",
    live: "https://akashsharma.netlify.app",
    image: PortfolioImage,
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // Responsive cards per view
  const getCardsPerView = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) return 1.2; // Mobile: 1.2 cards
      if (window.innerWidth < 768) return 1.5; // Small tablet: 1.5 cards
      if (window.innerWidth < 1024) return 2; // Tablet: 2 cards
      return 2.5; // Desktop: 2.5 cards
    }
    return 2.5;
  };
  
  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  const maxIndex = Math.max(0, projects.length - cardsPerView);
  
  // Handle window resize
  useState(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };
    
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  const nextSlide = () => {
    setCurrentIndex(prev => Math.min(prev + 1, maxIndex));
  };
  
  const prevSlide = () => {
    setCurrentIndex(prev => Math.max(prev - 1, 0));
  };
  
  const centerCard = (cardIndex) => {
    // Calculate the position to center the clicked card
    let targetIndex = cardIndex - Math.floor(cardsPerView / 2);
    targetIndex = Math.max(0, Math.min(targetIndex, maxIndex));
    setCurrentIndex(targetIndex);
  };
  
  // Handle touch/swipe gestures
  const handleDragEnd = (event, info) => {
    const threshold = 50;
    if (info.offset.x > threshold) {
      prevSlide();
    } else if (info.offset.x < -threshold) {
      nextSlide();
    }
  };

  return (
    <section id="projects" className="bg-transparent text-white py-20 px-4">
      <h2 className="text-4xl font-bold text-center mb-12 relative z-10 
        bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
        My Projects
      </h2>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Carousel Container */}
        <div className="relative overflow-hidden px-4 sm:px-0">
          <motion.div
            className="flex gap-2 sm:gap-4 md:gap-6"
            animate={{
              x: `-${currentIndex * (100 / cardsPerView)}%`
            }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={handleDragEnd}
            style={{ cursor: 'grab' }}
            whileDrag={{ cursor: 'grabbing' }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 px-2 sm:px-3"
                style={{ width: `${100 / cardsPerView}%` }}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut" 
                }}
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 15px 40px rgba(255, 255, 255, 0.15)",
                }}
                onClick={() => centerCard(index)}
              >
                <div className="backdrop-blur-sm bg-black/50 border border-white/20 rounded-xl overflow-hidden shadow-lg transition-all h-full cursor-pointer">
                  {/* Project Image - clickable with responsive aspect ratio */}
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block overflow-hidden"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div className="relative w-full h-40 sm:h-44 md:h-48 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="absolute inset-0 w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </a>

                  {/* Project Content */}
                  <div className="p-4 sm:p-5 md:p-6 flex flex-col">
                    <h3 className="text-lg sm:text-xl font-semibold mb-2 line-clamp-2">{project.title}</h3>
                    <p className="mb-3 sm:mb-4 text-gray-300 text-sm sm:text-base line-clamp-2 sm:line-clamp-3">{project.description}</p>

                    {/* Tech Stack Badges */}
                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                      {project.tech.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-600 text-white">
                          +{project.tech.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-2 mt-auto">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition text-sm flex-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaGithub className="text-sm" />
                        <span className="hidden sm:inline">GitHub</span>
                      </a>
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1 px-3 py-2 bg-purple-600 hover:bg-purple-500 rounded-lg transition text-sm flex-1"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <FaExternalLinkAlt className="text-sm" />
                        <span className="hidden sm:inline">Live</span>
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <motion.button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`p-3 rounded-full border transition-all ${
              currentIndex === 0 
                ? 'border-gray-600 text-gray-600 cursor-not-allowed' 
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
            whileHover={currentIndex !== 0 ? { scale: 1.1 } : {}}
            whileTap={currentIndex !== 0 ? { scale: 0.9 } : {}}
          >
            <FaChevronLeft />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex gap-2">
            {Array.from({ length: Math.ceil(projects.length / cardsPerView) }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  Math.floor(currentIndex) === i 
                    ? 'bg-white scale-125' 
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <motion.button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`p-3 rounded-full border transition-all ${
              currentIndex >= maxIndex 
                ? 'border-gray-600 text-gray-600 cursor-not-allowed' 
                : 'border-white/30 text-white hover:bg-white/10'
            }`}
            whileHover={currentIndex < maxIndex ? { scale: 1.1 } : {}}
            whileTap={currentIndex < maxIndex ? { scale: 0.9 } : {}}
          >
            <FaChevronRight />
          </motion.button>
        </div>

        {/* Swipe Hint for Mobile */}
        <p className="text-center text-gray-400 text-sm mt-4 md:hidden">
          Swipe left or right to navigate
        </p>
      </div>
    </section>
  );
}