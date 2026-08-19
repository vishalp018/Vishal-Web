import React from "react";
import { motion } from "framer-motion";
import { experiences } from "../../constants";
import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-[5vw] font-sans bg-aurora-gradient clip-path-custom-2 relative">
      <AnimatedSection>
        <SectionHeading
          title="Experience"
          subtitle="My professional journey across QA automation, backend development, and data engineering"
        />
      </AnimatedSection>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 top-0 w-px h-full bg-gradient-to-b from-cyan-500/60 via-violet-500/40 to-transparent transform -translate-x-1/2 z-0 hidden sm:block" />

        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <AnimatedSection key={experience.id} delay={index * 0.1} className="mb-16 last:mb-0">
              <div className={`flex flex-col sm:flex-row items-center relative ${isLeft ? "sm:justify-start" : "sm:justify-end"}`}>
                <div className={`hidden sm:block w-1/2 ${isLeft ? "" : "order-2"}`} />

                <motion.div
                  className="z-10 absolute left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] logo-box rounded-full shadow-glow"
                  whileHover={{ scale: 1.12, rotate: 3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-contain p-2"
                  />
                </motion.div>

                <motion.div
                  className={`w-full sm:w-[44%] mt-24 sm:mt-0 glass-card p-6 sm:p-7 z-20 ${isLeft ? "sm:ml-auto" : "sm:mr-auto"}`}
                  whileHover={{ scale: 1.02, y: -4 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 logo-box">
                      <img
                        src={experience.img}
                        alt={experience.company}
                        className="w-full h-full object-contain p-2"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-semibold text-slate-100 leading-snug">
                        {experience.role}
                      </h3>
                      {experience.companyUrl ? (
                        <a
                          href={experience.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {experience.company} ↗
                        </a>
                      ) : (
                        <h4 className="text-sm text-cyan-400">{experience.company}</h4>
                      )}
                      <p className="text-xs text-slate-500 mt-1 font-medium">{experience.date}</p>
                    </div>
                  </div>

                  <p className="mt-4 text-slate-400 text-sm leading-relaxed">{experience.desc}</p>

                  <div className="mt-4">
                    <h5 className="text-xs uppercase tracking-wider text-slate-500 font-semibold mb-2">Skills</h5>
                    <ul className="flex flex-wrap gap-2">
                      {experience.skills.map((skill, i) => (
                        <li key={i} className="skill-tag">{skill}</li>
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
