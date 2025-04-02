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
      return { id: data.id };
    } catch (error) {
      console.error("Error deleting book:", error);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const startReadingBook = createAsyncThunk(
  "startReading",
  async ({ id, page }, thunkAPI) => {
    try {
      console.log(id, page);

      const { data } = await api.post("/books/reading/start", { id, page });
      return data;
    } catch (error) {
      console.error("Error response:", error.response);
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const finishReadingBook = createAsyncThunk(
  "finishReading",
  async ({ id, page }, thunkAPI) => {
    try {
      console.log(id, page);

      const { data } = await api.post("/books/reading/finish", { id, page });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || error.message
      );
    }
  }
);

export const getBookInfo = createAsyncThunk(
  "getBookInfo",
  async ({ id }, thunkAPI) => {
    try {
      const { data } = await api.get(`/books/${id}`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);