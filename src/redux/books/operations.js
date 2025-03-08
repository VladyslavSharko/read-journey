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
      const { data } = await api.delete(`/books/remove/${id}`);
      return { _id: data.id };
    } catch (error) {
      console.error("Error deleting book:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
