export const selectBooks = (state) => state.books.items;
export const selectIsLoading = (state) => state.books.isLoading;
export const selectError = (state) => state.books.error;
export const selectFilter = (state) => state.books.filter;
export const selectAddBook = (state) => state.books.library;
export const selectRemoveBook = (state) => state.books.library;

export const selectCurrentReadingBook = (state) => state.books?.currentReading || null;


export const selectReadingProgress = (state) => {
    const book = state.books?.items?.find((book) => book.status === "in-progress");
    return book?.progress?.[book.progress.length - 1] || null;
  };
  
