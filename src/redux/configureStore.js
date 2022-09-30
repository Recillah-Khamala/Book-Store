import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/books';
import categoryReducer from './categories/categories';

const Store = configureStore({
  reducer: {
    books: booksReducer,
    category: categoryReducer,
  },
});

export default Store;
