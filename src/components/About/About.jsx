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
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 min-h-[85vh] flex items-center"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-12 w-full">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.p
            className="text-sm uppercase tracking-[0.3em] text-purple-400 mb-3 font-medium"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            Welcome to my portfolio
          </motion.p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent mb-4 leading-tight">
            Vishal Pal
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight min-h-[2.5rem]">
            <span className="text-gray-300">I am a </span>
            <span className="text-[#a855f7]">
              <Typewriter
                words={[
                  'QA Engineer',
                  'Test Automation Engineer',
                  'Full-Stack Developer',
                  'SDET',
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={45}
                delaySpeed={2200}
              />
            </span>
          </h3>

          <p className="text-base sm:text-lg text-gray-400 mb-8 mt-6 leading-relaxed max-w-xl">
            Software Engineer with experience across full-stack development and test
            automation. Currently a QA Intern at{' '}
            <a
              href="https://aistrike.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300 underline underline-offset-2"
            >
              AiStrike
            </a>
            , automating releases with Selenium, Playwright, and Cucumber BDD.
            800+ DSA problems solved with IEEE-published research and 3 industry
            internships under my belt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <motion.a
              href={RESUME_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center text-white py-3 px-8 rounded-full text-lg font-bold"
              style={{
                background: 'linear-gradient(135deg, #8245ec, #a855f7, #ec4899)',
                boxShadow: '0 0 30px rgba(130, 69, 236, 0.4)',
              }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(168, 85, 247, 0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              Download CV
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center text-purple-300 py-3 px-8 rounded-full text-lg font-semibold border border-purple-500/50 hover:border-purple-400 hover:bg-purple-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Me
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          className="md:w-1/2 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-600/40 to-pink-500/30 blur-2xl"
              animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            />
            <Tilt
              className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full p-1"
              style={{
                background: 'linear-gradient(135deg, #8245ec, #ec4899, #8245ec)',
              }}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              perspective={1000}
              scale={1.03}
              transitionSpeed={800}
            >
              <img
                src={profileImage}
                alt="Vishal Pal"
                className="w-full h-full rounded-full object-cover border-4 border-[#050414]"
              />
            </Tilt>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
