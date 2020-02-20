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
      this.setState({
        title: e.target.value,
      });
    } else if (e.target.id === 'categories') {
      this.setState({
        category: e.target.value,
      });
    }
    console.log(e.target.id);
  }

  handleSubmit() {
    const { addBook } = this.props;
    addBook(createAction);
    this.setState({
      title: '',
      category: '',
    });
    console.log('submitted');
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
          <select id="categories" onClick={this.handleChange}>
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
  addBook: () => dispatch(createAction()),
});

BooksForm.propTypes = {
  addBook: Proptypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(BooksForm);
