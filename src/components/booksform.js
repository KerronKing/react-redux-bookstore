import React from 'react'

const BooksForm = () => {
  const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi']
  return (
    <form>
      <fieldset className='form-group'>
        <label>title</label>
        <input type='text' className='form-control' id='title-input-field' placeholder='Enter a book Title' />
      </fieldset>
      <fieldset>
        <select>
          {bookCategories.map((category, i) => {
            return <option key={i} value={category}>{category}</option>
          })}
        </select>
      </fieldset>
      <button type='submit'>Submit</button>
    </form>
  )
}

export default BooksForm
