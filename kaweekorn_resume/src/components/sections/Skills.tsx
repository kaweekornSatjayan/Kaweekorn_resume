import React from 'react';

const Skills: React.FC = () => {
  const skillData = {
    "Programming Languages": [
      "JavaScript", "HTML5", "C++", "C", "Python", "Node.js"
    ],
    "Frameworks & Libraries": [
      "React", "Next.js", "Tailwind CSS", "REST API", "Express.js"
    ],
    "Tools & Platforms": [
      "Git/GitHub", "Figma", "Docker", "AWS/GCP", "MongoDB", "Mongoose"
    ],
    "Language Proficiency": [
      "Thai (Native)", "English (Professional Working Proficiency)", "Chinese (beginner)"
    ]
  };

  return (
    <section className="bg-white  md:px-xl">
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <div className="text-center mb-4xl">
          <h2 className="text-3xl md:text-5xl font-bold font-serif text-primary-dark mb-xl tracking-wide">
            Skills & Expertise
          </h2>
          <div className="w-16 h-px bg-primary-dark mx-auto"></div>
        </div>

        {/* Skills Grid */}
        <div className="space-y-3xl max-w-4xl mx-auto">
          {Object.entries(skillData).map(([category, skills], index) => (
            <div key={index} className="text-center py-xl">
              {/* Category Title */}
              <h3 className="text-xl md:text-2xl font-bold font-serif text-primary-dark mb-xl">
                {category}
              </h3>
              
              {/* Skills List */}
              <div className="font-mono text-sm md:text-base text-primary-dark/80 leading-loose max-w-3xl mx-auto">
                {skills.map((skill, skillIndex) => (
                  <span key={skillIndex}>
                    {skill}
                    {skillIndex < skills.length - 1 && (
                      <span className="mx-xl text-primary-dark/40">|</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;