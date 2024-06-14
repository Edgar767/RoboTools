import React from 'react';
import Cards from '../../../Components/Cards';
import { qoboData } from '../dataCardsProductos';

const QoboProductos = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-left">QOBO Products</h2>
      <Cards cards={qoboData} />
    </div>
  );
};

export default QoboProductos;
