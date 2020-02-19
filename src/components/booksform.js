import React from 'react';

const BooksForm = () => {
	const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
	return (
		<form>
			<fieldset class="form-group">
				<label for="bookTitleInput">title</label>
				<input type="text" className="form-control" id="title-input-field" placeholder="Enter a book Title" />
			</fieldset>
			<fieldset>
  			<select>
					{bookCategories.map(category => <option value={category}>{category}</option>)}
				</select>
			</fieldset>
			<button type="submit">Submit</button>
		</form>
	);
};

export default BooksForm;
