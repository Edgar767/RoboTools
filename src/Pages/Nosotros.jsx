import React, { useEffect } from 'react';
import Nosotros_1 from '../img/Imagenes_Nosotros/Nosotros_1.jpeg';
import Nosotros_2 from '../img/Imagenes_Nosotros/Nosotros_2.jpeg';
import Nosotros_3 from '../img/Imagenes_Nosotros/Nosotros_3.jpeg';

function Nosotros() {
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
      {/* Primera sección */}
      <section className="my-16 lg:my-24 animate-on-scroll">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-red-200 rounded-2xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-96 sm:h-96 lg:order-last lg:h-96">
              <img
                alt="Niños jugando con Lego"
                src={Nosotros_1}
                className="h-full w-full object-cover rounded-2xl image-zoom"
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-3xl font-bold sm:text-4xl text-red-700">Fomenta la creatividad</h2>

              <p className="mt-4 text-gray-800">
                Nuestros sets de Lego Education ayudan a los niños a desarrollar habilidades de creatividad,
                resolución de problemas y colaboración mientras se divierten construyendo.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-red-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-red-800 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Comienza Hoy
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Segunda sección (imagen primero, luego texto) */}
      <section className="my-16 lg:my-24 animate-on-scroll">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-blue-200 rounded-2xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-96 sm:h-96 lg:h-96">
              <img
                alt="Set de Lego Education"
                src={Nosotros_2}
                className="h-full w-full object-cover rounded-2xl image-zoom"
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-3xl font-bold sm:text-4xl text-blue-700">Aprendizaje Interactivo</h2>

              <p className="mt-4 text-gray-800">
                Con nuestros sets de Lego Education, los niños pueden aprender conceptos de ciencia,
                tecnología, ingeniería y matemáticas de una manera práctica y divertida.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-blue-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-blue-800 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Más Información
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Tercera sección (color verde) */}
      <section className="my-16 lg:my-24 animate-on-scroll">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-green-200 rounded-2xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-96 sm:h-96 lg:order-last lg:h-96">
              <img
                alt="Niños construyendo con Lego"
                src={Nosotros_3}
                className="h-full w-full object-cover rounded-2xl image-zoom"
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-3xl font-bold sm:text-4xl text-green-700">Explora Nuevas Ideas</h2>

              <p className="mt-4 text-gray-800">
                Los sets de Lego Education permiten a los niños explorar nuevas ideas y conceptos mientras
                construyen, diseñan y experimentan.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded bg-green-700 px-12 py-3 text-sm font-medium text-white transition hover:bg-green-800 focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Únete a Nosotros
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Nosotros;
