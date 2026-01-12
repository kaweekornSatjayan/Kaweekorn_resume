import React from "react";

// ข้อมูลผลงานทั้งหมดใน section นี้
const uxuiProjects = [
  {
    images: [
      "/Kaweekorn_resume/images/uxui/AI1.png",
      "/Kaweekorn_resume/images/uxui/AI2.png",
      "/Kaweekorn_resume/images/uxui/AI3.png",
      "/Kaweekorn_resume/images/uxui/AI4.png",
    ],
    topic: "Deepfake Detector Web App UX/UI Design",
    subTopic: "Samsung × KBTG Digital Fraud Cybersecurity Hackathon",
    concept:
      "This design emphasizes a high-tech and modern look while maintaining simplicity and accessibility. Since the primary target group is older adults, the UI is designed to be clean and easy to use, with a UX that truly meets their needs. A loading page is included during processing to reduce any sense of discomfort while waiting."
  },
  {
    images: [
      "/Kaweekorn_resume/images/uxui/jerseyup.jpg",
      "/Kaweekorn_resume/images/uxui/jerseydown.jpg"
    ],
    topic: "Staff jersey design",
    subTopic: "Comsampan 2025",
    concept:
      `In this project, I was assigned as the staff shirt designer—my first time working on a design from an official brief, which was both challenging and exciting. I began by using the event’s CI colors and placing the logo at the center to emphasize uniqueness. The back features the word 'staff' to clearly indicate the role, while the shirt’s alternating color pattern adds visual interest. Beyond the graphic design, I also selected the fabric type and texture to ensure maximum comfort for wearers. <br /><br />
<b>This experience made me realize that designing a shirt is much like UX/UI design: it’s not just about aesthetics, but also about creating a great user experience.</b>`
  },
  {
    images: [
      "/Kaweekorn_resume/images/uxui/GON1.png",
      "/Kaweekorn_resume/images/uxui/GON2.png",
      "/Kaweekorn_resume/images/uxui/GON3.png"
    ],
    topic: "Gon Go Home",
    subTopic: "Chulalongkorn case discovery 2025",
    concept:
      " This project was my first time seriously using Figma to create a mockup. For the logo design, I chose a mascot for the front, while the back features a house shape along with a spatula and ladle to represent our product—a meal kit. The UI focuses on cleanliness and clarity, with colors that align with the company’s branding."
  }
];

const UXUIWorks: React.FC = () => {
  return (
    <section className="py-12" id="uxui-works">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">UX/UI Works</h2>
        <div className="flex flex-col gap-16">
          {uxuiProjects.map((project, i) => (
            <div key={i} className="flex flex-col md:flex-row gap-8 md:items-start items-center">
              {/* รูปภาพฝั่งซ้าย */}
              {project.images.length === 4 ? (
                <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full md:w-1/2 md:justify-center md:items-center flex md:flex-none">
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`UXUI work ${idx + 1}`}
                      className="w-full h-40 object-cover rounded shadow"
                    />
                  ))}
                </div>
              ) : project.images.length === 3 ? (
                <div className="flex flex-row gap-4 w-full md:w-1/2 md:justify-center md:items-center flex md:flex-none overflow-x-auto">
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Gon Go Home poster ${idx + 1}`}
                      className="w-full h-auto object-cover rounded shadow max-w-[180px] md:max-w-md md:h-[28rem] md:max-h-none"
                    />
                  ))}
                </div>
              ) : (
                <div className="flex flex-col gap-4 w-full md:w-1/2 justify-center items-center md:justify-center md:items-center flex md:flex-none">
                  {project.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={img}
                      alt={`Shirt design ${idx + 1}`}
                      className="w-full h-auto object-cover rounded shadow max-w-xs md:max-w-full md:w-full md:h-[20rem] md:max-h-none"
                    />
                  ))}
                </div>
              )}
              {/* ข้อความฝั่งขวา */}
              <div className="w-full md:w-1/2 flex flex-col justify-center md:items-start items-center text-left">
                <h3 className="text-2xl font-semibold mb-2">{project.topic}</h3>
                <h4 className="text-lg font-medium text-gray-600 mb-4">{project.subTopic}</h4>
                {project.topic === "Staff jersey design" || project.topic === "staff jersey design" ? (
                  <p className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: project.concept }} />
                ) : (
                  <>
                    <p className="text-gray-700 text-lg leading-relaxed mb-4">{project.concept}</p>
                    {project.topic === "Deepfake Detector Web App UX/UI Design" && (
                      <a
                        href="https://deep-guard-detector.vercel.app/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-2 rounded bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition text-center w-fit"
                        style={{marginTop: '8px'}}
                      >
                        Try here
                      </a>
                    )}
                    {project.topic === "Gon Go Home" && (
                      <a
                        href="https://www.figma.com/proto/jYs5cUxbBTUGqMfOxG18KX/GON-GO-HOME?node-id=1-5&p=f&t=N52p0rwZDfT17JVo-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A4&starting-point-node-id=1%3A5&show-proto-sidebar=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-5 py-2 rounded bg-gray-200 text-gray-800 font-medium hover:bg-gray-300 transition text-center w-fit"
                        style={{marginTop: '8px'}}
                      >
                        Try mock up here
                      </a>
                    )}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UXUIWorks;
