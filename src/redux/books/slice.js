import { createSelector, createSlice } from "@reduxjs/toolkit";
import {
  fetchRecommendedBooks,
  addToLibrary,
  removeFromLibrary,
  startReadingBook,
  finishReadingBook,
  getBookInfo,
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
  readingStatus: {
    bookId: null,
    isReading: false,
    page: 1,
  },
  readingProgress: []
};

const booksSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    setFilter(state, action) {
      state.filter = action.payload;
    },
    addReadingProgress(state, action) {
      state.readingProgress.push(action.payload);
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
      .addCase(removeFromLibrary.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(removeFromLibrary.fulfilled, (state, action) => {
        state.isLoading = false;
        state.library = state.library.filter(
          (book) => book._id !== action.payload.id
        );
      })
      .addCase(removeFromLibrary.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(startReadingBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(startReadingBook.fulfilled, (state, action) => {
        console.log("Start reading successful:", action.payload);
        state.isLoading = false;
        state.readingStatus = {
          bookId: action.payload.id,
          isReading: true,
          page: action.payload.page,
        };
      })
      .addCase(startReadingBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(finishReadingBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(finishReadingBook.fulfilled, (state, action) => {
        console.log("Finish reading successful", action.payload);
        state.isLoading = false;
        state.readingStatus = {
          bookId: null,
          isReading: false,
          page: 0,
        };
      })
      .addCase(finishReadingBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getBookInfo.fulfilled, (state, action) => {
        console.log("Updating readingProgress:", action.payload.readingProgress);
        state.readingProgress = action.payload.readingProgress || [];
      })
      ;
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

export const { setFilter, addReadingProgress } = booksSlice.actions;
export const booksReducer = booksSlice.reducer;

// import { createSelector, createSlice } from "@reduxjs/toolkit";
// import {
//   fetchRecommendedBooks,
//   addToLibrary,
//   removeFromLibrary,
//   startReadingBook,
//   finishReadingBook,
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
//   readingStatus: {
//     bookId: null,
//     isReading: false,
//     page: 1,
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
//       .addCase(removeFromLibrary.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(removeFromLibrary.fulfilled, (state, action) => {
//         state.isLoading = false;
//         state.library = state.library.filter(
//           (book) => book._id !== action.payload.id
//         );
//       })
//       .addCase(removeFromLibrary.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(startReadingBook.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(startReadingBook.fulfilled, (state, action) => {
//         console.log("Start reading successful:", action.payload);
//         state.isLoading = false;
//         state.readingStatus = {
//           bookId: action.payload.id,
//           isReading: true,
//           page: action.payload.page,
//         };
//       })
//       .addCase(startReadingBook.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(finishReadingBook.pending, (state) => {
//         state.isLoading = true;
//         state.error = null;
//       })
//       .addCase(finishReadingBook.fulfilled, (state, action) => {
//         console.log("Finish reading successful", action.payload);
//         state.isLoading = false;
//         state.readingStatus = {
//           bookId: null,
//           isReading: false,
//           page: 0,
//         };
//       })
//       .addCase(finishReadingBook.rejected, (state, action) => {
//         state.isLoading = false;
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
