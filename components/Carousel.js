import React from 'react';

const images = [
  '/egor1.jpg',
  '/egor2.jpg',
  '/egor3.jpg',
  '/egor4.jpg',
];

const ImageGallery = () => {
  return (
    <div className="grid grid-cols-2 gap-4 w-100 max-w-xl">
      {images.map((image, index) => (
        <div key={index} className="w-full h-52 rounded-lg overflow-hidden shadow-lg">
          <img src={image} alt={`Egor Dyuzhev ${index + 1}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
