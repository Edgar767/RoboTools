import React, { useState } from 'react';

const Card = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      id: 1,
      title: 'Título de la Card 1',
      content: 'Contenido de la card 1. Esta información se muestra al pasar el puntero.',
      imageUrl: 'https://via.placeholder.com/400',
    },
    {
      id: 2,
      title: 'Título de la Card 2',
      content: 'Contenido de la card 2. Esta información se muestra al pasar el puntero.',
      imageUrl: 'https://via.placeholder.com/400',
    },
    {
      id: 3,
      title: 'Título de la Card 3',
      content: 'Contenido de la card 3. Esta información se muestra al pasar el puntero.',
      imageUrl: 'https://via.placeholder.com/400',
    },
    {
      id: 4,
      title: 'Título de la Card 4',
      content: 'Contenido de la card 3. Esta información se muestra al pasar el puntero.',
      imageUrl: 'https://via.placeholder.com/400',
    },
    {
      id: 5,
      title: 'Título de la Card 5',
      content: 'Contenido de la card 3. Esta información se muestra al pasar el puntero.',
      imageUrl: 'https://via.placeholder.com/400',
    },
    {
      id: 6,
      title: 'Título de la Card 6',
      content: 'Contenido de la card 3. Esta información se muestra al pasar el puntero.',
      imageUrl: 'https://via.placeholder.com/400',
    },
    // Agrega más objetos para más cards si es necesario
  ];

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setModalOpen(true);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
      {cards.map((card) => (
        <div key={card.id} className="max-w-xs relative rounded overflow-hidden shadow-lg transition duration-300 ease-in-out transform hover:opacity-80 cursor-pointer mx-auto" onClick={() => handleCardClick(card)}>
          <img src={card.imageUrl} alt="Placeholder" className="w-full" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition duration-300 ease-in-out bg-black bg-opacity-50 text-white">
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">{card.title}</h2>
              <p className="text-sm">{card.content}</p>
            </div>
          </div>
        </div>
      ))}
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="max-w-lg bg-white p-8 rounded-lg shadow-lg">
            <img src={selectedCard.imageUrl} alt="Selected Card" className="w-64 mx-auto mb-4" />
            <h2 className="text-xl font-bold mb-2">{selectedCard.title}</h2>
            <p className="text-sm mb-4">{selectedCard.content}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => setModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
