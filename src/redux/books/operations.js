import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/api";

export const fetchRecommendedBooks = createAsyncThunk(
  "fetchBooks",
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await api.get("/books/recommend", {
        params: { page, limit },
      });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addToLibrary = createAsyncThunk(
  "addBookToLibrary",
  async ({ book, id }, thunkAPI) => {
    try {
      const { data } = await api.post(`/books/add/${id}`, book);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const removeFromLibrary = createAsyncThunk(
  "removeBookFromLibrary",
  async ({ id }, thunkAPI) => {
    try {
      console.log(`Sending DELETE request to /books/remove/${id}`); // Лог для перевірки запиту
      const { data } = await api.delete(`/books/remove/${id}`);
      console.log("API Response Data:", data); // Лог для перевірки відповіді
      return data;
    } catch (error) {
      console.error("Error deleting book:", error); // Лог для помилки
      return thunkAPI.rejectWithValue(error.message); // Повідомлення про помилку
    }
  }
);


// export const removeFromLibrary = createAsyncThunk(
//   "removeBookFromLibrary",
//   async ({ id }, thunkAPI) => {
//     try {
//       const { data } = await api.delete(`/books/remove/${id}`);
//       return data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
