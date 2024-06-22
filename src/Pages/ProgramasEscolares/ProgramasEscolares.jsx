import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AcademicCapIcon } from "@heroicons/react/24/solid";
import InfiniteCarrusel from "../../Components/InfiniteCarrusel";
import prueba1 from "../../img/Imagenes_Programas/prueba1.png";
import prueba2 from "../../img/Imagenes_Programas/prueba2.png";
import prueba3 from "../../img/Imagenes_Programas/prueba3.png";

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

      {/* Contenedor de imágenes */}
      <InfiniteCarrusel cards={InfiniteCarruselData} autoPause={true} />

      <h4 className="title color-variation-1 mt-20 mb-20 text-center text-4xl font-extrabold">METODOLOGIAS DE NUESTROS PROGRAMAS</h4>

      {/* Contenedor de imágenes */}
      <div className="grid grid-cols-3 gap-4 justify-items-center mb-4 max-w-screen-lg mx-auto">
        <div className="text-center border border-gray-300 p-4 rounded-lg">
          <img src={prueba1} alt="Descripción 1" className="w-full h-auto object-contain" />
          <div className="mt-8 mb-4">
            <h5 className="text-2xl font-bold">TITULO 1</h5>
          </div>
        </div>
        <div className="text-center border border-gray-300 p-4 rounded-lg">
          <img src={prueba2} alt="Descripción 2" className="w-full h-auto object-contain" />
          <div className="mt-8 mb-4">
            <h5 className="text-2xl font-bold">TITULO 2</h5>
          </div>
        </div>
        <div className="text-center border border-gray-300 p-4 rounded-lg">
          <img src={prueba3} alt="Descripción 3" className="w-full h-auto object-contain" />
          <div className="mt-8 mb-4">
            <h5 className="text-2xl font-bold">TITULO 3</h5>
          </div>
        </div>
      </div>

      <h4 className="title color-variation-1 mt-20 mb-20 text-center text-4xl font-extrabold">ELEMENTOS DE NUESTROS PROGRAMAS </h4>

       {/* Contenedor de imágenes */}
       <div className="grid grid-cols-3 gap-4 justify-items-center mb-20 max-w-screen-lg mx-auto">
        <div className="text-center border border-gray-300 p-4 rounded-lg">
          <img src={prueba1} alt="Descripción 1" className="w-full h-auto object-contain" />
          <div className="mt-8 mb-4">
            <h5 className="text-2xl font-bold">MATERIALES</h5>
          </div>
        </div>
        <div className="text-center border border-gray-300 p-4 rounded-lg">
          <img src={prueba2} alt="Descripción 2" className="w-full h-auto object-contain" />
          <div className="mt-8 mb-4">
            <h5 className="text-2xl font-bold">PLANES DE ESTUDIO</h5>
          </div>
        </div>
        <div className="text-center border border-gray-300 p-4 rounded-lg">
          <img src={prueba3} alt="Descripción 3" className="w-full h-auto object-contain" />
          <div className="mt-4 mb-4">
            <h5 className="text-2xl font-bold">SOPORTE PEDAGOGICO</h5>
          </div>
        </div>
      </div>

    </div>
  );
};

export default ProgramasEscolares;
