import React from 'react';
import Cards from '../../../Components/Cards';
import { coheteavanzadoData } from '../dataCardsProductos';

const CoheteAvanzadoProductos = () => {
    return (
    <div>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-left">COHETES AVANZADOS Products</h2>
      <Cards cards={coheteavanzadoData} />
    </div>
    );
  };
  
  export default CoheteAvanzadoProductos;