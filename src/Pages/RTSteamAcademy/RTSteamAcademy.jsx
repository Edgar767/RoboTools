import React, { useEffect } from 'react';
import Prices from "../../Components/Prices";
import Carrusel from "../../Components/Carrusel";
import image1 from '../../img/prueba1.png';
import image2 from '../../img/prueba2.png';
import image3 from '../../img/prueba3.png';
import image4 from '../../img/prueba4.png';
import image5 from '../../img/prueba5.png';

const images = [image1, image2, image3, image4, image5];

const RTSteamAcademy = () => {
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
    <div> {/* Eliminado el margen superior */}
      <div className="animate-on-scroll">
        <Carrusel images={images} />
      </div>
      <div className="animate-on-scroll">
        <Prices />
      </div>
    </div>
  );
};

export default RTSteamAcademy;
