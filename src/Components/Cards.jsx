import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const Cards = ({ cards }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="col-span-1 p-4 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer"
            onClick={() => handleCardClick(card)}
          >
            <img
              src={card.imageUrl}
              alt={`Photo of ${card.title}`}
              className="w-full h-80 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
            <p className="text-gray-600">${card.price}</p>
          </div>
        ))}
      </div>
      {selectedCard &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
            <div className="bg-white p-6 rounded-lg max-w-5xl w-full h-5/6 overflow-y-auto relative">
              <div className="flex h-full">
                <div className="w-1/2 pr-6 h-full">
                  <img src={selectedCard.imageUrl} alt={`Photo of ${selectedCard.title}`} className="w-full h-full object-cover rounded-lg" />
                </div>
                <div className="w-1/2 h-full overflow-y-auto">
                  <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
                  <p className="text-gray-700 mb-4">${selectedCard.price}</p>
                  <p className="text-gray-700">{selectedCard.description}</p>
                </div>
              </div>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md absolute top-4 right-4" onClick={handleCloseModal}>
                Cerrar
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

Cards.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      discountPrice: PropTypes.string,
    })
  ).isRequired,
};

export default Cards;
