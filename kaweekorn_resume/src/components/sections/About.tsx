import React from 'react';

const About: React.FC = () => {
  return (
    <section className="bg-white rounded-lg shadow-md p-xl">
      <h2 className="font-heading text-3xl font-bold text-text-primary mb-gutter border-b-2 border-secondary pb-2">
        About Me
      </h2>
      <p className="font-body text-text-secondary leading-relaxed text-lg">
        Passionate developer with experience in modern web technologies. 
        I love creating efficient, scalable solutions and learning new technologies.
        My goal is to build applications that make a positive impact on users' lives.
      </p>
    </section>
  );
};

export default About;