const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createAction = book => ({
  type: CREATE_BOOK,
  book,
});

const removeAction = book => ({
  type: REMOVE_BOOK,
  book,
});

export {
  CREATE_BOOK, REMOVE_BOOK, createAction, removeAction,
};
