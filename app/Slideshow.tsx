'use client';

import { useEffect, useState } from 'react';

const images = [
  '/slideshow/img1.jpeg',
  '/slideshow/img2.jpeg',
  '/slideshow/img3.jpeg',
  '/slideshow/img4.jpeg',
  '/slideshow/img5.jpeg',
];


export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-black overflow-hidden">
      <div
        className="flex transition-transform duration-1000"
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {images.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Background ${idx}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
}
