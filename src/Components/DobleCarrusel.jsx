import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";

const VerticalCarrusel = ({ cards, direction }) => {
  const [cardSize, setCardSize] = useState(400); // Aumentar el tamaño de las tarjetas
  const carouselRef = useRef(null);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const positionRef = useRef(0);

  useEffect(() => {
    const updateCardSize = () => {
      if (carouselRef.current) {
        const firstCard = carouselRef.current.querySelector('.card');
        if (firstCard) {
          setCardSize(firstCard.offsetHeight); // Usar el alto para establecer el tamaño cuadrado
        }
      }
    };

    updateCardSize();
    window.addEventListener('resize', updateCardSize);
    return () => window.removeEventListener('resize', updateCardSize);
  }, []);

  const [cardsState] = useState([...cards, ...cards, ...cards]);

  useEffect(() => {
    let animationFrame;
    let lastTimestamp;
    const totalHeight = cardSize * cards.length;
    const duration = 30000; // 30 segundos para una rotación completa

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;

      if (!isHovered) {
        positionRef.current += (deltaTime / duration) * totalHeight * (direction === "up" ? -1 : 1);
        if (positionRef.current >= totalHeight) {
          positionRef.current -= totalHeight;
        }
        if (positionRef.current <= -totalHeight) {
          positionRef.current += totalHeight;
        }
        controls.set({ y: positionRef.current });
      }
      lastTimestamp = timestamp;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [cardSize, cards.length, controls, isHovered, direction]);

  return (
    <div 
      className="relative overflow-hidden h-[600px] flex justify-center items-center" // Reducir la altura del contenedor
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Fade effect on the top */}
      <div className="absolute top-0 left-0 right-0 h-16 z-10 bg-gradient-to-b from-[rgb(243,244,246)] to-transparent"></div>

      <motion.div
        ref={carouselRef}
        className="flex flex-col items-center"
        animate={controls}
      >
        {cardsState.map((card, index) => (
          <motion.div
            key={`${card.title}-${index}`}
            className="card w-[400px] h-[400px] md:w-[500px] md:h-[500px] p-2" // Tarjetas cuadradas y más grandes
          >
            <a href={card.link} className="group relative flex h-full items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
              <div className="absolute inset-0">
                <img 
                  src={card.image} 
                  loading="lazy" 
                  alt={card.alt} 
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-200"></div>
              </div>
              <div className="relative flex flex-col z-10 p-4">
                {card.desc && (
                  <span className="font-semibold text-xs sm:text-sm md:text-base text-gray-300">{card.desc}</span>
                )}
                <span className="text-base sm:text-lg md:text-xl font-bold text-white">{card.title}</span>
              </div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* Fade effect on the bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10 bg-gradient-to-t from-[rgb(243,244,246)] to-transparent"></div>
    </div>
  );
};

VerticalCarrusel.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
  direction: PropTypes.oneOf(["up", "down"]).isRequired,
};

const DobleCarrusel = ({ leftTitle, leftDescription, leftCards, rightTitle, rightDescription, rightCards }) => {
  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 md:mb-6">{leftTitle}</h2>
          {leftDescription && (
            <p className="mx-auto max-w-screen-md text-center text-sm sm:text-base md:text-lg text-gray-500">{leftDescription}</p>
          )}
        </div>

        <div className="flex justify-center space-x-4">
          <div className="w-1/2 max-w-lg">
            <VerticalCarrusel cards={leftCards} direction="down" />
          </div>
          <div className="w-1/2 max-w-lg">
            <VerticalCarrusel cards={rightCards} direction="up" />
          </div>
        </div>

        <div className="mt-10 md:mt-16">
          <h2 className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 md:mb-6">{rightTitle}</h2>
          {rightDescription && (
            <p className="mx-auto max-w-screen-md text-center text-sm sm:text-base md:text-lg text-gray-500">{rightDescription}</p>
          )}
        </div>
      </div>
    </div>
  );
};

DobleCarrusel.propTypes = {
  leftTitle: PropTypes.string,
  leftDescription: PropTypes.string,
  leftCards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
  rightTitle: PropTypes.string,
  rightDescription: PropTypes.string,
  rightCards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      desc: PropTypes.string,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default DobleCarrusel;
