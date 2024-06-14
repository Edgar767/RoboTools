import React from 'react';
import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, card }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg max-w-2xl overflow-y-auto">
        <div className="flex">
          <div className="w-1/2 pr-6">
            <img src={card.imageUrl} alt={`Photo of ${card.title}`} className="w-full h-auto rounded-lg" />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
            <p className="text-gray-700 mb-2">{card.description}</p>
            <p className="text-gray-700 font-bold">${card.price}</p>
          </div>
        </div>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md" onClick={onClose}>
          Cerrar
        </button>
      </div>
    </div>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  card: PropTypes.shape({
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }).isRequired,
};

export default Modal;
