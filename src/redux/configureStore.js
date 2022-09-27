import { configureStore } from '@reduxjs/toolkit';
import bookReducer from './books/books';
import checkReducer from './categories/categories';

const store = configureStore({
  reducer: {
    books: bookReducer,
    category: checkReducer,
  },
});

export default store;
