import React from 'react';
import { techSkills } from '../../constants';

const Skills = () => {
  // Remove JavaScript from all sections (if needed)
  const filteredSkills = {
    frontend: {
      skills: techSkills.frontend.skills.filter(skill => skill.name.toLowerCase() !== 'javascript')
    },
    backend: {
      skills: techSkills.backend.skills.filter(skill => skill.name.toLowerCase() !== 'javascript')
    },
    languages: {
      skills: techSkills.languages.skills.filter(skill => skill.name.toLowerCase() !== 'javascript')
    },
    tools: {
      skills: techSkills.tools.skills.filter(skill => skill.name.toLowerCase() !== 'javascript')
    },
  };

  // Skill Card
  const SkillCard = ({ skill }) => (
    <a
      href="#"
      className="w-[100px] h-[100px] bg-[#0a0618] border border-gray-600 rounded-lg flex flex-col items-center justify-center p-2 hover:scale-105 transition transform duration-200 cursor-pointer  "
    >
      <img
        src={skill.logo}
        alt={skill.name}
        className="w-10 h-10 object-contain mb-2"
        onError={(e) => {
          e.target.src = 'https://via.placeholder.com/40?text=?';
        }}
      />
      <span className="text-white text-sm text-center">{skill.name}</span>
    </a>
  );

  return (
    <section id="skills" className="py-16 px-[5vw] bg-[#050414]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white tracking-wide hover:underline hover:text-[#8245ec] cursor-pointer">
          SKILLS
        </h2>
        <p className="text-gray-400 mt-2">Technologies I work with</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Frontend */}
        <div>
          <h3 className="text-2xl text-white font-semibold mb-4">Frontend</h3>
          <div className="flex flex-wrap gap-4">
            {filteredSkills.frontend.skills.map(skill => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Backend */}
        <div>
          <h3 className="text-2xl text-white font-semibold mb-4">Backend</h3>
          <div className="flex flex-wrap gap-4">
            {filteredSkills.backend.skills.map(skill => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Languages */}
        <div>
          <h3 className="text-2xl text-white font-semibold mb-4">Languages</h3>
          <div className="flex flex-wrap gap-4">
            {filteredSkills.languages.skills.map(skill => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>

        {/* Tools */}
        <div>
          <h3 className="text-2xl text-white font-semibold mb-4">Tools</h3>
          <div className="flex flex-wrap gap-4">
            {filteredSkills.tools.skills.map(skill => (
              <SkillCard key={skill.name} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
