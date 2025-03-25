import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchRecommendedBooks,
  addToLibrary,
  removeFromLibrary,
  startReadingBook,
  finishReadingBook,
} from "./operations";

const initialState = {
  items: [],
  library: [],
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
      })
      .addCase(addToLibrary.fulfilled, (state, action) => {
        state.library.push(action.payload);
      })
      .addCase(removeFromLibrary.fulfilled, (state, action) => {
        state.library = state.library.filter(
          (book) => book._id !== action.payload._id
        );
      })
      .addCase(removeFromLibrary.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(startReadingBook.fulfilled, (state, action) => {
        const bookIndex = state.items.findIndex(
          (book) => book._id === action.payload._id
        );
        if (bookIndex !== -1) {
          state.items[bookIndex] = {
            ...state.items[bookIndex],
            ...action.payload,
          };
        }
      })
      .addCase(finishReadingBook.fulfilled, (state, action) => {
        const bookIndex = state.items.findIndex(
          (book) => book._id === action.payload._id
        );
        if (bookIndex !== -1) {
          state.items[bookIndex] = {
            ...state.items[bookIndex],
            ...action.payload,
          };
        }
      });
  },
});

export const selectFilteredBooks = createSelector(
  [(state) => state.books.items, (state) => state.books.filter],
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
