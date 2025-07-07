
import React from 'react';
import { education } from '../../constants';

const Education = () => {
  // Fallback icon mapping
  const getFallbackIcon = (level) => {
    const icons = {
      "Matriculation": "🏫",
      "Intermediate": "🎓",
      "Undergraduate": "🏛️",
      "Professional Certification": "📜"
    };
    return icons[level] || "🎓";
  };

  return (
    <section id="education" className="py-16 px-[5vw] bg-[#0f0c1a]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white hover:underline hover:text-[#8245ec] cursor-pointer">ACADEMIC JOURNEY</h2>
        <p className="text-[#8245ec] mt-2">From Foundations to Specialization</p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((edu) => (
          <div 
            key={edu.id} 
            className="relative p-6 rounded-xl bg-gradient-to-br from-[#0a0618] to-[#1a1530] border border-gray-800 hover:border-[#8245ec] transition-all group"
          >
            {/* Logo Container with Fallback */}
            <div className="absolute top-6 right-6 w-14 h-14 rounded-full bg-white/5 backdrop-blur-sm p-2 border border-gray-700 group-hover:border-[#8245ec] transition-all flex items-center justify-center">
              {edu.logo ? (
                <img 
                  src={edu.logo} 
                  alt={`${edu.institution} logo`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.innerHTML = getFallbackIcon(edu.level);
                  }}
                />
              ) : (
                <span className="text-2xl">{getFallbackIcon(edu.level)}</span>
              )}
            </div>

            {/* Rest of your content remains the same */}
            <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
              edu.level === "Professional Certification" 
                ? "bg-[#8245ec]/20 text-[#8245ec]" 
                : "bg-white/10 text-gray-300"
            }`}>
              {edu.level}
            </span>

            <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
            <h4 className="text-lg text-[#8245ec] mt-1">{edu.institution}</h4>
            <p className="text-gray-400 text-sm mt-1">{edu.duration}</p>

            <ul className="mt-4 space-y-2">
              {edu.description.map((item, i) => (
                <li key={i} className="flex items-start text-gray-300">
                  <span className="text-[#8245ec] mr-2 mt-1">▸</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;