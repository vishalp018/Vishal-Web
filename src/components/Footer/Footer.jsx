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
    <footer className="text-white py-12 px-[12vw] md:px-[7vw] lg:px-[20vw] border-t border-neutral-900 bg-dark/80">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-bold gradient-text">Vishal Pal</h2>
        <p className="text-neutral-600 text-sm mt-2">QA Engineer · Full-Stack Developer · SDET</p>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-6">
          {navItems.map((item) => (
            <button key={item.id} onClick={() => handleScroll(item.id)} className="text-neutral-500 hover:text-neutral-200 text-sm transition-colors">
              {item.name}
            </button>
          ))}
          <a href={RESUME_LINK} target="_blank" rel="noopener noreferrer" className="text-neutral-500 hover:text-neutral-200 text-sm transition-colors">
            Resume
          </a>
        </nav>

        <div className="flex justify-center space-x-5 mt-6">
          {socialLinks.map((item, index) => (
            <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" className="text-xl text-neutral-600 hover:text-neutral-300 transition-all hover:scale-110">
              {item.icon}
            </a>
          ))}
        </div>

        <div className="section-divider mx-auto mt-8 opacity-30" />
        <p className="text-sm text-neutral-700 mt-6">© 2026 Vishal Pal. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
