// src/components/Navbar.jsx
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "Projects", to: "projects" },
    { name: "Contact", to: "contact" },
  ];

  return (
    <motion.nav
      className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center h-16">
        {/* Logo */}
        <motion.h1
          className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          
        </motion.h1>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                smooth={true}
                duration={500}
                offset={-60}
                spy={true}
                activeClass="text-purple-400"
                className="cursor-pointer text-gray-300 hover:text-white transition"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <div
          className="md:hidden text-white cursor-pointer"
          onClick={() => setNavOpen(!navOpen)}
        >
          {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>

      {/* Mobile Menu - Gradient theme with blur */}
      {navOpen && (
        <motion.div 
          className="md:hidden fixed top-16 left-0 w-full backdrop-blur-xl z-50"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(147, 51, 234, 0.2), rgba(236, 72, 153, 0.2), rgba(59, 130, 246, 0.15))',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          {/* Smoky overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-800 via-gray-800/90 to-cyan-500/70 opacity-60"></div>
          
          {/* Content */}
          <div className="relative z-10 py-8 px-4">
            <ul className="flex flex-col items-center gap-6">
              {navLinks.map((link, index) => (
                <motion.li 
                  key={link.to}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={link.to}
                    smooth={true}
                    duration={500}
                    offset={-60}
                    spy={true}
                    activeClass="text-purple-400"
                    className="cursor-pointer text-xl text-white hover:text-purple-400 transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg hover:bg-white/10 backdrop-blur-sm"
                    onClick={() => setNavOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>
          
          {/* Decorative gradient particles */}
          <div className="absolute top-4 left-8 w-16 h-16 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-4 right-8 w-12 h-12 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-lg animate-pulse delay-1000"></div>
        </motion.div>
      )}
    </motion.nav>
  );
}