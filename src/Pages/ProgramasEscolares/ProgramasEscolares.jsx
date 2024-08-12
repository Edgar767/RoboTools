import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import InicioCards from '../../Components/InicioCards';
import InfiniteCarrusel from "../../Components/InfiniteCarrusel";
import FloatingBlocks from '../../Components/Animation/FloatingBlocks';
import FloatingImages from '../../Components/Animation/FloatingImages';

const InfiniteCarruselData = [
  { id: 1, image: "https://via.placeholder.com/400x300", title: " " },
  { id: 2, image: "https://via.placeholder.com/400x300", title: "Aprendizaje divertido" },
  { id: 3, image: "https://via.placeholder.com/400x300", title: "Vinculado al programa de estudios" },
  { id: 4, image: "https://via.placeholder.com/400x300", title: "Desarrollo de habilidades de liderazgo" },
  { id: 5, image: "https://via.placeholder.com/400x300", title: "Modelo educativo basado en los 4 pilares de la educación de la UNESCO" },
  { id: 6, image: "https://via.placeholder.com/400x300", title: "Transversal" }
];

const CardsData = [
  {
    title: "Vinculacion Al Nuevo Modelo Educativo",
    desc: "Conoce Mas",
    image: "",
    alt: "Photo by Fakurian Design",
  },
  {
    title: "Desarrolla Emociones Socioemocionales",
    desc: "Conoce Mas",
    image: "",
    alt: "Photo by Fakurian Design",
  },
  {
    title: "Desarrollo del Pensamiento Matematico",
    desc: "Conoce Mas",
    image: "",
    alt: "Photo by Fakurian Design",
  },
];

const CardsData2 = [
  {
    title: "5c",
    desc: "Conoce Mas",
    image: '',
    alt: "Photo by Fakurian Design",
  },
  {
    title: "ABP (Aprendizaje Basado en Proyecto)",
    desc: "Conoce Mas",
    image: "",
    alt: "Photo by Fakurian Design",
  },
];

const CardsData3 = [
  {
    title: "KITS EDUCATIVOS",
    desc: "Conoce Mas",
    image: "",
    alt: "Photo by Fakurian Design",
  },
  {
    title: "PLANES DE ESTUDIO",
    desc: "Conoce Mas",
    image: "",
    alt: "Photo by Fakurian Design",
  },
  {
    title: "SOPORTE PEDAGOGICO",
    desc: "Conoce Mas",
    image: "",
    alt: "Photo by Fakurian Design",
  },
  {
    title: "CAPACITACION",
    desc: "Conoce Mas",
    image: "",
    alt: "Photo by Fakurian Design",
  },
];

const ProgramasEscolares = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const buttonClass = (path) => 
    `btn ${activeButton === path ? 'btn-active' : 'btn-variation-1'}`;

  return (
    <div className="relative min-h-screen">
      <FloatingBlocks />
      <div className="relative z-10">
        <div className="flex justify-center space-x-4 mt-8">
          <Link to="/preescolar">
            <button 
              className={buttonClass('/preescolar')}
              onClick={() => setActiveButton('/preescolar')}
            >
              <AcademicCapIcon className="h-6 w-6" />
              Preescolar
            </button>
          </Link>
          <Link to="/primaria">
            <button 
              className={buttonClass('/primaria')}
              onClick={() => setActiveButton('/primaria')}
            >
              <AcademicCapIcon className="h-6 w-6" />
              Primaria
            </button>
          </Link>
          <Link to="/secundaria">
            <button 
              className={buttonClass('/secundaria')}
              onClick={() => setActiveButton('/secundaria')}
            >
              <AcademicCapIcon className="h-6 w-6" />
              Secundaria
            </button>
          </Link>
        </div>

        <InfiniteCarrusel
          title="NUESTROS PROGRAMAS INTEGRAN"
          cards={InfiniteCarruselData}
        />

      <FloatingImages images={
              [
                {
                  src: '/extras/roboto/roboto1.png',
                  speed: 3,
                  zIndex: 20,
                  positionX: '3%',
                  positionY: '2%',
                },
                {
                  src: '/extras/roboto/roboto2.png',
                  speed: 2,
                  zIndex: 20,
                  positionX: '77%',
                  positionY: '22%',
                },
                {
                  src: '/extras/roboto/roboto2.png',
                  speed: 2,
                  zIndex: 20,
                  positionX: '4%',
                  positionY: '49%',
                },
                {
                  src: '/extras/roboto/roboto2.png',
                  speed: 2,
                  zIndex: 20,
                  positionX: '75%',
                  positionY: '65%',
                },
                {
                  src: '/extras/roboto/roboto2.png',
                  speed: 2,
                  zIndex: 20,
                  positionX: '15%',
                  positionY: '90%',
                },
              ]
            }
        />

        <InicioCards
          title='ENFOQUE STEAM'
          cards={CardsData}
        />

        <InicioCards
          title='METODOLOGIAS DE NUESTROS PROGRAMAS'
          cards={CardsData2}
        />

        <InicioCards
          title="ELEMENTOS DE NUESTROS CURSOS"
          cards={CardsData3}
        />

      </div>
    </div>
  );
};

export default ProgramasEscolares;