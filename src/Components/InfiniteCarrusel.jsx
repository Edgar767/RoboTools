import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const InfiniteCarousel = ({ cards, autoPause = true }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardHover = (id) => {
    setSelectedCard(id);
  };

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      .slider {
        width: 100%;
        overflow: hidden;
        position: relative;
      }

      .slide-track {
        display: flex;
        width: calc(400px * ${cards.length});
        animation: scroll 20s linear infinite;
      }

      @keyframes scroll {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(calc(-400px * ${cards.length / 2}));
        }
      }

      .slide {
        flex: 0 0 auto;
        width: 400px;
        height: 300px;
        margin-right: 10px;
        border: 0;
        box-sizing: border-box;
        position: relative;
        overflow: hidden;
        border-radius: 12px;
      }

      .slide img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 12px;
        transition: filter 200ms linear;
      }

      .slide::before {
        content: '';
        position: absolute;
        inset: 0;
        background: linear-gradient(to top, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0) 60%);
        opacity: 0.5;
        transition: opacity 200ms ease-in-out;
        z-index: 1;
        border-radius: 12px;
      }

      .slide:hover::before {
        opacity: 0.75;
      }

      .slide.blur-hover img {
        filter: brightness(0.5) saturate(0) contrast(1.2) blur(20px);
      }

      .slide:hover img {
        filter: brightness(1.1) saturate(1.2) contrast(0.85);
      }

      .paused {
        animation-play-state: paused;
      }

      .slide-content {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 10px;
        z-index: 2;
        border-radius: 0 0 12px 12px;
      }

      .slide-title {
        color: white;
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0;
        transition: transform 200ms ease-in-out;
      }

      .slide:hover .slide-title {
        transform: translateY(-5px);
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, [cards.length]);

  const repeatedCards = [...cards, ...cards];

  return (
    <div 
      className="slider" 
      onMouseEnter={() => autoPause && setIsPaused(true)} 
      onMouseLeave={() => autoPause && setIsPaused(false)}
    >
      <div className={`slide-track ${isPaused ? 'paused' : ''}`}>
        {repeatedCards.map((card, index) => (
          <div 
            className={`slide ${selectedCard !== null && selectedCard !== card.id ? 'blur-hover' : ''}`} 
            key={`${card.id}-${index}`}
            onMouseEnter={() => handleCardHover(card.id)}
            onMouseLeave={() => handleCardHover(null)}
          >
            <img src={card.image} alt={card.title} />
            <div className="slide-content">
              <h3 className="slide-title">{card.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

InfiniteCarousel.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  autoPause: PropTypes.bool,
};

export default InfiniteCarousel;
