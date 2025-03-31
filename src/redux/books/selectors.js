export const selectBooks = (state) => state.books.items;
export const selectIsLoading = (state) => state.books.isLoading;
export const selectError = (state) => state.books.error;
export const selectFilter = (state) => state.books.filter;
export const selectAddBook = (state) => state.books.library;
export const selectRemoveBook = (state) => state.books.library;
