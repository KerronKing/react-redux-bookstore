import React from 'react';
import Proptypes from 'prop-types';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.removeBook = this.removeBook.bind(this);
  }

  removeBook() {
    const { bookObject, handleRemoveBook } = this.props;
    handleRemoveBook(bookObject);
  }

  render() {
    const { bookObject } = this.props;
    return (
      <tr className="pl-5 table-row">
        <td className="table-row pl-5">
          <p className="table-category">{bookObject.category}</p>
          <p className="table-title">{bookObject.title}</p>
          <button type="submit" className="table-remove" onClick={this.removeBook}>Remove Book</button>
        </td>

      </tr>
    );
  }
}

Book.propTypes = {
  bookObject: Proptypes.instanceOf(Object).isRequired,
  handleRemoveBook: Proptypes.func.isRequired,
};

export default Book;
