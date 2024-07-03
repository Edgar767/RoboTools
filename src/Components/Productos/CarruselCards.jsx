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
            <div className="bg-white p-6 rounded-lg max-w-5xl w-full h-auto md:h-5/6 overflow-y-auto relative">
              <div className="flex flex-col md:flex-row h-full">
                <div className="w-full md:w-1/2 pr-0 md:pr-6 mb-4 md:mb-0">
                  <img 
                    src={selectedCard.imageUrl} 
                    alt={`Photo of ${selectedCard.title}`} 
                    className="w-full h-64 md:h-full object-cover rounded-lg" 
                  />
                </div>
                <div className="w-full md:w-1/2 h-full overflow-y-auto">
                  <h2 className="text-2xl font-bold mb-4">{selectedCard.title}</h2>
                  <p className="text-gray-700 mb-4">${selectedCard.price}</p>
                  <p className="text-gray-700">{selectedCard.description}</p>
                </div>
              </div>
              <button 
                className="absolute top-2 right-2 md:top-4 md:right-4 text-gray-500 hover:text-gray-700 transition-colors"
                onClick={handleCloseModal}
                aria-label="Cerrar"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 md:w-12 md:h-12">
                  <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.72 6.97a.75.75 0 1 0-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 1 0 1.06 1.06L12 13.06l1.72 1.72a.75.75 0 1 0 1.06-1.06L13.06 12l1.72-1.72a.75.75 0 1 0-1.06-1.06L12 10.94l-1.72-1.72Z" clipRule="evenodd" />
                </svg>
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