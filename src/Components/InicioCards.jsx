import { useState, useEffect } from 'react';
import PropTypes from "prop-types";
import { motion, AnimatePresence } from 'framer-motion';

const InicioCards = ({ title, description, cards }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  const renderCard = (card, index) => (
    <a
      key={index}
      href={card.link}
      className="group relative flex h-80 sm:h-96 lg:h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
    >
      <div className="absolute inset-0">
        <img
          src={card.image}
          loading="lazy"
          alt={card.alt}
          className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
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
  );

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
          <div className="relative w-full h-80">
            <AnimatePresence initial={false}>
              <motion.div
                key={currentIndex}
                className="absolute w-full h-full"
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
              >
                {renderCard(cards[currentIndex], currentIndex)}
              </motion.div>
            </AnimatePresence>
            <button
              onClick={prevCard}
              className="absolute top-1/2 left-2 z-10 bg-white bg-opacity-50 rounded-full p-2"
            >
              ←
            </button>
            <button
              onClick={nextCard}
              className="absolute top-1/2 right-2 z-10 bg-white bg-opacity-50 rounded-full p-2"
            >
              →
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => renderCard(card, index))}
          </div>
        )}
      </div>
    </div>
  );
};

InicioCards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default InicioCards;