import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

const bookSlice = createSlice({
  name: 'books',
  initialState: [
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
    {
      id: uuidv4(),
      title: 'The hunger games',
      author: 'Suzanne Collins',
    },
    {
      id: uuidv4(),
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      id: uuidv4(),
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
    },
  ],
  reducers: {
    newBook: (initialState, action) => [...initialState, action.payload],
    removeBook: (state, action) => state.filter((book) => book.id !== action.payload),
  },
});
export const { newBook, removeBook } = bookSlice.actions;

export const everyBook = (state) => state.books;

export default bookSlice.reducer;
