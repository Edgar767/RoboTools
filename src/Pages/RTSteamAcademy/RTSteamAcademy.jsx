import Prices from "../../Components/Prices";
import Carrusel from "../../Components/Carrusel";
import image1 from '/img/prueba1.png';
import image2 from '/img/prueba2.png';
import image3 from '/img/prueba3.png';
import image4 from '/img/prueba4.png';
import image5 from '/img/prueba5.png';

const images = [image1, image2, image3, image4, image5];

const RTSteamAcademy = () => {

  return (
    <div> {/* Eliminado el margen superior */}
        <Carrusel images={images} />
        <Prices />
    </div>
  );
};

export default RTSteamAcademy;
