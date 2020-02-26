import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { createAction } from '../actions/index';
import randomNumber from '../logic';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: 'Action',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    if (e.target.id === 'formInput') {
      this.setState({ title: e.target.value });
    } else {
      this.setState({ category: e.target.value });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addBook } = this.props;
    const inputField = document.getElementById('formInput');

    const book = {
      id: randomNumber(),
      ...this.state,
    };
    addBook(book);
    this.setState({
      title: '',
      category: 'Action',
    });
    inputField.value = '';
  }

  render() {
    const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <form>
        <fieldset className="form-group">
          <label htmlFor="formInput">
            title
            <input
              type="text"
              className="form-control"
              placeholder="Enter a book Title"
              id="formInput"
              onChange={this.handleChange}
            />
          </label>
        </fieldset>
        <fieldset>
          <select id="categories" onChange={this.handleChange}>
            {bookCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </fieldset>
        <button type="submit" onClick={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  books: state.book.books,
});

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(createAction(book)),
});

BooksForm.propTypes = {
  addBook: Proptypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksForm);
