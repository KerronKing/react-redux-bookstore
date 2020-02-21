import { CREATE_BOOK, REMOVE_BOOK } from '../actions/index';
import randomNumber from '../logic';

const initialState = {
  books: [
    {
      id: randomNumber(),
      title: 'css',
      category: 'Programming',
    },
    {
      id: randomNumber(),
      title: 'Punctuation',
      category: 'English',
    },
    {
      id: randomNumber(),
      title: 'Polynomials',
      category: 'Mathematics',
    },
  ],
};

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        action.book,
      ];
    case REMOVE_BOOK:
      return [
        ...state,
      ];
    default:
      return state;
  }
};

export default booksReducer;