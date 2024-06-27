import InicioCards from "../../Components/InicioCards";

const InicioCardsData = [
  {
    title: "NUESTRO CURSO STEAM",
    desc: "",
    image: "",
    alt: "Photo by Fakurian Design",
    link: "/cursosteam",
  },
  {
    title: "HORARIOS Y COSTOS",
    desc: "Secundaria",
    image: "",
    alt: "Photo by Fakurian Design",
    link: "/horarioscostos",
  },
  {
    title: "RECORRIDO VIRTUAL",
    desc: "Secundaria",
    image: "",
    alt: "Photo by Fakurian Design",
    link: "/recorridovirtual",
  },
  {
    title: "AGENDA TU CLASE MUESTRA GRATIS",
    desc: "Secundaria",
    image: "",
    alt: "Photo by Fakurian Design",
    link: "/agendarclase",
  },
  {
    title: "CONVENIOS",
    desc: "Secundaria",
    image: "",
    alt: "Photo by Fakurian Design",
    link: "/convenios",
  },
];

const CursosRobotools = () => {
  return (
    <div className="mt-8"> {/* Agrega margen superior a la página */}
      
      {/* Carrusel */}
      <div className="container mx-auto max-w-4xl p-10 animate-on-scroll">
        <div className="w-full carousel rounded-box mb-20">
          <div className="w-full carousel-item image-zoom">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 1" className="w-full" />
          </div>
          <div className="w-full carousel-item image-zoom">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 2" className="w-full" />
          </div>
          <div className="w-full carousel-item image-zoom">
            <img src="https://via.placeholder.com/1800x1000" alt="Carrusel 3" className="w-full" />
          </div>
        </div>
      </div>

      <InicioCards
          title="Nuestros Cursos"
          description="This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated."
          cards={InicioCardsData}
        />
    </div>
  );
};

export default CursosRobotools;
