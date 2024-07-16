import Prices from "../../Components/Prices";
import Carrusel from "../../Components/Carrusel";
import Floating from '../../Components/Animation/Floating';


const images = ['/img/Imagenes_RTSteam/prueba1.png', '/img/Imagenes_RTSteam/prueba2.png', '/img/Imagenes_RTSteam/prueba3.png', '/img/Imagenes_RTSteam/prueba4.png', '/img/Imagenes_RTSteam/prueba5.png'];

const RTSteamAcademy = () => {

  return (
    <div className="relative min-h-screen">
      <Floating />
      <div className="relative z-10">
    <div> {/* Eliminado el margen superior */}
        <Carrusel images={images} />
        <Prices />
    </div>'
    </div>
    </div>
  );
};

export default RTSteamAcademy;
