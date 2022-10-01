import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ue4FbdxlCfd3J4RtI1uF/books';

export const getData = createAsyncThunk('books/getBooks', async () => axios.get(URL).then((result) => result.data));

export const addData = createAsyncThunk('books/addData', async (bookNew) => {
  try {
    return await axios.post(URL, bookNew).then((result) => result.data);
  } catch (error) {
    return error.message;
  }
});

export const removeData = createAsyncThunk('books/removeData', async (id) => {
  try {
    return await axios(`${URL}/${id}`, {
      method: 'DELETE',
      headers: {
        'content-Type': 'application/json',
      },
    }).then((result) => result.data);
  } catch (error) {
    return error.message;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState: { books: [], status: 'status', display: { bookAdd: '', bookRemove: '' } },
  reducers: {
    newBook: (state, action) => [...state, action.payload],
    removeBook: (state, action) => state.books.filter((book) => book.id !== action.payload),
  },
  otherReducers: (Build) => {
    Build.addCase(getData.pending, (state) => ({
      ...state,
      status: 'wait',
    }))
      .addCase(getData.fulfilled, (state, { payload }) => {
        const array = [];
        const arr = Object.entries(payload);
        arr.map(([key, value]) => {
          const data = value.map((i) => ({ ...i, id: key }));
          return array.push(...data);
        });
        return {
          ...state,
          books: array,
          status: 'idle',
        };
      })
      .addCase(getData.rejected, (state, { error }) => ({
        ...state,
        status: error,
      }))
      .addCase(addData.fulfilled, (state, { payload }) => ({
        ...state,
        display: { ...state.display, bookAdd: payload },
      }))
      .addCase(removeData.fulfilled, (state, { payload }) => ({
        ...state,
        display: { ...state.display, bookRemove: payload },
      }))
      .addCase(removeData.rejected, (state, action) => ({
        ...state,
        display: { ...state.display, bookRemove: action.error },
      }));
  },
});
export const { newBook, removeBook } = bookSlice.actions;

export const everyBook = (state) => state.books;

export default bookSlice.reducer;
