import React from "react";
import { motion } from "framer-motion";

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    <motion.h2
      className="text-3xl sm:text-4xl font-bold gradient-text"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    <div className="section-divider mx-auto mt-4" />
    {subtitle && (
      <p className="text-slate-400 mt-5 text-base sm:text-lg font-medium max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    )}
  </div>
);

export default SectionHeading;
