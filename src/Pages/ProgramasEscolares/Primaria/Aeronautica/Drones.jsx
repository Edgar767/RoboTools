import React from 'react';
import { Link } from 'react-router-dom';

const Drones = () => {
  return (
    <div className="container mx-auto max-w-4xl p-10">
      {/* Carrusel */}
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

      {/* Contenido de la página */}
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">

          {/* Título y texto de relleno */}
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">Collections</h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>

          {/* Tarjeta (Card) */}
          <div className="flex justify-center"> {/* Utilizamos flexbox para centrar la tarjeta */}
            <a href="#" className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg w-full max-w-sm"> {/* Ajustamos max-w-sm para hacerla menos ancha */}
              <img src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="relative flex flex-col">
                <span className="text-gray-300">Modern</span>
                <span className="text-lg font-semibold text-white lg:text-xl">LITE BEE WING</span>
              </div>
            </a>
          </div>

        </div>
      </div>

    </div>
  );
};

export default Drones;
