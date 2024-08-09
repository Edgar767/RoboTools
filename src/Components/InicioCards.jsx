import { useState, useEffect, useRef } from 'react';
import PropTypes from "prop-types";
import { motion, AnimatePresence } from 'framer-motion';
import { debounce } from 'lodash';

const InicioCards = ({ title, description, cards }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const containerRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const handleResize = debounce(() => {
      setIsMobile(window.innerWidth < 640);
    }, 200);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextCard = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const threshold = 50;
    if (touchStartX.current - touchEndX.current > threshold) {
      nextCard();
    } else if (touchStartX.current - touchEndX.current < -threshold) {
      prevCard();
    }
  };

  const renderCard = (card, index) => (
    <div key={index} className={`w-full sm:w-1/2 lg:w-1/3 px-3 mb-6 ${card.title === "Capacitación" ? 'self-center' : ''}`}>
      <a
        href={card.link}
        className={`group relative flex h-72 sm:h-96 lg:h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg`}
        aria-label={card.title}
      >
        <div className="absolute inset-0">
          <img
            src={card.image}
            loading="lazy"
            alt={card.alt}
            className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
            style={{ minHeight: '100%', minWidth: '100%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-200"></div>
        </div>
        <div className="relative flex flex-col z-10">
          {card.desc && (
            <span className="font-semibold text-xs sm:text-sm md:text-base text-gray-300">{card.desc}</span>
          )}
          <span className="text-base sm:text-lg md:text-xl font-bold text-white">{card.title}</span>
        </div>
      </a>
    </div>
  );

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1]
      }
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1]
      }
    },
    exit: (direction) => ({
      x: direction > 0 ? '-100%' : '100%',
      opacity: 0,
      transition: {
        type: 'tween',
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1]
      }
    })
  };

  const getGridClasses = () => {
    if (cards.length === 1) {
      return 'flex justify-center';
    } else if (cards.length === 2) {
      return 'flex flex-wrap justify-center sm:justify-center';
    } else {
      return 'flex flex-wrap justify-center -mx-3';
    }
  };

  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 md:mb-6">{title}</h2>
          {description && (
            <p className="mx-auto max-w-screen-md text-center text-sm sm:text-base md:text-lg text-gray-500">{description}</p>
          )}
        </div>

        {isMobile ? (
          <div
            className="relative w-full h-72 overflow-hidden"
            ref={containerRef}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                className="absolute w-full h-full"
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{ position: 'absolute', width: '100%', height: '100%' }}
              >
                {renderCard(cards[currentIndex], currentIndex)}
              </motion.div>
            </AnimatePresence>
            <div
              className="absolute inset-y-0 left-0 flex items-center pl-3 cursor-pointer"
              onClick={prevCard}
            >
              <div className="w-12 h-12 md:w-12 md:h-12 bg-white bg-opacity-50 hover:bg-opacity-75 flex justify-center items-center rounded-full">
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"></path>
                </svg>
              </div>
            </div>
            <div
              className="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
              onClick={nextCard}
            >
              <div className="w-12 h-12 md:w-12 md:h-12 bg-white bg-opacity-50 hover:bg-opacity-75 flex justify-center items-center rounded-full">
                <svg
                  className="w-6 h-6 text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <div className={getGridClasses()}>
            {cards.map((card, index) => renderCard(card, index))}
          </div>
        )}
      </div>
    </div>
  );
};

InicioCards.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default InicioCards;
