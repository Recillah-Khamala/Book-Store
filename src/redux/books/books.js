const ADD_BOOK = 'redux/books/book/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/book/REMOVE_BOOK';

const initialState = [];

const newBook = (id, title, author) => ({
  type: 'ADD_BOOK',
  title,
  author,
});

const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  id,
})

export default { newBook, removeBook} 