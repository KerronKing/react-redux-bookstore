import React from 'react'

class CategoryFilter extends Reack.Component {
  constructor (props) {
    super(props)
    this.filterBook.bind(this)
  }

  filterBook () {
    const { handleFilterChange } = this.props
    handleFilterChange(category)
  }

  render () {
    const filterCategories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi']
    return (
      <form>
        <fieldset>
          <select id='filter-categories' onChange={this.handleChange}>
            {filterCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </fieldset>
        <button onClick={this.filterBook}>Filter</button>
      </form>
    )
  }
}

export default CategoryFilter
