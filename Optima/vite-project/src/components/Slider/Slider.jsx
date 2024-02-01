//import React from 'react';
import './Slider.css'; // Стили для Slider

const Slider = () => {
  // Предположим, что изображения загружаются из JSON файла
  const images = [
    { id: 1, src: 'image1.jpg', alt: 'Image 1' },
    { id: 2, src: 'image2.jpg', alt: 'Image 2' },
    // Другие изображения
  ];

  return (
    <div className="slider">
      {images.map((image) => (
        <img key={image.id} src={image.src} alt={image.alt} />
      ))}
    </div>
  );
}

export default Slider;