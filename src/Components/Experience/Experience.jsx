import React from 'react';
import { experiences } from '../../constants';

const Experience = () => {
  return (
    <section id="experience" className="py-16 px-[5vw] bg-[#050414]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white hover:underline hover:text-[#8245ec] cursor-pointer">EXPERIENCE</h2>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        {experiences.map((exp) => (
          <div key={exp.id} className="bg-[#0a0618] p-6 rounded-lg border-l-4 border-[#8245ec]">
            <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
            <div className="flex flex-col sm:flex-row justify-between text-gray-400 mb-2">
              <span>{exp.company}</span>
              <span>{exp.duration}</span>
            </div>
            <ul className="mt-4 space-y-2">
              {exp.description.map((item, i) => (
                <li key={i} className="text-gray-300 flex items-start">
                  <span className="text-[#8245ec] mr-2">•</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <span key={skill} className="px-3 py-1 bg-[#8245ec]/10 text-[#8245ec] rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;