import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import CarruselCards from './CarruselCards';
import Cards from './Cards';
import SearchBar from './SearchBar';
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

  useEffect(() => {
    localStorage.setItem('activeTab', activeTab);
  }, [activeTab]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCards = (cards) => 
    cards.filter((card) =>
      card.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const renderCardsOrMessage = (cards) => {
    const filtered = filteredCards(cards);
    return filtered.length > 0 ? <Cards cards={filtered} /> : <h2>No se Encontro el Producto que esta buscando :(</h2>;
  };

  const renderLimitedCards = (cards) => {
    const limitedCards = cards.slice(0, 4);
    return <Cards cards={limitedCards} />;
  };

  const tabContent = {
    tab1: (
      <>
        {searchTerm ? (
          renderCardsOrMessage([...legoEducationData, ...qoboData, ...next20Data, ...microbitData, ...crowbitsData, ...crowtailsData, ...mojortData])
        ) : (
          <>
            <Slider {...settings}>
              {carruselDataTab1.map((card, index) => (
                <div key={index}>
                  <CarruselCards card={card} />
                </div>
              ))}
            </Slider>
            <h2 className="text-2xl font-bold mb-6 mt-8 text-left">LEGO EDUCATION</h2>
            {renderLimitedCards(legoEducationData)}
            <div className="flex justify-center my-8">
              <Link to="/legoproductos">
                <button className="btn btn-outline btn-primary">Ver Mas</button>
              </Link>
            </div>
            <h2 className="text-2xl font-bold mb-6 mt-8 text-left">QOBO</h2>
            {renderLimitedCards(qoboData)}
            <div className="flex justify-center my-8">
              <Link to="/qoboproductos">
                <button className="btn btn-outline btn-primary">Ver Mas</button>
              </Link>
            </div>
            <h2 className="text-2xl font-bold mb-6 mt-8 text-left">NEXT 2.0</h2>
            {renderLimitedCards(next20Data)}
            <div className="flex justify-center my-8">
              <Link to="/next20productos">
                <button className="btn btn-outline btn-primary">Ver Mas</button>
              </Link>
            </div>
            <h2 className="text-2xl font-bold mb-6 mt-8 text-left">MICROBIT</h2>
            {renderLimitedCards(microbitData)}
            <div className="flex justify-center my-8">
              <Link to="/microbitproductos">
                <button className="btn btn-outline btn-primary">Ver Mas</button>
              </Link>
            </div>
            <h2 className="text-2xl font-bold mb-6 mt-8 text-left">CROWBITS</h2>
            {renderLimitedCards(crowbitsData)}
            <div className="flex justify-center my-8">
              <Link to="/crowbitsproductos">
                <button className="btn btn-outline btn-primary">Ver Mas</button>
              </Link>
            </div>
            <h2 className="text-2xl font-bold mb-6 mt-8 text-left">CROWTAILS</h2>
            {renderLimitedCards(crowtailsData)}
            <div className="flex justify-center my-8">
              <Link to="/crowtailsproductos">
                <button className="btn btn-outline btn-primary">Ver Mas</button>
              </Link>
            </div>
            <h2 className="text-2xl font-bold mb-6 mt-8 text-left">MOJORT</h2>
            {renderLimitedCards(mojortData)}
            <div className="flex justify-center my-8">
              <Link to="/mojortproductos">
                <button className="btn btn-outline btn-primary">Ver Mas</button>
              </Link>
            </div>
          </>
        )}
      </>
    ),
    tab2: (
      <>
        {searchTerm ? (
          renderCardsOrMessage([...dronesData, ...cohetebasicoData, ...coheteavanzadoData])
        ) : (
          <>
            <Slider {...settings}>
              {carruselDataTab2.map((card, index) => (
                <div key={index}>
                  <CarruselCards card={card} />
                </div>
              ))}
            </Slider>
            <h2 className="text-2xl font-bold mb-6 mt-8 text-left">DRONES</h2>
            {renderLimitedCards(dronesData)}
            <div className="flex justify-center my-8">
              <Link to="/dronesproductos">
                <button className="btn btn-outline btn-primary">Ver Mas</button>
              </Link>
            </div>
            <h2 className="text-2xl font-bold mb-6 mt-8 text-left">COHETES KIT BASICO</h2>
            {renderLimitedCards(cohetebasicoData)}
            <div className="flex justify-center my-8">
              <Link to="/cohetebasicoproductos">
                <button className="btn btn-outline btn-primary">Ver Mas</button>
              </Link>
            </div>
            <h2 className="text-2xl font-bold mb-6 mt-8 text-left">COHETES KIT AVANZADO</h2>
            {renderLimitedCards(coheteavanzadoData)}
            <div className="flex justify-center my-8">
              <Link to="/coheteavanzadoproductos">
                <button className="btn btn-outline btn-primary">Ver Mas</button>
              </Link>
            </div>
          </>
        )}
      </>
    ),
    tab3: (
      <>
        {searchTerm ? (
          renderCardsOrMessage([...visoresData, ...mergecubeData, ...kitmergeData])
        ) : (
          <>
            <Slider {...settings}>
              {carruselDataTab3.map((card, index) => (
                <div key={index}>
                  <CarruselCards card={card} />
                </div>
              ))}
            </Slider>
            <h2 className="text-2xl font-bold mb-6 mt-8 text-left">VISORES</h2>
            {renderLimitedCards(visoresData)}
            <div className="flex justify-center my-8">
              <Link to="/visoresproductos">
                <button className="btn btn-outline btn-primary">Ver Mas</button>
              </Link>
            </div>
            <h2 className="text-2xl font-bold mb-6 mt-8 text-left">MERGE CUBE</h2>
            {renderLimitedCards(mergecubeData)}
            <div className="flex justify-center my-8">
              <Link to="/mergecubeproductos">
                <button className="btn btn-outline btn-primary">Ver Mas</button>
              </Link>
            </div>
            <h2 className="text-2xl font-bold mb-6 mt-8 text-left">KIT MERGE VISOR + MERGE CUBE</h2>
            {renderLimitedCards(kitmergeData)}
            <div className="flex justify-center my-8">
              <Link to="/kitmergeproductos">
                <button className="btn btn-outline btn-primary">Ver Mas</button>
              </Link>
            </div>
          </>
        )}
      </>
    ),
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <SearchBar searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
        <div className="flex-1 flex justify-center">
          <div className="bg-white bg-opacity-80 backdrop-filter backdrop-blur-sm backdrop-saturate-50 p-1.5 rounded-full text-gray-900 shadow-md">
            <nav className="flex flex-col md:flex-row md:flex-nowrap">
              <button
                onClick={() => setActiveTab('tab1')}
                className={`flex-auto py-3 px-4 text-sm rounded-full font-medium leading-snug tracking-wider uppercase transition ${
                  activeTab === 'tab1' ? 'text-white bg-blue-600' : 'text-gray-800 bg-gray-200'
                }`}
              >
                ROBOTICA
              </button>
              <button
                onClick={() => setActiveTab('tab2')}
                className={`flex-auto py-3 px-4 text-sm rounded-full font-medium leading-snug tracking-wider uppercase transition ${
                  activeTab === 'tab2' ? 'text-white bg-blue-600' : 'text-gray-800 bg-gray-200'
                }`}
              >
                AERONAUTICA
              </button>
              <button
                onClick={() => setActiveTab('tab3')}
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
      <h2 className="text-2xl font-bold mb-6 mt-4 text-left">Productos Nuevos</h2>
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
