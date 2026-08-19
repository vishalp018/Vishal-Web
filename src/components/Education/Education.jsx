import React from "react";
import { motion } from "framer-motion";
import { education } from "../../constants";
import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";

const Education = () => {
  return (
    <section id="education" className="py-24 px-[5vw] font-sans bg-section-gradient clip-path-custom-3">
      <AnimatedSection>
        <SectionHeading title="Education" subtitle="My academic journey and the foundation behind my technical growth" />
      </AnimatedSection>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-gradient-to-b from-neutral-600/50 via-neutral-700/30 to-transparent z-0 hidden sm:block" />

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;
          return (
            <AnimatedSection key={edu.id} delay={index * 0.1} className="mb-16 last:mb-0">
              <div className={`flex flex-col sm:flex-row items-center relative ${isLeft ? "sm:justify-start" : "sm:justify-end"}`}>
                <div className={`hidden sm:block w-1/2 ${isLeft ? "" : "order-2"}`} />

                <motion.div className="z-10 absolute left-1/2 transform -translate-x-1/2 w-16 h-16 logo-box rounded-full shadow-glow" whileHover={{ scale: 1.12 }}>
                  <img src={edu.img} alt={edu.school} className="w-full h-full object-contain p-1.5" />
                </motion.div>

                <motion.div
                  className={`w-full sm:w-[44%] mt-24 sm:mt-0 glass-card p-6 sm:p-7 z-20 ${isLeft ? "sm:ml-auto" : "sm:mr-auto"}`}
                  whileHover={{ scale: 1.02, y: -4 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-14 logo-box">
                      <img src={edu.img} alt={edu.school} className="w-full h-full object-contain p-1" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-100">{edu.degree}</h3>
                      <h4 className="text-sm text-neutral-400">{edu.school}</h4>
                      <p className="text-xs text-neutral-600 mt-1">{edu.date}</p>
                    </div>
                  </div>
                  <p className="mt-3 text-sm font-semibold text-neutral-300">Grade: {edu.grade}</p>
                  <p className="mt-2 text-neutral-500 text-sm leading-relaxed">{edu.desc}</p>
                </motion.div>
              </div>
            </AnimatedSection>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
