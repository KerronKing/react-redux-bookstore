import { combineReducers } from 'redux'
import booksReducer from './bookReducer'

const rootReducer = combineReducers({
  book: booksReducer
})

export default rootReducer
