const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';

const createAction = book => ({
  type: CREATE_BOOK,
  id: book.id,
});

const removeAction = book => ({
  type: REMOVE_BOOK,
  id: book.id,
});

export {
  CREATE_BOOK, REMOVE_BOOK, createAction, removeAction,
};
