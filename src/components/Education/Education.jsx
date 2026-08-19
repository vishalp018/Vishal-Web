import React from "react";
import { motion } from "framer-motion";
import { education } from "../../constants";
import AnimatedSection from "../AnimatedSection";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[5vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      <AnimatedSection className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">Education</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full" />
        <p className="text-gray-400 mt-4 text-lg font-medium max-w-2xl mx-auto">
          My academic journey and the foundation behind my technical growth
        </p>
      </AnimatedSection>

      <div className="relative max-w-6xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-purple-500/80 via-purple-400/40 to-transparent z-0 hidden sm:block" />

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <AnimatedSection key={edu.id} delay={index * 0.1} className="mb-16 last:mb-0">
              <div
                className={`flex flex-col sm:flex-row items-center relative ${
                  isLeft ? "sm:justify-start" : "sm:justify-end"
                }`}
              >
                <div className={`hidden sm:block w-1/2 ${isLeft ? "" : "order-2"}`} />

                <motion.div
                  className="z-10 absolute left-1/2 transform -translate-x-1/2 w-14 h-14 sm:w-16 sm:h-16 bg-[#0d081f] border-2 border-purple-500 rounded-full flex justify-center items-center overflow-hidden shadow-[0_0_20px_rgba(130,69,236,0.5)]"
                  whileHover={{ scale: 1.15 }}
                >
                  <img
                    src={edu.img}
                    alt={edu.school}
                    className="w-full h-full object-contain p-1.5 bg-white rounded-full"
                  />
                </motion.div>

                <motion.div
                  className={`w-full sm:w-[42%] mt-20 sm:mt-0 bg-gray-900/80 border border-purple-500/20 backdrop-blur-md rounded-2xl p-6 sm:p-7 z-20 ${
                    isLeft ? "sm:ml-auto" : "sm:mr-auto"
                  }`}
                  whileHover={{
                    scale: 1.02,
                    borderColor: "rgba(168, 85, 247, 0.5)",
                    boxShadow: "0 0 30px rgba(130, 69, 236, 0.25)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-14 bg-white rounded-xl overflow-hidden flex-shrink-0 flex justify-center items-center">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                      <h4 className="text-sm text-purple-400">{edu.school}</h4>
                      <p className="text-xs text-gray-500 mt-1">{edu.date}</p>
                    </div>
                  </div>

                  <p className="mt-3 text-sm font-semibold text-purple-300">Grade: {edu.grade}</p>
                  <p className="mt-2 text-gray-400 text-sm leading-relaxed">{edu.desc}</p>
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
