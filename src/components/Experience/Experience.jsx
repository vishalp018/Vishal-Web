import React from "react";
import { experiences } from "../../constants"; // Import your data

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 px-[5vw] font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EXPERIENCE</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 w-1 h-full bg-white transform -translate-x-1/2 z-0"></div>

        {/* Timeline Items */}
        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={experience.id}
              className={`mb-20 flex flex-col sm:flex-row items-center relative ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Spacer */}
              <div className={`hidden sm:block w-1/2 ${isLeft ? "" : "order-2"}`}></div>

              {/* Timeline Dot */}
              <div className="z-10 absolute left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-4 border-[#8245ec] rounded-full flex justify-center items-center overflow-hidden">
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-contain p-1 rounded-full bg-white"
                />
              </div>

              {/* Content Box */}
              <div
                className={`w-full sm:w-[40vw] mt-16 sm:mt-0 bg-gray-900 border border-white backdrop-blur-md rounded-2xl shadow-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] p-6 sm:p-8 transform transition-transform duration-300 hover:scale-105 z-20 ${
                  isLeft ? "sm:ml-auto" : "sm:mr-auto"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-white rounded-md overflow-hidden flex justify-center items-center">
                    <img
                      src={experience.img}
                      alt={experience.company}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl sm:text-2xl font-semibold text-white">
                      {experience.role}
                    </h3>
                    <h4 className="text-sm text-gray-300">{experience.company}</h4>
                    <p className="text-sm text-gray-500 mt-1">{experience.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400">{experience.desc}</p>
                <div className="mt-4">
                  <h5 className="font-medium text-white">Skills:</h5>
                  <ul className="flex flex-wrap mt-2">
                    {experience.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="bg-[#8245ec] text-gray-300 px-4 py-1 text-xs sm:text-sm rounded-lg mr-2 mb-2 border border-gray-400"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Experience;
