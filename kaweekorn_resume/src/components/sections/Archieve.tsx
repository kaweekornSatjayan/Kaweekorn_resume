import React from "react";
import archiveData from "../../data/archive.json";

interface ArchiveItem {
  id: number;
  img: string;
  title: string;
  shortDescription: string;
  track: string[];
}

const Archieve: React.FC = () => {
  return (
    <section className="bg-cream py-12xl px-xl">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <h2 className="text-4xl font-bold font-serif text-primary-dark mb-2xl mt-2xl text-center py-4">
          The Archive
        </h2>

        {/* Archive Items */}
        <div className="space-y-xl">
          {archiveData.map((item: ArchiveItem, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row items-start gap-8 bg-cream rounded-lg px-2xl py-3xl hover:shadow-md transition-shadow duration-300 ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className="flex-1">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[300px] object-contain rounded-lg"
                  />
                </div>

                {/* Content */}
                <div className={`flex-1 space-y-2xl ${!isEven ? "text-right" : "text-left"}`}>
                  {/* Title */}
                  <h3 className="text-3xl font-extrabold font-serif text-primary-dark">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-dark leading-relaxed font-mono mb-lg">
                    {item.shortDescription}
                  </p>

                  {/* Track Tags */}
                  <div className={`flex flex-wrap gap-sm font-mono ${!isEven ? "justify-end" : "justify-start"}`}>
                    {item.track.map((tag, index) => (
                      <span
                        key={index}
                        className="px-sm py-xs text-xs font-medium bg-accent text-white rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Archieve;
