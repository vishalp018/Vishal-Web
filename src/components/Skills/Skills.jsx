import React from "react";
import { motion } from "framer-motion";
import { SkillsInfo } from "../../constants";
import AnimatedSection from "../AnimatedSection";

const Skills = () => (
  <section
    id="skills"
    className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    <AnimatedSection className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">Skills</h2>
      <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full" />
      <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
        Technical expertise honed through internships, projects, and continuous learning
      </p>
    </AnimatedSection>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-6">
      {SkillsInfo.map((category, catIndex) => (
        <AnimatedSection key={category.title} delay={catIndex * 0.1}>
          <motion.div
            className="bg-gray-900/70 backdrop-blur-md px-6 py-8 rounded-2xl border border-purple-500/20 h-full"
            whileHover={{
              borderColor: "rgba(168, 85, 247, 0.4)",
              boxShadow: "0 0 30px rgba(130, 69, 236, 0.15)",
            }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-400 mb-6 text-center">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-2 bg-[#0d081f]/80 border border-gray-700/50 rounded-xl py-2.5 px-3 hover:border-purple-500/50 transition-colors"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: skillIndex * 0.03 }}
                  whileHover={{ y: -3, scale: 1.03 }}
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0"
                  />
                  <span className="text-xs sm:text-sm text-gray-300 font-medium truncate">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatedSection>
      ))}
    </div>
  </section>
);

export default Skills;
