import { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { motion, useAnimation } from "framer-motion";

const InfiniteCarrusel = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);
  const progressRef = useRef(0);

  const handleCardHover = (id) => {
    setSelectedCard(id);
  };

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

  const cardWidth = 400; // Ancho fijo de la tarjeta
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

  const cardStyles = `
    .cards {
      width: 400px;
      height: 300px;
      margin-right: 10px;
      border: 0;
      box-sizing: border-box;
      position: relative;
      overflow: hidden;
      border-radius: 12px;
    }

    .cards img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: 12px;
      transition: filter 200ms linear;
    }

    .cards::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0) 60%);
      opacity: 0.5;
      transition: opacity 200ms ease-in-out;
      z-index: 1;
      border-radius: 12px;
    }

    .cards:hover::before {
      opacity: 0.75;
    }

    .cards.blur-hover img {
      filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
    }

    .cards:hover img {
      filter: brightness(1.1) saturate(1.2) contrast(0.85);
    }

    .cards-content {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 10px;
      z-index: 2;
      border-radius: 0 0 12px 12px;
    }

    .cards-title {
      color: white;
      font-size: 1.2rem;
      font-weight: bold;
      margin: 0;
      transition: transform 200ms ease-in-out;
    }

    .cards:hover .cards-title {
      transform: translateY(-5px);
    }
  `;

  return (
    <>
      <style>{cardStyles}</style>
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
              className={`cards ${selectedCard !== null && selectedCard !== card.id ? 'blur-hover' : ''}`}
              key={`${card.id}-${index}`}
              onMouseEnter={() => handleCardHover(card.id)}
              onMouseLeave={() => handleCardHover(null)}
              style={{ width: `${cardWidth}px`, flexShrink: 0 }}
            >
              <img src={card.image} alt={card.title} />
              <div className="cards-content">
                <h3 className="cards-title">{card.title}</h3>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

InfiniteCarrusel.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default InfiniteCarrusel;
