import Cards from '../../../Components/Productos/Cards';
import { kitmergeData } from '../dataCardsProductos';

const KitMergeProductos = () => {
    return (
    <div>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-left">KIT MERGE VISOR + MERGE CUBE Products</h2>
      <Cards cards={kitmergeData} />
    </div>
    );
  };
  
  export default KitMergeProductos;