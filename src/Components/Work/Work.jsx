import React from 'react';
import { projects } from '../../constants';

const Work = () => {
  return (
    <section id="work" className="py-16 px-[5vw] bg-[#050414]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white hover:underline hover:text-[#8245ec] cursor-pointer">MY WORK</h2>
        <p className="text-gray-400 mt-2">Professional projects built with 1 year of experience</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-[#8245ec] transition-all duration-300 bg-[#0a0618]"
          >
            {/* Color-coded placeholder based on project type */}
            <div className={`h-48 ${getProjectGradient(project)} flex items-center justify-center`}>
              <div className="text-5xl text-white/20">
                {getProjectIcon(project)}
              </div>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <h3 className="text-xl font-bold text-white group-hover:text-[#8245ec] transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-300 mt-2">{project.description}</p>
              
              {/* Technologies */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-2 py-1 bg-[#8245ec]/20 text-[#8245ec] text-xs rounded-full hover:bg-[#8245ec]/40 transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Always visible features */}
              <ul className="mt-4 space-y-2 text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
                {project.features.slice(0, 2).map((feature, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-[#8245ec] mr-2">•</span>
                    {feature}
                  </li>
                ))}
                {project.features.length > 2 && (
                  <li className="text-[#8245ec]">+{project.features.length - 2} more features</li>
                )}
              </ul>

              {/* Hover buttons */}
              <div className="flex gap-3 mt-6 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <a 
                  href={project.link} 
                  className="flex-1 text-center py-2 bg-[#8245ec] text-white rounded-lg text-sm hover:bg-[#6a3ac7] transition-colors"
                >
                  View Demo
                </a>
                <a 
                  href={project.github} 
                  className="flex-1 text-center py-2 border border-[#8245ec] text-[#8245ec] rounded-lg text-sm hover:bg-[#8245ec]/10 transition-colors"
                >
                  Source Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Helper functions for dynamic placeholders
const getProjectGradient = (project) => {
  const gradients = {
    ecommerce: "bg-gradient-to-br from-purple-900/50 to-pink-900/50",
    portfolio: "bg-gradient-to-br from-blue-900/50 to-cyan-900/50",
    taskapp: "bg-gradient-to-br from-emerald-900/50 to-teal-900/50",
    weather: "bg-gradient-to-br from-amber-900/50 to-orange-900/50"
  };
  return gradients[project.id % 4] || gradients[0];
};

const getProjectIcon = (project) => {
  const icons = ["🛒", "💼", "✅", "⛅"];
  return icons[project.id % 4] || icons[0];
};

export default Work;