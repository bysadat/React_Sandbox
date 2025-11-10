const SortSelector = ({ sortBy, onSortChange }) => {
  return (
    <div className="controls">
      <label htmlFor="sort">Sort By: </label>
      <select
        id="sort"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
      >
        <option value="market_cap_desc">Market Cap (High To LOw)</option>
        <option value="market_cap_asc">Market Cap (Low To High)</option>
        <option value="price_desc">Price (High To Low)</option>
        <option value="price_asc">Price (Low To High)</option>
        <option value="change_desc">24H Change (High To Low)</option>
        <option value="change_asc">24H Change (Low To High)</option>
      </select>
    </div>
  );
};

export default SortSelector;
