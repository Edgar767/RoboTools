import React, { useState, useEffect } from 'react';

function InfiniteCarrusel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselItems = [
    {
      imageUrl: 'https://picsum.photos/200/300',
      title: 'Slide 1',
    },
    {
      imageUrl: 'https://picsum.photos/200/301',
      title: 'Slide 2',
    },
    {
      imageUrl: 'https://picsum.photos/200/302',
      title: 'Slide 3',
    },
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (currentIndex < carouselItems.length - 1) {
        setCurrentIndex((prevState) => prevState + 1);
      } else {
        setCurrentIndex(0);
      }
    }, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  return (
    <div className="carousel-container">
      <div
        className="carousel"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {carouselItems.map((item, index) => (
          <div key={index} className="carousel-item">
            <img src={item.imageUrl} alt={item.title} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default InfiniteCarrusel;