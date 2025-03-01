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
