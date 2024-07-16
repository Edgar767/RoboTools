import Tabs from '../../Components/Productos/Tabs';
import Floating from '../../Components/Animation/Floating';
import {
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
} from './dataCardsProductos';

const Productos = () => {
  const carruselDataTab1 = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600',
      title: 'Exclusive Watch',
      price: '50.00',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla id ligula quis lacinia. Curabitur egestas erat non porta finibus. Etiam semper ipsum dictum, condimentum urna non, iaculis nulla.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600',
      title: 'Luxury Plant',
      price: '30.00',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla id ligula quis lacinia. Curabitur egestas erat non porta finibus. Etiam semper ipsum dictum, condimentum urna non, iaculis nulla.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600',
      title: 'Luxury Plant',
      price: '30.00',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla id ligula quis lacinia. Curabitur egestas erat non porta finibus. Etiam semper ipsum dictum, condimentum urna non, iaculis nulla.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600',
      title: 'Luxury Plant',
      price: '30.00',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla id ligula quis lacinia. Curabitur egestas erat non porta finibus. Etiam semper ipsum dictum, condimentum urna non, iaculis nulla.',
    },
    // Add more carousel data as needed
  ];

  const carruselDataTab2 = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600',
      title: 'Exclusive Watch 2',
      price: '55.00',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla id ligula quis lacinia. Curabitur egestas erat non porta finibus. Etiam semper ipsum dictum, condimentum urna non, iaculis nulla.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600',
      title: 'Luxury Plant 2',
      price: '35.00',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla id ligula quis lacinia. Curabitur egestas erat non porta finibus. Etiam semper ipsum dictum, condimentum urna non, iaculis nulla.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600',
      title: 'Luxury Plant 2',
      price: '35.00',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla id ligula quis lacinia. Curabitur egestas erat non porta finibus. Etiam semper ipsum dictum, condimentum urna non, iaculis nulla.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600',
      title: 'Luxury Plant 2',
      price: '35.00',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla id ligula quis lacinia. Curabitur egestas erat non porta finibus. Etiam semper ipsum dictum, condimentum urna non, iaculis nulla.',
    },
    // Add more carousel data for tab 2 as needed
  ];

  const carruselDataTab3 = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&q=75&fit=crop&w=600',
      title: 'Exclusive Watch 3',
      price: '60.00',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla id ligula quis lacinia. Curabitur egestas erat non porta finibus. Etiam semper ipsum dictum, condimentum urna non, iaculis nulla.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600',
      title: 'Luxury Plant 3',
      price: '40.00',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla id ligula quis lacinia. Curabitur egestas erat non porta finibus. Etiam semper ipsum dictum, condimentum urna non, iaculis nulla.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600',
      title: 'Luxury Plant 3',
      price: '40.00',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla id ligula quis lacinia. Curabitur egestas erat non porta finibus. Etiam semper ipsum dictum, condimentum urna non, iaculis nulla.',
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&q=75&fit=crop&w=600',
      title: 'Luxury Plant 3',
      price: '40.00',
      description: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse fringilla id ligula quis lacinia. Curabitur egestas erat non porta finibus. Etiam semper ipsum dictum, condimentum urna non, iaculis nulla.',
    },
    // Add more carousel data for tab 3 as needed
  ];

  return (
    <div className="relative min-h-screen">
      <Floating />
      <div className="relative z-10">
      <Tabs
        carruselDataTab1={carruselDataTab1}
        carruselDataTab2={carruselDataTab2}
        carruselDataTab3={carruselDataTab3}

        legoEducationData={legoEducationData}
        qoboData={qoboData}
        next20Data={next20Data}
        microbitData={microbitData}
        crowbitsData={crowbitsData}
        crowtailsData={crowtailsData}
        mojortData={mojortData}

        dronesData={dronesData}
        cohetebasicoData={cohetebasicoData}
        coheteavanzadoData={coheteavanzadoData}

        visoresData={visoresData}
        mergecubeData={mergecubeData}
        kitmergeData={kitmergeData}
      />
    </div>
    </div>
  );
};

export default Productos;
