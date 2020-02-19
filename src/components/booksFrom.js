import React from 'react'

const BooksForm () => {

	const bookCategories = ["Action", "Biography", "History", "Horror", "Kids", "Learning", "Sci-Fi"]
	return(
		<form>
			<fieldset class="form-group">
				<label for="bookTitleInput">title</label>
				<input type="text" class="form-control" id="title-input-field" placeholder="Enter a book Title">
			</fieldset>
			<fieldset>
				<select>
					{bookCategories.map(categories => <option value={categories}></option>})
					<option value=""></option>
					}
				</select>
			</fieldset>
			<button type="submit"></button>
		</form>
		)
}

export default BooksForm;