import React from 'react';
import { Link } from 'react-router-dom';

const RealidadVirtual = () => {
    return (
      <div>
        {/* Carrusel */}
      <div className="container mx-auto max-w-4xl p-10">
      <div className="w-full carousel rounded-box mb-20">
        <div className="w-full carousel-item">
          <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 1" className="w-full" />
        </div>
        <div className="w-full carousel-item">
          <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 2" className="w-full" />
        </div>
        <div className="w-full carousel-item">
          <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 3" className="w-full" />
        </div>
      </div>
    </div>
      </div>
    );
  };
  
  export default RealidadVirtual;