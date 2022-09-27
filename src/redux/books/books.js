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

const bookReducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_BOOK:
      return[...state, action.payload]
    case REMOVE_BOOK:
      return state.filter((book) => book.id !==action.payload )
  }
}

export default { newBook, removeBook, bookReducer } 