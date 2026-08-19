import React from "react";
import { motion } from "framer-motion";
import { achievements } from "../../constants";
import AnimatedSection from "../AnimatedSection";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-20 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans"
    >
      <AnimatedSection className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Achievements</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-3 rounded-full" />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {achievements.map((item, index) => (
          <AnimatedSection key={item.id} delay={index * 0.1}>
            <motion.div
              className="bg-gray-900/70 border border-purple-500/20 rounded-2xl p-6 h-full text-center"
              whileHover={{
                y: -6,
                borderColor: "rgba(168, 85, 247, 0.5)",
                boxShadow: "0 10px 40px rgba(130, 69, 236, 0.2)",
              }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-gradient-to-br from-purple-600 to-pink-500 flex items-center justify-center text-xl font-bold text-white">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
