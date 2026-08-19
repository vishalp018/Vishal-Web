import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants";
import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="work" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative bg-subtle-gradient">
      <AnimatedSection>
        <SectionHeading
          title="Projects"
          subtitle="A showcase of projects spanning AI, full-stack development, and machine learning"
        />
      </AnimatedSection>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 0.1}>
            <motion.div
              onClick={() => setSelectedProject(project)}
              className="glass-card overflow-hidden cursor-pointer h-full flex flex-col group"
              whileHover={{ y: -10 }}
            >
              <div className="p-4 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-xl opacity-90 group-hover:opacity-100 transition-opacity"
                  whileHover={{ scale: 1.04 }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-neutral-100 mb-2 group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-neutral-500 text-sm mb-4 line-clamp-3 flex-grow">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="skill-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="glass-card w-full max-w-3xl overflow-hidden"
              initial={{ scale: 0.88, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.88, opacity: 0, y: 30 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <button onClick={() => setSelectedProject(null)} className="text-neutral-500 text-3xl font-bold hover:text-neutral-200 transition-colors">
                  &times;
                </button>
              </div>
              <div className="px-6 pb-8">
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full max-h-64 object-cover rounded-xl mb-6" />
                <h3 className="text-2xl font-bold gradient-text mb-3">{selectedProject.title}</h3>
                <p className="text-neutral-400 mb-6">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span key={i} className="skill-tag">{tag}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 px-6 py-3 rounded-xl text-center font-semibold border border-neutral-700 transition-colors">
                    View Code
                  </a>
                  <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer" className="flex-1 btn-primary px-6 py-3 rounded-xl text-center">
                    View Live
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;
