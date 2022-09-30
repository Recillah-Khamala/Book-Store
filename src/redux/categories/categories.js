import { createSlice } from '@reduxjs/toolkit';

const category = createSlice({
  name: 'category',
  initialState: null,
  reducers: {
    status: (state, action) => ({
      ...state,
      display: action.payload,
    }),
  },
});

export const { status } = category.actions;

export const everyCategory = (state) => state.category;

export default category.reducer;
