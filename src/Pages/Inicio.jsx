import Carrusel from '../Components/Carrusel';
import image1 from '../img/Imagenes_Inicio/Carrusel_Inicio/carrusel1.jpeg';
import image2 from '../img/Imagenes_Inicio/Carrusel_Inicio/carrusel2.jpeg';
import image3 from '../img/Imagenes_Inicio/Carrusel_Inicio/carrusel3.jpeg';
import image4 from '../img/Imagenes_Inicio/Carrusel_Inicio/carrusel4.jpeg';
import image5 from '../img/Imagenes_Inicio/Carrusel_Inicio/carrusel5.jpeg';
import premio from '../img/Imagenes_Inicio/premio.png';
import InicioCards from '../Components/InicioCards';
import image11 from "../img/Imagenes_Inicio/Inicio_Cards/image11.jpeg";
import image22 from "../img/Imagenes_Inicio/Inicio_Cards/image22.jpeg";
import image33 from "../img/Imagenes_Inicio/Inicio_Cards/image33.jpeg";
import InfiniteCarrusel from '../Components/InfiniteCarrusel';

const InicioCardsData = [
  {
    title: "PROGRAMAS ESCOLARES",
    desc: "ECHALE UN OJO",
    image: image11,
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "CURSOS ROBOTOOLS",
    desc: "ECHALE UN OJO",
    image: image22,
    alt: "Photo by Fakurian Design",
    link: "/cursosrobotools",
  },
  {
    title: "RT STEAM ACADEMY",
    desc: "ECHALE UN OJO",
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

  return (
    <div>
      {/* Carrusel */}
      <div>
        <Carrusel images={images} title='DESARROLLANDO' title2Texts={title2Texts} />
      </div>

      {/* INICIO CURSOS */}
        <InicioCards
          title="Nuestros Cursos"
          description="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."
          cards={InicioCardsData}
        />

      {/* FIN CURSOS */}

      <div className="py-12 sm:py-16 lg:py-24">
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

      <div className="py-12 sm:py-16 lg:py-24">
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
