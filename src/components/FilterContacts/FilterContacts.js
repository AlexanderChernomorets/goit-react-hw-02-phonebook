function FilterContact({ filter, onChange, findName }) {
  return (
    <div>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filter}
          onChange={({ target }) => onChange(target.value)}
        />
      </label>
    </div>
  );
}
export default FilterContact;
