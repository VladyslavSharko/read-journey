import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../config/api";

export const fetchRecommendedBooks = createAsyncThunk(
  "fetchBooks",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.get("/books/recommend");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
