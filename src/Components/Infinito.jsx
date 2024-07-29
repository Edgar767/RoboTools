import { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { motion, useAnimation } from "framer-motion";

const Infinito = ({ title, description, cards }) => {
  const [containerWidth, setContainerWidth] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const progressRef = useRef(0);

  useEffect(() => {
    const updateWidths = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidths();
    window.addEventListener('resize', updateWidths);
    return () => window.removeEventListener('resize', updateWidths);
  }, []);

  const cardWidth = containerWidth / (window.innerWidth < 640 ? 1 : 3); // Una tarjeta en móvil, tres en desktop
  const totalWidth = cardWidth * cards.length;

  useEffect(() => {
    let animationFrame;
    const duration = 70000; // 70 segundos para una rotación completa
    let lastTimestamp;

    const animate = (timestamp) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      
      if (!isHovered && containerWidth > 0) {
        progressRef.current += deltaTime / duration;
        if (progressRef.current >= 1) {
          progressRef.current -= 1;
        }
        const x = -(progressRef.current * totalWidth);
        controls.set({ x });
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
  }, [controls, isHovered, containerWidth, totalWidth]);

  const [cardsState] = useState([...cards, ...cards, ...cards]);

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
          ref={containerRef}
          className="relative overflow-hidden"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div
            ref={carouselRef}
            className="flex"
            animate={controls}
            style={{ width: `${totalWidth * 3}px` }}
          >
            {cardsState.map((card, index) => (
              <div
                key={`${card.title}-${index}`}
                className="card w-full sm:w-1/2 lg:w-1/3 flex-shrink-0 flex-grow-0 px-3"
                style={{ width: `${cardWidth}px` }}
              >
                <a href={card.link} className="group relative flex h-64 sm:h-72 lg:h-80 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg">
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
              </div>
            ))}
          </motion.div>
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
