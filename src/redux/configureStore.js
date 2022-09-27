import { combineReducers, configureStore } from "@reduxjs/toolkit";
import bookReducer from './books/books';
import checkReducer from './categories/categories';

const store = combineReducers({
  reducer: {
    books: bookReducer,
    categories: checkReducer,
  }
})

export default store;