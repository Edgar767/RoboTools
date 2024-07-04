import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import InicioCards from '../../Components/InicioCards';
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import InfiniteCarrusel from "../../Components/InfiniteCarrusel";

const CardsData = [
  {
    title: "Titulo 1",
    desc: "",
    image: "",
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "Titulo 2",
    desc: "",
    image: "",
    alt: "Photo by Fakurian Design",
    link: "/cursosrobotools",
  },
  {
    title: "Titulo 3",
    desc: "",
    image: "",
    alt: "Photo by Fakurian Design",
    link: "/rtsteamacademy",
  },
];

const CardsData2 = [
  {
    title: "MATERIALES",
    desc: "",
    image: "",
    alt: "Photo by Fakurian Design",
    link: "",
  },
  {
    title: "PLANES DE ESTUDIO",
    desc: "",
    image: "",
    alt: "Photo by Fakurian Design",
    link: "",
  },
  {
    title: "SOPORTE PEDAGOGICO",
    desc: "",
    image: "",
    alt: "Photo by Fakurian Design",
    link: "",
  },
];

const InfiniteCarruselData = [
  { id: 1, image: "https://via.placeholder.com/400x300", title: "Desarrollo cognitivo intelectual" },
  { id: 2, image: "https://via.placeholder.com/400x300", title: "Aprendizaje divertido" },
  { id: 3, image: "https://via.placeholder.com/400x300", title: "Vinculado al programa de estudios" },
  { id: 4, image: "https://via.placeholder.com/400x300", title: "Desarrollo de habilidades de liderazgo" },
  { id: 5, image: "https://via.placeholder.com/400x300", title: "Modelo educativo basado en los 4 pilares de la educación de la UNESCO" },
  { id: 6, image: "https://via.placeholder.com/400x300", title: "Transversal" }
];

const ProgramasEscolares = () => {
  const location = useLocation();
  const [activeButton, setActiveButton] = useState(location.pathname);

  const buttonClass = (path) => 
    `btn ${activeButton === path ? 'btn-active' : 'btn-variation-1'}`;

  return (
    <div>
      <div className="flex justify-center space-x-4 mt-8 mb-4">
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

      <h4 className="title color-variation-1 mt-8 mb-20 text-center text-4xl font-extrabold">NUESTROS PROGRAMAS INTEGRAN</h4>

      {/* Carrusel */}
      <InfiniteCarrusel
        cards={InfiniteCarruselData}
        autoPause={true}
        cardWidth={400} 
        cardHeight={300}
        speed={20}
      />

      <InicioCards
          title='METODOLOGIAS DE NUESTROS PROGRAMAS'
          cards={CardsData}
      />

      <InicioCards
          title="ELEMENTOS DE NUESTROS CURSOS"
          cards={CardsData2}
      />
    </div>
  );
};

export default ProgramasEscolares;
