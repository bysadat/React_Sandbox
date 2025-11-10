const LimitSelector = ({ limit, onLimitChange }) => {
  return (
    <div className="controls">
      <label htmlFor="limit">Show:</label>
      <select
        id="limit"
        value={limit}
        onChange={(e) => onLimitChange(Number(e.target.value))}
      >
        <option value="6">6</option>
        <option value="12">12</option>
        <option value="22">22</option>
        <option value="52">52</option>
        <option value="102">102</option>
      </select>
    </div>
  );
};

export default LimitSelector;
