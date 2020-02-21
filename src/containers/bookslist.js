import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Book from '../components/book';
import { removeAction } from '../actions/index';

class Bookslist extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveBook = this.handleRemoveBook.bind(this);
  }

  handleRemoveBook(bookObject) {
    const { removeBook } = this.props;
    removeBook(bookObject);
  }

  render() {
    const { books } = this.props;

    return (
      <table className="table table-inverse">
        <thead>
          <tr>
            <th>Book id</th>
            <th>Title</th>
            <th>Category</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {
          books.map(book => (
            <Book
              handleRemoveBook={this.handleRemoveBook}
              key={book.id}
              bookObject={book}
            />
          ))
          }
        </tbody>
      </table>
    );
  }
}

const mapStateToProps = state => ({
  books: state.book.books,
});
const mapDispatchToProps = dispatch => ({
  removeBook: bookObject => dispatch(removeAction(bookObject)),
});

Bookslist.propTypes = {
  books: Proptypes.instanceOf(Object).isRequired,
  removeBook: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookslist);
