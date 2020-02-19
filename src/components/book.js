import React from 'react';
import Proptypes from 'prop-types';

const Book = props => {
  const { id, title, category } = props;
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{category}</td>
    </tr>
  );
};
export default Book;

Book.propTypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  category: Proptypes.string.isRequired,
};
