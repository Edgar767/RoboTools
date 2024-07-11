import { useState } from 'react';
import PropTypes from 'prop-types';

const InfiniteCarrusel = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardHover = (id) => {
    setSelectedCard(id);
  };

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
      {cards.map((card) => (
        <div
          className={`cards ${selectedCard !== null && selectedCard !== card.id ? 'blur-hover' : ''}`}
          key={card.id}
          onMouseEnter={() => handleCardHover(card.id)}
          onMouseLeave={() => handleCardHover(null)}
        >
          <img src={card.image} alt={card.title} />
          <div className="cards-content">
            <h3 className="cards-title">{card.title}</h3>
          </div>
        </div>
      ))}
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
