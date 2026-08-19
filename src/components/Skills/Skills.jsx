import React from "react";
import { motion } from "framer-motion";
import { SkillsInfo } from "../../constants";
import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";

const categoryBorders = [
  "border-neutral-700/60",
  "border-neutral-600/50",
  "border-neutral-700/60",
  "border-neutral-600/50",
];

const Skills = () => (
  <section id="skills" className="py-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-section-gradient clip-path-custom">
    <AnimatedSection>
      <SectionHeading
        title="Skills"
        subtitle="Technical expertise honed through internships, projects, and continuous learning"
      />
    </AnimatedSection>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 py-4">
      {SkillsInfo.map((category, catIndex) => (
        <AnimatedSection key={category.title} delay={catIndex * 0.1}>
          <motion.div
            className={`glass-card px-6 py-8 h-full ${categoryBorders[catIndex % categoryBorders.length]}`}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-xl sm:text-2xl font-bold gradient-text mb-6 text-center">
              {category.title}
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-2 bg-dark/60 border border-neutral-800 rounded-xl py-2.5 px-3 hover:border-neutral-600 transition-all duration-300"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: skillIndex * 0.03 }}
                  whileHover={{ y: -3, scale: 1.03 }}
                >
                  <img src={skill.logo} alt={`${skill.name} logo`} className="w-6 h-6 sm:w-7 sm:h-7 object-contain flex-shrink-0" />
                  <span className="text-xs sm:text-sm text-neutral-400 font-medium truncate">{skill.name}</span>
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
