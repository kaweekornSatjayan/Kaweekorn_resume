import React, { useState, useEffect } from "react";
import activitiesData from "../../data/activities.json";

const Activities: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Auto slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000); // Auto slide every 5 seconds

    return () => clearInterval(interval);
  }, [currentIndex, isTransitioning]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === activitiesData.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? activitiesData.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const goToSlide = (index: number) => {
    if (isTransitioning || index === currentIndex) return;
    setIsTransitioning(true);
    setCurrentIndex(index);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section id="activities" className="bg-cream py-2xl md:py-4xl px-4 md:px-xl">
      <div className="max-w-container mx-auto">
        {/* Section Header */}
        <h2 className="text-2xl md:text-4xl font-bold font-serif text-primary-dark mb-xl md:mb-2xl mt-xl text-center tracking-wide">
          Activities & Volunteer Work
        </h2>

        {/* Carousel Container */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden rounded-xl md:rounded-2xl">
          {/* Sliding Container */}
          <div 
            className="flex w-full h-full transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {activitiesData.map((activity, index) => (
              <div
                key={activity.id}
                className="w-full h-full flex-shrink-0 relative"
              >
                <img
                  src={activity.img}
                  alt={activity.topic}
                  className="w-full h-full object-cover"
                />
                
                {/* Elegant Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80"></div>
                
                {/* Content Overlay - Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-lg lg:p-xl text-white">
                  <div className="max-w-3xl">
                    <h3 className="text-lg md:text-2xl lg:text-3xl font-bold font-serif mb-1 md:mb-md lg:mb-lg tracking-wide leading-tight">
                      {activity.topic}
                    </h3>
                    <p className="text-xs md:text-base lg:text-lg font-mono leading-relaxed opacity-90 font-light">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            disabled={isTransitioning}
            className="absolute left-2 md:left-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 disabled:opacity-50 text-white p-2 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          
          <button
            onClick={nextSlide}
            disabled={isTransitioning}
            className="absolute right-2 md:right-6 top-1/2 transform -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/30 disabled:opacity-50 text-white p-2 md:p-4 rounded-full transition-all duration-300 hover:scale-110 border border-white/20"
          >
            <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Elegant Dots Indicator */}
        <div className="flex justify-center mt-md md:mt-lg space-x-sm md:space-x-md">
          {activitiesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={isTransitioning}
              className={`transition-all duration-500 ease-out disabled:opacity-50 ${
                index === currentIndex
                  ? "w-6 md:w-8 h-2 md:h-2 bg-accent rounded-full"
                  : "w-2 md:w-2 h-2 md:h-2 bg-neutral-dark/40 hover:bg-neutral-dark/60 rounded-full"
              }`}
            />
          ))}
        </div>

        {/* Activity Counter with Auto-slide indicator */}
        <div className="text-center mt-sm md:mt-md">
          <span className="text-primary-dark/70 font-serif text-sm md:text-base font-light tracking-widest">
            {String(currentIndex + 1).padStart(2, '0')} / {String(activitiesData.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Activities;