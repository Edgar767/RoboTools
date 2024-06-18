import { Link } from 'react-router-dom';
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

      <h4 className="title color-variation-1 mt-20 mb-0 text-center text-4xl font-extrabold">PREESCOLAR</h4>

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

    <div>
        <h4 className="title color-variation-1 mt-20 mb-0 text-center text-4xl font-extrabold">PREESCOLAR</h4>
            <PostsSubSection posts={postsData} />
    </div>
      
    </div>
  );
}

export default Preescolar;
