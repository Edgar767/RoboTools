import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarruselCards from './CarruselCards';
import Cards from './Cards';
import SearchBar from '../SearchBar';
import { Link } from 'react-router-dom';

const Tabs = ({
  carruselDataTab1,
  carruselDataTab2,
  carruselDataTab3,
  
  legoEducationData,
  qoboData,
  next20Data,
  microbitData,
  crowbitsData,
  crowtailsData,
  mojortData,
  
  dronesData,
  cohetebasicoData,
  coheteavanzadoData,
  
  visoresData,
  mergecubeData,
  kitmergeData,
}) => {
  const [activeTab, setActiveTab] = useState(localStorage.getItem('activeTab') || 'tab1');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('Todos');

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
    setSelectedFilter('Todos'); // Reinicia el filtro cuando se cambia de pestaña
    setSearchTerm(''); // Reinicia la búsqueda cuando se cambia de pestaña
  }, [activeTab]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setSelectedFilter('Todos'); // Reinicia el filtro
    setSearchTerm(''); // Reinicia la búsqueda
  };

  const filteredCards = (cards) => 
    cards.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const filterByCategory = (cards, category) =>
    category === 'Todos' ? cards : cards.filter(card => card.category === category);

  const categoryRoutes = {
    //ROBOTICA
    'LEGO EDUCATION': '/legoproductos',
    'QOBO': '/qoboproductos',
    'NEXT 2.0': '/next20productos',
    'MICROBIT': '/microbitproductos',
    'CROWBITS': '/crowbitsproductos',
    'CROWTAILS': '/crowtailsproductos',
    'MOJORT': '/mojortproductos',
    //AERONAUTICA
    'DRONES': '/dronesproductos',
    'COHETES KIT BASICO': '/cohetebasicoproductos',
    'COHETES KIT AVANZADO': '/coheteavanzadoproductos',
    //REALIDAD VIRTUAL
    'VISORES': '/visoresproductos',
    'MERGE CUBE': '/mergecubeproductos',
    'KIT MERGE VISOR + MERGE CUBE': '/kitmergeproductos',
  };

  const renderFilteredContent = (categoryData, title) => {
    let filtered = filteredCards(categoryData);
    filtered = filterByCategory(filtered, selectedFilter);
  
    if ((searchTerm || selectedFilter !== 'Todos') && filtered.length > 0) {
      return <Cards cards={filtered} />;
    }
  
    if (!searchTerm && selectedFilter === 'Todos') {
      return (
        <>
          <h2 className="text-2xl font-bold mb-6 mt-8 text-left">{title}</h2>
          {renderLimitedCards(filtered)}
          <div className="flex justify-center my-8">
            <Link to={categoryRoutes[title] || '/'}>
              <button className="btn btn-outline btn-primary">Ver Mas</button>
            </Link>
          </div>
        </>
      );
    }
  
    return null;
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const renderLimitedCards = (cards) => {
    const limitedCards = cards.slice(0, 4);
    return <Cards cards={limitedCards} />;
  };

  const tabContent = {
    tab1: (
      <>
        {!searchTerm && selectedFilter === 'Todos' && (
          <>
            <Slider {...settings}>
              {carruselDataTab1.map((card, index) => (
                <div key={index}>
                  <CarruselCards card={card} />
                </div>
              ))}
            </Slider>
          </>
        )}
        {renderFilteredContent(legoEducationData, 'LEGO EDUCATION')}
        {renderFilteredContent(qoboData, 'QOBO')}
        {renderFilteredContent(next20Data, 'NEXT 2.0')}
        {renderFilteredContent(microbitData, 'MICROBIT')}
        {renderFilteredContent(crowbitsData, 'CROWBITS')}
        {renderFilteredContent(crowtailsData, 'CROWTAILS')}
        {renderFilteredContent(mojortData, 'MOJORT')}
      </>
    ),
    
    tab2: (
      <>
        {!searchTerm && selectedFilter === 'Todos' && (
          <>
            <Slider {...settings}>
              {carruselDataTab2.map((card, index) => (
                <div key={index}>
                  <CarruselCards card={card} />
                </div>
              ))}
            </Slider>
          </>
        )}
        {renderFilteredContent(dronesData, 'DRONES')}
        {renderFilteredContent(cohetebasicoData, 'COHETES KIT BASICO')}
        {renderFilteredContent(coheteavanzadoData, 'COHETES KIT AVANZADO')}
      </>
    ),
    
    tab3: (
      <>
        {!searchTerm && selectedFilter === 'Todos' && (
          <>
            <Slider {...settings}>
              {carruselDataTab3.map((card, index) => (
                <div key={index}>
                  <CarruselCards card={card} />
                </div>
              ))}
            </Slider>
          </>
        )}
        {renderFilteredContent(visoresData, 'VISORES')}
        {renderFilteredContent(mergecubeData, 'MERGE CUBE')}
        {renderFilteredContent(kitmergeData, 'KIT MERGE VISOR + MERGE CUBE')}
      </>
    ),
  };

  const renderTitle = () => {
    if (searchTerm) {
      return <h2 className="text-2xl font-bold mb-6 mt-4 text-left">Resultados Similares a: {searchTerm}</h2>;
    } else if (selectedFilter !== 'Todos') {
      return <h2 className="text-2xl font-bold mb-6 mt-4 text-left">{selectedFilter}</h2>;
    } else {
      return <h2 className="text-2xl font-bold mb-6 mt-4 text-left">Productos Nuevos</h2>;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <SearchBar 
          searchTerm={searchTerm}
          handleSearchChange={handleSearchChange}
          activeTab={activeTab}
          handleFilterChange={handleFilterChange}
          selectedFilter={selectedFilter}
        />
        <div className="flex-1 flex justify-center">
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm backdrop-saturate-50 p-1.5 rounded-full text-gray-900 shadow-md">
            <nav className="flex flex-col md:flex-row md:flex-nowrap">
              <button
                onClick={() => handleTabChange('tab1')}
                className={`flex-auto py-3 px-4 text-sm rounded-full font-medium leading-snug tracking-wider uppercase transition ${
                  activeTab === 'tab1' ? 'text-white bg-blue-600' : 'text-gray-800 bg-gray-200'
                }`}
              >
                ROBOTICA
              </button>
              <button
                onClick={() => handleTabChange('tab2')}
                className={`flex-auto py-3 px-4 text-sm rounded-full font-medium leading-snug tracking-wider uppercase transition ${
                  activeTab === 'tab2' ? 'text-white bg-blue-600' : 'text-gray-800 bg-gray-200'
                }`}
              >
                AERONAUTICA
              </button>
              <button
                onClick={() => handleTabChange('tab3')}
                className={`flex-auto py-3 px-4 text-sm rounded-full font-medium leading-snug tracking-wider uppercase transition ${
                  activeTab === 'tab3' ? 'text-white bg-blue-600' : 'text-gray-800 bg-gray-200'
                }`}
              >
                REALIDAD VIRTUAL
              </button>
            </nav>
          </div>
        </div>
        <div className="w-1/4"></div>
      </div>
      {renderTitle()}
      {tabContent[activeTab]}
    </div>
  );
};

Tabs.propTypes = {
  carruselDataTab1: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      discountPrice: PropTypes.string,
    })
  ).isRequired,
  carruselDataTab2: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      discountPrice: PropTypes.string,
    })
  ).isRequired,
  carruselDataTab3: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      discountPrice: PropTypes.string,
    })
  ).isRequired,

  legoEducationData: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      discountPrice: PropTypes.string,
    })
  ).isRequired,
  qoboData: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      discountPrice: PropTypes.string,
    })
  ).isRequired,
  next20Data: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      discountPrice: PropTypes.string,
    })
  ).isRequired,
  microbitData: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      discountPrice: PropTypes.string,
    })
  ).isRequired,
  crowbitsData: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      discountPrice: PropTypes.string,
    })
  ).isRequired,
  crowtailsData: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      discountPrice: PropTypes.string,
    })
  ).isRequired,
  mojortData: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      discountPrice: PropTypes.string,
    })
  ).isRequired,

  dronesData: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      discountPrice: PropTypes.string,
    })
  ).isRequired,
  cohetebasicoData: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      discountPrice: PropTypes.string,
    })
  ).isRequired,
  coheteavanzadoData: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      discountPrice: PropTypes.string,
    })
  ).isRequired,

  visoresData: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      discountPrice: PropTypes.string,
    })
  ).isRequired,
  mergecubeData: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      discountPrice: PropTypes.string,
    })
  ).isRequired,
  kitmergeData: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      description: PropTypes.string,
      discountPrice: PropTypes.string,
    })
  ).isRequired,
};

export default Tabs;