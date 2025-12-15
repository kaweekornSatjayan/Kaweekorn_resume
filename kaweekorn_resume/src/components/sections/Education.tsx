import React from 'react';

interface EducationItem {
  period: string;
  institution: string;
  location: string;
  degree: string;
  description?: string;
}

interface CertificationItem {
  title: string;
  courses: string[];
}

const Education: React.FC = () => {
  const educationData: EducationItem[] = [
    {
      period: "2025-Present",
      institution: "Chulalongkorn University",
      location: "Bangkok, Thailand",
      degree: "Bachelor of Engineering Program in Computer Engineering and Digital Technology",
      description: "Expected graduation: 2029"
    },
    {
      period: "2022-2024",
      institution: "Demonstration school of Khonkaen university",
      location: "Khonkaen, Thailand",
      degree: "Science Classrooms in University-Affiliated School Project (SCIUS)"
    }
  ];

  const certificationsData: CertificationItem[] = [
    {
      title: "CU MOOC Flexi",
      courses: [
        "Programming With JavaScript",
        "Web page Authoring with HTML and CSS", 
        "Data for Everyone",
        "Learn Python: Language Basics and Fundamental Data Processing",
        "Database Management with SQL",
        "Getting to Know AI and ML",
        "Knowing Computers and Digital System",
        "Crunching data with Pandas"
      ]
    }
  ];

  return (
    <section id="education" className="py-3xl px-lg bg-cream">
      <div className=" mx-auto max-w-6xl">
        {/* Education Section */}
        <div className="mb-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading text-primary-dark mb-xl text-center">
            Education
          </h2>
          
          <div className="space-y-xl">
            {educationData.map((item, index) => (
              <div key={index} className="border-2 border-dashed border-primary-dark p-lg md:p-xl">
                <div className="grid md:grid-cols-3 gap-lg items-start text-center md:text-left">
                  <div className="md:col-span-1">
                    <div className="text-base md:text-lg xl:text-xl font-bold font-mono  text-primary-dark mb-sm">
                      {item.period}
                    </div>
                    {item.description && (
                      <div className="text-xs md:text-sm font-mono text-gray-600">
                        {item.description}
                      </div>
                    )}
                  </div>
                  
                  <div className="md:col-span-2">
                    <h3 className="text-lg md:text-xl xl:text-2xl font-heading font-bold font-serif text-primary-dark mb-sm">
                      {item.institution}
                    </h3>
                    <p className="text-sm md:text-base xl:text-lg font-mono text-gray-700 mb-sm">
                      {item.location}
                    </p>
                    <p className="text-sm md:text-base xl:text-lg font-mono text-primary-dark font-medium">
                      {item.degree}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-serif text-primary-dark mb-xl text-center">
            Certifications
          </h2>
          
          <div className="space-y-xl">
            {certificationsData.map((certification, index) => (
              <div key={index} className="border-2 border-dashed border-primary-dark p-lg md:p-xl">
                <h3 className="text-lg md:text-xl xl:text-2xl font-bold font-serif text-primary-dark mb-lg text-center md:text-left">
                  {certification.title}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-md text-center md:text-left">
                  {certification.courses.map((course, courseIndex) => (
                    <div key={courseIndex} className="flex items-start justify-center md:justify-start">
                      <span className="text-primary-dark mr-sm">•</span>
                      <span className=" font-mono text-sm md:text-base xl:text-lg text-gray-700">
                        {course}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;