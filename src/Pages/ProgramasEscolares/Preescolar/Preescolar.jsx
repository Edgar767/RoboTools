import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../../Components/Card';

const Preescolar = () => {
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
        animation: fadeInUp 1s forwards; /* Ajusta este tiempo para cambiar la duración de la animación */
      }

      /* Estilo adicional para las cards */
      .card-container {
        margin-bottom: 50px; /* Ajusta este valor según sea necesario */
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
    <div>
      {/* Botón para regresar */}
      <Link to="/ProgramasEscolares" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 ml-4 animate-on-scroll">Regresar</Link>

      {/* Carrusel */}
      <div className="container mx-auto max-w-4xl p-10 animate-on-scroll">
        <div className="w-full carousel rounded-box mb-20">
          <div className="w-full carousel-item">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 1" className="w-full image-zoom" />
          </div>
          <div className="w-full carousel-item">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 2" className="w-full image-zoom" />
          </div>
          <div className="w-full carousel-item">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 3" className="w-full image-zoom" />
          </div>
        </div>
      </div>

      <div className="animate-on-scroll card-container">
        <Card />
      </div>
    </div>
  );
}

export default Preescolar;
