import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AcademicCapIcon, ArrowLeftCircleIcon } from "@heroicons/react/24/solid";
import PostsSubSection from '../../../Components/PostsSubSection';

const postsData = [
  {
      title: "LEGO EDUCATION",
      desc: "Going into this journey, I had a standard therapy regimen, based on looking at the research literature. After I saw the movie, I started to ask other people.",
      img: "https://images.unsplash.com/photo-1556155092-490a1ba16284?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      date: "",
      href: "" // Ruta a la que se redirigirá al presionar esta entrada
  },
  {
      title: "NEXT 1.0",
      desc: "According to him, â€œI'm still surprised that this has happened. But we are surprised because we are so surprised.â€More revelations.",
      img: "https://images.unsplash.com/photo-1620287341056-49a2f1ab2fdc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      date: "",
      href: "" // Ruta a la que se redirigirá al presionar esta entrada
  },
  {
      title: "QOBO",
      desc: "I hope I remembered all the stuff that they needed to know. They're like, 'okay,' and write it in their little reading notebooks.",
      img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      date: "",
      href: "" // Ruta a la que se redirigirá al presionar esta entrada
  }
]

const Preescolar = () => {
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

    <div>
          <PostsSubSection posts={postsData} />
    </div>
      
    </div>
  );
}

export default Preescolar;
