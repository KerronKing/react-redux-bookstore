import { createStore } from 'redux'
import booksReducer from './reducers/bookReducer'
import rootReducer from './reducers/index'

const store = createStore(rootReducer)

export default store
