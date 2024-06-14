import React, { useEffect } from 'react';

const CursosRobotools = () => {
  useEffect(() => {
    // Desplazar la ventana a la parte superior al cargar la página
    const scrollToTop = () => {
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'auto' });
      }, 0);
    };

    scrollToTop();

    const handleLoad = () => {
      scrollToTop();
    };

    window.addEventListener('load', handleLoad);
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      /* Animaciones para el zoom en las imágenes */
      @keyframes zoomIn {
        0% {
          transform: scale(0.9);
          opacity: 0;
        }
        100% {
          transform: scale(1);
          opacity: 1;
        }
      }

      .image-zoom {
        animation: zoomIn 0.5s ease-out;
        transition: transform 0.2s ease-in-out;
      }

      .image-zoom:hover,
      .image-zoom:focus {
        transform: scale(1.05);
      }

      /* Animaciones para la aparición de elementos al hacer scroll */
      @keyframes fadeInUp {
        0% {
          transform: translateY(20px);
          opacity: 0;
        }
        100% {
          transform: translateY(0);
          opacity: 1;
        }
      }

      .animate-on-scroll {
        opacity: 0;
        transition: opacity 0.6s, transform 0.6s;
      }

      .animate-on-scroll.animate {
        animation: fadeInUp 1s forwards;
      }

      .btn {
        background-color: #ffcc00;
        color: #333333;
        font-weight: bold;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
        transition: background-color 0.3s ease-in-out;
        margin: 0 10px; /* Agrega margen horizontal a los botones */
      }

      .btn:hover {
        background-color: #ffaa00;
      }

      .title {
        color: #0057a6;
        font-size: 1.75rem;
        font-weight: bold;
      }

      .carousel-item img {
        border-radius: 15px;
      }

      .card-title {
        color: #0057a6;
      }

      .color-variation-1 {
        color: #ff6600;
      }

      .color-variation-2 {
        color: #009933;
      }

      .color-variation-3 {
        color: #660099;
      }

      .color-variation-4 {
        color: #ff0066;
      }

      .color-variation-5 {
        color: #0066cc;
      }

      .color-variation-6 {
        color: #cc00cc;
      }

      .btn-variation-1 {
        background-color: #ff6600;
      }

      .btn-variation-1:hover {
        background-color: #e65c00;
      }

      .btn-variation-2 {
        background-color: #009933;
      }

      .btn-variation-2:hover {
        background-color: #00802b;
      }

      .btn-variation-3 {
        background-color: #660099;
      }

      .btn-variation-3:hover {
        background-color: #590086;
      }

      .btn-variation-4 {
        background-color: #ff0066;
      }

      .btn-variation-4:hover {
        background-color: #e6005c;
      }
    `;
    document.head.appendChild(style);

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        } else {
          entry.target.classList.remove('animate');
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="mt-8"> {/* Agrega margen superior a la página */}
      
      {/* Carrusel */}
      <div className="container mx-auto max-w-4xl p-10 animate-on-scroll">
        <div className="w-full carousel rounded-box mb-20">
          <div className="w-full carousel-item image-zoom">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 1" className="w-full" />
          </div>
          <div className="w-full carousel-item image-zoom">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 2" className="w-full" />
          </div>
          <div className="w-full carousel-item image-zoom">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 3" className="w-full" />
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="bg-white py-6 sm:py-8 lg:py-12 animate-on-scroll">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl color-variation-1">Collections</h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <a href="/cursosteam" className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src="https://via.placeholder.com/1800x1000" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="relative flex flex-col">
                <span className="text-gray-300"></span>
                <span className="text-lg font-semibold text-white lg:text-xl">NUESTRO CURSO STEAM</span>
              </div>
            </a>
            <a href="horarioscostos" className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src="https://via.placeholder.com/1800x1000" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="relative flex flex-col">
                <span className="text-gray-300">Secundaria</span>
                <span className="text-lg font-semibold text-white lg:text-xl">HORARIOS Y COSTOS</span>
              </div>
            </a>
            <a href="/recorridovirtual" className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src="https://via.placeholder.com/1800x1000" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="relative flex flex-col">
                <span className="text-gray-300">Secundaria</span>
                <span className="text-lg font-semibold text-white lg:text-xl">RECORRIDO VIRTUAL</span>
              </div>
            </a>
            <a href="agendarclase" className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src="https://via.placeholder.com/1800x1000" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="relative flex flex-col">
                <span className="text-gray-300">Secundaria</span>
                <span className="text-lg font-semibold text-white lg:text-xl">AGENDA TU CLASE MUESTRA GRATIS</span>
              </div>
            </a>
            <a href="/convenios" className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src="https://via.placeholder.com/1800x1000" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="relative flex flex-col">
                <span className="text-gray-300">Secundaria</span>
                <span className="text-lg font-semibold text-white lg:text-xl">CONVENIOS</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursosRobotools;
