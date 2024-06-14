import React from 'react';
import Cards from '../../../Components/Cards';
import { mergecubeData } from '../dataCardsProductos';

const MergeCubeProductos = () => {
    return (
    <div>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-left">MERGE CUBE Products</h2>
      <Cards cards={mergecubeData} />
    </div>
    );
  };
  
  export default MergeCubeProductos;