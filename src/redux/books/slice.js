import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchRecommendedBooks,
  addToLibrary,
  removeFromLibrary,
  startReadingBook,
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
      .addCase(startReadingBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(startReadingBook.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.items.findIndex(
          (book) => book._id === action.payload._id
        );
        if (index !== -1) {
          state.items[index] = {
            ...state.items[index],
            currentPage: action.payload.page,
            isReading: true,
          };
        }
      })
      .addCase(startReadingBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
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

// import { createSelector, createSlice } from "@reduxjs/toolkit";
// import {
//   fetchRecommendedBooks,
//   addToLibrary,
//   removeFromLibrary,
// } from "./operations";

// const initialState = {
//   items: [],
//   library: [],
//   isLoading: false,
//   error: null,
//   filter: {
//     title: "",
//     author: "",
//   },
// };

// const booksSlice = createSlice({
//   name: "books",
//   initialState,
//   reducers: {
//     setFilter(state, action) {
//       state.filter = action.payload;
//     },
//   },
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchRecommendedBooks.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(fetchRecommendedBooks.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.items = action.payload.results;
//       })
//       .addCase(fetchRecommendedBooks.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(addToLibrary.fulfilled, (state, action) => {
//         state.library.push(action.payload);
//       })
//       .addCase(removeFromLibrary.fulfilled, (state, action) => {
//         state.library = state.library.filter(
//           (book) => book._id !== action.payload._id
//         );
//       })
//       .addCase(removeFromLibrary.rejected, (state, action) => {
//         state.error = action.payload;
//       });
//   },
// });

// export const selectFilteredBooks = createSelector(
//   [(state) => state.books.items, (state) => state.books.filter],
//   (books, filter) => {
//     return books.filter(
//       (book) =>
//         book.title.toLowerCase().includes(filter.title.toLowerCase()) &&
//         book.author.toLowerCase().includes(filter.author.toLowerCase())
//     );
//   }
// );

// export const { setFilter } = booksSlice.actions;
// export const booksReducer = booksSlice.reducer;
