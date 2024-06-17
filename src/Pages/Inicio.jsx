import { useEffect } from 'react';
import Carrusel from '../Components/Carrusel';
import image1 from '../img/Imagenes_Inicio/Carrusel_Inicio/carrusel1.jpeg';
import image2 from '../img/Imagenes_Inicio/Carrusel_Inicio/carrusel2.jpeg';
import image3 from '../img/Imagenes_Inicio/Carrusel_Inicio/carrusel3.jpeg';
import image4 from '../img/Imagenes_Inicio/Carrusel_Inicio/carrusel4.jpeg';
import image5 from '../img/Imagenes_Inicio/Carrusel_Inicio/carrusel5.jpeg';
import toolio from '../img/Imagenes_Inicio/toolio.png';
import conocer from '../img/Imagenes_Inicio/conocer.png';
import premio from '../img/Imagenes_Inicio/premio.png';
import InicioCards from '../Components/InicioCards';
import image11 from "../img/Imagenes_Inicio/Inicio_Cards/image11.jpeg";
import image22 from "../img/Imagenes_Inicio/Inicio_Cards/image22.jpeg";
import image33 from "../img/Imagenes_Inicio/Inicio_Cards/image33.jpeg";
import InfiniteCarrusel from '../Components/InfiniteCarrusel';

const InicioCardsData = [
  {
    title: "PROGRAMAS ESCOLARES",
    image: image11,
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "CURSOS ROBOTOOLS",
    image: image22,
    alt: "Photo by Fakurian Design",
    link: "/cursosrobotools",
  },
  {
    title: "RT STEAM ACADEMY",
    image: image33,
    alt: "Photo by Fakurian Design",
    link: "/rtsteamacademy",
  },
];

const InfiniteCarruselData = [
  { id: 1, image: "https://via.placeholder.com/400x300", title: "Salas Interactivas" },
  { id: 2, image: "https://via.placeholder.com/400x300", title: "Productos" },
  { id: 3, image: "https://via.placeholder.com/400x300", title: "Eventos" },
  { id: 1, image: "https://via.placeholder.com/400x300", title: "Salas Interactivas" },
  { id: 2, image: "https://via.placeholder.com/400x300", title: "Productos" },
  { id: 3, image: "https://via.placeholder.com/400x300", title: "Eventos" },
];

const images = [image1, image2, image3, image4, image5];
const title2Texts = ['MENTES', 'CREATIVIDAD', 'DIVERSION'];

const Inicio = () => {

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Deja de observar el elemento una vez que se ha animado
        }
      });
    }, { threshold: 0.5 });

    const elements = document.querySelectorAll('.scroll-animation');
    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      elements.forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div>
      <style>{`
        .scroll-animation {
          opacity: 0;
          transform: translateY(50px);
          transition: opacity 0.5s ease-out, transform 0.5s ease-out;
        }

        .scroll-animation.in-view {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      {/* Carrusel */}
      <div>
        <Carrusel images={images} title='DESARROLLANDO' title2Texts={title2Texts} />
      </div>

      <div className="py-12 sm:py-16 lg:py-24 mt-24 scroll-animation">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-indigo-400 to-cyan-400 sm:p-10 lg:p-20 rounded-3xl">
            <h2 className="mb-4 text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white md:mb-6">¿QUIENES SOMOS?</h2>
            <p className="max-w-screen-md text-center text-sm sm:text-base lg:text-lg font-bold text-white">Somos una empresa 100% mexicana, dedicada a</p>
            <p className="max-w-screen-md text-center text-sm sm:text-base lg:text-lg font-bold text-yellow-300">PROPORCIONAR HERRAMIENTAS PEDAGÓGICAS E INNOVADORAS</p>
            <p className="max-w-screen-md text-center text-sm sm:text-base lg:text-lg font-bold text-white">que buscan motivar e incentivar a los niños a aprender.</p>
            <div className="flex justify-center mt-6">
              <img src={toolio} alt="toolio"></img>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 lg:py-24 scroll-animation">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-blue-600 to-violet-600 sm:p-10 lg:p-20 rounded-3xl">
            <h2 className="mb-4 text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white md:mb-6">NUESTROS INSTRUCTORES</h2>
            <p className="max-w-screen-md text-center text-sm sm:text-base lg:text-lg font-bold text-white">Cada uno de Nuestros Instructores esta Certificado por el</p>
            <div className="flex justify-center mt-6">
              <img src={conocer} alt="conocer"></img>
            </div>
          </div>
        </div>
      </div>

      {/* INICIO CURSOS */}
      <div className="scroll-animation">
        <InicioCards
          title="Nuestros Cursos"
          description="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."
          cards={InicioCardsData}
        />
      </div>
      {/* FIN CURSOS */}

      <div className="py-12 sm:py-16 lg:py-24 scroll-animation">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-amber-500 to-pink-500 p-6 sm:p-10 lg:p-20 rounded-3xl">
            <h2 className="mb-4 text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white md:mb-6">RECONOCIMIENTOS</h2>
            <p className="max-w-screen-md text-center text-sm sm:text-base lg:text-lg font-bold text-white">NUESTROS ALUMNOS HAN GANADO IMPORTANTES COMPETENCIAS EN TECNOLOGÍA Y ROBÓTICA</p>
            <div className="flex justify-center mt-6">
              <img src={premio} alt="premio" className="w-24 sm:w-32 lg:w-40 h-auto"></img>
            </div>
            <div className='flex justify-center items-center mt-10'>
              <button className="btn bg-gradient-to-r from-rose-100 to-teal-100 text-black font-bold" onClick={() => document.getElementById('my_modal_5').showModal()}>Ver Premios</button>
            </div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
              <div className="modal-box">
                <h3 className="text-center font-extrabold text-2xl">PREMIOS Y DISTINCIONES</h3>
                <li><a>1er Lugar Premio</a> <a className='font-bold text-color-blue-500'>Estatal Emprendedores Aguascalientes 2007.</a></li>
                <li><a>2do. Lugar categoría primaria en la competencia regional de la</a> <a className='font-bold text-color-blue-500'> World Robot Olympiad 2013.</a></li>
                <li><a>3er. Lugar en el Nacional categoría secundaria de</a> <a className='font-bold text-color-blue-500'> World Robot Olympiad 2013.</a></li>
                <li><a>1er. Lugar en categoría Secundaria en competencia</a> <a className='font-bold text-color-blue-500'> World Robot Olympiad, Regional Querétaro. Junio 2014.</a></li>
                <li><a>5 Equipos: 2 de Secundaria y 3 de Primaria consiguen su pase a</a> <a className='font-bold text-color-blue-500'> World Robot Olympiad Nacional.</a></li>
                <li><a>2do. Lugar categoría Primario en competencia</a> <a className='font-bold text-color-blue-500'> World Robot Olympiad, regional Guadalajara 2015.</a></li>
                <li><a>Subcampeón en competencia</a> <a className='font-bold text-color-blue-500'> First LEGO League en Estado de México 2013.</a></li>
                <li><a>Reconocimiento</a> <a className='font-bold text-color-blue-500'> Gracious Professionalism en competencia First LEGO League en Estado de México 2013.</a></li>
                <li><a>Reconocimiento</a> <a className='font-bold text-color-blue-500'> Gracious Professionalism en competencia First LEGO League en Monterrey 2014.</a></li>
                <li><a>Reconocimiento a la mejor programación en competencia</a> <a className='font-bold text-color-blue-500'> First LEGO League en Monterrey 2014.</a></li>
                <li><a>Segundo lugar en categoría primaria en competencia</a> <a className='font-bold text-color-blue-500'> World Robot Olympiad, Regional Monterrey 2016.</a></li>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn bg-gradient-to-r from-rose-100 to-teal-100 text-black font-bold">Cerrar</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>

      <div className="py-12 sm:py-16 lg:py-24 scroll-animation">
        <div className="flex justify-center">
          <div className="bg-gradient-to-tr from-violet-500 to-orange-300 sm:p-10 lg:p-20 rounded-3xl">
            <h2 className="mb-4 text-center text-3xl sm:text-4xl lg:text-5xl font-bold text-white md:mb-6">MAS DE NOSOTROS</h2>
            <p className="max-w-screen-md text-center text-sm sm:text-base lg:text-lg font-bold text-white"></p>
            <div className="flex justify-center mt-6"></div>
          </div>
        </div>
      </div>
      <InfiniteCarrusel cards={InfiniteCarruselData} autoPause={true} />
    </div>
  );
};

export default Inicio;
