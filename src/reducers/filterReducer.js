import { CHANGE_FILTER } from '../actions/index';
import initialState from './bookReducer';

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      if (action.category === 'All') {
        return {
          books: [
            ...state.books,
          ],
          filter: '',
        };
      }
      return {
        books: [
          ...state.books,
        ].filter(book => book.category !== action.category),
        filter: action.category,
      };
    default:
      return state;
  }
};

export default filterReducer;
