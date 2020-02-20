import React from 'react'
import Book from './book'
import { createAction, removeAction } from '../actions/index'
import { connect } from 'react-redux'

const Bookslist = (props) => {
  console.log(props.books)
  return (
    <table className='table table-inverse'>
      <thead>
        <tr>
          <th>Book id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.books.map((book, index) => <Book key={index} bookObject={book} />)}
      </tbody>
    </table>
  )
}

const mapStateToProps = state => ({
  books: state.books
})
const mapDispatchToProps = dispatch => ({
  addBook: () => dispatch(createAction()),
  removeBook: () => dispatch(removeAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(Bookslist)
