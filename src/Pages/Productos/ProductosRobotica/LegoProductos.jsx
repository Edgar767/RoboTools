import Cards from '../../../Components/Productos/Cards';
import { legoEducationData } from '../dataCardsProductos';

const LegoProductos = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 mt-4 text-left">Lego Education Products</h2>
      <Cards cards={legoEducationData} />
    </div>
  );
};

export default LegoProductos;
