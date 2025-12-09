import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js'],
      color: 'bg-blue-100 text-blue-800'
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'],
      color: 'bg-green-100 text-green-800'
    },
    {
      title: 'Tools',
      skills: ['Git', 'VS Code', 'Docker', 'AWS'],
      color: 'bg-purple-100 text-purple-800'
    }
  ];

  return (
    <section className="bg-white rounded-lg shadow-md p-xl">
      <h2 className="font-heading text-3xl font-bold text-text-primary mb-gutter border-b-2 border-secondary pb-2">
        Technical Skills
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
        {skillCategories.map((category, index) => (
          <div key={index}>
            <h3 className="font-heading text-xl font-semibold text-text-primary mb-4">
              {category.title}
            </h3>
            <div className="space-y-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className={`inline-block ${category.color} font-mono px-3 py-1 rounded-full text-sm mr-2 mb-2`}
                >
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

export default Skills;