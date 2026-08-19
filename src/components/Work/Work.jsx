import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "../../constants";
import AnimatedSection from "../AnimatedSection";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      <AnimatedSection className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">Projects</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
          A showcase of projects spanning AI, full-stack development, and machine learning
        </p>
      </AnimatedSection>

      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 0.1}>
            <motion.div
              onClick={() => setSelectedProject(project)}
              className="border border-purple-500/20 bg-gray-900/70 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col"
              whileHover={{
                y: -8,
                borderColor: "rgba(168, 85, 247, 0.5)",
                boxShadow: "0 20px 40px rgba(130, 69, 236, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="p-4 overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-44 object-cover rounded-xl"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-purple-500/10 text-purple-300 text-xs font-medium rounded-full px-2.5 py-1 border border-purple-500/20"
                    >
                      {tag}
                    </span>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-gray-900 rounded-2xl shadow-2xl w-full max-w-3xl overflow-hidden border border-purple-500/30"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-gray-400 text-3xl font-bold hover:text-purple-400 transition-colors"
                >
                  &times;
                </button>
              </div>

              <div className="px-6 pb-8">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full max-h-64 object-cover rounded-xl mb-6"
                />
                <h3 className="text-2xl font-bold text-white mb-3">{selectedProject.title}</h3>
                <p className="text-gray-400 mb-6">{selectedProject.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-purple-500/10 text-purple-300 text-xs font-medium rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-purple-800/80 text-gray-300 px-6 py-3 rounded-xl text-center font-semibold transition-colors"
                  >
                    View Code
                  </a>
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90 text-white px-6 py-3 rounded-xl text-center font-semibold transition-opacity"
                  >
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
