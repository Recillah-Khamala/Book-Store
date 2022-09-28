import {v4 as uuidv4} from 'uuid';


const ADD_BOOK = 'redux/books/book/ADD_BOOK';
const REMOVE_BOOK = 'redux/books/book/REMOVE_BOOK';

const initialState = [
  {
    id: uuidv4(),
    title: 'The Smart parent',
    aythor: 'Nancy Van Pelt',
  },
  {
    id: uuidv4(),
    title: 'Choose Your Hard',
    aythor: 'Recillah Khamala',
  },
];

const newBook = (id, title, author) => ({
  type: 'ADD_BOOK',
  payload: { id, title, author },
});

const removeBook = (id) => ({
  type: 'REMOVE_BOOK',
  id,
});

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
};

export default { newBook, removeBook, bookReducer };
