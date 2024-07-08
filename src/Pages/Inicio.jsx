import Carrusel from '../Components/Carrusel';
import InicioCards from '../Components/InicioCards';
import InfiniteCarrusel from '../Components/InfiniteCarrusel';
import Testimonials from '../Components/Testimonials';
import Infinito from '../Components/Infinito';
import DobleCarrusel from '../Components/DobleCarrusel';

const InicioCardsData = [
  {
    title: "PROGRAMAS ESCOLARES",
    desc: "ECHALE UN OJO",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "CURSOS ROBOTOOLS",
    desc: "ECHALE UN OJO",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image22.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/cursosrobotools",
  },
  {
    title: "RT STEAM ACADEMY",
    desc: "ECHALE UN OJO",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image33.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/rtsteamacademy",
  },
];

const InfiniteCarruselData = [
  { id: 1, image: "https://via.placeholder.com/400x300", title: "a" },
  { id: 2, image: "https://via.placeholder.com/400x300", title: "b" },
  { id: 3, image: "https://via.placeholder.com/400x300", title: "c" },
  { id: 4, image: "https://via.placeholder.com/400x300", title: "d" },
  { id: 5, image: "https://via.placeholder.com/400x300", title: "e" },
  { id: 6, image: "https://via.placeholder.com/400x300", title: "f" },
];

const testimonialsData = [
  {
    quote: '“This is a section of some simple filler text, also known as placeholder text.”',
    image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=112',
    name: 'John McCulling',
    title: 'CEO / Datadrift',
  },
  {
    quote: '“This is a section of some simple filler text, also known as placeholder text.”',
    image: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112',
    name: 'Kate Berg',
    title: 'CFO / Dashdash',
  },
  {
    quote: '“This is a section of some simple filler text, also known as placeholder text.”',
    image: 'https://images.unsplash.com/photo-1567515004624-219c11d31f2e?auto=format&q=75&fit=crop&w=112',
    name: 'John McCulling 2',
    title: 'CEO / Datadrift',
  },
  {
    quote: '“This is a section of some simple filler text, also known as placeholder text.”',
    image: 'https://images.unsplash.com/photo-1532073150508-0c1df022bdd1?auto=format&q=75&fit=crop&w=112',
    name: 'Kate Berg 2',
    title: 'CFO / Dashdash',
  },
  // Agrega más testimonios aquí
];

const InfinitoData =[
  {
    title: "1",
    desc: "1",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "2",
    desc: "2",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "3",
    desc: "3",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "4",
    desc: "4",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "5",
    desc: "5",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
];

const leftCards =[
  {
    title: "1",
    desc: "1",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "2",
    desc: "2",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "3",
    desc: "3",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "4",
    desc: "4",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
];

const rightCards =[
  {
    title: "1",
    desc: "1",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "2",
    desc: "2",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "3",
    desc: "3",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "4",
    desc: "4",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
];

const images = ['/img/Imagenes_Inicio/Carrusel_Inicio/carrusel1.jpeg', '/img/Imagenes_Inicio/Carrusel_Inicio/carrusel2.jpeg', '/img/Imagenes_Inicio/Carrusel_Inicio/carrusel3.jpeg', '/img/Imagenes_Inicio/Carrusel_Inicio/carrusel4.jpeg', '/img/Imagenes_Inicio/Carrusel_Inicio/carrusel5.jpeg'];
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
              <img src='/img/Imagenes_Inicio/premio.png' alt="premio" className="w-24 sm:w-32 lg:w-40 h-auto"></img>
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

      {/*CARRUSEL DE OPINIONES*/}
      <h4 className="title color-variation-1 mt-8 mb-20 text-center text-5xl font-extrabold">LO QUE DICEN NUESTROS ALUMNOS</h4>
      <Testimonials testimonials={testimonialsData} />

      <div className="py-12 sm:py-16 lg:py-24">

      </div>
        <h2 className="mb-4 text-center text-3xl sm:text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-200 to-blue-500 md:mb-6">
          MAS DE NOSOTROS
        </h2>

        <DobleCarrusel 
          leftTitle="Nuestros Servicios"
          leftDescription=""
          leftCards={leftCards}
          rightCards={rightCards}
        />

        <InfiniteCarrusel
        cards={InfiniteCarruselData}
        autoPause={true}
        cardWidth={400} 
        cardHeight={300}
        speed={20}
        />

        <Infinito
        title="Título del Carrusel"
        cards={InfinitoData}
        />

    </div>
  );
};

export default Inicio;
