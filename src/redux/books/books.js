import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

export const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ue4FbdxlCfd3J4RtI1uF/books';

const initialState = { books: {}, status: 'idle' };

export const getData = createAsyncThunk(
  'books/getBooks',
  async () => {
    try {
      const fetchData = await axios.get(`${URL}`);
      return fetchData.data;
    } catch (error) {
      return error?.response;
    }
  },
);

export const addData = createAsyncThunk(
  'books/addData',
  async (book) => {
    try {
      const postBook = await axios.post(`${URL}`, {
        item_id: uuidv4(),
        title: book.title,
        author: book.author,
        category: book.category,
      });
      return postBook.data;
    } catch (error) {
      return error?.response;
    }
  },
);

export const removeData = createAsyncThunk(
  'books/removeData',
  async (id) => {
    try {
      const bookRemove = await axios.delete(`${URL}/${id}`);
      return bookRemove.data;
    } catch (error) {
      return error?.response;
    }
  },
);

const bookSlice = createSlice({
  name: 'books',
  initialState,
  extraReducers(builder) {
    builder.addCase(getData.pending, (state) => {
      state.status = 'pending';
    })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = 'successful';
        state.books = action.payload;
      })
      .addCase;
    // [getData.fulfilled]: (state, action) => {
    //   const books = Object.keys(action.payload).map((item) => ({
    //     item_id: item,
    //     ...action.payload[item][0],
    //   }));
    //   return books;
    // },
    // [getData.rejected]: (state, action) => action.error.message,
    // [addData.fulfilled]: (state, action) => [...state, action.payload],
    // [addData.rejected]: (state, action) => action.error.message,
    // [removeData.fulfilled]: (state, action) => state.filter((item) => item.item_id !== action.meta.arg),
    // [removeData.rejected]: (state, action) => action.error.message,
  },
});
export const { newBook, removeBook } = bookSlice.actions;

export const everyBook = (state) => state.books;

export default bookSlice.reducer;
