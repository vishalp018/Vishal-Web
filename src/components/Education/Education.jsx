import React from "react";
import { education } from "../../constants"; // Import the education data

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 px-[5vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline Container */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-white z-0"></div>

        {education.map((edu, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={edu.id}
              className={`mb-20 flex flex-col sm:flex-row items-center relative ${
                isLeft ? "sm:justify-start" : "sm:justify-end"
              }`}
            >
              {/* Spacer for opposite side */}
              <div className={`hidden sm:block w-1/2 ${isLeft ? "" : "order-2"}`}></div>

              {/* Timeline Dot */}
              <div className="z-10 absolute left-1/2 transform -translate-x-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-gray-400 border-4 border-[#8245ec] rounded-full flex justify-center items-center overflow-hidden">
                <img
                  src={edu.img}
                  alt={edu.school}
                  className="w-full h-full object-contain p-1"
                />
              </div>

              {/* Content Card */}
              <div
                className={`w-full sm:w-[40vw] mt-16 sm:mt-0 bg-gray-900 border border-white backdrop-blur-md rounded-2xl shadow-2xl shadow-[0_0_20px_1px_rgba(130,69,236,0.3)] p-6 sm:p-8 transform transition-transform duration-300 hover:scale-105 z-20 ${
                  isLeft ? "sm:ml-auto" : "sm:mr-auto"
                }`}
              >
                <div className="flex items-center space-x-4">
                  <div className="w-20 h-16 bg-white rounded-md overflow-hidden flex justify-center items-center">
                    <img
                      src={edu.img}
                      alt={edu.school}
                      className="w-full h-full object-contain p-1"
                    />
                  </div>
                  <div className="flex flex-col">
                    <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                    <h4 className="text-sm text-gray-300">{edu.school}</h4>
                    <p className="text-sm text-gray-500 mt-1">{edu.date}</p>
                  </div>
                </div>

                <p className="mt-4 text-gray-400 font-bold">Grade: {edu.grade}</p>
                <p className="mt-2 text-gray-400">{edu.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Education;
