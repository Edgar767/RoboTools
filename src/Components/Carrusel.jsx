import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Carrusel = ({ images, title, title2Texts }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const typeText = () => {
      const currentText = title2Texts[currentTextIndex];
      const updatedText = isDeleting
        ? currentText.substring(0, displayedText.length - 1)
        : currentText.substring(0, displayedText.length + 1);

      setDisplayedText(updatedText);

      if (!isDeleting && updatedText === currentText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % title2Texts.length);
      }
    };

    const typingSpeed = isDeleting ? 75 : 150;
    const timeoutId = setTimeout(typeText, typingSpeed);

    return () => clearTimeout(timeoutId);
  }, [displayedText, isDeleting, currentTextIndex, title2Texts]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prevState) => !prevState);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full" style={{ marginTop: '-5rem', minHeight: '120vh' }}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <img 
            src={image} 
            alt={`Carrusel ${index + 1}`} 
            className="h-full w-full object-cover"
            loading={index === 0 ? 'eager' : 'lazy'}
          />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-4 md:px-8">
        {/* Mobile layout */}
        <div className="sm:hidden text-center flex flex-col items-center justify-center h-full" style={{ marginTop: '-20%' }}>
          <h1 className="text-3xl font-extrabold mb-2">{title}</h1>
          <div className="text-container relative flex items-center justify-center">
            <h2 className="text-5xl font-extrabold animate-typing">{displayedText}</h2>
            <div className={`h-12 bg-white w-1 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></div>
          </div>
        </div>
        
        {/* Desktop layout */}
        <div className="hidden sm:block w-full h-full relative">
          <h1 className="text-4xl font-extrabold md:text-5xl lg:text-6xl lg:font-extrabold absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">{title}</h1>
          <div className="text-container absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center">
            <h2 className="text-5xl font-extrabold animate-typing md:text-6xl lg:text-8xl lg:font-extrabold">{displayedText}</h2>
            <div className={`h-12 md:h-16 lg:h-20 bg-white w-1 ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}></div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[rgb(243,244,246)] to-transparent z-20"></div>
    </div>
  );
};

Carrusel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string,
  title2Texts: PropTypes.arrayOf(PropTypes.string),
};

export default Carrusel;