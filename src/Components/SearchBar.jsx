import PropTypes from 'prop-types';

const SearchBar = ({ searchTerm, handleSearchChange }) => {
    return (
      <label className="input input-bordered flex items-center gap-2 ml-4 rounded-full overflow-hidden">
        <input
          type="text"
          className="grow text-sm rounded-full outline-none"
          placeholder="Buscar"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </label>
    );
  };

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  handleSearchChange: PropTypes.func.isRequired,
};

export default SearchBar;
