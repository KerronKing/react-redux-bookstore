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
      <div className="add-form">
        <h3>ADD NEW BOOK</h3>
        <form>
          <fieldset className="form-group">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a book Title"
              id="formInput"
              onChange={this.handleChange}
            />
          </fieldset>
          <fieldset className="select-cats">
            <select id="categories" onChange={this.handleChange} className="w-100">
              {bookCategories.map(category => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </fieldset>
          <button className="btn btn-primary submit" type="submit" onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
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
