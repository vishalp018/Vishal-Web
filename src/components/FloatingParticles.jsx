import React from "react";
import { motion } from "framer-motion";

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  size: Math.random() * 3 + 1.5,
  x: Math.random() * 100,
  y: Math.random() * 100,
  duration: Math.random() * 8 + 6,
  delay: Math.random() * 4,
}));

const FloatingParticles = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
    {particles.map((p) => (
      <motion.span
        key={p.id}
        className="absolute rounded-full bg-neutral-500/20"
        style={{ width: p.size, height: p.size, left: `${p.x}%`, top: `${p.y}%` }}
        animate={{ y: [0, -25, 0], opacity: [0.05, 0.25, 0.05] }}
        transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "easeInOut" }}
      />
    ))}
  </div>
);

export default FloatingParticles;
