import React from 'react';
import Proptypes from 'prop-types';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.filterBook.bind(this);
  }

  filterBook() {
    const { handleFilterChange } = this.props;
    const selector = document.getElementById('filter-categories');
    handleFilterChange(selector.value);
  }

  render() {
    const filterCategories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form>
        <fieldset>
          <select id="filter-categories" onChange={this.handleChange}>
            {filterCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </fieldset>
        <button type="button" onClick={this.filterBook}>Filter</button>
      </form>
    );
  }
}

CategoryFilter.propTypes = {
  handleFilterChange: Proptypes.func.isRequired,
};

export default CategoryFilter;
