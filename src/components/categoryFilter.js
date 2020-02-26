import React from 'react'

const CategoryFilter = (props) => {
  const filterCategories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi']
  return (
    <form>
      <fieldset>
        {filterCategories.map(category => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </fieldset>
      <button>Filter</button>
    </form>
  )
}

export default CategoryFilter
