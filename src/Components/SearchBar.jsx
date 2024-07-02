import PropTypes from 'prop-types';

const SearchBar = ({ searchTerm, handleSearchChange, activeTab, handleFilterChange, selectedFilter }) => {
  const filters = {
    tab1: ['Todos', 'LEGO EDUCATION', 'QOBO', 'NEXT 2.0', 'MICROBIT', 'CROWBITS', 'CROWTAILS', 'MOJORT'],
    tab2: ['Todos', 'DRONES', 'COHETES KIT BASICO', 'COHETES KIT AVANZADO'],
    tab3: ['Todos', 'VISORES', 'MERGE CUBE', 'KIT MERGE VISOR + MERGE CUBE'],
  };

  return (
    <div className="flex items-center gap-4">
      <label className="input input-bordered flex items-center gap-2 ml-4 rounded-full overflow-hidden">
        <input
          type="text"
          className="grow text-sm rounded-full outline-none"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </label>
      <select 
        className="select select-bordered w-full max-w-xs"
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