import { useState } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

const CarruselCards = ({ card }) => {
  const [selectedCard, setSelectedCard] = useState(null);

  const handleCardClick = (card) => {
    setSelectedCard(card);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md transition-transform transform hover:scale-105 cursor-pointer overflow-hidden m-2"
        onClick={() => handleCardClick(card)}
      >
        <img
          src={card.imageUrl}
          alt={`Photo of ${card.title}`}
          className="w-full h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 object-cover"
        />
        <div className="p-4">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{card.title}</h3>
          <p className="text-sm sm:text-base text-gray-600">${card.price}</p>
        </div>
      </div>
      {selectedCard &&
        ReactDOM.createPortal(
          <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 p-4">
            <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto relative">
              <div className="flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                  <img 
                    src={selectedCard.imageUrl} 
                    alt={`Photo of ${selectedCard.title}`} 
                    className="w-full h-64 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-t-none" 
                  />
                </div>
                <div className="w-full md:w-1/2 p-6">
                  <h2 className="text-xl md:text-2xl font-bold mb-4">{selectedCard.title}</h2>
                  <p className="text-lg md:text-xl text-gray-700 mb-4">${selectedCard.price}</p>
                  <p className="text-sm md:text-base text-gray-700">{selectedCard.description}</p>
                </div>
              </div>
              <button 
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md absolute top-2 right-2 md:top-4 md:right-4" 
                onClick={handleCloseModal}
              >
                Cerrar
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

CarruselCards.propTypes = {
  card: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    description: PropTypes.string,
    discountPrice: PropTypes.string,
  }).isRequired,
};

export default CarruselCards;