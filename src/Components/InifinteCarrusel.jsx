import { useState } from 'react';

const InfiniteCarrusel = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    { id: 1, image: "https://via.placeholder.com/400x200", title: "Card 1" },
    { id: 2, image: "https://via.placeholder.com/400x200", title: "Card 2" },
    { id: 3, image: "https://via.placeholder.com/400x200", title: "Card 3" },
    { id: 4, image: "https://via.placeholder.com/400x200", title: "Card 4" },
    { id: 5, image: "https://via.placeholder.com/400x200", title: "Card 5" },
    { id: 6, image: "https://via.placeholder.com/400x200", title: "Card 6" },
    { id: 7, image: "https://via.placeholder.com/400x200", title: "Card 7" }
  ];

  const handleCardHover = (id) => {
    setSelectedCard(id);
  };

  return (
    <div 
      className="slider" 
      onMouseEnter={() => setIsPaused(true)} 
      onMouseLeave={() => setIsPaused(false)}
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

export default InfiniteCarrusel;
