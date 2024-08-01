import { useEffect } from 'react';
import FloatingBlocks from '../Components/Animation/FloatingBlocks';
import Infinito from '../Components/Infinito';
import Testimonials from '../Components/Testimonials';

const InfinitoData = [
  {
    title: "Estatal Emprendedores Aguascalientes 2007",
    desc: "1er Lugar Premio",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "World Robot Olympiad 2013.",
    desc: "2do. Lugar categoría primaria en la competencia regional de la",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "World Robot Olympiad 2013.",
    desc: "3er. Lugar en el Nacional categoría secundaria de",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "World Robot Olympiad, Regional Querétaro. Junio 2014.",
    desc: "1er. Lugar en categoría Secundaria en competencia",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "World Robot Olympiad Nacional.",
    desc: "5 Equipos: 2 de Secundaria y 3 de Primaria consiguen su pase a",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "World Robot Olympiad, regional Guadalajara 2015.",
    desc: "2do. Lugar categoría Primario en competencia",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "First LEGO League en Estado de México 2013.",
    desc: "Subcampeón en competencia",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "Gracious Professionalism en competencia First LEGO League en Estado de México 2013.",
    desc: "Reconocimiento",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "Gracious Professionalism en competencia First LEGO League en Monterrey 2014.",
    desc: "Reconocimiento",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "First LEGO League en Monterrey 2014.",
    desc: "Reconocimiento a la mejor programación en competencia",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "World Robot Olympiad, Regional Monterrey 2016.",
    desc: "Segundo lugar en categoría primaria en competencia",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
];

const testimonialsData = [
  {
    quote: '"This is a section of some simple filler text, also known as placeholder text."',
    image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=112',
    name: 'John McCulling',
    title: 'CEO / Datadrift',
  },
  {
    quote: '"This is a section of some simple filler text, also known as placeholder text."',
    image: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112',
    name: 'Kate Berg',
    title: 'CFO / Dashdash',
  },
  {
    quote: '"This is a section of some simple filler text, also known as placeholder text."',
    image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=112',
    name: 'John McCulling 2',
    title: 'CEO / Datadrift',
  },
  {
    quote: '"This is a section of some simple filler text, also known as placeholder text."',
    image: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112',
    name: 'Kate Berg 2',
    title: 'CFO / Dashdash',
  },
  // Agrega más testimonios aquí
];

function Nosotros() {
  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'auto' });
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
      document.head.removeChild(style);
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      <FloatingBlocks />
        <h4 className="title color-variation-1 mt-8 mb-20 text-center text-5xl font-extrabold">Conoce Mas De Robotools</h4>
          <p className="mt-4 text-gray-800 text-center text-lg lg:text-xl">
              Descripcion Breve.
          </p>
    <div className="relative z-10">
      {/* Duplicando la sección de HISTORIA */}
      <section className="my-16 lg:my-24 animate-on-scroll">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-red-200 rounded-2xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-96 sm:h-96 lg:order-last lg:h-96">
              <img
                alt="Niños jugando con Lego"
                src='/img/Imagenes_Nosotros/Nosotros_1.jpeg'
                className="h-full w-full object-cover rounded-2xl image-zoom"
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl text-red-700 mb-8 lg:mb-12">¿QUIÉNES SOMOS?
              </h2>

              <p className="mt-4 text-gray-800 text-lg lg:text-xl">
                Somos una empresa 100% mexicana, dedicada a proporcionar herramientas pedagógicas e innovadoras que buscan motivar e incentivar a los niños a aprender.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Duplicando la sección de MISIÓN */}
      <section className="my-16 lg:my-24 animate-on-scroll">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-blue-200 rounded-2xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-96 sm:h-96 lg:h-96">
              <img
                alt="Set de Lego Education"
                src='/img/Imagenes_Nosotros/Nosotros_2.jpeg'
                className="h-full w-full object-cover rounded-2xl image-zoom"
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl text-blue-700 mb-8 lg:mb-12">NUESTROS INSTRUCTORES
              </h2>

              <p className="mt-4 text-gray-800 text-lg lg:text-xl">
              Cada uno de nuestros instructores está certificado por el CONOCER.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección original de HISTORIA */}
      <section className="my-16 lg:my-24 animate-on-scroll">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-red-200 rounded-2xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-96 sm:h-96 lg:order-last lg:h-96">
              <img
                alt="Niños jugando con Lego"
                src='/img/Imagenes_Nosotros/Nosotros_1.jpeg'
                className="h-full w-full object-cover rounded-2xl image-zoom"
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl text-red-700 mb-8 lg:mb-12">HISTORIA</h2>

              <p className="mt-4 text-gray-800 text-lg lg:text-xl">
                Somos una empresa con más de 10 años de experiencia en la generación de contenidos y
                programas educativos enfocados a desarrollar competencias y habilidades STEAM en niñas y niños
                mediante el uso de nuevas e innovadoras herramientas de aprendizaje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección original de MISIÓN */}
      <section className="my-16 lg:my-24 animate-on-scroll">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-blue-200 rounded-2xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-96 sm:h-96 lg:h-96">
              <img
                alt="Set de Lego Education"
                src='/img/Imagenes_Nosotros/Nosotros_2.jpeg'
                className="h-full w-full object-cover rounded-2xl image-zoom"
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl text-blue-700 mb-8 lg:mb-12">MISIÓN</h2>

              <p className="mt-4 text-gray-800 text-lg lg:text-xl">
                Con nuestros sets de Lego Education, los niños pueden aprender conceptos de ciencia,
                tecnología, ingeniería y matemáticas de una manera práctica y divertida.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sección original de VISIÓN */}
      <section className="my-16 lg:my-24 animate-on-scroll">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16 bg-green-200 rounded-2xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-96 sm:h-96 lg:order-last lg:h-96">
              <img
                alt="Niños construyendo con Lego"
                src='/img/Imagenes_Nosotros/Nosotros_2.jpeg'
                className="h-full w-full object-cover rounded-2xl image-zoom"
              />
            </div>

            <div className="lg:py-16">
              <h2 className="text-4xl font-extrabold sm:text-5xl lg:text-6xl text-green-700 mb-8 lg:mb-12">VISIÓN</h2>

              <p className="mt-4 text-gray-800 text-lg lg:text-xl">
                Los sets de Lego Education permiten a los niños explorar nuevas ideas y conceptos mientras
                construyen, diseñan y experimentan.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>

    {/*RECONOCIMIENTOS Y PREMIACIONES*/}
    <Infinito
      title="Reconocimientos y Premiaciones"
      cards={InfinitoData}
    />

    {/*CARRUSEL DE OPINIONES*/}
    <h4 className="title color-variation-1 mt-8 mb-20 text-center text-5xl font-extrabold">Lo Que Dicen Nuestros Alumnos</h4>
      <Testimonials testimonials={testimonialsData} />

  </div>
  );
}

export default Nosotros;
