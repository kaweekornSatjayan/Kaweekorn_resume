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
    <section id="archive" className="bg-cream py-4 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-serif text-primary-dark mb-2xl mt-2xl text-center py-4">
          The Archive
        </h2>

        <div className="space-y-xl">
          {archiveData.map((item: ArchiveItem, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={item.id}
                className={`flex flex-col md:flex-row items-center justify-center gap-8 bg-cream rounded-lg px-2xl py-3xl ${
                  !isEven ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="flex-1 flex justify-center">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-[300px] object-contain rounded-lg"
                  />
                </div>

                <div className="flex-1 text-center space-y-2xl">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-extrabold font-serif text-primary-dark">
                    {item.title}
                  </h3>

                  <p className="text-sm md:text-base lg:text-lg text-neutral-dark leading-relaxed font-mono mb-lg">
                    {item.shortDescription}
                  </p>
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
