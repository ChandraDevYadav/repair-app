import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const images = [
  './team_member_1.png',
  './team_member_2.png',
  './team_member_3.png',
  './team_member_4.png',
];

const ImageSlider = () => {
  const sliderRef = useRef();
  const tl = useRef();

  useEffect(() => {
    tl.current = gsap.timeline({ repeat: -1, defaults: { duration: 1, ease: 'power1.inOut' } });
    
    // Slide animations
    images.forEach((_, index) => {
      tl.current.to(sliderRef.current, {
        x: `-${index * 100}%`,
      }, `+=2`); // Keep each slide on screen for 2 seconds
    });
  }, []);

  return (
    <div className="relative overflow-hidden w-full h-96">
      <div
        ref={sliderRef}
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ width: `${images.length * 100}%` }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0"
            style={{ width: `${100 / images.length}%` }}
          >
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
