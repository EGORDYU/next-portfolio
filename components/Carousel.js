import React, { useState, useEffect } from 'react';

const images = [
  '/egor1.jpg',
  '/egor2.jpg',
  '/egor3.jpg',
  '/egor4.jpg',

];

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-xl h-auto rounded-lg shadow-lg">
      <img src={images[currentImageIndex]} alt="Egor Dyuzhev" className="w-auto h-auto rounded-lg shadow-lg" />
    </div>
  );
};

export default ImageCarousel;
