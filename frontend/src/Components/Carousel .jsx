import React, { useState } from 'react';

const Carousel = () => {
  const slides = [
    {
      url: 'drop2.jpg',
      caption: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quod corrupti hic alias dolor sapiente soluta ab? Eligendi obcaecati impedit iste amet voluptatum.',
    },
    {
        url: 'bottle.jpeg',
        caption: 'Slide 3',
      },
  
    {
      url: 'drop.jpg',
      caption: 'Slide 2',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full">
              <img src={slide.url} alt={slide.caption} className="w-full h-full object-cover" />
              <div className="text-center  text-white py-2">{slide.caption}</div>
            </div>
          ))}
        </div>
      </div>
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full"
      >
        &lt;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-full"
      >
        &gt;
      </button>
    </div>
  );
};

export default Carousel;
