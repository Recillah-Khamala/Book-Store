import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';
import { URL } from '../../component/Sticker';

const storeApi = createApi({
  reducerPath: 'storeApi',
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => '/books',
    }),
    addBook: builder.mutation({
      query: (books) => ({
        url: '/books',
        method: 'POST',
        body: JSON.stringify(books),
        headers: {
          'content-type': 'Application/json; charset=UTF-8',
        },
      }),
    }),
  }),
});

export const { useGetBooksQuery, useAddBookMutation } = storeApi;

export const postBooks = async (book) => {
  const link = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/ue4FbdxlCfd3J4RtI1uF/books';
  try {
    return await axios.post(link, book).then((result) => result.data);
  } catch (error) {
    return error.message;
  }
};
