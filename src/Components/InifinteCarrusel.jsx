import React, { useState } from 'react';

const InfiniteCarrusel = () => {
  const [isPaused, setIsPaused] = useState(false);

  const images = [
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
    "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png"
  ];

  return (
    <div 
      className="slider" 
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className={`slide-track ${isPaused ? 'paused' : ''}`}>
        {images.concat(images).map((src, index) => (
          <div className="slide" key={index}>
            <img src={src} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfiniteCarrusel;
