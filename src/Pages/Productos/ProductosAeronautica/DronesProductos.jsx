import Cards from '../../../Components/Productos/Cards';
import { dronesData } from '../dataCardsProductos';

const DronesProductos = () => {
    return (
    <div>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-left">DRONES Products</h2>
      <Cards cards={dronesData} />
    </div>
    );
  };
  
  export default DronesProductos;