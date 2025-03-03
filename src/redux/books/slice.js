import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchRecommendedBooks } from "./operations";
import { selectBooks, selectFilter } from "./selectors";

const initialState = {
  items: [],
  isLoading: false,
  error: null,
  filter: {
    title: "",
    author: "",
  },
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendedBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchRecommendedBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload.results;
      })
      .addCase(fetchRecommendedBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const selectFilteredBooks = createSelector(
  [selectBooks, selectFilter],
  (books, filter) => {
    return books.filter(
      (book) =>
        book.title.toLowerCase().includes(filter.title.toLowerCase()) &&
        book.author.toLowerCase().includes(filter.author.toLowerCase())
    );
  }
);

export const { setFilter } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;
