import React from 'react';

interface ContactLink {
  name: string;
  url: string;
}

const Contact: React.FC = () => {
  const contactLinks: ContactLink[] = [
    {
      name: "ksatjayan@gmail.com",
      url: "mailto:satjayan@gmail.com"
    },
    {
       name: "line",
      url: "https://line.me/ti/p/3ocf9ht4ru"
    },
    {
      name: "facebook",
      url: "https://www.facebook.com/1kaweekron"
    },
    {
      name: "instagram",
      url: "https://www.instagram.com/kavkorn/#"
    },
    {
      name: "Github",
      url: "https://github.com/kaweekornSatjayan"
    }
  ];

  return (
    <section id="contact" className="py-3xl px-lg bg-cream">
      <div className="container mx-auto max-w-6xl text-center">
        {/* Main Heading */}
        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl  text-primary-dark mb-xl">
          Ready to build something great?
        </h2>
        
        {/* Contact Links */}
        <div className="flex flex-wrap justify-center items-center gap-x-sm gap-y-md text-lg md:text-xl lg:text-2xl text-black">
          {contactLinks.map((link, index) => (
            <React.Fragment key={index}>
              <a 
                href={link.url}
                className="font-mono text-black hover:underline transition-all duration-200 hover:text-gray-600"
                target={link.name.includes('@') ? undefined : "_blank"}
                rel={link.name.includes('@') ? undefined : "noopener noreferrer"}
              >
                {link.name}
              </a>
              {index < contactLinks.length - 1 && (
                <span className="text-black">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Contact;