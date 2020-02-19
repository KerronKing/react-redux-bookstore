import React from 'react';

const BooksForm = () => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
  return (
    <form>
      <fieldset className="form-group">
        <label htmlFor="formInput">
          title
          <input
            type="text"
            className="form-control"
            placeholder="Enter a book Title"
            id="formInput"
          />
        </label>
      </fieldset>
      <fieldset>
        <select>
          {bookCategories.map(category => (
            <option key={category.id} value={category}>
              {category}
            </option>
          ))}
        </select>
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  );
};

export default BooksForm;
