import { Link } from 'react-router-dom';
import { AcademicCapIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import Card from '../../../Components/Card';

const Preescolar = () => {
  return (
    <div>
      <div className="flex justify-center space-x-4 mt-8 mb-4">
        <div className="flex justify-center">
        {/* Botón para regresar */}
          <Link to="/ProgramasEscolares">
            <button className="btn btn-variation-3">
              <ArrowLeftCircleIcon className="h-6 w-6" />
            </button>
          </Link>

          <Link to="/preescolar">
            <button className="btn btn-variation-1">
              <AcademicCapIcon className="h-6 w-6" />
              Preescolar
            </button>
          </Link>
          <Link to="/primaria">
            <button className="btn btn-variation-1">
              <AcademicCapIcon className="h-6 w-6" />
              Primaria
            </button>
          </Link>
          <Link to="/secundaria">
            <button className="btn btn-variation-3">
              <AcademicCapIcon className="h-6 w-6" />
              Secundaria
            </button>
          </Link>
        </div>
      </div>

      <h4 className="title color-variation-1 mt-20 mb-10 text-center text-4xl font-extrabold">Preescolar</h4>

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

      <Card />
      
    </div>
  );
}

export default Preescolar;
