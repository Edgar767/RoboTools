import Cards from '../../../Components/Productos/Cards';
import { crowbitsData } from '../dataCardsProductos';

const CrowbitsProductos = () => {
    return (
    <div>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-left">CROWBITS Products</h2>
      <Cards cards={crowbitsData} />
    </div>
    );
  };
  
  export default CrowbitsProductos;