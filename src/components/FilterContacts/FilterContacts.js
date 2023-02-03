import { FilterSection, FilterTitle, FilterInput } from './filterContact.styled'

function FilterContact({ filter, onChange, findName }) {
  return (
    <FilterSection>
      <FilterTitle>
        Find contacts by name
        <FilterInput
          type="text"
          name="filter"
          value={filter}
          onChange={({ target }) => onChange(target.value)}
        />
      </FilterTitle>
    </FilterSection>
  );
}
export default FilterContact;
