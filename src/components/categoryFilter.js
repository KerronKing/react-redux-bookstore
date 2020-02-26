import React from 'react';

const CategoryFilter = () => {
  const filterCategories = ['All', 'Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <fieldset>
      {filterCategories.map(category => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </fieldset>
  );
};

export default CategoryFilter;
