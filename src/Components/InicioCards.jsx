import PropTypes from "prop-types";

const InicioCards = ({ title, description, cards }) => {
  return (
    <div className="py-12 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-5xl font-bold text-gray-800 md:mb-6 lg:text-5xl">{title}</h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">{description}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <a key={index} href={card.link} className="group relative flex h-64 sm:h-72 lg:h-80 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg">
              <div className="absolute inset-0">
                <img 
                  src={card.image} 
                  loading="lazy" 
                  alt={card.alt} 
                  className="h-full w-full object-cover object-center transition duration-200 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity duration-200"></div>
              </div>
              <div className="relative flex flex-col">
                <span className="text-gray-300">Echa un Vistazo</span>
                <span className="text-lg font-semibold text-white lg:text-xl">{card.title}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

InicioCards.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default InicioCards;
