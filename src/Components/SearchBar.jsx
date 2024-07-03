import PropTypes from 'prop-types';

const SearchBar = ({ searchTerm, handleSearchChange, activeTab, handleFilterChange, selectedFilter }) => {
  const filters = {
    tab1: ['Todos', 'LEGO EDUCATION', 'QOBO', 'NEXT 2.0', 'MICROBIT', 'CROWBITS', 'CROWTAILS', 'MOJORT'],
    tab2: ['Todos', 'DRONES', 'COHETES KIT BASICO', 'COHETES KIT AVANZADO'],
    tab3: ['Todos', 'VISORES', 'MERGE CUBE', 'KIT MERGE VISOR + MERGE CUBE'],
  };

  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full px-4 py-2">
      <label className="input input-bordered flex items-center gap-2 rounded-full overflow-hidden w-full sm:w-auto mb-2 sm:mb-0">
        <input
          type="text"
          className="grow text-sm rounded-full outline-none w-full"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </label>
      <select 
        className="select select-bordered w-full sm:w-auto"
        onChange={handleFilterChange}
        value={selectedFilter}
      >
        {filters[activeTab].map((filter) => (
          <option key={filter} value={filter}>{filter}</option>
        ))}
      </select>
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
  handleFilterChange: PropTypes.func.isRequired,
  selectedFilter: PropTypes.string.isRequired,
};

export default SearchBar;