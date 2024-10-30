// components/Carousel.jsx
"use client";
import { MainContext } from '@/ContextAPI/MainContext';
import { imageUrlGenerator } from '@/HelperFunctions';
import Image from 'next/image';
import { useRef, useEffect, useContext, useState } from 'react';

const Carousel = () => {
  const carouselRef = useRef(null);

  const mainContext = useContext(MainContext)
  const [carouselNumber, setCarouselNumber] = useState(1)

  // Auto-scroll function
  useEffect(() => {
    const interval = setInterval(() => {
      const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

      if (carouselRef.current.scrollLeft >= maxScrollLeft) {
        // Reset to the first item when reaching the end
        carouselRef.current.scrollTo({
          left: 0,
          behavior: 'smooth',
        });
      } else {
        // Otherwise, keep scrolling right
        carouselRef.current.scrollBy({
          left: carouselRef.current.offsetWidth,
          behavior: 'smooth',
        });
      }
    }, 3000); // Adjust the time as needed (3000ms = 3 seconds)
    console.log(mainContext?.carouselMovieArr)
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
    <div className="relative w-full h-[70vh] overflow-hidden items-center">
      {/* Carousel container with hidden scrollbar */}
      <div
        ref={carouselRef}
        className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth h-full"
      >
        {[...mainContext?.carouselMovieArr ?? []]?.map((item, index) => (
          <div
            key={index}
            className="relative flex-shrink-0 w-full snap-center h-full"
          >
            {/* Item Content */}
            <Image src={imageUrlGenerator(item?.backdrop_path)} alt={item?.title} layout='fill' objectFit='cover' className='rounded-xl ' />
            <div className="hidden md:block absolute bottom-28 ml-12 text-white text-4xl font-semibold p-2 ">
              {item?.title}
              <p className='text-xl font-normal w-1/3'>{item?.overview}</p>
              <p className='text-xl mt-6 font-normal'>{item?.vote_average.toFixed(1)}</p>
              <button className='text-sm bg-transparent border border-white p-3 rounded-lg w-40 mr-2 hover:cursor-pointer'>Add to Watch Later</button>
              <button className='text-sm bg-transparent border border-white p-3 rounded-lg w-40 ml-2'>Add to Favourites</button>
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

