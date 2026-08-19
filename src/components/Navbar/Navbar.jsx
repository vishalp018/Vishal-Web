import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RESUME_LINK } from "../../constants";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ["about", "skills", "experience", "achievements", "work", "education", "contact"];
      const scrollPos = window.scrollY + 120;
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "work", label: "Projects" },
    { id: "education", label: "Education" },
  ];

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-dark/80 backdrop-blur-2xl shadow-lg shadow-black/20 border-b border-neutral-800/80"
          : "bg-transparent"
      }`}
    >
      <div className="text-white py-4 flex justify-between items-center">
        <button onClick={() => handleMenuItemClick("about")} className="text-lg font-bold group">
          <span className="text-neutral-500 group-hover:text-neutral-300 transition-colors">&lt;</span>
          <span className="mx-1 text-neutral-100 group-hover:text-white transition-colors">Vishal</span>
          <span className="text-neutral-600 group-hover:text-neutral-400 transition-colors">/</span>
          <span className="mx-1 text-neutral-100 group-hover:text-white transition-colors">Pal</span>
          <span className="text-neutral-500 group-hover:text-neutral-300 transition-colors">&gt;</span>
        </button>

        <ul className="hidden md:flex space-x-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleMenuItemClick(item.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-colors rounded-lg ${
                  activeSection === item.id ? "text-neutral-100" : "text-neutral-500 hover:text-neutral-300"
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.span
                    layoutId="activeNav"
                    className="absolute inset-0 bg-white/5 border border-neutral-700 rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center space-x-3">
          <motion.a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold px-5 py-2 rounded-full btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
          >
            Resume
          </motion.a>
          <a href="https://github.com/vishalp018" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-200 transition-colors p-2">
            <FaGithub size={22} />
          </a>
          <a href="https://www.linkedin.com/in/vishalp018/" target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-200 transition-colors p-2">
            <FaLinkedin size={22} />
          </a>
        </div>

        <button className="md:hidden text-neutral-300" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
          >
            <div className="glass-card mb-4">
              <ul className="flex flex-col items-center py-4 space-y-2">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <button
                      onClick={() => handleMenuItemClick(item.id)}
                      className={`px-6 py-2 text-sm ${activeSection === item.id ? "text-neutral-100" : "text-neutral-400"}`}
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
                <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="mt-2 btn-primary text-sm px-6 py-2">
                  Resume
                </a>
                <div className="flex space-x-6 pt-2">
                  <a href="https://github.com/vishalp018" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-200"><FaGithub size={24} /></a>
                  <a href="https://www.linkedin.com/in/vishalp018/" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-neutral-200"><FaLinkedin size={24} /></a>
                </div>
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
