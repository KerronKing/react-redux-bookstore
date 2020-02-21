import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import Book from '../components/book';
import { createAction, removeAction } from '../actions/index';

const Bookslist = props => {
  const { books } = props;
  return (
    <table className="table table-inverse">
      <thead>
        <tr>
          <th>Book id</th>
          <th>Title</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {books.map(book => <Book key={book.id} bookObject={book} />)}
      </tbody>
    </table>
  );
};

const mapStateToProps = state => ({
  books: state.book.books,
});
const mapDispatchToProps = dispatch => ({
  addBook: () => dispatch(createAction()),
  removeBook: () => dispatch(removeAction()),
});

Bookslist.propTypes = {
  books: Proptypes.instanceOf(Array).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Bookslist);
