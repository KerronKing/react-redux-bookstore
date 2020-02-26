import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Book from '../components/book';
import { removeAction, changeFilter } from '../actions/index';
import CategoryFilter from '../components/categoryFilter';

class Bookslist extends React.Component {
  constructor(props) {
    super(props);

    this.handleRemoveBook = this.handleRemoveBook.bind(this);
    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleRemoveBook(bookObject) {
    const { removeBook } = this.props;
    removeBook(bookObject);
  }

  handleFilterChange(category) {
    const { filterBook } = this.props;
    filterBook(category);
  }

  render() {
    const { books, filter } = this.props;
    let filteredBooks;
    if (filter === '') {
      filteredBooks = books;
    } else {
      filteredBooks = books.filter(book => book.category === filter);
    }

    return (
      <div>
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
              filteredBooks.map(book => (
                <Book
                  handleRemoveBook={this.handleRemoveBook}
                  key={book.id}
                  bookObject={book}
                />
              ))
            }
          </tbody>
        </table>
        <CategoryFilter handleFilterChange={this.handleFilterChange} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  books: state.book.books,
  filter: state.filtrate.filter,
});
const mapDispatchToProps = dispatch => ({
  removeBook: bookObject => dispatch(removeAction(bookObject)),
  filterBook: category => dispatch(changeFilter(category)),
});

Bookslist.propTypes = {
  books: Proptypes.instanceOf(Object).isRequired,
  filter: Proptypes.string.isRequired,
  removeBook: Proptypes.func.isRequired,
  filterBook: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookslist);
