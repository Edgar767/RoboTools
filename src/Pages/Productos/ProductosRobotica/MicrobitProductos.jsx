import React from 'react';
import Cards from '../../../Components/Cards';
import { microbitData } from '../dataCardsProductos';

const MicrobitProductos = () => {
    return (
      <div>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-left">MICROBIT Products</h2>
      <Cards cards={microbitData} />
    </div>
    );
  };
  
  export default MicrobitProductos;