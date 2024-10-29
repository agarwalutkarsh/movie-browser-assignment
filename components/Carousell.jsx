// components/Carousel.jsx
"use client";
import { useRef, useEffect } from 'react';

const Carousel = ({ items }) => {
  const carouselRef = useRef(null);

  // Auto-scroll function
  useEffect(() => {
    const interval = setInterval(() => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({
          left: carouselRef.current.offsetWidth,
          behavior: 'smooth',
        });
      }
    }, 3000); // Adjust the time as needed (3000ms = 3 seconds)

    // Clear interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Manual scroll functions for left and right buttons
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: -carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative w-full h-[50vh] overflow-hidden">
      {/* Carousel container with hidden scrollbar */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth h-full"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-full snap-center h-full"
          >
            {/* Item Content */}
            <div className="bg-[#0A2A2F] h-full text-white rounded-lg p-6 mx-2">
              {item}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons for Larger Screens */}
      <div className="hidden md:flex absolute inset-0 justify-between items-center px-2">
        <button 
          className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2" 
          onClick={scrollLeft}
        >
          &lt;
        </button>
        <button 
          className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2" 
          onClick={scrollRight}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Carousel;

  