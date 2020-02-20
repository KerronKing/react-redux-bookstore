import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { createAction, removeAction } from '../actions/index';


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

Book.propTypes = {
  id: Proptypes.number.isRequired,
  title: Proptypes.string.isRequired,
  category: Proptypes.string.isRequired,
};

const mapStateToProps = state => ({
  books: state,
});
const mapDispatchToProps = dispatch => ({
  addBook: () => dispatch(createAction()),
  removeBook: () => dispatch(removeAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Book);
