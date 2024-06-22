import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import PostsSection from '../../../Components/PostsSection';
import { AcademicCapIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/solid";

const postsData = [
    {
        title: "ROBOTICA",
        desc: "",
        img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/RoboticaSec" // Ruta a la que se redirigirá al presionar esta entrada
    },
    {
        title: "AERONAUTICA",
        desc: "",
        img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/AeronauticaSec" // Ruta a la que se redirigirá al presionar esta entrada
    },
    {
        title: "REALIDAD VIRTUAL Y AUMENTADA",
        desc: "",
        img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/RealidadVirtualSec" // Ruta a la que se redirigirá al presionar esta entrada
    },
    {
        title: "BREAKOUT EDU",
        desc: "",
        img: "https://images.unsplash.com/photo-1617529497471-9218633199c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
        date: "",
        href: "/BreakoutSec" // Ruta a la que se redirigirá al presionar esta entrada
    }
];

const Secundaria = () => {
    const location = useLocation();
    const [activeButton, setActiveButton] = useState(location.pathname);
  
    const buttonClass = (path) => 
      `btn ${activeButton === path ? 'btn-active' : 'btn-variation-1'}`;

    return (
        <div>
      <div className="flex justify-center space-x-4 mt-8 mb-4">
        {/* Botón para regresar */}
        <Link to="/ProgramasEscolares">
          <button className="btn btn-variation-3">
            <ArrowLeftCircleIcon className="h-6 w-6" />
          </button>
        </Link>
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

        <h4 className="title color-variation-1 mt-20 mb-10 text-center text-4xl font-extrabold">Secundaria</h4>
        <PostsSection posts={postsData} />
    </div>
    );
}

export default Secundaria;
