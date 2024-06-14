import React from 'react';
import Cards from '../../../Components/Cards';
import { mojortData } from '../dataCardsProductos';

const MojoRTProductos = () => {
    return (
    <div>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-left">MOJO RT Products</h2>
      <Cards cards={mojortData} />
    </div>
    );
  };
  
  export default MojoRTProductos;