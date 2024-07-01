import Cards from '../../../Components/Productos/Cards';
import { crowtailsData } from '../dataCardsProductos';

const CrowtailsProductos = () => {
    return (
    <div>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-left">CROWTAILS Products</h2>
      <Cards cards={crowtailsData} />
    </div>
    );
  };
  
  export default CrowtailsProductos;