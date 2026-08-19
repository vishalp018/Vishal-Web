import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { RESUME_LINK } from "../../constants";

const Footer = () => {
  const handleScroll = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  const navItems = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "work" },
    { name: "Education", id: "education" },
    { name: "Contact", id: "contact" },
  ];

  const socialLinks = [
    { icon: <FaGithub />, link: "https://github.com/vishalp018" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/vishalp018/" },
    { icon: <FaTwitter />, link: "https://x.com/VishalP018" },
    { icon: <FaInstagram />, link: "https://www.instagram.com/vishal_p018" },
    { icon: <FaYoutube />, link: "https://www.youtube.com/@VISHALPAL-yl3uf" },
  ];

  return (
    <footer className="text-white py-12 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t border-slate-800/80 bg-dark/50">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold gradient-text">Vishal Pal</h2>
        <p className="text-slate-500 text-sm mt-2">QA Engineer · Full-Stack Developer · SDET</p>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
            >
              {item.name}
            </button>
          ))}
          <a
            href={RESUME_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 hover:text-cyan-400 text-sm transition-colors"
          >
            Resume
          </a>
        </nav>

        <div className="flex justify-center space-x-5 mt-6">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl text-slate-500 hover:text-cyan-400 transition-all hover:scale-110 hover:-translate-y-0.5"
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="section-divider mx-auto mt-8 opacity-40" />
        <p className="text-sm text-slate-600 mt-6">© 2026 Vishal Pal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
