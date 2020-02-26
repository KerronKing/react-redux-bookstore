import { CHANGE_FILTER } from '../actions/index'
import initialState from './bookReducer'

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      if (action.category === 'All') {
        return {
          filter: ''
        }
      }
      return {
        filter: action.category
      }
    default:
      return state
  }
}

export default filterReducer
