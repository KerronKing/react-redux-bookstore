import React from 'react'
import Proptypes from 'prop-types'

class Book extends React.Component {
  constructor (props) {
    super(props)
    this.removeBook = this.removeBook.bind(this)
  }

  removeBook () {
    const { bookObject, handleRemoveBook } = this.props
    handleRemoveBook(bookObject)
  }

  render () {
    const { bookObject } = this.props
    return (
      <tr>
        <td>{bookObject.id}</td>
        <td>{bookObject.title}</td>
        <td>{bookObject.category}</td>
        <td><button onClick={this.removeBook} type='button'>Remove Book</button></td>
      </tr>
    )
  }
}

Book.propTypes = {
  bookObject: Proptypes.instanceOf(Object).isRequired,
  handleRemoveBook: Proptypes.func.isRequired
}

export default Book
