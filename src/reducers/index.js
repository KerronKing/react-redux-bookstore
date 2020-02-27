import { combineReducers } from 'redux';
import booksReducer from './bookReducer';
import filterReducer from './filterReducer';

const rootReducer = combineReducers({
  book: booksReducer,
  filtrate: filterReducer,
});

export default rootReducer;
