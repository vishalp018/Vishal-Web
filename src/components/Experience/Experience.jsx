import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../../constants";
import AnimatedSection from "../AnimatedSection";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[5vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      <AnimatedSection className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">Experience</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
          My professional journey across QA automation, backend development, and data engineering
        </p>
      </AnimatedSection>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 top-0 w-0.5 h-full bg-gradient-to-b from-purple-500/80 via-purple-400/40 to-transparent transform -translate-x-1/2 z-0 hidden sm:block" />

        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <AnimatedSection key={experience.id} delay={index * 0.1} className="mb-16 last:mb-0">
              <div
                className={`flex flex-col sm:flex-row items-center relative ${
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <div className={`hidden sm:block w-1/2 ${isLeft ? "" : "order-2"}`} />

                <motion.div
                  className="z-10 absolute left-1/2 transform -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-[#0d081f] border-2 border-purple-500 rounded-full flex justify-center items-center overflow-hidden shadow-[0_0_20px_rgba(130,69,236,0.5)]"
                  whileHover={{ scale: 1.15, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain p-2 rounded-full bg-white"
                  />
                </motion.div>

                <motion.div
                  className={`w-full sm:w-[42%] mt-20 sm:mt-0 bg-gray-900/80 border border-purple-500/20 backdrop-blur-md rounded-2xl shadow-2xl p-6 sm:p-7 z-20 ${
                    isLeft ? "sm:ml-auto" : "sm:mr-auto"
                  }`}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(168, 85, 247, 0.5)",
                    boxShadow: "0 0 30px rgba(130, 69, 236, 0.25)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 bg-white rounded-xl overflow-hidden flex-shrink-0 flex justify-center items-center">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-contain p-1.5"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-white leading-snug">
                        {experience.role}
                      </h3>
                      {experience.companyUrl ? (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
                        >
                          {experience.company} ↗
                        </a>
                      ) : (
                        <h4 className="text-sm text-purple-400">{experience.company}</h4>
                      )}
                      <p className="text-xs text-gray-500 mt-1 font-medium">{experience.date}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-400 text-sm leading-relaxed">{experience.desc}</p>

                  <div className="mt-4">
                    <h5 className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">
                      Skills
                    </h5>
                    <ul className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <li
                          key={i}
                          className="bg-purple-500/10 text-purple-300 px-3 py-1 text-xs rounded-full border border-purple-500/30"
                        >
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
