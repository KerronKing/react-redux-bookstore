import React from 'react';
import Proptypes from 'prop-types';

const Book = props => {
  const { bookObject } = props;
  return (
    <tr>
      <td>{bookObject.id}</td>
      <td>{bookObject.title}</td>
      <td>{bookObject.category}</td>
    </tr>
  );
};

Book.propTypes = {
  bookObject: Proptypes.instanceOf(Object).isRequired,
};

export default Book;
