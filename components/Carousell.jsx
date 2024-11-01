// "use client";
// import { MainContext } from '@/ContextAPI/MainContext';
// import { imageUrlGenerator } from '@/HelperFunctions';
// import Image from 'next/image';
// import { useRef, useEffect, useContext, useState } from 'react';
// import { FaStar } from 'react-icons/fa';

// const Carousel = () => {
//   const carouselRef = useRef(null);

//   const mainContext = useContext(MainContext)

//   // Auto-scroll function
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const maxScrollLeft = carouselRef.current.scrollWidth - carouselRef.current.clientWidth;

//       if (carouselRef.current.scrollLeft >= maxScrollLeft) {
//         // Reset to the first item when reaching the end
//         carouselRef.current.scrollTo({
//           left: 0,
//           behavior: 'smooth',
//         });
//       } else {
//         // Otherwise, keep scrolling right
//         carouselRef.current.scrollBy({
//           left: carouselRef.current.offsetWidth,
//           behavior: 'smooth',
//         });
//       }
//     }, 3000); // Adjust the time as needed (3000ms = 3 seconds)
//     console.log(mainContext?.carouselMovieArr)
//     // Clear interval on component unmount
//     return () => clearInterval(interval);
//   }, []);

//   // Manual scroll functions for left and right buttons
//   const scrollLeft = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: -carouselRef.current.offsetWidth,
//         behavior: 'smooth',
//       })
//     }
//   }

//   const scrollRight = () => {
//     if (carouselRef.current) {
//       carouselRef.current.scrollBy({
//         left: carouselRef.current.offsetWidth,
//         behavior: 'smooth',
//       })
//     }
//   }


//   return (
//     <div className="relative w-full h-[30vh] md:h-[70vh] lg:h-[90vh] overflow-hidden items-center">
//       {/* Carousel container with hidden scrollbar */}
//       <div
//         ref={carouselRef}
//         className="flex overflow-x-auto hide-scrollbar snap-x snap-mandatory scroll-smooth h-full"
//       >
//         {[...mainContext?.carouselMovieArr ?? []]?.map((item, index) => (
//           <div
//             key={index}
//             className="relative flex-shrink-0 w-full snap-center h-full "
//           >
//             {/* Item Content */}
//             <Image src={imageUrlGenerator(item?.backdrop_path)} alt={item?.title} layout='fill' objectFit='cover' className='rounded-xl ' />
//             <div className="block absolute bottom-4 ml-12 text-white text-2xl md:text-4xl lg:text-6xl font-semibold p-2 ">
//               <p className='flex'>
//                 {item?.title}
//                 <span className='text-lg md:text-2xl ml-4 md:mt-2 lg:mt-4 font-normal flex'>
//                   <FaStar className='text-yellow-400 mx-3 mt-1' />{item?.vote_average.toFixed(1)}
//                 </span>
//               </p>
//               <p className='hidden md:block text-xl font-normal w-2/3'>{item?.overview}</p>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation Buttons for Larger Screens */}
//       <div className="hidden md:flex absolute inset-0 justify-between items-center px-2">
//         <button
//           className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2"
//           onClick={scrollLeft}
//         >
//           &lt;
//         </button>
//         <button
//           className="bg-gray-700 hover:bg-gray-600 text-white rounded-full p-2"
//           onClick={scrollRight}
//         >
//           &gt;
//         </button>
//       </div>
//     </div>
//   )
// }

// export default Carousel;





// OLDER
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
      })
    }
  }

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({
        left: carouselRef.current.offsetWidth,
        behavior: 'smooth',
      })
    }
  }


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
            <div className="hidden md:block absolute bottom-4 ml-12 text-white text-4xl font-semibold p-2 ">
              {item?.title}
              <p className='text-lg font-normal w-1/3'>{item?.overview}</p>
              <p className='text-base mt-6 font-normal'>{item?.vote_average.toFixed(1)}</p>
              {/* <button className='text-sm bg-transparent border border-white p-3 rounded-lg w-40 mr-2 hover:cursor-pointer'>Add to Watch Later</button>
              <button className='text-sm bg-transparent border border-white p-3 rounded-lg w-40 ml-2'>Add to Favourites</button> */}
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
