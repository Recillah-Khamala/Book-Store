const ADD_BOOK = 'redux/books/book/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/book/REMOVE_BOOK';

const initialState = [];

const newBook = (book) => ({
  type: 'ADD_BOOK',
  book,
});

const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.book];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    default:
      return state;
  }
};

export default { newBook, removeBook, bookReducer };
