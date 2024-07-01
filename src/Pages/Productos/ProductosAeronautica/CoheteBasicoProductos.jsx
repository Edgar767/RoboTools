import Cards from '../../../Components/Productos/Cards';
import { cohetebasicoData } from '../dataCardsProductos';

const CoheteBasicoProductos = () => {
    return (
    <div>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-left">COHETES BASICOS Products</h2>
      <Cards cards={cohetebasicoData} />
    </div>
    );
  };
  
  export default CoheteBasicoProductos;