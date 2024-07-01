import Cards from '../../../Components/Productos/Cards';
import { visoresData } from '../dataCardsProductos';

const VisoresProductos = () => {
    return (
    <div>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-left">VISORES Products</h2>
      <Cards cards={visoresData} />
    </div>
    );
  };
  
  export default VisoresProductos;