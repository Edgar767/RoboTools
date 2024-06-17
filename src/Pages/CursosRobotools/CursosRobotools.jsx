
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

      {/* Cards */}
      <div className="bg-white py-6 sm:py-8 lg:py-12 animate-on-scroll">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="mb-10 md:mb-16">
            <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl color-variation-1">Collections</h2>
            <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">This is a section of some simple filler text, also known as placeholder text. It shares some characteristics of a real written text but is random or otherwise generated.</p>
          </div>

          <div className="grid grid-cols-3 gap-6">
            <a href="/cursosteam" className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src="https://via.placeholder.com/1800x1000" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="relative flex flex-col">
                <span className="text-gray-300"></span>
                <span className="text-lg font-semibold text-white lg:text-xl">NUESTRO CURSO STEAM</span>
              </div>
            </a>
            <a href="horarioscostos" className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src="https://via.placeholder.com/1800x1000" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="relative flex flex-col">
                <span className="text-gray-300">Secundaria</span>
                <span className="text-lg font-semibold text-white lg:text-xl">HORARIOS Y COSTOS</span>
              </div>
            </a>
            <a href="/recorridovirtual" className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src="https://via.placeholder.com/1800x1000" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="relative flex flex-col">
                <span className="text-gray-300">Secundaria</span>
                <span className="text-lg font-semibold text-white lg:text-xl">RECORRIDO VIRTUAL</span>
              </div>
            </a>
            <a href="agendarclase" className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src="https://via.placeholder.com/1800x1000" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="relative flex flex-col">
                <span className="text-gray-300">Secundaria</span>
                <span className="text-lg font-semibold text-white lg:text-xl">AGENDA TU CLASE MUESTRA GRATIS</span>
              </div>
            </a>
            <a href="/convenios" className="group relative flex h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <img src="https://via.placeholder.com/1800x1000" loading="lazy" alt="Photo by Fakurian Design" className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>
              <div className="relative flex flex-col">
                <span className="text-gray-300">Secundaria</span>
                <span className="text-lg font-semibold text-white lg:text-xl">CONVENIOS</span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CursosRobotools;
