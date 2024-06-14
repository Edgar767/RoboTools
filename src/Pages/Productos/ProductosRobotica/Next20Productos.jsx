import React from 'react';
import Cards from '../../../Components/Cards';
import { next20Data } from '../dataCardsProductos';

const Next20Productos = () => {
    return (
      <div>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-left">NEXT 2.0 Products</h2>
      <Cards cards={next20Data} />
    </div>
    );
  };
  
  export default Next20Productos;