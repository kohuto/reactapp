function RangeSlider({ value, handleChange, heading, max, name }) {
  return (
    <div className="sort-file-input">
      <h3>{heading}</h3>
      <input
        type="range"
        min="0"
        max={max}
        value={value}
        onChange={handleChange}
        name={name}
      />
      <p>{value}</p>
    </div>
  );
}

export default RangeSlider;
