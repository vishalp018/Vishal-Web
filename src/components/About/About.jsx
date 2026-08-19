import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import profileImage from '../../assets/profile-new.jpg';
import { RESUME_LINK } from '../../constants';

const About = () => {
  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 min-h-[88vh] flex items-center"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 w-full">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-xs sm:text-sm uppercase tracking-[0.35em] text-neutral-500 mb-4 font-semibold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Portfolio · 2026
          </motion.p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-100 mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold gradient-text mb-5 leading-tight">
            Vishal Pal
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight min-h-[2.5rem]">
            <span className="text-neutral-500">I am a </span>
            <span className="text-neutral-200">
              <Typewriter
                words={['QA Engineer', 'Test Automation Engineer', 'Full-Stack Developer', 'SDET']}
                loop cursor cursorStyle="|" typeSpeed={75} deleteSpeed={40} delaySpeed={2200}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg text-neutral-400 mb-8 mt-6 leading-relaxed max-w-xl">
            Software Engineer with experience across full-stack development and test
            automation. Currently a QA Intern at{' '}
            <a
              href="https://aistrike.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-200 hover:text-white underline underline-offset-4 decoration-neutral-600"
            >
              AiStrike
            </a>
            , automating releases with Selenium, Playwright, and Cucumber BDD.
            800+ DSA problems solved with IEEE-published research.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3 px-8 text-base sm:text-lg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              className="btn-outline py-3 px-8 text-base sm:text-lg"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <div className="relative">
            <motion.div
              className="absolute -inset-4 rounded-full opacity-40 blur-2xl bg-neutral-700/30"
              animate={{ scale: [1, 1.06, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <Tilt
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-[3px] bg-neutral-700"
              tiltMaxAngleX={12}
              tiltMaxAngleY={12}
              perspective={1200}
              scale={1.04}
              transitionSpeed={900}
            >
              <img
                src={profileImage}
                alt="Vishal Pal"
                className="w-full h-full rounded-full object-cover border-4 border-dark"
              />
            </Tilt>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
