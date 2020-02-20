import React from 'react';
import Book from './book';

const Bookslist = () => (
  <table className="table table-inverse">
    <thead>
      <tr>
        <th>Book id</th>
        <th>Title</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      <Book />
    </tbody>
  </table>
);
export default Bookslist;
