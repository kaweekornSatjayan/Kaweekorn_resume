import React from "react";

const About: React.FC = () => {
  return (
    <section className="bg-cream py-xl px-4 md:px-xl">
      <div className="max-w-container mx-auto">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center justify-center max-w-4xl mx-auto">
        <div className="text text-center">
          <h2 className="font-heading text-5xl font-bold text-text-primary mb-gutter pb-2 relative">
            Hello , I'm <br></br>
            Kaweekorn Satjayan
          </h2>
          <h4 className="font-mono text-l font-medium text-navy">
            Computer Engineer | Chulalongkorn University
          </h4>
          <h3 className="font-mono text-xl font-medium text-navy">
            The boundary of the impossible <br></br> is merely a design problem awaiting its
            solution.
          </h3>
        </div>
        <div className="photo">
          <img 
            src="/images/me.jpg" 
            alt="Profile" 
            className="w-64 h-64 border-2 border-bronze rounded-lg object-cover"
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default About;