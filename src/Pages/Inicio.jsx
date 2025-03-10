import { useEffect } from 'react';
import Carrusel from '../Components/Carrusel';
import InicioCards from '../Components/InicioCards';
import DobleCarrusel from '../Components/DobleCarrusel';
import { Link } from 'react-router-dom';
import FloatingBlocks from '../Components/Animation/FloatingBlocks';
import FloatingImages from '../Components/Animation/FloatingImages';

const InicioCardsData = [
  {
    title: "PROGRAMAS ESCOLARES",
    desc: "DALE UN VISTAZO",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "ROBOTOOLS CENTRO STEAM",
    desc: "DALE UN VISTAZO",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image22.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/cursosrobotools",
  },
  {
    title: "PRODUCTOS",
    desc: "DALE UN VISTAZO",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image33.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/productos",
  },
];

const leftCards = [
  {
    title: "1",
    desc: "1",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "2",
    desc: "2",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image22.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "3",
    desc: "3",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image33.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "4",
    desc: "4",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
];

const rightCards = [
  {
    title: "1",
    desc: "1",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "2",
    desc: "2",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image22.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "3",
    desc: "3",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image33.jpeg',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "4",
    desc: "4",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
  },
];

const images = ['/img/Imagenes_Inicio/Carrusel_Inicio/carrusel1.jpg', '/img/Imagenes_Inicio/Carrusel_Inicio/carrusel2.jpg', '/img/Imagenes_Inicio/Carrusel_Inicio/carrusel3.jpg', '/img/Imagenes_Inicio/Carrusel_Inicio/carrusel4.jpg', '/img/Imagenes_Inicio/Carrusel_Inicio/carrusel5.jpg'];
const title2Texts = ['MENTES', 'CREATIVIDAD', 'DIVERSION'];

const Inicio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
  <>
    <div className="relative min-h-screen">
      <FloatingBlocks />
      <div className="relative z-10">
        {/* Carrusel */}
        <div>
          <Carrusel images={images} title='DESARROLLANDO' title2Texts={title2Texts} />
        </div>

        {/* SOLUCIONES EDUCATIVAS */}
        <FloatingImages images={
              [
                {
                  src: '/extras/roboto/roboto1.png',
                  speed: 3,
                  zIndex: 20,
                  positionX: '8%',
                  positionY: '29%',
                },
                {
                  src: '/extras/roboto/roboto2.png',
                  speed: 2,
                  zIndex: 20,
                  positionX: '75%',
                  positionY: '50%',
                },
                /*DOBLE CARRUSEL (GALERIA)*/
                {
                  src: '/extras/roboto/roboto1.png',
                  speed: 3,
                  zIndex: 20,
                  positionX: '5%',
                  positionY: '78%',
                },
                {
                  src: '/extras/roboto/roboto2.png',
                  speed: 2,
                  zIndex: 20,
                  positionX: '70%',
                  positionY: '90%',
                },
              ]
            }
        />

        <InicioCards
          title="Soluciones Educativas"
          description="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."
          cards={InicioCardsData}
        />
        {/* FIN SOLUCIONES EDUCATIVAS */}

        <DobleCarrusel 
          leftTitle="Nuestros Servicios (Galeria)"
          leftDescription=""
          leftCards={leftCards}
          rightCards={rightCards}
        />

        <h4 className="title color-variation-1 mt-8 mb-20 text-center text-5xl font-extrabold">Nuestras Redes Sociales</h4>

        <div className="flex items-center justify-center">
          <div className="flex items-center mr-5">
            <Link to="https://www.facebook.com/Robotools">
              <img
                className="h-10 w-10 md:h-12 lg:h-16 mr-2"
                src="/icons/facebook.svg"
              />
            </Link>
          </div>

          <div className="flex items-center mr-5">
            <Link to="https://www.instagram.com/robotools.rt/">
              <img
                className="h-10 w-10 md:h-12 lg:h-16 mr-2"
                src="/icons/instagram.svg"
              />
            </Link>
          </div>
        </div>

      </div>
    </div>
  </>
  );
};

export default Inicio;