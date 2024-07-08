import Prices from "../../Components/Prices";
import Carrusel from "../../Components/Carrusel";

const images = ['/img/Imagenes_RTSteam/prueba1.png', '/img/Imagenes_RTSteam/prueba2.png', '/img/Imagenes_RTSteam/prueba3.png', '/img/Imagenes_RTSteam/prueba4.png', '/img/Imagenes_RTSteam/prueba5.png'];

const RTSteamAcademy = () => {

  return (
    <div> {/* Eliminado el margen superior */}
        <Carrusel images={images} />
        <Prices />
    </div>
  );
};

export default RTSteamAcademy;
