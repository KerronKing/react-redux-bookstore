import React from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import { createAction } from '../actions/index';

class BooksForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      category: '',
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

  handleSubmit() {
    const { addBook } = this.props;
    addBook(this.state);
    this.setState({
      title: '',
      category: '',
    });
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
          <select id="categories" onChange={this.handleChange} defaultValue="Select">
            <option value="Select" disabled>Select</option>
            {bookCategories.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </fieldset>
        <button type="submit" onSubmit={this.handleSubmit}>Submit</button>
      </form>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addBook: book => dispatch(createAction(book)),
});

BooksForm.propTypes = {
  addBook: Proptypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
