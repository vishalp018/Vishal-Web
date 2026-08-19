import React from "react";
import { motion } from "framer-motion";
import { achievements } from "../../constants";
import AnimatedSection from "../AnimatedSection";
import SectionHeading from "../SectionHeading";

const icons = ["🏆", "💻", "📜"];

const Achievements = () => {
  return (
    <section id="achievements" className="py-20 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans">
      <AnimatedSection>
        <SectionHeading title="Achievements" subtitle="Research, competitive programming, and industry certifications" />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {achievements.map((item, index) => (
          <AnimatedSection key={item.id} delay={index * 0.12}>
            <motion.div
              className="glass-card p-7 h-full text-center"
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="w-14 h-14 mx-auto mb-5 rounded-2xl flex items-center justify-center text-2xl bg-neutral-800/80 border border-neutral-700"
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
              >
                {icons[index]}
              </motion.div>
              <h3 className="text-lg font-bold text-neutral-100 mb-2">{item.title}</h3>
              <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
