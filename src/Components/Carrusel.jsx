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
    }, 5000); // Cambia cada 5 segundos

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
        setTimeout(() => setIsDeleting(true), 2000); // Espera 2 segundos antes de borrar
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
      setShowCursor((prevState) => !prevState); // Alternar el estado de mostrar/ocultar el cursor
    }, 500); // Cambia cada 0.5 segundos

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <div className="relative overflow-hidden w-full" style={{ marginTop: '-5rem', minHeight: '120vh' }}>
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Filtro oscuro */}
          <img src={image} alt={`Carrusel ${index + 1}`} className="h-full w-full object-cover" />
        </div>
      ))}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 space-y-4 px-4 md:px-8">
        <h1 className="text-3xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl lg:font-extrabold" style={{ position: 'absolute', top: '35%', left: '50%', transform: 'translate(-50%, -50%)' }}>{title}</h1>
        <div className="text-container relative flex items-center">
          <h2 className="text-lg font-extrabold animate-typing sm:text-2xl md:text-4xl lg:text-8xl lg:font-extrabold">{displayedText}</h2>
          <div className={`h-full bg-white w-1 ${showCursor ? 'block' : 'hidden'}`}></div> {/* Barra vertical */}
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent z-20"></div> {/* Desvanecimiento blanco */}
    </div>
  );
};

Carrusel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  title: PropTypes.string.isRequired,
  title2Texts: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Carrusel;
