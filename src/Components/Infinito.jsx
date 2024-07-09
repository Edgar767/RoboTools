import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";

const Infinito = ({ title, description, cards }) => {
  const [cardWidth, setCardWidth] = useState(300);
  const carouselRef = useRef(null);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const positionRef = useRef(0);

  useEffect(() => {
    const updateCardWidth = () => {
      if (carouselRef.current) {
        const firstCard = carouselRef.current.querySelector('.card');
        if (firstCard) {
          setCardWidth(firstCard.offsetWidth);
        }
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  const [cardsState] = useState([...cards, ...cards, ...cards]);

  useEffect(() => {
    let animationFrame;
    let lastTimestamp;
    const totalWidth = cardWidth * cards.length;
    const duration = 70000; // 70 segundos para una rotación completa

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;

      if (!isHovered) {
        positionRef.current += (deltaTime / duration) * totalWidth;
        if (positionRef.current >= totalWidth) {
          positionRef.current -= totalWidth;
        }
        controls.set({ x: -positionRef.current });
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
  }, [cardWidth, cards.length, controls, isHovered]);

  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 md:mb-6">{title}</h2>
          {description && (
            <p className="mx-auto max-w-screen-md text-center text-sm sm:text-base md:text-lg text-gray-500">{description}</p>
          )}
        </div>

        <div 
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Fade effect on the left */}
          <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-[rgb(243,244,246)] to-transparent"></div>
          
          <motion.div
            ref={carouselRef}
            className="flex"
            animate={controls}
          >
            {cardsState.map((card, index) => (
              <motion.div
                key={`${card.title}-${index}`}
                className="card min-w-[300px] md:min-w-[400px] h-64 sm:h-72 lg:h-96 p-2 md:p-4"
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

          {/* Fade effect on the right */}
          <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-[rgb(243,244,246)] to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

Infinito.propTypes = {
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

export default Infinito;