import { useState } from 'react';
import PropTypes from 'prop-types';

const InfiniteCarrusel = ({ cards, autoPause = true }) => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardHover = (id) => {
    setSelectedCard(id);
  };

  return (
    <div 
      className="slider" 
      onMouseEnter={() => autoPause && setIsPaused(true)} 
      onMouseLeave={() => autoPause && setIsPaused(false)}
    >
      <div className={`slide-track ${isPaused ? 'paused' : ''}`}>
        {cards.concat(cards).map((card, index) => (
          <div 
            className={`slide ${selectedCard !== null && selectedCard !== card.id ? 'blur-hover' : ''}`} 
            key={index}
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

InfiniteCarrusel.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  })).isRequired,
  autoPause: PropTypes.bool,
};

export default InfiniteCarrusel;
