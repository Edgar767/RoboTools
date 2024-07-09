import Carrusel from '../Components/Carrusel';
import InicioCards from '../Components/InicioCards';
import InfiniteCarrusel from '../Components/InfiniteCarrusel';
import Testimonials from '../Components/Testimonials';
import Infinito from '../Components/Infinito';
import DobleCarrusel from '../Components/DobleCarrusel';
import Prices from '../Components/Prices';
import { Link } from 'react-router-dom';

const InicioCardsData = [
  {
    title: "PROGRAMAS ESCOLARES",
    desc: "DALE UN VISTAZO",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "CURSOS ROBOTOOLS",
    desc: "DALE UN VISTAZO",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image22.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/cursosrobotools",
  },
  {
    title: "RT STEAM ACADEMY",
    desc: "DALE UN VISTAZO",
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
    title: "Estatal Emprendedores Aguascalientes 2007",
    desc: "1er Lugar Premio",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "World Robot Olympiad 2013.",
    desc: "2do. Lugar categoría primaria en la competencia regional de la",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "World Robot Olympiad 2013.",
    desc: "3er. Lugar en el Nacional categoría secundaria de",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "World Robot Olympiad, Regional Querétaro. Junio 2014.",
    desc: "1er. Lugar en categoría Secundaria en competencia",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "World Robot Olympiad Nacional.",
    desc: "5 Equipos: 2 de Secundaria y 3 de Primaria consiguen su pase a",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "World Robot Olympiad, regional Guadalajara 2015.",
    desc: "2do. Lugar categoría Primario en competencia",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "First LEGO League en Estado de México 2013.",
    desc: "Subcampeón en competencia",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "Gracious Professionalism en competencia First LEGO League en Estado de México 2013.",
    desc: "Reconocimiento",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "Gracious Professionalism en competencia First LEGO League en Monterrey 2014.",
    desc: "Reconocimiento",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "First LEGO League en Monterrey 2014.",
    desc: "Reconocimiento a la mejor programación en competencia",
    image: '/img/Imagenes_Inicio/Inicio_Cards/image11.jpeg',
    alt: "Photo by Fakurian Design",
    link: "/programasescolares",
  },
  {
    title: "World Robot Olympiad, Regional Monterrey 2016.",
    desc: "Segundo lugar en categoría primaria en competencia",
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

      <Infinito
        title="RECONOCIMIENTOS Y PREMIACIONES"
        cards={InfinitoData}
      />

      {/*CARRUSEL DE OPINIONES*/}
      <h4 className="title color-variation-1 mt-8 mb-20 text-center text-5xl font-extrabold">LO QUE DICEN NUESTROS ALUMNOS</h4>
      <Testimonials testimonials={testimonialsData} />

        <DobleCarrusel 
          leftTitle="NUESTROS SERVICIOS"
          leftDescription=""
          leftCards={leftCards}
          rightCards={rightCards}
        />

        <Prices />

        <h4 className="title color-variation-1 mt-8 mb-20 text-center text-5xl font-extrabold">SIGUENOS EN NUESTRAS REDES SOCIALES</h4>

        <div className="flex items-center">
            <Link to="https://www.facebook.com/Robotools">
              <img
                className="h-10 w-auto md:h-12 lg:h-16 mr-2"
                src="/icons/facebook.svg"
              />
            </Link>
        </div>

        <div className="flex items-center">
            <Link to="https://www.instagram.com/robotools.rt/">
              <img
                className="h-10 w-auto md:h-12 lg:h-16 mr-2"
                src="/icons/instagram.svg"
              />
            </Link>
        </div>

        <InfiniteCarrusel
          cards={InfiniteCarruselData}
          autoPause={true}
          cardWidth={400} 
          cardHeight={300}
          speed={20}
        />

    </div>
  );
};

export default Inicio;
