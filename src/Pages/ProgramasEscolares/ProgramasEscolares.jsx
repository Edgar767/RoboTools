import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../Components/Card';

const ProgramasEscolares = () => {
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
      <div className="flex justify-center space-x-4 mb-4">
        <div className="flex justify-center">
          <Link to="/preescolar">
            <button className="btn btn-variation-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Preescolar
            </button>
          </Link>
          <Link to="/primaria">
            <button className="btn btn-variation-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Primaria
            </button>
          </Link>
          <Link to="/secundaria">
            <button className="btn btn-variation-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
              Secundaria
            </button>
          </Link>
        </div>
      </div>

      <h4 className="title color-variation-1 mb-4 text-center">NUESTROS PROGRAMAS INTEGRAN</h4>

      <div className="flex justify-center mt-8 animate-on-scroll">
        <div className="grid grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="w-72">
              <div className="carousel rounded-box">
                <div className="carousel-item image-zoom">
                  <img src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.jpg" className="w-full rounded-2xl" alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item image-zoom">
                  <img src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.jpg" className="w-full rounded-2xl" alt="Tailwind CSS Carousel component" />
                </div>
                <div className="carousel-item image-zoom">
                  <img src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.jpg" className="w-full rounded-2xl" alt="Tailwind CSS Carousel component" />
                </div>
              </div>
              <h4 className={`text-center mt-2 text-lg font-bold card-title color-variation-${(index % 6) + 1}`}>Descripción Carrusel {index + 1}</h4>
            </div>
          ))}
        </div>
      </div>

      <h4 className="title color-variation-3 mb-4 text-center animate-on-scroll">METODOLOGIAS DE NUESTROS PROGRAMAS</h4>

      <div className="container mx-auto max-w-4xl p-10 animate-on-scroll">
        <div className="w-full carousel rounded-box mb-20">
          <div className="w-full carousel-item image-zoom">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 1" className="w-full rounded-2xl" />
          </div>
          <div className="w-full carousel-item image-zoom">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 2" className="w-full rounded-2xl" />
          </div>
          <div className="w-full carousel-item image-zoom">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 3" className="w-full rounded-2xl" />
          </div>
        </div>
      </div>

      <Card className="animate-on-scroll color-variation-4" />

      <div className="container mx-auto max-w-4xl p-10 animate-on-scroll">
        <div className="w-full carousel rounded-box mb-20">
          <div className="w-full carousel-item image-zoom">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 1" className="w-full rounded-2xl" />
          </div>
          <div className="w-full carousel-item image-zoom">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 2" className="w-full rounded-2xl" />
          </div>
          <div className="w-full carousel-item image-zoom">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 3" className="w-full rounded-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgramasEscolares;
