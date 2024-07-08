import Prices from "../../Components/Prices";
import Carrusel from "../../Components/Carrusel";

const images = ['/img/prueba1.png', '/img/prueba2.png', '/img/prueba3.png', '/img/prueba4.png', '/img/prueba5.png'];

const RTSteamAcademy = () => {

  return (
    <div> {/* Eliminado el margen superior */}
        <Carrusel images={images} />
        <Prices />
    </div>
  );
};

export default RTSteamAcademy;
