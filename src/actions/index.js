const CREATE_BOOK = 'CREATE_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createAction = book => ({
  type: CREATE_BOOK,
  book,
});

const removeAction = book => ({
  type: REMOVE_BOOK,
  book,
});

const changeFilter = category => ({
  type: CHANGE_FILTER,
  category,
});

export {
  CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER, createAction, removeAction, changeFilter,
};
