import React from 'react';
import Proptypes from 'prop-types';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);
    this.filterBook = this.filterBook.bind(this);
  }

  filterBook() {
    const { handleFilterChange } = this.props;
    const selector = document.getElementById('filter-categories');
    handleFilterChange(selector.value);
  }

  render() {
    const filterCategories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <div id="category-filter">
        <h3>FILTER</h3>
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
          <button type="button" onClick={this.filterBook} className="btn btn-primary filter-btn">Filter</button>
        </form>
      </div>
    );
  }
}

CategoryFilter.propTypes = {
  handleFilterChange: Proptypes.func.isRequired,
};

export default CategoryFilter;
